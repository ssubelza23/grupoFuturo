# Proyecto Grupo Futuro

Este proyecto está diseñado para implementar una arquitectura de microservicios utilizando Node.js, PostgreSQL con PostGIS y Docker. El objetivo es crear un sistema que gestione usuarios y proyectos de manera eficiente y escalable.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
grupoFuturo
├── services
│   ├── users
│   │   ├── src
│   │   │   ├── app.js
│   │   │   ├── controllers
│   │   │   │   └── userController.js
│   │   │   ├── models
│   │   │   │   └── userModel.js
│   │   │   ├── routes
│   │   │   │   └── userRoutes.js
│   │   │   └── services
│   │   │       └── userService.js
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── projects
│   │   ├── src
│   │   │   ├── app.js
│   │   │   ├── controllers
│   │   │   │   └── projectController.js
│   │   │   ├── models
│   │   │   │   └── projectModel.js
│   │   │   ├── routes
│   │   │   │   └── projectRoutes.js
│   │   │   └── services
│   │   │       └── projectService.js
│   │   ├── Dockerfile
│   │   └── package.json
├── docker-compose.yml
├── README.md
└── .env
```

## Servicios

### Servicio de Usuarios

- **Descripción**: Maneja todas las operaciones relacionadas con los usuarios.
- **Punto de entrada**: `services/users/src/app.js`
- **Controlador**: `services/users/src/controllers/userController.js`
- **Modelo**: `services/users/src/models/userModel.js`
- **Rutas**: `services/users/src/routes/userRoutes.js`
- **Lógica de negocio**: `services/users/src/services/userService.js`
- **Dockerfile**: `services/users/Dockerfile`
- **Configuración de npm**: `services/users/package.json`

### Servicio de Proyectos

- **Descripción**: Maneja todas las operaciones relacionadas con los proyectos.
- **Punto de entrada**: `services/projects/src/app.js`
- **Controlador**: `services/projects/src/controllers/projectController.js`
- **Modelo**: `services/projects/src/models/projectModel.js`
- **Rutas**: `services/projects/src/routes/projectRoutes.js`
- **Lógica de negocio**: `services/projects/src/services/projectService.js`
- **Dockerfile**: `services/projects/Dockerfile`
- **Configuración de npm**: `services/projects/package.json`

## Configuración de Docker

El archivo `docker-compose.yml` define cómo se deben ejecutar los contenedores para los servicios de usuarios y proyectos, así como la base de datos PostgreSQL con PostGIS.

## Variables de Entorno

El archivo `.env` contiene las variables de entorno necesarias para la configuración de la aplicación, como las credenciales de la base de datos y otros parámetros de configuración.

## Instrucciones de Uso

1. Clona el repositorio.
2. Navega a la carpeta del proyecto.
3. Configura el archivo `.env` con tus credenciales de base de datos.
4. Ejecuta `docker-compose up` para iniciar los servicios.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cambios o mejoras.