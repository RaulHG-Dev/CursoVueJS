<script setup>
    import { reactive } from 'vue';
    import { FormKit } from '@formkit/vue'
    import RouterLink from '@/components/UI/RouterLink.vue';
    import Heading from '@/components/UI/Heading.vue';

    defineProps({
        titulo: {
            type: String
        }
    });

    // const formData = reactive({
    //     nombre: 'Raul'
    // })

    const handleSubmit = (data) => {
        console.log(data);
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <!-- :value="formData" -->
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre de Cliente"
                        validation="required"
                        :validation-messages="{required: 'El Nombre del Cliente es Obligatorio'}"
                    />

                    <FormKit
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido de Cliente"
                        validation="required"
                        :validation-messages="{required: 'El Apellido del Cliente es Obligatorio'}"
                    />

                    <FormKit
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email de Cliente"
                        validation="required|email"
                        :validation-messages="{required: 'El Email del Cliente es Obligatorio', email: 'Coloca un email válido'}"
                    />

                    <FormKit
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Teléfono: XXX-XXX-XXXX"
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/"
                        :validation-messages="{matches: 'El Formato no es válido'}"
                    />

                    <FormKit
                        type="text"
                        label="Empresa de Cliente"
                        name="empresa"
                        placeholder="Empresa de Cliente"
                    />

                    <FormKit
                        type="text"
                        label="Puesto de Cliente"
                        name="puesto"
                        placeholder="Puesto de Cliente"
                    />

                    <!-- <FormKit
                        type="submit"
                        label="Agregar Cliente"
                    /> -->
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>