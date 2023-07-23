<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
</template>
  
<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('HELLO!')

    return {
        message
    };
  },
};
</script>

<style src="./App.css"></style>