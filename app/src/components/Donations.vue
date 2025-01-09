<template>
  <div class="py-0 mt-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="mt-2 text-3xl font-semibold text-yellow-500"
        style="font-family: 'Finger Paint', cursive">
          Make a Donation
        </h1>
        <p class="mt-4 text-gray-950">
          Your contribution can make a big difference.<br />
          Please fill in the details below.
        </p>
      </div>
      
        <div class="mt-4 bg-white border-2 border-gray-200  p-6 rounded-lg shadow-md max-w-md mx-auto">
          <form @submit.prevent="submitDonation" class="space-y-6">
            <!-- <--Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="donationForm.name"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter name"
              />  
            </div>
            <!-- Amount -->
            <div>
              <label
                for="amount"
                class="block text-sm font-medium text-gray-700"
                >Amount</label
              >
              <input
                type="number"
                id="amount"
                v-model="donationForm.amount"
                required
                min="1"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter amount"
              />
              <p v-if="formErrors.amount" class="text-red-500 text-sm mt-1">
                {{ formErrors.amount }}
              </p>
            </div>

            <!-- Phone Number -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <input
                type="tel"
                id="phone"
                v-model="donationForm.phone"
                required
                pattern="[0-9]{10}"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter phone number"
              />
              <p v-if="formErrors.phone" class="text-red-500 text-sm mt-1">
                {{ formErrors.phone }}
              </p>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded-md"
              >
                Donate
              </button>
            </div>

            <!-- Notifications -->
            <div v-if="successMessage" class="mt-4 text-green-500 text-sm">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="mt-4 text-red-500 text-sm">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      donationForm: {
        amount: "",
        phone: "",
      },
      successMessage: "",
      errorMessage: "",
      formErrors: {}, //store validation errors
      accessToken: "", // Store the access token
    };
  },
  methods: {
    // Fetch the access token before submitting the donation
    async fetchAccessToken() {
      try {
        const response = await fetch("http://localhost/accessToken.php");
        const data = await response.json();

        if (data.access_token) {
          this.accessToken = data.access_token;
        } else {
          throw new Error("Failed to fetch access token");
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
        this.errorMessage = "Failed to fetch access token. Please try again.";
        setTimeout(() => (this.errorMessage = ""), 3000);
      }
    },

    // Validate the form input
    validateForm() {
      this.formErrors = {};

      if (!this.donationForm.amount || this.donationForm.amount <= 0) {
        this.formErrors.amount = "Please enter a valid amount.";
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(this.donationForm.phone)) {
        this.formErrors.phone = "Please enter a valid 10-digit phone number.";
      }

      return Object.keys(this.formErrors).length === 0;
    },

    // Submit donation request
    async submitDonation() {
      if (!this.validateForm()) return;

      // Format phone number to start with 254
      const formattedPhone = this.donationForm.phone.startsWith("254")
        ? this.donationForm.phone
        : "254" + this.donationForm.phone.slice(1);

      try {
        const response = await fetch("http://localhost/stkpush.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            amount: this.donationForm.amount,
            phone: formattedPhone,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          this.successMessage = "Donation successful!!😃";
          this.donationForm = { amount: "", phone: "" }; // Reset form
          setTimeout(() => (this.successMessage = ""), 3000);
        } else {
          const errorData = await response.json();
          this.errorMessage =
            errorData.error || "Failed to send donation request.";
          setTimeout(() => (this.errorMessage = ""), 3000);
        }
      } catch (error) {
        console.error("Error:", error);
        this.errorMessage = "An error occurred. Please try again.";
        setTimeout(() => (this.errorMessage = ""), 3000);
      }
    },
  },
};
</script>

<style scoped>
/* Reusable styles for form and buttons */
form input {
  outline: none;
  transition: border-color 0.3s ease-in-out;
}
form input:focus {
  border-color: #fbbf24; /* Yellow-500 */
}
form p {
  margin-top: 0.5rem;
}
</style>
