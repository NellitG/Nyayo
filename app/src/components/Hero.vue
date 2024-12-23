<template>
  <div class="relative w-full h-screen flex items-center justify-center">
    <img
      :src="feeImage"
      alt="bg-img"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="container mx-auto relative z-10 mt-20 py-10 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-12 text-center lg:text-center">
        <div
          class="absolute flex flex-col bg-clip-border text-blue-900 px-8 py-6 border border-white shadow-lg col-span-12 rounded-xl shadow-black/10 backdrop-blur-sm backdrop-saturate-200 lg:col-span-8 lg:ml-20"
        >
          <h1
            class="tracking-normal font-semibold text-black text-3xl sm:text-4xl md:text-5xl leading-snug"
          >
            Empowering Every Ability
          </h1>
          <h2
            class="antialiased lg:text-5xl text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-black mb-6 mt-4 lg:text-black"
          >
            Enriching Every Life
          </h2>

          <div class="flex flex-wrap justify-start gap-4 mt-4">
            <router-link to="/Donations">
              <button
                class="align-middle select-none font-semibold text-center uppercase transition-all text-xs sm:text-sm py-3 px-6 rounded-lg bg-yellow-400 text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85"
                type="button"
              >
                Donate
              </button>
            </router-link>
            <router-link to="/contact">
              <button
                class="align-middle select-none font-semibold text-center uppercase transition-all text-xs sm:text-sm py-3 px-6 rounded-lg bg-yellow-400 text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-85"
                type="button"
              >
                Contact Us
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feeImage from "../assets/Hero.jpg";

export default {
  data() {
    return {
      feeImage,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
