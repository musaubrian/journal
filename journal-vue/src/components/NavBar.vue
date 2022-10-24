<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <div>
            <ul class="links">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/entry">Add</RouterLink>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #181818c7;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(1);
}
div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.links {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    list-style: none;
    justify-content: center;
    align-items: center;
}
li {
    font-size: 1.4rem;
    padding-left: 1rem;
}
a:hover {
    transition: 650ms;
    text-decoration: overline;
    font-size: 1.5rem;
}
</style>