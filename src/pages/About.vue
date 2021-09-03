<template>
  <Layout>
    <h1 class="text-3xl">About</h1>
    <p class="mt-4">
      The Southeast Data Librarian Symposium is intended to provide an opportunity for librarians and other research data specialists to explore developments in the field of data librarianship, including the management and sharing of research data.
    </p>
    <p class="mt-4">
      In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers, and data scientists.
    </p>
    <h2 class="text-2xl mt-4">Planning committee</h2>
    <div class="container sm:w-11/12 mx-auto grid sm:grid-cols-2">
      <div 
        v-for="member of $static.allPlanningCommittee.edges" :key="member.node.id"
        class="mt-4 w-full"
      >
        <h3 class="text-lg">{{ member.node.firstName }} {{ member.node.lastName }}</h3>
        <h4 class="font-sans text-sm">{{ member.node.institution }}</h4>
      </div>
    </div>
    <h2 class="text-2xl mt-4">Sponsors</h2>
    <div class="mt-4 flex flex-row flex-wrap justify-evenly">
      <g-image class="m-4 object-contain" src="~/assets/RDAP_Logo_Color.png" width="250px" alt="RDAP logo"/>
      <g-image class="m-4 object-contain" src="~/assets/uncgreensboro_LIB_v_3-color.png" width="250px" alt="UNCG Libraries logo"/>
    </div>
    <h2 class="text-2xl mt-4">Past Symposiums</h2>
    <ul class="mt-4 ml-4 list-disc list-inside">
      <li class="mb-2"><a class="link" href="https://se-datalibrarian.github.io/2018/">SEDLS 2018: The Georgia Tech Library in Atlanta, GA</a></li>
      <li class="mb-2"><a class="link" href="https://se-datalibrarian.github.io/2019/">SEDLS 2019: Tulane University in New Orleans, LA</a></li>
      <li class="mb-2"><a class="link" href="https://se-datalibrarian.github.io/2020/">SEDLS 2020: Online</a></li>
    </ul>
  </Layout>
</template>

<static-query>
query {
  allPlanningCommittee(sortBy:"lastName", order:ASC) {
    edges {
      node {
        firstName
        lastName
        institution
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
