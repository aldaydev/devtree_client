# Mlink App (client)

Mlink es una app tipo "link tree" pensada para músicos. En ella puedes crear tu perfil, tener tu "username" único y un enlace para compartir de una sola vez todas tus redes sociales como artista musical.

### Enlace al proyecto desplegado: 

[![VER PROYECTO](https://img.shields.io/badge/🚀_Proyecto_Desplegado-007acc?style=for-the-badge&logo=vercel&logoColor=white)](https://mlink.alday.dev)

## Tecnilogías utilizadas para el backend:

### 🚀 LENGUAJES  
![TYPESCRIPT](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)



### 🛠️ ENTORNO DE DESARROLLO  
![NODE.JS](https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white) ![EXPRESS](https://img.shields.io/badge/EXPRESS-000000?style=for-the-badge&logo=express&logoColor=white) ![NODEMON](https://img.shields.io/badge/NODEMON-76D04B?style=for-the-badge&logo=npm&logoColor=white)

### 📦 DEPENDENCIAS  
![BCRYPT](https://img.shields.io/badge/BCRYPT-CC3534?style=for-the-badge&logo=npm&logoColor=white) ![CORS](https://img.shields.io/badge/CORS-CC3534?style=for-the-badge&logo=npm&logoColor=white)  ![DOTENV](https://img.shields.io/badge/DOTENV-CC3534?style=for-the-badge&logo=npm&logoColor=white)  ![EXPRESS-VALIDATOR](https://img.shields.io/badge/EXPRESS--VALIDATOR-CC3534?style=for-the-badge&logo=npm&logoColor=white)  ![FORMIDABLE](https://img.shields.io/badge/FORMIDABLE-CC3534?style=for-the-badge&logo=npm&logoColor=white)  ![JSONWEBTOKEN](https://img.shields.io/badge/JSONWEBTOKEN-CC3534?style=for-the-badge&logo=npm&logoColor=white)  ![SLUG](https://img.shields.io/badge/SLUG-CC3534?style=for-the-badge&logo=npm&logoColor=white)  ![UUID](https://img.shields.io/badge/UUID-CC3534?style=for-the-badge&logo=npm&logoColor=white)

### 🗄️ BASE DE DATOS  
![MONGOOSE](https://img.shields.io/badge/MONGOOSE-880000?style=for-the-badge&logo=mongodb&logoColor=white)  ![MONGODB](https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### 🧪 TESTING  
![JEST](https://img.shields.io/badge/JEST-C21325?style=for-the-badge&logo=jest&logoColor=white)  ![SUPERTEST](https://img.shields.io/badge/SUPERTEST-CC3534?style=for-the-badge&logo=npm&logoColor=white)

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
  