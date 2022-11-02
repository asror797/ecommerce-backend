import express from "express";
import router from "./routes";

const app:express.Application = express()
const PORT = 5000

app.use(express.json())
app.use(router)


app.get('/',(_,res) => {

   try {
      res.json({
         message:"Server is runing",
         status:200
      })
   } catch (error) {
      console.log(error)
      res.sendStatus(500)
   }

})


app.listen(PORT,() => {
   console.log(`Server is runing at ${PORT}`)
})