function Categories({ filter }) {
  return (
    <div id="popular" className="px-12 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Explore Popular Categories</h2>

        <a href="#" className="flex items-center gap-1 text-blue-600">
          <span>View All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-5 gap-7 mt-5">
        <a
          href="#products"
          onClick={() => filter("Electronics & Gadgets")}
          className="relative rounded-xl overflow-hidden transition"
        >
          <img
            className="rounded-xl transition-transform duration-1000 hover:scale-125"
            src="/electronics.jpg"
            alt="electronics & gadgets category"
          />
          <span className="absolute left-3 top-3 category-tag">
            Electronics & Gadgets
          </span>
        </a>
        <a
          href="#products"
          onClick={() => filter("Fashion & Apparel")}
          className="relative rounded-xl overflow-hidden transition"
        >
          <img
            className="rounded-xl transition-transform duration-1000 hover:scale-125"
            src="/fashion.png"
            alt="fashion & apparel category"
          />
          <span className="absolute left-3 top-3 category-tag">
            Fashion & Apparel
          </span>
        </a>
        <a
          href="#products"
          onClick={() => filter("Beauty & Personal Care")}
          className="relative rounded-xl overflow-hidden transition"
        >
          <img
            className="rounded-xl transition-transform duration-1000 hover:scale-125"
            src="/beauty.jpg"
            alt="beauty & personal care category"
          />
          <span className="absolute left-3 top-3 category-tag">
            Beauty & Personal Care
          </span>
        </a>
        <a
          href="#products"
          onClick={() => filter("Home & Kitchen")}
          className="relative rounded-xl overflow-hidden transition"
        >
          <img
            className="rounded-xl transition-transform duration-1000 hover:scale-125"
            src="/kitchen.png"
            alt="home & kitchen category"
          />
          <span className="absolute left-3 top-3 category-tag">
            Home & Kitchen
          </span>
        </a>
        <a
          href="#products"
          onClick={() => filter("Health & Fitness")}
          className="relative rounded-xl overflow-hidden transition"
        >
          <img
            className="rounded-xl transition-transform duration-1000 hover:scale-125"
            src="/fitness.png"
            alt="health & fitness category"
          />
          <span className="absolute left-3 top-3 category-tag">
            Health & Fitness
          </span>
        </a>
      </div>
    </div>
  );
}

export default Categories;
