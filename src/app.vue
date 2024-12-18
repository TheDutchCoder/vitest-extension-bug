<template>
  <div>{{ dates().format('YYYY-MM-DD') }}</div>
</template>

<script setup lang="ts">
const f = dates()
</script>
