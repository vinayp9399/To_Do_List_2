import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Todoitems } from './components/todoitems';

function App() {
  const [a, seta] = useState('');
  const [b, setb] = useState([]);
  const changeIt=(e)=>{
    seta(e.target.value);
  }
  const addIt=()=>{
    if(a!==''){
    let updatedtodo = [...b,a];
    setb(updatedtodo);
    seta('');
    document.getElementById("text1").value="";
    }
    if(a===''){
      document.getElementById("text1").style.color='red';
      document.getElementById("text1").value="Type a todo first!";
      setTimeout(()=>{document.getElementById("text1").value=""; document.getElementById("text1").style.color='';}, 1000);
    }
  }
  const removeIt=(e)=>{
    let removedtodo = [...b].map(item => item == e ? "" : item);
    let filtered = removedtodo.filter(function (el) {
      return el != "";
    });
    setb(filtered);
  }
  const changeIt2=(e,x)=>{
    let removedtodo = [...b].map(item => item == e ? x : item);
    setb(removedtodo);
  }

  return (
      <div className="card App shadow" style={{width: '30rem'}}>
      <img className="card-img-top" style={{height:"120px"}} src="https://www.workflowmax.com/hubfs/6-things-to-do-list.png" alt="Card image cap"></img>
      <div className="card-body">
      <h5 className="card-title">To Do List</h5>
      <ul style={{display: 'flex'}}><li><input style={{width: '370px'}} id="text1" type="text" onChange={changeIt} placeholder='Add a ToDo' /></li>
      <li><a href="#" onClick={addIt} className="btn btn-primary shadow">Add</a></li></ul>
      {b.map((name1)=>{
        return(<Todoitems name={name1} remove={removeIt} change2={changeIt2}/>)}
      )}
      <button style={{width:'100px'}} className="btn btn-primary" onClick={()=> document.location.reload()}>Refresh</button>
      </div>
      </div>  
  );
}

export default App;
