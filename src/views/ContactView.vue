<template>
  <div class="about">
    <h1>Contact</h1>
    <p>You can reach us via email and telephone.</p>
    <div class="wrapper">
      <div class="label">
        <strong>email: </strong><br />
        <strong>tel: </strong>
      </div>
      <div>
        <a class="content" href="mailto:example@example.com"
          >example@example.com</a
        ><br />
        <a class="content" href="tel:+1234567890">+1234567890</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  line-height: 1.6;
}

.label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.content {
  text-decoration: none;
}
</style>
