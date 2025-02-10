// Se agrega un evento de clic al elemento con id "nodo-principal"
document.getElementById("nodo-principal").addEventListener("click", function() {
    
    // Selecciona el contenedor donde se agregarán los nodos
    const container = document.querySelector(".mapa-container");
    
    // Selecciona todos los nodos hijos existentes (si ya hay nodos creados)
    let nodos = document.querySelectorAll(".nodo-hijo");

    // Si no hay nodos hijos (es decir, es la primera vez que se hace clic)
    if (nodos.length === 0) {

        // Definimos un arreglo con los elementos (nodos) a crear, cada uno con su texto, icono y enlace
        const elementos = [
            { texto: "Producción", icono: "https://cdn-icons-png.freepik.com/512/2973/2973740.png", link: "produccion.html"},
            { texto: "Operación y Logística", icono: "https://cdn-icons-png.freepik.com/512/8086/8086881.png", link: "operacion_logistica.html"},
            { texto: "Dirección General", icono: "https://cdn-icons-png.freepik.com/512/18191/18191216.png", link: "direccion_general.html"},
            { texto: "Tecnología", icono: "https://cdn-icons-png.freepik.com/512/778/778631.png", link: "tecnologia.html"},
            { texto: "Sistema de Gestión", icono: "https://cdn-icons-png.freepik.com/512/16517/16517493.png", link: "gestion_calidad.html"},
            { texto: "Seguridad", icono: "https://cdn-icons-png.freepik.com/512/1022/1022382.png", link: "seguridad.html"},
            { texto: "Administración", icono: "https://cdn-icons-png.freepik.com/512/13339/13339430.png", link: "administracion.html"},
            { texto: "TIC's", icono: "https://cdn-icons-png.freepik.com/512/780/780477.png", link: "tics.html"},
            { texto: "Almacén General", icono: "https://cdn-icons-png.freepik.com/512/18771/18771476.png", link: "almacen.html"},
            { texto: "Compras", icono: "https://cdn-icons-png.freepik.com/512/7438/7438697.png", link: "compras.html"}
        ];

        // Determina el ancho de la ventana del navegador para ajustar el radio de la disposición de los nodos
        let screenWidth = window.innerWidth;
        
        // Si la pantalla tiene un ancho mayor que 768px, se usa un radio mayor
        // Si es menor o igual, se usa un radio más pequeño
        let baseRadius = screenWidth > 768 ? 300 : 130; 
        
        // Se establece un radio mínimo y máximo para la disposición
        let minRadius = 100;
        let maxRadius = 300;
        
        // Se calcula el radio que se va a utilizar, limitando entre el mínimo y máximo
        let radius = Math.max(minRadius, Math.min(baseRadius, maxRadius));

        // Se recorre el arreglo de elementos para crear los nodos
        elementos.forEach((elem, i) => {
            
            // Se crea un div para cada nodo
            let nodo = document.createElement("div");
            
            // Se le asignan las clases 'nodo' y 'nodo-hijo' al nuevo div
            nodo.classList.add("nodo", "nodo-hijo");
            
            // Se define el contenido HTML del nodo, con su imagen (ícono) y texto
            nodo.innerHTML = `<img src="${elem.icono}" alt="${elem.texto}"><span>${elem.texto}</span>`;
            
            // Se ajusta el color de fondo del nodo (aunque no se usa elem.color en el ejemplo)
            nodo.style.backgroundColor = elem.color;
            
            // Se agrega un evento de clic para que, al hacer clic en el nodo, se redirija a la URL correspondiente
            nodo.addEventListener("click", function() {
                window.location.href = elem.link;
            });

            // Se agrega el nodo creado al contenedor
            container.appendChild(nodo);

            // Se calcula el ángulo en el que se posicionará el nodo, distribuyéndolos en un círculo
            let angle = (i / elementos.length) * (2 * Math.PI);
            
            // Se calculan las coordenadas (x, y) del nodo usando trigonometría
            let x = radius * Math.cos(angle);
            let y = radius * Math.sin(angle);

            // Se aplica la transformación CSS para posicionar el nodo en las coordenadas calculadas
            nodo.style.setProperty('--x', `${x}px`);
            nodo.style.setProperty('--y', `${y}px`);
            
            // Se asegura de que el nodo sea visible
            nodo.style.opacity = "1";
            
            // Se ajusta el estilo del nodo para que sea un elemento flexbox y se alinee correctamente
            nodo.style.display = "flex";
        });

    } else {
        // Si ya existen nodos hijos, se eliminan todos
        nodos.forEach(nodo => nodo.remove());
    }
});
