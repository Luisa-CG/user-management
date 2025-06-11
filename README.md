# User Management App

Aplicación web desarrollada en **Angular** para la gestión de usuarios. Permite realizar operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar), incluye **filtros de búsqueda con autocompletado**, y tiene un diseño responsive.

---

## 🚀 Tecnologías utilizadas

- Angular
- TypeScript
- HTML & CSS
- SweetAlert2 (para confirmaciones)
- JSON Server (para simular una API REST)
- RxJS / Observables
- Local filtering + search autocompletar estilo Google

---

## ✅ Funcionalidades

- ✅ Crear, editar y eliminar usuarios
- ✅ Validación de formularios
- ✅ Búsqueda en vivo con autocompletado
- ✅ Confirmación de eliminación con SweetAlert2
- ✅ Estilo responsive para móviles y escritorio
- ✅ Almacenamiento de datos vía JSON Server

---

## 🛠️ Instalación y ejecución

1. **Clona el repositorio**

```bash
git clone https://github.com/Luisa-CG/user-management.git
cd user-management
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Ejecuta el servidor JSON (simula la API)**

```bash
npx json-server --watch src/assets/data.json --port 3000
```

4. **Levanta la app Angular**

```bash
ng serve
```

5. Abre en tu navegador:  
   👉 [http://localhost:4200](http://localhost:4200)

## 📦 Dependencias clave

```json
"dependencies": {
  "@angular/core": "...",
  "sweetalert2": "^11.10.0",
  "rxjs": "...",
  ...
}
```

---

## ✍️ Autor

- **Luisa C.G.**  
GitHub: [@Luisa-CG](https://github.com/Luisa-CG)

