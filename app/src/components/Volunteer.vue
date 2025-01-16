<template>
  <div class="py-0 mt-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1
          class="mt-2 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-yellow-500"
          style="font-family: 'Finger Paint', cursive"
        >
          Volunteer with Nyayo Foundation
        </h1>
        <p class="text-gray-600 mt-4">
          Join us in making a difference. Fill out the form below to volunteer.
        </p>
      </div>
      <div class="mt-10 flex flex-col lg:flex-row gap-10">
        <!-- Left Section -->
        <div class="lg:w-1/2">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://img.freepik.com/free-photo/african-boys-with-football-ball_23-2148917976.jpg?ga=GA1.1.487577296.1727511220&semt=ais_tags_boosted"
              alt="Volunteer"
              class="w-full rounded-md mb-6"
            />
          </div>
        </div>
        <!-- Right Section -->
        <div class="lg:w-1/2 hover:border-yellow-400 border-2 border-black-400">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <form
              @submit.prevent="submitVolunteer"
              method="post"
              class="space-y-4"
            >
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="volunteer[fullName]"
                  v-model="form.name"
                  required
                  @input="validateName"
                  class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Name"
                />
                <p v-if="errors.name" class="text-red-500 text-sm">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="volunteer[email]"
                  v-model="form.email"
                  required
                  class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>

              <!-- Phone -->
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="volunteer[phoneNumber]"
                  v-model="form.phone"
                  required
                  @input="validatePhone"
                  class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Your Phone"
                />
                <p v-if="errors.phone" class="text-red-500 text-sm">
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Why Volunteer -->
              <div>
                <label
                  for="volunteerMotivation"
                  class="block text-sm font-medium text-yellow-500"
                  style="font-family: 'Finger Paint', cursive"
                >
                  Why do you want to volunteer with Nyayo?
                </label>
                <textarea
                  id="volunteerMotivation"
                  name="volunteerMotivation"
                  v-model="form.volunteerMotivation"
                  rows="4"
                  maxlength="150"
                  required
                  class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="Tell us in 150 words or less"
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
        name: "",
        email: "",
        phone: "",
        volunteerMotivation: "",
      },
      errors: {
        name: "",
        phone: "",
      },
      successMessage: "",
    };
  },
  methods: {
    validateName() {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(this.form.name)) {
        this.errors.name = "Name must only contain letters and spaces.";
      } else {
        this.errors.name = "";
      }
    },
    validatePhone() {
      const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneRegex.test(this.form.phone)) {
        this.errors.phone =
          "Phone number must be 10-15 digits, optionally starting with +.";
      } else {
        this.errors.phone = "";
      }
    },
    async submitVolunteer() {
      if (this.errors.name || this.errors.phone) {
        return; // Prevent form submission if there are validation errors
      }

      try {
        const response = await fetch("http://localhost/volunteer.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(this.form),
        });

        if (response.ok) {
          this.successMessage =
            "Your volunteer application has been submitted!";
          this.form = {
            name: "",
            email: "",
            phone: "",
            volunteerMotivation: "",
          };

          setTimeout(() => {
            this.successMessage = "";
          }, 3000);
        } else {
          console.error("Submission failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
