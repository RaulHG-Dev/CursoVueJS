<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <RouterView /> -->
    <v-card
      elevation="3"
      max-width="1200"
      class="mx-auto"
    >
      <v-layout>
        <v-app-bar
          color="blue-darken-1"
        >
          <template v-slot:append>
            
          </template>
          <template v-slot:prepend>
            
          </template>
        </v-app-bar>
        <v-main>
          <RouterView/>
        </v-main>
      </v-layout>
    </v-card>
</template>
