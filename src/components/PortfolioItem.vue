<script setup lang="ts"></script>

<template>
  <div class="portfolio-item">
    <div class="container">
      <div class="row">
        <div class="portfolio-item__body col-6">
          <h2>KYC Web App</h2>
          <p class="portfolio-item__subheading mb-3">Identity Verification</p>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi suscipit, quaerat,
            reiciendis optio illum consequuntur in est aliquam commodi recusandae, quibusdam itaque.
            Veritatis labore maxime expedita iste beatae aut.
          </p>
          <a
            class="portfolio-item__link"
            href="https://patriciajuana.github.io/theworldisnotround/"
            target="_blank"
          >
            Visit the Website
            <i class="fas fa-external-link-alt"></i>
          </a>
          <div class="portfolio-item__sub row mt-4">
            <div class="col-lg-1"></div>
            <div class="col-lg-11">
              <p class="portfolio-item__count">
                <span>/01</span>
              </p>
              <div class="mt-3">
                <dl class="row">
                  <dt class="col-3">Client:</dt>
                  <dd class="col">Humber IGS (Graphics Design for Print and Web)</dd>
                </dl>
                <dl class="row">
                  <dt class="col-3">Deliverables:</dt>
                  <dd class="col">
                    <ul class="list-unstyled mb-0">
                      <li>Branding and Merch</li>
                      <li>Vinyl album cover</li>
                      <li>Press Kit</li>
                      <li>Website</li>
                    </ul>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="col-3">Tools:</dt>
                  <dd class="col">
                    <ul class="list-unstyled mb-0">
                      <li>InDesign</li>
                      <li>Illustrator</li>
                      <li>Photoshop</li>
                      <li>Web Development</li>
                    </ul>
                  </dd>
                </dl>
                <div class="row mt-4">
                  <div class="col-6">
                    <a class="btn btn-primary" href="album_release.html">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="portfolio-item__image">
            <img class="img-fluid" src="@/assets/images/portfolio-preview-bh.jpg" alt="" />
            <p class="portfolio-item__tags">ideation, composite, creative</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-item h2 {
  font-size: 80px;
  line-height: 1;
}
.portfolio-item__subheading {
  font-family: $font-oswald;
  font-size: 30px;
  text-transform: uppercase;
  color: $primary;
}
.portfolio-item__count {
  font-family: $font-oswald;
  font-size: 20px;
  border-bottom: 1px solid $gray-200;
}
.portfolio-item__count > span {
  border-bottom: 1px solid $black;
  display: inline-block;
  padding-bottom: 5px;
  padding-right: 5px;
}
.portfolio-item__image {
  position: relative;
}
.portfolio-item__tags {
  font-family: $font-oswald;
  font-weight: $font-weight-light;
  color: $gray-600;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: map-get($spacers, 5);
  padding-bottom: map-get($spacers, 1);

  &:after {
    //framing borders
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: map-get($spacers, 10);
    height: 100%;
    border-right: 1px solid $gray-200;
    border-bottom: 1px solid $gray-200;
  }
}
.portfolio-item__link {
  font-weight: $font-weight-medium;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.portfolio-item__link i {
  font-size: 12px;
}
</style>
