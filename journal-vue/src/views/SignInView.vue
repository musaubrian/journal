<template>
    <div class="signin-container">
        <h1>OpenJournal</h1>
        <h2>Don't be afraid to share your thoughts</h2>
        <button @click="handleSignIn" class="google-signin">
        <img src="../assets/google-svgrepo-com.svg" alt="google logo">
        </button>
    </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
    methods: {
        async handleSignIn() {
            const {data, err} = await supabase
            .auth
            .signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'http://openjournal.netlify.app/thoughts'
                }
            })

            if (err) {
                alert("Could not sign in: ", err)
            }
        }
    }
}

</script>





<style>
.signin-container {
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.logo {
    width: 60%;
    height: 60%;
}

.google-signin {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid hsla(160, 100%, 37%, 1);
    background-color: transparent;
    margin-top: 2rem;
}
.signin-container h1 {
    font-size: 2.5rem;
}
</style>
