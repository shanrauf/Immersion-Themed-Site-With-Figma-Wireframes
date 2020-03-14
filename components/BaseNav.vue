<template>
  <div>
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
      <v-app-bar-nav-icon
        class="nav-drawer-icon"
        color="#fff"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </nav>
    <v-navigation-drawer
      v-model="drawer"
      class="nav-drawer"
      absolute
      temporary
      right
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="goTo('/')">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goTo('/about')">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goTo('/table-of-contents')">
            <v-list-item-title>Table of Contents</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="goTo('/contact')"
              >Contact</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>

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
.nav-drawer-icon {
  display: none;
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

@media screen and (max-width: 768px) {
  .nav-items {
    display: none;
  }
  .nav-drawer-icon {
    display: inline-flex;
  }
}
//
</style>
