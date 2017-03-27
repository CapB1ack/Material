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
    }

    mainCalcSale() {
        let totalPrice = this.sum(this.currentProducts, 'price');
        this._sale = angular.copy(this.salePercent);
        this.currentProducts.sort((a, b)=> {
            return parseFloat(b.price) - parseFloat(a.price);
        });
        this.currentProducts.map(el=> el.priceWithSale = this.productSaleAmount(totalPrice, el.price));

        let maxPrice = Math.max(...this.currentProducts.map(el => el.price));
        let maxIndexes =[];
        for(let i =0; i < this.currentProducts.length; i ++){
            if(this.currentProducts[i].price == maxPrice){
                maxIndexes.push(i)
            }
        }
        console.log('maxPrice', maxPrice, 'indexes', maxIndexes)

        while(this._sale){
            maxIndexes.map(el =>{
                if (this._sale >0){
                    this.currentProducts[el].price -= 1;
                    this._sale -=1;
                }
            })
        }
    }

    productSaleAmount(total, current){
        /**
         * 100% = salePercent2
         * percentPrice% = x
         * gfh
         */
        let percentPrice = 100 * current / total;
        let amountSale = Math.floor(percentPrice * this.salePercent / 100.0);
        this._sale -= amountSale;
        console.log(current, 'proc:', percentPrice, 'skidka', amountSale, 'round', Math.floor(amountSale))

        return  current - amountSale;
    }

    sum(items, prop) { return items.reduce((a, b) =>  +a + +b[prop], 0); }
}

export default HomeController;
