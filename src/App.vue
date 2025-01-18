<template>
  <div :class="appTheme" class="min-vh-100">
    <header class="p-3 d-flex justify-content-between align-items-center">
      <h1>Gimnasio</h1>
      <button
        @click="toggleTheme"
        class="btn"
        :class="isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'"
      >
        {{ isDarkMode ? '🌞 Modo Claro' : '🌙 Modo Oscuro' }}
      </button>
    </header>

    <main class="container mt-4">
      <WeekDays
        :days="daysOfWeek"
        @daySelected="updateSelectedDay"
        :selected-day-index="selectedDayIndex"
      />
      <DayWorkouts :workouts="selectedDayWorkouts" />
    </main>
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
      ],
      schedule: scheduleData.schedule,
      selectedDayIndex: 0,
      isDarkMode: true, // Predeterminado en modo oscuro
    };
  },
  computed: {
    selectedDayWorkouts() {
      return this.schedule[this.selectedDayIndex];
    },
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.updateAppClass(); // Actualiza las clases del contenedor raíz
    },
    updateSelectedDay(index) {
      this.selectedDayIndex = index;
    },
    setInitialDay() {
      const today = new Date().getDay();
      this.selectedDayIndex = today === 0 ? 0 : today - 1; // Si es domingo, selecciona lunes
    },
    loadThemeFromStorage() {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme ? savedTheme === 'dark' : true;
      this.updateAppClass(); // Actualiza las clases al cargar el tema
    },
    updateAppClass() {
      const appElement = document.getElementById('app');
      if (appElement) {
        appElement.className = this.isDarkMode
          ? 'bg-dark text-white'
          : 'bg-light text-dark';
      }
    },
  },
  created() {
    this.setInitialDay();
    this.loadThemeFromStorage();
  },
};
</script>

<style>
body {
  transition: background-color 0.3s, color 0.3s;
} 
</style>
