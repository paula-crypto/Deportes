<template>
  <q-page class="q-py-xl q-px-lg flex justify-center">
    <div style="max-width: 1400px; width: 100%;">
      
      <!-- Cabecera del Módulo -->
      <div class="q-mb-xl row items-center justify-between no-wrap page-header-nexus animated fadeIn">
        <div>
          <div class="row items-center q-gutter-x-sm">
            <q-icon name="bolt" class="text-nexus-cyan text-h3" />
            <h2 class="text-h3 text-weight-bolder q-ma-none tracking-tight text-white">
              ENTRENAMIENTO DE <span class="text-nexus-cyan">PECHO</span>
            </h2>
          </div>
          <p class="text-subtitle1 text-slate-400 q-mt-sm q-mb-none">
            Desarrollo de fuerza, densidad y volumen en el plano pectoral.
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
                <q-chip dense color="blue-10" text-color="white" class="text-caption text-weight-bold q-px-sm" :label="ejercicio.target" />
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
    nombre: 'Press de Banca Plano',
    target: 'Pectoral Mayor',
    descripcion: 'El ejercicio base de empuje. Retrae fuertemente las escápulas contra el banco antes de sacar la barra, desciende controladamente rozando la línea media del pecho y empuja con potencia.',
    videoId: 'kBMU17yrlpI',
    volumen: '4 Series x 8 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=kBMU17yrlpI'
  },
  {
    id: 2,
    nombre: 'Press Inclinado con Mancuernas',
    target: 'Haz Clavicular',
    descripcion: 'Prioriza la porción superior del pecho. El uso de mancuernas permite un rango de movimiento más profundo en la parte baja y una convergencia natural al juntar las manos arriba.',
    videoId: 'V8k-oTxJLFL6eQ31',
    volumen: '4 Series x 10-12 Reps',
    urlExplicativa: 'https://www.youtube.com/embed/MkMf308jXww?si=V8k-oTxJLFL6eQ31'
  },
  {
    id: 3,
    nombre: 'Aperturas / Cruces en Polea',
    target: 'Aislamiento Pectoral',
    descripcion: 'Excelente para mantener tensión mecánica constante en todo el recorrido. Concéntrate en juntar los bíceps contra el lateral del pecho en la contracción máxima, evitando usar los brazos.',
    videoId: 'vVGQ9U-YhVc',
    volumen: '3 Series x 15 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=vVGQ9U-YhVc'
  },
  {
    id: 4,
    nombre: 'Fondos en Paralelas',
    target: 'Pectoral Inferior',
    descripcion: 'El mejor ejercicio para la porción baja del pecho. Inclina ligeramente el torso hacia adelante, mantén los codos abiertos y desciende hasta que los hombros queden al nivel de los codos.',
    videoId: 'CkX5QdEz4IE',
    volumen: '4 Series x Al Fallo',
    urlExplicativa: 'https://www.youtube.com/watch?v=CkX5QdEz4IE'
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