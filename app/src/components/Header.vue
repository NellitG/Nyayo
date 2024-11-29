<template>
  <div>
    <!-- Header section -->
    <header
      :class="{
        'h-14 lg:h-24 fixed w-full top-0 inset-0 z-20 bg-white': isHomePage,
        'h-14 lg:h-24 fixed w-full top-0 inset-0 z-20 bg-white': !isHomePage,
      }"
    >
      <!-- Header content -->
      <div
        class="flex items-center justify-between mx-auto max-w-7xl h-full px-4 lg:px-10"
      >
        <!-- Logo and menu toggle button -->
        <div class="flex items-center gap-6 mt-14">
          <button
            class="text-2xl p-1 text-black hover:text-blue-500 lg:hidden"
            @click="toggleMenu2"
          >
            {{ close2 ? "☰" : "✘" }}
          </button>
          <router-link
            to="/"
            class="flex items-center"
            @click.native="closeMenu"
          >
            <!-- Logo Placeholder -->
            <router-link
  to="/"
  class="flex items-center"
  @click.native="closeMenu"
>
  <img
    src="../assets/logos.png"
    alt="Logo"
    class="h-32 lg:h-24 object-contain"
  />
</router-link>

          </router-link>
        </div>

        <!-- Navigation menu -->
        <nav
          :class="{ hidden: close2, flex: !close2 }"
          class="bg-black lg:bg-white lg:static lg:flex lg:items-center flex-1 justify-center absolute top-14 lg:top-0 left-0 w-auto lg:w-auto"
        >
          <!-- Navigation items -->
          <ul
            class="flex flex-col lg:flex-row gap-4 lg:gap-8 text-white lg:text-black mt-4 lg:mt-14 lg:items-center px-4 lg:px-10"
          >
            <li class="relative group">
              <router-link
                to="/"
                class="hover:text-indigo-950 flex items-center"
                active-class="hover:text-indigo-950"
                @click.native="closeMenu"
              >
                <span>Home</span>
              </router-link>
            </li>  

            <li class="relative group">
              <router-link
                to="/programs"
                class="hover:text-indigo-950 flex items-center"
                active-class="hover:text-indigo-950"
                @click.native="closeMenu"
              >
                <span>Programs</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/aboutus"
                class="hover:text-indigo-950"
                active-class="hover:text-fuchsia-500"
                @click.native="closeMenu"
              >About Us</router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-indigo-950"
                active-class="hover:text-indigo-950"
                @click.native="closeMenu"
              >Contact Us</router-link>
            </li>
          </ul>
        </nav>

        <!-- Donate Button -->
        <div class="hidden lg:block mt-14">
          <router-link
            to="/donate"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
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
    $route(to, from) {
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

      if (currentScrollY > this.lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px, hide the header
        this.isHeaderHidden = true;
      } else if (currentScrollY < this.lastScrollY) {
        // Scrolling up, show the header
        this.isHeaderHidden = false;
      }
      this.lastScrollY = currentScrollY;
    },
  },
  mounted() {
    if (this.isHomePage) {
      this.close2 = true;
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
button {
  font-size: 2rem;
}

header.hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}
</style>
