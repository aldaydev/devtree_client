# devtree_client

DevTree App: proyecto full stack con Node, Express, TypeSript, React y Tailwind

## Remake 2 (frontend)
Editar y reestructurar todo lo que tiene que ver con la vista privada

* Meter el link para ver el perfil público en el nav de la vista privada
* Actualizados los estilos del nav de "/admin"
* Creada la vista para actualizar nombre y contraseña
* En el preview, si no tienes imagen y/o descripción, se muestra un ejemplo
* Validación de la imagen (max 250x250px y 500kb)
* Creación de funcionalidad para eliminar la cuenta
* Cambio de los links (adaptados para músicos)

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
  