<template>
  <footer class="site-footer">
    <div class="footer-container">
      <SocialIcons />
      <p class="contact-message">Mass Immersion Approach &copy; 2020</p>
    </div>
  </footer>
</template>

<script>
import SocialIcons from '~/components/SocialIcons.vue'

export default {
  components: {
    SocialIcons,
  },
}
</script>

<style>
.site-footer {
  background-color: #26272b;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  padding: 10px;
}
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.social-media {
  width: 400px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.social-media i {
  font-size: 1.5rem;
  transition: color 0.5s;
}

.fa-facebook-square {
  color: #3b5999;
}

.fa-twitter-square {
  color: #55acee;
}

.fa-instagram {
  color: #e6683c;
}

.fa-linkedin {
  color: #0e76a8;
}

.fa-facebook-square:hover,
.fa-twitter-square:hover,
.fa-instagram:hover,
.fa-linkedin:hover {
  color: #45e19f;
}
.contact-message {
  font-size: 1.1rem;
}
</style>
