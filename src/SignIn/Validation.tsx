export function validatePassword(password:string, setPasswordError: React.Dispatch<React.SetStateAction<boolean>>, setPasswordErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    
    if(password.length == 0){
      setPasswordError(true);
      setPasswordErrorText("Empty password");
      return false;
    }
    else if(password.includes(' ')){
      setPasswordError(true);
      setPasswordErrorText("Password contains space(s)");
      return false;
    }
    else{
      setPasswordError(false);
      setPasswordErrorText("");
      return true;
    }
  }