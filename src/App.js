import React from "react";
import {Card, CardContent, Typography,} from "@mui/material";
import {Home} from "./Components/Home"
import "./Components/common.css"

function App() {
  return(
   <Card>
    <CardContent>
      <Typography variant="h3" component="h3">Math Fun App</Typography>
      <Home /> 
    </CardContent>
   </Card>
  )
     
  

}

export default App;
