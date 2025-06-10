# Mlink App (client)

Mlink es una app tipo "link tree" pensada para músicos. En ella puedes crear tu perfil, tener tu "username" único y un enlace para compartir de una sola vez todas tus redes sociales como artista musical.

### Enlace al proyecto desplegado: 

[![VER PROYECTO](https://img.shields.io/badge/🚀_Proyecto_Desplegado-007acc?style=for-the-badge&logo=vercel&logoColor=white)](https://mlink.alday.dev)

## Tecnilogías utilizadas para el backend:

### 🚀 LENGUAJES  
![TYPESCRIPT](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### 🛠️ ENTORNO DE DESARROLLO  
![REACT](https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### 🗄️ ESTILOS
![TAILWIND CSS](https://img.shields.io/badge/TAILWIND_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### 📦 DEPENDENCIAS  
![REACT ROUTER DOM](https://img.shields.io/badge/REACT_ROUTER_DOM-CA4245?style=for-the-badge&logo=react&logoColor=white) ![REACT HOOK FORM](https://img.shields.io/badge/REACT_HOOK_FORM-EC5990?style=for-the-badge&logo=react&logoColor=white) ![REACT QUERY](https://img.shields.io/badge/REACT_QUERY-FF4154?style=for-the-badge&logo=react&logoColor=white) ![REACT SLUGIFY](https://img.shields.io/badge/REACT_SLUGIFY-5A32A3?style=for-the-badge&logo=react&logoColor=white) ![AXIOS](https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=npm&logoColor=white) ![SONNER](https://img.shields.io/badge/SONNER-333333?style=for-the-badge&logo=npm&logoColor=white)

### 🧪 TESTING  
![CYPRESS](https://img.shields.io/badge/CYPRESS-17202C?style=for-the-badge&logo=cypress&logoColor=white)

## Enlace al repositorio del back:

[![VER REPOSITORIO](https://img.shields.io/badge/📂_Repositorio_Backend-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aldaydev/mlink_server)

----------------------------------------

## Remake 3 (frontend)

Realización de testing con CYPRESS

* Instalación de cypress
  npm install --save-dev cypress
* Inicializar cypress
  Creamos script => "cypress:open": "cypress open"
  Con este script hacemos que cypress "escuche" y podremos ejecutar nuestros tests
  (Solucionar error cypress.config.ts) => cypress.config.mjs
  Instalar los types de cypress para TS => npm install --save-dev @cypress/webpack-dev-server

* Testing de login /cypress/e2e/login.cy.ts
* Testing de diversas funcionalidad de la vista privada

* Fix de la funcionalidad de organizar links en versión smartphone

## Remake 2 (frontend)
Editar y reestructurar todo lo que tiene que ver con la vista privada

* Meter el link para ver el perfil público en el nav de la vista privada
* Actualizados los estilos del nav de "/admin"
* Creada la vista para actualizar nombre y contraseña
* En el preview, si no tienes imagen y/o descripción, se muestra un ejemplo
* Validación de la imagen (max 250x250px y 500kb)
* Creación de funcionalidad para eliminar la cuenta
* Cambio de los links (adaptados para músicos)
* Adición de link para website

## Remake 1 (frontend)

Editar y reestructurar todo lo que tiene que ver con la vista pública y acceso

* Redefinición de colores (creación de clases personalizadas)
* Readaptación del header
* Readaptación del home
* Readaptación de las páginas de login y register

## Sprint 5 (frontend)

Creación de la página pública del usuario

* Separando componente del header
* Creando rutas para el home
* Diseñando la página home
* Haciendo "slug" del handle en el buscador del home
  npm i react-slugify
* Redirecciones y cerrar sesión

## Sprint 4 (frontend)

Gestionar subida de imágenes, activación y listado de enlaces

* Creación de un mutation (react.query) para la subida de imágenes
* Creación del formulario para redes sociales
* Instalación y configuracón de Headless UI
  npm install @headlessui/react
* Configurando preview de los enlaces de redes sociales
* Cofigurando dragndrop (dnd kit)
  npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities


## Sprint 3 (frontend)
Conexión de "login" con backend.

* Almacenando token en LocalStorage
* Páginas de "links" y "profile".
* Instalación y configuración React Query 
  npm i @tanstack/react-query
  npm i @tanstack/react-query-devtools
* Redirección si no hay token
* Actualizar los datos del perfil desde el front


## Sprint 2 (frontend)

Páginas de "login" y "register". Conexión de register con backend.

* Estilos iniciales de "login" y "register"
* Formulario de registro
* Instalación React Hook Form
* Validaciones y mensajes de error
* Mensajes de éxito o error con sonner
* Peticiones con Axios


## Sprint 1 (frontend)

Configuración inicial del frontend.

* Instalación de React con TypeScript (Vite).
* Instalación y configuración de Tailwind
  npm i -D tailwindcss@3 postcss autoprefixer
  npx tailwindcss init -p ==> Crear el archivo tailwind.config.js
* Instalación React-router-dom
  