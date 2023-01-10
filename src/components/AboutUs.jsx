import aboutImg01 from "../assets/about_img_1.png";
import aboutImg02 from "../assets/about_img_2.png";
import aboutImg03 from "../assets/about_img_3.png";
import stone from "../assets/spa-stones.png";
import star from "../assets/star-img.png";
import "../App.css";
import { about } from "../constants";
const AboutUs = () => {
  return (
    <div className="bg- w-full py-[52px] relative">
      <img src={star} alt="stars" className="absolute right-[1%] top-[5%]" />
      <img src={stone} alt="stones" className="absolute left-[1%] top-[5%]" />
      <div
        className={`w-[80%] mx-auto flex gap-[45px] justify-bewteen items-center`}
      >
        <div className="w-1/2 flex flex-row justify-between">
          <div className="basis-7/12 ">
            <img src={aboutImg01} alt="Spa" className="w-[242px]" />
          </div>
          <div className="flex flex-col gap-5 basis-5/12">
            <div className="w-[30px] h-[30px] rounded-full bg-black ml-11"></div>
            <div className="circle">
              <img
                src={aboutImg02}
                alt="massage"
                // className="w-[209px] h-[133px] "
              />
            </div>
            <img
              src={aboutImg03}
              alt="facial"
              className="w-[162px] h-[239px]"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h5 className="font-open_sans font-semibold  text-primary text-[18px] leading-6 ">
            ABOUT US
          </h5>
          <h1 className="mt-2 font-laila font-bold text-[51px]  leading-[79px]">
            You will be{" "}
            <span className="bg-gradient-to-b	from-bgMain to-[#DEE3BF] ">
              Surprised
            </span>
          </h1>
          <p className="font-open_sans font-normal text-dimText text-[16px] leading-8  mt-4">
            {about.description}
          </p>
          <ul className="mt-10">
            {about.descriptions.map((description) => (
              <li className="marker mt-7">{description.desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
