<template>
  <div class="layout">
    <HeaderLayout />
    <div class="container mx-auto max-w-screen-md mt-24 px-3 sm:px-4 text-gray-800 bg-gray-200">
      <transition name="fade" appear>
        <main>
          <slot />
        </main>
      </transition>
      <FooterLayout />
    </div>
  </div>
</template>

<script>
import HeaderLayout from '~/layouts/Header.vue'
import FooterLayout from '~/layouts/Footer.vue'

export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style>
body {
  background-color: #E5E7EB;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

.active--exact.active {
  color: #2DD4BF;
  background-color: #1E293B;
}
</style>
