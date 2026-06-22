<script setup>
import { profile, site } from "../content";
</script>

<template>
  <footer class="site-footer">
    <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
    <a :href="site.repository" target="_blank" rel="noreferrer">Source</a>
  </footer>
</template>
