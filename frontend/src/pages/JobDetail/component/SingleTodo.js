import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { useAppContext } from "../../../context/appContext";
import axios from "axios";
const SingleTodo = ({ item, ondelete }) => {
  const { tasktype, text, userid, _id } = item;
  const [Done, setDone] = useState(tasktype === "done" ? true : false);
  const { token } = useAppContext();
  const load = useRef(true);

  useEffect(() => {
    if (load.current === true) {
      if (tasktype === "done") {
        setDone(true);
      } else {
        setDone(false);
      }
    }
  }, [tasktype]);

  const toggleDone = async () => {
    if (!Done) {
      await axios
        .delete(
          `/api/v1/todo/update/${_id}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setDone(true);
        });
    } else {
      await axios
        .delete(
          `/api/v1/todo/unupdate/${_id}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setDone(false);
        });
    }
  };

  return (
    <div className="lists">
      <span onClick={toggleDone} className={Done ? "done" : ""}>
        {text}
      </span>
      <MdDelete className="delete" onClick={() => ondelete(_id)} />
    </div>
  );
};

export default SingleTodo;
