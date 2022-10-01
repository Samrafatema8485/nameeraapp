import React, {useState} from 'react';
import {Grid, Card, CardContent, TextField, Typography,} from "@mui/material"

export const NextNum = () => {
    const [num,setNum]=useState("");
    return (

        <React.Fragmen>
        <Card>
        <CardContent>
            <Grid container spacing={3}
            <Grid item xs={6}>
            Number
            </Grid>
            <Grid item xs={6}>
            Next Number
            </Grid>
            <Grid item xs={6}
             <TextField label="Enter Number"  
             variant="outlined"
             onchange={(e)=>setNum(e.target value)} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h2">{Number(num)+1}</Typography>
            </Grid>
            </Grid>
            </CardContent>
            </Card>
            
        </React.Fragment>
            
        
    );
};

export default NextNum;