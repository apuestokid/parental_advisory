<template>
  <div class="" @click="logout">
    <zButton v-if="!$slots.default">LOGOUT</zButton>
    <slot v-else></slot>
  </div>
</template>
<script setup name="LogoutComponent">
// IMPORTS

import { useRouter } from 'vue-router'
import { useLogout, actions } from '@/auth'

const router = useRouter()

const { use: logout } = useLogout({
  onEnd: () => {
    actions.resetAuth()
    router.push({ name: 'Login' })
  },
})
</script>
<style></style>
