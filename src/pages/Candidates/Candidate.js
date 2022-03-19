import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Voteoption = () =>{
    return(
        <div className='Voteoption'>
            <Card sx={{ maxWidth: 345,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'16px' }}>
                <CardContent>
                    {/* <img src={BJP}/> */}
                    <Typography gutterBottom variant="h5" component="div">
                    Bhartiya Janta Party
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                    Candidate name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained'>Vote</Button>
                </CardActions>
            </Card>
        </div>
    )
}




function Candidates() {
  return (
    <div>
        <Voteoption/>
    </div>
  )
}

export default Candidates