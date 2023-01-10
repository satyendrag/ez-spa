import testimonial from "../assets/testimonial.png";
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";
import quotes from "../assets/quotes.png";
const Testimonial = () => {
  return (
    <div className="bg- w-full py-[52px]">
      <div className="w-[80%] mx-auto ">
        <div>
          <h5 className="font-open_sans text-[18px] text-primary leading-6 font-semibold text-center">
            TESTIMONIAL
          </h5>
          <h1 className="mt-2 font-laila font-bold text-[48px] text-center leading-[60px]">
            Why our customers think <br /> We're{" "}
            <span className="bg-gradient-to-b	from-bgMain to-[#DEE3BF] ">
              the best
            </span>
          </h1>
        </div>
        <div className="flex justify-between items-center mt-4 gap-20 ">
          <div className="basis-8/12">
            <img src={quotes} alt={'"'} className="w-[32px] h-[32px]" />
            <p className="mt-6 font-open_sans italic text-[24px] leading-10 font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <hr className="h-[2px] mt-8 bg-[#D3D9B9]" />
            <div className="mt-8 flex justify-between items-center">
              <div>
                <h3 className="font-open_sans font-semibold text-[18px] leading-6">
                  Maria Okazaki
                </h3>
                <p className="font-open_sans font-normal text-[14px] leading-7 text-dimText">
                  Founder & CEO
                </p>
              </div>
              <div className="flex gap-5">
                <div className="w-[45px] h-[45px] rounded-full border-primary border-2 flex items-center justify-center">
                  <img src={leftArrow} alt="left arrow" />
                </div>
                <div className="w-[45px] h-[45px] rounded-full border-primary border-2 flex items-center justify-center bg-primary">
                  <img src={rightArrow} alt="right  arrow" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={testimonial} alt="Maria Okazaki" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
