<template>
    <div class="fixed flex w-full h-10 justify-center items-center z-10 color-primary">
        <ul class="flex w-9/10 lg:w-1/2 justify-around backdrop-blur-xl h-full items-center mt-3 px-10 rounded-full">
            <li>
                <NuxtLink to="#header">Accueil</NuxtLink>
            </li>
            <li>
                <NuxtLink to="#about">À propos</NuxtLink>
            </li>
            <li>
                <NuxtLink to="#projects">Projets</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/file/CV-Emilien_Rozier.pdf" external>CV</NuxtLink>
            </li>
            <!-- <li>
                <NuxtLink to="#">Contact</NuxtLink>
            </li> -->
        </ul>
    </div>
</template>

<style scoped>
ul {
    font-size: large;
    /* border: solid rgb(190, 190, 190) 1px; */
}

ul li {
    mix-blend-mode: difference;
}

ul li a {
    transition: 0.2s;
}

ul li a:hover {
    color: rgb(206, 206, 206);
}
</style>