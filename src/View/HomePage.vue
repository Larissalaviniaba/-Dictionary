<template >
    <body :class="{ 'dark-mode': darkMode }">
        <div class="container" v-if='this.selectedFont != " "' :style="{ 'font-family': this.selectedFont }">

            <HeaderApp @sentFont="receiveFont" @sentChecked="receiveChecked" />
            <SearchApp @sentWord="receiveWord" />
            <span v-if='this.error != "" && this.error != null' class="error">{{ this.error }}</span>

            
            <section class="section_word">
                <div class="word">
                    {{ this.receivedWord }}
                    <p>{{ this.syllables }}</p>
                </div>

                <MeaningWord v-for="info in dataMeaning" :key="info.etymology" :word="info" />
                <SynonymsWord v-if="this.synonyms && !this.error != ''" :synonymsData="synonyms" :errorData="error" />
                <EtymologyWord v-if='dataMeaning != null && this.etymology != undefined' :etymologyData="etymology" />
                <InitialPage v-if="!dataMeaning"/>
            </section>
        </div>
    </body>
</template>
  
<script>
import { toRaw } from "vue";
import HeaderApp from "../components/HeaderApp";
import SearchApp from "../components/SearchApp";
import MeaningWord from "../components/MeaningWord";
import EtymologyWord from "../components/EtymologyWord";
import SynonymsWord from "../components/SynonymsWord";
import InitialPage from "../components/InitialPage";
import { fetchMeaning, fetchSyllables, fetchSynonyms } from "../service/apiService"
import formatListWithSeparator from "../utils/formatListWithSeparator";
import formatFirstLetter from "../utils/formatFirstLetter";
import dataMock from '../data/dataMock';

export default {
    name: 'HomePage',
    components: {
        HeaderApp,
        SearchApp,
        MeaningWord,
        EtymologyWord,
        SynonymsWord,
        InitialPage
    },
    data() {
        return {
            receivedWord: "",
            dataMeaning: null,
            dataSynonyms: null,
            synonyms: "",
            dataSyllables: null,
            syllables: "",
            etymology: "",
            selectedFont: "",
            darkMode: false,
            error: "",
        }
    },
    methods: {
        async receiveWord(word) {
            try {
                const [meaningRequest, syllablesRequest, synonymsRequest] = await Promise.all([
                    fetchMeaning(word),
                    fetchSyllables(word),
                    fetchSynonyms(word)
                ]);

                this.dataMeaning = toRaw(meaningRequest);
                this.dataSyllables = toRaw(syllablesRequest);
                this.dataSynonyms = toRaw(synonymsRequest);

                this.error = '';
            } catch (error) {
                this.dataMeaning = null
                this.error = error.message;
            }

            // Taking simulated data
            if (this.dataMeaning == null) {
                this.receivedWord = 'Livro'
                this.error = ''
                this.dataMeaning = dataMock;
            }

            // this.formatReceivedWord(word);
            this.formatEtymology(this.dataMeaning);
            this.formatSyllables();
            this.formatSynonyms();
        },
        formatReceivedWord(word) {
            this.receivedWord = formatFirstLetter(word);
        },
        formatEtymology(data) {
            data.forEach(item => {
                this.etymology = item.etymology.split(").")[1]
            });
        },
        formatSyllables() {
            this.syllables = formatListWithSeparator(this.dataSyllables, '-')
        },
        formatSynonyms() {
            this.synonyms = formatListWithSeparator(this.dataSynonyms, ',')
        },
        receiveFont(font) {
            this.selectedFont = font
            console.log(this.selectedFont)
        },
        receiveChecked(check) {
            this.darkMode = check
        },
    },

}
</script>
  
<style>

body {
    width: 100%;
    min-height: 100vh;
    background-color: var(--white);
}

.container {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 20px;
    font-family: 'Inter';

}

.section_word {
    width: 100%;
}

.word {
    width: 100%;
    height: 82px;

    font-weight: 700;
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 20px;
    margin-top: 35px;

    color: var(--dark-grey);
}

.word>p {
    width: 100%;
    height: 29px;

    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-top: 5px;

    color: var(--main-purple);
}

@media only screen and (max-width: 700px) {
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 340px;
        padding-top: 20px;
    }

    .section_word {
        margin-left: 30px;
    }
}
</style>
  