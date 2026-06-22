<script setup>
import { computed } from "vue";
import { sections } from "./content";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import CvSection from "./components/CvSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";

const enabledSections = computed(() =>
  sections.filter((section) => section.enabled)
);

const isEnabled = (id) => enabledSections.value.some((section) => section.id === id);
</script>

<template>
  <SiteHeader :sections="enabledSections" />
  <main>
    <HeroSection />
    <AboutSection v-if="isEnabled('about')" />
    <ExperienceSection v-if="isEnabled('experience')" />
    <PortfolioSection v-if="isEnabled('portfolio')" />
    <CvSection v-if="isEnabled('cv')" />
    <ContactSection v-if="isEnabled('contact')" />
  </main>
  <SiteFooter />
</template>
