import Grid from "../Components/Lists/Grid";
import Showcaser from "../Components/Lists/Showcaser";
import channels from "../Data/Channels";
import carousel from "../Data/Carousel";
import movies from "../Data/Movies.json";

const HomeContainer = () => {
  return (
    <>
      {/* Carousel */}
      <Showcaser showcases={carousel} />
      <div className="px-5 md:px-10">
        {/* Channels */}
        <Grid title="Channels" contents={channels} type="channel" />

        {/* Movies */}
        <Grid title="Movies" contents={movies} type="vertical" />
      </div>
    </>
  );
};

export default HomeContainer;
