<template>
  <div class="container mt-3">
    <WeekDays @daySelected="handleDaySelected"/>
    <hr>
    <DayWorkouts :day="selectedDay" @workoutSelected="handleWorkoutSelected"/>
    <hr>
    <WorkoutImage :workout="selectedWorkout"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import WeekDays from './components/WeekDays.vue';
import DayWorkouts from './components/DayWorkouts.vue';
import WorkoutImage from './components/WorkoutImage.vue';

const selectedDay = ref(null);
const selectedWorkout = ref(null);

const handleDaySelected = (day) => {
  selectedDay.value = day;
  selectedWorkout.value = null;
};

const handleWorkoutSelected = (workout) => {
  selectedWorkout.value = workout;
};
</script>