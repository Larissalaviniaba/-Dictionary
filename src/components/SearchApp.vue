<template>
    <form @submit="selectWord">
        <input type="text" v-model="word" v-on:input="validate" placeholder="Pesquisar">
        <button @click="sendWord"><i class="ph ph-magnifying-glass ph-xl"></i></button>
    </form>
</template>
<script>

export default {
    name: 'SearchApp',
    components:{

    },
    data(){
        return{
            word: "",
        }
    },
    methods: {
        validate(e){
            this.word = e.target.value.replace(/[^a-zA-Záéíóúàèìòùâêîôûãõäëïöüç]/gi, '');
        },
        selectWord(e){
            e.preventDefault()
            if(this.word.includes(" ") || this.word.length > 46){
                console.log("Essa não é uma palavra válida")
            }else{
                this.word = ""
            }
        },
        sendWord(){
            this.$emit('sentWord', this.word)
        },
    }
}
</script>
<style scoped>

form{
    display: flex;
    position: relative;
    width: 100%;
    margin: 55px 0px 0px 0px;
}

input{
    all: unset;
    width: 100%;
    height: 50px;

    background: var(--light-grey);
    border-radius: 16px;
    padding-left: 20px;

    color:var(--dark-grey);
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
}

button{
    all: unset;
    position: relative;
    right: 40px;
    transition: 0.2s;
}
button:hover{
    transform: scale(1.29);
}

.ph {
    color:var(--main-purple);
}

@media only screen and (max-width: 700px) {
    form{
       width: 100%;
       margin-left: 25px;
    }
  }

</style>