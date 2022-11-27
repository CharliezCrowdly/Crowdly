import React, { useState,useRef,useEffect } from "react";
import Wrapper from "../wrappers/Todo";
import { MdDelete } from "react-icons/md";
import SingleTodo from "./SingleTodo";
import { useAppContext } from "../../../context/appContext";
import axios from "axios";
const Todo = () => {
  const list = ["apply for job", "follow companish", "search for intern"];
  const [note, setNote] = useState(list);
  const [text, setText] = useState("");
   const { token } = useAppContext();
   const load = useRef(true);


   const fetch = async () => {
     await axios
       .get(`/api/v1/todo/get`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
       .then((res) => {
         console.log(res.data.todo);
         setNote(res.data.todo);
         setText("");
       });
   };

   useEffect(() => {
     if (load.current === true) {
       fetch();
     }
     return () => (load.current = false);
   }, []);


  const handlechange = (e) => {
    setText(e.target.value);
  };

  const onAdd = async () => {
    if (text) {
      await axios
        .post(
          `/api/v1/todo/add`,
          {
            text: text,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setNote([...note, res.data.todo]);
          setText("");
        });
    }
  };

  const ondelete = async (value) => {
    console.log(value);
    await axios
      .delete(
        `/api/v1/todo/delete/${value}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const filtered = note.filter((item) => item._id != value);
        setNote(filtered);
      });
  };
  return (
    <Wrapper className="glassmorphism todo-box">
      <div className="todo">
        <h4>To do</h4>
        <h4 onClick={onAdd} className="add">
          +
        </h4>
      </div>
      <input
        type="text"
        placeholder="Enter note"
        onChange={handlechange}
        value={text}
      />

      {note?.map((item, index) => {
        return <SingleTodo key={index} item={item} ondelete={ondelete} />;
      })}
    </Wrapper>
  );
};

export default Todo;
