import UploadBoxIcon from "../../assets/Icons/UploadBoxIcon";

const UploadBox = () => {
  const handleClick = () => {
    // This will be added later
  };

  return (
    <button
      onClick={handleClick}
      className="w-[350px] h-[60px] bg-blue-50 mx-auto rounded-[20px] mt-[20px] pl-[10px] flex flex-col justify-center items-center 
      border border-dotted border-sky-300 
      md:w-[150px] md:h-[40px] md:bg-blue-50 md:border-gray-300 md:border-solid 
      lg:w-[350px] lg:h-[360px] lg:bg-blue-50 lg:border-gray-300 lg:border-solid
      focus:outline-none"
    >
      <UploadBoxIcon onClick={handleClick} />
      <p className="mt-0 pb-3 text-xs md:mt-2 md:pb-0 md:text-lg lg:mt-5 lg:text-2xl font-bold text-sky-900">
        Upload File
      </p>
    </button>
  );
};

export default UploadBox;
