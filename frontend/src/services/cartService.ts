import { Product } from "../models/Product";
import { ShoppingCart } from "../models/ShoppingCart";

export const getAllProducts = async (): Promise<Product[]> =>
  (await fetch("localhost:3000/products")).json();

export const createShoppingCart = async (
  cartData: ShoppingCart
): Promise<Product[]> =>
  (
    await fetch("localhost:3000/shopping-carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
  ).json();
