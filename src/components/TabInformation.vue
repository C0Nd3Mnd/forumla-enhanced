<script setup lang="ts">
import { mdiCheck } from "@mdi/js";
import { version } from "../../package.json";
import { useAddonStore } from "../stores/addon";

const addonStore = useAddonStore();

const supportedStyles = ["Forumla 4.2", "Forumla 4.2 Retro"];

const debugInfo = JSON.stringify(
  {
    userAgent: navigator.userAgent,
    version,
    storage: addonStore.storage,
  },
  null,
  2
);
</script>

<template>
  <v-list select-strategy="independent" density="compact">
    <v-list-subheader>Unterstützte Styles</v-list-subheader>
    <v-list-item
      v-for="supportedStyle in supportedStyles"
      :key="supportedStyle"
      :prepend-icon="mdiCheck"
    >
      <v-list-item-title>{{ supportedStyle }}</v-list-item-title>
    </v-list-item>
    <v-list-subheader>Debug-Informationen</v-list-subheader>
    <v-list-item>
      <v-textarea readonly style="font-family: monospace" :value="debugInfo" />
    </v-list-item>
  </v-list>
</template>
