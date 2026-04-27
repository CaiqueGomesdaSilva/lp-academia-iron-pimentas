<script setup lang="ts">
interface Plano {
  nome: string
  preco: string
  periodo: string
  destaque: boolean
  beneficios: string[]
}

interface Props {
  titulo: string
  subtitulo: string
  btnLabel: string
  items: Plano[]
  whatsappUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <section id="planos" class="planos-section">
    <div class="container">
      <h2 class="section-titulo">{{ props.titulo }}</h2>
      <p class="section-subtitulo">{{ props.subtitulo }}</p>
      <div class="planos-grid">
        <div
          v-for="plano in props.items"
          :key="plano.nome"
          class="card-plano"
          :class="{ destaque: plano.destaque }"
        >
          <div v-if="plano.destaque" class="card-badge">Mais popular</div>
          <h3 class="plano-nome">{{ plano.nome }}</h3>
          <div class="plano-preco-wrap">
            <span class="plano-cifra">R$</span>
            <span class="plano-preco">{{ plano.preco }}</span>
          </div>
          <span class="plano-periodo">{{ plano.periodo }}</span>
          <ul class="plano-beneficios">
            <li v-for="beneficio in plano.beneficios" :key="beneficio" class="plano-beneficio">
              <span class="check">✓</span>
              {{ beneficio }}
            </li>
          </ul>
          <a
            :href="props.whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="plano-btn"
            :class="{ 'plano-btn--destaque': plano.destaque }"
          >{{ props.btnLabel }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.planos-section {
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
  margin-bottom: 12px;
}

.section-subtitulo {
  font-size: 18px;
  color: var(--color-text-muted);
  text-align: center;
  margin-bottom: 64px;
}

.planos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: start;
}

.card-plano {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.card-plano.destaque {
  border-left: 3px solid var(--color-gold);
  padding-left: 29px;
}

.card-badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  background: rgba(200, 169, 110, 0.12);
  padding: 4px 10px;
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 16px;
}

.plano-nome {
  font-family: var(--font-title);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 20px;
}

.plano-preco-wrap {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 6px;
}

.plano-cifra {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-muted);
  padding-top: 10px;
}

.plano-preco {
  font-family: var(--font-title);
  font-size: 52px;
  font-weight: 400;
  color: var(--color-text);
  line-height: 1;
}

.plano-periodo {
  font-size: 13px;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 32px;
  line-height: 1.4;
}

.plano-beneficios {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
}

.plano-beneficio {
  font-size: 15px;
  color: var(--color-text-muted);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.check {
  color: var(--color-gold);
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 1px;
}

.plano-btn {
  display: block;
  text-align: center;
  padding: 14px 24px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1.5px solid var(--color-border);
  color: var(--color-text-muted);
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  margin-top: auto;
}

.plano-btn:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.plano-btn--destaque {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-bg);
}

.plano-btn--destaque:hover {
  opacity: 0.88;
  color: var(--color-bg);
}

@media (max-width: 768px) {
  .planos-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-titulo {
    font-size: 30px;
    margin-bottom: 12px;
  }

  .section-subtitulo {
    font-size: 16px;
    margin-bottom: 40px;
  }
}
</style>
