function HeroSection() {
  return (
    <div className="h-[50vh] flex flex-col items-start justify-center bg-slate-200 px-12">
      <h1 className="text-5xl pb-4">Discover Products You’ll Love</h1>
      <p className="text-lg pb-10">
        Browse top-rated items, explore categories, and find the best deals in
        one place.
      </p>
      <button className="bg-black hover:bg-black-700 text-white rounded-full px-5 py-2">
        <span>Explore Products</span>
      </button>
    </div>
  );
}

export default HeroSection;
