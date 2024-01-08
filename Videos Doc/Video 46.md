## State Vue.js
---
- ### State con Reactive
Reactive siempre es un objeto.

*Para declarar un reactive:*
```js
import { reactive } from 'vue'

const libro = reactive({
    disponible: true,
    nombre: 'Algoritmos',
    precio: 349,
    ISBN: '0-7645-26'
})
```
*Para acceder a la propiedades de reactive:*
```js
console.log(libro.disponible);
console.log(libro.nombre);
console.log(libro.precio);
```
*Para modificar reactive:*
```js
libro.disponible = false;
```

- ### State con Ref
Ref permite trabajar con los tipos de datos arrays, booleans y strings.

*Para declarar un Ref, se deberá colocar un valor inicial:*
```js
import { ref } from 'vue'

const clientes = ref([]);
const libro = ref({});
const auth = ref(false);
const mensaje = ref('Hola');
```
*Para acceder a la propiedades de Ref:*
```js
console.log(cliente.value); // En arreglos u objetos se retorna el objeto: Proxy
console.log(auth.value);
console.log(mensaje.value);
```
*Para modificar Ref:*
```js
cliente.value.push(nuevloCliente)
auth.value = true;
mensaje.value = 'Nuevo Texto';
```