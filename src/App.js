import React, {useState} from 'react'
import {MdDelete} from 'react-icons/md'
import {GrAddCircle} from 'react-icons/gr'
import './App.css'

function App(){

 const[list, setList] = useState([])
   
 const [input, setInput] =  useState('')
    function addItem(e){
        
        setInput(e.target.value);
    }
    function pushItem(){
        if(input==''){

        }
        else {
           setList([...list, {
               key: Math.floor(Math.random()*10),
               value: input
            }])
        }
    }
    function removeItem(key){
        const newAr = list.filter((item) => item.key !== key);
               setList(newAr)
    }
    const toDoList  = list.map((item)=>
    <li className="listItem">{item.value} <button className="del-btn" onClick={()=> removeItem(item.key)}><MdDelete className='del-icon' size={25} /></button>
    </li>)
return (
<div className="container-fluid">
    <div className="row top-empty-row">
    </div>
    <div className=" row functional-section">
        <div className="col-lg-3"></div>
        <div className=" col-lg-6 main-section">
            <div className="row section-header">
                <div className="col-lg-12 section-title"> TO DO LIST </div>
                </div>
                <div className="row section-input">
                        <input type="text" className="task-input" placeholder="Add Tasks..." onChange={addItem} /> 
                    <button onClick={pushItem} className="add-btn"> <GrAddCircle className="add-icon" size={25} /> </button>
                 </div>
<div className="row section-list">
    <ul className="list">
    {toDoList}
    </ul>
    </div>
</div> {/* main-section */}
<div className="col-lg-3"></div>
</div>
 <div className="row"></div>
</div>

);
}

export default App
