
export function setUsernameState (username:string, setUsernameError: React.Dispatch<React.SetStateAction<boolean>>
  ,setUsernameErrorText: React.Dispatch<React.SetStateAction<string>>)
  {
    if(username.length == 0)
    {
      setUsernameError(true);
      setUsernameErrorText("Empty username");
    }
    else if(username.length > 15 )
    {
      setUsernameError(true);
      setUsernameErrorText("Username too long");
    }
    else if(username.includes(' '))
    {
      setUsernameError(true);
      setUsernameErrorText("Username contains space(s)");
    }
    else{
      setUsernameError(false);
      setUsernameErrorText("");
    }
  }
   
 export function setNameState(name:string, setNameError: React.Dispatch<React.SetStateAction<boolean>>
  , setNameErrorText: React.Dispatch<React.SetStateAction<string>>)
  {
    if(name.length == 0)
    {
      setNameError(true);
      setNameErrorText("Empty Name");
    }
    else if( name[0] === name[0].toLowerCase())
    {
      setNameError(true);
      setNameErrorText("Name must start with capital letter");
    }
    else if(name.includes(' '))
    {
      setNameError(true);
      setNameErrorText("Name contains space(s)");
    }
    else
    {
      setNameError(false);
      setNameErrorText("");
    }
  }
  
 export function setLastNameState(lastName:string, setLastNameError: React.Dispatch<React.SetStateAction<boolean>>
  , setLastNameErrorText: React.Dispatch<React.SetStateAction<string>>)
  {
    if(lastName.length == 0)
    {
      setLastNameError(true);
      setLastNameErrorText("Empty Surname");
    }
  
    else if( lastName[0] === lastName[0].toLowerCase())
    {
      setLastNameError(true);
      setLastNameErrorText("Surname must start with capital letter");
    }
    else if(lastName.includes(' '))
    {
      setLastNameError(true);
      setLastNameErrorText("Surname contains space(s)");
    }
    else
    {
      setLastNameError(false);
      setLastNameErrorText("");
    }
  }
  

 export function setPasswordState(password:string, setPasswordError: React.Dispatch<React.SetStateAction<boolean>>
  , setPasswordErrorText: React.Dispatch<React.SetStateAction<string>>)
  {
    const re = /[$&+,:;=?@#|'<>.^*()%!-]/;

    if(password.length == 0)
    {
      setPasswordError(true);
      setPasswordErrorText("Empty password");
    }
    else if(password.length < 6)
    {
      setPasswordError(true);
      setPasswordErrorText("Password too short");
    }
    else if(password.includes(' '))
    {
      setPasswordError(true);
      setPasswordErrorText("Password contains space(s)");
    }
    else if(!re.test(password))
    {
      setPasswordError(true);
      setPasswordErrorText("Password should have at least one specific character");
    }
    else
    {
      setPasswordError(false);
      setPasswordErrorText("");
    }
  }

  export function setStreetState(street:string, setStreetError: React.Dispatch<React.SetStateAction<boolean>>
    , setStreetErrorText: React.Dispatch<React.SetStateAction<string>>)
    {
    
    if(street.length>0 && street[0] === street[0].toLowerCase())
    {
      setStreetError(true);
      setStreetErrorText("Street name should start with capital letter");
    }
    else
    {
      setStreetError(false);
      setStreetErrorText("");
    }
  }

  export function setCityState(city:string, setCityError: React.Dispatch<React.SetStateAction<boolean>>
    , setCityErrorText: React.Dispatch<React.SetStateAction<string>>){
    
    if( city.length>0 && city[0] === city[0].toLowerCase())
    {
      setCityError(true);
      setCityErrorText("City name should start with capital letter");
    }
    else
    {
      setCityError(false);
      setCityErrorText("");
    }
  }



  