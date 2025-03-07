import { DeliveryMan } from "./delivery-man";
import { Base } from "./base";
import { Order } from "./order";
import { Recipient } from "./recipient";

export interface Delivery extends Base {
  order: Order;
  deliveryMan: DeliveryMan;
  recipient: Recipient;
  status: string;
  startDate: string;
  endDate: string;
}