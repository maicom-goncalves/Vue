<template>
<div>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        INICIO
      </router-link>
      <router-link to="/relogios" tag="li" active-class="active" exact>
        RELOGIOS
      </router-link>
      <router-link to="/cadastros" tag="li" active-class="active" exact>
        CADASTROS
      </router-link>
      <router-link to="/pulseiras" tag="li" active-class="active" exact>
        PULSEIRAS
      </router-link> 
    </ul>
  </nav>
  </div>
</template>
<script>


export default {
   
};
</script>
<style>
.menu ul {
    display: flex;    
    background-color: #F3FCF0;
    border: 1px solid #F3FCF0;
    list-style: none;
    padding:0;
    overflow: hidden;
    cursor: pointer;
    font-size: 3vh;
    text-align: center;
    font-family: 'Righteous', cursive;
    width: 100%;
    
}
.menu li {
    flex: 1;
}
.menu a {
    display: flex;
    justify-content: center;
    padding: 4% 5%;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;
}
.menu ul :hover {
    background-color: #1F271B;
    color: #F3FCF0;
}
.menu .active {
    background-color: #F9A620;
    color: #1F271B;
}

.menu .active a {
    color: #1F271B;
}

.menu a {
    color: #FFF;
}
</style>