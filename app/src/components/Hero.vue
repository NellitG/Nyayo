<template>
   <div class="relative w-full h-screen flex items-center justify-center">
  <img
    src="../assets/computer-classroom-setting.jpg"
    alt="bg-img"
    class="absolute inset-0 w-full h-full object-cover py-10 mt-20"
  />

 <div class="container mx-auto flex items-center justify-center h-screen relative z-10 mt-20 py-10">
  <div class="grid grid-cols-12 text-center lg:text-start">
    <div
      class="relative flex flex-col bg-clip-border lg:ml-20 text-gray-700 px-16 py-0 border border-black shadow-lg col-span-full rounded-xl bg-transparent shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-8"
    >
      <h1
        class="tracking-normal font-semibold text-white lg:text-yellow-400 text-5xl !leading-snug lg:text-6xl"
      >
        Empowering Every Ability
      </h1>
      <h1
        class="text-4xl font-semibold leading-relaxed text-inherit mb-10 mt-6 text-white lg:text-yellow-400"
      >
        Enriching Every Life.
    </h1>
      <div class="flex justify-center gap-4 mb-8 lg:justify-start">
        <router-link to="/contact">
          <button
            class="align-middle select-none font-sans font-semibold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg hover:bg-indigo-400 text-white sm:text-white border-2 border-green-500 shadow-md shadow-primary-color/10 hover:shadow-lg hover:shadow-primary-color/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            contact us
          </button>
        </router-link>
        <router-link to="/getinvolved">
          <button
            class="align-middle select-none font-semibold text-center lg:text-white uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border-indigo-400 border-2 hover:bg-indigo-400 text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
            type="button"
          >
            Donate Now
          </button>
        </router-link>
      </div>
    </div>
  </div>
</div>


</div>
</template>

<script></script>

<style lang="scss" scoped></style>
