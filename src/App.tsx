import type { Component } from "solid-js";
import { For } from "solid-js";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

const App: Component = () => {
  const sections: Array<string> = ["rockets", "testimonials", "contact"];
  return (
    <div class="min-h-screen bg-slate-300 text-slate-900 dark:bg-gray-950 dark:text-slate-200">
      <Nav />
      <main class="mx-auto max-w-4xl">
        <Hero />
        <For each={sections}>
          {(section, id) => {
            return <Sections section={section} id={id()} />;
          }}
        </For>
      </main>
      <Footer />
    </div>
  );
};

export default App;
