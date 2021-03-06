import GridCard from "./GridCard";

const Grid = ({ title, contents, type }) => {
  return (
    <>
      {/* Content */}
      <div className="relative pt-5 pb-10">
        {type !== "channel" && (
          <span className="absolute -mt-1 text-lg font-bold ">{title}</span>
        )}
        <div
          className={
            "flex space-x-4 " +
            (type !== "channel" &&
              "flex-nowrap overflow-x-scroll md:overflow-hidden py-10 ")
          }
        >
          {contents.map((content) => (
            <GridCard content={content} isChannel={type === "channel"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
