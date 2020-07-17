<template>
  <div class="newsletter-signup">
    <p class="newsletter-text">
      Join <strong>{{ newsletterSubscriberCount }}</strong> language learners on
      our mailing list.
    </p>
    <div class="newsletter-form">
      <label for="email">Email Address</label>
      <input type="email" />
      <button class="subscribe-button">Subscribe</button>
    </div>
    <button class="newsletter-close-button"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsletterSubscriberCount: 136301,
    }
  },
}
</script>

<style>
/* Mobile-first CSS */
.newsletter-signup {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: rgba(7, 30, 87, 0.15) 0px 10px 15px;
  text-align: left;
  width: 100%;
  z-index: 1000;
  opacity: 1;
  background: rgb(243, 251, 255);
  padding: 25px;
  transition: opacity 0.6s ease 0s;
}
.newsletter-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.35px;
  padding-right: 20px;
  color: rgb(29, 43, 54);
}
</style>
