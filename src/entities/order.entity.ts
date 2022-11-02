import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";



@Entity({name:"order"})
export class Order  {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:"varchar",
      length:32
   })
   description:string

}
