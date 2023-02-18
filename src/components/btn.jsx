import React , {useState,Fragment}from "react";
import "../design/index.css";

function Btn(props){
    const [rem,setrem]=useState(false);
    const[index,setIndex]=useState("");
        function tik(){
            if(rem===false&&props.end===""){
               setIndex(props.name);
               props.click();
               setrem(true);
            }
        }

        return(<Fragment><div> <button className="btn" onClick={tik}>{index}</button>  </div> </Fragment>);
}
export default Btn;