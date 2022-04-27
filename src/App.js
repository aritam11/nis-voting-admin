import React,{useEffect,useState} from 'react'
import './App.css';
import Tabs from './components/Tabs/Tab';

function App() {
  const [parties,setParties] = useState([]);
  const [rel,setRel] = useState(true);

  const reld = () =>{
   setRel(!rel) 
  }

  useEffect(()=>{
    let url = "http://localhost:8080/getparties"
    fetch(url,{
      method:"GET"
    })
    .then(response=>response.json())
    .then(data =>{
      console.log(data)
      setParties(data);
    })
    .catch(err=>{
      console.log(err)
    })
  },[rel])

  return (
    <div className="App">
      <Tabs parties={parties} reld={reld}/>
    </div>
  );
}

export default App;
