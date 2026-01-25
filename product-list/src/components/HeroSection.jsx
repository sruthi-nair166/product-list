function HeroSection() {
  return (
    <div className="h-[50vh] flex flex-col items-start justify-center bg-slate-200 px-12">
      <h1 className="text-5xl font-medium pb-4">
        Discover Products You’ll Love
      </h1>
      <p className="text-lg pb-6">
        Browse top-rated items, explore categories, and find the best deals in
        one place.
      </p>
      <button
        type="button"
        className="bg-black hover:bg-black-700 text-white rounded-full px-5 pt-2 pb-2.5"
      >
        <span>Explore Products</span>
      </button>
    </div>
  );
}

export default HeroSection;
