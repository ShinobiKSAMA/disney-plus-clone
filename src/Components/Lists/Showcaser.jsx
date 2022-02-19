import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Showcaser = ({ showcases }) => {
  return (
    <>
      {/* Carousel */}
      <Carousel
        infiniteLoop
        autoPlay
        showArrows
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="px-5 overflow-clip mb-5 h-96"
      >
        {showcases.map((showcase) => (
          <div className="relative">
            <div className="absolute w-96 p-10 flex flex-col items-start gap-3">
              <span className="text-2xl font-bold">{showcase.title}</span>
              <span className="text-md font-semibold text-gray-300">
                {showcase.genre} . {showcase.series}
              </span>
              <span className="text-md text-left font-semibold">
                {showcase.description}
              </span>
            </div>
            <img
              className="float-right object-contain object-right"
              src={showcase.imageLink}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Showcaser;
