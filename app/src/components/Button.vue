<template>
  <section class="py-0 lg:py-14 max-w-7xl mx-auto px-0 sm:px-8">
    <h1 class="text-4xl font-bold text-center mb-10">We Are Here to Help</h1>
    <p class="mt-2 text-gray-950 text-center">
          We’re dedicated to supporting vulnerable children by providing them with the resources, mentorship, and opportunities.<br />
          Together, we can create a brighter future for every child.
        </p><br />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col border-2">
        <img
          :src="image1"
          alt="Night Lights"
          class="w-full h-1/2 object-cover"
        />
        <div class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-black">EDUCATION</h1>
            <p class="text-black py-3">
              We believe every child deserves the opportunity to learn, grow, and thrive. Education is the foundation for a brighter future, and we are committed to breaking barriers that prevent children from accessing quality learning opportunities.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col border-2">
        <img
          :src="image2"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-black">HEALTHCARE</h1>
            <p class="text-black py-3">
              Every child deserves access to quality healthcare to lead a happy, healthy life. By addressing critical healthcare needs, we aim to create a world where children not only survive but thrive.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col border-2">
        <img
          :src="image3"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-black">FOOD AND WATER</h1>
            <p class="text-black py-3">
              We believe that every child deserves access to the most basic necessities: nutritious food and clean water. These essentials are not just about survival—they are the foundation for a healthy, happy, and thriving life.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col border-2">
        <img
          :src="image4"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-black">SPORTING ACTIVITIES</h1>
            <p class="text-black py-3">
              Sports are more than just games. They are powerful tools for fostering physical health, building confidence, and teaching valuable life skills. Every child deserves the opportunity to play, grow, and thrive through the joy of sports.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="w-full relative rounded-2xl overflow-hidden flex flex-col border-2">
        <img
          :src="image5"
          alt="Welcome Aboard"
          class="w-full h-1/2 object-cover"
        />
        <div class="bg-secondary-color p-6 flex-grow rounded-b-2xl flex flex-col justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-black">FASHION SHOW</h1>
            <p class="text-black py-3">
              We specialize in creating spectacular fashion shows that highlight the latest trends, celebrate creativity, and provide an unforgettable experience for all attendees. From concept to execution, our goal is to ensure a seamless and memorable event.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from '../assets/education.avif';
import image2 from '../assets/healthcare.jpg';
import image3 from '../assets/water.avif';
import image4 from '../assets/sporting.jpg';
import image5 from '../assets/hands.jpg';

export default {
  data() {
    return {
      image1,
      image2,
      image3,
      image4,
      image5,
    };
  },
};
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
