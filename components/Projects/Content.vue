<script setup lang="ts">

const props = defineProps(['items']);

</script>

<template>
    <div id="projects" class="flex flex-wrap w-8/12 mx-auto py-20 gap-5">
        <!-- <ProjectsCard v-for="(item, index) in projects" :item="item" key="index" :index="index" /> -->
        <ProjectsCard v-for="(item, index) in items" :item="item" key="index" :index="index" />
    </div>
</template>

<style scoped>
@media (max-width: 800px) {
    #projects {
        width: calc(8/10 * 100%);
    }
}
</style>