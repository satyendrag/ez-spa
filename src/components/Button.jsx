const Button = ({ title, marginTop = 0 }) => {
  
  return (
    <button
      className={`px-[45px] py-[14px] bg-primary text-white font-open_sans text-[16px] font-bold rounded-md 
    hover:bg-white hover:text-primary hover:border-2 hover:border-primary border-2 transition ease-in delay-150`}
    >
      {title}
    </button>
  );
};
export default Button;
