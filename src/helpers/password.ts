import bcrypt from "bcrypt"



export const HashedPassword = (a:string) => {
   return bcrypt.hash(a,10);
}


export const ComparedPassword = (password:string , Hash:string) => {
   return bcrypt.compare(password,Hash);
}



