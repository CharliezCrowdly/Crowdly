import React, { useState } from "react";
import Wrapper from "../wrappers/Todo";
import {MdDelete} from "react-icons/md"
const Todo = () => {
  const list = ["apply for job", "follow companish", "search for intern"];
  const [note, setNote] = useState(list);
  const [text,setText] = useState("")
  const handlechange = (e)=>{
    setText(e.target.value)

  }

  const onAdd =()=>{
    setNote([...note,text])
    setText("")
  }

  const ondelete =(value)=>{
    const filtered = note.filter((item)=> item!=value)
    setNote(filtered)

  }
  return (
    <Wrapper className="glassmorphism todo-box">
      <div className="todo">
        <h4>To do</h4>
        <h4 onClick={onAdd} className="add">
          +
        </h4>
      </div>
      <input type="text" placeholder="Enter note" onChange={handlechange} value={text} />

      {note?.map((item, index) => {
        return (
          <div key={index} className="lists">
            <span>{item}</span>
            <MdDelete className="delete" onClick={() => ondelete(item)} />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Todo;