import React from "react";
import "./style.css";
import FreeClasses from "./classapi";
const EmptyClasses = ({listofclass})=>{
  return (

<>
{console.log(listofclass,"new")}
<div className="roomno">
{listofclass.map((currclasses,ind)=>{
return (
  <>
  <div className="currclass">{currclasses}</div>
  </>
)
})}
</div>

 </>

  );
}

export default EmptyClasses;