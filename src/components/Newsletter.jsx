import React from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        toast.success('Thanks for your attention')
    }
  return (
    <div className=" py-12 mt-30">
        <div className="relative w-full bg-[#fff8f3] rounded-xl overflow-hidden">
                {/* 🔆 Top-centered orange glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 bg-[#f05400] blur-3xl opacity-30 z-0" />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Illustration */}
        <div>
          <img
            src="https://i.ibb.co/8DDBL2pD/Newsletter-cuate.png"
            alt="Newsletter Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl text-primary lg:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-base text-accent mb-6 ">
            Get weekly recipes, exclusive cooking tips, and seasonal specials straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:flex-1"
              required
            />
            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
