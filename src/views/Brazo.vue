<template>
  <q-page class="q-py-xl q-px-lg flex justify-center">
    <div style="max-width: 1400px; width: 100%;">
      
      <div class="q-mb-xl row items-center justify-between no-wrap page-header-nexus animated fadeIn">
        <div>
          <div class="row items-center q-gutter-x-sm">
            <q-icon name="bolt" class="text-nexus-cyan text-h3" />
            <h2 class="text-h3 text-weight-bolder q-ma-none tracking-tight text-white">
              ENTRENAMIENTO DE <span class="text-nexus-cyan">BRAZOS</span>
            </h2>
          </div>
          <p class="text-subtitle1 text-slate-400 q-mt-sm q-mb-none">
            Protocolo de aislamiento de alta eficiencia enfocado en la hipertrofia de Bíceps y Tríceps.
          </p>
        </div>
        <q-chip class="bg-nexus-cyan text-black text-weight-bolder q-px-md" :label="`${ejercicios.length} EJERCICIOS`" />
      </div>

      <div class="row q-col-gutter-xl">
        <div 
          v-for="ejercicio in ejercicios" 
          :key="ejercicio.id" 
          class="col-12 col-md-6 flex items-stretch animated fadeInUp"
        >
          <q-card flat class="nexus-card full-width flex column justify-between overflow-hidden">
            
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

            <q-card-section class="q-pa-xl flex-grow-1">
              <div class="row justify-between items-center q-mb-md">
                <div class="text-h5 text-weight-bold text-white tracking-wide">{{ ejercicio.nombre }}</div>
                <q-chip 
                  dense 
                  :color="ejercicio.target === 'Bíceps' ? 'cyan-10' : 'blue-10'" 
                  text-color="white" 
                  class="text-caption text-weight-bold q-px-sm" 
                  :label="ejercicio.target" 
                />
              </div>
              <p class="text-slate-300 text-body2 line-height-relaxed q-ma-none">
                {{ ejercicio.descripcion }}
              </p>
            </q-card-section>

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
// Matriz de datos optimizada: Contiene tus textos y los IDs de video limpios de YouTube
const ejercicios = [
  {
    id: 1,
    nombre: 'Curl con Barra Recta',
    target: 'Bíceps',
    descripcion: 'El constructor de masa definitivo para la porción frontal del brazo. Mantén una base de sustentación sólida, bloquea la columna para evitar balanceos tramposos y prioriza la fase de bajada lenta (excéntrica) para romper más fibras.',
    videoId: 'kwG2ipFRgfo',
    volumen: '4 Series x 10-12 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=kwG2ipFRgfo'
  },
  {
    id: 2,
    nombre: 'Extensión en Polea Alta',
    target: 'Tríceps',
    descripcion: 'Aislamiento quirúrgico para las cabezas lateral y larga del tríceps. Posiciona tus codos firmes y pegados a las costillas, inclina levemente el torso hacia adelante para mejorar la palanca y ejecuta una extensión explosiva hacia abajo.',
    videoId: 'wFSm8-xav7w',
    volumen: '4 Series x 12 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=wFSm8-xav7w'
  },
  {
    id: 3,
    nombre: 'Curl Martillo Alterno',
    target: 'Bíceps',
    descripcion: 'Excelente variante con agarre neutro enfocado en desarrollar el músculo braquiorradial y braquial. Esto incrementará notablemente el grosor lateral de tus brazos y optimizará la fuerza general de agarre.',
    videoId: 'oRaMOCSKFeE',
    volumen: '3 Series x 12 Reps',
    urlExplicativa: 'https://www.youtube.com/watch?v=oRaMOCSKFeE'
  },
  {
 
  id: 4,
  nombre: 'Fondos en Paralelas / Banco',
  target: 'Tríceps',
  descripcion: 'Ejercicio compuesto de empuje de alta demanda. Al bajar, mantén el torso lo más vertical posible para evitar que el pectoral se robe el esfuerzo, obligando a los tríceps a empujar todo tu peso corporal.',
  videoId: '2z8JmcrW-As',  
  volumen: '3 Series x Al Fallo',
  urlExplicativa: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
  }
]
</script>

<style scoped>
/* Variables locales de soporte */
.text-nexus-cyan { color: #00f0ff !important; }
.bg-nexus-cyan { background-color: #00f0ff !important; }
.text-slate-300 { color: #cbd5e1; }
.text-slate-400 { color: #94a3b8; }
.line-height-relaxed { line-height: 1.65; }

/* Contenedor del video cinematográfico */
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: #000;
}

/* Separador sutil brillante antes de los botones inferiores */
.border-top-glow {
  border-top: 1px solid rgba(0, 240, 255, 0.05);
  padding-top: 16px !important;
}

/* Estilo del nuevo botón de acción técnica */
.btn-nexus-action {
  color: #00f0ff !important;
  background: rgba(0, 240, 255, 0.03);
  border: 1px solid rgba(0, 240, 255, 0.15);
  border-radius: 8px;
  padding: 4px 16px;
  transition: all 0.3s ease;
}

.btn-nexus-action:hover {
  background: rgba(0, 240, 255, 0.1) !important;
  border-color: #00f0ff;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
}

/* Animaciones sutiles de entrada */
.animated {
  animation-duration: 0.6s;
  animation-fill-mode: both;
}
.fadeIn {
  animation-name: fadeIn;
}
.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>