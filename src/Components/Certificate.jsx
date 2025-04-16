import React, { Component } from "react";
import Certifcateimg from "../assets/certificate.png";
import Strategy from "../assets/logo112.png";
import Cunsulting from "../assets/logo (1).png";
import National from "../assets/logo (2).png";

export default class Certificate extends Component {
  render() {
    return (
      <div>
        <div className="container flex justify-between items-center mb-[-50px] mt-[-50px]">
          <div>
            <p className="font-bold text-[#1E212C]">Createx Certificate</p>
            <h1 className="text-[46px] font-bold text-[#1E212C]">
              Your expertise will be confirmed
            </h1>
            <p className="py-[48px] text-[#424551]">
              We are accredited by international professional <br />{" "}
              organizations and institutes:
            </p>
            <div className="flex justify-between items-center max-w-[395px]">
              <img className="w-[105px] h-[50px]" src={Strategy} alt="" />
              <img className="w-[105px] h-[50px]" src={Cunsulting} alt="" />
              <img className="w-[105px] h-[50px]" src={National} alt="" />
            </div>
          </div>
          <div className="relative top-[100px]">
            <img src={Certifcateimg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
