<script setup>
import { ref } from "vue";
import { profile } from "../content";

defineProps({
  sections: {
    type: Array,
    required: true
  }
});

const menuOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Go to top">
      <span class="brand-mark">{{ profile.shortName.slice(0, 1) }}</span>
      <span>{{ profile.shortName }}</span>
    </a>
    <div
      class="nav-menu"
      :class="{ 'is-open': menuOpen }"
      @mouseenter="menuOpen = true"
      @mouseleave="menuOpen = false"
      @focusin="menuOpen = true"
      @focusout="menuOpen = false"
    >
      <button
        class="nav-menu-label"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="section-navigation"
        @click="menuOpen = true"
      >
        Sections
      </button>
      <nav id="section-navigation" class="nav-links" aria-label="Primary navigation">
        <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
          {{ section.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
