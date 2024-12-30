<template>
  <footer class="bg-white">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex flex-col items-center text-center">
        <div class="flex flex-wrap justify-center mt-6 -mx-4 font-semibold">
          <router-link
            to="/"
            class="mx-4 text-sm text-gray-950 transition-colors duration-300 hover:text-blue-900"
            aria-label="Home"
            >Home</router-link
          >
          <router-link
            to="/programs"
            class="mx-4 text-sm text-gray-950 transition-colors duration-300 hover:text-blue-900"
            aria-label="Programs"
            >Programs</router-link
          >
          <router-link
            to="/aboutus"
            class="mx-4 text-sm text-gray-950 transition-colors duration-300 hover:text-blue-900"
            aria-label="About"
            >About Us</router-link
          >
          <router-link
            to="/contact"
            class="mx-4 text-sm text-gray-950 transition-colors duration-300 hover:text-blue-900"
            aria-label="Contact"
            >Contact Us</router-link
          >
        </div>
      </div>

      <hr class="my-6 border-gray-200 md:my-10" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-950">
          © 2024 Nyayo's Foundation. All Rights Reserved.
        </p>

        <div class="flex -mx-2">
          <!-- Twitter Icon -->
          <a
            href="https://x.com/NyayosOrg?t=OSIvdd1EJxF6Ny-U9jA4dA&s=09"
            target="_blank"
            class="mx-2 text-gray-950 transition-colors duration-300 hover:text-blue-400"
            aria-label="Twitter"
          >
            <svg
              class="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 3C23 3 19 7 12 7C7 7 3 5 3 5V9C3 9 7 7 12 7C19 7 23 3 23 3ZM0 9C0 9 4 5 12 5C18 5 22 9 22 9H0ZM12 19C12 19 6 13 0 9H22C16 13 12 19 12 19Z"
              ></path>
            </svg>
          </a>

          <!-- TikTok Icon -->
          <a
            href="https://www.tiktok.com/@nyayosfoundation?_t=ZM-8sUWIsCdBy9&_r=1"
            target="_blank"
            class="mx-2 text-gray-950 transition-colors duration-300 hover:text-black"
            aria-label="TikTok"
          >
            <svg
              class="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2C5.2 2 2 5.2 2 9C2 12.8 5.2 16 9 16C11.4 16 13.5 15.1 14.8 13.7L20.7 17.8C21.4 18.1 22.5 17.6 22.5 16.9V7.9C22.5 7.2 21.4 6.7 20.7 7L14.8 11.1C13.5 9.7 11.4 9 9 9C6.1 9 4 6.9 4 5C4 3.1 6.1 2 9 2C9.2 2 9.4 2 9.5 2.1L9.4 2.6C8.7 3.7 9 5 9 5C9 5 9.5 5 9 5.5C8.7 6 9 6.5 9.5 6.5C10 7 10 7 10.5 6.5C10.9 6 11 5 10.7 5C9.5 4.4 8.5 2 9 2Z"
              ></path>
            </svg>
          </a>

          <!-- LinkedIn Icon -->
          <a
            href="https://www.linkedin.com/in/nyayo-s-foundation-1b4b02342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="mx-2 text-gray-950 transition-colors duration-300 hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <svg
              class="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3ZM12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11ZM7 16C8.10457 16 9 15.1046 9 14C9 12.8954 8.10457 12 7 12C5.89543 12 5 12.8954 5 14C5 15.1046 5.89543 16 7 16Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
