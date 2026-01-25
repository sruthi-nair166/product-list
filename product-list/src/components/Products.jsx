import Product1 from "../assets/1.moisturizer.jpg";

function Products({ products }) {
  return (
    <div className="px-12 py-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-medium pb-4">Top Picks for you</h2>

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

          <button
            type="button"
            className="flex items-center justify-center bg-black text-white border-0 rounded-md px-4 h-8 gap-1"
          >
            <span className="pt-1 pb-1.5">Filter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center border-2 border-slate-300 rounded-md ps-3 pe-2 h-8 gap-1"
          >
            <span className="pt-1 pb-1.5">Sort By</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border-2 rounded-2xl shadow-md pb-6"
          >
            <div className="w-full h-96 overflow-hidden flex justify-center items-center">
              <img
                className="object-contain p-4"
                src={product.image}
                alt={product.name}
              />
            </div>
            <p className="absolute left-3 top-3 text-sm rounded-full border text-slate-500 border-slate-400 px-2 pt-0.5 pb-1">
              {product.category}
            </p>

            <div className="px-6 pt-3">
              <p className="flex items-start justify-between">
                <span className="text-lg font-medium leading-snug">
                  {product.name}
                </span>
                <span className="flex items-center justify-center text-yellow-500 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <span>{product.rating}</span>
                  <span>({product.count})</span>
                </span>
              </p>

              <div className="flex justify-between items-center pt-5">
                <p className="text-slate-500 text-lg font-medium">
                  <span>₹</span> {product.price.toLocaleString()}
                </p>
                <button
                  type="button"
                  className="rounded-lg bg-black text-white flex items-center justify-center px-4 h-8"
                >
                  <span className="pt-1 pb-1.5">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
