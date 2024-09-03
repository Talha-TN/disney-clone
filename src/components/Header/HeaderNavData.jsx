import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaTv } from "react-icons/fa";
const menu = [
    {
      name: "HOME",
      icon: <IoHomeOutline />,
    },
    {
      name: "SEARCH",
      icon: <CiSearch />,
    },
    {
      name: "WATCH LIST",
      icon: <FaPlus />,
    },
    {
      name: "ORIGINALS",
      icon: <FaStar />,
    },
    {
      name: "MOVIES",
      icon: <MdOutlineSlowMotionVideo />,
    },
    {
      name: "SERIES",
      icon: <FaTv />,
    },
  ];
  export default menu;