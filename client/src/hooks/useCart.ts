import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useCookies } from 'react-cookie'; 
import { ProductType } from '../types';
import { getProduct } from '../utils/apis';

const COOKIE_KEY = 'cart_data' as const;

const useCart = () => {
    const [cookies, setCookies] = useCookies([COOKIE_KEY]);
    const [carts, setCarts] = useState<ProductType[]>([]);

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
         productIds.forEach((id) => {
          requestList.push(getProduct(id));
        })
        Promise.all(requestList)
          .then((response) => {
            const cartsData: ProductType[] = response.map((item) => item.product);
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
