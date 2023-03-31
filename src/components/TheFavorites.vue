<template>
  <ul class="pc-list" v-if="!mobileNavigation" v-auto-animate>
    <li
      v-for="favorite in favorites"
      :key="favorite"
      @click="toggleFavorite(favorite)"
    >
      {{ favorite }}
    </li>
  </ul>
  <!-- displaynam favorite icona jeigu mes su mazu ekranu -->
  <div
    v-if="mobileNavigation"
    class="mobile-click"
    :class="mobileNavigationOpen ? 'close' : ''"
  >
    <svg
      v-if="!mobileNavigationOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 mobile-icon"
      @click="toggleMobile"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
    <svg
      v-if="mobileNavigationOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 mobile-icon"
      @click="toggleMobile"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
  <!-- displaynam pasislepusy lista -->
  <div
    v-if="mobileNavigation"
    class="mobile-list-wrapper"
    :class="getListClasses"
  >
    <ul class="mobile-list">
      <li
        v-for="favorite in favorites"
        :key="favorite"
        @click="toggleFavorite(favorite)"
      >
        {{ favorite }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ["fetch-favorite"],
  props: {
    favorites: {
      type: Array,
    },
  },
  data() {
    return {
      windowSize: window.innerWidth,
      mobileNavigation: false,
      mobileNavigationOpen: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      if (this.windowSize <= 900) {
        this.mobileNavigation = true;
      } else {
        this.mobileNavigation = false;
      }
    });
  },

  methods: {
    toggleFavorite(favorite) {
      // $emit('fetch-favorite', favorite)
      this.$emit("fetch-favorite", favorite);
      this.mobileNavigationOpen = false;
    },
    onResize() {
      this.windowSize = window.innerWidth;
    },
    toggleMobile() {
      this.mobileNavigationOpen = !this.mobileNavigationOpen;
    },
  },
  computed: {
    getListClasses() {
      return {
        hidden: !this.mobileNavigationOpen,
      };
    },
  },
  watch: {
    windowSize(size) {
      if (size <= 900) {
        this.mobileNavigation = true;
      } else {
        this.mobileNavigation = false;
      }
    },
  },
};
</script>

<style scoped>
.pc-list {
  position: fixed;
  top: 30%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.pc-list li {
  list-style: none;
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #e2e4f6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: fit-content;
}

.mobile-click {
  position: fixed;
  top: 0;
  right: 0;
  width: 4.5rem;
  z-index: 10;
  transition: 1s all linear;
}

.mobile-click.close {
  right: 30vw;
  top: 0;
}

.hidden {
  transform: translateX(100%);
}
.mobile-list-wrapper {
  position: fixed;
  width: 30%;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.801);
  z-index: 5;
  transition: 1s all linear;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}

.mobile-list {
  color: #e2e4f6;
  list-style: none;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
