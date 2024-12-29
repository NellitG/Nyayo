<template>
  <div class="relative w-full h-screen flex items-center justify-center">
    <img
      :src="feeImage"
      alt="bg-img"
      class="absolute inset-0 w-full h-full object-cover object-top"
    />

    <div class="container mx-auto relative z-10 mt-24 py-10 px-4">
      <div class="grid grid-cols-12 text-center lg:text-start">
        <div
          class="relative flex flex-col bg-clip-border lg:ml-20 text-gray-950 px-16 py-0 border border-white shadow-lg col-span-full rounded-xl bg-transparent shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-8"
        >
          <h1
            class="tracking-normal font-semibold text-white lg:text-gray-900 text-5xl !leading-snug lg:text-6xl"
          >
            Nyayo's Foundation
          </h1>
          <p
            class="antialiased font-sans text-2xl font-semibold leading-relaxed text-inherit mb-10 mt-6 text-white lg:text-white"
          >
            Empowering Every Ability, Enriching Every Life
          </p>

          <!-- New Text Block -->
          <p
            class="antialiased font-sans text-lg leading-relaxed text-inherit mb-10 text-white lg:text-black"
          >
            It reflects the organization's commitment to empowering children of all abilities by providing them with the tools and opportunities to succeed through inclusive digital education.
          </p>

          <div class="flex justify-center gap-4 mb-8 lg:justify-start">
            <router-link to="/Donations">
              <button
                class="align-middle select-none font-sans hover:text-black font-semibold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-black sm:text-white border-2 border-blue-900 shadow-md shadow-primary-color/10 hover:shadow-lg hover:shadow-primary-color/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Donate
              </button>
            </router-link>
            <router-link to="/aboutus">
              <button
                class="align-middle select-none font-semibold hover:text-black text-center lg:text-white uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border-blue-900 border-2 text-black hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                type="button"
              >
                read more
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feeImage from '../assets/Hero.jpg'; // Ensure this path is correct

export default {
  data() {
    return {
      feeImage, // Use the imported image in the template
    };
  },
};
</script>

<style scoped>
/* Ensure the background image focuses on the top */
img {
  object-position: top;
}
</style>
