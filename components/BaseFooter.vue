<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title>
        <strong class="subheading"
          ><strong class="copyright"
            >Copyright &copy; {{ new Date().getFullYear() }} Mass Immersion
            Approach</strong
          ></strong
        >

        <v-spacer></v-spacer>

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
      </v-card-title>
    </v-card>
  </v-footer>
</template>

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
</style>
