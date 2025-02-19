<script setup lang="ts"></script>

<template>
  <div class="home-hero mt-8 mt-md-4 mt-lg-0">
    <div class="container">
      <div class="home-hero__layout row justify-content-between flex-row-reverse flex-lg-row">
        <div class="home-hero__image-column col col-lg-5">
          <img class="img-fluid" src="@/assets/images/home-hero.png" alt="" />
        </div>
        <div class="col col-12 col-lg-6">
          <div class="home-hero__body d-flex flex-column">
            <div class="pb-3">
              <h1 class="mb-1 mb-lg-3">
                <span class="d-inline-block">Dear </span>
                <span class="d-block text-primary">Hiring </span>
                <span class="d-block text-primary">Manager,</span>
              </h1>
              <p>
                I’m reaching out to express my <strong>extremely professional</strong> level of
                excitement about the Front End Developer position. I stalked the posting on your
                website in a totally non-creepy way, and couldn’t help but notice that my skills and
                experience line up almost too perfectly with what you're looking for.
              </p>
              <p>
                I’m a creative <strong>front-end developer ninja</strong> with a legendary amount of
                experience, whipping up visually stunning and user-friendly interfaces and slaying
                projects left and right like there is no tomorrow. HTML, CSS, and JavaScript?
                Please. I devour those before my morning coffee.
              </p>
              <p>
                I’m not just a developer. Not just a designer. I’m the full package: a well-oiled
                machine (possibly over-lubricated). Skilled, detail-obsessed, a team player, and
                cheap—because who says you can’t have it all? Consider me your go-to for making the
                impossible look easy (and possibly even fun).
              </p>
              <p>You’d be lucky to have me on your team!</p>
              <p class="mt-5">Sincerely,<br />Patrick John Pacana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-hero > .container {
  @include media-breakpoint-down(md) {
    padding-right: 0;
  }
}

.home-hero__layout {
  position: relative;
}

.home-hero__body {
  @include media-breakpoint-down(lg) {
    width: 60%;
  }
}

.home-hero h1 {
  font-size: 120px;
  line-height: 1;
  text-transform: uppercase;

  @include media-breakpoint-down(xl) {
    font-size: 80px;
  }
  @include media-breakpoint-down(md) {
    font-size: 50px;
  }
}
.home-hero h1 > span:first-child {
  position: relative;

  &:after {
    //lead-in
    content: '';
    position: absolute;
    top: 16px;
    left: calc(100% + map-get($spacers, 4));
    width: 100%;
    height: calc(100% - 23px);
    background-color: $gray-100;
    transform-origin: left;
    transform: scaleX(10);

    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
}
.home-hero p {
  font-weight: $font-weight-light;
  font-size: 18px;
  color: $secondary;
  line-height: 1.3;

  @include media-breakpoint-down(md) {
    font-size: 14px;
  }
}
.home-hero p strong {
  color: $black;
}
.home-hero__catch-text {
  position: relative;
  left: -42px;
  top: 36px;
  width: calc(50vw + 42px);
  overflow: hidden;
}

@keyframes catch-text-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-780px);
  }
}
.home-hero__catch-text p {
  font-family: $headings-font-family;
  font-size: 180px;
  color: $gray-100;
  text-transform: uppercase;
  line-height: 1;
  mix-blend-mode: multiply;
  white-space: nowrap;
  animation: catch-text-scroll 15s linear infinite;
  //animation: catch-text-scroll 1s linear infinite;
}
.home-hero__image-column {
  position: relative;
  z-index: 0;

  @include media-breakpoint-down(lg) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(50%);
    z-index: -1;
    mask-image: linear-gradient(to right, transparent, red 20%);
  }

  &:before {
    //underlay
    content: '';
    position: absolute;
    top: map-get($spacers, 10);
    left: map-get($spacers, 8);
    width: 100%;
    height: calc(100% - map-get($spacers, 10));
    background-color: $gray-100;
    z-index: -1;
    transform-origin: right;
    transform: scaleX(10);

    @include media-breakpoint-down(xl) {
      left: map-get($spacers, 4);
    }
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
</style>
