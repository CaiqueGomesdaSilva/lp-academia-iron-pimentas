<script setup lang="ts">
interface Depoimento {
  nome: string
  tempo: string
  texto: string
  iniciais: string
}

interface Props {
  titulo: string
  items: Depoimento[]
}

const props = defineProps<Props>()
</script>

<template>
  <section id="depoimentos" class="depoimentos-section">
    <div class="container">
      <h2 class="section-titulo">{{ props.titulo }}</h2>
      <div class="depoimentos-grid">
        <div
          v-for="dep in props.items"
          :key="dep.nome"
          class="depoimento-card"
        >
          <p class="depoimento-texto">"{{ dep.texto }}"</p>
          <div class="depoimento-autor">
            <div class="depoimento-avatar">{{ dep.iniciais }}</div>
            <div class="depoimento-info">
              <span class="depoimento-nome">{{ dep.nome }}</span>
              <span class="depoimento-tempo">{{ dep.tempo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.depoimentos-section {
  background: var(--color-bg);
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

.depoimentos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.depoimento-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.depoimento-texto {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.7;
  font-style: italic;
  flex: 1;
}

.depoimento-autor {
  display: flex;
  align-items: center;
  gap: 14px;
}

.depoimento-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-gold);
  color: var(--color-bg);
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.depoimento-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.depoimento-nome {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
}

.depoimento-tempo {
  font-size: 13px;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .depoimentos-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-titulo {
    font-size: 30px;
    margin-bottom: 40px;
  }
}
</style>
