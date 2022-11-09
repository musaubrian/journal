<template>
    <NavBarVue />
    <div class="homepage">
        <div class="content-container" v-for="entry in entries" :key="entries.id">
            <div class="entry-card">
                <h2>{{ entry.title }}</h2>
                <p>{{ entry.entry }}</p>
                <div class="tags">
                    <span>#{{ entry.tag }}</span>
                    <i class="material-icons" @click="deleteRecord(entry.id)">delete</i>
                </div>
            </div>
        </div>
        <smallButton />
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
            err: [],
            to_delete: []
        }
    },
    methods: {
        async fetchEntries() {
            const { data, error } = await supabase
                .from('journal_entries')
                .select()

            if (data) {
                this.entries = data
            } else if (error) {
                this.err = error
                alert("Error: ", this.err)
            }
        },
        async deleteRecord(id) {
            const { error } = await supabase
                .from("journal_entries")
                .delete()
                .eq('id', id)
            console.log(this.entries)
            if (error) {
                alert("couldn't delete record")
            }
            window.location.reload()
        },
    },
    mounted: function () {
        this.fetchEntries()
    }
}
</script>
<style scoped>
.homepage {
    margin-top: 5rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.content-container {
    margin-bottom: 3rem;
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

.material-icons {
    padding-left: 1.5rem;
    cursor: pointer;
    color: #f01616;
}

.tags {
    display: flex;
    width: 70%;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.3rem;
}

.delete-icon {
    width: 40%;
}

.delete-icon img {
    width: 30%;
    color: white;
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