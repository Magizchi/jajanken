import { JSX } from "react";
import { NavLink } from "react-router";

const LandingPage = (): JSX.Element => {
  return (
    <section className="bg-[url(./assets/images/landing_background.svg)] bg-cover bg-no-repeat">
      <div className="container mx-auto flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-[tenkai] text-9xl text-gray-100">JAJANKEN</h1>
          <NavLink
            to="/select-character"
            end
            className="flex h-26 w-96 items-center justify-center overflow-hidden"
          >
            <div
              // alt="eaj"
              // src="path240.svg"
              className="absolute h-26 w-96 bg-[url(path240.svg)] text-orange-500"
            />
            <span className="z-50 font-[rainly] text-6xl text-black">Play</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
