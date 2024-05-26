<template>
    <div v-if="workout">
        <h3>{{ workout.name }}</h3>
        <img :src="workout.image" alt="Imagen de ejercicio">
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        workout: Object
    });
</script>