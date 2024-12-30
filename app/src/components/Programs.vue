<template>
  <div class="py-24 bg-gray-50 relative mr-4">
    <!-- Decorative Background Shapes -->
    <div
      class="absolute top-0 left-0 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply opacity-30 blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply opacity-20 blur-3xl"
    ></div>
    <div class="relative z-10 container mx-auto px-6 lg:px-16 space-y-32">
      <!-- Inclusive Education -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <!-- Image -->
        <div class="lg:col-span-5 relative">
          <div
            class="absolute -top-8 -left-8 w-full h-full bg-yellow-100 rounded-lg -z-10 transform rotate-3"
          ></div>
          <img
            src="../assets/student.avif"
            alt="Inclusive Education"
            class="w-full rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
        <!-- Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h3 class="text-5xl font-semibold text-gray-950">
            Inclusive Education
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            Our mission is to support differently-abled children by providing
            them with access to digital tools and inclusive education.
            <br /><br />
            We aim to create a learning environment that caters to their needs
            and empowers them with the skills to succeed.
          </p>
          <!-- <button class="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition duration-300">
            Learn More
          </button> -->
        </div>
      </div>

      <!-- Workshops & Seminars -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <!-- Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h3 class="text-5xl font-semibold text-gray-950">
            Workshops & Seminars
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            We host educational sessions for parents, caregivers, and educators
            focused on disability rights, inclusion, and the importance of
            tailored education for differently-abled children.
            <br /><br />
            Our workshops foster a deeper understanding of these issues in the
            community.
          </p>
          <router-link to="/Programs">
            <button
              class="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-600 transition duration-300"
            >
              View Events
            </button>
          </router-link>
        </div>
        <!-- Image -->
        <div class="lg:col-span-5 relative">
          <div
            class="absolute -top-8 -right-8 w-full h-full bg-indigo-100 rounded-lg -z-10 transform -rotate-3"
          ></div>
          <img
            src="../assets/workshop.jpg"
            alt="Workshops & Seminars"
            class="w-full rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <!-- Partnerships -->
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        <!-- Image -->
        <div class="lg:col-span-5 relative">
          <div
            class="absolute -top-8 -left-8 w-full h-full bg-purple-100 rounded-lg -z-10 transform rotate-3"
          ></div>
          <img
            src="../assets/partnerships.avif"
            alt="Partnerships"
            class="w-full rounded-lg shadow-lg object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
        <!-- Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h3 class="text-5xl font-semibold text-gray-950">Partnerships</h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            We collaborate with schools, healthcare providers, and community
            organizations to create a network of support for children with
            disabilities.
            <br /><br />
            Our partnerships are key in ensuring that inclusive education is
            accessible to all.
          </p>
          <!-- <button class="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 transition duration-300">
            Partner with Us
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
