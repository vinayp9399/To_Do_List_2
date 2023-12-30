import React from 'react'
import { useState } from 'react';

export function Todoitems(props) {
    const [n, setn] = useState([]);
    const [m, setm] = useState('');
    const todoEdit=(e)=>{
        setn(1);
        setm(e.target.value);

    }
    const todoEdit1=(e)=>{
        setn(1);
        e.target.parentNode.style.visibility='hidden';

    }
    const editIt=(e)=>{
        if(m!==''){
        setn(2); 
        props.change2(props.name,m); 
        e.target.parentNode.previousSibling.style.visibility='visible';
        setm('');
        }
        if(m===''){
            document.getElementById("settodo").style.color="red"; 
            document.getElementById("settodo").value="Type a todo first!"; 
            setTimeout(()=>{document.getElementById("settodo").value=""; document.getElementById("settodo").style.color='';}, 1000);
        }
    }
    return (
        <>
        <div className='todoitems shadow border border-dark' style={{display: 'flex'}}>
            <div style={{marginRight:'30px', width:'560px'}} >
                {props.name}
                
            </div>
            <div id="buttons" style={{width:'156px'}}>
                <i style={{marginRight:'10px'}} onClick={(e) => {e.target.parentNode.parentNode.style.backgroundColor='rgb(63,255,0)'; e.target.parentNode.style.display='none';}} className="bi bi-check2-circle"></i>
                <i style={{marginRight:'10px'}} onClick={todoEdit1} className="bi bi-pencil"></i>
                <i style={{marginRight:'10px'}} onClick={(e) => {props.remove(props.name);}} className="bi bi-trash"></i>
            </div>
            <div>
            {n == 1 ? <><input id="settodo" onChange={todoEdit} style={{marginLeft: '-259px', marginTop:'5px'}}></input><button className='btn btn-primary' onClick={editIt} style={{backgroundColor:'lightgreen', height:"35px"}}>Edit</button></>: null }
            </div>
        </div>
        </>
    )
}
