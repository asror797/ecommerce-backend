import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user"})
export class User {
   @PrimaryGeneratedColumn("uuid")
   id:string
}
