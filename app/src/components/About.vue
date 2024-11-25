<template>
  <div class="bg-gray-50 py-0 relative overflow mt-32">
  <!-- Watermark -->
  <div class="absolute inset-0 flex justify-center items-center">
    <p class="text-9xl font-bold text-gray-200 opacity-10 tracking-widest">
      NYAYO INC
    </p>
  </div>

  <div class="relative container mx-auto px-6 lg:px-20 z-10">
    <div class="grid grid-cols-1 gap-16">
      <!-- Our Vision Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Image on the Left -->
        <div class="relative">
          <div class="absolute inset-0 bg-yellow-400 w-5/6 h-5/6 -z-10 transform translate-x-4 translate-y-4 rounded-md"></div>
          <img
            src="https://img.freepik.com/free-photo/full-shot-happy-kids-outdoors_23-2148761594.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid"
            alt="Our Vision Image"
            class="rounded-md shadow-lg h-3/4 w-3/4 object-cover"
          />
        </div>
        <!-- Text on the Right -->
        <div>
          <h3 class="text-4xl font-semibold text-gray-800">Our Vision</h3>
          <p class="mt-2 text-gray-600 text-left">
            To ensure that every differently-abled child/individual has access to quality digital education, and has access to the same opportunities as any other child/individual, despite their background differences.
          </p>
        </div>
      </div>

      <!-- Our Mission Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text on the Left -->
        <div>
          <h3 class="text-4xl font-semibold text-gray-800">Our Mission</h3>
          <p class="mt-2 text-gray-600 text-left">
            We believe in creating a world where every differently-abled child has access to quality digital education.
          Join us in our mission. Empowering Every Ability, Enriching Every Life.
          </p>
        </div>
        <!-- Image on the Right -->
        <div class="relative">
          <div class="absolute inset-0 bg-blue-950 w-5/6 h-5/6 -z-10 transform translate-x-4 translate-y-4 rounded-md"></div>
          <img
            src="https://img.freepik.com/free-photo/medium-shot-boys-hugging_23-2148860422.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid/100x50"
            alt="Our Mission Image"
            class="rounded-md shadow-lg w-3/4 h-3/4 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

</template>
