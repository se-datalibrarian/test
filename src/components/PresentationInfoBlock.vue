<template>
<div v-if="presentationInfo.title === ''">
</div>
<div v-else class="relative z-0">
  <resize-observer @notify="handleResize" />
  <h4 
    v-if="presentationInfo.type !== 'Break'"
    class="text-md mt-6 font-light text-gray-800"
  >
    {{ presentationInfo.startTime }}
  </h4>
  <h4 
    v-if="presentationInfo.type !== 'Break'"
    class="text-lg mt-1"
  >
    {{ presentationInfo.title }}
  </h4>
  <p
    v-for="presenters in presentationInfo.presenters.split(', ')"
    :key=presenters
    class="text-md mt-1 font-light text-gray-700"
  >
    {{ presenters }}
  </p>
  <p
    v-if="this.noShare.includes(presentationInfo.title)"
    class="text-md mt-1 font-light italic text-gray-700"
  >
    Presenter was unable to allow recording or sharing of presentation materials
  </p>
  <!-- <p
    v-if="['Posters', 'Workshops'].includes(presentationInfo.type)"
    class="text-md mt-1 font-light italic text-gray-700"
  >
    This presentation was not recorded
  </p> -->
  <div class="mt-2 block">
    <a
      v-if="presentationInfo.YouTubeLink !== ''"
      class="link mt-2 block"
      v-bind:href="presentationInfo.YouTubeLink"
    >View recording on YouTube</a>
  </div>
  <div class="mt-2 block">
    <a
      v-if="!['Break'].includes(presentationInfo.type) && presentationInfo.materialsLink !== ''"
      class="link"
      v-bind:href="presentationInfo.materialsLink"
    >Access presentation materials</a>
  </div>
  <button
    v-on:click="showAbstract = !showAbstract"
    v-if="presentationInfo.abstract"
    class="abstract-toggle mt-2 flex flex-row"
    v-html="abstractToggleLanguage"
  ></button>
  <p
    v-bind:style="{'--abstract-height': abstractHeight + 'px'}"
    class="abstract mt-1 text-md whitespace-pre-wrap overflow-hidden max-h-0"
    v-bind:class="{'slide-in': showAbstract}"
  >{{ presentationInfo.abstract }}</p>
</div>
</template>

<script>
import 'vue-resize/dist/vue-resize.css'

export default {
  name: "PresentationInfoBlock",

  props: {
    presentationInfo: Object
  },

  data: () => ({
    showAbstract: false,
    abstractHeight: 0,
    abstractWidth: 0,
    // Use this data list to indicate presentations that cannot be shared due to
    // privacy concerns. List item should be full presentation title.
    noShare: []
  }),

  methods: {
    handleResize (dimensions) {
      // Resize the height of the abstract element when element width changes
      if (dimensions.width !== this.abstractWidth) {
        this.abstractHeight = dimensions.height
      } else if (this.abstractHeight !== dimensions.height 
        && window.innerWidth >= 768) {
          this.abstractHeight = dimensions.height
      }
    }
  },

  computed: {
    abstractToggleLanguage() {
      if (this.showAbstract) {
        return `
          <span class='text-red-700'>Abstract </span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather stroke-current text-red-700'>
            <polyline points='18 15 12 9 6 15'></polyline>
          </svg>`
      } else {
        return `
          <span class='text-red-700'>Abstract</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather stroke-current text-red-700"><polyline points="6 9 12 15 18 9"></polyline></svg>`
      }
    }
  },

  mounted() {
    this.abstractHeight = this.$el.getElementsByClassName('abstract')[0].scrollHeight
    this.abstractWidth = this.$el.getElementsByClassName('abstract')[0].scrollWidth
  }
}
</script>

<style lang="scss" scoped>
.abstract {
  transition: max-height 0.25s ease-out;
}

.slide-in {
  max-height: calc(var(--abstract-height) + 2rem);
}
</style>