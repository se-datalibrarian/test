<template>
  <div class="md:flex align-middle justify-start w-11/12 sm:w-8/12 md:w-8/12 py-2 px-4 md:pl-0 md:pr-4 mx-auto my-6 bg-red-50 text-gray-800 border-2 border-gray-800 shadow-lg">
    <div class="flex flex-row justify-center items-center mt-1 mb-4 md:my-0 md:mr-4 pb-2 md:pb-0 border-b-2 md:border-b-0 md:border-r-2 border-gray-800">
      <svg class="h-12 w-12 md:h-16 md:w-16 md:mx-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" title="Announcement Icon">
        <defs>
          <linearGradient id="linear-gradient" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0EA5E9"></stop>
              <stop offset="60%" stop-color="#2DD4BF"></stop>
          </linearGradient>
        </defs>
        <path 
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          fill="url(#linear-gradient)"
        />
      </svg>
      <slot name="header"></slot>
    </div>
    <div class="w-full flex flex-col">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAnnouncement'
}
</script>