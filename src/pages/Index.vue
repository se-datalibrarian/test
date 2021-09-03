<template>
  <Layout>
    <Logo class="mx-8 sm:mx-32 mb-4"></Logo>

    <h1 class="w-full text-center text-2xl">Southeast Data Librarian Symposium 2021</h1>
    <h2 class="w-full mt-2 text-center text-xl">Online, October 13-15</h2>
    <CardAnnouncement>
      <template v-slot:header>
        <h2 class="md:hidden text-lg pl-4">Registration is open for SEDLS 2021!</h2>
      </template>
      <template v-slot:content>
        <h2 class="hidden md:block text-lg">Registration is open for SEDLS 2021!</h2>
        <p class="mt-4">
          Visit the <g-link class="link" to="/registration">Registration Page</g-link> for more information or use the button below to register.
        </p>
        <ButtonLinkDefault :url="'https://rdapassociation.org/event-4449603'" class="mx-auto mt-4 mb-2">
          Register for SEDLS 2021
        </ButtonLinkDefault>
      </template>
    </CardAnnouncement>
    <p class="mt-4">
      The Southeast Data Librarian Symposium (SEDLS) is returning online in 2021! The program will consist of workshops, short presentations, and networking opportunities October 13-15, 2021.
    </p>
    <p class="mt-4">
      The SEDLS planning committee is currently putting together <g-link class="link" to="/program">the 2021 program</g-link>. Check out <a class="link" href="https://se-datalibrarian.github.io/2020/program/">last year's program</a> to view abstracts, posters, and presentation recordings for an idea of content.
    </p>
    <p class="mt-4">
      SEDLS is open to all who wish to attend, including students, data managers, and data scientists. Learn more about SEDLS on the <g-link class="link" to="/about">About Us page</g-link>.
    </p>
    <p class="mt-4">
      This website will be updated with the latest information as planning continues. You can reach out to <a title="Contact us via email" href="mailto:se.datalibrarian@gmail.com">se.datalibrarian@gmail.com</a> with any questions.
    </p>
  </Layout>
</template>

<script>
import Logo from '~/assets/logo-main.svg'
import CardAnnouncement from '~/components/CardAnnouncement.vue'
import ButtonLinkDefault from '~/components/ButtonLinkDefault.vue'

export default {
  components: {
    Logo,
    CardAnnouncement,
    ButtonLinkDefault
  },

  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
