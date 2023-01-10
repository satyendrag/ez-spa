import { services } from "../constants";
import leaf from "../assets/leaf_1.png";
import star from "../assets/star-img.png";
const Services = () => {
  return (
    <div className="bg- w-full py-[52px] relative">
      <img src={star} alt="star" className="absolute left-[260px] top-[-4px]" />
      <img src={leaf} alt="Leaf" className="absolute right-0" />
      <div className="w-[80%] mx-auto ">
        <div>
          <h5 className="font-open_sans text-[18px] text-primary leading-6 font-semibold text-center">
            OUR SERVICES
          </h5>
          <h1 className="mt-2 font-laila font-bold text-[48px] text-center leading-[60px]">
            What We{" "}
            <span className="bg-gradient-to-b	from-bgMain to-[#DEE3BF] ">
              Provide
            </span>
          </h1>
        </div>
        <div className="mt-[45px] flex flex-wrap">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`w-1/3 p-[41px]   border-[rgba(126, 142, 28, 0.4)] ${
                index % 3 != 2 ? "border-r-[2px]" : ""
              } ${index <= 2 ? "border-b-[2px]" : ""}`}
            >
              <img src={service.image} alt={service.title} />
              <h3 className="font-open_sans font-semibold text-[22px] leading-7 mt-3">
                {service.title}
              </h3>
              <p className="font-open_sans font-regular text-[16px] leading-7 text-dimText mt-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
