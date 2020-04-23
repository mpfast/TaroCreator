<template>
  <v-list dense>
    <v-list-item-group color="primary">
      <v-list-item v-if="typeof properties == 'string'">
        <v-text-field
          v-model="properties"
          dense
          outlined
          hide-details
        ></v-text-field>
      </v-list-item>
      <v-list-item
        v-else
        v-for="(property, key, index) of properties"
        :key="index"
      >
        <v-list-item-content v-if="attributes && attributes[key]">
          <template v-if="attributes[key]['type'] == 'array'">
            <v-subheader class="title">{{ key }}:</v-subheader>
            <template v-for="(item, idx) in property">
              <properties :properties="item" :key="idx" />
            </template>
            <v-layout>
              <v-btn
                @click.prevent="delProperty(property)"
                color="primary"
                width="45%"
              >
                <v-icon>mdi-minus-circle</v-icon>减少
              </v-btn>
              <v-spacer />
              <v-btn
                @click.prevent="addProperty(property)"
                color="primary"
                width="45%"
              >
                <v-icon>mdi-plus-circle</v-icon>添加
              </v-btn>
            </v-layout>
          </template>
          <template v-else-if="attributes[key]['type'] == 'boolean'">
            <v-switch
              v-model="properties[key]"
              :label="key"
              hide-details
            ></v-switch>
          </template>
          <template v-else-if="attributes[key]['type'] == 'number'">
            <v-slider
              v-model="properties[key]"
              :label="`${key}: ${property}`"
              :thumb-size="24"
              :min="attributes[key]['min']"
              :max="attributes[key]['max']"
              :step="attributes[key]['step']"
              hide-details
            >
              <template v-slot:prepend>
                <v-icon @click.prevent="properties[key]--">
                  mdi-minus
                </v-icon>
              </template>

              <template v-slot:append>
                <v-icon @click.prevent="properties[key]++">
                  mdi-plus
                </v-icon>
              </template>
            </v-slider>
          </template>
          <template v-else-if="attributes[key]['type'] == 'select'">
            <v-select
              v-model="properties[key]"
              :label="`${key}: ${property}`"
              :items="attributes[key]['items']"
            ></v-select>
          </template>
          <template v-else-if="attributes[key]['type'] == 'color'">
            <label>{{ key }}:</label>
            <v-color-picker v-model="properties[key]"></v-color-picker>
          </template>
          <template v-else-if="typeof property == 'string'">
            <v-text-field
              :label="key"
              v-model="properties[key]"
              dense
              outlined
              hide-details
            ></v-text-field>
          </template>
        </v-list-item-content>
        <v-list-item-content v-else>
          <template v-if="typeof property == 'boolean'">
            <v-switch
              v-model="properties[key]"
              :label="key"
              hide-details
            ></v-switch>
          </template>
          <template v-else-if="typeof property == 'number'">
            <v-slider
              v-model="properties[key]"
              :label="`${key}: ${property}`"
              :thumb-size="24"
              hide-details
            >
              <template v-slot:prepend>
                <v-icon @click.prevent="properties[key]--">
                  mdi-minus
                </v-icon>
              </template>
              <template v-slot:append>
                <v-icon @click.prevent="properties[key]++">
                  mdi-plus
                </v-icon>
              </template>
            </v-slider>
          </template>
          <template v-else-if="typeof property == 'string'">
            <v-text-field
              :label="key"
              v-model="properties[key]"
              dense
              outlined
              hide-details
            ></v-text-field>
          </template>
          <template v-else-if="typeof property == 'function'">
            {{ key }}: {{ properties[key] }}
          </template>
          <template v-else-if="typeof property == 'array'">
            <v-subheader class="title">{{ key }}:</v-subheader>
            <template v-for="(item, idx) in property">
              <properties :properties="item" :key="idx" />
            </template>
            <v-layout v-if="property.length > 1">
              <v-btn
                @click.prevent="delProperty(property)"
                color="primary"
                width="45%"
              >
                <v-icon>mdi-minus-circle</v-icon>减少
              </v-btn>
              <v-spacer />
              <v-btn
                @click.prevent="addProperty(property)"
                color="primary"
                width="45%"
              >
                <v-icon>mdi-plus-circle</v-icon>添加
              </v-btn>
            </v-layout>
          </template>
          <template v-else-if="Object.keys(property).length">
            <v-subheader class="title">{{ key }}:</v-subheader>
            <template v-for="(item, idx) in property">
              <properties :properties="item" :key="idx" />
            </template>
            <v-layout v-if="property.length > 1">
              <v-btn
                @click.prevent="delProperty(property)"
                color="primary"
                width="45%"
              >
                <v-icon>mdi-minus-circle</v-icon>减少
              </v-btn>
              <v-spacer />
              <v-btn
                @click.prevent="addProperty(property)"
                color="primary"
                width="45%"
              >
                <v-icon>mdi-plus-circle</v-icon>添加
              </v-btn>
            </v-layout>
          </template>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'

export default {
  // eslint-disable-next-line
  name: 'properties',
  props: {
    properties: {
      type: [Object, String],
      default: () => {}
    }
  },
  computed: {
    attributes() {
      return this.$store.state.currentAttrs
    }
  },
  methods: {
    delProperty(property) {
      if (property.length > 2) {
        property.pop()
      }
    },
    addProperty(property) {
      property.push(_cloneDeep(property[0]))
    }
  }
}
</script>
