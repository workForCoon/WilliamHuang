<script setup>
import { awards, education, experiences } from "../content";
import TimelineRenderer from "./TimelineRenderer.vue";

const researchEvolution = [
  {
    phase: "Statistics",
    detail: "Inference foundations",
  },
  {
    phase: "Optimization",
    detail: "Stable computation",
  },
  {
    phase: "Learning Theory",
    detail: "Generalization structure",
  },
  {
    phase: "Spectral Identifiability",
    detail: "Reliable AI systems",
  },
];
</script>

<template>
  <section id="experience" class="content-section section-shell">
    <div class="section-heading">
      <p class="section-kicker">Experience</p>
      <h2>Research evolution and selected work</h2>
    </div>
    <div class="research-evolution" aria-label="Research evolution">
      <div
        v-for="(item, index) in researchEvolution"
        :key="item.phase"
        class="evolution-step"
      >
        <span>{{ String(index + 1).padStart(2, "0") }}</span>
        <strong>{{ item.phase }}</strong>
        <em>{{ item.detail }}</em>
      </div>
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

<style scoped>
.research-evolution {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin-bottom: 22px;
  overflow: hidden;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.evolution-step {
  position: relative;
  min-height: 126px;
  padding: 18px 18px 16px;
  background:
    linear-gradient(150deg, rgba(238, 244, 242, 0.9), rgba(255, 255, 255, 0.96)),
    var(--surface);
}

.evolution-step::after {
  position: absolute;
  right: -10px;
  bottom: 20px;
  width: 36px;
  height: 2px;
  content: "";
  background: rgba(15, 118, 110, 0.45);
}

.evolution-step:last-child::after {
  display: none;
}

.evolution-step span,
.evolution-step strong,
.evolution-step em {
  display: block;
}

.evolution-step span {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 950;
  letter-spacing: 0.08em;
}

.evolution-step strong {
  margin-top: 18px;
  color: var(--text);
  font-size: clamp(1rem, 1.5vw, 1.18rem);
  line-height: 1.15;
}

.evolution-step em {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.86rem;
  font-style: normal;
  font-weight: 750;
  line-height: 1.3;
}

@media (max-width: 900px) {
  .research-evolution {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .evolution-step:nth-child(2)::after {
    display: none;
  }
}

@media (max-width: 640px) {
  .research-evolution {
    grid-template-columns: 1fr;
  }

  .evolution-step {
    min-height: auto;
  }

  .evolution-step::after {
    right: 20px;
    bottom: -1px;
    width: 2px;
    height: 28px;
  }

  .evolution-step:nth-child(2)::after {
    display: block;
  }

  .evolution-step:last-child::after {
    display: none;
  }
}
</style>
