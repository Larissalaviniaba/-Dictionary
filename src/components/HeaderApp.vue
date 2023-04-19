<template>
    <header>
        <div class="icon_dictionary">
            <img src="../assets/iconoir_book.png" alt="">
        </div>
        <form class="select_font">
            <select @change="sendFont" name="font" id="font">
                <option value="Sans Serif">Sans Serif</option>
                <option selected value="Inter">Inter</option>
                <option value="Lora">Lora</option>
                <option value="Inconsolata">Inconsolata</option>
            </select>
        </form>
        <div class="btn_theme">
            <input type="checkbox" v-model="isChecked" @change="checkboxChanged" id="darkmode-toggle"/>
            <label for="darkmode-toggle"></label>
            <i class="ph ph-moon ph-xl"></i>
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderApp',
    components: {

    },

    data() {
        return {
        isChecked: false,
        };
    },
    methods: {
        checkboxChanged() {
            this.$emit('sentChecked', this.isChecked)
        },
        sendFont(font){
            this.$emit('sentFont', font.target.value)
        }
    }
} 
</script>

<style scoped>
    header{
        display: flex;
        width: 100%;
        height: 36.5px; 
    }
    .icon_dictionary{
        display: flex;
        align-items: center;
        width: 50%;
    }
    .select_font{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        margin-right: 25px;

    }
    #font{
        border: none;
        width: 100%;
        height: 30px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url('../assets/Path.png');
        background-repeat: no-repeat;
        background-position: right ;
        background-size: 9px 9px;
        padding-right: 10px; 
        font-size: 18px;
        color: var(--dark-grey);
        background-color: var(--white);
    }
    #font:focus {
        outline: none;
    }
    option{
        font-weight: 700;
        font-size: 14px;
        border: none;
    }
    .btn_theme{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13%;
        border-left: 2px solid var(--lines-light) ;
        padding-left: 17px;
    }
    .btn_theme > label {
        width:100%;
        height:20px;
        position: relative;
        display: block;
        background-color: var(--medium-grey);
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0,0,0,0.), inset 0px -5px 15px rgba(255,255,255,0.4);
        cursor: pointer;
        margin-right: 10px;
    }
    .btn_theme > label:after {
        content: "";
        width:14px;
        height: 14px;
        position: absolute;
        top:3px;
        left:4px;
        background-color: var(--white);
        border-radius: 14px;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    }
    .btn_theme > input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    .btn_theme > input:checked + label {
        background: var(--main-purple);
    }
    .btn_theme > input:checked + label:after {
        left:26px;
        transform: translateX(-10%);
        background: var(--white);
    }
    .btn_theme > label, label:after {
        transition: 0.3s
    }
    .btn_theme > label:active:after{ 
        width: 14px; 
    }
    .btn_theme > .ph {
        color:var(--lua);
        margin-left: 10px;
        margin-bottom: 2px;
    }

    @media only screen and (max-width: 700px) {
        header{
            margin-left: 30px;
            margin-top: 10px;
        }
        .icon_dictionary{
            width: 15%;
        }
        .select_font{
            width: 36%;
    
        }
        .btn_theme{
            width: 30%;
        }
        .btn_theme > input:checked + label:after {
            left:23px;
        }
        
      }

</style>