import { Request, Response } from "express";
import { dataSource } from "../config/ormconfig";
import { Users } from "../entities/user.entity";


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
         const { fullname, password } = req.body
         // const newUser = await dataSource
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}