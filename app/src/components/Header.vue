<template>
  <div>
    <!-- Header -->
    <header
      :class="{
        'fixed top-0 inset-x-0 z-20 bg-white shadow transition-transform duration-300': true,
        hidden: isHeaderHidden,
      }"
    >
      <div
        class="flex items-center justify-between h-14 lg:h-20 xl:h-24 mx-auto max-w-7xl px-4 lg:px-10"
      >
        <!-- Logo -->
        <div class="flex items-center gap-4">
          <button
            class="text-2xl lg:hidden text-black p-2 hover:text-blue-500"
            @click="toggleMenu2"
          >
            {{ close2 ? "☰" : "✘" }}
          </button>
          <router-link to="/" class="flex items-center" @click.native="closeMenu">
            <img
              src="../assets/logos.png"
              alt="Logo"
              class="h-12 lg:h-14 object-contain"
            />
          </router-link>
        </div>

        <!-- Navigation -->
        <nav
          :class="{ hidden: close2, flex: !close2 }"
          class="absolute lg:static flex-col lg:flex lg:flex-row lg:items-center lg:gap-6 bg-black lg:bg-transparent text-white lg:text-black top-14 lg:top-0 inset-x-0 lg:inset-auto px-6 lg:px-0 lg:w-auto z-10"
        >
          <ul
            class="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-0"
          >
            <li>
              <router-link
                to="/"
                class="hover:text-blue-500"
                active-class="text-blue-500"
                @click.native="closeMenu"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/programs"
                class="hover:text-blue-500"
                active-class="text-blue-500"
                @click.native="closeMenu"
              >
                Programs
              </router-link>
            </li>
            <li>
              <router-link
                to="/aboutus"
                class="hover:text-blue-500"
                active-class="text-blue-500"
                @click.native="closeMenu"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-blue-500"
                active-class="text-blue-500"
                @click.native="closeMenu"
              >
                Contact Us
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Donate Button -->
        <div class="hidden lg:block">
          <router-link
            to="/Donations"
            class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            Donate
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close2: true,
      lastScrollY: 0,
      isHeaderHidden: false,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  watch: {
    $route(to) {
      if (to.path === "/") {
        this.close2 = true;
      }
    },
  },
  methods: {
    toggleMenu2() {
      this.close2 = !this.close2;
    },
    closeMenu() {
      this.close2 = true;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isHeaderHidden = currentScrollY > this.lastScrollY && currentScrollY > 50;
      this.lastScrollY = currentScrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
header.hidden {
  transform: translateY(-100%);
}
header {
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}
</style>
