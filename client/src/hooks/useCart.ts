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
      const nextCarts = [...productIds, id];
        setCookies(
          COOKIE_KEY,
          nextCarts,
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
   
    return {
        carts, 
        addCarts
    }
}

export default useCart;
