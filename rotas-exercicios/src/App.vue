<template>
	<div id="app">
		<h1>Rotas com Vue Router</h1>
		<router-view name="menu"></router-view>
		<router-view />
	</div>
</template>

<script>
//import Menu from './components/template/Menu'
export default {
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
