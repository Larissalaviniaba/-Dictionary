<template >
  <body :class="{ 'dark-mode': darkMode }">
    <div  class="container" v-if='this.selectedFont != " "' :style="{ 'font-family': this.selectedFont }">

      <HeaderApp @sentFont="receiveFont" @sentChecked="receiveChecked"/>
      <SearchApp @sentWord="receiveWord"/>
      <span v-if='this.error != "" && this.error != null' class="error">{{this.error}}</span>

      <div class="notWord" v-if="!dataMeaning">
        Pesquise por uma palavra e descubra o seu significado.
      </div>

      <section class="section_word">
        <div v-if="dataMeaning" class="word">
          {{ this.receivedWord }}
          <p>{{this.syllables}}</p>
        </div>
        
        <MeaningWord v-for="info in dataMeaning" :key="info.etymology" :word="info" />

        <div v-if="this.synonyms && !this.error != '' " class="synonyms_word">
          <span>Sinônimo:</span>
          <p>{{this.synonyms}}</p>
        </div>

        <div v-if='dataMeaning !=null && this.etymology != undefined' class="etymology_word">
          <div class="etymology">
            <p>Etimologia</p>
            <span></span>
          </div>
          <ul>
            <li><p>{{this.etymology}}</p></li>
          </ul>
        </div>
      </section>
    </div>
  </body>
</template>

<script>
import HeaderApp from "./components/HeaderApp";
import SearchApp from "./components/SearchApp.vue";
import MeaningWord from "./components/MeaningWord.vue";
import { toRaw } from "vue";

export default {
  name: 'App',
  components: {
    HeaderApp,
    SearchApp,
    MeaningWord,
  },
  data(){
    return{
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
  methods:{
    async receiveWord(word){

      const reqMeaning = await fetch (`https://dicio-api-ten.vercel.app/v2/${word}`);
      const dataMeaning = await reqMeaning.json();
      if(dataMeaning.error){
        this.error = 'Não foi possível obter as informações da palavra.'
        this.dataMeaning = null
      }else{
        this.dataMeaning = toRaw(dataMeaning)
        this.error = ''
      }
      

      // Format first letter
      let firstLetter = word.charAt(0).toUpperCase()
      let letters = word.slice(1).toLowerCase()
      this.receivedWord = firstLetter + letters
      
      // Format result etymology
      dataMeaning.forEach(item => {
        this.etymology = item.etymology.split(").")[1]
      });


      const reqSyllables = await fetch (`https://dicio-api-ten.vercel.app/v2/silabas/${word}`);
      const dataSyllables = await reqSyllables.json();
      this.dataSyllables = toRaw(dataSyllables)

      this.syllables = ""

      // Format syllables
      dataSyllables.forEach((item, i) => { 
        if(i < dataSyllables.length -1){
          this.syllables += `${item}-`
        }else{
          this.syllables += `${item}`
        }
      });

      const reqSynonyms = await fetch (`https://dicio-api-ten.vercel.app/v2/sinonimos/${word}`);
      const dataSynonyms = await reqSynonyms.json();
      this.dataSynonyms = toRaw(dataSynonyms)

      this.synonyms = ""

      // Format synonyms
      dataSynonyms.forEach( (item, i )=>{
        if(i < dataSynonyms.length -1){
          this.synonyms += `${item}, `
        }else{
          this.synonyms += `${item}.`
        }
      })
    },
    receiveFont(font){
      this.selectedFont = font
      console.log(this.selectedFont)
    },
    receiveChecked(check){
      this.darkMode = check
    },
  },
  
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');

  *{
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
  }

  a, select, button{
      all: unset;
      cursor: pointer;
  }

  :root{
      --black: #050505;
      --very-dark-grey:#1F1F1F;
      --dark-grey:#2D2D2D;
      --lines-dark:#3A3A3A;
      --medium-grey:#757575;
      --lines-light:#E9E9E9;
      --light-grey:#F4F4F4;
      --white:#FFFFFF;
      --main-purple:#8F19E8;
      --main-red: #FF5252;
      --lua:#757575;
  }

  .dark-mode {
    --dark-grey:#FFFFFF;
    --lines-dark: #8F19E8;
    --light-grey:#1F1F1F;
    --white:#050505;
    --lua: #8F19E8;
  }

  .error{
    width: 100%;
    font-size: 12px;
    padding-left: 20px;
    font-weight: 600;
    color:var(--main-red);
    margin-top: 5px;
  }

  body{
    width: 100%;
    min-height: 100vh;
    background-color: var(--white);
  }
  .container{
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 20px;
    font-family: 'Inter';
    
  }
  .notWord{
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 20px;
    background-color: var(--white);
    color: var(--medium-grey);
  }
  .section_word{
    width: 100%;
  }

  .word{
    width: 100%;
    height: 82px;
    
    font-weight: 700;
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 20px;
    margin-top:35px;

    color: var(--dark-grey);
  }

  .word > p{
    width: 100%;
    height: 29px;

    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-top: 5px;

    color: var(--main-purple);
  }

  

  .synonyms_word{
    display: flex;
    align-items: center;
    width: 100%;
    margin: 40px 0px;
  }

  .synonyms_word > span{

    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: var(--medium-grey);
    margin-right: 7px;
  }
  .synonyms_word > p {
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 0px 4px;

    color: var(--main-purple);
  }

  .etymology{
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px ;

  }

  .etymology > p {
    width: 100%;
    height: 29px;

    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: var(--medium-grey);
    border-bottom: 2px solid var(--lines-light) ;
    padding-bottom: 5px;

  }

 ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

  }

  ul > li {
    width: 85%;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: var(--main-purple);
  }
  ul > li > p {
    font-size: 16px;
    color: var(--dark-grey);
  }

  @media only screen and (max-width: 700px) {
    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 340px;
      padding-top: 20px;
    }
    .notWord{
      width: 92%;
      font-size: 18px;
      text-align: center;
      margin-top: 30px;
    
    }
    .section_word{
      margin-left: 30px;
    }
    .etymology{
      width: 85%;
    }
    .etymology_word > ul > li{
      width: 75%;
    }
    .synonyms_word{
      display: block;
    }
  }
  
</style>
