<script setup>
    const props = defineProps({
        alerta: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div
        class="text-white text-center p-3 uppercase font-bold mb-3 rounded-md bg-red-500"
    >
        {{ alerta.mensaje }}
    </div>
</template>