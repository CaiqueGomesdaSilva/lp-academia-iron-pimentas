<script setup lang="ts">
interface Stat {
  valor: string
  label: string
}

interface Props {
  imagemUrl: string
  titulo: string
  subtitulo: string
  btnPrimario: string
  btnSecundario: string
  stats: Stat[]
  whatsappUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url(${props.imagemUrl})` }"
  >
    <div class="hero-overlay" />
    <div class="hero-content">
      <div class="hero-line" />
      <h1 class="hero-titulo">{{ props.titulo }}</h1>
      <p class="hero-subtitulo">{{ props.subtitulo }}</p>
      <div class="hero-btns">
        <a
          :href="props.whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primario"
        >{{ props.btnPrimario }}</a>
        <a href="#planos" class="btn-secundario">{{ props.btnSecundario }}</a>
      </div>
      <div class="hero-stats">
        <div v-for="stat in props.stats" :key="stat.label" class="hero-stat">
          <span class="hero-stat-valor">{{ stat.valor }}</span>
          <span class="hero-stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 26, 26, 0.55);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-left: 8%;
  padding-right: 24px;
  max-width: 700px;
}

.hero-line {
  width: 60px;
  height: 3px;
  background: var(--color-gold);
  margin-bottom: 24px;
}

.hero-titulo {
  font-family: var(--font-title);
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  white-space: pre-line;
  color: var(--color-text);
  margin-bottom: 20px;
}

.hero-subtitulo {
  font-size: 18px;
  color: var(--color-text-muted);
  max-width: 520px;
  margin-bottom: 40px;
  line-height: 1.65;
}

.hero-btns {
  display: flex;
  gap: 16px;
  margin-bottom: 56px;
}

.btn-primario,
.btn-secundario {
  display: inline-block;
  padding: 16px 32px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: opacity 0.2s, background 0.2s, color 0.2s;
}

.btn-primario {
  background: var(--color-gold);
  color: var(--color-bg);
}

.btn-primario:hover {
  opacity: 0.88;
}

.btn-secundario {
  border: 1.5px solid var(--color-gold);
  color: var(--color-gold);
  font-weight: 500;
}

.btn-secundario:hover {
  background: var(--color-gold);
  color: var(--color-bg);
}

.hero-stats {
  display: flex;
  gap: 48px;
}

.hero-stat {
  display: flex;
  flex-direction: column;
}

.hero-stat-valor {
  font-family: var(--font-title);
  font-size: 36px;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1;
}

.hero-stat-label {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-top: 5px;
}

@media (max-width: 768px) {
  .hero-content {
    padding-left: 24px;
  }

  .hero-titulo {
    font-size: 38px;
  }

  .hero-subtitulo {
    font-size: 16px;
  }

  .hero-btns {
    flex-direction: column;
  }

  .btn-primario,
  .btn-secundario {
    text-align: center;
  }

  .hero-stats {
    gap: 28px;
  }

  .hero-stat-valor {
    font-size: 28px;
  }
}
</style>
