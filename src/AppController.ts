import { Service, Inject } from "typedi";
import { type CartServiceInterface } from "./service/cart/CartServiceInterface";

@Service('AppController')
export class AppController {
    initialization(): void {
        this.cartService?.initialization();
        console.log(this.cartService)
    }

    @Inject('CartService')
    private cartService: CartServiceInterface;
}