import React from 'react';
import {Link} from "react-router-down";
import { Grid, Button, CardContent, Typography } from "@mui/material";

export const TopNav = () => {
    return (
        <React.Fragment>
        <Grid container spacing={2}>
         <Grid item xs={2} className="img">
                <img src="Images/Pickupbizlogo.jpg" width={100}alt="Pickupbiz" />
         </Grid>
         <Grid itme xs={1}>
              <Link to="Number" className="tabnav">
             <Button classname="tabnav" variant="contained" color="error">Number</Button>
             </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="tables" className="tabnav" >  
          <Button className="tabnav"  variant="contained" color="success">
             Tables
          </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="Square" className="tabnav" >  
          <Button className="tabnav"  variant="contained" color="warning">
             Square
          </Button>
          </Link>
        </Grid>
        <CardContent>
            <Typography>

            </Typography>
        </CardContent>
        
        </Grid>
        
        </React.Fragment>
            
        
    );
};

