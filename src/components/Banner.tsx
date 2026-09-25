import React from 'react';
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <div className='container mx-auto'>
             <section className="bg-neutral-900 rounded-2xl mx-4 my-6 px-8 py-10 md:px-14 md:py-14 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
       
        <div className="max-w-lg">
          <p className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-3">
            Workout Library
          </p>

          <h1 className="text-white font-extrabold uppercase text-3xl md:text-5xl leading-tight tracking-tight mb-4">
            Train with intent. Log every set.
          </h1>

          <p className="text-gray-400 text-sm md:text-base mb-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="/"
            className="inline-block bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-md transition-colors"
          >
            Browse Workouts
          </Link>
        </div>

       
        <div className="shrink-0">
          <Image
            src={banner}
            alt="Muscle anatomy illustration on an exercise bike"
            width={260}
            height={260}
            priority
            className="w-56 md:w-64 h-auto object-contain"
          />
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;