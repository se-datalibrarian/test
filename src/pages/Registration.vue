<template>
  <Layout>
    <h1 class="text-3xl">Registration</h1>
    <p class="mt-4 italic">Registration is open for SEDLS 2021!</p>
    <div class="flex justify-center items-center mt-4 mb-2">
      <ButtonLinkDefault :url="'https://rdapassociation.org/event-4449603'">
        Register for SEDLS 2021
      </ButtonLinkDefault>
    </div>
    <h2 class="mt-4 text-2xl">Registration cost</h2>
    <p class="mt-4">
      There are seperate costs for attending the general conference, which includes the short talk sessions and poster session, and attending workshops.
    </p>
    <ul class="mt-4 list-inside list-disc">
      <li class="ml-8">General conference (all short talk and poster sessions): <strong>$20.00</strong></li>
      <li class="ml-8">Individual workshop: <strong>$5.00</strong></li>
    </ul>
    <h2 class="mt-4 text-2xl">Registration logistics</h2>
    <p class="mt-4">
      Registered attendees will receive updates through email regarding access to sessions and workshop registration. General conference sessions and workshops will be held online via Zoom. Zoom Pro for secure discussions is provided by the University of North Carolina at Greensboro University Libraries.
    </p>
  </Layout>
</template>

<script>
import ButtonLinkDefault from '~/components/ButtonLinkDefault.vue'
import CardAnnouncement from '~/components/CardAnnouncement.vue'
export default {
  components: {
    CardAnnouncement,
    ButtonLinkDefault
  },
  metaInfo: {
    title: 'Registration'
  }
}
</script>

<style>

</style>