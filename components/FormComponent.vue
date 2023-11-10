<script setup lang="ts">
type Props = {
  data: {
    username: string;
    password: string;
  };
};
const props = defineProps<Props>();
const emit = defineEmits<{
  submit: [payload: Props["data"]];
}>();

// still not resolved if you convert to local data
// const _data = ref(props.data);
</script>

<template>
  <form @submit.prevent="$emit('submit', data)">
    <fieldset>
      <label for="username" class="block">Username</label>
      <input id="username" v-model="data.username" />
    </fieldset>

    <fieldset>
      <label class="block" for="password">Password</label>
      <input id="password" type="password" v-model="data.password" />
    </fieldset>
    <UButton size="xl" class="mt-5" type="submit">Login</UButton>
  </form>
</template>
