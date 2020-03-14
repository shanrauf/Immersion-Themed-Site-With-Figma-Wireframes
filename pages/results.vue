<template>
  <div class="content clearfix">
    <div class="main-content">
      <h1 class="recent-post-title">Results:</h1>
      <div class="post">
        <!-- <img src="~/assets/mia.png" alt="MIA Logo" class="post-image" /> -->
        <div class="post-preview">
          <h2>
            <nuxt-link to="/">The title of the article</nuxt-link>
          </h2>
          <i class="far calendar"> Mar 11, 2019</i>
          <!-- <font-awesome-icon :icon="['far', 'calendar']" /> -->
          <p class="preview-text">
            Lorem ipmfouasheofa sjhfoeuijhas ouikffjesoaiufj oisajef poasjefoj
            asoepf
          </p>
          <nuxt-link to="/" class="read-more">Read More</nuxt-link>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="section topics">
        <h2 class="section-title">Popular Posts</h2>
        <ul>
          <li><nuxt-link to="/">Asdf</nuxt-link></li>
          <li><nuxt-link to="/">Asdf</nuxt-link></li>
          <li><nuxt-link to="/">Asdf</nuxt-link></li>
          <li><nuxt-link to="/">Asdf</nuxt-link></li>
          <li><nuxt-link to="/">Asdf</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default { transition: 'page' }
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  margin: 30px auto 30px;
}

.content .main-content {
  width: 70%;
  float: left;
}

.content .main-content .recent-post-title {
  margin: 20px;
}

.content .main-content .post {
  width: 95%;
  height: 270px;
  margin: 20px auto;
  border-radius: 5px;
  background: white;
  position: relative;
}

.content .main-content .post .post-image {
  width: 40%;
  height: 100%;
  float: left;
}
.content .main-content .post .post-preview {
  padding: 10px;
  width: 60%;
  /* float: right; */
  float: left;
}
.content .sidebar {
  width: 30%;
  float: left;
  height: 300px;
}
.content .sidebar .section {
  background: white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
</style>
