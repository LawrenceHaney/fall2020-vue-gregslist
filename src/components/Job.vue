<template>
  <div class="col-4 p-2">
  <div class="card p-2 bg-seconday text-center job">
  <h3 class="card-title">{{jobData.jobTitle}}</h3>
  <div class="h6">{{jobData.company}}</div>
  <p class="text-muted">{{jobData.description}}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props:{
    jobData:{
        type: Object, required: true}
    }
  }

</script>

<style scoped>
.job {
  transition: 0.5s ease;
  cursor: pointer;
}
.job:hover {
  transform: scale(1.05);
}
</style>