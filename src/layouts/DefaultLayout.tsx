import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export default function DefaultLayout({ children }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between md:px-5 lg:px-28  bg-[#E5E5E5] ">
      <Link to="/">
        <header className="py-5 flex justify-center items-center gap-1.5">
          <div className="w-[22px] h-[16.13px] flex flex-col justify-between">
            <div className="bg-[#21B6B7] w-[7.33px] h-[4.4px]"></div>
            <div className="bg-[#21B6B7] w-[14.67px] h-[4.4px]"></div>
            <div className="bg-[#21B6B7] w-[22px] h-[4.4px]"></div>
          </div>
          <h1 className="font-bold text-2xl font-poppins text-[#B9C9D1]">
            World
            <span className="text-[#21B6B7] ">Ranks</span>
          </h1>
        </header>
      </Link>
      <main className="flex-1 p-6">{children}</main>
      <footer className="text-[#B9C9D1]">
        <p className="text-center">
          your name <a href="">@AlexisNP</a>
          <a href="https://devchallenges.io" target="_blank">
            devchallenges.io
          </a>
        </p>
      </footer>
    </div>
  );
}
