// function townName(){

//     let townNamesArr = ["Grimsby","Holmfirth","Cromer","Todmorden","Swordbreak","Wigston","Auctermunty","Calchester","Beckton","Aberuthven","Oldham","Blencalgo","MillerVille","Erast","Acomb","Lanercost","Bredon","Dundee","Athelney","Ballinamallard"]
//     let order = 2
//     let ngrams = {}
//     let beginnings = []
//     // document.querySelector('#globalButton').addEventListener('click', buttonAction)

//     function buttonAction(){
//         for (let j = 0; j < townNamesArr.length; j++) {
//             let txt = townNamesArr[j]
//                 for (let i = 0; i <= txt.length - order; i++) {
//                     let gram = txt.substring(i, i + order)
//                         if (i === 0) {
//                             beginnings.push(gram)
//                         }

//                         if (!ngrams[gram]) {
//                             ngrams[gram] = []
//                         }
//                             ngrams[gram].push(txt.charAt(i + order))
//                 }
//         }
      
//     }

//     function markovIt() {

//         let currentGram = random(beginnings)
//         let result = currentGram

//             for (let i = 0; i < 20; i++) {
//                 let possibilities = ngrams[currentGram]
//                 if (!possibilities) {
//                     break
//                 }
//                 let nextIndex = Math.floor(Math.random * possibilities)
//                 let next = possibilities[nextIndex]
//                 result += next
//                 let len = result.length
//                 currentGram = result.substring(len - order, len)
//             }

                
//     }
// }

// console.log(townName())

    

function getGrams(){
    
    let townNamesArr = ["Grimsby","Holmfirth","Cromer","Todmorden","Swordbreak","Wigston","Auctermunty","Calchester","Beckton","Aberuthven","Oldham","Blencalgo","MillerVille","Erast","Acomb","Lanercost","Bredon","Dundee","Athelney","Ballinamallard"]
    let order = 3
    let ngrams = []
    //Make a list of all of the n-grams. Find a method of taking each element within the array, making the strings into their own array of characters and then just using them by threes, or I find something like substring for elements in an array. Once this is done, we need to make objects of each of the three character groups.

    //     for(let i = 0; i < townNamesArr.length; i++){
    //         let gram = townNamesArr[i]
    //         let characters = gram.substring(order)
    //         ngrams.push(characters)
    //     }
    // console.log(getGrams())

    let result = townNamesArr.map(name => name.substring(order, order + 3))
    console.log(result)


}

console.log(getGrams())

// const str = "mozilla"
// console.log(str.substring(1,3))




// let townNamesArr = ["Grimsby","Holmfirth","Cromer","Todmorden","Swordbreak","Wigston","Auctermunty","Calchester","Beckton","Aberuthven","Oldham","Blencalgo","MillerVille","Erast","Acomb","Lanercost","Bredon","Dundee","Athelney","Ballinamallard"]
//     let order = 3
// let name = townNamesArr[0]
//     let characters = name.substring(0,order)
//     console.log(characters) 


