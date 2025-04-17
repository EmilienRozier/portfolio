<script setup lang="ts">
// const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())

// console.log(projects)

const projects = ref([
    {
        title: 'Portfolio interactif',
        desc: "Conception et développement d'un portfolio créatif avec des animations avancées et une expérience utilisateur immersive, optimisé pour les performances.",
        tags: ['Nuxtjs', 'GSAP', 'Lenis']
    },
    {
        title: "Création d'un site type blog",
        desc: "L'année dernière j'ai commencé à développer une petite application afin de créer son propre article de blog à la façon de Medium. J'ai commencé ce projet en Next.js et Mongodb, ce projet avait pour but de pouvoir se créer une page afin de partager du contenu",
        tags: ['React', 'Nextjs', 'MongoDB']
    },
    {
        title: 'Portfolio interactif',
        desc: "Conception et développement d'un portfolio créatif avec des animations avancées et une expérience utilisateur immersive, optimisé pour les performances.",
        tags: ['Nuxtjs', 'GSAP', 'Lenis']
    }
]);

</script>

<template>
    <div id="projects" class="flex flex-wrap w-8/12 mx-auto py-20 gap-5">
        <ProjectsCard v-for="(item, index) in projects" :item="item" key="index" :index="index" />
    </div>
</template>

<style scoped>
@media (max-width: 800px) {
    #projects {
        width: calc(8/10 * 100%);
    }
}
</style>