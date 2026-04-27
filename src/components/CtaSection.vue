<script setup lang="ts">
interface Props {
  titulo: string
  subtitulo: string
  btnLabel: string
  whatsappUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <section class="cta-section">
    <div class="container">
      <h2 class="cta-titulo">{{ props.titulo }}</h2>
      <p class="cta-subtitulo">{{ props.subtitulo }}</p>
      <a
        :href="props.whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-btn"
      >{{ props.btnLabel }}</a>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: var(--color-gold);
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-titulo {
  font-family: var(--font-title);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-bg);
  margin-bottom: 16px;
}

.cta-subtitulo {
  font-size: 18px;
  color: var(--color-bg);
  opacity: 0.8;
  max-width: 560px;
  margin-bottom: 44px;
  line-height: 1.65;
}

.cta-btn {
  display: inline-block;
  padding: 18px 44px;
  background: var(--color-bg);
  color: var(--color-gold);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: opacity 0.2s;
}

.cta-btn:hover {
  opacity: 0.88;
}

@media (max-width: 768px) {
  .cta-titulo {
    font-size: 32px;
  }

  .cta-subtitulo {
    font-size: 16px;
  }

  .cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
