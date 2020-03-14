<template>
  <ComingSoon />
</template>

<script>
import ComingSoon from '~/components/ComingSoon'

export default { transition: 'page', components: { ComingSoon } }
</script>

<style lang="scss" scoped>
.article-container {
  margin: 25px auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
