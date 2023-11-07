<script setup lang="ts">
const data = ref({
  username: "",
  password: "",
});
</script>
<template>
  <PageHeading>Mutating Props</PageHeading>
  <section class="mutating-props">
    <h1>Data in Parent</h1>
    <pre>{{ data }}</pre>
    <hr class="my-10 block" />
    <h1 class="mt-10">Child Component</h1>
    <FormComponent :data="data"></FormComponent>
  </section>
</template>

<style>
.mutating-props * {
  font-size: 2rem;
}

.mutating-props {
  width: 900px;
  margin: 0 auto;
}
</style>
