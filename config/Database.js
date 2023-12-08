
import {Sequelize} from "sequelize";

const db = new Sequelize('back','root','',{
    host: "localhost",
    dialect: "mysql"
}); 
db.createSchema('back', { ifNotExists: true })
.then (success=>{
    
}).catch (err=>{
    
})
export default db;