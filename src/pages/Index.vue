<template>
  <Layout>
    <Logo class="mx-8 sm:mx-32 mb-4"></Logo>
    <h1 class="w-full text-center text-2xl">Southeast Data Librarian Symposium 2021</h1>
    <h2 class="w-full mt-2 text-center text-xl">Online, October 13-15</h2>
    <p class="mt-4">
      The Southeast Data Librarian Symposium (SEDLS) is returning online in 2021! The <g-link class="link" to="/program">program</g-link> consists of workshops, short presentations, and networking opportunities October 13-15, 2021.
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
