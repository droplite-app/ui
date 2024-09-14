import Avatar from "../Panels/Avatar";
import Menu from "../Menus/Menu";
import MenuItem from "../Menus/MenuItem";
import UploadIcon from "../../assets/Icons/UploadIcon";
import MobileMenuContainer from "../Menus/MobileMenuContainer";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");

    navigate("/login");
  };

  return (
    <aside className="flex md:flex-col md:justify-between w-full md:w-[307px] h-auto md:h-screen bg-sky-900 text-white fixed bottom-0 md:static p-2 md:p-0 md:top-0 left-0 md:left-auto md:overflow-y-auto">
      <div className="hidden md:flex md:justify-center md:items-center mt-4 pb-4">
        <Avatar size={150} />
      </div>
      <div className="hidden md:block flex-grow">
        <Menu />
      </div>
      <div className="mt-auto hidden md:block">
        <MenuItem icon={<UploadIcon />} text="Settings" href="#settings" />
        <MenuItem icon={<UploadIcon />} text="Logout" onClick={handleLogout} />
      </div>
      <div className="md:hidden flex justify-around w-full bg-blue-900">
        <MobileMenuContainer />
      </div>
    </aside>
  );
};

export default SideBar;
