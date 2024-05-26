<template>
    <ul class="nav nav-pills justify-content-center">
        <li class="nav-item" v-for="day in days" :key="day">
            <a class="nav-link" href="#" @click="selectDay(day)">
            {{ day }}
            </a>
        </li>
    </ul>
</template>

<script setup>
    import { ref, defineEmits } from 'vue';

    const days = ref(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']);
    const emit = defineEmits(['daySelected']);

    const selectDay = (day) => {
        emit('daySelected', day);
    }
</script>
<style>
.nav-pills {
  background-color: #f8f9fa; /* Fondo ligero para la barra de navegación */
  border-radius: 5px; /* Bordes redondeados */
  margin-bottom: 20px; /* Espacio debajo de la barra para separar del contenido siguiente */
}

.nav-link {
  color: #007bff; /* Color de los enlaces */
  margin: 5px; /* Espaciado entre enlaces */
}

.nav-link:hover {
  background-color: #0056b3; /* Color al pasar el ratón */
  color: white; /* Color de texto al pasar el ratón */
}
</style>
