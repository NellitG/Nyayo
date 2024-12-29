<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Gallery Heading -->
        <h2 class="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
  
        <!-- Responsive Image Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Repeatable Image Card -->
          <div class="relative group">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder Image"
              class="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
            >
              <p class="text-white text-lg font-semibold">Image Caption</p>
            </div>
          </div>
  
          <!-- Add more images -->
          <div class="relative group">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder Image"
              class="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
            >
              <p class="text-white text-lg font-semibold">Image Caption</p>
            </div>
          </div>
  
          <!-- Add as many images as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  