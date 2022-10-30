import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";




@Entity({name:"category"})
export class Category {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:"varchar",
      length:32,
      nullable:false
   })
   category_name:string
}