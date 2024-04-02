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
    class="grid"
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
.hero__title {
  grid-column: 1/5;
  margin: 0;
  text-transform: uppercase;
  font-size: 10.2vw;
  line-height: 0.75;
}
.hero__content {
  grid-column: 6/13;
  text-align: justify;
  text-transform: uppercase;
}
</style>
