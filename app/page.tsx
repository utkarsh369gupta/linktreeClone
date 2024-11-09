import Image from "next/image";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="ml-[7vw] justify-center flex flex-col gap-8 font-medium pt-7">
          <h1 className="text-[#d2e823] text-7xl font-extrabold ">Everything you are. In one, simple link in bio.</h1>
          <p className="text-[#d2e823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input gap-4 flex">
            <input className="rounded-md p-3" type="text" placeholder="linktr.ee/yourname"/>
            <button className="bg-[#e9c0e9] rounded-full p-5">Claim your Linktree</button>
          </div>
        </div>
        <div className="mr-[7vw] justify-center flex flex-col gap-8 font-medium pt-28">
          <img className="h-[80vh]"  src="homeImage.png" alt="home image" />
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh]">
      </section>
    </main>

  );
}

