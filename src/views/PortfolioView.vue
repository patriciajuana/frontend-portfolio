<script setup lang="ts"></script>

<template>
  <div class="portfolio-view">
    <div class="portfolio-view__hero">
      <div class="container">
        <div class="portfolio-view__hero-layout row">
          <div class="col col-5">
            <h1>Album Release Package</h1>
            <p class="portfolio-view__subheading mt-1">TheWorldIsNotRound</p>
            <div class="portfolio-view__description my-3">
              <p>
                This project contribute to the official launch of my friend's third music album
                called "•••". The art style explores ideas of vintage, hazy, misty, surreal,
                ethereal or dream-like atmospheric elements, landscapes and textures.
              </p>
              <p>
                The band characterizes their as a feeling of tearing up while standing on a beach at
                around 4 pm, with impending rain clouds approaching, and this concept has
                undoubtedly been taken into account when creating the visuals.
              </p>
            </div>
            <ul class="portfolio-view__links d-flex flex-column ps-0">
              <li>
                <a href="#">Visit the Website</a>
              </li>
              <li>
                <a href="#">Visit the Website</a>
              </li>
            </ul>
          </div>
          <div class="portfolio-view__hero-image-section col col-7">
            <div class="portfolio-view__hero-image">
              <img class="img-fluid" src="@/assets/images/portfolio-preview-album.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="portfolio-view__details mt-2 py-3">
          <div class="row">
            <div v-for="i in 3" :key="i" class="col">
              <dl>
                <dt>Client:</dt>
                <dd class="mt-1">
                  <ul>
                    <li>Branding and Merch</li>
                    <li>Vinyl album cover</li>
                    <li>Press Kit</li>
                    <li>Website</li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div class="col">
              <dl>
                <dt>Client:</dt>
                <dd class="mt-1">
                  The objective of this project is to craft graphic design content for a
                  comprehensive album launch initiative. This represents the culmination of
                  proficiencies acquired across all subjects covered throughout the courses.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-view__body">
      <section class="portfolio-view__item">
        <img class="img-fluid" src="@/assets/images/kyc-web-app-placeholder.jpg" alt="" />
        <div class="portfolio-view__item-description">
          <div class="container">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut perferendis illum
              reprehenderit fugit assumenda in quam, perspiciatis debitis cum, consequatur veritatis
              quod molestias ullam? Labore debitis amet accusantium architecto adipisci?
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-view__hero {
}
.portfolio-view__hero-image-section {
  position: relative;
}
.portfolio-view__hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.portfolio-view__hero-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.portfolio-view__hero h1 {
  font-family: $font-broadacre-regular;
  font-size: 80px;
  text-transform: uppercase;
  line-height: 1.1;
}
.portfolio-view__subheading {
  font-family: $font-oswald;
  font-size: 30px;
  text-transform: uppercase;
  color: $primary;
}
.portfolio-view__description p {
  font-weight: $font-weight-light;
}
.portfolio-view__links {
  gap: 5px;
  list-style-position: inside;
}
.portfolio-view__links a {
  font-weight: $font-weight-medium;
  text-decoration: none;
}
.portfolio-view__details {
  position: relative;

  &:before {
    //border
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 1px;
    border-top: 1px solid $black;
  }
}
.portfolio-view__details dl > dt {
  font-weight: $font-weight-semibold;
}
.portfolio-view__details dl > dd ::v-deep(ul) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
}
.portfolio-view__details dl > dd {
  font-weight: $font-weight-light;
}
.portfolio-view__item {
  position: relative;
}
.portfolio-view__item img {
  width: 100%;
  object-fit: contain;
}
.portfolio-view__item-description {
  position: absolute;
  top: map-get($spacers, 5);
  left: 0;
  width: 100%;
}
.portfolio-view__item-description p {
  color: $white;
}
</style>
