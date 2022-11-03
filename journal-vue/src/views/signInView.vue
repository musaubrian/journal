<template>
    <div class="sign-in">
        <div class="form-container">
            <form @submit.prevent="signIn()">
                <h1>OpenJournal</h1>
                <h1>Sign In</h1>

                <input type="text" placeholder="email" class="inputs" v-model="email" required>
                <input type="password" placeholder="password" class="inputs" v-model="password" required>

                <p>Don't have an account <RouterLink to="/signup">sign up</RouterLink></p>
                <div class="button-container">
                    <button type="submit">Sign in</button>
                </div>                
            </form>
        </div>
    </div>
</template>

<script>
import router from '../router';
import { supabase } from '../supabase';

export default {
    data () {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        validatePassword(){
            if (this.password < 6) {
                alert("Password should be longer than 6 characters")
            }
        },
        async signIn(){
            this.validatePassword()
            const {error, data} = await supabase.auth.signInWithPassword({
                email: this.email,
                password: this.password
            })
            if (data){
                router.push("/thoughts")
            }
            if (error){
                alert("Error encountered", error)
                router.push("/signin")
            }
        }
    }
}

</script>

<style>
.sign-in {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-container p {
    text-align: center;
}



</style>