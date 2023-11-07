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

const _data = ref(JSON.parse(JSON.stringify(props.data)));

function handleSubmit() {
  emit("submit", _data.value);
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label for="username" class="block">Username</label>
      <input id="username" v-model="_data.username" />
    </fieldset>

    <fieldset>
      <label class="block" for="password">Password</label>
      <input id="password" type="password" v-model="_data.password" />
    </fieldset>
    <UButton size="xl" class="mt-5" type="submit">Login</UButton>
  </form>
</template>
