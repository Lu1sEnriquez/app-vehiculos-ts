import { MdOutlineDashboard } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { PiKeyReturnBold } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { GiExitDoor } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";


 const menuItems = [
    { name: "INICIO", link: "/lobby", icon: MdOutlineDashboard },
    { name: "APARTADOS", link: "/apartados", icon: BsCalendarCheck },
    { name: "SALIDAS", link: "/salidas", icon: ImExit },
    { name: "LLEGADAS", link: "/llegadas", icon: PiKeyReturnBold },
    { name: "REPORTES", link: "/reportes", icon: TbReportSearch },
    { name: "USUARIO", link: "/logout", icon: FaUserCircle  },
  ];

  export default menuItems;
  