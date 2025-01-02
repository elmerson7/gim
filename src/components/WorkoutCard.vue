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
      defaultImage: "/images/default.webp"
    };
  },
  computed: {
    getImagePath() {
      // Verificar si existe la llave `image`
      if (!this.exercise.image) return this.defaultImage;

      // Ruta completa basada en el tipo de ejercicio y el nombre de la imagen
      const imagePath = `/images/${this.type}/${this.exercise.image}.jpg`;

      // Validar si la imagen existe
      const img = new Image();
      img.src = imagePath;

      // Retornar la ruta o la imagen por defecto
      return img.complete && img.naturalWidth !== 0 ? imagePath : this.defaultImage;
    }
  }
};
</script>
