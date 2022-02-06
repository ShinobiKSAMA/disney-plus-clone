import { HiHome, HiPlus, HiSearch, HiStar } from "react-icons/hi";

const Header = () => {
  const linkStyle = "flex items-center";
  const linkTextStyle = "pl-2 text-xl font-semibold";

  return (
    <>
      <div className="z-50 w-full md:px-10 px-5 py-4">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="Disney+"
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex flex-1 px-10 py-3 items-center justify-start space-x-10">
            <div href="#" className={linkStyle}>
              <HiHome size={25} />
              <span className={linkTextStyle}>Home</span>
            </div>
            <div href="#" className={linkStyle}>
              <HiSearch size={25} />
              <span className={linkTextStyle}>Search</span>
            </div>
            <div href="#" className={linkStyle}>
              <HiPlus size={25} />
              <span className={linkTextStyle}>Watchlist</span>
            </div>
            <div href="#" className={linkStyle}>
              <HiStar size={25} />
              <span className={linkTextStyle}>Originals</span>
            </div>
          </div>

          {/* Avatar */}
          <div className="rounded-full">
            <img
              className="bg-gray-700 rounded-full h-10 w-10"
              src="data:image/jpeg;base64,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"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
