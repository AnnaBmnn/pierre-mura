<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SerieMainInfosSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="grid main-info__section"
  >
  <div class="main-info main-info--fougere"> 
    <div class="main-info__content">
      <h2 class="main-info__title">fougère</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien bibendum, rutrum nisl eget, egestas quam. Cras vel dui scelerisque, faucibus ante eget, faucibus dolor. Praesent eget sapien nibh. 
      </p>
    </div>

    <img 
      src="~/assets/img/fougere.svg"
      class="main-info__img--fougere"
      alt="trace en noir sur blanc d'une sculpture en forme de fougère" 
    />
  </div>
  <div class="main-info main-info--geranium"> 
    <div class="main-info__content">
      <h2 class="main-info__title">géranium</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien bibendum, rutrum nisl eget, egestas quam. Cras vel dui scelerisque, faucibus ante eget, faucibus dolor. Praesent eget sapien nibh. 
      </p>
    </div>

    <img 
      src="~/assets/img/geranium-3.svg"
      class="main-info__img--geranium"
      alt="trace en noir sur blanc d'une sculpture en forme de fougère" 
    />
  </div>
  </section>
</template>

<style scoped>
.main-info__content {
  position: sticky;
  top: 11vw;
  text-transform: uppercase;
  color: white;
  mix-blend-mode: difference;
  width: 50%;
  opacity: 0;

}
.main-info__content .main-info__title {
  font-size: 72px;
  font-weight: 400;
  transform: translateX(-0.5vw);
}

.main-info img {
  width: 100%;
}
.main-info--fougere {
  grid-column: 1 / 8;
}
.main-info__img--fougere {
  margin-top: -15vw;
}
.main-info:hover .main-info__content{
  opacity: 1;
}
.main-info--geranium {
  grid-column: 5 / 13;
  margin-top: -80vw;
}
.main-info--geranium img {
  max-width: unset;
  margin-top: -15vw;
  margin-left: 10%;
}
.main-info--geranium .main-info__content {
  margin-left: 12.5%;
}
@media screen and (max-width: 1024px) {
  .main-info {
    padding-bottom: 8vh;
    margin-bottom: 12vh;
    min-height: 100vh;
  }
  .main-info__section {
    margin-bottom: 100vh;
  }
  .main-info__content {
    opacity: 1;
    width: 100%;
  }

  .main-info--fougere {
    grid-column: 1 / 8;
  }
  .main-info--geranium {
    grid-column: 1 / 8;
    margin-top: 0vw;
  }
  .main-info--geranium .main-info__content {
    margin-left: 0%;

  }
}
@media screen and (max-width: 830px) {
  .main-info__content {
    top: 22vw;
  }
  .main-info__content .main-info__title {
    transform: translateX(-1.3vw);
    font-size: 48px;
  }
  .main-info--fougere {
    grid-column: 1 / 9;
  }
  .main-info--geranium {
    grid-column: 1 / 9;
  }
}
</style>
