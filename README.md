## App Fratelli – Frontend**

Frontend moderno en React que consume una API REST. Enfocado en una interfaz limpia, componentes reutilizables y una separación clara entre la presentación y el acceso a datos.

Este proyecto es un cliente frontend real que se comunica con un backend via HTTP, manejando estados de carga, routing e interacción del usuario.

**Stack Tecnológico Principal**

- React 18
- JavaScript (ES6+)
- Axios – Comunicación con API
- React Router DOM – Routing del lado del cliente

**UI y UX**

- Material UI (MUI) – Componentes e íconos
- Bootstrap 5 / React-Bootstrap
- Emotion (CSS-in-JS)
- React Loading – Indicadores de carga
- React Aria – Soporte de accesibilidad

**Testing y Calidad**

- Testing Library
- Web Vitals

**Consumo de API**

El frontend se comunica con una API backend usando Axios, siguiendo este flujo:

```
UI Component → Service / Axios Client → REST API (Backend) → Response → State Update → UI Render
```

- Peticiones HTTP centralizadas
- Manejo con async/await
- Estados de carga y error
- Separación limpia entre UI y lógica de datos

**Características**

- Renderizado de datos vía API
- Routing dinámico
- Indicadores de carga
- UI responsiva y moderna
- Componentes con accesibilidad
- Diseño mobile-friendly
- Arquitectura de componentes reutilizables

**Estructura del Proyecto**

```
src/
├── components/
│   ├── common/
│   └── layout/
├── pages/
├── services/
│   └── api.js
├── hooks/
├── routes/
├── styles/
├── App.js
└── index.js
```

**Requisitos**

- Node.js 18+
- npm 9+
- API backend corriendo (local o remota)

**Cómo empezar**

1. Clonar el repositorio

   ```
   git clone https://github.com/your-username/app-fratelli-frontend.git
   ```

2. Instalar dependencias

   ```
   npm install
   ```

3. Configurar la URL base de la API. Ejemplo en `services/api.js`:

   ```javascript
   axios.create({ baseURL: "http://localhost:8080/api" });
   ```

4. Iniciar el servidor de desarrollo

   ```
   npm start
   ```

**Conceptos Clave Demostrados**

- Integración frontend-backend
- Consumo de API REST
- Renderizado de UI basado en estado
- Arquitectura basada en componentes
- Diseño con foco en accesibilidad
- Setup de React listo para producción

**Notas**

- El backend está desacoplado del frontend
- Fácil de adaptar a distintas APIs
- Listo para builds de producción
- Estructura escalable para agregar features

**Autor**

Gonzalo Rodríguez – Software Developer | Frontend & Backend

- Email: gnrd.developer@gmail.com
- GitHub | LinkedIn
