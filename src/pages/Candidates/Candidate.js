import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicTable from '../../components/Basictable/BasicTable';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const BasicModal = ({parties})=> {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = React.useState("");
    const [cons, setCons] = React.useState(0);
    const [party, setParty] = React.useState("");

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
  

    const nameChange = (e) =>{
      setName(e.target.value)
    }
  
    const consChange = (e) =>{
      setCons(e.target.value)
    }
  
    const partyChange = (e) =>{
      setParty(e.target.value)
    }




    const postAddCand = () =>{
      // reld()
      let postBody = {
        name:name,
        cons:cons,
        party:party
      }
      setParty = ""
      let url = "http://localhost:8080/addcandidate"
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
      <Button onClick={handleOpen} variant="contained" sx={{mt:2}} >Add Candidate</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Candidate
          </Typography>
          <TextField onChange={nameChange} id="outlined-basic" label="Name" variant="outlined" fullWidth margin="normal"/>
          <TextField onChange={consChange} id="outlined-basic" label="Constituency" variant="outlined" fullWidth margin="normal"/>
          <TextField onChange={partyChange} id="outlined-basic" label="Party" variant="outlined" fullWidth margin="normal"/>
          <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Party</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={party}
            label="Party"
            onChange={partyChange}
            
          >
            {
            parties.map((party)=>{
              return <MenuItem value={party.abbr}>{party.abbr}</MenuItem>
            })
            }
          </Select>
        </FormControl>
          <Button onClick={postAddCand} variant="contained" sx={{mt:2}} >Add Candidate</Button>
        </Box>
      </Modal>
      </div>
    );
  }







function Candidates({parties,reld}) {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    let rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
      
  return (
    <div>
        <BasicTable rows={rows} />
        <BasicModal parties={parties}/>
        {/* <Voteoption/> */}
    </div>
  )
}

export default Candidates