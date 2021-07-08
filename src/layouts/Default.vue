<template>
  <div class="layout bg-gray-200">
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

<style lang="scss">
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
  background: #1E293B;
}

.link-animate {
  background: linear-gradient(to right, rgb(45, 212, 191), rgb(45, 212, 191) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition-property: background-position;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-position: left 0;
  }
}
</style>
