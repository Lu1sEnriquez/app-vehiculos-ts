import { MdOutlineDashboard } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { PiKeyReturnBold } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";


 const menuItems = [
    { name: "INICIO", link: "/", icon: MdOutlineDashboard },
    { name: "APARTADOS", link: "/apartados", icon: BsCalendarCheck },
    { name: "SALIDAS", link: "/salidas", icon: ImExit, margin: true },
    { name: "LLEGADAS", link: "/llegadas", icon: PiKeyReturnBold },
    { name: "REPORTES", link: "/reportes", icon: TbReportSearch, margin: true },
  ];

  export default menuItems;
  