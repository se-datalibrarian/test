<template>
  <header class="fixed z-10 top-0 w-screen sm:h-16 px-3 sm:px-4 bg-gray-200 flex flex-wrap items-center justify-center">
    <div class="w-full max-w-screen-md py-2 sm:pt-4 sm:pb-2 bg-gray-200 border-b-2 border-gray-800 flex items-center justify-between sm:justify-start font-mono">
      <g-link class="" to="/" active-class="null">
        <LogoTriangle class="fill-current text-gray-800 h-14" aria-label="Home" />
      </g-link>
      <nav class="hidden sm:flex flex-col sm:ml-2">
        <g-link class="w-max px-2 mb-1 text-lg inline-block" to="/" active-class="null">
          {{ $static.metadata.siteName }}
        </g-link>
        <div class="flex justify-left items-center">
          <g-link
            v-for="(path, index) in sortedPageLinks" :key="path"
            class="px-2 text-gray-800 link-animate"
            :class="index != 0 ? 'border-l-2 border-green-400': ''"
            :to="path"
          >
            {{ formatPageLinks(path) }}
          </g-link>
        </div>
      </nav>
      <button v-on:click="show = !show" class="relative inline sm:hidden w-12 h-12" aria-label="Toggle Menu">
        <transition name="fade">
          <svg v-if="!show" class="absolute top-0 left-0 text-gray-800 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </transition>
        <transition name="fade">
          <svg v-if="show" class="absolute top-0 left-0 text-gray-800 w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </transition>
      </button>
      <div class="sm:hidden absolute w-full top-0 left-0 h-16 bg-gray-200 mobile-nav-hider"></div>
      <transition name="slide-down">
        <nav
          v-if="show"
          v-on-clickaway="away"
          class="mobile-nav absolute sm:hidden w-1/2 flex flex-col justify-between bg-gray-200 p-2 border-2 border-t-0 border-gray-800"
        >
          <g-link
            v-for="(path, index) in sortedPageLinks" :key="path"
            v-on:click="show = false"
            class="p-2 text-lg text-gray-900 transition duration-200 ease-in-out hover:bg-green-400 hover:text-gray-800"
            :class="index != 0 ? 'border-t-2 border-green-400': ''"
            :to="path"
          >
            {{ formatPageLinks(path) }}
          </g-link>
        </nav>
      </transition>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  },
  allPage(filter: { path: { nin:["/404", "/"] } }) {
    path
  }
}
</static-query>

<script>
import LogoTriangle from '~/assets/logo-triangle.svg'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  components: {
    LogoTriangle
  },

  mixins: [ clickaway ],

  data: function() {
    return {
      show: false
    }
  },

  computed: {
    sortedPageLinks() {
      // Set the order of page links in the header
      const pageLinkOrder = [
        'About',
        'Program',
        'Registration',
        'Code of Conduct',
        'Accessibility'
      ]
      // Get query data
      const unsortedPageLinks = this.$static.allPage
      // Format data from query to match against link order
      const formattedUnsortedPageLinks = unsortedPageLinks.map(page =>
        page.path.split('/')[1].split('-').join(' ')
      )
      // Filter the pageLinkOrder list to only include pages returned by the query
      const filteredPageLinkOrder = pageLinkOrder.filter(sortPage =>
        formattedUnsortedPageLinks.includes(sortPage.toLowerCase())
      )

      // Return an array that is ordered based on filteredPageLinkOrder and contains the link path
      return filteredPageLinkOrder.map(page => {
        const sortIndex = formattedUnsortedPageLinks.findIndex(
          unsortedPage => {
            return unsortedPage === page.toLowerCase()
          }
        )
        return unsortedPageLinks[sortIndex].path
      })
    }
  },

  methods: {
    away: function() {
      this.show = false
    },

    formatPageLinks: function(page) {
      const lowerCasePage = page.split('/')[1].split('-')
      const upperCasePage = lowerCasePage.map(d =>
        !['of', 'to'].includes(d) ?
          d.charAt(0).toUpperCase() + d.slice(1) : d
      )
      return upperCasePage.join(" ")
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  top: 100%;
  right: 0.75rem;
  z-index: -2;
}

.mobile-nav-hider {
  z-index: -1;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all .5s;
}
.slide-down-enter, .slide-down-leave-to {
  transform-origin: top;
  transform: translateY(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>