export default function useClima() { 
    const obtenerClima = ({ciudad, pais}) => {
        const key = import.meta.env.VITE_API_KEY

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
    }
    return {
        obtenerClima
    }
}