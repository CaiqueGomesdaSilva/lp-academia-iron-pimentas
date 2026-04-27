<script setup lang="ts">
interface Modalidade {
  nome: string
  foto: string
}

interface Props {
  titulo: string
  items: Modalidade[]
}

const props = defineProps<Props>()
</script>

<template>
  <section id="modalidades" class="aula-section">
    <div class="container">
      <h2 class="section-titulo">{{ props.titulo }}</h2>
      <div class="aula-grid">
        <div
          v-for="item in props.items"
          :key="item.nome"
          class="aula-card"
          :style="{ backgroundImage: `url(${item.foto})` }"
        >
          <div class="aula-overlay" />
          <span class="aula-nome">{{ item.nome }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aula-section {
  background: var(--color-bg-dark);
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-titulo {
  font-family: var(--font-title);
  font-size: 40px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 64px;
}

.aula-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.aula-card {
  position: relative;
  height: 240px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 24px;
}

.aula-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(17, 17, 17, 0.85) 0%, rgba(17, 17, 17, 0.2) 60%);
}

.aula-nome {
  position: relative;
  z-index: 1;
  font-family: var(--font-title);
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .aula-grid {
    grid-template-columns: 1fr;
  }

  .section-titulo {
    font-size: 30px;
    margin-bottom: 40px;
  }
}
</style>
