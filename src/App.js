import React,{useEffect,useState,Fragment} from "react";
import logo from './logo.svg';
import './App.css';
import Btn from "./components/btn";
import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.production.min";
function App() {
  const [state,setState]=useState("X");
  const [winner,setWinner]=useState("");
  function change(){
    if(state==="O"){
      setState("X");
    }else{
      setState("O");
    }
  }  
  useEffect(isEnd,[state]);
  function isEnd(){
    const t=document.querySelectorAll('.btn');
    try{
    if(t[0].innerHTML===t[1].innerHTML&&t[1].innerHTML===t[2].innerHTML&&t[0].innerHTML!=""){
      setWinner(t[0].innerHTML+" is winner.");
    }
    else if(t[3].innerHTML===t[4].innerHTML&&t[4].innerHTML===t[5].innerHTML&&t[5].innerHTML!=""){
      setWinner(t[3].innerHTML+" is winner.");
    }
    else if(t[6].innerHTML===t[7].innerHTML&&t[7].innerHTML===t[8].innerHTML&&t[8].innerHTML!=""){
      setWinner(t[8].innerHTML+" is winner.");
    }
    else if(t[0].innerHTML===t[3].innerHTML&&t[3].innerHTML===t[6].innerHTML&&t[6].innerHTML!=""){
      setWinner(t[6].innerHTML+" is winner.");
    }
    else if(t[1].innerHTML===t[4].innerHTML&&t[4].innerHTML===t[7].innerHTML&&t[7].innerHTML!=""){
      setWinner(t[7].innerHTML+" is winner.");
    }
    else if(t[2].innerHTML===t[5].innerHTML&&t[5].innerHTML===t[8].innerHTML&&t[8].innerHTML!=""){
      setWinner(t[8].innerHTML+" is winner.");
    }
    else if(t[0].innerHTML===t[4].innerHTML&&t[4].innerHTML===t[8].innerHTML&&t[8].innerHTML!=""){
      setWinner(t[8].innerHTML+" is winner.");
    }
    else if(t[2].innerHTML===t[4].innerHTML&&t[4].innerHTML===t[6].innerHTML&&t[6].innerHTML!=""){
      setWinner(t[6].innerHTML+" is winner.");
    }
    else{
    let ans=false;
    t.forEach((x)=>{
      if(x.innerHTML===""){
        ans=true;
      }
    })
    if(!ans){
      setWinner("The game result is draw.");
    }
  }
  }
  catch(e){

  }

  }
  return (
    <Fragment>
      <h1 className="centerText">XO Game</h1>
    <div className="rootContainer" >
      <div className="rowContainer">
        <Btn name={state} click={change} className="btn" end={winner}/>
        <Btn name={state} click={change} className="btn" end={winner}/>
        <Btn name={state} click={change} className="btn" end={winner}/>
      </div>
      <div className="rowContainer">
        <Btn name={state} click={change} className="btn" end={winner}/>
        <Btn name={state} click={change} className="btn" end={winner}/>
        <Btn name={state} click={change} className="btn" end={winner}/>
      </div>
      <div className="rowContainer">
        <Btn name={state} click={change} className="btn" end={winner}/>
        <Btn name={state} click={change} className="btn" end={winner}/>
        <Btn name={state} click={change} className="btn" end={winner}/>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <h3 className="centerText">turn : {state}</h3>
    <h3 className="centerText">{winner}</h3>
    </Fragment>
  );
}

export default App;
