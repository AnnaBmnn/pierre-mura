
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
          Ancestral plant, present for millions of years, it embodies the primordial force of the plant kingdom. Through this series, I invite the viewer to immerse himself in the very essence of the plant, to feel its vital breath. The fractal form of its deployment has guided my work, inspiring a representation of the inner tension that animates it. Each leaf, each stem, seems to emerge with persistence, reflecting a silent effort, a will for growth, where every particle reveals the depth of life that animates it.
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
          <img loading="lazy" src="~/assets/img/fougere/fougere0.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img loading="lazy" src="~/assets/img/fougere/fougere1.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img loading="lazy" src="~/assets/img/fougere/fougere3.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img loading="lazy" src="~/assets/img/fougere/fougere4.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img loading="lazy" src="~/assets/img/fougere/fougere5.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img loading="lazy" src="~/assets/img/fougere/fougere6.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img loading="lazy" src="~/assets/img/fougere/fougere7.webp" alt="" class="main-info__picture">
        </div>
      </div>
      <button @click="closeGallery('fougere')"  class="main-info__display-close">quitter la série</button>
    </div>
    <div class="main-info main-info--geranium"> 
      <div class="main-info__content">
        <h2 class="main-info__title">Geranium</h2>
        <p >
          On the window sill of the workshop, a pot of geranium remains. Each leaf, in a secret and graceful movement, unfolds one after the other, like a confidence whispered by nature. From this vegetal choreography a soft poetry is born, a series of suspended moments, where the subtle beauty of the world comes to life in the hushed silence of everyday life.
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
          <img src="~/assets/img/geranium/geranium1.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium2.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium3.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium4.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium5.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium6.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium7.webp" alt="" class="main-info__picture">
        </div>
        <div class="main-info__picture-container">
          <img src="~/assets/img/geranium/geranium8.webp" alt="" class="main-info__picture">
        </div>
      </div>
    </div>
    <div class="biographie grid">
      <div class="biographie__list-container">
        <ul class="biographie__list">
          <li class="biographie__list-item">
            <a href="mailto:Pierremurasculpteur@gmail.com" >
              <span class="biographie__list-item-label">email</span>
              <span class="biographie__list-item-content">Pierremurasculpteur@gmail.com</span>
            </a>
          </li>
          <li class="biographie__list-item">
            <a href="https://www.instagram.com/ruma_sculpt/" target="_blank">
              <span class="biographie__list-item-label">Instagram</span>
              <span class="biographie__list-item-content">@ruma_sculpt</span>
            </a>
          </li>
          <li class="biographie__list-item">
            <a download href="./CV_Pierre_MURA_2024.png">
              <span class="biographie__list-item-label"> CV</span>
              <span class="biographie__list-item-content"> Télécharger</span>
            </a>
          </li>
          <li class="biographie__list-item">
            <a download href="./Portfolio_2024-2025.pdf">
              <span class="biographie__list-item-label">Portfolio</span>
              <span class="biographie__list-item-content">Télécharger</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="biographie__text">
        I am open to collaboration, don't hesitate to reach out.
      </div>

    </div>
    <div class="bye ">
      <div class="bye__text">
        Merci !
      </div>
      <ul class="bye__credits grid">
        <li class="bye__credit bye__credit--top"><span class="bye__credit-label">Design + development </span><a target="_blank" href="https://www.annabaumann.fr/">Anna Baumann</a></li>
        <!--<li class="bye__credit bye__credit--middle"><span class="bye__credit-label">Photographies </span><span class="bye__credit-content bye__credit-compl">????</span></li>-->
        <li class="bye__credit bye__credit--bottom">
          <span class="bye__credit-label">Fonts </span> 
          <div class="bye__credit-content"> 
            <div>
              <span class="bye__credit-compl"> Kaeru Kaeru by Isabel Motz on </span>
              <a target="_blank" href="https://velvetyne.fr/download/?font=kaeru-kaeru">velvetyne.fr</a>
            </div>
            <div>
              <span class="bye__credit-compl">Suisse Int'l by </span>
              <a target="_blank" href="https://www.swisstypefaces.com/fonts/suisse/#Int%E2%80%99l">SwissTypeface</a>
            </div>

          </div>
        </li>
      </ul>
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
  /* text-align: justify; */
  transition: opacity 0.4s cubic-bezier(0,.55,.12,1.02);
}
.main-info__content .main-info__title {
  font-family: 'Kaeru Kaeru', 'arial';
  font-size: 68px;
  font-weight: 400;
  letter-spacing: -1px;
  transform: translateY(-6px) scaleY(1.4);
  text-transform: lowercase;
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
  /* transform: scale(-1.2); */
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

.biographie {
  position: relative;
  margin-top: 35vh;
  min-height: 75vh;
  grid-column: 1 / 13;
  padding: 0;
}

.biographie__text {
  grid-column: 6 / 13;
  /* text-align: justify; */
  text-transform: uppercase;
  color: white;
  padding-bottom: 100vh;
  mix-blend-mode: difference;
  display: none;
}
.biographie__list-container {
  height: 70vh;
  grid-column: 1 / 5;
  margin-bottom: 10vw;
}

.biographie__list {
  width: 100%;
  position: sticky;
  top: 11vw;
  color: white;
  text-transform: uppercase;
  margin: 0 ;
  mix-blend-mode: difference;
  font-size: 12px;
}

.biographie__list-item a{
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px dotted;
  text-decoration: none;
  color: white;
}
.biographie__list-item:hover a{
  border-bottom: 1px solid;
}
.biographie__list-item-label {
  /* width: 30%; */
  /* flex-basis: 30%; */
}
.biographie__list-item-content {
  /* width: 70%; */
  /* flex-basis: 70%; */
  color: #70a72d;
  text-decoration: none;
}

.biographie__list-item-label a {
}

.bye {
  display: flex;
  grid-column: 1 / 13;
  margin-top: 15vw;
  height: 30vh;
  align-items: flex-end;
  text-align: center;
  width: 100vw;
  position: relative;
}

.bye__text {
  font-family: 'Kaeru Kaeru', 'arial';
  font-size: 14vw;
  letter-spacing: -13px;
  font-size: 35vw;
  font-style: italic;
  color: white;
  transform: translate(0vw, 10px) scaleY(1.6);
  margin: 0 auto 0vw;
  line-height: 0.8;
  overflow: hidden;
  padding-right: 6vw;
  mix-blend-mode: difference;
  white-space: nowrap;
  max-width: 100vw;
  pointer-events: none;
  width: 100vw;
}

.bye__credits {
  position: absolute;
  bottom: -9vw;
  /* color: #333b37; */
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-transform: uppercase;
  font-size: 12px;
  /* width: 30vw; */
  display: grid;
  width: calc(100vw - 20px);
  padding: 10px 10px 10px 0;
}

.bye__credit {
  display: flex;
  width: 100%;
  align-items: flex-end;
  text-align: left;
  /* justify-content: space-between; */
}
.bye__credit--top {
  grid-column: 1 / 3;
  grid-column: 4 / 7;
}
.bye__credit--middle {
  grid-column: 7 / 9;
}
.bye__credit--bottom {
  grid-column: 9 / 13;
}
.bye__credit-label {
  mix-blend-mode: difference;
  color: white;
  width: 120px;
  text-align: left;
}
.bye__credit-compl {
  mix-blend-mode: difference;
  color: white;  
}
.bye__credit a {
  color: #70a72d;
  mix-blend-mode: none;
}
.bye__credit-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  .biographie__text {
    grid-column: 8 / 13;
  }
  .biographie__list-container {
    grid-column: 1 / 8;
  }
  .biographie__list {
    top: 20vw;
  }
  .bye {
    height: 50vh;

  }
  .bye__credits {
    display: flex;
    bottom: 100%;
  }
}
@media screen and (max-width: 830px) {
  .main-info__content {
    top: 22vw;
  }
  .main-info__content .main-info__title {
    /* transform: translateX(-1.3vw); */
    font-size: 48px;
  }
  .main-info--fougere {
    grid-column: 1 / 9;
  }
  .main-info--geranium {
    grid-column: 1 / 9;
  }
  .main-info__img--fougere {
    margin-left: 35vw;
  }
  img.main-info__img--geranium {
    margin-left: 35vw;
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
  .biographie {
    margin-top: 10vh;
  }
  .biographie__text {
    grid-column: 1 / 13;
  }
  .biographie__list-container {
    grid-column: 1 / 13;
  }
  .biographie__list {
    top: 20vw;
  }
}
</style>

