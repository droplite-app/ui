
import MenuItem from './MenuItem';
import { FaShoppingBag, FaUpload, FaStar } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <MenuItem icon={<FaShoppingBag />} text="Buckets" />
        <MenuItem icon={<FaUpload />} text="File Upload" />
        <MenuItem icon={<FaUpload />} text="Shared Files" />
        <MenuItem icon={<FaStar />} text="Favorites" />
      </ul>
    </nav>
  );
};

export default Menu;
