<template>
  <q-layout view="lHh Lpr lFf" class="text-white">
    <q-header elevated class="bg-black" style="border-bottom: 2px solid rgba(0, 240, 255, 0.2);">
      
      <q-toolbar class="justify-center q-py-md">
        <q-toolbar-title class="text-h4 text-weight-bolder text-tracking-spaced text-white text-center">
          NEXUS<span class="text-cyan-glow">FIT</span>
        </q-toolbar-title>
      </q-toolbar>

      <div class="nav-scroll-container">
        <div class="row no-wrap justify-start justify-sm-center q-gutter-x-md q-px-lg q-pb-md">
          <q-btn flat no-caps label="Dashboard" to="/" active-class="tab-active" class="nav-btn" />
          <q-btn flat no-caps label="Brazos" to="/brazo" active-class="tab-active" class="nav-btn" />
          <q-btn flat no-caps label="Piernas" to="/pierna" active-class="tab-active" class="nav-btn" />
          <q-btn flat no-caps label="Pecho" to="/pecho" active-class="tab-active" class="nav-btn" />
          <q-btn flat no-caps label="Espalda" to="/espalda" active-class="tab-active" class="nav-btn" />
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.nav-scroll-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
/* Ocultar la barra física de scroll */
.nav-scroll-container::-webkit-scrollbar { display: none; }
.nav-scroll-container { -ms-overflow-style: none; scrollbar-width: none; }

.nav-btn {
  color: #64748b;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;
}

.tab-active {
  color: #00f0ff !important;
  font-weight: 700;
  border-bottom: 2px solid #00f0ff;
  border-radius: 0px;
}
</style>