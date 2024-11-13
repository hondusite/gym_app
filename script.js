if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registrado', reg))
        .catch(err => console.log('Error al registrar el Service Worker', err));
}
const rutinaPorDia = {
    Lunes: {
        ejercicios: [
            { nombre: 'Press de pecho con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://i.pinimg.com/originals/d3/1c/b7/d31cb791b7f222843e8779b6e304eae5.gif' },
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
            { nombre: 'Curl de bíceps con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2Fcurl-de-bceps-con-dos-mancuernas-sentado--450782243966005755%2F&psig=AOvVaw20QJJ0lRJtv0_dIhfHlUV2&ust=1731551864833000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDag8Kj2IkDFQAAAAAdAAAAABAE' },
            { nombre: 'Pullover con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F69242913004555057%2F&psig=AOvVaw17IaC34KA3iZLTbig9_aMw&ust=1731551897085000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjKhtyj2IkDFQAAAAAdAAAAABAS' },
            { nombre: 'Curl martillo', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://boxlifemagazine.com/wp-content/uploads//2023/08/curl-haltere-prise-neutre-min-1.gif' },
        ]
    },
    Jueves: {
        ejercicios: [
            { nombre: 'Elevación de piernas', repeticiones: '3 series de 15 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2F642607440585626874%2F&psig=AOvVaw3r9GCOhyRR9PCCjyGHow6k&ust=1731552001879000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLic-4Ok2IkDFQAAAAAdAAAAABAE' },
            { nombre: 'Plancha', repeticiones: '3 series de 30-45 segundos', imagen: 'https://i.pinimg.com/originals/bb/e7/86/bbe78693697daed4037ea5439025f68f.gif' },
            { nombre: 'Russian twists', repeticiones: '3 series de 20 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Fwww.menshealth.com%2Ffitness%2Fa20694928%2Ffeet-raised-russian-twist%2F&psig=AOvVaw1LpwY1aXYmFIGGKcoHQKuR&ust=1731552080907000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDy66uk2IkDFQAAAAAdAAAAABAY' },
            { nombre: 'Crunch con mancuernas', repeticiones: '3 series de 15 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Fwww.mundodeportivo.com%2Funcomo%2Fdeporte%2Farticulo%2Fcomo-hacer-abdominales-con-mancuernas-44381.html&psig=AOvVaw0p32fJ8pclqurzRkYal7cG&ust=1731552142505000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjO0Myk2IkDFQAAAAAdAAAAABBV' },
        ]
    },
    Viernes: {
        ejercicios: [
            { nombre: 'Press de hombros con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Ffitcron.com%2Fexercise%2Fpress-militar-en-pronacion-con-mancuernas-deltoides%2F&psig=AOvVaw1g3Ok7ncTZJXKjTJBE7Hql&ust=1731553099912000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCVpo6o2IkDFQAAAAAdAAAAABAE' },
            { nombre: 'Elevaciones laterales con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Fmx.pinterest.com%2Fpin%2F362047257561325682%2F&psig=AOvVaw2NPUvI3nH8q9Q_lFC7GKRl&ust=1731553126320000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJii2Zqo2IkDFQAAAAAdAAAAABAE' },
            { nombre: 'Elevación frontal con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://aztethic.com/wp-content/uploads/2018/04/03101301-Dumbbell-Front-Raise_Shoulders_1080.gif' },
            { nombre: 'Encogimiento de hombros con mancuernas', repeticiones: '3 series de 15-20 repeticiones', imagen: 'https://media.tenor.com/uMNZPBaaTPYAAAAM/dumbbell-shrug.gif' },
        ]
    },
    Sábado: {
        ejercicios: [
            { nombre: 'Burpees modificados con mancuernas', repeticiones: '3 series de 10-12 repeticiones', imagen: 'https://www.google.hn/url?sa=i&url=https%3A%2F%2Ffitcron.com%2Fexercise%2Fpress-militar-en-pronacion-con-mancuernas-deltoides%2F&psig=AOvVaw1enmmexf8VV_OYkew8YbbE&ust=1731552272191000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjn2YOl2IkDFQAAAAAdAAAAABAE' },
            { nombre: 'Thrusters con mancuernas', repeticiones: '3 series de 12-15 repeticiones', imagen: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/12/front-squat-dumbbell.gif' },
            { nombre: 'Escaladores (mountain climbers)', repeticiones: '3 series de 30 segundos', imagen: 'https://i.pinimg.com/originals/32/a7/d0/32a7d00d6123dd416e459ba67cf1691b.gif' },
            { nombre: 'Saltos con mancuernas', repeticiones: '3 series de 10-15 repeticiones', imagen: 'https://cdnl.iconscout.com/lottie/premium/preview-watermark/sentadilla-salto-con-mancuernas-10112717-8265200.mp4' },
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

