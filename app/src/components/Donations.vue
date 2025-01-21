<template>
  <div class="py-24 mt-30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1
          class="mt-2 text-3xl font-semibold text-yellow-500"
          style="font-family: 'Finger Paint', cursive"
        >
          Make a Donation
        </h1>
        <p class="mt-4 text-gray-950">
          Your contribution can make a big difference.<br />
          Please fill in the details below.
        </p>
      </div>

      <div
        class="mt-4 bg-white border-2 border-yellow-200 p-6 rounded-lg shadow-md max-w-md mx-auto"
      >
        <img
          src="https://img.freepik.com/free-photo/african-kid-enjoying-life_23-2151447572.jpg?ga=GA1.1.487577296.1727511220&semt=ais_tags_boosted"
          alt="Donation"
          class="w-full rounded-lg shadow-md"
        />
        <form method="POST" action="/donate" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="donation[donorName]"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter name"
            />
            <p class="text-gray-500 text-xs mt-1">
              Numbers are not allowed in the name field.
            </p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="donation[donorEmail]"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter email"
            />
          </div>

          <!-- Amount -->
          <div>
            <label for="amount" class="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="donation[amount]"
              required
              min="1"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter amount"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="donation[phoneNumber]"
              required
              pattern="\d{10,15}"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Enter phone number"
            />
            <p class="text-gray-500 text-xs mt-1">
              Enter a valid 10-15 digit phone number.
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
        </form>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      donationForm: {
        name: "",
        amount: "",
        phone: "",
      },
      successMessage: "",
      errorMessage: "",
      formErrors: {},
    };
  },
  methods: {
    validateName(event) {
      // Remove numbers from the name field
      this.donationForm.name = event.target.value.replace(/[0-9]/g, "");
    },
    validatePhone(event) {
      // Remove letters from the phone number field
      this.donationForm.phone = event.target.value.replace(/[^0-9]/g, "");
    },
    validateForm() {
      this.formErrors = {};

      if (!this.donationForm.amount || this.donationForm.amount <= 0) {
        this.formErrors.amount = "Please enter a valid amount.";
      }

      if (this.donationForm.phone.length !== 10) {
        this.formErrors.phone = "Please enter a valid 10-digit phone number.";
      }

      return Object.keys(this.formErrors).length === 0;
    },
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
          this.successMessage = "Donation successful!";
          this.donationForm = { name: "", amount: "", phone: "" };
        } else {
          const errorData = await response.json();
          this.errorMessage =
            errorData.error || "Failed to send donation request.";
        }
      } catch (error) {
        this.errorMessage = "An error occurred. Please try again.";
      }
    },
  },
};
</script> -->
