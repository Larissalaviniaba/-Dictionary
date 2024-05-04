<template>
    <div class="notWord">
        Pesquise por uma palavra e descubra o seu significado.
    </div>
</template>
  
<script>
export default {
    name: 'InitialPage',
}
</script>
  
<style>
.notWord {
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

@media only screen and (max-width: 700px) {

    .notWord {
        width: 92%;
        font-size: 18px;
        text-align: center;
        margin-top: 30px;

    }
}
</style>