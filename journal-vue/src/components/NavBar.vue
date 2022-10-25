<script setup>
import { RouterLink } from 'vue-router';
import { supabase } from '../supabase';
</script>

<template>
    <nav>
        <div>
            <ul class="links">
                <li>
                    <RouterLink to="/thoughts">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/entry">Add</RouterLink>
                </li>
                <li class="signout" @click="handleSignOut">
                    signout
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>

import { supabase } from '../supabase';
import router from '../router';
export default {
    data() {
        return {
            userLoggedIn: true
        }
    },
    methods: {
        async handleSignOut() {
            const {err} = await supabase
            .auth.signOut()
            .then(
                this.userLoggedIn = false
            )
            if (this.userLoggedIn === false) {
                router.push("/")
            }
            if (err) {
                alert("Error: ", err)
            }
        }
    }
}
</script>

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
    justify-content: space-evenly;
    align-items: center;
}
li,
.signout {
    font-size: 1.4rem;
    padding-left: 1rem;
    cursor: pointer;
    color: #00bd7e;
}
a:hover {
    transition: 650ms;
    text-decoration: overline;
    font-size: 1.5rem;
}
</style>