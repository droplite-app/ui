import MobileMenu from "./Left-Sidebar/MobileMenu";
import BucketIcon from "../assets/Icons/BucketIcon";
import UploadIcon from "../assets/Icons/UploadIcon";

const MobileMenuContainer = () => {
  return (
    <div className="flex justify-around items-center w-full h-auto bg-sky-900 text-white p-2">
      <MobileMenu
        icon={<BucketIcon />}
        text="Buckets"
        href="#buckets"
      />
      <MobileMenu
        icon={<UploadIcon />}
        text="Shared"
        href="#shared"
      />
      <MobileMenu
        icon={<UploadIcon />}
        text="Favorites"
        href="#favorites"
      />
    </div>
  );
};

export default MobileMenuContainer;
