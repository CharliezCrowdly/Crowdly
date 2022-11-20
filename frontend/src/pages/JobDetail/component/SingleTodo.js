import React,{useState} from "react";
import { MdDelete } from "react-icons/md";

const SingleTodo = ({ item, ondelete }) => {
  const [Done, setDone] = useState(false);

  return (
    <div className="lists">
      <span onClick={()=> setDone(Done => !Done)}  className={Done ? "done":""}>{item}</span>
      <MdDelete className="delete" onClick={() => ondelete(item)} />
    </div>
  );
};

export default SingleTodo;
