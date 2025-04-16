import { Service } from "typedi";


@Service()
export class AppController {
    private cartService = window.cartService;
    initialization(): void {
        this.cartService.initialization();
    }

}