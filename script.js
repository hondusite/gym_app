if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registrado', reg))
        .catch(err => console.log('Error al registrar el Service Worker', err));
}
const rutinaPorDia = {
    Lunes: {
        ejercicios: [
            { nombre: 'Press de pecho con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.entrenador.fit/wp-content/uploads/Press-plano-con-mancuernas.gif' },
            { nombre: 'Fondos entre sillas', repeticiones: '3 series de 10-12 repeticiones', imagen: 'https://adictosalgym.com/wp-content/uploads/2022/04/13991301-Bench-dip-on-floor_Upper-Arms_720.gif' },
            { nombre: 'Aperturas con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/b0/33/9c/b0339c195ca6efd904c9a91fbf213cdd.gif' },
            { nombre: 'Extensiones de tríceps sobre la cabeza', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/2c/62/ba/2c62ba80d37c94d06ad6d60f1e5445df.gif' },
        ]
    },
    Martes: {
        ejercicios: [
            { nombre: 'Sentadillas con mancuernas', repeticiones: '4 series de 12-15 repeticiones', imagen: 'https://fitcron.com/wp-content/uploads/2021/04/02911301-Dumbbell-Bench-Squat_thighs_720.gif' },
            { nombre: 'Zancadas con mancuernas', repeticiones: '3 series de 10-12 repeticiones por pierna', imagen: 'https://gymvisual.com/img/p/2/3/7/4/0/23740.gif' },
            { nombre: 'Peso muerto con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/c7/96/aa/c796aafc735c14237d2172beece29e24.gif' },
            { nombre: 'Elevación de talones', repeticiones: '3 series de 20 repeticiones', imagen: 'https://i.pinimg.com/736x/0d/82/03/0d820388a2f8502bc9722cd78a11eddc.jpg' },
        ]
    },
    Miércoles: {
        ejercicios: [
            { nombre: 'Remo con mancuernas', repeticiones: '4 series de 12-15 repeticiones', imagen: 'https://jumpseller.s3.eu-west-1.amazonaws.com/store/grecoromana-co/assets/Remos%20con%20mancuerna%20a%20un%20brazo.gif' },
            { nombre: 'Curl de bíceps con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/5d/08/f7/5d08f7c3fb0350f7eef570430d69e66e.gif' },
            { nombre: 'Pullover con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/d2/43/1a/d2431a33e8619902629d58ecee73c454.gif' },
            { nombre: 'Curl martillo', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://boxlifemagazine.com/wp-content/uploads//2023/08/curl-haltere-prise-neutre-min-1.gif' },
        ]
    },
    Jueves: {
        ejercicios: [
            { nombre: 'Elevación de piernas', repeticiones: '3 series de 15 repeticiones', imagen: 'https://i.gifer.com/V1J4.gif' },
            { nombre: 'Plancha', repeticiones: '3 series de 30-45 segundos', imagen: 'https://i.pinimg.com/originals/bb/e7/86/bbe78693697daed4037ea5439025f68f.gif' },
            { nombre: 'Russian twists', repeticiones: '3 series de 20 repeticiones', imagen: 'https://i.makeagif.com/media/9-07-2022/-Q5TrO.gif' },
            { nombre: 'Crunch con mancuernas', repeticiones: '3 series de 15 repeticiones', imagen: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/11/weighted-knee-crunch.gif' },
        ]
    },
    Viernes: {
        ejercicios: [
            { nombre: 'Press de hombros con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://fitcron.com/wp-content/uploads/2021/04/04261301-Dumbbell-Standing-Overhead-Press_shoulder_720.gif' },
            { nombre: 'Elevaciones laterales con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/82/ca/95/82ca95a3dcf9406fb741a214d25a685a.gif' },
            { nombre: 'Elevación frontal con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://aztethic.com/wp-content/uploads/2018/04/03101301-Dumbbell-Front-Raise_Shoulders_1080.gif' },
            { nombre: 'Encogimiento de hombros con mancuernas', repeticiones: '3 series de 15-20 repeticiones', imagen: 'https://media.tenor.com/uMNZPBaaTPYAAAAM/dumbbell-shrug.gif' },
        ]
    },
    Sábado: {
        ejercicios: [
            { nombre: 'Burpees modificados con mancuernas', repeticiones: '3 series de 10-12 repeticiones', imagen: 'https://i.pinimg.com/originals/b7/6c/d5/b76cd5cff2452b9b3d839d2018863fbb.gif' },
            { nombre: 'Thrusters con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/12/front-squat-dumbbell.gif' },
            { nombre: 'Escaladores (mountain climbers)', repeticiones: '3 series de 30 segundos', imagen: 'https://i.pinimg.com/originals/32/a7/d0/32a7d00d6123dd416e459ba67cf1691b.gif' },
            { nombre: 'Saltos con mancuernas', repeticiones: '3 series de 10-15 repeticiones', imagen: 'https://fitcron.com/wp-content/uploads/2021/04/15541301-Dumbbell-Split-Jump_Plyometric_720.gif' },
        ]
    },
    Domingo: {
        ejercicios: [
            { nombre: 'Descanso activo', repeticiones: 'Caminar, nadar o estiramientos suaves por 30 minutos', imagen: 'https://www.santafixie.com/blog/wp-content/uploads/2020/12/Isquiotibiales.jpg' },
        ]
    }
};

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function mostrarRutina() {
    //const hoy = new Date().getDay(); // 0 es Domingo, 6 es Sábado
    const hoy =6;
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
                    <div class="w-full h-200 overflow-hidden rounded-lg">
                        <img src="${ejercicio.imagen}" alt="${ejercicio.nombre}" class="object-cover w-full h-full">
                    </div>
                </div>
            `;
        });
    } else {
        rutinaElemento.innerHTML = '<p>No hay rutina asignada para hoy.</p>';
    }
}

document.addEventListener('DOMContentLoaded', mostrarRutina);

