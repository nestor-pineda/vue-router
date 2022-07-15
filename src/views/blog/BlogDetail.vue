<template>
  <div v-if="singleBlog">
    <!-- Only when singleBlog has a value this will reender -->
    <h1>{{ singleBlog.title }}</h1>
    <p>{{ singleBlog.detail }}</p>
  </div>
  <div v-else>
    <!-- while the fetch is not ready  -->
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      singleBlog: null, // to avoid an error, we will use v-if in the temolate
    };
  },
  mounted() {
    fetch("http://localhost:8000/blogs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.singleBlog = data)) // here we asign the data fetched to the blogPosts [] in data()
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
