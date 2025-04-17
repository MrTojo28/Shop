import { Service } from "typedi";
import { TCartProduct, TProduct } from "../../domain/product/Product";
import { Products } from "../../data/Products";

@Service()
export class ProductsCartController {
    private cartService = window.cartService;

    private setData: any;

    getDataSetter(func: any) {
        this.setData = func;
    }

    productsData: TProduct[];
    
    loadData(): void {
        const storageData = this.cartService.getProducts() as TCartProduct[],
            idsData = storageData.map(item=>item.id)
        const products = Products.filter(item=>idsData.includes(item.id));
        this.productsData = products.map(item=>{
            const count = storageData.find(i=>i.id===item.id)?.count;
            item.count = count || 1;
            return item;
        })
        this.setData?.(this.productsData)
    }

    addProduct(id:number): void {
        this.cartService.addProduct(id,1);
        this.loadData();
    }

    removeProduct(id:number): void {
        this.cartService.removeProduct(id);
        this.loadData();
    }

    clearCart(): void {
        this.cartService.clearProducts();
        this.loadData();
    }

    summ(): number {
        let summ = 0;
        this.productsData.forEach(item=>{
            summ+=(item?.count||1)*item.price;
        })
        return summ;
    }

}