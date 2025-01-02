<template>
  <div class="d-flex justify-content-around mb-3">
    <div
      v-for="(day, index) in days"
      :key="index"
      class="day-circle"
      :class="{ active: selectedDayIndex === index }"
      @click="$emit('daySelected', index)"
    >
      {{ day.initial }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    days: Array,
    selectedDayIndex: Number // Recibimos el índice del día seleccionado
  }
};
</script>

<style>
.day-circle {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}
.day-circle.active {
  background-color: #007bff;
  color: white;
}
</style>
