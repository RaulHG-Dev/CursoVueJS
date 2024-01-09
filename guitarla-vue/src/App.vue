<script setup>
    import {ref, reactive, onMounted} from 'vue'
    import {db} from './data/guitarras'
    import Guitarra from './components/Guitarra.vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    // VALORES CON REACTIVE
    // const state = reactive({
    //     guitarras: db
    // })
    // console.log(state.guitarras)

    const guitarras = ref([])
    const carrito = ref([])
    // console.log(guitarras.value)
    onMounted(() => {
        guitarras.value = db;
    })

    const agregarCarrito = (guitarra) => {
        guitarra.cantidad = 1;
        carrito.value.push(guitarra)
    }
</script>

<template>
    <Header/>
    <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">
            <Guitarra 
                v-for="guitarra in guitarras"
                :guitarra="guitarra"
                @agregar-carrito="agregarCarrito"
            />
        </div>
    </main>
    <Footer/>
</template>

<style scoped>

</style>
