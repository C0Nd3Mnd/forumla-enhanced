<script setup lang="ts">
import FeatureToggle from "./FeatureToggle.vue";
</script>

<template>
  <v-list select-strategy="independent" density="compact">
    <v-list-subheader>Benutzerkontrollzentrum</v-list-subheader>
    <FeatureToggle
      prop="confirmSubscriptionDeletion"
      title='"Abonnement löschen" bestätigen'
      subtitle="Fragt zusätzlich nach, ob ein Abonnement wirklich gelöscht werden soll."
      lines="two"
    />
    <v-list-subheader>Problembehebungen</v-list-subheader>
    <FeatureToggle
      prop="fixStyleBugs"
      title="Style-Probleme beheben"
      subtitle="Behebt Probleme mit einigen Foren-Styles, entfernt bspw. den weißen Hintergrund der obigen Links beim Retro Style."
      lines="three"
    />
  </v-list>
</template>
