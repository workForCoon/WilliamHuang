<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const groupedPublications = computed(() => {
  const groups = props.items.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a));
});
</script>

<template>
  <div class="renderer-section">
    <div class="subsection-heading">
      <h3>Publications</h3>
      <span>{{ items.length }} items</span>
    </div>
    <div class="publication-years">
      <section v-for="[year, publications] in groupedPublications" :key="year">
        <h4>{{ year }}</h4>
        <article
          v-for="publication in publications"
          :key="publication.id"
          class="publication-item"
        >
          <div>
            <p class="publication-status">{{ publication.type }} · {{ publication.status }}</p>
            <h5>{{ publication.title }}</h5>
            <p class="muted">{{ publication.authors.join(", ") }}</p>
            <p class="venue">{{ publication.venue }}</p>
            <p>{{ publication.abstract }}</p>
            <div class="mini-tags">
              <span v-for="tag in publication.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
          <div class="item-links">
            <a
              v-for="(href, label) in publication.links"
              :key="label"
              :href="href"
              target="_blank"
              rel="noreferrer"
            >
              {{ label }}
            </a>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>
