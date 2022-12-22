import { AiFillMessage } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";

import { ImProfile } from "react-icons/im";
import { MdExplore } from "react-icons/md";

const user = localStorage.getItem("user");
const userinfo = JSON.parse(user);

const usertype = userinfo.usertype == "company" ? "Jobs" : "Find Work";


const links = [
  {
    id: 1,
    text: usertype,
    path: "/user/work",
    icon: <MdWork />,
  },
  {
    id: 2,
    text: "Messages",
    path: "/user/message",
    icon: <AiFillMessage />,
  },
  {
    id: 3,
    text: "Explore",
    path: "/user/explore",
    icon: <MdExplore />,
  },
  {
    id: 4,
    text: "Overview",
    path: "/user/feeds",
    icon: <FaPhotoVideo />,
  },
];

export default links;
