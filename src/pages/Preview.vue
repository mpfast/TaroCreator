<template>
  <v-content>
    <v-container fill-height justify-center>
      <template v-for="component in components">
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component
          :is="component.name"
          :key="component.guid"
          :guid="component.guid"
          v-bind="component.props"
        />
      </template>
    </v-container>
  </v-content>
</template>

<script>
export default {
  computed: {
    components() {
      return this.$store.state.app.pages[0].components
    }
  }
}
</script>
