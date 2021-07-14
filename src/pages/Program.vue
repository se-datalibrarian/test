<template>
  <Layout>
    <h1 class="text-3xl">Program</h1>
    <p class="mt-4 italic">Submit a proposal, and help create the 2021 program!</p>
    <ButtonLinkDefault :url="'https://forms.gle/cHx569XJUwAhTokZA'" class="block mx-auto mt-4 w-max">
      Submit a Proposal
    </ButtonLinkDefault>
    <p class="mt-4">
      The Southeast Data Librarian Symposium is soliciting for virtual workshops, short talks, and poster presentations for the 2021 program. <strong>The deadline for proposals is Friday, August 13, 2020.</strong>
    </p>
    <p class="mt-4">
      Topics of particular interest this year include, but are not limited to:
    </p>
    <ul class="mt-4 list-disc list-inside">
      <li class="ml-8">Using available tools for research data management</li>
      <li class="ml-8">Using data analysis and data visualization tools</li>
      <li class="ml-8">Data support for student research</li>
      <li class="ml-8">Addressing data literacy in the curriculum</li>
    </ul>
    <p class="mt-4">
      Check out <a class="link" href="https://se-datalibrarian.github.io/2020/program/">last year's program</a> to view abstracts, posters, and presentation recordings for an idea of content.
    </p>
  </Layout>
</template>

<script>
import ButtonLinkDefault from '~/components/ButtonLinkDefault.vue'

export default {
  components: {
    ButtonLinkDefault
  },

  metaInfo: {
    title: 'Program'
  },
}
</script>

<style lang="scss">
</style>
