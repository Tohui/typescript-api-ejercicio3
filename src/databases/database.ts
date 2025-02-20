import mysql from  "mysql2/promise"

export const connection  = mysql.createPool({
    database:"typescript_crud",
    host:"localhost",
    password:"",
    user:"root"
})