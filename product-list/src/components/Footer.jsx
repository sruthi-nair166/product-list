function Footer() {
  return (
    <div className="bg-sky-200 px-12 pt-10 pb-5 mt-14">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <p>LOGO</p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your Email"
              className="border-2 border-slate-300 rounded-full flex items-center justify-center h-8 ps-2 pt-2 pb-2.5"
            />
            <button
              type="button"
              className="bg-black text-white rounded-full flex items-center justify-center h-8 px-5 pt-2 pb-2.5"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium mb-3 text-slate-500">About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
            <a href="#">Become Seller</a>
            <a href="#">Vendor Profile</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium mb-3 text-slate-500">
              Quick Links
            </h4>
            <a href="#">Your Account</a>
            <a href="#">Returns & Exchanges</a>
            <a href="#">Return Center</a>
            <a href="#">Purchase History</a>
            <a href="#">Latest News Blog</a>
            <a href="#">Advertise your products</a>
            <a href="#">Sell product</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium mb-3 text-slate-500">
              My Accounts
            </h4>
            <a href="#">My Account</a>
            <a href="#">Shopping Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Order History</a>
            <a href="#">International Orders</a>
            <a href="#">Your account</a>
            <a href="#">Your orders</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-14">
        <p>© Copyright 2025. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="">
            <img className="h-5" src="/instagram_logo.png" alt="" />
          </a>
          <a href="">
            <img className="h-5" src="/facebook_icon.png" alt="" />
          </a>
          <a href="">
            <img className="h-5" src="/Logo_of_Twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
