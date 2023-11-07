<script setup lang="ts">
const postId = 1; // probably a route param

const post = await $fetch(
  `https://jsonplaceholder.typicode.com/posts/${postId}`
);

const comments = await $fetch(
  `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
);

if (!post || !comments) {
  throw createError({ statusCode: 404, message: "Post not found" });
}
</script>

<template>
  <div v-if="post">
    <h1 class="text-4xl">{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>

  <div v-if="comments">
    <h2 class="text-2xl mt-10">Comments</h2>

    <UCard v-for="comment in comments" :key="comment.id" class="mt-3">
      {{ comment.body }}
      <template #footer>
        {{ comment.name }}
      </template>
    </UCard>
  </div>
</template>
