import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './Party.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection:"column"
};

const AddPartyModal = ({reld}) => {
  const [open, setOpen] = React.useState(false);
  const [partyName, setPartyName] = React.useState("");
  const [partyAbbr, setPartyAbbr] = React.useState("");
  const [imageLink, setImageLink] = React.useState("");


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nameChange = (e) =>{
    setPartyName(e.target.value)
  }

  const abbrChange = (e) =>{
    setPartyAbbr(e.target.value)
  }

  const imageChange = (e) =>{
    setImageLink(e.target.value)
  }

  const postAddParty = () =>{
    reld()
    let postBody = {
      name:partyName,
      abbr:partyAbbr,
      image:imageLink
    }

    let url = "http://localhost:8080/addparty"
    fetch(url,{
      method:"POST",
      mode:'cors',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(postBody)
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data["message"])
    })
    .catch(err =>{
      window.alert("There was an issue")
      console.log(err)
    })


  }


  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{mt:2}} >Add Party</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Party
          </Typography>
          <TextField onChange={nameChange} id="outlined-basic" label="Name" variant="outlined" fullWidth margin="normal"/>
          <TextField onChange={abbrChange} id="outlined-basic" label="Abbreviation" variant="outlined" fullWidth margin="normal"/>
          <TextField onChange={imageChange} id="outlined-basic" label="Logo link" variant="outlined" fullWidth margin="normal"/>
          <Button onClick={postAddParty} variant="contained" sx={{mt:2}} >Add Party</Button>
        </Box>
      </Modal>
    </div>
  );
}


const PartyCard = ({name, abbr, image}) =>{
  return(
    <div className='partyoption'>
            <Card sx={{ width: 320, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'16px' }}>
                <CardContent>
                    <img src={image}/>
                    <Typography gutterBottom variant="h3" component="div">
                    {abbr}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                </CardContent>
            </Card>
      </div>
  )
}



const Party = ({parties,reld}) =>{
  console.log("parties",parties)
  return(
    <div>
    <div id="partyCont">
      {
        parties.map((party)=>{
          return <PartyCard key={party.name} name={party.name} abbr={party.abbr} image={party.logo}/>
        })
      }
      
    </div>
    <AddPartyModal reld={reld}/>
    </div>
  )
}

export default Party;