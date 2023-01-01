const dbConn = require('../Config/Connection.db')
const ApiFormater = require('./Helper/ApiFormater')
const bcrypt  =require('bcryptjs')
 module.exports = {  
   login:async (req,res,next)=>{
            const sqlquery = `SELECT * FROM users WHERE user_name=?`
            await  dbConn.query(sqlquery,[req.body.userName], async (error,rows)=>{
               try {
                  if(rows[0].user_name==req.body.userName){
                     let password = await bcrypt.compare(req.body.password,rows[0].password)
                     if(password){
                        res.send(new ApiFormater(200,'token',"a1aa2a3a4a5a6a7a8a9"))
                     }else{
                        res.send(new ApiFormater(400,'wrong password or username'))
                     }
                     
                  }else{
                     res.send(new ApiFormater(400,"wrong password or username"))
                  }
               } catch (error) {
                  console.error(error)
               }
            })
         },
   logout:(req,res,next)=>{
         
         if(queryKey.length-1>0){
            res.send(new ApiFormater(200,"pencarian tidak falid"))
            return
         }
         const sqlquery = `SELECT * FROM penjualan WHERE ${queryKey}= ?`

         dbConn.query(sqlquery,queryValue,(err,rows)=>{
            res.send({
               err:err,
               data:rows
            })
         })
      },
   register: async(req,res,next)=>{
      const hash = await bcrypt.hashSync(req.body.password, 8)
      const sqlquery = `INSERT INTO users (name,user_name,password) VALUES (?,?,?)`
      await  dbConn.query(sqlquery,[req.body.name,req.body.userName,hash], async(err,rows)=>{
         try {
         await   !err?res.send(new ApiFormater(200,'affected',rows)):res.send(new ApiFormater(502,'error',))
         } catch (error) {
            console.error(error)
         }
      })
   }



 }//object closing

