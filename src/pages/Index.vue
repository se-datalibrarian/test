<template>
  <Layout>
    <Logo class="mx-8 sm:mx-32 mb-4"></Logo>

    <h1 class="ml-8 sm:mx-32 text-3xl text-black text-center">Southeast Data Librarian Symposium</h1>

    <CardAnnouncement>
      <div class="md:ml-1 p-2 border-t-2 md:border-t-0 md:border-l-2 border-red-600">
        <p>
        The Southeast Data Librarian Symposium (SEDLS) is returning virtually in 2020!
        </p>
        <p class="mt-4">
          Visit the <a class="text-red-600 transition duration-200 ease-in-out hover:text-blue-600" href="https://se-datalibrarian.github.io/2020/">SEDLS 2020 website</a> for more information.
        </p>
      </div>
    </CardAnnouncement>

    <h2 class="text-2xl mt-4">About</h2>
    <p class="mt-4">
      The Southeast Data Librarian Symposium is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data. Check out the past symposium websites below for an idea of programming content.
    </p>
		<p class="mt-4">
      In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers and scientists, and those situated outside the Southeast. The meeting is styled after the successful <a class="text-red-600 transition duration-200 ease-in-out hover:text-blue-600" href="https://mwdatalibrariansymposium.wordpress.com/">Midwest Data Librarian Symposium</a>.
    </p>

    <h2 class="text-2xl mt-4">Past Symposiums</h2>
    <ul class="mt-4 ml-4 list-disc list-inside">
      <li><a class="text-red-600 transition duration-200 ease-in-out hover:text-blue-600" href="https://se-datalibrarian.github.io/2018/">SEDLS 2018: The Georgia Tech Library in Atlanta, GA</a></li>
      <li><a class="text-red-600 transition duration-200 ease-in-out hover:text-blue-600" href="https://se-datalibrarian.github.io/2019/">SEDLS 2019: Tulane University in New Orleans, LA</a></li>
    </ul>
  </Layout>
</template>

<script>
  import Logo from '~/assets/logo-main.svg'
  import CardAnnouncement from '~/components/CardAnnouncement.vue'
  export default {
    components: {
      Logo,
      CardAnnouncement
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
