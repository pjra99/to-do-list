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
    <li className="listItem">{item.value} <button className="delBtn" onClick={()=> removeItem(item.key)}><MdDelete className='delIcon' size={25} /></button>
    </li>)
return (
<div className='wrapper'>
    <div className="wrapper-upper">
        <div></div>
    </div>
    <div className="functional-section">
        <div></div>
        <div className='main-section'>
            <div className='section-header'>
                <div></div>
                <div className='title'><h1> TO DO LIST</h1></div>
                <div></div>
                </div>
                <div className="section-input">
                    <div></div>
                    <div><input type="text" className="taskInput" placeholder="Add Tasks..."onChange={addItem} /></div>
                    <div></div>
                    <div><button onClick={pushItem} className="addBtn"> <GrAddCircle size={25} /> </button></div>
                    <div></div>
                 </div>
<div className="section-list">
<div></div>
    <div>
    <ul className="list">
    {toDoList}
</ul>
    </div>
    <div></div>
    </div>
</div>
        <div></div>

</div>
 <div></div>
</div>

);
}

export default App
