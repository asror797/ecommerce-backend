import { Entity , Column , PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn, ManyToMany } from "typeorm";



@Entity({name:"category"})
export class Category {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:"varchar",
      length:64,
      nullable:false
   })
   category_name:string

   @CreateDateColumn({
      type:'timestamptz',
      nullable:false
   })
   createdAt:Date

   @UpdateDateColumn({
      type:'timestamptz',
      nullable:false
   })
   updatedAt:Date
   
}