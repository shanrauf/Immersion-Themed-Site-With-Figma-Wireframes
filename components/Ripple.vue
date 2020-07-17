<template>
  <div class="ripple-container">
    <span class="ripple r1"></span>
    <span class="ripple r2"></span>
    <span class="ripple r3"></span>
    <span class="ripple r4"></span>
    <span class="ripple r5"></span>
    <span class="ripple r6"></span>
  </div>
</template>

<script>
export default {}
</script>

<style>
.ripple-container {
  /* position: absolute;
  top: 50%;
  left: 50%; */
  transform: translate(-50%, -50%) rotateX(70deg);
}
.ripple {
  position: absolute;
  top: -50px;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ripple 4s linear infinite;
}
.r2 {
  animation-delay: 0.8s;
}
.r3 {
  animation-delay: 1.6s;
}
.r4 {
  animation-delay: 2.4s;
}
.r5 {
  animation-delay: 3.2s;
}
.r6 {
  animation-delay: 4s;
}
/* @keyframes ripple {
  from {
    border: 4px solid #8e44ad;
    background: #9b59b670;
  }
  to {
    border: 0px solid #8e44ad;
    background: #9b59b670;
    width: 400px;
    height: 400px;
    top: 20px;
    opacity: 0;
  }
} */
@keyframes ripple {
  from {
    border: 4px solid rgb(175, 175, 175);
    background: lightgray;
  }
  to {
    border: 0px solid rgb(175, 175, 175);
    background: lightgray;
    width: 400px;
    height: 400px;
    top: 20px;
    opacity: 0;
  }
}
</style>
