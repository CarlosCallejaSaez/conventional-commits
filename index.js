document.addEventListener('DOMContentLoaded', function() {
    const notes = [
        {
            title: "Introducción",
            content: "Los Conventional Commits son una especificación para agregar significado tanto humano como legible por máquina a los mensajes de los commits. Esto ayuda a entender el historial de cambios y automatizar procesos de versiones y releases."
        },
        {
            title: "Tipos comunes",
            content: "Algunos de los tipos más comunes son:\n\n- feat: Una nueva característica para el usuario.\n- fix: Arreglo de un error.\n- docs: Cambios en la documentación.\n- style: Cambios que no afectan el significado del código (espacios, formato, etc).\n- refactor: Cambios en el código que no corrigen errores ni añaden características.\n- perf: Cambios que mejoran el rendimiento.\n- test: Añadir o corregir tests.\n- chore: Actualizaciones de tareas de construcción, configuración de administrador, etc."
        },
        {
            title: "Ejemplos",
            content: "\n- feat: añadir nueva funcionalidad de login para el usuario\n- fix: resolver el problema de tiempo de espera de sesión de usuario\n- docs: actualizar la guía de contribución\n- style: formatear el código según las nuevas directrices\n- refactor: reorganizar el código del módulo de autenticación\n- perf: mejorar el rendimiento de la consulta a la base de datos\n- test: añadir tests unitarios para la función de login\n- chore: actualizar las dependencias del proyecto"
        },
        {
            title: "Ventajas",
            content: "\n1. Mejora la claridad y consistencia de los mensajes de commit.\n2. Facilita la generación automática de notas de release.\n3. Ayuda en la revisión y auditoría del historial de commits.\n4. Permite la automatización de procesos de integración y entrega continua."
        },
        {
            title: "Webs",
            content: `<a href="https://www.conventionalcommits.org" target="_blank">Documentación oficial</a>\n <a href="https://github.com/conventional-changelog/commitlint" target="_blank">Herramienta de validacion</a>`
        }
    ];

    const contentDiv = document.getElementById('content');

    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';

        const noteTitle = document.createElement('h2');
        noteTitle.textContent = note.title;

        const noteContent = document.createElement('p');
        noteContent.innerHTML = note.content.replace(/\n/g, '<br>');

        noteDiv.appendChild(noteTitle);
        noteDiv.appendChild(noteContent);
        contentDiv.appendChild(noteDiv);
    });
});
