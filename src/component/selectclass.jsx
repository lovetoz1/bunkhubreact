import React,{useState,useEffect}from "react";
import "./style.css";
import Period from "./classesempty";
import FreeClasses from "./classapi";
import { listClasses } from "@mui/material";
const SelectClass = ()=>{
  // CurrClass = FreeClass.
  const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const d = new Date();
let day = weekday[d.getDay()].toString();
const initialdata=FreeClasses[day]["fourth"]
const [currdata,setUpdatelist]=useState(initialdata);
const currfreeclass = (selectedclass)=>{
  

  const periodclicked=FreeClasses[day][selectedclass];
  setUpdatelist(periodclicked);
  // console.log(currdata);
}
  return (
<><div id="emptyclasses" className="nav">
   

<div className="period"  itemType="button" onClick={()=>currfreeclass("first")}>
<div class="classtime">9:00</div>  
      1
      <div class="classtime">9:50</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("second")}>
<div class="classtime">9:50</div>  
      2
      <div class="classtime">10:40</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("third")}> <div class="classtime">10:40</div>  
      3
      <div class="classtime">11:30</div></div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("fourth")}>
<div class="classtime">11:30</div>  
      4
      <div class="classtime">12:20</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("fifth")}>
<div class="classtime">12:20</div>  
      5
      <div class="classtime">01:10</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("sixth")}>
<div class="classtime">01:10</div>  
      6
      <div class="classtime">02:00</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("seventh")}>
<div class="classtime">02:00</div>  
      7
      <div class="classtime">02:50</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("eigth")}>
<div class="classtime">02:50</div>  
      8
      <div class="classtime">03:40</div>
</div>
<div className="period"  itemType="button" onClick={()=>currfreeclass("nineth")}>
<div class="classtime">3:40</div>  
      9
      <div class="classtime">4:30</div>
</div>


   </div>
   <Period listofclass={currdata}></Period>
   </>

  );
}

export default SelectClass;