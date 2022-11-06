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
                <div class="tags">
                    <span>#{{entry.tag}}</span>
                </div>
            </div>
        </div>
        <smallButton/>
        <FooterVue />
    </div>
</template>

<script>
import { supabase } from "../supabase";
import FooterVue from "../components/Footer.vue";
import NavBarVue from "../components/NavBar.vue";
import smallButton from "../components/smallButton.vue";
export default {
    name: "HomePageView",
    components: {
        FooterVue,
        NavBarVue,
        smallButton
    },
    data() {
        return {
            entries: [],
            err: []
    }
   },
    methods: {
        checkVal(){
            if(this.entries == []){

            }
        },
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
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.content-container {
    margin-top: 2rem;
    width: 70%;
    border-radius: 20px;
    box-shadow: 4px 5px 20px var(--vt-c-divider-dark-1);
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
.tags {
    display: flex;
    width: 70%;
    justify-content: flex-end;
}
span {
    font-size: 1rem;
}
.add {
    display: none;
}
@media screen and (max-width: 650px) {
    .content-container {
        width: 90%;
    }
    .tags {
        width: 80%;
    }
    .add {
        width: 50%;
    }
}

</style>