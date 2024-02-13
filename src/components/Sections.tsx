import { Show, Switch, Match, For, onMount } from "solid-js";
import type { Component } from "solid-js";

import rocketMan from "../img/rocketman.png";
import rocketRide from "../img/rocketride.png";
import rocketLaunch from "../img/rocketlaunch.png";

interface SectionsProps {
  section: string;
  id: number;
}

function addTestinomial(testimonials: string[]) {
  for (let i in testimonials) {
    let testimonial = document.getElementById("testimonial-" + i);
    if (testimonial) {
      testimonial.insertAdjacentHTML("afterbegin", testimonials[i]);
    }
  }
}

const Sections: Component<SectionsProps> = (prop: SectionsProps) => {
  onMount(() => {
    addTestinomial(testimonials.map((t) => t.remark));
  });
  const { section, id } = prop;
  const titles = ["Our Rockets", "Testimonials", "Contact Us"];
  const testimonials = [
    {
      name: `John Doe`,
      remark: `Acme has always been there for me. Their Explorer rocket arrived
            in a wooden crate as expected. Life-long customer! A++ shopping
            experience.`,
    },
    {
      name: `Marvin The Martian & K-9`,
      remark: `The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
            Space Modulator on several occassions.
            <span class="italic">This makes me very, very angry!</span>
            Nevertheless, K-9 and I have awarded Acme the Martian contract for
            space exploration rockets based on Acme's quality and sturdy
            designs.`,
    },
    {
      name: `Buzz Lightyear`,
      remark: `I knew I not only wanted &#8212;
            <span class="italic">I needed</span> &#8212; Acme's Infinity
            Rocket for my mission in space. Acme delivered in one day! Nothing
            says <q class="italic">Take me to your leader</q> like Acme's
            Infinity Rocket! 💯`,
    },
  ];
  return (
    <>
      <section
        id={section}
        class="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <h2 class="mb-6 text-center text-4xl font-bold text-slate-800 sm:text-5xl dark:text-slate-200 ">
          {titles[id]}
        </h2>
      </section>
      <Switch>
        <Match when={id == 0}>
          <ul class="mx-auto my-12 flex list-none flex-col items-center justify-center gap-8 sm:flex-row ">
            <li class="flex w-2/3 flex-col items-center justify-center rounded-3xl border border-solid border-slate-900 bg-slate-100 px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-200 dark:bg-slate-950">
              <img src={rocketMan} alt="Rocket Man" class="mb-6 w-1/2" />
              <h3 class="text-center text-3xl text-slate-900 dark:text-slate-200 ">
                Explorer
              </h3>
              <p class="hidden text-center text-2xl text-slate-700 sm:block dark:text-slate-500 ">
                $
              </p>
              <p class="text-center text-2xl text-slate-700 sm:hidden dark:text-slate-500 ">
                Affordable Exploration
              </p>
            </li>
            <li class="flex w-2/3 flex-col items-center justify-center rounded-3xl border border-solid border-slate-900 bg-slate-100 px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-200 dark:bg-slate-950">
              <img src={rocketRide} alt="Rocket Ride" class="mb-6 w-1/2" />
              <h3 class="text-center text-3xl text-slate-900 dark:text-slate-200 ">
                Adventurer
              </h3>
              <p class="hidden text-center text-2xl text-slate-700 sm:block dark:text-slate-500 ">
                $$
              </p>
              <p class="text-center text-2xl text-slate-700 sm:hidden dark:text-slate-500 ">
                Best Selling Rocket!
              </p>
            </li>
            <li class="flex w-2/3 flex-col items-center justify-center rounded-3xl border border-solid border-slate-900 bg-slate-100 px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-200 dark:bg-slate-950">
              <img src={rocketLaunch} alt="Rocket Man" class="mb-6 w-1/2" />
              <h3 class="text-center text-3xl text-slate-900 dark:text-slate-200 ">
                Infinity
              </h3>
              <p class="hidden text-center text-2xl text-slate-700 sm:block dark:text-slate-500 ">
                $$$
              </p>
              <p class="text-center text-2xl text-slate-700 sm:hidden dark:text-slate-500 ">
                Luxury Starship
              </p>
            </li>
          </ul>
        </Match>
        <Match when={id == 1}>
          <For each={testimonials}>
            {(testimonial, id) => (
              <figure class="my-4 p-4">
                <blockquote class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                  <p
                    id={"testimonial-" + id()}
                    class="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 
                        before:translate-x-2 before:translate-y-2 before:transform before:font-serif 
                        before:text-9xl before:text-white before:opacity-25 before:content-['_“']
                        after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 
                        after:-translate-y-2 after:transform after:font-serif after:text-9xl 
                        after:text-white after:opacity-25 after:content-['_”']  sm:text-3xl dark:text-slate-400"
                  ></p>
                </blockquote>
                <figcaption class="mt-2 text-right text-xl italic text-slate-500 sm:text-2xl dark:text-slate-400">
                  &#8212; {testimonial.name}
                </figcaption>
              </figure>
            )}
          </For>
        </Match>
        <Match when={id == 2}>
          <form
            action=""
            class="items-left mx-auto flex max-w-4xl flex-col gap-4 p-4 text-2xl sm:text-3xl"
          >
            <label for="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minlength="3"
              maxlength="60"
              placeholder="Your Subject"
              class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black sm:text-3xl dark:border-none"
            />
            <label for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
              class="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black sm:text-3xl dark:border-none"
            ></textarea>
            <button class="w-48 rounded-xl border border-solid border-slate-900 bg-sky-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
              Submit
            </button>
          </form>
        </Match>
      </Switch>
      <Show when={id != 2}>
        <hr class="mx-auto mt-5 w-1/2 bg-slate-950  dark:bg-slate-300" />
      </Show>
    </>
  );
};

export default Sections;
