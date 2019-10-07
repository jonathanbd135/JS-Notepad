const fs = require('fs')

// const book = {
//     title:'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const BookJSON =  JSON.stringify(book)
// //console.log(BookJSON)

// const parsedata = JSON.parse(BookJSON)
// console.log(parsedata.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.planet = 'Mars'
data.name = 'Johny boy'


const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)

 