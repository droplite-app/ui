import UploadBox from "./UploadBox";


const RightSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center  bg-blue-100 text-white fixed right-0 bottom-0 w-[400px] h-[700px] p-[20px] gap-0 rounded-tl-[20px]">
      <UploadBox />
    </div>
    
  );
};

export default RightSidebar;
