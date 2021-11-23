<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      v-focus-section:app-bar.default="{enterTo:'last-focused'}"
    >
      <v-spacer></v-spacer>
      <router-link v-focus class="link" to="/" tag="p">home</router-link>
      <router-link v-focus class="link" to="/about" tag="p">about</router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
  padding-right: 20px;
  font-size: 28px;
}
</style>
