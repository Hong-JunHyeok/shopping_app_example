import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useCookies } from 'react-cookie'; 
import { ProductType } from '../types';
import { getProduct } from '../utils/apis';

type CartsType = ProductType & { count: number };

const COOKIE_KEY = 'cart_data' as const;

const useCart = () => {
    const [cookies, setCookies] = useCookies([COOKIE_KEY]);
    const [carts, setCarts] = useState<CartsType[]>([]);

    const productIds = useMemo(() => (cookies[COOKIE_KEY] as string[]) ?? [], [cookies]);;

    const addCarts = (id: string) => {
      const nextCartIds = [...productIds, id];
        setCookies(
          COOKIE_KEY,
          nextCartIds,
          {
            path: '/',
          }
        );
    }
   
    useEffect(() => {
      if (productIds && productIds.length) {
        const requestList: Array<Promise<any>> = [];
        const requestIds = productIds.reduce(
          (acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1),
          new Map<string, number>()
        )

        Array.from(requestIds.keys()).forEach((id) => {
          requestList.push(getProduct(id));
        })
        Promise.all(requestList)
          .then((responseList) => {
            const cartsData: CartsType[] = responseList.map((response) => ({
              ...response.data.product,
              count: requestIds.get(response.data.product.id)
            }));
            setCarts(cartsData);
          })
      }
    }, [productIds]);
   
    const changeCount = (productId: string, mode: 'increase' | 'decrease') => {
      const index = productIds.lastIndexOf(productId);  
      if (index === -1) { return; }

      if (mode === 'decrease') {
        const tempArr = [...productIds];
        tempArr.splice(index, 1)
        
        // 0이하 방어코드
        if (!tempArr.includes(productId)) {
          return;
        }

        setCookies(
          COOKIE_KEY,
          tempArr,
          {
            path: '/',
          }
        );
      }

      if (mode === 'increase') {
        setCookies(
          COOKIE_KEY,
          [...productIds, productId],
          {
            path: '/',
          }
        );
      }
    };

    const clearProduct = (productId: string) => {
      setCookies(
        COOKIE_KEY,
        [...productIds].filter((id) => id !== productId),
        {
          path: '/',
        }
      );
    }

    return {
      carts, 
      addCarts,
      changeCount,
      clearProduct
    }
}

export default useCart;
