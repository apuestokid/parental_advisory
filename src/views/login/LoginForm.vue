<template>
  <div class="flex">
    <div class="my-auto w-full">
      <form class="" @submit.prevent="use">
        <label class="mb-2 block" for="email">
          <p class="text-sm">Email</p>
        </label>
        <input
          id="email"
          v-model="form.email"
          type="text"
          name="email"
          required
          placeholder="Enter your email"
          class="input-class w-full"
        />

        <zAccordion :opened="isValidEmail">
          <label class="mb-2 block mt-6" for="password">
            <p class="text-sm">Password</p>
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            class="input-class w-full"
          />
        </zAccordion>

        <zAccordion :opened="isValidEmail && hasPassword">
          <zButton
            type="submit"
            class="w-full mt-6 px-4 py-2 bg-module! bg-opacity-70 hover:bg-opacity-100 font-medium rounded-lg cursor-pointer"
            :class="{ 'opacity-50': loading }"
            :disabled="loading"
          >
            Login
          </zButton>
        </zAccordion>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

import { useRouter } from 'vue-router'
import { useLogin } from '@/auth/use-login.js'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})

const validateEmail = email =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
const isValidEmail = computed(() => !!validateEmail(form.email))
const hasPassword = computed(() => form.password.length > 5)

const { use, loading } = useLogin({
  form,
  onSuccess: () => {
    router.push({ name: 'Home' })
  },
  onError: response => {
    throw new Error(response)
  },
})
</script>
