<template >

  <HomePage/>
  
</template>

<script>
import HomePage from './View/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

a,
select,
button {
  all: unset;
  cursor: pointer;
}

:root {
  --black: #050505;
  --very-dark-grey: #1F1F1F;
  --dark-grey: #2D2D2D;
  --lines-dark: #3A3A3A;
  --medium-grey: #757575;
  --lines-light: #E9E9E9;
  --light-grey: #F4F4F4;
  --white: #FFFFFF;
  --main-purple: #8F19E8;
  --main-red: #FF5252;
  --lua: #757575;
}

.dark-mode {
  --dark-grey: #FFFFFF;
  --lines-dark: #8F19E8;
  --light-grey: #1F1F1F;
  --white: #050505;
  --lua: #8F19E8;
}

.error {
  width: 100%;
  font-size: 12px;
  padding-left: 20px;
  font-weight: 600;
  color: var(--main-red);
  margin-top: 5px;
}
</style>
