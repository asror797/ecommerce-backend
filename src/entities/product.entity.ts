import { Entity , Column , PrimaryGeneratedColumn , UpdateDateColumn , CreateDateColumn } from "typeorm";



@Entity({name:"products"})
export class Products {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:"varchar",
      length:256,
      nullable:false
   })
   name:string

   @Column({
      type:"varchar",
      length:512,
      nullable:false
   })
   description:string

   @CreateDateColumn()
   createdAt:string

   @UpdateDateColumn()
   updatedAt:string
}