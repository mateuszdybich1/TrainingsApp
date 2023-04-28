import Typography from "@mui/material/Typography";

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Trainigs App '}
        
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;