<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll';


// const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
// const home = await queryCollection('content').path('/').first()

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })

onMounted(() => {
    useSmoothScroll();
})
</script>

<template>
    <Nav />
    <Header />

    <section>
        <About />

        <ProjectsContent />
    </section>
    <!-- <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div> -->
</template>