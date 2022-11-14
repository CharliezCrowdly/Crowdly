import { AiFillMessage } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";

import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "Find Work",
    path: "/",
    icon: <MdWork />,
  },
  {
    id: 2,
    text: "Messages",
    path: "/user",
    icon: <AiFillMessage />,
  },
  {
    id: 3,
    text: "Profile",
    path: "Profile",
    icon: <ImProfile />,
  },
  {
    id: 4,
    text: "Overview",
    path: "/Overview",
    icon: <FaPhotoVideo />,
  },
];

export default links;
