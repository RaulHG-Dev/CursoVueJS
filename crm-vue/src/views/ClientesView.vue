<script setup>
    import {onMounted} from 'vue';
    import axios from 'axios';
    import RouterLink from '@/components/UI/RouterLink.vue';
    import Heading from '@/components/UI/Heading.vue';

    onMounted(() => {
        axios.get('http://localhost:4000/clientes')
            .then(({data}) => {
                console.log(data);
            })
            .catch(error => console.log('Hubo un error'));
    });

    defineProps({
        titulo: {
            type: String
        }
    });
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
    </div>
</template>