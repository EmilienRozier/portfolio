<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps(['item', 'index']);

const cardRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (cardRef.value) {
    gsap.from(cardRef.value, {
      opacity: 0,
      y: 30,
      delay: props.index * 0.05,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.value,
        start: 'top 90%',
        toggleActions: 'play none none'
      }
    });
  };
});
</script>

<template>
    <div ref="cardRef" class="card bg-secondary p-5 rounded-xl w-full">
        <h3 class="mb-5"><span>{{ item.title }}</span></h3>
        <p id="desc" class="max-w-2/3">
            {{ item.desc }}
        </p>
        <div class="flex gap-1 mt-3">
            <div class="bg-primary text-white/75 px-2 rounded-full text-[13px]" v-for="tag in item.tags" key="index">
                {{ tag }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    opacity: 1;
}

@media (min-width: 800px) {
    .card {
        transition: 0.5s;
        width: 100%;
    }

    .card:hover {
        transform: scale(1.01);
    }
}
</style>