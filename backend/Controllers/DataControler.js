const dbConn = require('../Config/Connection.db')
const bcrypt  =require('bcryptjs')
const ApiFormater = require('./Helper/ApiFormater')

module.exports = { 
   //ok 
   create:async (req,res,next)=>{
      const hash = await bcrypt.hashSync(req.body.password, 8)
         const data=[req.body.user_name,hash,req.body.full_name,req.body.city,req.body.status]
            const sqlquery = `INSERT INTO data_users (user_name,password,full_name,city,status) VALUES (?,?,?,?,?)`
            await  dbConn.query(sqlquery,data, async (err,rows)=>{
               try {
               res.send(new ApiFormater(200,"ok",rows))
            } catch (error) {
                  res.send(new ApiFormater(200,"error",err))
                  console.error(error)
               }
            })
         },
   //ok
   read:async (req,res,next)=>{
         
         const sqlquery = `SELECT * FROM data_users  ` // pagination LIMIT 100 OFFSET 3

         await dbConn.query(sqlquery,(err,rows)=>{
               try {
                  res.send(new ApiFormater(200,"ok",rows))
               } catch (error) {
                  res.send(new ApiFormater(502,"error",err))
               }
         })
      },
   update: async(req,res,next)=>{
      console.log(Object.keys( req.query) )
      const sqlquery = `UPDATE data_users (name,user_name,password) VALUES (?,?,?)`
      await  dbConn.query(sqlquery,[req.body.name,req.body.userName,hash], async(err,rows)=>{
         try {
         await   !err?res.send(new ApiFormater(200,'affected',rows)):res.send(new ApiFormater(502,'error',))
         } catch (error) {
            console.error(error)
         }
      })
   },
   //ok
   delete: async(req,res,next)=>{
      const sqlquery = `DELETE FROM data_users WHERE ${Object.keys(req.query)} = ${Object.values(req.query)}`
      await  dbConn.query(sqlquery, async(err,rows)=>{
         try {
         await   !err?res.send(new ApiFormater(200,'affected',rows)):res.send(new ApiFormater(502,'error',err))
         } catch (error) {
            console.error(error)
         }
      })
   },
   //ok
   search: async(req,res,next)=>{
         const sqlquery = `SELECT * FROM data_users WHERE user_name LIKE '%${Object.values(req.query)}%'`
         await  dbConn.query(sqlquery, async(err,rows)=>{
         try {
         await   !err?res.send(new ApiFormater(200,'affected',rows)):res.send(new ApiFormater(502,'error',err))
         } catch (error) {
            console.error(error)
         }
      })
   }



 }//object closing

