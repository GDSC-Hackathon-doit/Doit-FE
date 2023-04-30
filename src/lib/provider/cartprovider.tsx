import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ThumbnailProp } from "../type/thumbnail-prop";
import { testData } from "../const/data";

interface CartContextProps {
  cartItems: ThumbnailProp[];
  setCartItems: Dispatch<SetStateAction<ThumbnailProp[]>>;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<ThumbnailProp[]>(testData);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
