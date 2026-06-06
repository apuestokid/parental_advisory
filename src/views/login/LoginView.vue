<template>
  <div class="flex items-center justify-center">
    <div class="module">
      <div class="flex justify-between">
        <zSvg :file="logo_llyc" class="text-5xl text-llyc"></zSvg>
        <img :src="logo_front" class="h-12" />
      </div>
      <LoginForm class="mt-6 rounded-lg w-72"></LoginForm>
    </div>
  </div>
</template>
<script setup>
import LoginForm from './LoginForm.vue'
import logo_front from '@/assets/images/logo_front.png'
import logo_llyc from '@/assets/svg/llyc_logo.svg'
</script>
