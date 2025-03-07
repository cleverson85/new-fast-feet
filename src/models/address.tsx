import { Base } from "./base";

export interface Address extends Base {
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
}