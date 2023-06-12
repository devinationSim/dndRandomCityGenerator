// let RiTa = require('rita');
// let rhymes = RiTa.rhymes('sweet');
// console.log(rhymes);

// let data = RiTa.analyze("The elephant took a bite!");
// console.log(data);

//Create City Generator with name, types, and population

    //To create city names we will need to make a city name generator api
    //To create city types we through the different types of cities in an array and choose a random index number from that. Each city type should have a range of numbers for population sizes. When a city type is choosen then a randomly generated population number is also shown
    //Throw all of this information into an object
    //Display name, type, and population in the DOM

    //Population by settlement size
        //Village: 20-900
        //Town: 901-5000
        //City: 5001-25000
        //Metropolis: 25001-75000

//Code to remember

//Math.floor(Math.random() * (max-min + 1)) = min
// let smallCity = Math.floor(Math.random() * (12000-5001) + 5001)
// console.log(smallCity)
// settlement, settlement size, population

//console.log(Object.values(objectName))
//console.log(Object.keys(objectName))

//Each time a new settlement is made, the array in the settlement class should choose between the four population types. Once that type is chosen, the properties of that type should give random values. So that means that the settlement class array should each be a keyword object such as town, city, etc, and whenever that keyword is chosen it will spit out the name, type, size, and population and display it one the DOM

//When the user clicks a button a new settlement object should be made








class Settlement { //The main settlement object generator
    constructor(settlementName, settlementTypeArray, settlementSize, population){
        this._settlementName = settlementName
        this._settlementTypeArray = [
            new SettlementType('thorp', 20-80, )]
        this._settlementSize = settlementSize
        this._population = population
    }
}

    

    class SettlementName { //Possible Additions, town names by race
        constructor(settlementName){
            this.settlementName = settlementName
        }

        villageName(){

        }

        townName(){

            let townNamesArr = ["Grimsby","Holmfirth","Cromer","Todmorden","Swordbreak","Wigston","Auctermunty","Calchester","Beckton","Aberuthven","Oldham","Blencalgo","MillerVille","Erast","Acomb","Lanercost","Bredon","Dundee","Athelney","Ballinamallard"]
            let order = 2
            let ngrams = {}
            let beginnings = []
            // document.querySelector('#globalButton').addEventListener('click', buttonAction)

            function buttonAction(){
                for (let j = 0; j < townNamesArr.length; j++) {
                    let txt = townNamesArr[j]
                        for (let i = 0; i <= txt.length - order; i++) {
                            let gram = txt.substring(i, i + order)
                                if (i === 0) {
                                    beginnings.push(gram)
                                }

                                if (!ngrams[gram]) {
                                    ngrams[gram] = []
                                }
                                    ngrams[gram].push(txt.charAt(i + order))
                        }
                }
                console.log(buttonAction())
            }

            function markovIt() {

                let currentGram = random(beginnings)
                let result = currentGram

                    for (let i = 0; i < 20; i++) {
                        let possibilities = ngrams[currentGram]
                        if (!possibilities) {
                            break
                        }
                        let nextIndex = Math.floor(Math.random * possibilities)
                        let next = possibilities[nextIndex]
                        result += next
                        let len = result.length
                        currentGram = result.substring(len - order, len)
                    }

                        
            }
        }

        }

        cityName(){

        }

        metropolisName(){

        }


   



    let lancercoast = new SettlementName()
    lancercoast.townName()

    class SettlementType  { //Use Code down below
        constructor(settlementType){
            this._settlementType = settlementType
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

    class SettlementSize {
        constructor(){
            this._settlementSize = settlementSize
        }
    }

//For the Population name generator, I want it to generate names based on race and based on gender. So there will be empty arrays for each race and the gender within each race, and they will be populated by the randomly generated names from the markov chains.

    class Population {
        constructor(){
            this.population = this.population
        }
    }
    
   


// const newSettlement = new Settlement()
// newSettlement.randomSettlement()




