<script setup lang="ts">
interface Diferencial {
  titulo: string
  descricao: string
}

interface Props {
  titulo: string
  items: Diferencial[]
}

const props = defineProps<Props>()
</script>

<template>
  <section id="diferenciais" class="diferenciais-section">
    <div class="container">
      <h2 class="section-titulo">{{ props.titulo }}</h2>
      <div class="diferenciais-grid">
        <div
          v-for="(item, index) in props.items"
          :key="item.titulo"
          class="diferencial-card"
        >
          <div class="diferencial-icon">
            <!-- Dumbbell: Equipamentos -->
            <svg v-if="index === 0" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="13" y="19" width="18" height="6" rx="3" fill="var(--color-gold)" />
              <rect x="4" y="14" width="9" height="16" rx="4" fill="var(--color-gold)" />
              <rect x="31" y="14" width="9" height="16" rx="4" fill="var(--color-gold)" />
              <rect x="8" y="17" width="5" height="10" rx="2" fill="var(--color-gold)" opacity="0.5" />
              <rect x="31" y="17" width="5" height="10" rx="2" fill="var(--color-gold)" opacity="0.5" />
            </svg>
            <!-- Shield + check: Instrutores -->
            <svg v-else-if="index === 1" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 5L7 11.5V22c0 9.4 6.6 17.2 15 19.5 8.4-2.3 15-10.1 15-19.5V11.5L22 5Z" fill="var(--color-gold)" fill-opacity="0.15" stroke="var(--color-gold)" stroke-width="1.6" />
              <polyline points="14,22 19,27.5 30,16" stroke="var(--color-gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <!-- Tag + slash: Sem taxa -->
            <svg v-else width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8H25L37 20L22 36L8 22V8Z" fill="var(--color-gold)" fill-opacity="0.15" stroke="var(--color-gold)" stroke-width="1.6" stroke-linejoin="round" />
              <circle cx="16" cy="16" r="2.5" fill="var(--color-gold)" />
              <line x1="10" y1="34" x2="36" y2="8" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <h3 class="diferencial-titulo">{{ item.titulo }}</h3>
          <p class="diferencial-desc">{{ item.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diferenciais-section {
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

.diferenciais-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.diferencial-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.diferencial-icon {
  width: 44px;
  height: 44px;
}

.diferencial-titulo {
  font-family: var(--font-title);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
}

.diferencial-desc {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .diferenciais-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .section-titulo {
    font-size: 30px;
    margin-bottom: 48px;
  }
}
</style>
