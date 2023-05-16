

export interface UserData
{
  username:string, 
  name:string,
  lastname: string,
  email:string,
  password:string,
  isTeacher:boolean,
  country:string,
  city:string;
  street:string
}

export function sendData(data: UserData)
{
  console.log(data.isTeacher);
}