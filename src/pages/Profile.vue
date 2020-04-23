<template>
  <v-content>
    <v-container fill-height justify-center>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(value, key) of authUser" :key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-content>
</template>

<script>
export default {
  computed: {
    authUser() {
      return this.$store.state.authUser
    }
  }
}
</script>
