<template>
  <Teleport to="body">
    <footer>
      <div class="footer-container">
        <div class="author">
          <span
            >Made with Vue.js and ❤️ by
            <a href="https://github.com/knyslys">Vakaris</a></span
          >
        </div>
        <div class="contribute">
          <span class="contribute-title">Special thanks to:</span>
          <ul>
            <li>
              <a
                href="https://www.flaticon.com/free-stickers/rain"
                title="rain stickers"
                >Rain stickers created by Stickers - Flaticon</a
              >
            </li>
            <li>
              <a
                href="https://www.flaticon.com/free-stickers/emoji"
                title="emoji stickers"
                >Emoji stickers created by Rohim - Flaticon</a
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </Teleport>
</template>

<style scoped>
footer {
  color: black;

  margin-top: auto;
  font-size: 1.3rem;
}

a {
  color: black;
}
.author {
  text-align: center;
}

.footer-container {
  min-width: 30%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

/* .contribute {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
} */

.contribute-title {
}
li {
  list-style: none;
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
@media (max-width: 50.75em) {
  html {
    font-size: 56.25%;
  }
}
</style>
