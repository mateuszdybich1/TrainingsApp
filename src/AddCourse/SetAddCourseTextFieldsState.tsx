export function validateCourse (courseName:string, setCourseNameError: React.Dispatch<React.SetStateAction<boolean>>
    ,setCourseNameErrorText: React.Dispatch<React.SetStateAction<string>>) : boolean
    {
      if(courseName === "")
      {
        setCourseNameError(true);
        setCourseNameErrorText("Empty course name");
        return false;
      }
      else{
        setCourseNameError(false);
        setCourseNameErrorText("");
        return true;
      }
    }

    export function validateLocation (Location:string, locationError: React.Dispatch<React.SetStateAction<boolean>>
        ,setLocationErrorText: React.Dispatch<React.SetStateAction<string>>) : boolean
        {
          if(Location.length === 0)
          {
            locationError(true);
            setLocationErrorText("Empty course location");
            return false;
          }
          else{
            locationError(false);
            setLocationErrorText("");
            return true;
          }
        }

export function validateCourseLevel (courseLevel:string, setCourseLevelError: React.Dispatch<React.SetStateAction<boolean>>
    ,setCourseLevelErrorText: React.Dispatch<React.SetStateAction<string>>) : boolean
    {
        if(courseLevel ==="")
        {
        setCourseLevelError(true);
        setCourseLevelErrorText("Empty course Level");
        return false;
        }
        else{
        setCourseLevelError(false);
        setCourseLevelErrorText("");
        return true;
        }
    }

export function validateTrainerName (trainerName:string, setTrainerNameError: React.Dispatch<React.SetStateAction<boolean>>
    ,setTrainerNameErrorText: React.Dispatch<React.SetStateAction<string>>) : boolean
    {
        if(trainerName ==="")
        {
        setTrainerNameError(true);
        setTrainerNameErrorText("Empty trainer name");
        return false;
        }
        else{
        setTrainerNameError(false);
        setTrainerNameErrorText("");
         return true;
        }
    }
    


