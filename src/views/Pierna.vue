<template>
  <q-page class="q-py-xl q-px-lg flex justify-center">
    <div style="max-width: 1400px; width: 100%;">
      
      <!-- Cabecera del Módulo -->
      <div class="q-mb-xl row items-center justify-between no-wrap page-header-nexus animated fadeIn">
        <div>
          <div class="row items-center q-gutter-x-sm">
            <q-icon name="bolt" class="text-nexus-cyan text-h3" />
            <h2 class="text-h3 text-weight-bolder q-ma-none tracking-tight text-white">
              ENTRENAMIENTO DE <span class="text-nexus-cyan">PIERNAS</span>
            </h2>
          </div>
          <p class="text-subtitle1 text-slate-400 q-mt-sm q-mb-none">
            Optimización integral del tren inferior: Cuádriceps, Isquiotibiales y Glúteos.
          </p>
        </div>
        <q-chip class="bg-nexus-cyan text-black text-weight-bolder q-px-md" :label="`${ejercicios.length} EJERCICIOS`" />
      </div>

      <!-- Grid de Ejercicios -->
      <div class="row q-col-gutter-xl">
        <div 
          v-for="ejercicio in ejercicios" 
          :key="ejercicio.id" 
          class="col-12 col-md-6 flex items-stretch animated fadeInUp"
        >
          <q-card flat class="nexus-card full-width flex column justify-between overflow-hidden">
            
            <!-- Video Superior -->
            <div class="video-wrapper relative-position">
              <iframe
                :src="`https://www.youtube.com/embed/${ejercicio.videoId}`"
                :title="ejercicio.nombre"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
              ></iframe>
              <div class="video-overlay-shadow"></div>
            </div>

            <!-- Información -->
            <q-card-section class="q-pa-xl flex-grow-1">
              <div class="row justify-between items-center q-mb-md">
                <div class="text-h5 text-weight-bold text-white tracking-wide">{{ ejercicio.nombre }}</div>
                <q-chip dense color="cyan-10" text-color="white" class="text-caption text-weight-bold q-px-sm" :label="ejercicio.target" />
              </div>
              <p class="text-slate-300 text-body2 line-height-relaxed q-ma-none">
                {{ ejercicio.descripcion }}
              </p>
            </q-card-section>

            <!-- Control Inferior -->
            <q-card-actions class="q-px-xl q-pb-xl q-pt-none row justify-between items-center border-top-glow">
              <div class="row items-center text-slate-400 text-subtitle2">
                <q-icon name="fitness_center" class="text-nexus-cyan q-mr-xs text-subtitle1" />
                <span>{{ ejercicio.volumen }}</span>
              </div>
              
              <q-btn 
                flat 
                no-caps 
                label="Guía Técnica" 
                icon-right="open_in_new"
                :href="ejercicio.urlExplicativa" 
                target="_blank" 
                class="btn-nexus-action text-weight-bold" 
              />
            </q-card-actions>

          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
const ejercicios = [
  {
    id: 1,
    nombre: 'Sentadilla Libre con Barra',
    target: 'Cuádriceps / Glúteo',
    descripcion: 'El rey de los ejercicios para el tren inferior. Mantén el core activo para proteger la zona lumbar, desciende rompiendo de forma controlada el paralelo de las rodillas y empuja con toda la planta del pie.',
    videoId: 'xvCynwyNoP4',
    volumen: '4 Series x 8-10 Reps',
    urlExplicativa: 'https://www.youtube.com/embed/xvCynwyNoP4?si=u97ff_7goOQbWzUq'
  },
  {
    id: 2,
    nombre: 'Peso Muerto Rumano',
    target: 'Isquiotibiales',
    descripcion: 'Enfoque masivo en la cadena posterior. Lleva las caderas hacia atrás manteniendo una flexión de rodilla mínima. Siente el estiramiento profundo en los femorales antes de traccionar de vuelta.',
    videoId: '3GcUCC0rnZs',
    volumen: '4 Series x 10 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=3GcUCC0rnZs'
  },
  {
    id: 3,
    nombre: 'Prensa de Piernas 45°',
    target: 'Musculatura General',
    descripcion: 'Permite mover cargas pesadas reduciendo la fatiga espinal. Baja la plataforma de forma controlada sin permitir que tu pelvis se despegue del respaldo en la fase más profunda.',
    videoId: 't3ZsdTzZQq0',
    volumen: '3 Series x 12 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=t3ZsdTzZQq0'
  },
  {
    id: 4,
    nombre: 'Elevación de Talones de Pie',
    target: 'Gemelos',
    descripcion: 'El mejor ejercicio para el desarrollo de los gemelos. Mantén la espalda recta, sube hasta la máxima contracción y baja lentamente hasta sentir un estiramiento completo.',
    videoId: '5X6Iyd3NWaU',
    volumen: '4 Series x 15-20 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=5X6Iyd3NWaU'
  }
]
</script>

<style scoped>
.text-nexus-cyan { color: #00f0ff !important; }
.bg-nexus-cyan { background-color: #00f0ff !important; }
.text-slate-300 { color: #cbd5e1; }
.text-slate-400 { color: #94a3b8; }
.line-height-relaxed { line-height: 1.65; }
.video-wrapper { position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-bottom: 1px solid rgba(255, 255, 255, 0.05); background: #000; }
.border-top-glow { border-top: 1px solid rgba(0, 240, 255, 0.05); padding-top: 16px !important; }
.btn-nexus-action { color: #00f0ff !important; background: rgba(0, 240, 255, 0.03); border: 1px solid rgba(0, 240, 255, 0.15); border-radius: 8px; padding: 4px 16px; transition: all 0.3s ease; }
.btn-nexus-action:hover { background: rgba(0, 240, 255, 0.1) !important; border-color: #00f0ff; box-shadow: 0 0 10px rgba(0, 240, 255, 0.2); }
.animated { animation-duration: 0.6s; animation-fill-mode: both; }
.fadeIn { animation-name: fadeIn; }
.fadeInUp { animation-name: fadeInUp; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInUp { from { opacity: 0; transform: translate3d(0, 15px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
</style>