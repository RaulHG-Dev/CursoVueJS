<script setup>
    import { ref } from 'vue';

    const nombre = ref('')

    const leerNombre = (e) => nombre.value = e.target.value
</script>

<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p class="text-lg mt-5 text-center mb-10">
            Añade Pacientes y
            <span class="text-indigo-600 font-bold">Adminístralos</span>
        </p>

        <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div class="mb-5">
                <label for="mascota" class="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input 
                    type="text" 
                    id="mascota" 
                    placeholder="Nombre de la mascota" 
                    class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    :value="nombre"
                    @input="leerNombre"
                />
            </div>
            <div class="mb-5">
                <label for="propietario" class="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input type="text" id="propietario" placeholder="Nombre de propietario" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>
            <div class="mb-5">
                <label for="email" class="block text-gray-700 uppercase font-bold">Email</label>
                <input type="email" id="email" placeholder="Email del propietario" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>
            <div class="mb-5">
                <label for="alta" class="block text-gray-700 uppercase font-bold">Alta</label>
                <input type="date" id="alta" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>
            <div class="mb-5">
                <label for="sintomas" class="block text-gray-700 uppercase font-bold">Síntomas</label>
                <textarea placeholder="Describe los síntomas" id="sintomas" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-40"></textarea>
            </div>
            <input type="submit" class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value="Registrar Paciente">
        </form>
    </div>
</template>

<style>

</style>