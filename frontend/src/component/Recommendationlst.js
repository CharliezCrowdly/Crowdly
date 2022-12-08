import React,{useState, useEffect, useRef} from "react";
import axios from "axios";
import Recommendation from "./Recommendation";
import lstrecommendation from "../utils/lstrecommendation";
import { useAppContext } from "../context/appContext";
const Recommendationlst = () => {
    const { token } = useAppContext();
    const loadRef = useRef(true);
  const [lst, setLst] = useState([]);
  const [loading, setLoading] = useState(true);

  const listOutComment = ({ comment }) => {
    setLst(comment);
  };

  const getcomments = async () => {
    await axios
      .get(`/api/v1/profile/userrandom`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
          setLst(res.data.user);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (loadRef.current === true) {
      getcomments();
    }
    return () => {
      loadRef.current = false;    };
  }, []);
  if (loading) {
    return <div></div>;
  }
  return (
    <div className="users">
      {lst.map((item) => {
        return <Recommendation item={item} key={item._id} />;
      })}
    </div>
  );
};

export default Recommendationlst;
