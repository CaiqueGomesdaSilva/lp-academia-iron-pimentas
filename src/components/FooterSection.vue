<script setup lang="ts">
interface Props {
  texto: string
}

const props = defineProps<Props>()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer-texto">{{ props.texto }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-dark);
  border-top: 1px solid var(--color-border);
  padding: 32px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: center;
}

.footer-texto {
  font-size: 14px;
  color: var(--color-text-muted);
  text-align: center;
}
</style>
