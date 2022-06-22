//importar o pacote mongoose
const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:Nutella16@fiaptecnico.ichra.mongodb.net/todo_list') 
} 

module.exports = conn
    