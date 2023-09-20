<template>
  <div>
    <button @click="refresh">
      Execute
    </button>

    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script setup lang="ts">
const { data, refresh } = useFetch("/api/5E5B8", {
    headers: {
        'Add-Padding': 'true'
    }
})
</script>
