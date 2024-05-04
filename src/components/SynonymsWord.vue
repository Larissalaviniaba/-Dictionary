<template>
    <div v-if="synonymsData && !errorData" class="synonyms_word">
        <span>Sinônimo:</span>
        <p>{{ synonymsData }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'SynonymsWord',
    props: {
        synonymsData: {
            type: String,
            required: true
        },
        errorData: {
            type: Boolean,
            required: true
        }
    }
}
</script>
  
<style>
.synonyms_word {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 40px 0px;
}

.synonyms_word>span {

    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: var(--medium-grey);
    margin-right: 7px;
}

.synonyms_word>p {
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 0px 4px;

    color: var(--main-purple);
}

@media only screen and (max-width: 700px) {

    .synonyms_word {
        display: block;
    }
}
</style>