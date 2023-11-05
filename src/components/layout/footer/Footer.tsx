"use client";

import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "../web-cents/Logo";

export const Footer = () => {
  return (
    <FlowbiteFooter container className="bg-black rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between md:flex md:grid-cols-2">
          <div className="text-center md:text-left">
            <Logo />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="About" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Company</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Products</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">GitHub</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Twitter</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full flex items-center justify-center mt-4">
          <div className="flex space-x-6">
            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
            <FlowbiteFooter.Icon href="#" icon={BsGithub} />
          </div>
        </div>
        <div className="text-center mt-4">
          <FlowbiteFooter.Copyright by="Leilao" href="#" year={2023} />
        </div>
      </div>
    </FlowbiteFooter>
  );
};