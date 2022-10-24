<template>
    <div class="homepage">
        <!-- <button @click="fetchEntries">get data</button> -->
        <div 
        class="content-container" 
        v-for="entry in entries"
        :key="entries.id">
            <div class="entry-card">
                <h2>{{ entry.title}}</h2>
                <p>{{entry.entry}}</p>
                <div class="user">
                    <span>@{{entry.username}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { supabase } from "../supabase";
export default {
   data() {
    return {
        entries: [],
        err: []
    }
   },
    methods: {
        async fetchEntries() {
            const {data, error} = await supabase
            .from('journal_entries')
            .select()
            
            if (data) {
                this.entries = data
                console.log(data)
            } else if (error) {
                this.err = error
            }
        }
    },
    mounted: function() {
        this.fetchEntries()
    }
}
</script>
<style scoped>
.homepage {
    margin-top: 5rem;
}
.entry-card {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
h2 {
    font-size: 1.6rem;
    text-decoration: underline;
    text-transform: capitalize;
}
p {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem;
    text-align: justify;
}
.user {
    display: flex;
    width: 90%;
    justify-content: flex-end;
}
span {
    font-size: 1rem;
}

</style>