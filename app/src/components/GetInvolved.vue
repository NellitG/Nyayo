<template>
  <div
    class="container p-4 mx-auto max-w-5xl rounded-2xl shadow-2xl lg:px-10 bg-white mt-16"
    style="background-image: none"
  >
    <!-- Form title -->
    <p class="text-3xl py-10 font-bold text-center text-indigo-950">
      Register Today
    </p>
    <!-- The form div -->
    <div class="">
      <form>
        <!-- First, last name and   -->
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">First Name</p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Last Name</p>
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">E-mail</p>
            <input
              type="text"
              name="email"
              id="email"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">Confirm Email</p>
            <input
              type="text"
              name="confirmEmail"
              id="confirmEmail"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Phone Number(Mpesa Active)</p>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Nationality</p>
            <input
              type="text"
              name="nationality"
              id="nationality"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">National ID No</p>
            <input
              type="text"
              name="idNumber"
              id="idNumber"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <!-- <div class="col-span-1">
            <p class="py-2 text-lg">Passport No(if Applicable)</p>
            <input
              type="text"
              name="passportNumber"
              id="passportNumber"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Passport Expiry Date (if applicable)</p>
            <input
              type="text"
              name="passportExpiryDate"
              id="passportExpiryDate"
              class="w-full border border-gray-400 p-2 rounded-md"
            />
          </div> -->
        </div>
        <div class="grid lg:grid-cols-3 gap-4 py-2">
          <div class="col-span-1">
            <p class="py-2 text-lg">Gender</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  class="border border-gray-400 rounded-md"
                />
                <label for="male">Male</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  class="border border-gray-400 rounded-md"
                />
                <label for="female">Female</label>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <p class="py-2 text-lg">Age</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="radio"
                  id="18 - 38"
                  name="age"
                  value="18 - 38"
                  class="border border-gray-400 rounded-md"
                />
                <label for="male">18 - 38</label>
              </div>

              <div class="flex gap-3">
                <input
                  type="radio"
                  id="38 - 45"
                  name="age"
                  value="38 - 45"
                  class="border border-gray-400 rounded-md"
                />
                <label for="38 - 45">45 - 60</label><br>
              </div>

              <div class="flex gap-3">
                <input
                  type="radio"
                  id="60 - 75"
                  name="age"
                  value="60 - 75"
                  class="border border-gray-400 rounded-md"
                />
                <label for="60 - 75">60 - 75</label><br>
              </div>

              <div class="flex gap-3">
                <input
                  type="radio"
                  id="75+"
                  name="age"
                  value="75+"
                  class="border border-gray-400 rounded-md"
                />
                <label for="75+">75+</label><br>
                <!-- Add more radio buttons for other genders if needed -->
              </div>
            </div>
          </div>   
          <div class="col-span-1">
            <p class="py-2 text-lg">Total Amount to Contribute</p>
            <div class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="text"
                  id="totalcontribution"
                  name="totalcontribution"
                  value=""
                  class="border border-gray-400 rounded-md"
                />
                
              </div>
              <div class="flex gap-3">
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="flex justify-end py-5">
      <button
        class="text-black bg-yellow-400 px-4 py-2 rounded-md"
        @click="finishForm"
      >
        Accept
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

</script>
