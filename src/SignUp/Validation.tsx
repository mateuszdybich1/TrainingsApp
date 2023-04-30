export function validateUsername(username:string, setUsernameError: React.Dispatch<React.SetStateAction<boolean>>, setUsernameErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    if(username.length == 0){
      setUsernameError(true);
      setUsernameErrorText("Empty username");
      return false;
    }
    else if(username.length > 15 ){
      setUsernameError(true);
      setUsernameErrorText("Username too long");
      return false;
    }
    else if(username.includes(' ')){
      setUsernameError(true);
      setUsernameErrorText("Username contains space(s)");
      return true;
    }
    else{
      setUsernameError(false);
      setUsernameErrorText("");
      return true;
    }
  }
  
  
 export function validateName(name:string, setNameError: React.Dispatch<React.SetStateAction<boolean>>, setNameErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    
    if(name.length == 0){
      setNameError(true);
      setNameErrorText("Empty Name");
      return false;
    }
    else if( name[0] === name[0].toLowerCase()){
      setNameError(true);
      setNameErrorText("Name must start with capital letter");
      return false;
    }
    else if(name.includes(' ')){
      setNameError(true);
      setNameErrorText("Name contains space(s)");
      return false;
    }
    else{
      setNameError(false);
      setNameErrorText("");
      return true;
    }
  }
  
 export function validateLastName(lastName:string, setLastNameError: React.Dispatch<React.SetStateAction<boolean>>, setLastNameErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    
    if(lastName.length == 0){
      setLastNameError(true);
      setLastNameErrorText("Empty Surname");
      return false;
    }
  
    else if( lastName[0] === lastName[0].toLowerCase()){
      setLastNameError(true);
      setLastNameErrorText("Surname must start with capital letter");
      return false;
    }
    else if(lastName.includes(' ')){
      setLastNameError(true);
      setLastNameErrorText("Surname contains space(s)");
      return false;
    }
    else{
      setLastNameError(false);
      setLastNameErrorText("");
      return true;
    }
  }
 export function validatePassword(password:string, setPasswordError: React.Dispatch<React.SetStateAction<boolean>>, setPasswordErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    
    const re = /[$&+,:;=?@#|'<>.^*()%!-]/;
  
    if(password.length == 0){
      setPasswordError(true);
      setPasswordErrorText("Empty password");
      return false;
    }
    else if(password.length < 6){
      setPasswordError(true);
      setPasswordErrorText("Password too short");
      return false;
    }
    else if(password.length > 15){
      setPasswordError(true);
      setPasswordErrorText("Password too long");
      return false;
    }
    else if(password.includes(' ')){
      setPasswordError(true);
      setPasswordErrorText("Password contains space(s)");
      return false;
    }
    else if(!re.test(password)){
      setPasswordError(true);
      setPasswordErrorText("Password should have at least one specific character");
      return false;
    }
    else{
      setPasswordError(false);
      setPasswordErrorText("");
      return true;
    }
  }

  export function validateStreet(street:string, setStreetError: React.Dispatch<React.SetStateAction<boolean>>, setStreetErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    
    if(street.length>0 && street[0] === street[0].toLowerCase()){
        setStreetError(true);
        setStreetErrorText("Street name should start with capital letter");
        return false;
      }
    else{
      setStreetError(false);
      setStreetErrorText("");
      return true;
    }
  }

  export function validateCity(city:string, setCityError: React.Dispatch<React.SetStateAction<boolean>>, setCityErrorText: React.Dispatch<React.SetStateAction<string>>):boolean{
    
    if( city.length>0 && city[0] === city[0].toLowerCase()){
        setCityError(true);
        setCityErrorText("City name should start with capital letter");
        return false;
      }
    else{
      setCityError(false);
      setCityErrorText("");
      return true;
    }
  }

  