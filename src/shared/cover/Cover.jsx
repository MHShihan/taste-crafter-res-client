import { Parallax } from "react-parallax";

const Cover = ({ img, height, heading, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={`${img}`}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero relative"
        style={{
          height: `${height}`,
        }}
      >
        <div className="absolute bg-black inset-0 bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 px-10 lg:px-40 py-4 md:py-10 lg:py-20">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-cinzel">{heading}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
