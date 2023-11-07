<script setup lang="ts">
const props = defineProps<{
  data: {
    username: string;
    password: string;
  };
}>();

// still not resolved if you convert to local data
// const _data = ref(props.data);
</script>

<template>
  <form>
    <fieldset>
      <label for="username" class="block">Username</label>
      <input id="username" v-model="data.username" />
    </fieldset>

    <fieldset>
      <label class="block" for="password">Password</label>
      <input id="password" type="password" v-model="data.password" />
    </fieldset>
  </form>
</template>
