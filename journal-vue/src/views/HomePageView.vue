<template>
    <div class="homepage">
        <h1>homepage</h1>
        <button @click="fetchEntries">get data</button>
    </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { ref } from "vue";

// const [fetchError, setFetchError] = ref(null)
// const [journalEntries, setJournalEntries] = ref(null)

const fetchEntries = async () => {
    const {data, error} = await supabase
    .from('journal_entries')
    .select()

    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
    }

}
</script>

<style scoped>
.homepage {
    margin-top: 5rem;
}
</style>