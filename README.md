# 🚀 Plantilla Base React + TypeScript + Shadcn/ui

<p align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=FFDF00" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v3" />
  <img src="https://img.shields.io/badge/Zustand_5-443E38?style=for-the-badge&logo=react&logoColor=white" alt="Zustand 5" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI (shadcn)" />
</p>

---

## 🎯 Propósito del Proyecto

Esta plantilla proporciona una arquitectura organizada y pre-configurada que elimina la necesidad de configurar los cimientos repetitivos de una SPA (Single Page Application).

---

## 🛠️ Pila Tecnológica

| Componente / Tecnología | Rol en la Plantilla |
| :--- | :--- |
| **React 19** | Biblioteca base para la construcción de interfaces declarativas. |
| **TypeScript** | Tipado estricto y seguro de datos a lo largo de la aplicación. |
| **Vite 6** | Servidor de desarrollo ultrarrápido y empaquetador de producción. |
| **Zustand 5** | Gestión del estado global de sesión con persistencia optimizada. |
| **CryptoJS** | Encriptación simétrica AES para los datos guardados en el almacenamiento local. |
| **React Router DOM 7** | Configuración centralizada y dinámica de rutas y layouts. |
| **Axios** | Cliente HTTP preconfigurado con interceptores de seguridad. |
| **Tailwind CSS v3 + Radix UI** | Estilos utilitarios y componentes altamente accesibles (*shadcn/ui*). |

---

## 📂 Estructura de Directorios

El proyecto adopta un enfoque modular basado en **Características (Features)** para maximizar la escalabilidad, junto con directorios compartidos para la infraestructura del sistema:

```
src/
├── assets/          # Recursos estáticos globales (imágenes, logos, etc.)
├── components/      # Componentes compartidos del sistema
│   ├── ui/          # Componentes base sin lógica de negocio (shadcn/ui)
│   ├── shared/      # Componentes de negocio reutilizables
│   └── specific/    # Componentes específicos y proveedores (ej: ThemeProvider)
├── features/        # Módulos del negocio organizados por funcionalidad
│   ├── auth/        # Módulo de Autenticación (Login, Recuperación, etc.)
│   ├── dashboard/   # Módulo del Panel Principal
│   └── shared/      # Lógica o componentes compartidos entre features (ej: Loading)
├── guards/          # Control de acceso y protección de rutas (RBAC)
├── hooks/           # Custom React Hooks globales del sistema
├── layouts/         # Estructuras visuales de página (MainLayout, Sidebar, Navbar)
├── lib/             # Utilidades genéricas y configuraciones de terceros
├── plugins/         # Integraciones o extensiones externas (escalable)
├── router/          # Configuración y renderizado dinámico de rutas
├── services/        # Clientes y configuraciones de servicios HTTP/API
├── store/           # Stores de Zustand para manejo de estado global
└── types/           # Interfaces y tipos TypeScript globales del sistema
```

---

## 🔑 Funcionalidades del Sistema

> ### 🔐 Guardas
> Centraliza la definición de rutas permitiendo asignarles layouts y guardas específicas:
> - **AuthGuard:** Bloquea el acceso si no hay una sesión activa o si el token expiró.
> - **GuestGuard:** Impide que usuarios ya autenticados vuelvan a la página de login.
> - **PermissionGuard:** Compara los permisos del JWT contra los requeridos para permitir el paso o redirigir a acceso denegado.

---

## 🚀 Primeros Pasos

### Configuración del Entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_ENCRYPTION_KEY=tu_clave_de_encriptacion_secreta_aes
VITE_VUE_APP_API_URL=http://localhost:8000
```
> 💡 *Nota: El cliente Axios está configurado para concatenar `/api` a la URL base de forma automática.*

### Instalación y Ejecución

1. **Instalar Dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en Desarrollo:**
   ```bash
   npm run dev
   ```

3. **Compilar para Producción:**
   ```bash
   npm run build
   ```
