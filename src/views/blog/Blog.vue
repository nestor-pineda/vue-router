<template>
  <h1>Blog Posts</h1>
  <div v-for="item in blogPosts" :key="item.id">
    <router-link :to="{ name: 'blogDetails', params: { id: item.id } }">
      <h3>{{ item.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        { title: "Blog Post 1", id: "1", detail: "lorem ipsum" },
        { title: "Blog Post 2", id: "2", detail: "lorem ipsum" },
        { title: "Blog Post 3", id: "3", detail: "lorem ipsum" },
      ],
    };
  },
};
</script>

<style></style>
