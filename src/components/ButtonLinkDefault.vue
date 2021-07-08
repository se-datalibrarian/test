<template>
  <a 
    class="py-2 px-4 text-center border-gray-800 border-2 text-gray-800 bg-green-300 transition duration-200 ease-in-out hover:text-gray-200 hover:bg-blue-400 shadow-inner cursor-pointer"
    :href="url"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'ButtonLinkDefault',

  props: {
    url: String
  }
}
</script>