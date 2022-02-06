const GridCard = ({ content, isChannel = false }) => {
  return (
    <>
      <div
        className={
          (!isChannel
            ? "flex-none w-40 hover:scale-125 "
            : "w-1/5 hover:scale-110 ") +
          "rounded-md bg-[#192133] first:origin-left last:origin-right " +
          "transition ease-in-out delay-150 duration-300 "
        }
      >
        <img
          className="rounded-md"
          src={content.imageLink}
          alt={content.name}
        />
      </div>
    </>
  );
};

export default GridCard;
