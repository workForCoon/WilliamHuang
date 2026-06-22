<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  variant: {
    type: String,
    default: "experience"
  }
});
</script>

<template>
  <div class="timeline-block">
    <h3>{{ title }}</h3>
    <ol class="timeline-list">
      <li v-for="item in items" :key="item.id" class="timeline-item">
        <div class="timeline-date">{{ item.startDate }} - {{ item.endDate }}</div>
        <div class="timeline-content">
          <h4>{{ variant === "education" ? item.degree : item.role }}</h4>
          <p class="muted">
            {{ variant === "education" ? item.institution : item.organization }}
            <span v-if="item.location"> · {{ item.location }}</span>
          </p>
          <p v-if="item.advisor" class="muted">Advisor: {{ item.advisor }}</p>
          <ul>
            <li v-for="highlight in item.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
          <div class="mini-tags">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
