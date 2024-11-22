<template>
  <div class="bg-white mt-24">
    <div class="container px-6 py-8 mx-auto">
      <!-- Header Section -->
      <div class="xl:items-center xl:-mx-8 xl:flex">
        <div class="flex flex-col items-center xl:items-start xl:mx-8">
          <h1 class="text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
            Join Us Today
          </h1>
          <div class="mt-4">
            <span
              class="inline-block w-40 h-1 bg-yellow-400 rounded-full"
            ></span>
            <span
              class="inline-block w-3 h-1 mx-1 bg-yellow-400 rounded-full"
            ></span>
            <span
              class="inline-block w-1 h-1 bg-yellow-400 rounded-full"
            ></span>
          </div>
          <p class="mt-4 font-semibold text-gray-950">
            As we make a difference!<br />Every action helps empower
            differently-abled children.
          </p>
        </div>
        <div class="flex-1 xl:mx-8">
          <div
            class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0"
          >
            <!-- Volunteer Section -->
            <div
              class="max-w-sm mx-auto border-2 border-black rounded-lg md:mx-4"
            >
              <div class="p-6">
                <h1
                  class="text-xl font-medium text-gray-700 capitalize lg:text-2xl"
                >
                  Volunteer
                </h1>
                <p class="mt-4 text-gray-500">
                  Share your time and skills to make an impact. Help us create
                  inclusive education programs for children with disabilities.
                </p>
                <br />
                <div class="text-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc6-AqABjXjuTf53oNXagBysS-5p5DFiBfWUt8jdLznTI137g/viewform?usp=sf_link"
                    target="_blank"
                    class="inline-block bg-indigo-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-yellow-400 hover:text-black"
                  >
                    Apply to Volunteer
                  </a>
                </div>
              </div>
              <br />
            </div>

            <!-- Donate Section -->
            <div
              class="max-w-sm mx-auto border-2 border-black rounded-lg md:mx-4"
            >
              <div class="p-6">
                <h1
                  class="text-xl font-medium text-gray-700 capitalize lg:text-2xl"
                >
                  Donate
                </h1>
                <p class="mt-4 text-gray-500">
                  Make a lasting impact. Every dollar helps provide digital
                  learning tools, assistive devices, and inclusive education for
                  children in need.
                </p>

                <div v-if="!showMobileInput">
                  <button
                    @click="showMobileInput = true"
                    class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-900 rounded-md hover:bg-yellow-400 hover:text-black font-semibold"
                  >
                    Donate
                  </button>
                </div>

                <div v-else>
                  <input
                    type="tel"
                    v-model="mobileNumber"
                    placeholder="Enter your mobile number"
                    class="w-full px-4 py-2 mt-4 border rounded-md"
                  />
                  <input
                    type="number"
                    v-model="donationAmount"
                    placeholder="Enter donation amount"
                    class="w-full px-4 py-2 mt-4 border rounded-md"
                  />
                  <button
                    @click="handleDonate"
                    class="w-full px-4 py-2 mt-4 tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-yellow-400 hover:text-black font-semibold"
                  >
                    Proceed with Payment
                  </button>
                </div>
              </div>
              <div class="text-center mt-8">
                <h4 class="text-lg font-semibold text-gray-700 mb-2">
                  Secure Payment Options
                </h4>
                <div class="flex justify-center space-x-4">
                  <img src="../assets/paypal.svg" alt="PayPal" class="w-4" />
                  <img src="../assets/card.svg" alt="Credit Card" class="w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Partner with Us Form -->
      <div class="mt-10 flex justify-center">
        <div class="w-full max-w-2xl">
          <h3 class="text-2xl font-semibold text-gray-950 mb-4 text-center">
            Partner with Us
          </h3>
          <p class="text-gray-950 text-lg mb-6 text-center">
            Join forces with us! We welcome collaborations with corporations,
            schools, and NGOs to drive change and promote inclusivity.
          </p>
          <form 
          action="http://localhost/nyayo.php"
          method="POST"
          @submit.prevent="submitPartnerForm" 
          class="space-y-4">
            <div>
              <label class="block text-gray-700 font-semibold mb-2" for="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                v-model="partnerForm.name"
                class="w-full px-4 py-3 border border-black rounded-lg"
                required
              />
            </div>
            <div>
              <label class="block text-gray-700 font-semibold mb-2" for="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                v-model="partnerForm.email"
                class="w-full px-4 py-3 border border-black rounded-lg"
                required
              />
            </div>
            <div>
              <label
                class="block text-gray-700 font-semibold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                id="message"
                v-model="partnerForm.message"
                rows="4"
                class="w-full px-4 py-3 border border-black rounded-lg"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="bg-indigo-950 hover:text-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          <!-- Success/Failure Messages -->
          <div v-if="submissionSuccess" class="mt-4 text-green-600 text-center">
            Your message has been submitted successfully!
          </div>
          <div
            v-if="submissionError"
            class="mt-4 text-red-600 text-center"
          >
            {{ submissionError }}
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
      partnerForm: {
        name: "",
        email: "",
        message: "",
      },
      showMobileInput: false,
      mobileNumber: "",
      donationAmount: "",
      submissionSuccess: false,
      submissionError: null,
    };
  },
  methods: {
    async submitPartnerForm() {
  try {
    const formData = new URLSearchParams();
    formData.append("name", this.partnerForm.name);
    formData.append("email", this.partnerForm.email);
    formData.append("message", this.partnerForm.message);

    const response = await fetch("http://localhost/nyayo.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Updated content type
      },
      body: formData.toString(), // Send as URL-encoded string
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    this.submissionSuccess = true;
    this.submissionError = null;
    this.partnerForm = { name: "", email: "", message: "" }; // Clear form
  } catch (error) {
    console.error("Form submission error:", error);
    this.submissionError = "Failed to submit the form. Please try again.";
    this.submissionSuccess = false;
  }
},

    async handleDonate() {
      if (!this.mobileNumber || !this.donationAmount) {
        alert("Please fill out all fields.");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost/Mpesa-Daraja-Api/stkpush.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              mobileNumber: this.mobileNumber,
              donationAmount: this.donationAmount,
            }),
          }
        );

        const result = await response.json();

        if (result.success) {
          alert("STK Push initiated. Check your phone to complete payment.");
        } else {
          alert(`Error: ${result.error}`);
        }
      } catch (error) {
        console.error("Error during STK push:", error);
        alert("Failed to initiate donation. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
/* Add additional styling as needed */
</style>
