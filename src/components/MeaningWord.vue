<template>
    <div>
        <div v-if="formatLetter" class="class_word">
            <p>{{formatLetter}}</p>
            <span></span>
        </div>
        <div class="meaning_word">
            <ul v-for="meaning in word.meanings" :key="meaning.etymology" name="meaning">
              <li><p>{{meaning}}</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MeaningWord',
    props: {
        word: null,


    },
    data(){
        return{
            formatedLetter:  "",
        }
    },
    computed:{
        formatLetter(){
            let firstLetter = ""
            let letters = ""
            if(this.word.partOfSpeech != null || this.word.partOfSpeech != ""){
                firstLetter = this.word.partOfSpeech.charAt(0).toUpperCase()
                letters = this.word.partOfSpeech.slice(1).toLowerCase()
            }
            return firstLetter + letters   
        }, 
    }
}
</script>
<style scoped>
.class_word{
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;

  }

  .class_word > p {
    width: 100%;

    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-top: 50px;
    border-bottom: 2px solid var(--lines-light) ;
    padding-bottom: 5px;

    color: var(--medium-grey);
  }

  .meaning_word{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }
  
  .meaning_word > ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-top:10px;

  }

  .meaning_word > ul > li {
    width: 85%;

    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: var(--main-purple);
  }
  .meaning_word > ul > li > p {
    margin: 4px;
    font-size: 16px;
    color: var(--dark-grey);
  }

  @media only screen and (max-width: 700px) {
    .meaning_word > ul > li {
        text-align: start;
        width: 75%;
        
    }
    .class_word > p {
        width: 85%;
    }
  }
</style>