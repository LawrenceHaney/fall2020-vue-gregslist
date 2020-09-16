<template>
  <div class="col-4 p-2">
    <div class="card p-2 bg-seconday home">
      <h1 class="card-title">
        {{homeData.address}}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
name: "Home",
props:{
  homeData:{
    type: Object, required: true}
  }
}

</script>

<style scoped>
.home {
  transition: 0.5s ease;
  cursor: pointer;
}
.home:hover {
  transform: scale(1.05);
}
</style>