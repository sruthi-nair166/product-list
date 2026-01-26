import { useState } from "react";
import ProductCard from "./ProductCard";

function Products({ products, filter, filteredProducts }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  console.log(filteredProducts);

  return (
    <div id="products" className="px-12 py-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-medium pb-8">
          {filteredProducts.length
            ? filteredProducts[0]?.category
            : "Top Deals"}
        </h2>

        <div className="flex gap-3 pb-4">
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search Product"
              className="border-2 border-slate-300 rounded-md w-64 h-8 ps-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 absolute top-1/2 -translate-y-1/2 end-2 text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                setIsSortByOpen(false);
              }}
              className="flex items-center justify-center bg-black text-white border-0 rounded-md px-4 h-8 gap-1"
            >
              <span className="pt-1 pb-1.5">Filter</span>
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
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </button>

            {isFilterOpen && (
              <div className="absolute end-0 z-10 border-2 rounded-lg bg-white">
                <ul className="flex flex-col items-start w-52">
                  <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        filter("");
                      }}
                      className="w-full text-left"
                      type="button"
                    >
                      All
                    </button>
                  </li>
                  <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        filter("Electronics & Gadgets");
                      }}
                      className="w-full text-left"
                      type="button"
                    >
                      Electronics & Gadgets
                    </button>
                  </li>
                  <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        filter("Fashion & Apparel");
                      }}
                      className="w-full text-left"
                      type="button"
                    >
                      Fashion & Apparel
                    </button>
                  </li>
                  <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        filter("Beauty & Personal Care");
                      }}
                      className="w-full text-left"
                      type="button"
                    >
                      Beauty & Personal Care
                    </button>
                  </li>
                  <li className="hover:bg-slate-200 transition border-b-2 w-full px-4 py-2">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        filter("Home & Kitchen");
                      }}
                      className="w-full text-left"
                      type="button"
                    >
                      Home & Kitchen
                    </button>
                  </li>
                  <li className="hover:bg-slate-200 transition w-full px-4 py-2">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        filter("Health & Fitness");
                      }}
                      className="w-full text-left"
                      type="button"
                    >
                      Health & Fitness
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsSortByOpen(!isSortByOpen);
                setIsFilterOpen(false);
              }}
              className="flex items-center justify-center border-2 border-slate-300 rounded-md ps-3 pe-2 h-8 gap-1"
            >
              <span className="pt-1 pb-1.5">Sort By</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {isSortByOpen && (
              <div className="absolute end-0 z-10 border-2 rounded-lg bg-white">
                <ul className="flex flex-col items-start w-52">
                  <li className="hover:bg-slate-200 transition border-b-2 flex items-center justify-between w-full px-4 py-2">
                    <button
                      onClick={() => setIsPriceOpen(!isPriceOpen)}
                      type="button"
                      className="w-full text-left"
                    >
                      Price
                    </button>
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                  {isPriceOpen && (
                    <ul>
                      <li className="flex gap-1 w-full ps-5 py-2">
                        <input type="checkbox" id="price-high-to-low" />
                        <label htmlFor="price-high-to-low">High to Low</label>
                      </li>
                      <li className="flex gap-1 w-full ps-5 py-2">
                        <input type="checkbox" id="price-low-to-high" />
                        <label htmlFor="price-low-to-high">Low to High</label>
                      </li>
                    </ul>
                  )}
                  <li className="hover:bg-slate-200 transition border-b-2 flex items-center justify-between w-full px-4 py-2">
                    <button
                      onClick={() => setIsRatingOpen(!isRatingOpen)}
                      className="w-full text-left"
                      type="button"
                    >
                      Rating
                    </button>
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                  {isRatingOpen && (
                    <ul>
                      <li className="flex gap-1 w-full ps-5 py-2">
                        <input type="checkbox" id="rating-high-to-low" />
                        <label htmlFor="rating-high-to-low">High to Low</label>
                      </li>
                      <li className="flex gap-1 w-full ps-5 py-2">
                        <input type="checkbox" id="rating-low-to-high" />
                        <label htmlFor="rating-low-to-high">Low to High</label>
                      </li>
                    </ul>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {!filteredProducts.length && (
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length && (
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
