<script setup>
import { projects, publications } from "../content";
import ProjectRenderer from "./ProjectRenderer.vue";
import PublicationRenderer from "./PublicationRenderer.vue";
</script>

<template>
  <section id="portfolio" class="content-section section-shell">
    <div class="section-heading">
      <p class="section-kicker">Portfolio</p>
      <h2>Publications and selected projects</h2>
    </div>
    <PublicationRenderer :items="publications" />
    <ProjectRenderer :items="projects" />
  </section>
</template>
