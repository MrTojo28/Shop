import { TCartProduct } from "../../domain/product/Product"

export interface CartServiceInterface {

    initialization(): void 

    getProducts(): TCartProduct[] 

    addProduct(productId: number, count?: number): void 

    removeProduct(productId: number, removeAll?: boolean): void 

    clearProducts(): void
}
