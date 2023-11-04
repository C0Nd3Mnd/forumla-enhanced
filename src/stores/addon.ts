import { defineStore } from "pinia";
import { ref } from "vue";

export const useAddonStore = defineStore("addon", () => {
  const storage = ref<{ [key: string]: any }>({});

  chrome.storage.sync.get((items) => {
    storage.value = items;
  });

  chrome.storage.onChanged.addListener(() => {
    chrome.storage.sync.get((items) => {
      storage.value = items;
    });
  });

  function toggleItem(item: string) {
    chrome.storage.sync.set({ [item]: !storage.value[item] });
  }

  function setItem(item: string, value: any) {
    chrome.storage.sync.set({ [item]: value });
  }

  return { storage, toggleItem, setItem };
});
