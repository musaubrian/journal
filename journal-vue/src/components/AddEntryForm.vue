<template>
    <div class="form-container">
        <form @submit.prevent="uploadData()">
            <h1>What's on your mind</h1>

            <input type="text" placeholder="Title" class="inputs" v-model="title" required>
            <input type="text" placeholder="tag" class="inputs" v-model="tags" required>
            <textarea rows="5" placeholder="Your thoughts" v-model="thoughts" required></textarea>

            <div class="button-container">
                <button type="submit">Upload</button>
            </div>
        </form>
    </div>

</template>

<script>
import router from '../router';
import { supabase } from '../supabase';

export default {
    data () {
        return {
            title: '',
            tags: '',
            thoughts: ''
        }
    },
    methods: {
        async uploadData() {
            const {error} = await supabase
            .from('martha')
            .insert({title: this.title, entry: this.thoughts, tag: this.tags})
            if (error === null) {
                alert("Data uploaded successfully")
                router.push("/thoughts")
            } else {
                alert(error)
            }
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
    width: 50%;
}
.inputs {
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--vt-c-divider-dark-1);
    background-color: transparent;
    font-size: 1.2rem;
    color: var(--vtc-c-white-mute);
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.inputs:focus {
    border: none;
    border-radius: 20px;
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
    background-color: #00bd7e;
}
h1 {
    text-align: center;
}

@media screen and (max-width: 900px) {
    form {
        width: 90%;
    }
}
</style>
