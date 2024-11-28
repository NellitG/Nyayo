<template>
  <div class="bg-gray-50 py-0 mt-24">
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
    >
      <!-- Left Section -->
      <div>
        <div class="relative">
          <span
            class="absolute text-5xl sm:text-6xl lg:text-7xl text-gray-200 top-0 -left-8"
            >“</span
          >
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug"
          >
            FAQ
          </h2>
        </div>
        <p class="mt-4 text-sm sm:text-base text-gray-600">
          Explore the common questions and answers
        </p>
        <p class="mt-4 text-sm sm:text-base text-gray-600">
          Explore some of the most commonly asked questions below. If you don't
          find what you're looking for, feel free to reach out—we're here to
          help!"
        </p>
      </div>

      <!-- Right Section -->
      <div class="space-y-6">
        <!-- FAQ Items -->
        <div class="space-y-4">
          <!-- FAQ Items with interactivity -->
          <div v-for="(faq, index) in faqs" :key="index">
            <div
              @click="toggleFAQ(index)"
              class="flex items-center justify-between border-b border-gray-300 pb-3 cursor-pointer"
            >
              <h4 class="font-medium text-base sm:text-lg text-gray-800">
                {{ faq.question }}
              </h4>
              <span class="text-gray-500 text-base">
                {{ faq.expanded ? "-" : "+" }}
              </span>
            </div>
            <p
              v-if="faq.expanded"
              class="mt-2 text-sm sm:text-base text-gray-600"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>

        <!-- Footer Text and Button -->
        <div>
          <p class="text-blue-950 font-medium text-lg text-center md:text-left">
            Didn't find the answer you are looking for?
          </p>
          <a
            href="/contact"
            class="mt-4 inline-block px-6 py-3 border border-gray-800 rounded-full text-gray-800 font-medium hover:bg-gray-100 w-full md:w-auto"
          >
            Contact our support
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "How Can I be part of the organization?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority Lorem Ipsum available amet.",
          expanded: true,
        },
        {
          question: "How can I make payment?.",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority Lorem Ipsum available amet.",
          expanded: false,
        },
        {
          question: "Is my donation tax deductible?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority Lorem Ipsum available amet.",
          expanded: false,
        },
        {
          question: "How do I volunteer to save children?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority Lorem Ipsum available amet.",
          expanded: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      // Toggle the expanded state of the selected FAQ
      this.faqs[index].expanded = !this.faqs[index].expanded;
    },
  },
};
</script>

<style>
/* Add any additional custom styles here if needed */
</style>
