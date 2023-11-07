<script setup lang="ts">
let posts = reactive(["Post 1", "Post 2"]);

const numOfPosts = computed(() => posts.length);

const loading = ref(false);

function loadMore() {
  loading.value = true;
  const myNewPosts = ["Post 3", "Post 4", "Post 5"];
  posts = myNewPosts;
  loading.value = false;
}
</script>
<template>
  <PageHeading>Replacing Reactive State 2</PageHeading>
  <section>
    <div v-if="loading">loading...</div>
    <ul v-else>
      <li v-for="post in posts" :key="post">
        {{ post }}
      </li>
    </ul>

    <button @click="loadMore">Load More</button>

    <p>Number of posts: {{ numOfPosts }}</p>
  </section>
</template>

<style scoped>
section {
  @apply w-80 mx-auto text-3xl mt-10;
}

button {
  @apply bg-blue-500 text-white px-4 py-2 rounded-md;
}
</style>
