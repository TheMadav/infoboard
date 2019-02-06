<template>
	<div
		v-if="$store.state.forecast && enableWeather === 'true'"
		class="row py-4 px-2">
		<div
			v-for="(weather, index) of $store.state.forecast"
			:key="index"
			class="forecastWrapper col-sm-3 mx-2 mb-2">
			<div class="forecast m-auto">
				<p>{{ moment.unix(weather.dt).format('HH:MM') }}</p>
				<div class="col forecastIcon"><img
					:src="'/images/'+weather.weather[0].main+'.svg'"
					:alt="weather.weather[0].summary"></div>
				<div class="col">{{ roundValue(weather.main.temp) }}&deg;{{ units }}</div>
				<!--<div class="col">{{ roundValue(day.temperatureLow) }}&deg;{{ units }}</div>-->
				<div class="col small px-0">{{ weather.weather[0].description }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	data: function() {
		return {
			enableWeather: process.env.WEATHER,
			tempRouded: process.env.WEATHER_ROUNDED === 'true' ? true : false,
			units: process.env.WEATHER_UNITS === 'fahrenheit' ? 'F' : 'C',
			moment: moment
		}
	},
	methods: {
		roundValue(val) {
			if (this.tempRouded === true) {
				return Math.round(val)
			} else {
				return val
			}
		}
	}
}
</script>

<style scoped>
.forecast {
	text-align: center;
}
.forecastIcon img {
	width: 50%;
}
@media (max-width: 575.98px) {
	.forecastWrapper {
		min-width: 45%;
	}
}
</style>
