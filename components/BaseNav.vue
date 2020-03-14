<template>
  <nav>
    <nuxt-link to="/">
      <img src="~/assets/mia_white.png" alt="MIA Logo" class="logo" />
    </nuxt-link>
    <ul class="nav-items">
      <li><nuxt-link class="nav-item-text" to="/about">About</nuxt-link></li>
      <li>
        <nuxt-link class="nav-item-text" to="/table-of-contents">
          Table of Contents</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="nav-item-text" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  // position: absolute;
  // top: 0px;
  // width: 100%;
  background: #204f70 !important;
  padding: 15px 30px 15px 30px;
  text-align: right;
  z-index: 1;
  background: inherit;
}
.logo {
  width: 90px;
  height: 35px;
  float: left;
  text-transform: uppercase;
  text-align: left;
}
.nav-items li {
  list-style: none;
  display: inline-block;
  border-radius: 20px;
}
.nav-items li:hover {
  background: #436c8a;
  color: #fafafa;
}
.nav-items li a {
  color: #fff;
  text-decoration: none;
}
.nav-item-text {
  color: #fff;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0 20px;
  font-size: 15px;
  display: block;
  line-height: 30px;
  position: relative;
  z-index: 1;
}
@media screen and (max-width: 600px) {
  .nav-item-text {
    letter-spacing: 0px;
    font-size: 12px;
    padding: 0 15px;
    letter-spacing: 1px;
  }
}
//
</style>
