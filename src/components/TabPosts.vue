<script setup lang="ts">
import { useAddonStore } from "../stores/addon";
import FeatureToggle from "./FeatureToggle.vue";

const addonStore = useAddonStore();

const postImageHeightLimitOptions = [
  {
    title: "Standard",
    value: false,
  },
  {
    title: "400px",
    value: "400px",
  },
  {
    title: "600px",
    value: "600px",
  },
  {
    title: "800px",
    value: "800px",
  },
  {
    title: "Unbegrenzt",
    value: "unset",
  },
];
</script>

<template>
  <v-list select-strategy="independent" density="compact">
    <v-list-subheader>Posts</v-list-subheader>
    <FeatureToggle
      prop="relativeTimestamps"
      title="Relative Zeitstempel"
      subtitle='Zeigt Zeitstempel bei Posts relativ ("vor 10 Minuten") statt absolut an'
      lines="two"
    />
    <v-list-item>
      <v-select
        :items="postImageHeightLimitOptions"
        label="Maximale Höhe von Bildern"
        :model-value="addonStore.storage.postImageHeightLimit"
        hide-details
        @update:modelValue="addonStore.setItem('postImageHeightLimit', $event)"
      />
    </v-list-item>
    <v-list-subheader>Signaturen</v-list-subheader>
    <FeatureToggle
      prop="hideSignatureImages"
      title="Signaturbilder ausblenden"
      subtitle="Blendet sämtliche Bilder in Signaturen von Posts aus"
      lines="two"
    />
    <v-list-subheader>Einbettungen</v-list-subheader>
    <FeatureToggle
      prop="allowYouTubeFullscreen"
      title="Vollbild bei YouTube-Videos erlauben"
      subtitle="Aktiviert den Vollbild-Button bei YouTube-Videos, um diese direkt im Forum im Vollbild anschauen zu können"
      lines="three"
    />
  </v-list>
</template>
