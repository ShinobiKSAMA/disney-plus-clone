import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from "../Components/Lists/Grid";
import channels from "../Data/Channels";
import recommended from "../Data/Recommended";

const HomeContainer = () => {
  return (
    <>
      <div className="px-5 md:px-10">
        {/* Carousel */}
        <Carousel
          infiniteLoop
          autoPlay
          showArrows
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          className="mb-5 rounded-lg overflow-clip h-96"
        >
          <div className="relative">
            <div className="absolute w-96 p-10 flex flex-col items-start gap-3">
              <span className="text-2xl font-bold">Book of Bobba Fett</span>
              <span className="text-md font-semibold text-gray-300">
                Star Wars . Action
              </span>
              <span className="text-md text-left font-semibold">
                NEW EPISODES EVERY WEDNESDAY AT 1:30 PM. No longer just a hired
                gun, Boba Fett reinvents himself on Tatooine alongside Fennec
                Shand.
              </span>
            </div>
            <img
              className="float-right"
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5318/1095318-h-a89162a0c1a9"
              alt="Slider"
            />
          </div>
          <div className="relative">
            <div className="absolute w-96 p-10 flex flex-col items-start gap-3">
              <span className="text-2xl font-bold">Book of Bobba Fett</span>
              <span className="text-md font-semibold text-gray-300">
                Star Wars . Action
              </span>
              <span className="text-md text-left font-semibold">
                NEW EPISODES EVERY WEDNESDAY AT 1:30 PM. No longer just a hired
                gun, Boba Fett reinvents himself on Tatooine alongside Fennec
                Shand.
              </span>
            </div>
            <img
              className="float-right"
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5318/1095318-h-a89162a0c1a9"
              alt="Slider"
            />
          </div>
        </Carousel>

        {/* Channels */}
        <Grid title="Channels" contents={channels} type="channel" />

        {/*Traiil*/}
        <Grid title="Recommended" contents={recommended} type="vertical" />
      </div>
    </>
  );
};

export default HomeContainer;
