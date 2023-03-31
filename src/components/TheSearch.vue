<template>
  <div>
    <form @submit.prevent="searchForCity">
      <input
        type="text"
        class="cityinput"
        :placeholder="placeHolder"
        @click="(placeHolder = 'Search for city'), (this.errorClass = false)"
        v-model="city"
        :class="{ errorClass: errorClass }"
      />
      <button type="submit">Search</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["is-error", "error-message"],
  emits: ["look-for-city"],
  data() {
    return {
      errorMsg: this.errorMessage,
      errorClass: false,
      placeHolder: "Search for city",
      city: "",
    };
  },

  watch: {
    isError() {
      if (this.isError) {
        this.city = "";
        this.errorClass = true;
        this.placeHolder = this.errorMessage;
        const that = this;
        setTimeout(() => {
          that.errorClass = false;
        }, 3000);
      } else {
        this.errorClass = false;
      }
    },
  },

  methods: {
    searchForCity() {
      this.$emit("look-for-city", this.city.trim());
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
input {
  border-radius: 20px;
  font-size: 1.6rem;
  border: none;
  font-family: inherit;
  padding: 1rem 1.5rem;
  transition: 0.5s all linear;
}
.errorClass {
  box-shadow: inset 0 0 2px red;
  animation: shake 0.5s linear;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

input:focus {
  outline: none;
}
button {
  font-size: 1.6rem;
  border-radius: 10px;
  border: none;
  padding: 1rem 2.5rem;
  background-color: #e7c8dd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.25s linear all;
  font-family: inherit;
  cursor: pointer;
}

button:hover {
  transform: translateY(-5%);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

button:active {
  transform: translateY(5%);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
</style>
