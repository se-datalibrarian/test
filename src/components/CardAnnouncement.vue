<template>
  <div class="md:flex align-middle justify-center w-11/12 sm:w-10/12 md:w-8/12 py-2 px-4 mx-auto my-6 bg-white rounded-lg text-gray-800 shadow-md">
    <svg class="mx-auto h-10 w-10 md:h-24 md:w-20 stroke-1 md:stroke-1 stroke-current text-red-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  title="Announcment Icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardAnnouncement'
}
</script>