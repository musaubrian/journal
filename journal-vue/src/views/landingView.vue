<template>
    <div class="signin-container">
        <h1>OpenJournal</h1>
        <h2>Don't be afraid to share your thoughts</h2>
        <RouterLink to="/signin" class="google-signin">
            <button>
                sign in
            </button>
        </RouterLink>
    </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
    data(){
        return {
            supabaseResponse: ''
        }
    },
    methods: {
        async handleSignIn() {
            const {data, err} = await supabase
            .auth
            .signInWithOAuth({
                provider: 'google'
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
    padding: 1rem;
}
.logo {
    width: 60%;
    height: 60%;
}

.google-signin {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.google-signin button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid hsla(160, 100%, 37%, 1);
    background-color: transparent;
    color: #00bd7e;
}
.signin-container h1 {
    font-size: 2.5rem;
}
.redirec {
    font-size: 1.7rem;
}

@media screen and (max-width: 700px){
    .google-signin {
        width: 50%;
    }
}
</style>
