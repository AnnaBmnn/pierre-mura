<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    class="grid hero"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <h1 class="hero__title">
      {{slice.primary.title}}

    </h1>
    <PrismicRichText
      :field="slice.primary.presentation"
      class="hero__content"
    />
  </section>
</template>

<style scoped>
.hero {
  color: #CBC4C8;
  mix-blend-mode: difference;
  margin-bottom: 25vh;
}
.hero__title {
  position: fixed;
  grid-column: 1 / 5;
  margin: 7px 0 0;
  text-transform: uppercase;
  font-size: 11.5vw;
  line-height: 0.8;
  font-family: 'Suisse Int\'l Book';
  font-weight: 500;
  letter-spacing: -0.2vw;
  transform: translateX(-0.9vw);

}
.hero__content {
  grid-column: 6/13;
  /* text-align: justify; */
  text-transform: uppercase;

}
@media screen and (max-width: 830px) {
  .hero__title {
    grid-column: 1 / 13;
    font-size: 20vw;
    transform: translateX(-1.6vw);
    mix-blend-mode: difference;
  }
  .hero__content {
    margin-top: 20vw;
    grid-column: 1/13;
    /* text-align: justify; */
    text-transform: uppercase;
  }
}
</style>
