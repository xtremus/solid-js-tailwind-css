import type { Component } from "solid-js";
import rocketDab from "../img/rocketdab.png";

const Hero: Component = () => {
  return (
    <>
      <section
        id="hero"
        class="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8  p-6  sm:flex-row"
      >
        <article class="sm:w-1/2">
          <h2 class="sm:font-b max-w-md text-center text-4xl font-bold text-slate-800 sm:text-left dark:text-gray-100">
            We boldly Go{" "}
            <span class="text-sky-700 dark:text-sky-200">Where No Rocket </span>
            Has Gone Before...
          </h2>
          <p class="mt-4 max-w-md text-center text-2xl text-slate-800 sm:text-left dark:text-gray-300">
            We're building rockets for the next century today. From the moon to
            Mars, Jupiter and beyond...
          </p>
          <p class="mt-4 max-w-md text-center text-2xl text-slate-800 sm:text-left dark:text-gray-300">
            Think ACME Rockets.
          </p>
        </article>
        <img src={rocketDab} class="w-1/2" alt="Rocket Dab" />
      </section>
      <hr class="mx-auto w-1/2 bg-slate-900 dark:bg-slate-300" />
    </>
  );
};

export default Hero;
