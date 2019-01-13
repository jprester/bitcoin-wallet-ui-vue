<template>
  <div class="app-footer">
    <footer class="footer-content">
      <p class="footer-text">
        Made by Janko Prester: janko.prester@gmail.com. Github:
        <a
          href="https://github.com/jprester"
        >Jprester</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer-content {
  border-top: 1px solid #cccccc;
  margin-top: 40px;
  padding-top: 10px;
  padding-right: 20px;
}

.footer-text {
  font-size: 10px;
  text-align: right;
}
</style>

