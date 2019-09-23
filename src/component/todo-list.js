import React,{useState, useEffect} from "react";
import Q from '@nmq/q/client';


function ToDoList(props) {

  const [item,setItems]=useState([]);
  const [subscribe]=useQ('todo');

  const handleNewWords = (payloads)=>{
    setItems((items)=> [...items,payload.record]);
  };

  useEffect(()=>{
    subscribe('create',(message)=>handleNewWords(message));

    fetch(process.env.REACT_APP_API)
    .then(results=>results.json())
    .then(data => setItems(data.results))
    .catch(console.error)
  },[])

  return (
    <ul>
      {
        items.map((item,idx)=> <li key={item._id}>{item.text}</li>)
      }
    </ul>
  );
}

export default ToDoList;
