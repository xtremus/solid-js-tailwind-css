import type { Component } from "solid-js";
import { For, createSignal } from "solid-js";

const Nav: Component = () => {
  const menuItems = [
    {
      title: "Home",
      href: "#hero",
    },
    {
      title: "Our Rockets",
      href: "#rockets",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "Contact Us",
      href: "#contact",
    },
    {
      title: "Legal",
      href: "#footer",
    },
  ];
  const [toggleMenu, setToggleMenu] = createSignal(false);
  return (
    <header class="sticky top-0 z-10 bg-sky-700 text-gray-100">
      <div class="mx-auto flex max-w-3xl items-center justify-between p-4">
        <h1 class="text-3xl font-medium">
          <a href="#hero" aria-label="top">
            🚀 ACME Rocket: <small class="text-lg">Solid JS</small>
          </a>
        </h1>
        <button
          class={
            (toggleMenu() ? "toggle-btn " : "") +
            "relative h-8 w-8 cursor-pointer text-3xl md:hidden"
          }
          onClick={() => setToggleMenu(!toggleMenu())}
        >
          <div
            class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4
          after:translate-y-3 after:rounded after:bg-white
          after:transition-all after:duration-500 after:content-['']"
          ></div>
          {/* &#9776; */}
        </button>

        <nav class="hidden space-x-8 text-xl md:block" aria-label="main">
          <a href="#rockets" class="hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" class="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" class="hover:opacity-90">
            Contact Us
          </a>
        </nav>
      </div>
      <section
        id="mobile-menu"
        class={
          (!toggleMenu() ? "hidden " : "flex ") +
          "animate-openMenu top-68 absolute w-full origin-top flex-col justify-center bg-slate-950 text-5xl"
        }
        onclick={() => setToggleMenu(!toggleMenu())}
      >
        {/* <button class="text self-end px-6 text-8xl">&times;</button> */}
        <nav
          class="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <For each={menuItems}>
            {(item) => (
              <a
                href={item.href}
                class="w-full py-6 text-center hover:opacity-90"
              >
                {item.title}
              </a>
            )}
          </For>
        </nav>
      </section>
    </header>
  );
};

export default Nav;
