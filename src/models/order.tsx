import { Base } from "./base";
import { Product } from "./product";

export interface Order extends Base {
  product: Product;
  status: string;
}