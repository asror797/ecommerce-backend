import bcrypt from "bcrypt"



export const HashedPassword = (a:string) => {
   return bcrypt.hashSync(a,10);
}


export const ComparedPassword = (password:string , Hash:string) => {
   return bcrypt.compareSync(password,Hash);
}



