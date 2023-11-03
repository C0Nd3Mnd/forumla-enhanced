<script setup lang="ts">
import { useAddonStore } from "../stores/addon";
import FeatureToggle from "./FeatureToggle.vue";

const addonStore = useAddonStore();

const limitPageWidthOptions = [
  {
    title: "Standard",
    value: false,
  },
  {
    title: "1200px",
    value: "1200px",
  },
  {
    title: "1400px",
    value: "1400px",
  },
  {
    title: "1600px",
    value: "1600px",
  },
  {
    title: "Unbegrenzt",
    value: "unset",
  },
];
</script>

<template>
  <v-list select-strategy="independent" density="compact">
    <v-list-subheader>Seite</v-list-subheader>
    <v-list-item>
      <v-select
        :items="limitPageWidthOptions"
        label="Maximale Breite der Seite"
        :model-value="addonStore.storage.limitPageWidth"
        hide-details
        @update:modelValue="addonStore.setItem('limitPageWidth', $event)"
      />
    </v-list-item>
    <v-list-subheader>Header</v-list-subheader>
    <FeatureToggle
      prop="stickyHeader"
      title="Header anheften"
      subtitle="Heftet den Header oben an, sodass dieser mitscrollt."
      lines="two"
    />
    <FeatureToggle
      prop="compactHeader"
      title="Kompakter Header"
      subtitle="Verringert die Höhe des Headers."
      lines="two"
    />
  </v-list>
</template>
