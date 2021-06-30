<template>
  <Layout>
    <Logo class="mx-8 sm:mx-32 mb-4"></Logo>

    <h1 class="w-full text-center text-2xl">Southeast Data Librarian Symposium 2021</h1>
    <h2 class="w-full mt-2 text-center text-xl">Online, October 13-15</h2>
    <p>
      The Southeast Data Librarian Symposium (SEDLS) is returning online in 2021! The program will consist of workshops, short presentations, and networking opportunities October 13-15, 2021.
    </p>
    <p>
      Check out <a class="link" href="https://se-datalibrarian.github.io/2020/program/">last year's program</a> to view abstracts, posters, and presentation recordings for an idea of content.
    </p>
    <p>
      SEDLS is open to all who wish to attend, including students, data managers, and data scientists. Learn more about SEDLS on the <g-link class="link" to="/about">About Us page</g-link>.
    </p>
    <p>
      This website will be updated with the latest information as planning continues. You can reach out to <a title="Contact us via email" href="mailto:se.datalibrarian@gmail.com">se.datalibrarian@gmail.com</a> with any questions.
    </p>
  </Layout>
</template>

<script>
import Logo from '~/assets/logo-main.svg'

export default {
  components: {
    Logo
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
