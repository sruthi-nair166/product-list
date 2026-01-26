function HeroSection() {
  return (
    <div className="h-[50vh] flex flex-col sm:items-start items-center sm:text-start text-center justify-center bg-slate-200 px-12">
      <h1 className="text-5xl text-teal-800 font-medium pb-4">
        Discover Products You’ll Love
      </h1>
      <p className="text-lg text-teal-950 pb-6">
        Browse top-rated items, explore categories, and find the best deals in
        one place.
      </p>
      <a
        href="#products"
        className="bg-teal-700 hover:bg-teal-600 transition text-white rounded-full px-5 pt-2 pb-2.5"
      >
        <span>Explore Products</span>
      </a>
    </div>
  );
}

export default HeroSection;
