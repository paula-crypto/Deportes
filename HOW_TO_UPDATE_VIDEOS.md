# Cómo Actualizar los Videos de YouTube

Los videos en tu aplicación de entrenamiento están configurados para mostrar videos de YouTube. Aquí te muestro cómo actualizar los IDs de video con tus propios videos.

## Paso 1: Obtener el ID de un video de YouTube

1. Abre el video en YouTube
2. Mira la URL. Verás algo como:
   ```
   https://www.youtube.com/watch?v=**dBfZc0tzNQU**
   ```
3. El ID del video es la parte después de `v=` (en este ejemplo: `dBfZc0tzNQU`)

## Paso 2: Actualizar los IDs en tu aplicación

Los videos están organizados en archivos separados por grupo muscular:

### Brazos (`src/views/Brazo.vue`)
Busca la sección `const ejercicios` y reemplaza los `videoId`:
```javascript
{
  id: 1,
  nombre: 'Curl con Barra Recta',
  videoId: 'TU_ID_AQUI',  // ← Reemplaza esto
  // ...
}
```

### Espalda (`src/views/Espalda.vue`)
```javascript
{
  id: 1,
  nombre: 'Dominadas Pronas',
  videoId: 'TU_ID_AQUI',  // ← Reemplaza esto
  // ...
}
```

### Pecho (`src/views/Pecho.vue`)
```javascript
{
  id: 1,
  nombre: 'Press de Banca',
  videoId: 'TU_ID_AQUI',  // ← Reemplaza esto
  // ...
}
```

### Pierna (`src/views/Pierna.vue`)
```javascript
{
  id: 1,
  nombre: 'Sentadilla',
  videoId: 'TU_ID_AQUI',  // ← Reemplaza esto
  // ...
}
```

## Paso 3: Verificar en el navegador

1. Guarda los cambios
2. El navegador recargará automáticamente
3. Los videos deberían aparecer ahora

## Ejemplo Completo

Si quieres usar este video: https://www.youtube.com/watch?v=vB5OHsJ3EME

El ID es: `vB5OHsJ3EME`

Actualiza tu archivo así:
```javascript
{
  id: 2,
  nombre: 'Extensión en Polea Alta',
  videoId: 'vB5OHsJ3EME',  // ← Este video SÍ funciona
  // ...
}
```

## Recomendaciones de Canales de YouTube

Para encontrar buenos videos de ejercicios, te recomiendo estos canales:
- **ScottHermanFitness** - Técnica de ejercicios detallada
- **Jeremy Ethier** - Ejercicios basados en ciencia
- **Jeff Nippard** - Entrenamientos efectivos
- **AthleanX** - Biomecánica y ejercicios correctos

## ¿Problemas?

Si un video no aparece:
1. Verifica que el ID sea correcto
2. Asegúrate de que el video esté disponible públicamente en YouTube
3. Algunos videos pueden tener restricciones de edad o país

¡Listo! Ahora puedes personalizar tu aplicación con los videos que quieras.
