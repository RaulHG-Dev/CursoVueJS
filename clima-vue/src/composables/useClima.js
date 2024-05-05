export default function useClima() { 
    const obtenerClima = ({ciudad, pais}) => {
        console.log(ciudad, pais)
    }
    return {
        obtenerClima
    }
}