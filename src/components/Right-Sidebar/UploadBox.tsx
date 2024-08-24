import UploadBoxIcon from "../../assets/Icons/UploadBoxIcon";

const UploadBox = () => {
  return (
    <div className="w-[350px] h-[60px] bg-blue-50 mx-auto rounded-[20px] mt-[20px] pl-[10px] flex flex-col justify-center items-center 
    border border-dotted border-sky-300 
    md:w-[15px] md:h-[40px] md:bg-blue-50 md:border-gray-300 md:border-solid 
    lg:w-[350px] lg:h-[360px] lg:bg-blue-50 lg:border-gray-300 lg:border-solid">
      
      <UploadBoxIcon />

     
      

    </div>
  );
};

export default UploadBox;
