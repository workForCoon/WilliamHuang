<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="renderer-section">
    <div class="subsection-heading">
      <h3>Projects</h3>
      <span>{{ items.length }} items</span>
    </div>
    <div class="project-grid">
      <article v-for="project in items" :key="project.id" class="project-card">
        <div class="project-visual">
          <span>{{ project.year }}</span>
        </div>
        <p class="publication-status">{{ project.type }}</p>
        <h4>{{ project.title }}</h4>
        <p>{{ project.summary }}</p>
        <div class="mini-tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="item-links">
          <a
            v-for="(href, label) in project.links"
            :key="label"
            :href="href"
            target="_blank"
            rel="noreferrer"
          >
            {{ label }}
          </a>
        </div>
      </article>
    </div>
  </div>
</template>
