<script setup>
import { links, profile } from "../content";

const contactLinks = [
  { label: "Email", href: links.email },
  { label: "CV", href: links.cv },
  { label: "Research Summary", href: links.researchSummary }
];
</script>

<template>
  <section id="contact" class="content-section section-shell contact-section">
    <div>
      <p class="section-kicker">Contact</p>
      <h2>Let us connect</h2>
      <p>
        I am open to research conversations, collaboration, and academic
        opportunities related to {{ profile.field }}.
      </p>
    </div>
    <div class="contact-links">
      <a
        v-for="link in contactLinks"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>
