# Front Ionic
PostApp - Gestión de Posts con Angular, Ionic y NgRx

Este proyecto es una aplicación desarrollada con Angular, Ionic, y NgRx para gestionar posts de manera eficiente. Incluye funcionalidades como la creación, eliminación, y búsqueda de posts, con una interfaz moderna y accesible basada en Material Design.

# Características
Crear Posts: Permite agregar nuevos posts con nombre y descripción.
Eliminar Posts: Confirmación previa antes de eliminar un post.
Buscar Posts: Filtra posts en tiempo real utilizando un campo de búsqueda.
Gestión de Estado: Manejo eficiente del estado global utilizando NgRx.
Interfaz de Usuario Mejorada: Diseño limpio y responsivo para dispositivos móviles y escritorio.

# Requisitos Previos
Node.js (versión 16 o superior)
Ionic CLI (instalar con npm install -g @ionic/cli)
Angular CLI (instalar con npm install -g @angular/cli)

# Instalación y Configuración
Clona este repositorio desde GitHub:

bash
Copiar código
git clone https://github.com/jhonathan55/postApp.git
cd postApp
Instala las dependencias del proyecto:

bash
Copiar código
npm install
Ejecuta la aplicación en modo de desarrollo:

bash
Copiar código
ionic serve
Abre la aplicación en tu navegador en http://localhost:8100.

# Estructura del Proyecto

src/
├── app/
│   ├── components/         # Componentes reutilizables
│   │   └── post-list/      # Lista de posts
│   ├── models/             # Modelos de datos
│   ├── services/           # Servicios para manejo de datos
│   ├── store/              # Configuración de NgRx
│   └── pages/              # Páginas principales
├── assets/                 # Archivos estáticos
├── theme/                  # Temas y estilos globales


# Funcionalidades Técnicas
Gestión de Estado con NgRx
Acciones:

loadPosts: Carga los posts iniciales desde el servicio.
addPost: Agrega un nuevo post.
removePost: Elimina un post por su ID.
setFilter: Filtra los posts por nombre.
Selectores:

selectFilteredPosts: Obtiene los posts filtrados en base al término de búsqueda.
Interfaz de Usuario
Uso de componentes de Ionic como IonSearchbar, IonCard, y IonButton.
Estilo personalizado con Material Design y Sass.

# Enlaces Relevantes
GitHub: Repositorio del Proyecto
LinkedIn: Perfil de Jhonathan Gutiérrez

Autor
Jhonathan Gutiérrez

GitHub: jhonathan55
LinkedIn: www.linkedin.com/in/jhonathan-gutierrez-069672207