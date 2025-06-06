# Documentación del Sitio Web SubliArt

## Información General

**Nombre del sitio:** SubliArt - Arte en Sublimación
**URL de despliegue:** https://kgwmnowo.manus.space
**Fecha de creación:** Junio 2025

## Estructura del Sitio Web

El sitio web de SubliArt está compuesto por las siguientes páginas:

1. **Inicio (index.html)**: Página principal con información general sobre el negocio.
2. **Nosotros (nosotros.html)**: Información sobre la empresa, su historia, misión y visión.
3. **Productos (productos.html)**: Catálogo de productos disponibles para sublimación.
4. **Servicios (servicios.html)**: Descripción de los servicios ofrecidos.
5. **Galería (galeria.html)**: Muestra de trabajos realizados.
6. **Proceso (proceso.html)**: Explicación del proceso de sublimación.
7. **Contacto (contacto.html)**: Formulario e información de contacto.
8. **Cotización (cotizacion.html)**: Formulario para solicitar presupuestos.

## Estructura de Archivos

```
subliart/
├── index.html
├── nosotros.html
├── productos.html
├── servicios.html
├── galeria.html
├── proceso.html
├── contacto.html
├── cotizacion.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   ├── camiseta.jpg
│   ├── taza.jpg
│   ├── gorra.jpg
│   ├── cojin.jpg
│   └── ...
├── logo.png
├── banner.png
└── proceso.png
```

## Guía de Mantenimiento

### Actualización de Contenido

Para actualizar el contenido del sitio web, siga estos pasos:

1. Abra el archivo HTML correspondiente a la página que desea modificar.
2. Busque la sección que desea actualizar.
3. Modifique el texto dentro de las etiquetas HTML.
4. Guarde los cambios.
5. Suba los archivos actualizados al servidor.

### Agregar Nuevos Productos

Para agregar nuevos productos al catálogo:

1. Abra el archivo `productos.html`.
2. Busque la sección correspondiente a la categoría del producto.
3. Copie la estructura de un producto existente:

```html
<div class="product-card">
    <div class="product-image">
        <img src="img/nombre-imagen.jpg" alt="Descripción del producto">
    </div>
    <div class="product-info">
        <h3>Nombre del Producto</h3>
        <p>Descripción breve del producto</p>
        <a href="#" class="btn btn-outline">Ver más</a>
    </div>
</div>
```

4. Modifique el contenido con la información del nuevo producto.
5. Guarde los cambios y suba los archivos al servidor.

### Actualización de Imágenes

Para actualizar o agregar nuevas imágenes:

1. Prepare la imagen en formato JPG o PNG, optimizada para web.
2. Coloque la imagen en la carpeta `img/`.
3. Actualice la referencia a la imagen en el archivo HTML correspondiente:

```html
<img src="img/nombre-imagen.jpg" alt="Descripción de la imagen">
```

### Modificación de Estilos

Para modificar los estilos del sitio web:

1. Abra el archivo `css/styles.css`.
2. Busque la sección correspondiente al elemento que desea modificar.
3. Actualice las propiedades CSS según sea necesario.
4. Guarde los cambios y suba el archivo al servidor.

## Formularios de Contacto y Cotización

Los formularios de contacto y cotización están configurados para funcionar con JavaScript básico. Para conectarlos a un sistema de procesamiento de formularios:

1. Abra el archivo `js/script.js`.
2. Busque la sección relacionada con el manejo de formularios.
3. Modifique el código para enviar los datos al servicio de procesamiento de formularios deseado.

## Optimización para Motores de Búsqueda (SEO)

El sitio web incluye etiquetas meta básicas para SEO. Para mejorar el posicionamiento:

1. Actualice las etiquetas meta en cada página HTML:

```html
<meta name="description" content="Descripción de la página">
<meta name="keywords" content="palabras, clave, relevantes">
```

2. Asegúrese de que todas las imágenes tengan atributos `alt` descriptivos.
3. Mantenga el contenido actualizado y relevante.

## Soporte Técnico

Para cualquier consulta técnica o soporte adicional, contacte a:

- Email: soporte@subliart.com
- Teléfono: (123) 456-7890

---

Documentación creada por Manus para SubliArt - Junio 2025

