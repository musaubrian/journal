<template>
    <NavBarVue />
    <div class="homepage">
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
        <FooterVue />
    </div>
</template>

<script>
import { supabase } from "../supabase";
import FooterVue from "../components/Footer.vue";
import NavBarVue from "../components/NavBar.vue";
export default {
    name: "HomePageView",
    components: {
        FooterVue,
        NavBarVue
    },
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
            } else if (error) {
                this.err = error
                alert("Error: ", this.err)
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.content-container {
    width: 70%;
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
    width: 50%;
    justify-content: flex-end;
}
span {
    font-size: 1rem;
}
@media screen and (max-width: 650px) {
    .content-container {
        width: 90%;
    }
    .user {
        width: 80%;
    }
}

</style>