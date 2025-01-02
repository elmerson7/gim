<template>
  <div class="container mt-4">
    <WeekDays :days="daysOfWeek" @daySelected="updateSelectedDay" :selected-day-index="selectedDayIndex" />
    <DayWorkouts :workouts="selectedDayWorkouts" />
  </div>
</template>

<script>
import WeekDays from './components/WeekDays.vue';
import DayWorkouts from './components/DayWorkouts.vue';
import scheduleData from './data/schedule.json';

export default {
  components: {
    WeekDays,
    DayWorkouts,
  },
  data() {
    return {
      daysOfWeek: [
        { name: 'Lunes', initial: 'L' },
        { name: 'Martes', initial: 'M' },
        { name: 'Miércoles', initial: 'X' },
        { name: 'Jueves', initial: 'J' },
        { name: 'Viernes', initial: 'V' },
        { name: 'Sábado', initial: 'S' }
        // Quitamos Domingo (D)
      ],
      schedule: scheduleData.schedule,
      selectedDayIndex: 0
    };
  },
  computed: {
    selectedDayWorkouts() {
      return this.schedule[this.selectedDayIndex];
    },
  },
  created() {
    this.setInitialDay();
  },
  methods: {
    setInitialDay() {
      const today = new Date().getDay();
      // Si es domingo (0), selecciona lunes (índice 0); de lo contrario, ajusta al índice correspondiente
      this.selectedDayIndex = today === 0 ? 0 : today - 1;
    },
    updateSelectedDay(index) {
      this.selectedDayIndex = index;
    },
  },
};
</script>

<style>
/* Estilo global opcional */
</style>
