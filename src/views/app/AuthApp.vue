<template>
  <div>
    <router-view v-if="state.user"></router-view>
    <zLoading :loading="loading && !state.user"></zLoading>

    <zDesign :file :show-design></zDesign>
  </div>
</template>

<script setup name="index">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMe, state } from '@/auth'

import file from '@/assets/designs/people.png'
const showDesign = import.meta.env.DEV
// IMPORTS

const router = useRouter()
const { use, loading } = useMe({
  onError: () => {
    router.push({ name: 'Login' })
  },
})
onMounted(() => {
  use()
})
</script>
