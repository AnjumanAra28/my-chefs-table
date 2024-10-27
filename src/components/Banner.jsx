const Banner = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('../../public/images/banner.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center py-16">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5">
            Discover quick, delicious recipes for every craving! From classic comfort dishes to vibrant, healthy bowls—find your next favorite meal here.
            </p>
            <div className="">
            <button className="btn btn-accent rounded-full mr-2">Explore Now</button>
            <button className="btn btn-accent rounded-full">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
