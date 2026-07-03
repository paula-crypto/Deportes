<template>
  <div class="video-container">
    <div v-if="!loaded && !hasError" class="video-loading">
      <q-spinner-dots color="white" size="30px" />
      <div class="loading-text">Cargando video...</div>
    </div>

    <div v-else-if="!hasError" class="video-wrapper">
      <iframe
        :src="video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="width: 100%; height: 100%; border: none;"
      ></iframe>
    </div>

    <div v-else class="video-unavailable">
      <div class="unavailable-title">Video no disponible</div>
      <div class="unavailable-text">Este video no se puede cargar actualmente. Usa el enlace de explicación o abre el video directamente en YouTube.</div>
      <q-btn dense flat color="primary" :href="videoUrl" target="_blank" rel="noreferrer">Abrir video en YouTube</q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Video de ejercicio',
  },
})

const loaded = ref(false)
const hasError = ref(false)
const videoUrl = `https://www.youtube.com/watch?v=${props.videoId}`
const embedUrl = `https://www.youtube.com/embed/${props.videoId}`

function onLoad() {
  loaded.value = true
}

function onError() {
  hasError.value = true
}
</script>

<style scoped>
.video-container {
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-loading,
.video-unavailable {
  width: 100%;
  min-height: 220px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 20px;
  width: 100%;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.unavailable-title {
  font-weight: 700;
  font-size: 1rem;
}

.unavailable-text {
  color: #d1d5db;
  line-height: 1.5;
  max-width: 320px;
}

.loading-text {
  color: #d1d5db;
}
</style>
