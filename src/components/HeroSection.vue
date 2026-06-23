<script setup>
import { computed, onMounted, ref } from "vue";
import { links, profile } from "../content";

const isRevealed = ref(false);
const noiseLevel = ref(28);

const conditionNumber = computed(() => Math.round(8 + noiseLevel.value * 0.52));

const identifiability = computed(() => {
  if (noiseLevel.value < 34) return "High";
  if (noiseLevel.value < 68) return "Stable";
  return "Fragile";
});

const spectrumBars = computed(() => {
  const noise = noiseLevel.value / 100;
  return [96, 72, 51, 32, 18].map((base, index) =>
    Math.max(8, Math.round(base - noise * (index + 1) * 14)),
  );
});

const researchNodes = [
  "Learning Theory",
  "Spectral Identifiability",
  "Stability",
  "Interpretability",
];

const snapshotItems = ["Spectral Methods", "Statistical Learning", "Reliable AI"];

onMounted(() => {
  requestAnimationFrame(() => {
    isRevealed.value = true;
  });
});
</script>

<template>
  <section
    id="top"
    class="hero-section section-shell experimental-hero"
    :class="{ 'is-revealed': isRevealed }"
  >
    <div class="hero-copy">
      <p class="section-kicker reveal-stage stage-1">{{ profile.title }}</p>
      <div class="hero-title-row">
        <h1 class="reveal-stage stage-2">{{ profile.name }}</h1>
      </div>
      <p class="hero-field reveal-stage stage-3">{{ profile.field }}</p>
      <p class="hero-headline reveal-stage stage-4">{{ profile.headline }}</p>
      <div class="hero-actions reveal-stage stage-5" aria-label="Profile links">
        <a class="button primary" :href="links.email">Email</a>
        <a class="button secondary" :href="profile.cvUrl">CV</a>
        <a class="button secondary" :href="profile.researchSummaryUrl">Research Summary</a>
      </div>
    </div>
    <div class="hero-card reveal-stage stage-6" aria-label="Profile and research summary">
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
      <div class="research-snapshot" aria-label="Research snapshot">
        <span v-for="item in snapshotItems" :key="item">{{ item }}</span>
      </div>
      <div class="research-map" aria-label="Research map">
        <div class="map-title">Research Map</div>
        <div class="map-canvas" aria-hidden="true">
          <span class="map-edge edge-a"></span>
          <span class="map-edge edge-b"></span>
          <span class="map-edge edge-c"></span>
          <span class="map-edge edge-d"></span>
          <span
            v-for="(node, index) in researchNodes"
            :key="node"
            class="map-node"
            :class="`node-${index + 1}`"
          >
            <i></i>
            <b>{{ node }}</b>
          </span>
        </div>
      </div>
      <div class="spectral-explorer" aria-label="Spectral explorer">
        <div class="explorer-heading">
          <span>Spectral Explorer</span>
          <strong>{{ noiseLevel }}% noise</strong>
        </div>
        <input
          v-model.number="noiseLevel"
          type="range"
          min="0"
          max="100"
          aria-label="Noise level"
        />
        <div class="explorer-stats">
          <div>
            <span>Identifiability</span>
            <strong>{{ identifiability }}</strong>
          </div>
          <div>
            <span>Condition Number</span>
            <strong>{{ conditionNumber }}</strong>
          </div>
        </div>
        <div class="spectrum-bars" aria-label="Spectrum bars">
          <span
            v-for="(bar, index) in spectrumBars"
            :key="index"
            :style="{ width: `${bar}%` }"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experimental-hero {
  align-items: start;
  perspective: 1200px;
}

.reveal-stage {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 650ms ease,
    transform 650ms ease;
}

.is-revealed .reveal-stage {
  opacity: 1;
  transform: translateY(0);
}

.is-revealed .stage-2 {
  transition-delay: 90ms;
}

.is-revealed .stage-3 {
  transition-delay: 170ms;
}

.is-revealed .stage-4 {
  transition-delay: 250ms;
}

.is-revealed .stage-5 {
  transition-delay: 330ms;
}

.is-revealed .stage-6 {
  transition-delay: 420ms;
}

.hero-card {
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  background:
    linear-gradient(120deg, rgba(15, 118, 110, 0.08), transparent 42%),
    radial-gradient(circle at 84% 14%, rgba(14, 116, 144, 0.12), transparent 28%);
}

.hero-card > * {
  position: relative;
  z-index: 1;
}

.research-snapshot {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.research-snapshot span {
  display: flex;
  min-height: 58px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: var(--accent-dark);
  background: rgba(238, 244, 242, 0.78);
  border: 1px solid rgba(220, 229, 225, 0.92);
  border-radius: var(--radius);
  font-size: 0.78rem;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
}

.research-map,
.spectral-explorer {
  padding: 16px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(220, 229, 225, 0.95);
  border-radius: var(--radius);
}

.research-map {
  overflow: hidden;
}

.map-title,
.explorer-heading span {
  color: var(--accent-dark);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.map-canvas {
  position: relative;
  min-height: 220px;
  margin-top: 12px;
  overflow: hidden;
}

.map-node {
  position: absolute;
  display: grid;
  justify-items: center;
  width: 112px;
  color: var(--text);
  font-size: 0.72rem;
  font-weight: 850;
  line-height: 1.15;
  text-align: center;
}

.map-node i {
  width: 16px;
  height: 16px;
  margin-bottom: 7px;
  background: var(--accent);
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(15, 118, 110, 0.35);
}

.node-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.node-2 {
  top: 82px;
  left: 0;
}

.node-3 {
  top: 82px;
  right: 0;
}

.node-4 {
  right: 50%;
  bottom: 0;
  transform: translateX(50%);
}

.map-edge {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(15, 118, 110, 0.62), transparent);
  transform-origin: left center;
}

.edge-a {
  top: 55px;
  left: 48%;
  width: 142px;
  transform: rotate(35deg);
}

.edge-b {
  top: 55px;
  right: 48%;
  width: 142px;
  transform: rotate(145deg);
}

.edge-c {
  top: 101px;
  left: 25%;
  width: 50%;
}

.edge-d {
  right: 21%;
  bottom: 63px;
  width: 58%;
  transform: rotate(150deg);
}

.explorer-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.explorer-heading strong {
  color: var(--accent);
  font-size: 0.86rem;
}

.spectral-explorer input {
  width: 100%;
  margin: 14px 0;
  accent-color: var(--accent);
}

.explorer-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.explorer-stats div {
  padding: 10px;
  background: var(--surface-strong);
  border: 1px solid rgba(220, 229, 225, 0.95);
  border-radius: var(--radius);
}

.explorer-stats span,
.explorer-stats strong {
  display: block;
}

.explorer-stats span {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 850;
  text-transform: uppercase;
}

.explorer-stats strong {
  margin-top: 2px;
  color: var(--text);
  font-size: 1.1rem;
}

.spectrum-bars {
  display: grid;
  gap: 7px;
  margin-top: 14px;
}

.spectrum-bars span {
  display: block;
  height: 9px;
  background: linear-gradient(90deg, var(--accent), rgba(14, 116, 144, 0.7));
  border-radius: 999px;
  transition: width 180ms ease;
}

@media (max-width: 640px) {
  .research-snapshot,
  .explorer-stats {
    grid-template-columns: 1fr;
  }

  .map-canvas {
    min-height: 250px;
  }

  .map-node {
    width: 96px;
  }

  .node-2 {
    top: 94px;
  }

  .node-3 {
    top: 94px;
  }

  .edge-a,
  .edge-b {
    width: 110px;
  }
}
</style>
