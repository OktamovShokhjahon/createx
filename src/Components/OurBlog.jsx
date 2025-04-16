import { Component } from "react";
import OurBlog1 from "../assets/ourblog1.png";
import Right from "../assets/right.svg";

export default class OurBlog extends Component {
  render() {
    return (
      <div className="container mt-[120px] mb-[180px]">
        <div className="flex justify-between items-center mb-[60px]">
          <span>
            <h3 className="font-bold font-lato mb-2">Our blog</h3>
            <h2 className="text-[46px] font-bold font-lato">Latest posts</h2>
          </span>
          <a
            href="/blog"
            className="text-[#FF3F3A] inline-block border border-[#FF3F3A] font-lato font-bold px-6 py-2 rounded bg-transparent hover:text-white hover:bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] transition duration-300"
          >
            Go to blog
          </a>
        </div>
        <div className="flex justify-between">
          {[1, 2, 3].map(() => {
            return (
              <div className="w-[390px]">
                <img src={OurBlog1} alt="" />
                <div>
                  <span className="flex flex-col gap-[15px]">
                    <p className="text-[#787A80]">
                      Marketing | September 4, 2020 | 36 min
                    </p>
                    <p className="text-[#1E212C] text-[20px] font-bold">
                      What is traffic arbitrage and does it really make money?
                    </p>
                    <p className="text-[#424551]">
                      Pharetra, ullamcorper iaculis viverra parturient sed id
                      sed. Convallis proin dignissim lacus, purus gravida...
                    </p>
                    <a
                      className="flex gap-[10px] items-center font-lato font-bold text-[#1E212C]"
                      href="/events"
                      activeClassName="active"
                    >
                      Listen
                      <img src={Right} alt="" />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
