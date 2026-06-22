<script setup>
import { profile } from "../content";

defineProps({
  sections: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Go to top">
      <span class="brand-mark">{{ profile.shortName.slice(0, 1) }}</span>
      <span>{{ profile.shortName }}</span>
    </a>
    <div class="nav-menu">
      <nav class="nav-links" aria-label="Primary navigation">
        <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
          {{ section.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
