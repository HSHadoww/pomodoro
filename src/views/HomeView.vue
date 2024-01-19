<template>
  <v-container >
    <v-row class="justify-between">
      <v-col></v-col>
      <v-col cols="3" class="text-center">
        <v-card class="timer-card mx-auto" elevation="3" max-width="400"
           height="200"
           image="../images/iOZIMb32gr.jpg"
           theme="dark">
          <v-card-text>
            <h1 class="title">{{ currentText }}</h1>
            <h1 class="subheading">{{ currentTime }}</h1>
          </v-card-text>
          <v-card-actions>
            <v-col cols="12" class="text-center">
            <v-btn
              class="control-btn"
              variant="text" icon="mdi-play"
              :disabled="status === STATUS.COUNTING || (currentItem.length === 0 && items.length === 0)"
              @click="startTimer"
            ></v-btn>
            <v-btn
              class="control-btn"
              variant="text" icon="mdi-pause"
              :disabled="status !== STATUS.COUNTING"
              @click="pauseTimer"
            ></v-btn>
            <v-btn
              class="control-btn"
              variant="text" icon="mdi-skip-next"
              :disabled="currentItem.length === 0"
              @click="finishTimer"
            ></v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col></v-col>
      <v-col cols="12" class="text-center">
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5adlUVCbDi96sYGUwJPoG9?utm_source=generator" width="40%" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </v-col>
    </v-row>
  </v-container>
  <v-footer
     class="bg-indigo-lighten-1 text-center d-flex flex-column"
     id="fot"
    >
     <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-7"
        :icon="icon"
        variant="text"
      ></v-btn>
     </div>
     <div class="pt-0">
     </div>
     <v-divider></v-divider>
     <div>
      {{ new Date().getFullYear() }} - <strong>好用的歡茄鐘</strong>
     </div>
    </v-footer>
</template>

<script setup>
import { useListStore } from '@/store/list'
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishedItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}

const status = ref(STATUS.STOP)

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()

  if (notify.value) {
    const { show, isSupported } = useWebNotification({
      title: '事項完成',
      body: currentItem.value,
      icon: new URL('@/assets/tomato.png', import.meta.url).href
    })
    if (isSupported.value) {
      show()
    }
  }

  setFinishedItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>
<style scoped>
.timer-card {
  max-width: 400px;
  margin: 20px;
  border-radius: 12px;
}

.title {
  font-size: 24px;
  margin-bottom: 5px;
}

.subheading {
  font-size: 40px;
  color: #fff;
  margin-top: 50px;
}

.control-btn {
  font-size: 24px;
  margin: 10px;
  color: #333;
}
#fot{
  top: 100%;

}
</style>
