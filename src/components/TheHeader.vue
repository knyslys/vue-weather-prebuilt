<template>
  <header><img :src="image" />"</header>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
    },
  },
};
</script>

<style>
header {
  width: clamp(10rem, 20%, 20rem);
  margin: 0 auto;
}

img {
  max-width: 100%;
}
</style>
