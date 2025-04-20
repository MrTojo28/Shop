import { Service } from "typedi";

@Service()
export class CatalogController {
    private cartService = window.cartService;

    addProduct(id:number): void {
        this.cartService.addProduct(id,1);
    }
}