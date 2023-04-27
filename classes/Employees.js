class Employees {
    #salary
    #isHired
    static #allEmployees = []
    constructor(name,position,salary){
        this.name = name 
        this.position = position
        this.#salary = salary
        this.#isHired = true;
        Employees.#allEmployees.push(this)
    }
    static getEmployees(){
        return this.#allEmployees
    }

    static getTotalPayroll() {
        let total = 0;
        for(let i = 0 ; i < this.#allEmployees.length; i ++){
            total += this.#allEmployees[i].getSalary();
        }
        return total;
      }
    getSalary(){
        return this.#salary
    }
    setSalary(amount){
        return this.#salary = amount
    }
    getStatus(){
        return this.#isHired
    }
    setStatus(command){
        if(command === 'fire'){
            return this.#isHired = false
        }
        else return this.#isHired = true
    }



    
}

module.exports = {
    Employees,
}