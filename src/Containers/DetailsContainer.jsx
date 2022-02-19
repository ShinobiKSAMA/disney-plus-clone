import { useParams } from "react-router-dom";
import movies from "../Data/Movies.json";

const DetailsContainer = () => {
  const contentId = useParams().id;
  const showcase = movies[contentId];

  return (
    <>
      <div className="container top-16 overflow-x-hidden">
        <div className="fixed top-0 left-0 opacity-80 ">
          <img
            className="md:w-screen h-screen"
            src={showcase.backgroundImg}
            alt={showcase.title}
          />
        </div>
        <div className="absolute flex flex-col min-h-[170px] h-[30vw] top-16 pt-10 pl-5 ">
          <img
            className="max-w-xl min-w-[200px] w-[55vh] "
            src={showcase.titleImg}
            alt=""
          />
          <span className="text-2xl font-semibold">{showcase.subTitle}</span>
          <span className="text-xl text-left font-semibold max-w-lg">
            {showcase.description}
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailsContainer;
