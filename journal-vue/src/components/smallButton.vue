<template>
    <div class="button-container">
        <RouterLink to="/entry" class="button">
            <i class="material-icons">add</i>
        </RouterLink>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.button-container {
    display: none;
}

@media screen and (max-width: 650px) {
    .button-container {
        display: flex;
        justify-content: flex-end;
        position: fixed;
        bottom: 0;
        margin-bottom: 2rem;
        width: 90%;
    }
    .button {
        width: auto;
        height: auto;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(0, 189, 126, 0.795);
    }
    .material-icons {
        color: var(--vt-c-text-dark-1);
    }
}
</style>