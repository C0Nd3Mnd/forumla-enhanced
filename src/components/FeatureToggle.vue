<script setup lang="ts">
import { defineProps } from "vue";
import { useAddonStore } from "../stores/addon";

const addonStore = useAddonStore();

const props = defineProps({
  prop: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-list-item v-bind="$attrs" @click="addonStore.toggleItem(props.prop)">
    <template #prepend>
      <v-list-item-action start>
        <v-checkbox-btn :model-value="addonStore.storage[props.prop]" />
      </v-list-item-action>
    </template>
  </v-list-item>
</template>
