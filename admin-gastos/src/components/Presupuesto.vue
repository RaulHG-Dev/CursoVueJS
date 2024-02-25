<script setup>

</script>

<template>
    <form
     class="presupuesto"
    >
        <div class="campo">
            <label for="nuevo-presupuesto">Definir Presupuesto</label>
            <input 
                id="nuevo-presupuesto"
                class="nuevo-presupuesto"
                placeholder="Añade tu presupuesto"
                type="number"
            />
        </div>
        <input type="submit" value="Definir Presupuesto"/>
    </form>
</template>

<style scoped>
    .presupuesto {
        width: 100%;
    }
    .campo {
        display: grid;
    }
    .presupuesto label {
        font-size: 2.2rem;
        text-align: center;
        color: var(--azul);
    }
    .presupuesto input[type="number"] {
        background-color: var(--gris-claro);
        border-radius: 1rem;
        padding: 1rem;
        border: none;
        font-size: 2rem;
        text-align: center;
        margin-top: 1rem;
    }
    .presupuesto input[type="submit"] {
        background-color: var(--azul);
        border: none;
        padding: 1rem;
        text-align: center;
        font-size: 2rem;
        margin-top: 2rem;
        color: var(--blanco);
        font-weight: 900;
        width: 100%;
        transition: background-color 300ms ease;
    }
    .presupuesto input[type="submit"]:hover {
        background-color: #1048a4;
        cursor: pointer;
    }
</style>