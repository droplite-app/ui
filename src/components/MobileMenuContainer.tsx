import MobileMenu from "./MobileMenu";
import BucketIcon from "../assets/Icons/BucketIcon";
import UploadIcon from "../assets/Icons/UploadIcon";

const MobileMenuContainer = () => {
  return (
    <div className="flex justify-around items-center w-full h-auto bg-sky-900 text-white p-2">
      <a href="#buckets">
        <MobileMenu
          icon={
            <BucketIcon/>
          }
          text="Buckets"
          href="#"
        />
      </a>
      <a href="#shared">
        <MobileMenu
          icon={
            <UploadIcon/>
          }
          text="Shared"
          href="#"
        />
      </a>
      <a href="#favorites">
        <MobileMenu
          icon={
            <UploadIcon/>
          }
          text="Favorites"
          href="#"
        />
      </a>
    </div>
  );
};

export default MobileMenuContainer;
