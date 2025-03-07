import { Address } from "./address";
import { Base } from "./base";

export interface Recipient extends Base {
  name: string;
  address: Address;
  phone: string;
  email: string;
}