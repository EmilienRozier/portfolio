<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
    gsap.to("#about", {
        opacity: 1,
        delay: 1,
        duration: 0.8,
        ease: 'power1'
    });
});
</script>

<template>
    <div id="about" class="flex items-center m-auto">
        <div class="about-text flex flex-col items-start py-10">
            <h2 class="mb-5"><span>À propos de moi</span></h2>
            <p>
                Originaire d'un petit village aux alentours de Nevers, je suis depuis toujours attiré par le monde de
                l'informatique. Je suis arrivé en MMI en ne sachant pas ce qui me plaisait le plus entre le
                développement web et la création graphique, mais au fil des mois je me suis rendu à l'évidence, je
                préfère le code.
                <br><br>
                En dehors du développement, je m'intéresse à la musique, j'aime découvrir de nouveaux morceaux et je
                joue de la guitare depuis
                plus d'une dizaine d'années. Ces activités me permettent de garder un équilibre et d'alimenter ma
                créativité dans mes projets professionnels.
            </p>
        </div>
        <div class="about-image_wrapper relative w-full my-10 overflow-hidden">
            <img src="/img/chaulgnes.jpg"
                alt="Vielle carte postale de mon village (Chaulgnes), qui donne sur l'église et le lavoir du bourg."
                style="object-fit: cover; width: 100%; height: 100%;">
        </div>
    </div>
</template>

<style scoped>
#about {
    flex-wrap: wrap;
    opacity: 0;
}

.about-text {
    width: calc(10/12 * 100%);
    margin: auto;
}

.about-image_wrapper {
    height: 230px;
}

.about-image_wrapper::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 36, 68, 0.4);
}

@media (min-width: 900px) {
    #about {
        width: calc(8/12 * 100%);
        flex-wrap: nowrap;
        gap: calc(1/12 * 100%);
    }

    .about-image_wrapper {
        margin: 15px;
        height: 400px;
        margin: 100px 0;
        border-radius: 12px;
    }
}

</style>