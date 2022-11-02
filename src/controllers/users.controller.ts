import { Request, Response } from "express";
import { dataSource } from "../config/ormconfig";
import { Users } from "../entities/user.entity";
import { HashedPassword , ComparedPassword} from "./../helpers/password"
import { stmp } from "../helpers/stmp";

export default {
   GET:async(req:Request,res:Response) => {
      try {

         const AllUsers = await dataSource.getRepository(Users).find()
         res.json(AllUsers)

      } catch (error) {

         console.log(error)
         res.sendStatus(500)
      }
   },
   NEW_USER:async(req:Request,res:Response) => {
      try {
         const { fullname, password , email } = req.body

         const HashPassword = HashedPassword(password)


         const { raw } = await dataSource
                                 .createQueryBuilder()
                                 .insert()
                                 .into(Users)
                                 .values({
                                    fullname: fullname,
                                    email:email,
                                    password: HashPassword
                                 })
                                 .returning('*')
                                 .execute()

         stmp('45',email)                        
         
         res.json(raw[0])
         
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   LOGIN_USER:async(req:Request,res:Response) => {
      try {
         const { email , password } = req.body

         res.json({
            status:200,
            token:""
         })

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   VERIFY_USER:async(req:Request,res:Response) => {
      try {
         const url_params = req.params.vtoken

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }

}