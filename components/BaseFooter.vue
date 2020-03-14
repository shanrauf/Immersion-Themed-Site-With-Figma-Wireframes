<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title>
        <div class="footer-container">
          <strong class="subheading"
            ><strong class="copyright"
              >Copyright &copy; {{ new Date().getFullYear() }} Mass Immersion
              Approach</strong
            ></strong
          >

          <div class="social-icons">
            <a href="https://youtube.com/user/MATTvsJapan">
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'youtube']"
                :style="{ color: '#FF0000' }"
              />
            </a>

            <a href="https://twitter.com/mattvsjapan">
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'twitter']"
                :style="{ color: '#1DA1F2' }"
            /></a>
            <a href="https://www.patreon.com/massimmersionapproach">
              <font-awesome-icon
                class="social-icon"
                :icon="['fab', 'patreon']"
                :style="{ color: '#f96854' }"
              />
            </a>
            <a href="https://ko-fi.com/massimmersionapproach">
              <font-awesome-icon
                class="social-icon"
                :icon="['fas', 'coffee']"
                :style="{
                  color: '#29ABE0'
                }"
              />
            </a>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.copyright {
  font-size: 12px;
}
.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.social-icon {
  margin: 0 10px;
}
.footer-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 600px) {
  .footer-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 auto;
  }
}
</style>
