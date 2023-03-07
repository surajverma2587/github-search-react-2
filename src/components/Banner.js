import heroImg from "../images/hero.png";

export const Banner = () => {
  return (
    <div className="text-center py-4">
      <h1 className="my-2 p-2">GitHub Explorer</h1>
      <h2 className="my-2 p-2">
        An interactive tool to explore the vastness of GitHub magic.
      </h2>
      <div className="banner-img-container">
        <img
          src={heroImg}
          alt="person looking up at night sky with stars"
          className="banner-img"
        />
      </div>
    </div>
  );
};
