<script setup lang="ts"></script>

<template>
  <div class="footer pt-4">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div>
          <Logo type="dark"></Logo>
        </div>
        <nav>
          <div class="d-flex gap-4">
            <div v-for="i in 3" :key="i">
              <h2>Web Apps</h2>
              <ul class="d-flex flex-column list-unstyled mt-1">
                <li v-for="j in 3" :key="j">
                  <RouterLink to="/">Album Release Package</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="footer__copy-block mt-3 py-2">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <ul class="footer__social list-unstyled d-flex gap-2 mb-0">
            <li v-for="j in 3" :key="j">
              <a class="d-inline-flex align-items-center gap-1" href="#" target="_blank">
                patriciajuana@gmail.com
                <i><img class="img-fluid" src="@/assets/images/icon-mail.svg" alt="" /></i>
              </a>
            </li>
          </ul>
          <small class="footer__copyright">© 2023 Patrick John Pacaña</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #1f1f1f;
}
.footer nav ul {
  gap: 5px;
}
.footer nav h2,
.footer nav li a {
  font-family: $font-broadacre-regular;
  font-size: 14px;
  text-decoration: none;
  color: $gray-400;
}
.footer nav li a {
  font-family: $font-broadacre-light;
  font-size: 12px;

  &:hover {
    color: $primary;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
}
.footer__social {
  gap: 5px;
}
.footer__social a {
  font-family: $font-oswald;
  font-size: 14px;
  color: #afafaf;
  text-decoration: none;
  transition: color 0.25s ease-out;
}
.footer__social a:hover {
  color: $primary;
  text-decoration: underline;

  i {
    transform: none;
  }
  i img {
    transform: scale(0.9);
  }
}
.footer__social i {
  transform: rotate(90deg) translateX(2px);
  transition: transform 0.25s ease-out;
}
.footer__social i img {
  width: 18px;
  transition: transform 0.25s ease-out;
}
.footer__copyright {
  font-size: 12px;
  color: #afafaf;
}
.footer__copy-block {
  border-top: 1px solid rgba($white, 0.1);
}
</style>
