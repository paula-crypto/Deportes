<template>
  <q-page class="q-py-xl q-px-lg flex justify-center">
    <div style="max-width: 1400px; width: 100%;">
      
      <!-- Cabecera del Módulo -->
      <div class="q-mb-xl row items-center justify-between no-wrap page-header-nexus animated fadeIn">
        <div>
          <div class="row items-center q-gutter-x-sm">
            <q-icon name="bolt" class="text-nexus-cyan text-h3" />
            <h2 class="text-h3 text-weight-bolder q-ma-none tracking-tight text-white">
              ENTRENAMIENTO DE <span class="text-nexus-cyan">ESPALDA</span>
            </h2>
          </div>
          <p class="text-subtitle1 text-slate-400 q-mt-sm q-mb-none">
            Desarrollo de amplitud, tracción y densidad en toda la zona posterior.
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
    nombre: 'Dominadas Pronas (Pull-ups)',
    target: 'Dorsal Ancho',
    descripcion: 'El constructor de amplitud por excelencia. Eleva tu cuerpo buscando llevar el pecho hacia la barra, manteniendo los hombros abajo y concentrando la fuerza en los codos, no en las manos.',
    videoId: 'Gx8Rrr0Qn-U',
    urlExplicativa: 'https://www.youtube.com/watch?v=Gx8Rrr0Qn-U'
  },
  {
    id: 2,
    nombre: 'Remo con Barra Recta',
    target: 'Densidad Media / Romboides',
    descripcion: 'Añade grosor y detalle a la espalda media. Flexiona el torso a unos 45 grados, mantén la espalda perfectamente neutra y tira de la barra en dirección hacia tu ombligo.',
    videoId: '2z8JmcrW-As',
    urlExplicativa: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
  },
  {
    id: 3,
    nombre: 'Jalón al Pecho en Polea Alta',
    target: 'Dorsal / Redondo Mayor',
    descripcion: 'Alternativa controlada a las dominadas. Inclina sutilmente el torso hacia atrás y tracciona la barra hacia la parte alta del esternón, apretando los dorsales fuertemente abajo.',
    videoId: 'djiDDuh53vY',
    urlExplicativa: 'https://www.youtube.com/watch?v=djiDDuh53vY'
  },
  {
    id: 4,
    nombre: 'Peso Muerto Convencional',
    target: 'Cadena Posterior',
    descripcion: 'El rey de la fuerza y el grosor. Mantén la barra cerca del cuerpo, activa el core y los glúteos, y tracciona con fuerza desde el suelo hasta la posición erguida.',
    videoId: 'bTqaJn0-IgM',
    urlExplicativa: 'https://www.youtube.com/watch?v=bTqaJn0-IgM'
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