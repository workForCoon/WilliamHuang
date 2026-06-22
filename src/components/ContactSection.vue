<script setup>
import { links, profile } from "../content";

const contactLinks = [
  { label: "Email", href: links.email },
  { label: "GitHub", href: links.github },
  { label: "Google Scholar", href: links.scholar },
  { label: "LinkedIn", href: links.linkedin },
  { label: "ORCID", href: links.orcid }
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
