
import Avatar from './Avatar';
import Menu from './Menu';
import MobileMenuContainer from './MobileMenuContainer';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <Avatar />
      <Menu />
      <MobileMenuContainer />
    </aside>
  );
};

export default SideBar;
