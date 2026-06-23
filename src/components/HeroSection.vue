<script setup>
import { links, profile } from "../content";
</script>

<template>
  <section id="top" class="hero-section section-shell">
    <div class="hero-copy">
      <p class="section-kicker">{{ profile.title }}</p>
      <div class="hero-title-row">
        <h1>{{ profile.name }}</h1>
      </div>
      <p class="hero-field">{{ profile.field }}</p>
      <p class="hero-headline">{{ profile.headline }}</p>
      <div class="hero-actions" aria-label="Profile links">
        <a class="button primary" :href="links.email">Email</a>
        <a class="button secondary" :href="profile.cvUrl">CV</a>
        <a class="button secondary" :href="profile.researchSummaryUrl">Research Summary</a>
      </div>
    </div>
    <div class="hero-card" aria-label="Profile and research summary">
      <div class="portrait-placeholder hero-portrait">
        <img
          v-if="profile.avatar"
          :src="profile.avatar"
          :alt="`${profile.name} profile photo`"
        />
        <span v-else>{{ profile.shortName.slice(0, 1) }}</span>
      </div>
      <dl>
        <div>
          <dt>Location</dt>
          <dd>{{ profile.location }}</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>Spectral identifiability and reliable learning</dd>
        </div>
        <div>
          <dt>Method</dt>
          <dd>Statistics, optimization, and numerical inference</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
