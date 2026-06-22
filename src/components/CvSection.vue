<script setup>
import { education, experiences, profile, publications } from "../content";
</script>

<template>
  <section id="cv" class="content-section section-shell cv-section">
    <div>
      <p class="section-kicker">CV</p>
      <h2>Curriculum vitae</h2>
      <p>
        A concise academic summary is rendered from the same structured content
        files used across the website.
      </p>
    </div>
    <div class="cv-stats" aria-label="CV summary">
      <div>
        <strong>{{ education.length }}</strong>
        <span>degrees</span>
      </div>
      <div>
        <strong>{{ experiences.length }}</strong>
        <span>roles</span>
      </div>
      <div>
        <strong>{{ publications.length }}</strong>
        <span>publications</span>
      </div>
    </div>
    <a class="button primary" :href="profile.cvUrl">Download CV</a>
  </section>
</template>
