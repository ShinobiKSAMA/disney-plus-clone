import { Navigate, NavLink } from "react-router-dom";

const GridCard = ({ content, isChannel = false }) => {
  return (
    <>
      <NavLink
        to={`/details/${content.id}`}
        className={
          (!isChannel
            ? "flex-none w-60 hover:scale-125 "
            : "w-1/5 hover:scale-110 mb-5 ") +
          "relative rounded-md first:origin-left last:origin-right hover:z-10 cursor-pointer " +
          "shadow-md shadow-black transition ease-in-out delay-300 duration-500 "
        }
      >
        <img className="rounded-md" src={content.cardImg} alt={content.title} />
        <div
          className={
            "p-2 flex flex-col -mt-[68px] " + "opacity-0 hover:opacity-100 "
          }
        >
          <span className="font-bold text-sm">{content.title}</span>
          <span className="text-xs font-semibold line-clamp-2">
            {content.description}
          </span>
        </div>
      </NavLink>
    </>
  );
};

export default GridCard;
