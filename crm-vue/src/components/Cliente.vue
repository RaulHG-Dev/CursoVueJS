<script setup>
    defineProps({
        cliente: {
            type: Object
        }
    })
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ cliente.nombre }} {{ cliente.apellido }}</p>
            <p class="text-gray-500"></p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold"></p>
            <p class="text-gray-600"></p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         
        </td>
    </tr>
</template>