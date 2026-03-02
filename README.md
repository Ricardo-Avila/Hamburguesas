# Brasa Burger - Sitio Web

Landing page estática para un puesto de hamburguesas con una estética premium y responsive.

## Estructura

- `index.html`: página principal.
- `assets/css/styles.css`: estilos globales y responsive.
- `assets/js/main.js`: animaciones de entrada y utilidades UI.
- `assets/img/`: carpeta para imágenes del negocio.

## Ejecutar localmente

1. Abre `index.html` directamente en el navegador, o
2. Sirve la carpeta con cualquier servidor estático.

Ejemplo con Python:

```bash
python -m http.server 5500
```

Luego visita `http://localhost:5500`.

## Deploy rápido

Este proyecto es estático, funciona en:

- Netlify (arrastrar carpeta)
- Vercel (importar repositorio)
- GitHub Pages

## Personalización rápida

- Cambia el número de WhatsApp en `index.html` (sección contacto).
- Ajusta precios y productos en la sección `#menu`.
- Agrega fotos reales en `assets/img/` y enlázalas desde `index.html`.
