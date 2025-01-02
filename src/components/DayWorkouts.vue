<template>
  <div>
    <h4>Gimnasio: {{ workouts.gym.group }}</h4>
    <div class="row">
      <WorkoutCard
        v-for="(exercise, index) in workouts.gym.exercises"
        :key="index"
        :exercise="exercise"
        type="gym"
      />
    </div>
    <h4 class="mt-4">Calistenia: {{ workouts.calisthenics.group }}</h4>
    <div class="row">
      <WorkoutCard
        v-for="(exercise, index) in workouts.calisthenics.exercises"
        :key="index"
        :exercise="exercise"
        type="calisthenics"
      />
    </div>
  </div>
</template>

<script>
import WorkoutCard from "./WorkoutCard.vue";

export default {
  components: {
    WorkoutCard
  },
  props: {
    workouts: Object
  }
};
</script>
