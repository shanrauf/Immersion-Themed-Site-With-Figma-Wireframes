<template>
  <v-footer padless class="base-footer">
    <v-card class="flex" flat tile>
      <v-card-title>
        <strong class="subheading"
          >Copyright &copy; {{ new Date().getFullYear() }} Mass Immersion
          Approach</strong
        >

        <v-spacer />

        <font-awesome-icon :icon="['fab', 'youtube']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'patreon']" />
        <font-awesome-icon :icon="['fas', 'coffee']" />
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<style lang="scss" scoped>
.base-footer {
  border-top: 1px solid gray;
}
</style>
