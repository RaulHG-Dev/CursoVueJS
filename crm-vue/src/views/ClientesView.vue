<script setup>
    import RouterLink from '@/components/UI/RouterLink.vue';
    import Heading from '@/components/UI/Heading.vue';
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        <Heading>Listado de Clientes</Heading>
    </div>
</template>