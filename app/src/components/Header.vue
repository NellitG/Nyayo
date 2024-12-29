<template>
  <div>
    <!-- Header -->
    <header
      :class="{
        'h-14 lg:h-36 fixed w-full top-0 z-20 bg-white': true,
      }"
    >
      <div class="flex items-center justify-between mx-auto max-w-7xl h-full px-4 lg:px-0">
        <!-- Logo and Menu Button -->
        <div class="flex items-center gap-6">
          <button
            class="text-2xl p-1 text-black hover:text-blue-500 lg:hidden"
            @click="toggleMenu"
          >
            {{ close2 ? "☰" : "✘" }}
          </button>
          <router-link to="/" class="flex items-center" @click="closeMenu">
            <img
              src="../assets/logos.png"
              alt="Logo"
              class="h-12 lg:h-14 object-contain"
            />
          </router-link>
        </div>

        <!-- Navigation Menu -->
        <nav
          :class="[
            'lg:flex lg:items-center flex-col lg:flex-row absolute lg:static top-14 left-0 w-full lg:w-auto transition-transform duration-300 ease-in-out',
            close2 ? 'hidden lg:flex' : 'flex bg-black text-white lg:bg-white lg:text-black',
          ]"
        >
          <ul
            class="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 lg:mt-0 lg:items-center px-4 lg:px-0"
          >
            <li>
              <router-link
                to="/"
                class="hover:text-blue-900"
                active-class="text-green-500"
                @click="closeMenu"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/programs"
                class="hover:text-green-500"
                active-class="text-green-500"
                @click="closeMenu"
              >
                Programs
              </router-link>
            </li>
            <li>
              <router-link
                to="/aboutus"
                class="hover:text-green-500"
                active-class="text-green-500"
                @click="closeMenu"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-green-500"
                active-class="text-green-500"
                @click="closeMenu"
              >
                Contact Us
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close2: true, // Tracks the state of the mobile menu
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  methods: {
    toggleMenu() {
      this.close2 = !this.close2; // Toggle the menu state
    },
    closeMenu() {
      this.close2 = true; // Close the menu when a navigation link is clicked
    },
  },
};
</script>

<style scoped>
/* Smooth transitions and responsive design */
header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
nav.hidden {
  display: none;
}
nav.flex {
  display: flex;
}
button {
  font-size: 2rem;
}
</style>
