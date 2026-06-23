<script setup>
import { awards, education, experiences } from "../content";
import TimelineRenderer from "./TimelineRenderer.vue";
</script>

<template>
  <section id="experience" class="content-section section-shell">
    <div class="section-heading">
      <p class="section-kicker">Experience</p>
      <h2>Academic path and selected work</h2>
    </div>
    <div class="experience-layout">
      <TimelineRenderer
        class="education-timeline"
        title="Education"
        :items="education"
        variant="education"
      />
      <TimelineRenderer
        class="work-timeline"
        title="Research, leadership, and service"
        :items="experiences"
        variant="experience"
      />
    </div>
    <div class="awards-band">
      <h3>Awards and honors</h3>
      <ul>
        <li v-for="award in awards" :key="award.id">
          <strong>{{ award.year }}</strong>
          <span>{{ award.title }}, {{ award.organization }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
