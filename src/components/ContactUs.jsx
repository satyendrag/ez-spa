import background from "../assets/contact_us_bg.png";
import stars from "../assets/stars.png";
import stones from "../assets/spa-stones.png";
const ContactUs = () => {
  return (
    <div className="bg- w-full py-[52px] relative">
      <img src={stars} alt="stars" className="absolute right-[1%] top-[30%]" />
      <img
        src={stones}
        alt="stones"
        className="absolute left-[1%] bottom-[30%]"
      />
      <div
        className={`w-[80%] mx-auto px-[96px] py-[66px] rounded-2xl bg-black`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="font-laila font-semibold text-[45px] leading-[65px] text-center text-white">
            Get Started With EZ SPA
          </h1>
          <p className="mt-4 font-normal font-open_sans text-[18px] leading-7 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            excepturi earum doloribus iusto vel voluptate? Obcaecati
            necessitatibus incidunt unde, voluptatum nam eveniet sint
            perferendis tempore, assumenda aliquam eaque quidem fugit.
          </p>
          <div className="flex mt-[26px] justify-center items-center">
            <input
              className="border-none rounded-md px-6 py-5 font-open_sans text-[16px] w-[80%]"
              placeholder="Email address"
            />
            <button className="px-[45px] py-[14px] bg-primary text-white font-open_sans text-[16px] font-bold rounded-md ml-[-155px] hover:bg-white hover:text-primary hover:border-2 hover:border-primary border-2 transition ease-in delay-150">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
