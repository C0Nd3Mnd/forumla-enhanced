<script setup lang="ts">
import {
  mdiCardText,
  mdiFileDocument,
  mdiGithub,
  mdiInformation,
  mdiOwl,
  mdiReload,
  mdiWrench,
} from "@mdi/js";
import { computed, ref } from "vue";
import { version } from "../package.json";
import logoWhite from "./assets/logo_white.png";
import TabInformation from "./components/TabInformation.vue";
import TabLayout from "./components/TabLayout.vue";
import TabPosts from "./components/TabPosts.vue";
import TabTweaks from "./components/TabTweaks.vue";
import { useAddonStore } from "./stores/addon";

const topicNavigationModeOptions = [
  {
    title: "Standard",
    value: false,
  },
  {
    title: "Einfach",
    value: "simple",
  },
  {
    title: "Erweitert",
    value: "advanced",
  },
];

async function reload() {
  const tabs = await chrome.tabs.query({
    url: "*://*.forumla.de/*",
  });

  for (const tab of tabs) {
    if (!tab.id) {
      continue;
    }

    chrome.tabs.reload(tab.id);
  }
}

const easterEggIcon = ref(mdiOwl);

const addonStore = useAddonStore();

const tabs = [
  {
    name: "layout",
    label: "Layout",
    icon: mdiFileDocument,
  },
  {
    name: "posts",
    label: "Posts",
    icon: mdiCardText,
  },
  {
    name: "tweaks",
    label: "Tweaks",
    icon: mdiWrench,
  },
  {
    name: "information",
    label: "Informationen",
    icon: mdiInformation,
  },
];

const activeTab = ref("layout");
const activeTabTitle = computed(
  () => tabs.find((tab) => tab.name === activeTab.value)?.label,
);
</script>

<template>
  <v-layout>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title>
        <img style="height: 38px; padding-top: 8px" :src="logoWhite" />
      </v-app-bar-title>
      <v-btn icon @click="reload">
        <v-icon>{{ mdiReload }}</v-icon>
        <v-tooltip activator="parent" location="bottom">
          Lädt alle im Browser geöffneten forumla.de Tabs neu.
        </v-tooltip>
      </v-btn>

      <template #extension>
        <v-tabs v-model="activeTab" grow density="compact">
          <v-tab v-for="tab in tabs" :key="tab.name" :value="tab.name">
            <v-icon>{{ tab.icon }}</v-icon>
            <v-tooltip activator="parent" location="bottom">
              {{ tab.label }}
            </v-tooltip>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <h6 class="text-h6 px-4 pb-0 pt-2">{{ activeTabTitle }}</h6>
      <v-window v-model="activeTab">
        <v-window-item value="layout">
          <TabLayout />
        </v-window-item>
        <v-window-item value="posts">
          <TabPosts />
        </v-window-item>
        <v-window-item value="tweaks">
          <TabTweaks />
        </v-window-item>
        <v-window-item value="information">
          <TabInformation />
        </v-window-item>
      </v-window>
      <v-footer app class="pa-0">
        <div class="px-4 py-2 bg-secondary w-100 d-flex justify-space-between">
          <span>
            Version {{ version }}, erstellt von
            <a
              href="https://www.forumla.de/u62855/medeman/"
              target="_blank"
              class="text-accent"
            >
              medeman
            </a>
          </span>
          <a
            href="https://github.com/C0Nd3Mnd/forumla-enhanced"
            title="GitHub"
            target="_blank"
            class="text-white"
          >
            <v-icon>{{ mdiGithub }}</v-icon>
          </a>
        </div>
      </v-footer>
    </v-main>
  </v-layout>
</template>
