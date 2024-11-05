<template>
    <div class="max-w-4xl mx-auto space-y-24 py-16">
      <div class="mt-10 relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden" 
           style="background-image: url('https://img.freepik.com/free-photo/medium-shot-smiley-kid-sitting-outdoors_23-2148860402.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid'); min-height: 300px;">
        
        <!-- Overlay -->
        <div class="bg-black bg-opacity-40 h-full w-full absolute inset-0"></div>
        
        <!-- Content on top of the background image and overlay -->
        <div class="relative z-10 p-8 text-white flex items-center justify-center flex-col text-center">
          <h2 class="text-5xl font-bold mb-4">Join Our Action!</h2>
          <h2 class="text-5xl font-semibold mb-6">Everyone Can Help.</h2>
          
          <!-- Buttons -->
          <div class="flex space-x-4">
            <router-link to="/getinvolved">
              <button class="bg-yellow-400 text-gray-950 font-semibold px-6 py-3 transition duration-300">
                Donate
              </button>
            </router-link>
            <router-link to="/getinvolved">
              <button class="bg-indigo-950 text-white font-semibold px-6 py-3 transition duration-300">
                Become a Volunteer
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped></style>
  