
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

function openGallery(name) {
  // `event` is the native DOM event
  console.log(name)
  const gallery = document.querySelector(`.js-gallery-${name}`)
  const box = document.querySelector(`.main-info--${name}`)

  gallery?.classList.remove('is-hidden')
  box?.classList.add('is-open')

  document.body.classList.add('stop-scrolling')  
}

function closeGallery(name) {
  // `event` is the native DOM event
  console.log(name)
  const gallery = document.querySelector(`.js-gallery-${name}`)
  const box = document.querySelector(`.main-info--${name}`)

  gallery?.classList.add('is-hidden')
  box?.classList.remove('is-open')

  document.body.classList.remove('stop-scrolling')  
}
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
        <button @click="openGallery('fougere')" class="main-info__button">découvrir la série</button>

      </div>

      <img 
        src="~/assets/img/fougere.svg"
        class="main-info__img--fougere"
        alt="trace en noir sur blanc d'une sculpture en forme de fougère" 
      />
    </div>
    <div class="main-info__display-container main-info__display-container--right grid js-gallery-fougere is-hidden">
      <div class="main-info__display main-info__display--right">
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere0.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere1.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere2.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere3.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere4.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere5.webp" alt="" class="main-info__picture">
        </div>
      </div>
      <button @click="closeGallery('fougere')"  class="main-info__display-close">quitter la série</button>
    </div>
    <div class="main-info main-info--geranium"> 
      <div class="main-info__content">
        <h2 class="main-info__title">géranium</h2>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien bibendum, rutrum nisl eget, egestas quam. Cras vel dui scelerisque, faucibus ante eget, faucibus dolor. Praesent eget sapien nibh. 
        </p>
        <button @click="openGallery('geranium')" class="main-info__button">découvrir la série</button>
      </div>

      <img 
        src="~/assets/img/geranium-3.svg"
        class="main-info__img--geranium"
        alt="trace en noir sur blanc d'une sculpture en forme de fougère" 
      />
    </div>
    <div class="main-info__display-container main-info__display-container--left grid js-gallery-geranium is-hidden">
      <button @click="closeGallery('geranium')"  class="main-info__display-close">quitter la série</button>
      
      <div class="main-info__display main-info__display--left">
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere0.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere1.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere2.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere3.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere4.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/fougere/fougere5.webp" alt="" class="main-info__picture">
        </div>
      </div>
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
  text-align: justify;
  transition: opacity 0.4s cubic-bezier(0,.55,.12,1.02);
}
.main-info__content .main-info__title {
  font-size: 68px;
  font-weight: 400;
  transform: translateX(-0.5vw);
}


.main-info img {
  width: 100%;
}
.main-info.is-open .main-info__content {
  opacity: 1;
}
.main-info.is-open .main-info__button {
  pointer-events: none;
  text-decoration: line-through dotted;
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
  grid-column: 6 / 13;
  margin-top: -25vw;
}
.main-info--geranium img {
  max-width: unset;
  margin-top: -15vw;
  margin-left: 10%;
}
.main-info--geranium .main-info__content {
  margin-left: 30%;
}
.main-info__button {
  text-transform: uppercase;
  font-style: italic;
  margin-top: 10px;
  font-size: 18px;
  text-decoration: underline dotted;
  cursor: pointer;
}

.main-info__button:hover  {
  text-decoration: underline ; 

}
.main-info__display-container {
  z-index: 1;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  /* pointer-events: none; */
  padding-top: 0;
  padding-bottom: 0;
  overflow-y: scroll;
  transform: translateY(0%);
  transition: transform 0.4s cubic-bezier(0,.55,.12,1.02);
}
.main-info__display-container.is-hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(100%);
}
.main-info__display {
  height: 100%;
  padding: 14px 0 0;
}
.main-info__display--right {
  grid-column: 5 / 13;
}
.main-info__display--left {
  grid-row: 1;
  grid-column: 1 / 8;
}
.main-info__picture-container {
  margin-bottom: 14px;
}
.main-info__picture {
  width: 100%;
}
.main-info__display-close {
  position: sticky;
  left: 0.09vw;
  bottom: 10px;
  text-transform: uppercase;
  font-style: italic;
  margin-top: 10px;
  font-size: 18px;
  text-decoration: underline dotted;
  cursor: pointer;
  color: white;

}
.main-info__display-container--right .main-info__display-close {
  grid-column: 1/5;
  text-align: right;
}
.main-info__display-container--left .main-info__display-close {
  grid-column: 8/13;
  text-align: left;
  align-self: end;
  grid-row: 1;
}
.main-info__display-close:hover {
  text-decoration: underline;
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
  .main-info__display--right {
    grid-column: 1 / 10;
  }
  .main-info__display--left {
    grid-row: 1;
    grid-column: 1 / 10;
  }
  .main-info__display-container--right .main-info__display-close {
    grid-column: 10/13;
  }
  .main-info__display-container--left .main-info__display-close {
    grid-column: 10/13;
    text-align: left;
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
  .main-info__display--right {
    grid-column: 1 / 13;
  }
  .main-info__display--left {
    grid-row: 1;
    grid-column: 1 / 13;
  }
  .main-info__display-container--right .main-info__display-close {
    grid-column: 8/13;
    text-align: right;
  }
  .main-info__display-container--left .main-info__display-close {
    grid-column: 8/13;
    text-align: right;
  }
}
</style>

