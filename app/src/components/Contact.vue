<template>
  <div class="py-0 mt-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="mt-2 text-3xl font-semibold text-yellow-500 text-gray-950"
          style="font-family: 'Finger Paint', cursive">
          Give us your feedback or comment <br />on our services
        </h1>
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
              Reach us today through our phone number. Give us a comment or feedback and we will get back to you.
            </p>
            <div>
              <p class="flex items-center text-gray-700 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 1l7.997 4.884v8.232L10 19l-7.997-4.884V5.884z" />
                </svg>
                Phone: +254113984146
              </p>
              <p class="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M4.228 2.634a8.007 8.007 0 0111.544 0l.866.866a8.007 8.007 0 010 11.544l-.866.866a8.007 8.007 0 01-11.544 0l-.866-.866a8.007 8.007 0 010-11.544l.866-.866z"
                  />
                </svg>
                Address: 937 Ngong Road, Nairobi
              </p>
            </div>
          </div>
        </div>
        <!-- Right Side -->
        <div class="lg:w-1/2 hover:border-yellow-400 border-2 border-black-400">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Updated Form -->
            <form
              @submit.prevent="submitFeedback"
              class="space-y-4"
            >
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  @input="validateName"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Name"
                />
                <p class="text-gray-500 text-xs mt-1">You cannot type numbers in the name field.</p>
              </div>
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  @input="validatePhone"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Phone"
                />
                <p class="text-gray-500 text-xs mt-1">You cannot type letters in the phone number field.</p>
              </div>
              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  class="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
              <!-- Success Message -->
              <div v-if="successMessage" class="mt-4 text-green-500 text-sm">
                {{ successMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      successMessage: '',
    };
  },
  methods: {
    validateName() {
      this.form.name = this.form.name.replace(/[0-9]/g, ''); // Remove numbers
    },
    validatePhone() {
      this.form.phone = this.form.phone.replace(/[A-Za-z]/g, ''); // Remove letters
    },
    async submitFeedback() {
      try {
        const response = await fetch('http://localhost/feedback.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(this.form),
        });

        if (response.ok) {
          this.successMessage = 'Feedback submitted successfully!';
          this.form = { name: '', email: '', phone: '', message: '' };
          setTimeout(() => (this.successMessage = ''), 3000);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>
