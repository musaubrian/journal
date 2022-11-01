<template>
    <div class="sign-in">
        <div class="form-container">
            <form @submit.prevent="uploadData()">
                <h1>OpenJournal</h1>
                <h1>Sign In</h1>

                <input type="text" placeholder="email" class="inputs" v-model="email" required>
                <input type="text" placeholder="password" class="inputs" v-model="password" required>

                <p>Don't have an account <RouterLink to="/signup">sign up</RouterLink></p>
                <div class="button-container">
                    <button type="submit">Upload</button>
                </div>                
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style>
.sign-in {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-container p {
    text-align: center;
}



</style>