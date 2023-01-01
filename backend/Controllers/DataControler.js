const dbConn = require('../Config/Connection.db')
const { search } = require('../Routes/Auth')
const ApiFormater = require('./Helper/ApiFormater')

module.exports = { 
   //ok 
   create:async (req,res,next)=>{
         const data=[req.body.user_name,req.body.password,req.body.full_name,req.body.city,req.body.status]
            const sqlquery = `INSERT INTO data_users (user_name,password,full_name,city,status) VALUES (?,?,?,?,?)`
            await  dbConn.query(sqlquery,data, async (err,rows)=>{
               try {
                  console.log(rows)
               res.send(new ApiFormater(200,"ok",rows))
            } catch (error) {
                  res.send(new ApiFormater(200,"error",err))
                  console.error(error)
               }
            })
         },
   //ok
   read:async (req,res,next)=>{
         
         const sqlquery = `SELECT * FROM data_users `

         await dbConn.query(sqlquery,(err,rows)=>{
               try {
                  res.send(new ApiFormater(200,"ok",rows))
               } catch (error) {
                  res.send(new ApiFormater(502,"error",err))
               }
         })
      },
   update: async(req,res,next)=>{
      const hash = await bcrypt.hashSync(req.body.password, 8)
      const sqlquery = `INSERT INTO users (name,user_name,password) VALUES (?,?,?)`
      await  dbConn.query(sqlquery,[req.body.name,req.body.userName,hash], async(err,rows)=>{
         try {
         await   !err?res.send(new ApiFormater(200,'affected',rows)):res.send(new ApiFormater(502,'error',))
         } catch (error) {
            console.error(error)
         }
      })
   },
   delete: async(req,res,next)=>{
      const hash = await bcrypt.hashSync(req.body.password, 8)
      const sqlquery = `INSERT INTO users (name,user_name,password) VALUES (?,?,?)`
      await  dbConn.query(sqlquery,[req.body.name,req.body.userName,hash], async(err,rows)=>{
         try {
         await   !err?res.send(new ApiFormater(200,'affected',rows)):res.send(new ApiFormater(502,'error',))
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

