<template>
    <div class="form-container">
        <form action="">
            <h1>What's on your mind</h1>

            <input type="text" placeholder="Title" class="inputs" v-model="name">
            <input type="text" placeholder="@madeupname" class="inputs" v-model="author">
            <textarea rows="5" placeholder="Your thoughts" v-model="thoughts"></textarea>

            <div class="button-container">
                <button>Upload</button>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    data () {
        return {
            name: '',
            author: '',
            thoughts: ''
        }
    }
}
</script>

<style>
.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
form {
    width: 80%;
}
.inputs {
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--vt-c-divider-dark-1);
    background-color: transparent;
    font-size: 1.3rem;
    color: var(--vtc-c-white-mute);
    padding: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
textarea {
    margin-top: 1rem;
    background-color: transparent;
    border: 2px solid var(--vt-c-divider-dark-1);
    border-radius: 20px;
    padding: 1rem;
    color: var(--vtc-c-white-mute);
    font-size: 1.2rem;
    width: 100%;
}
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}
button {
    width: 50%;
    border-radius: 20px;
    padding: 1rem;
    border: none;
    font-size: 1.3rem;
    font-weight: 550;
    background-color: hsla(160, 100%, 37%, 1);
}
</style>
