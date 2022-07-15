<template>
  <h1>Blog Posts</h1>
  <div v-if="blogPosts.lenght">
    <!-- Only when blogPosts has elements insede (the fetch is ready) this will show -->
    <div v-for="item in blogPosts" :key="item.id">
      <router-link :to="{ name: 'blogDetails', params: { id: item.id } }">
        <h3>{{ item.title }}</h3>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  mounted() {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => (this.blogPosts = data)) // here we asign the data fetched to the blogPosts [] in data()
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
