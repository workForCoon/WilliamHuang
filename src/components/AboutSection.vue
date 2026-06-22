<script setup>
import { profile } from "../content";
</script>

<template>
  <section id="about" class="content-section section-shell">
    <div class="section-heading">
      <p class="section-kicker">About</p>
      <h2>Research profile</h2>
    </div>
    <div class="about-grid">
      <div class="bio-panel">
        <p v-for="paragraph in profile.bio" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="list-panel">
        <h3>Research interests</h3>
        <ul class="tag-list">
          <li v-for="interest in profile.researchInterests" :key="interest">
            {{ interest }}
          </li>
        </ul>
        <h3>Methods</h3>
        <ul class="tag-list">
          <li v-for="method in profile.methods" :key="method">{{ method }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
