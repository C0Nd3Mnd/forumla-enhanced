<script setup lang="ts">
import { mdiCheck, mdiClose } from "@mdi/js";
import { version } from "../../package.json";
import { useAddonStore } from "../stores/addon";

const addonStore = useAddonStore();

const supportedStyles = [
  {
    title: "Forumla 4.2",
    subtitle: "",
    icon: mdiCheck,
  },
  {
    title: "Weihnachten 2022",
    subtitle: "inkl. Style-Fix für Schneeflocken",
    icon: mdiCheck,
  },
  {
    title: "Forumla 4.2 Retro",
    subtitle: "inkl. Style-Fixes",
    icon: mdiCheck,
  },
  {
    title: "Forumla-Grey 4.1.12",
    subtitle: "Varianten ebenfalls unterstützt",
    icon: mdiCheck,
  },
  {
    title: "Forumla-Eloquent 4.1.12",
    subtitle: "Varianten ebenfalls unterstützt",
    icon: mdiCheck,
  },
  {
    title: "Forumla-Seamus 4.1.12",
    subtitle: "Header-Leiste zu breit/Hintergrundbild",
    icon: mdiClose,
  },
];

const debugInfo = JSON.stringify(
  {
    userAgent: navigator.userAgent,
    version,
    storage: addonStore.storage,
  },
  null,
  2,
);
</script>

<template>
  <v-list select-strategy="independent" density="compact">
    <v-list-subheader>Unterstützte Styles</v-list-subheader>
    <v-list-item
      v-for="supportedStyle in supportedStyles"
      :key="supportedStyle.title"
      :prepend-icon="supportedStyle.icon"
    >
      <v-list-item-title>{{ supportedStyle.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ supportedStyle.subtitle }}</v-list-item-subtitle>
    </v-list-item>
    <v-list-subheader>Debug-Informationen</v-list-subheader>
    <v-list-item>
      <v-textarea readonly style="font-family: monospace" :value="debugInfo" />
    </v-list-item>
  </v-list>
</template>
