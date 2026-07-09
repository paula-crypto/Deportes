<template>
  <q-page class="q-py-xl q-px-md flex flex-center">
    <div style="max-width: 1400px; width: 100%;">
      
      <div class="text-center q-mb-xl">
        <h1 class="text-h2 text-weight-bolder q-ma-none tracking-tight">
          SISTEMA DE <span class="text-cyan-glow text-italic">RENDIMIENTO</span>
        </h1>
        <p class="text-subtitle1 text-grey-5 text-uppercase q-mt-sm letter-spacing-custom">
          Selecciona un módulo de entrenamiento optimizado
        </p>
      </div>

      <div class="row q-col-gutter-xl">
        <div 
          v-for="modulo in modulos" 
          :key="modulo.id" 
          class="col-12 col-sm-6 col-md-3 flex items-stretch"
        >
          <q-card class="nexus-card text-center q-pa-lg full-width flex column justify-between">
            <q-card-section class="q-pa-none">
              
              <div class="row justify-center q-mb-sm">
                <q-chip outline size="sm" text-color="blue-3" label="Hipertrofia Activa" style="border-color: rgba(0, 240, 255, 0.2);" />
              </div>
              
              <div class="text-h5 text-weight-bold q-mb-md tracking-wider text-white">{{ modulo.nombre }}</div>
              <p class="text-grey-4 text-body2 q-px-xs">{{ modulo.descripcion }}</p>
            </q-card-section>
            
            <q-card-actions align="center" class="q-pa-none q-mt-xl">
              <q-btn 
                label="Abrir Módulo" 
                :to="modulo.ruta" 
                class="bg-cyan-btn text-black text-weight-bolder full-width q-py-sm" 
                unelevated
                no-caps
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
const modulos = [
  { id: 1, nombre: 'BRAZOS', descripcion: 'Desarrollo analítico de Bíceps, Tríceps y flexores del antebrazo.', ruta: '/brazo' },
  { id: 2, nombre: 'PIERNAS', descripcion: 'Optimización de cadena anterior y posterior para fuerza base.', ruta: '/pierna' },
  { id: 3, nombre: 'PECHO', descripcion: 'Estímulo de fibras superiores, medias e inferiores del pectoral.', ruta: '/pecho' },
  { id: 4, nombre: 'ESPALDA', descripcion: 'Amplitud de dorsales, tracción y estabilización escapular.', ruta: '/espalda' }
]
</script>

<style scoped>
.letter-spacing-custom { letter-spacing: 2px; }
.bg-cyan-btn {
  background-color: #00f0ff !important;
  transition: background-color 0.3s ease;
}
.bg-cyan-btn:hover {
  background-color: #00b8cc !important;
}
</style>