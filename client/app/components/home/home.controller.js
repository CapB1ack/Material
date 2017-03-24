/**
 * @ngdoc class
 * @name HomeController
 *
 * @description
 * controller home component; using one-way data flow;
 */

class HomeController {
    constructor() {
        'ngInject';
        this.newProduct = {};
        this.currentProducts = [];
        this.salePercent = 10;
    }

    clearNewProd(){
        this.newProduct = {};
    }

    onAddProduct(product){
        this.currentProducts.push(product);
        this.clearNewProd();
        this.calculateSales();
    }

    calculateSales() {
        let totalPrice = this.sum(this.currentProducts, 'price');
        this.currentProducts.map(el=> el.priceWithSale = this.productSaleAmount(totalPrice, el.price))
    }

    productSaleAmount(total, current){
        /**
         * 100% = salePercent
         * percentPrice% = x
         * gfh
         */
        let percentPrice = 100 * current / total;
        let amountSale = percentPrice * this.salePercent / 100.0 ;
        console.log(current, 'proc:', percentPrice, 'skidka', amountSale)
        return current - amountSale;



    }

    sum(items, prop) { return items.reduce((a, b) =>  +a + +b[prop], 0); }
}

export default HomeController;
