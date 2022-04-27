import React,{useEffect,useState} from 'react'
import './App.css';
import Tabs from './components/Tabs/Tab';

function App() {
  const [parties,setParties] = useState([]);
  const [cands,setCands] = useState([]);
  const [rel,setRel] = useState(true);

  const reld = () =>{
   setRel(!rel) 
  }

  useEffect(()=>{
    let url_party = "http://localhost:8080/getparties"
    let url_cand =  "http://localhost:8080/getcandidates"
    fetch(url_party,{
      method:"GET"
    })
    .then(response=>response.json())
    .then(data =>{
      console.log(data)
      setParties(data);
    })
    .then(()=>{
      fetch(url_cand,{
        method:"GET"
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        setCands(data)
      })
      .catch(err=>{
        console.log(err)
        window.alert("could not fetch details from DB")
      })
    })
    .catch(err=>{
      console.log(err)
      window.alert("could not fetch details from DB")
    })
  },[rel])

  return (
    <div className="App">
      <Tabs parties={parties} reld={reld} cands={cands}/>
    </div>
  );
}

export default App;
