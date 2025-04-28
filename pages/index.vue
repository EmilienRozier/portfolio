<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll';

const projects = await queryCollection('projects').all();

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

        <ProjectsContent :items="projects" />
    </section>
    <!-- <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div> -->
</template>