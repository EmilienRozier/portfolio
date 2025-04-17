<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    gsap.from('#header', { 
        opacity: 0,
        y: 100,
        filter: "blur(10px)",
        duration: 1,
        ease: "power1",
    });
});
</script>

<template>
    <div id="header" class="w-full p-3 pt-12">
        <div class="content-wrapper bg-primary max-w-[1600px] mx-auto rounded-2xl">
            <div id="top" class=" flex h-3/4 w-11/12 m-auto justify-start">
                <div class="p-7 text-secondary max-w-[1200px]">
                    <h1 class="mb-2">Emilien <span>Rozier</span></h1>
                    <h2 class="mb-5">Développeur <span>Full-Stack</span></h2>
                    <p class="header-text">
                        Actuellement en 3ème année de BUT MMI à Troyes, je me spécialise dans le développement web
                        full-stack.
                        Passionné par les nouvelles technologies et les défis techniques, j'aime créer des applications
                        web performantes et des interfaces utilisateur intuitives.
                        Mon parcours m'a permis d'acquérir une solide expérience dans différents langages et frameworks,
                        tant en front-end qu'en back-end.
                    </p>
                </div>
            </div>

            <div id="bottom" class="flex p-7 h-1/4 w-11/12 m-auto justify-end items-end">
                <IconsArrow />
            </div>
        </div>
    </div>
</template>

<style scoped>

#top {
    align-items: flex-end;
}

@media (min-width: 1100px) {

    .content-wrapper {
        height: 80vh;
    }

    .header-text {
        font-size: 24px;
    }

}
</style>