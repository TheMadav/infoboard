<template>
	<div class="container-fluid pt-2">
		<Background />
		<div class="row mx-2 py-2">
			<Datetime />
			<Weather />
		</div>
		<Forecast />

		<div class="row py-2">
			<Tfl />
			<Calendar />
		</div>
		<n-link
			class="btn btn-sm btn-outline-dark btn-settings"
			to="/settings">
			Settings
		</n-link>
	</div>
</template>

<script>
import Background from '~/components/Background.vue'
import Datetime from '~/components/Datetime.vue'
import Weather from '~/components/Weather.vue'
import Forecast from '~/components/Forecast.vue'
import Calendar from '~/components/Calendar.vue'
import Tfl from '~/components/Tfl.vue'

export default {
	components: {
		Background,
		Datetime,
		Weather,
		Forecast,
		Calendar,
		Tfl
	},
	created() {
		let settings
		try {
			settings = localStorage.getItem('infoboardSettings')
			if (settings == null) {
				settings = JSON.stringify(process.env.envsettings)
				localStorage.removeItem('infoboardSettings')
				localStorage.setItem('infoboardSettings', settings)
				this.$router.replace({ path: 'settings' })
			} else {
				this.$store.commit('updateSettings', JSON.parse(settings))
			}
		} catch (err) {
			if (process.env.NODE_ENV == 'development') console.log(err)
		}
	}
}
</script>

<style>
html, body {
	background-color: #292929;
	color: #fff;
	font-family: 'Cousine', monospace;
	font-size: 1rem;
	height: 100vh;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
}

.withBackground {
	background-color: #333333;
	background-color: rgba(41, 41, 41, 0.3);
	border-radius: 0.3rem;
	width: fit-content;
}

.btn-settings {
	position: fixed;
	bottom: 0.5rem;
	left: 0.5rem;
	z-index: 10;
}
@media (max-width: 575.98px) {
	html, body {
		font-size: 0.9rem;
	}
}
@media (max-width: 320px) {
	html, body {
		font-size: 0.8rem;
	}
}
</style>
