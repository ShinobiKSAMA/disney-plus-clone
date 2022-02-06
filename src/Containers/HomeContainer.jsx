import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GridCard from "../Components/GridCard";

const HomeContainer = () => {
  const channels = [
    {
      name: "Disney",
      imageLink:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6347/746347-h",
      videoLink: "",
    },
    {
      name: "Pixar",
      imageLink:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6348/746348-h",
      videoLink: "",
    },
    {
      name: "Marvel",
      imageLink:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6349/746349-h",
      videoLink: "",
    },
    {
      name: "Star Wars",
      imageLink:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6357/746357-h",
      videoLink: "",
    },
    {
      name: "National Geography",
      imageLink:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6355/746355-h",
      videoLink: "",
    },
  ];

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
        <div className="flex space-x-4 ">
          {channels.map((channel) => (
            <GridCard key={channel.name} channel={channel} isChannel />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-nowrap overflow-x-scroll md:overflow-hidden py-5 space-x-4 ">
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((i, idx) => (
            <GridCard
              key={idx}
              channel={{
                imageLink:
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4209/1104209-v-5c51ee3fb954",
                name: "cyubs",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
