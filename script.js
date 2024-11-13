const rutinaPorDia = {
    Lunes: {
        ejercicios: [
            { nombre: 'Press de pecho con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Fondos entre sillas', repeticiones: '3 series de 10-12 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Aperturas con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Extensiones de tríceps sobre la cabeza', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
        ]
    },
    Martes: {
        ejercicios: [
            { nombre: 'Sentadillas con mancuernas', repeticiones: '4 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Zancadas con mancuernas', repeticiones: '3 series de 10-12 repeticiones por pierna', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Peso muerto con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Elevación de talones', repeticiones: '3 series de 20 repeticiones', imagen: 'https://via.placeholder.com/150' },
        ]
    },
    Miércoles: {
        ejercicios: [
            { nombre: 'Remo con mancuernas', repeticiones: '4 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Curl de bíceps con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Pullover con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Curl martillo', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
        ]
    },
    Jueves: {
        ejercicios: [
            { nombre: 'Elevación de piernas', repeticiones: '3 series de 15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Plancha', repeticiones: '3 series de 30-45 segundos', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Russian twists', repeticiones: '3 series de 20 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Crunch con mancuernas', repeticiones: '3 series de 15 repeticiones', imagen: 'https://via.placeholder.com/150' },
        ]
    },
    Viernes: {
        ejercicios: [
            { nombre: 'Press de hombros con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Elevaciones laterales con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Elevación frontal con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Encogimiento de hombros con mancuernas', repeticiones: '3 series de 15-20 repeticiones', imagen: 'https://via.placeholder.com/150' },
        ]
    },
    Sábado: {
        ejercicios: [
            { nombre: 'Burpees modificados con mancuernas', repeticiones: '3 series de 10-12 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Thrusters con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Escaladores (mountain climbers)', repeticiones: '3 series de 30 segundos', imagen: 'https://via.placeholder.com/150' },
            { nombre: 'Saltos con mancuernas', repeticiones: '3 series de 10-15 repeticiones', imagen: 'https://via.placeholder.com/150' },
        ]
    },
    Domingo: {
        ejercicios: [
            { nombre: 'Descanso activo', repeticiones: 'Caminar, nadar o estiramientos suaves por 30 minutos', imagen: 'https://via.placeholder.com/150' },
        ]
    }
};

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function mostrarRutina() {
    const hoy = new Date().getDay(); // 0 es Domingo, 6 es Sábado
    const nombreDia = diasSemana[hoy];
    const diaElemento = document.getElementById('dia-semana');
    diaElemento.textContent = nombreDia;

    const rutinaElemento = document.getElementById('rutina');
    rutinaElemento.innerHTML = '';

    const rutinaDia = rutinaPorDia[nombreDia];
    if (rutinaDia) {
        rutinaDia.ejercicios.forEach(ejercicio => {
            rutinaElemento.innerHTML += `
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold mb-2">${ejercicio.nombre}</h2>
                    <p class="text-gray-700 mb-2">${ejercicio.repeticiones}</p>
                    <img src="${ejercicio.imagen}" alt="${ejercicio.nombre}" class="w-full h-48 object-cover rounded-lg">
                </div>
            `;
        });
    } else {
        rutinaElemento.innerHTML = '<p>No hay rutina asignada para hoy.</p>';
    }
}

document.addEventListener('DOMContentLoaded', mostrarRutina);

