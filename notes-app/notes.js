const chalk = require('chalk')
const fs = require ('fs')




const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note) => note.title===title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('Note title taken'))
    }else{
        console.log(chalk.red.inverse('Note title not taken'))
    }
    
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON =dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch (e){
        return []
    }
    
    
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !==title)
    
    if(notesToKeep.length < notes.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
}  

const listNodes = () =>{
    notes = loadNotes()
    console.log(chalk.green.inverse("yours notes!"))
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title))
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title===title)
    if(note){
        console.log(chalk.green.inverse("Title: " + note.title) )
        console.log(chalk.green.inverse("Body: " + note.body))
    }else{
        console.log(chalk.green.inverse("Note does not exist"))
    }
}  

module.exports = {
    addNote : addNote,
    removeNote: removeNote,
    listNodes:listNodes,
    readNote : readNote
}