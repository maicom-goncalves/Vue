<template>
	<v-app>
		<HeaderVue />
		<v-content>
			<transition name="slide" mode="out-in">
				<router-view>
				</router-view>
			</transition>	
		</v-content>
	</v-app>
</template>

<script>
import HeaderVue from './components/Header.vue';
export default {
	components :{ HeaderVue },
	created(){
		this.$store.dispatch('initStocks')
	}
}
</script>

<style>
	@keyframes slide-in{
		from{ transform: translateY(-30px); opacity:0;}
		to{ transform: translateY(0px); opacity:1;}
	}
	@keyframes slide-out {
		from{ transform: translateY(0px); opacity:1;}
		to{ transform: translateY(-30px); opacity:0;}
	}
	.slide-leave-active{
		animation: slide-in 0.3 ease;
	}
	.slide-leave-active{
		animation: slide-out 0.3 ease;
	}
</style>

