import background from "../assets/hero_background.png";
import bodyMassage from "../assets/main_section_body.png";
import Button from "./Button";
import roundedImage from '../assets/best_body_rounded.png';
const HeroSection = () => {
  return (
    <div
      className="bg- w-full py-[124px] relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img src={roundedImage} alt="Best Body " className="absolute left-[1%] bottom-[7%] w-[100px] h-[100px]" />
 
      <div className={`w-[80%] mx-auto`}>
        <div className="w-2/3">
          <div>
            <div className="flex gap-7">
              <h1 className="font-laila font-bold text-[90px]">
                The <span className="text-primary">Health</span>
              </h1>
              <img src={bodyMassage} alt="body massage" />
            </div>
            <h1 className="font-laila font-bold text-[90px]">Of Your Body</h1>
          </div>
          <p className="mt-8 font-laila leading-8 text-dimText text-[16px] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distraction of letters
          </p>
          <div className="h-[32px]"></div>
          <Button title="Get In Touch" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
