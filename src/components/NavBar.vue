<script setup lang="ts">
interface NavLink {
  label: string
  href: string
}

interface Props {
  logo: string
  links: NavLink[]
  ctaLabel: string
  ctaHref: string
}

const props = defineProps<Props>()
</script>

<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <span class="navbar-logo">{{ props.logo }}</span>
      <ul class="navbar-links">
        <li v-for="link in props.links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
      <a :href="props.ctaHref" class="navbar-cta">{{ props.ctaLabel }}</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(17, 17, 17, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar-logo {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-gold);
  flex-shrink: 0;
}

.navbar-links {
  display: flex;
  list-style: none;
  gap: 32px;
  flex: 1;
}

.navbar-links a {
  font-size: 14px;
  color: var(--color-text-muted);
  transition: color 0.2s;
}

.navbar-links a:hover {
  color: var(--color-text);
}

.navbar-cta {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 20px;
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}

.navbar-cta:hover {
  background: var(--color-gold);
  color: var(--color-bg);
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-inner {
    justify-content: space-between;
  }
}
</style>
