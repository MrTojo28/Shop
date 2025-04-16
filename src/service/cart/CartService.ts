import { Service } from "typedi";
import { TCartProduct } from "../../domain/product/Product"

@Service()
export class CartService {

    private currentProducts: TCartProduct[] = [];

    initialization(): void {
        const rawData = localStorage.getItem(PRODUCTS_STORAGE_KEY);
        if( rawData ) {
            this.currentProducts = JSON.parse(rawData);
        } else {
            localStorage.setItem(PRODUCTS_STORAGE_KEY,JSON.stringify([]))
        }
    }

    getProducts(): TCartProduct[] {
        const rawData = localStorage.getItem(PRODUCTS_STORAGE_KEY);
        if(rawData) this.currentProducts = JSON.parse(rawData);
        return this.currentProducts;
    }


    addProduct(productId: number, count?: number): void {
        const indexOfProduct = this.currentProducts.findIndex(item=>item.id===productId)
        if(indexOfProduct!==-1) {
            this.currentProducts[indexOfProduct].count = this.currentProducts[indexOfProduct].count + (count || 1);
        } else {
            this.currentProducts.push({id:productId,count:1})
        }
        localStorage.setItem(PRODUCTS_STORAGE_KEY,JSON.stringify(this.currentProducts))
    }

    removeProduct(productId: number, removeAll?: boolean): void {
        const indexOfProduct = this.currentProducts.findIndex(item=>item.id===productId)
        if(indexOfProduct!==-1) {
            return;
        }
        if(removeAll) {
            this.currentProducts.splice(indexOfProduct,1);
        } else {

        }
    }

    clearProducts(): void {
        this.currentProducts = [];
        localStorage.removeItem(PRODUCTS_STORAGE_KEY)
    }
}

const PRODUCTS_STORAGE_KEY = 'products';