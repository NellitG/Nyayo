<template>
  <div class="py-0 mt-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <!-- <h2 class="text-3xl font-bold text-gray-950">Talk To Us</h2> -->
      <h1 class="mt-2 text-3xl font-semibold text-blue-900 text-gray-950">Give us your feedback or comment <br>on our services</h1>
    </div>
    <div class="mt-10 flex flex-col lg:flex-row gap-10">
      <!-- Left Side -->
      <div class="lg:w-1/2">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://img.freepik.com/free-photo/volunteers-holding-boxes-containing-donations-charity_23-2149230562.jpg?ga=GA1.1.487577296.1727511220&semt=ais_hybrid/400x200" 
            alt="Happy Customers"
            class="w-full rounded-md mb-6"
          />
          <p class="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form, by injected
            randomised words even slightly believable.
          </p>
          <div>
            <p class="flex items-center text-gray-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 1l7.997 4.884v8.232L10 19l-7.997-4.884V5.884z" />
              </svg>
              Phone: +254798620045
            </p>
            <p class="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.228 2.634a8.007 8.007 0 0111.544 0l.866.866a8.007 8.007 0 010 11.544l-.866.866a8.007 8.007 0 01-11.544 0l-.866-.866a8.007 8.007 0 010-11.544l.866-.866z" />
              </svg>
              Address: Moi Avenue Nairobi
            </p>
          </div>
        </div>
      </div>
      <!-- Right Side -->
      <div class="lg:w-1/2">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <form action="#" method="POST" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Your Phone"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</template>