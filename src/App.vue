<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import DiferenciaisSection from './components/DiferenciaisSection.vue'
import PlanosSection from './components/PlanosSection.vue'
import AulaSection from './components/AulaSection.vue'
import DepoimentosSection from './components/DepoimentosSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsappButton from './components/WhatsappButton.vue'

import {
  nav,
  hero,
  diferenciais,
  planos,
  modalidades,
  depoimentos,
  cta,
  footer,
  whatsappUrl,
} from './data'
</script>

<template>
  <NavBar
    :logo="nav.logo"
    :links="nav.links"
    :cta-label="nav.ctaLabel"
    :cta-href="nav.ctaHref"
  />
  <HeroSection
    :imagem-url="hero.imagemUrl"
    :titulo="hero.titulo"
    :subtitulo="hero.subtitulo"
    :btn-primario="hero.btnPrimario"
    :btn-secundario="hero.btnSecundario"
    :stats="hero.stats"
    :whatsapp-url="whatsappUrl"
  />
  <DiferenciaisSection
    :titulo="diferenciais.titulo"
    :items="diferenciais.items"
  />
  <PlanosSection
    :titulo="planos.titulo"
    :subtitulo="planos.subtitulo"
    :btn-label="planos.btnLabel"
    :items="planos.items"
    :whatsapp-url="whatsappUrl"
  />
  <AulaSection
    :titulo="modalidades.titulo"
    :items="modalidades.items"
  />
  <DepoimentosSection
    :titulo="depoimentos.titulo"
    :items="depoimentos.items"
  />
  <CtaSection
    :titulo="cta.titulo"
    :subtitulo="cta.subtitulo"
    :btn-label="cta.btnLabel"
    :whatsapp-url="whatsappUrl"
  />
  <FooterSection :texto="footer.texto" />
  <WhatsappButton :url="whatsappUrl" />
</template>
