<template>
    <div>
        <h2>Ejercicios para {{ dayMap[day] }}</h2>
        <table class="table">
            <thead>
            <tr>
                <th>Ejercicio</th>
                <th>Series</th>
                <th>Repeticiones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="workout in workouts[dayMap[day]]" :key="workout.name" @click="selectWorkout(workout)">
                <td>{{ workout.name }}</td>
                <td>{{ workout.series }}</td>
                <td>{{ workout.reps }}</td>
            </tr>
            </tbody>
        </table>
        <div v-if="selectedWorkout">
            <h3>Detalles del Ejercicio: {{ selectedWorkout.name }}</h3>
            <img :src="selectedWorkout.image" :alt="selectedWorkout.name + ' imagen'" class="img-fluid">
            <p>Series: {{ selectedWorkout.series }}</p>
            <p>Repeticiones: {{ selectedWorkout.reps }}</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, defineProps } from 'vue';

    const props = defineProps({
        day: String
    });
    const dayMap = reactive({
        'Lunes': 'Lunes - Pecho',
        'Martes': 'Martes - Espalda',
        'Miércoles': 'Miércoles - Hombros',
        'Jueves': 'Jueves - Piernas',
        'Viernes': 'Viernes - Brazos',
        'Sábado': 'Sábado'
    });

    const workouts = reactive({
        'Lunes - Pecho': [
            { name: 'Press Banca', series: '3 o 4', reps: '8 - 12', image: '/images/press-banca.webp' },
            { name: 'Press Banca con Mancuernas', series: '3 o 4', reps: '8 -12', image: '/images/press-banca-mancuernas.webp' },
            { name: 'Press Banca Inclinado con Barra', series: '3 o 4', reps: '8 - 12', image: '/images/press-banca-inclinado-barra.webp' },
            { name: 'Press Banca Inclinado con Mancuernas', series: '3 o 4', reps: '8 - 12', image: '/images/press-banca-inclinado-mancuernas.webp' },
            { name: 'Peck Deck', series: '3 o 4', reps: '8 - 12', image: '/images/peck-deck.webp' },
            { name: 'Apertura de Pecho en Polea', series: '3 o 4', reps: '8 - 12', image: '/images/apertura-pecho-polea.webp' }
        ],
        'Martes - Espalda': [
            { name: 'Peso Muerto', series: '3 o 4', reps: '8 a 12', image: '/images/peso-muerto.jpg' },
            { name: 'Jalones con Polea Alta - Abierto', series: '3 o 4', reps: '8 a 12', image: '/images/jalones-polea-alta-abierto.jpg' },
            { name: 'Jalones con Polea Alta - Cerrado', series: '3 o 4', reps: '8 a 12', image: '/images/jalones-polea-alta-cerrado.jpg' },
            { name: 'Remo en Polea Baja - Cerrado', series: '3 o 4', reps: '8 a 12', image: '/images/remo-polea-baja-cerrado.jpg' },
            { name: 'Remo en Polea Baja - Abierto', series: '3 o 4', reps: '8 a 12', image: '/images/remo-polea-baja-abierto.jpg' },
            { name: 'Remo a Una Mano con Mancuerna', series: '3 o 4', reps: '8 a 12', image: '/images/remo-mancuerna.jpg' },
            { name: 'Pull Over', series: '3 o 4', reps: '8 a 12', image: '/images/pull-over.jpg' }
        ],
        'Miércoles - Hombros': [
            { name: 'Elevaciones Laterales', series: '3 o 4', reps: '12 a 15', image: '/images/elevaciones-laterales.jpg' },
            { name: 'Elevaciones Frontales', series: '3 o 4', reps: '12 a 15', image: '/images/elevaciones-frontales.jpg' },
            { name: 'Remo al Mentón', series: '3 o 4', reps: '8 a 12', image: '/images/remo-al-menton.jpg' },
            { name: 'Encogimientos', series: '3 o 4', reps: '8 a 12', image: '/images/encogimientos.jpg' }
        ],
        'Jueves - Piernas': [
            { name: 'Extensiones de Piernas', series: '4', reps: '12 a 15', image: '/images/extensiones-piernas.jpg' },
            { name: 'Sentadillas Libres', series: '4', reps: '8 a 12', image: '/images/sentadillas-libres.jpg' },
            { name: 'Sentadilla en Hack', series: '4', reps: '8 a 12', image: '/images/sentadilla-hack.jpg' },
            { name: 'Press de Piernas: Prensa', series: '4', reps: '8 a 12', image: '/images/press-piernas.jpg' },
            { name: 'Curl Femoral', series: '4', reps: '8 a 12', image: '/images/curl-femoral.jpg' },
            { name: 'Abductores', series: '4', reps: '8 a 12', image: '/images/abductores.jpg' }
        ],
        'Viernes - Brazos': [
            { name: 'Curl con Barra', series: '3', reps: '8 a 12', image: '/images/curl-barra.jpg' },
            { name: 'Curl Alternado', series: '3', reps: '8 a 12', image: '/images/curl-alternado.jpg' },
            { name: 'Curl Martillo', series: '3', reps: '8 a 12', image: '/images/curl-martillo.jpg' },
            { name: 'Curl Predicador', series: '3', reps: '8 a 12', image: '/images/curl-predicador.jpg' },
            { name: 'Tirón con Polea Alta', series: '4', reps: '8 a 12', image: '/images/tiron-polea-alta.jpg' },
            { name: 'Press Francés', series: '4', reps: '8 a 12', image: '/images/press-frances.jpg' },
            { name: 'Press Copa', series: '4', reps: '8 a 12', image: '/images/press-copa.jpg' },
            { name: 'Fondos', series: '4', reps: 'Al fallo', image: '/images/fondos.jpg' }
        ],
        'Sábado': [
            { name: 'Press Banca con Mancuernas', series: '4', reps: '8 a 12', image: '/images/press-banca-mancuernas.jpg' },
            { name: 'Peck Deck', series: '4', reps: '8 a 12', image: '/images/peck-deck.jpg' },
            { name: 'Jalones con Polea Alta - Abierto', series: '4', reps: '8 a 12', image: '/images/jalones-polea-alta-abierto.jpg' },
            { name: 'Remo en Polea Baja - Cerrado', series: '4', reps: '8 a 12', image: '/images/remo-polea-baja-cerrado.jpg' },
            { name: 'Extensiones de Piernas', series: '4', reps: '8 a 12', image: '/images/extensiones-piernas.jpg' },
            { name: 'Curl Femoral', series: '4', reps: '8 a 12', image: '/images/curl-femoral.jpg' }
        ]
    });

    const selectedWorkout = ref(null);

    const selectWorkout = (workout) => {
        selectedWorkout.value = workout;
    }
</script>

<style>
.workout-item {
    cursor: pointer;
    margin-bottom: 20px;
}

.workout-image {
    width: 100%; /* Ajusta esto según el diseño de tu app */
    height: auto;
}
</style>