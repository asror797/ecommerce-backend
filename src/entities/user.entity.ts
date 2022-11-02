import { Entity , Column , PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn} from "typeorm";

@Entity({name:"user"})
export class User {
   @PrimaryGeneratedColumn("uuid")
   id:string

   // User Fullname Column
   @Column({
      type:"varchar",
      length:128,
      nullable:false
   })
   fullname:string

   // User Email Column
   @Column({
      type:"varchar",
      length:128,
      nullable:false
   })
   emial:string

   // User Password Collumn
   @Column({
      type:"text",
      nullable:false
   })
   password:string

   // User Status Column
   @Column({
      type:"boolean",
      default:false
   })
   isVerified:Boolean

   // User Data Created Date Column
   @CreateDateColumn({
      type:"time",
      nullable:false
   })
   createdAt:string

   // User Data Updated Date Column
   @UpdateDateColumn({
      type:"time",
      nullable:false
   })
   updateAt:string
}

