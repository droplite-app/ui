import MobileMenu from "./MobileMenu";
import { FaUpload } from "react-icons/fa"; // FaUpload ikonunu doğru şekilde import etme

const MobileMenuContainer = () => {
  return (
    <div className="sidebar-footer">
      <MobileMenu icon={<FaUpload />} text="Settings" />
      <MobileMenu icon={<FaUpload />} text="Logout" />
    </div>
  );
};

export default MobileMenuContainer;
