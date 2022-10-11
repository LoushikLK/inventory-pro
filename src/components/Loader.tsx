import { LOADER } from "assets";
import { useEffect } from "react";

type Props = {
  visible?: boolean;
};
const Loader = ({ visible }: Props) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [visible]);

  return (
    <div
      className={`fixed top-0 left-0 z-[2002] flex h-full w-full items-center justify-center bg-white ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="relative h-48 w-48">
        <div className="animate-spin h-48 w-48 rounded-full border-x-2 border-t-2 border-x-theme border-t-theme" />
        <img
          alt="Loading..."
          src={LOADER.src}
          className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 animate-pulse"
        />
      </div>
    </div>
  );
};

export default Loader;
