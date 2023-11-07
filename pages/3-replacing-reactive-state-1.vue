<script setup lang="ts">
let posts = reactive(["Post 1", "Post 2"]);

function loadMore() {
  const myNewPosts = ["Post 3", "Post 4", "Post 5"];
  posts = myNewPosts;
}
</script>
<template>
  <PageHeading>Replacing Reactive State 1</PageHeading>
  <section>
    <ul>
      <li v-for="post in posts" :key="post">
        {{ post }}
      </li>
    </ul>

    <button @click="loadMore">Load More</button>
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
