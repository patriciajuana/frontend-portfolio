<script setup lang="ts"></script>

<template>
  <div class="home-hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="home-hero__image-column col-5">
          <img class="img-fluid" src="@/assets/images/home-hero.png" alt="" />
        </div>
        <div class="col-6">
          <div class="d-flex flex-column">
            <div>
              <h1 class="mb-3">
                <span class="d-inline-block">Dear </span>
                <span class="d-block text-primary">Hiring </span>
                <span class="d-block text-primary">Manager,</span>
              </h1>
              <p>
                I’m reaching out to express my extremely professional level of excitement about the
                Front End Developer position. I stalked the posting on your website in a totally
                non-creepy way, and couldn’t help but notice that my skills and experience line up
                almost too perfectly with what you're looking for.
              </p>
              <p>
                I’m a creative front-end developer ninja with a legendary amount of experience,
                whipping up visually stunning and user-friendly interfaces and slaying projects left
                and right like there is no tomorrow. HTML, CSS, and JavaScript? Please. I devour
                those before my morning coffee.
              </p>
              <p>
                I’m not just a developer. Not just a designer. I’m the full package: a well-oiled
                machine (possibly over-lubricated). Skilled, detail-obsessed, a team player, and
                cheap—because who says you can’t have it all? Consider me your go-to for making the
                impossible look easy (and possibly even fun).
              </p>
              <p>You’d be lucky to have me on your team!</p>
              <p>
                Please hire me. Please hire me. Please hire me. Please hire me. Please hire me.
                Please hire me. Please hire me. Please hire me. Please hire me. Please hire me.
                Please hire me. Please hire me. Please hire me. Please hire me. Please hire me.
                Please hire me. Please hire me. Please hire me. Please hire me. Please hire me.
                Please hire me.
              </p>
              <p class="mt-5">Sincerely,<br />Patrick John Pacana</p>
            </div>
            <div class="home-hero__catch-text mt-10">
              <p>Please</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-hero h1 {
  font-size: 120px;
  line-height: 1;
  text-transform: uppercase;
  margin-top: calc(map-get($spacers, 9) - 5px);
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
    background-color: #f1f1f1;
    transform-origin: left;
    transform: scaleX(10);
  }
}
.home-hero p {
  font-weight: $font-weight-light;
  font-size: 18px;
  color: $secondary;
  line-height: 1.3;
}
.home-hero__catch-text p {
  font-family: $headings-font-family;
  font-size: 180px;
  color: #f1f1f1;
  text-transform: uppercase;
  line-height: 1;
}
.home-hero__image-column {
  position: relative;
  z-index: 0;

  &:before {
    //underlay
    content: '';
    position: absolute;
    top: map-get($spacers, 10);
    left: map-get($spacers, 8);
    width: 100%;
    height: calc(100% - map-get($spacers, 10));
    background-color: #f1f1f1;
    z-index: -1;
    transform-origin: right;
    transform: scaleX(10);
  }
}
</style>
