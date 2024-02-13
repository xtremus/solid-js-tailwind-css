import type { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer id="footer" class="mt-4  bg-sky-700 text-xl text-white">
      <section class="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way
          <br />
          Fairfield, New Jersey 12345-5555
          <br />
          Email:
          <a href="mailto:inquiries@acmerockets.com">
            Inquires@AcmeRockets.com
          </a>
          <br />
          Phone: <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <nav class="hidden flex-col gap-2 md:flex" aria-label="footer">
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
        <div class="flex flex-col sm:gap-2">
          <p class="text-right">
            Copyright &copy; <span id="year">2022</span>
          </p>
          <p class="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
