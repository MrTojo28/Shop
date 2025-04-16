import { Service } from "typedi";


@Service()
export class ProductCardController {
    private cartService = window.cartService;
    addToCart(id: number): void {
        this.cartService.addProduct(id,1);
    }

}