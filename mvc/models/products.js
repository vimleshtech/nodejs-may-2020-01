class Product{

    constructor(pname,price){
        this.pname =pname;
        this.price=price;
    }

    getProduct(){
        return this.pname;
    }
    getPrice(){
        return this.price;
    }
}

module.exports = Product;