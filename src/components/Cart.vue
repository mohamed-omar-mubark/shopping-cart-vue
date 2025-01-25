<template>
  <main class="p-3">
    <header
      class="p-3 flex-between-center gap-3 border-bottom-1 border-gray-300">
      <h2 class="text-2xl font-semibold text-gray-900">cart</h2>
      <Button
        icon="pi pi-trash"
        label="Clear"
        size="small"
        severity="secondary" />
    </header>
  </main>
</template>

<script setup>
  import Button from "primevue/button";
</script>
