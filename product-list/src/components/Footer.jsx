function Footer() {
  return (
    <div className="bg-slate-200 px-12 pt-10 pb-5 mt-14">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <p className="text-teal-600 font-extrabold flex items-center text-4xl gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.8"
              stroke="currentColor"
              className="size-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span>ShopLink</span>
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your Email"
              className="rounded-full flex items-center justify-center h-8 ps-2 pt-2 pb-2.5"
            />
            <button
              type="button"
              className="bg-teal-900 hover:bg-teal-600 transition text-white rounded-full flex items-center justify-center h-8 px-5 pt-2 pb-2.5"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium mb-3 text-teal-800">About</h4>
            <a href="#" className="text-teal-950">
              About Us
            </a>
            <a href="#" className="text-teal-950">
              Delivery Information
            </a>
            <a href="#" className="text-teal-950">
              Privacy Policy
            </a>
            <a href="#" className="text-teal-950">
              Terms & Conditions
            </a>
            <a href="#" className="text-teal-950">
              Refund Policy
            </a>
            <a href="#" className="text-teal-950">
              Become Seller
            </a>
            <a href="#" className="text-teal-950">
              Vendor Profile
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium mb-3 text-teal-800">
              Quick Links
            </h4>
            <a href="#" className="text-teal-950">
              Your Account
            </a>
            <a href="#" className="text-teal-950">
              Returns & Exchanges
            </a>
            <a href="#" className="text-teal-950">
              Return Center
            </a>
            <a href="#" className="text-teal-950">
              Purchase History
            </a>
            <a href="#" className="text-teal-950">
              Latest News Blog
            </a>
            <a href="#" className="text-teal-950">
              Advertise your products
            </a>
            <a href="#" className="text-teal-950">
              Sell product
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium mb-3 text-teal-800">
              My Accounts
            </h4>
            <a href="#" className="text-teal-950">
              My Account
            </a>
            <a href="#" className="text-teal-950">
              Shopping Cart
            </a>
            <a href="#" className="text-teal-950">
              Wishlist
            </a>
            <a href="#" className="text-teal-950">
              Order History
            </a>
            <a href="#" className="text-teal-950">
              International Orders
            </a>
            <a href="#" className="text-teal-950">
              Your account
            </a>
            <a href="#" className="text-teal-950">
              Your orders
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-14">
        <p className="text-teal-950">© Copyright 2025. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/">
            <img className="h-5" src="/instagram_logo.png" alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="h-5" src="/facebook_icon.png" alt="" />
          </a>
          <a href="https://x.com/">
            <img className="h-5" src="/Logo_of_Twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
