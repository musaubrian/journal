<script setup>
    import AddEntryFormVue from '../components/AddEntryForm.vue';
    import NavBarVue from '../components/NavBar.vue';
</script>

<template>
    <NavBarVue/>
    <div class="entryview">
        <AddEntryFormVue />
    </div>
</template>

<style scoped>
.entryview {
    margin-top: 5rem;
}
</style>