<template>
  <div class="col-md-4 mb-3">
    <div class="card">
      <img
        :src="getImagePath"
        class="card-img-top"
        :alt="exercise.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ exercise.name }}</h5>
        <p class="card-text">
          Series: {{ exercise.sets }} | Repeticiones: {{ exercise.reps }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
    type: String
  },
  data() {
    return {
      defaultImage: "./images/default.webp"
    };
  },
  computed: {
    getImagePath() {
      // Generar ruta dinámica
      const imagePath = `./images/${this.type}/${this.exercise.image || "default"}.webp`;
      return imagePath;
    }
  }
};
</script>
