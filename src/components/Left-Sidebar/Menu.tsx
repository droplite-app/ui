import MenuItem from "./MenuItem";
import BucketIcon from "../../assets/Icons/BucketIcon";
import UploadIcon from "../../assets/Icons/UploadIcon";

const Menu = () => {
  return (
    <nav className="flex-grow">
      <ul className="list-none p-0">
        <a href="#buckets">
          <MenuItem
            icon={
              <BucketIcon/>
            }
            text="Buckets"
            href="#Buckets"
          />
        </a>

        <a href="#logout">
          <MenuItem
            icon={
              <UploadIcon />
            }
            text="File Upload"
            href="#File-Upload"
          />
        </a>

        <a href="#shared">
          {" "}
          <MenuItem
            icon={
             <UploadIcon/>
            }
            text="Shared Files"
            href="#Shared-Files"
          />
        </a>

        <a href="#favorites">
          {" "}
          <MenuItem
            icon={
              <UploadIcon/>
            }
            text="Favorites"
            href="#Favorites"
          />
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
