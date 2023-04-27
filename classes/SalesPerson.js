const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales
    constructor(name, positiom,salary,clients){
        super(name,positiom,salary)
        this.clients = clients
        this.#totalSales = 0
    }
    getSalesNumber(){
        return this.#totalSales
    }
    makeSale(amount){
        this.#totalSales += amount
    }
}


module.exports = {
    SalesPerson,
}