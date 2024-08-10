const Avatar = () => {
  return (
    <div className="flex justify-center items-center w-[307px] h-[218px] p-[38px_104px_45px_103px]">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
