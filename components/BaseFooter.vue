<template>
  <v-footer padless class="base-footer">
    <v-card class="flex" flat tile>
      <v-card-title>
        <strong class="copyright"
          >Copyright &copy; {{ new Date().getFullYear() }} Mass Immersion
          Approach</strong
        >

        <v-spacer />

        <div class="social-icons">
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'youtube']"
            :style="{ color: '#FF0000' }"
          />
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'twitter']"
            :style="{ color: '#1DA1F2' }"
          />
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'patreon']"
            :style="{ color: '#f96854' }"
          />
          <font-awesome-icon
            class="social-icon"
            :icon="['fas', 'coffee']"
            :style="{
              color: '#29ABE0'
            }"
          />
        </div>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<style lang="scss" scoped>
.base-footer {
  border-top: 1px solid gray;
}
.copyright {
  font-size: 15px;
}
.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.social-icon {
  margin: 0 10px;
}
</style>
