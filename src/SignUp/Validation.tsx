
export function validateAddress(country: string, city:string, street:string) : boolean {
  if(country ===""){
      if(city ==="" && street==="")
      {
        return true;
      }    
      else {return false;}        
  }
  else if(country!==""){
      if(city!=="" && street!=="")
      {
        return true;
      }
      else {return false;}
  }
  else {return false;}
}