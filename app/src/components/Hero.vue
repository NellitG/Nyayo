<template>
  <div class="bg-gray-50 py-10 mt-24">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Images -->
        <div class="flex flex-col space-y-4 md:w-1/4">
          <img
            src="../assets/smile.avif"
            alt="Nature Image 1"
            class="rounded-lg shadow-md"
          />
          <img
            src="../assets/water.avif"
            alt="Nature Image 2"
            class="rounded-lg shadow-md"
          />
        </div>
        <!-- Hero Content -->
        <div class="text-center md:text-left md:w-1/2 md:px-8">
          <h1
            class="text-6xl text-center font-bold text-yellow-500"
            style="font-family: 'Finger Paint', cursive"
          >
            Nyayo's<br /><span class="text-blue-900 font-semibold"
              >Foundation</span
            >
          </h1>

          <h1
            class="text-4xl mt-4 text-center text-white bg-gradient-to-r from-blue-500 to-yellow-500 p-4 rounded-lg"
            style="font-family: 'Finger Paint', cursive"
          >
            <marquee behavior="scroll">
              Empowering Every Ability.<br />
              Enriching Every Life.<br />
              Building Futures
            </marquee>
          </h1>

          <div
            class="mt-6 flex xl:justify-center md:justify-start space-x-4 justify-center"
          >
            <router-link
              to="/aboutus"
              class="bg-blue-900 border border-gray-300 text-white px-6 py-2 rounded"
            >
              Join us
            </router-link>
            <router-link
              to="/Donations"
              class="bg-blue-900 text-white px-6 py-2 rounded"
            >
              Donate
            </router-link>
          </div>
        </div>
        <!-- Right Images -->
        <div class="flex flex-col space-y-4 md:w-1/4 mt-4">
          <img
            src="../assets/food.avif"
            alt="Nature Image 3"
            class="rounded-lg shadow-md"
          />
          <img
            src="../assets/healthcare.jpg"
            alt="Nature Image 4"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
      <!-- Additional Pictures -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 hidden md:grid xl:ml-24"
      >
        <img
          src="../assets/running.jpg"
          alt="Extra Image 1"
          class="rounded-lg shadow-md"
        />
        <img
          src="../assets/playing.avif"
          alt="Extra Image 2"
          class="rounded-lg shadow-md"
        />
        <img
          src="../assets/smiling.avif"
          alt="Extra Image 3"
          class="rounded-lg shadow-md"
        />
        <!-- <img src="../assets/community.jpg" alt="Extra Image 4" class="rounded-lg shadow-md"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap");
</style>
