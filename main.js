
//Create City Generator with name, types, and population

    //To create city names we will need to make a city name generator api
    //To create city types we through the different types of cities in an array and choose a random index number from that. Each city type should have a range of numbers for population sizes. When a city type is choosen then a randomly generated population number is also shown
    //Throw all of this information into an object
    //Display name, type, and population in the DOM

    //Population by settlement size
        //Village: 20-900
        //Town: 901-5000
        //Large City: 5001-25000
        //Metropolis: 25001-75000


//Math.floor(Math.random() * (max-min + 1)) = min
// let smallCity = Math.floor(Math.random() * (12000-5001) + 5001)

// console.log(smallCity)
// settlement, settlement size, population

//Each time a new settlement is made, the array in the settlement class should choose between the four population types. Once that type is chosen, the properties of that type should give random values. So that means that the settlement class array should each be a keyword object such as town, city, etc, and whenever that keyword is chosen it will spit out the name, type, size, and population and display it one the DOM

//When the user clicks a button a new settlement object should be made

class SettlementType {
    constructor(name, settlementSize, population){
        this.name = name
        this.settlementType = settlementType
        this.settlementSize = settlementSize
        this.population = population
    }

    static generateRandomName(){

    }

    static generateRandomSettlementSize(){

    }

    static generateRandomPopulation(){
        
    }
}

class Settlement {
    constructor(){
        this._settlementTypeArray = [
            new SettlementType('thorp', 20-80, )]
    }

    get settlementType(){
        return this._settlementType
    }

    get randomSettlement(){
        return this.randomSettlement()
    }

    randomSettlement(){
       let settlementIndex = Math.floor(Math.random() * this._settlementTypeArray.length)
        let randomSettlementType = this._settlementType[settlementIndex]
        return document.querySelector('#test').innerText = randomSettlementType
    }
   
}

const newSettlement = new Settlement()
newSettlement.randomSettlement()




