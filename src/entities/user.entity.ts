import { Entity , Column , PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn} from "typeorm";

@Entity({name:"user"})
export class Users {
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
   email:string

   // User Address Info Column
   @Column({
      type:"varchar",
      length:512,
      nullable:true
   })

   // User Phone Number Column
   @Column({
      type:"varchar",
      length:64,
      nullable:true
   })

   // User Password Collumn
   @Column({
      type:"varchar",
      length:1024,
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
      type:"timestamptz",
      nullable:false
   })
   createdAt:Date

   // User Data Updated Date Column
   @UpdateDateColumn({
      type:"timestamptz",
      nullable:false
   })
   updatedAt:Date
}

