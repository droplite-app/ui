import UploadBox from "./UploadBox";

const RightSidebar = () => {
  return (
    <>
     {/* Mobile RightSidebar */}
     <div className="md:hidden flex items-center justify-center h-full bg-blue-50 text-white w-[300px] h-[80px] p-2 rounded-lg mx-auto mt-4 border border-gray-300">
        <UploadBox />
      </div>

      {/* Desktop RightSidebar */}
      <div className="hidden md:flex flex-col items-center bg-blue-100 text-white fixed right-0 bottom-0 w-[400px] h-[700px] p-[20px] gap-0 rounded-tl-[20px]">
        <UploadBox />
      </div>
    </>
  );
};

export default RightSidebar;
