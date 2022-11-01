<template>
    <div class="sign-in">
        <div class="form-container">
            <form @submit.prevent="signUp()">
                <h1>OpenJournal</h1>
                <h1>Sign Up</h1>

                <input type="text" placeholder="email" class="inputs" v-model="email" required>
                <input type="password" placeholder="password" class="inputs" v-model="password" required>

                <p>Don't have an account <RouterLink to="/signin">sign in</RouterLink></p>
                <div class="button-container">
                    <button type="submit">Sign up</button>
                </div>                
            </form>
        </div>
    </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
    data () {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        validatePassword () {
            if(this.password < 6){
                alert("password should be longer than 6 characters")
            }
        },
        async signUp() {
            this.validatePassword()
            const {error} = await supabase.auth.signUp({
                email: this.email,
                password: this.password
            })
            if (error){
                alert(error)
            } else {
                alert("Check your email")
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