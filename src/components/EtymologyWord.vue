<template>
    <div v-if="etymologyData !== null" class="etymology_word">
        <div class="etymology">
            <p>Etimologia</p>
            <span></span>
        </div>
        <ul>
            <li>
                <p>{{ etymologyData }}</p>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'EtymologyWord',
    props: {
        etymologyData: {
            type: String,
            required: true
        }
    }
}
</script>
  
<style>
.etymology {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;

}

.etymology>p {
    width: 100%;

    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: var(--medium-grey);
    border-bottom: 2px solid var(--lines-light);
    padding-bottom: 5px;

}

ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

}

ul>li {
    width: 85%;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: var(--main-purple);
}

ul>li>p {
    font-size: 16px;
    color: var(--dark-grey);
}

@media only screen and (max-width: 700px) {

    .etymology {
        width: 85%;
    }

    .etymology_word>ul>li {
        width: 75%;
    }
}
</style>