<template>
    <div class="homepage">
        <h1>homepage</h1>
        <button @click="fetchEntries">get data</button>
        <div 
        class="content-container" 
        v-for="entry in entries"
        :key="entries.id">
            <div class="test">
                <h1>{{ entry.title}}</h1>
            </div>
        </div>
    </div>
</template>

<!-- <script setup>
import { supabase } from "../supabase";

const fetchEntries = async () => {
    const {data, error} = await supabase
    .from('journal_entries')
    .select()

    if (error) {
        console.log(error)
    }
    if (data) {
        const entryData = data
        console.log(entryData)
    }

}
</script> -->

<script>
import { supabase } from "../supabase";
export default {
   data() {
    return {
        entries: []
    }
   },
    methods: {
        async fetchEntries() {
            const {data, error} = await supabase
            .from('journal_entries')
            .select()
            
            if (data) {
                console.log(data)
            }
            if (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>
.homepage {
    margin-top: 5rem;
}
</style>