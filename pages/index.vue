<template>
	<div>
		<div class="container-fluid px-4">
			<Background/>
			<div class="row mx-4 po-2">
				<Datetime/>
			</div>
		</div>

		<div id ="footer" class="container-fluid px-4 mb-0 fixed-bottom withBackground">
			<carousel :autoplay="true" :autoplayTimeout="5000" :navigationEnabled="false" :paginationEnabled="false" :perPage="1" :loop="true">
			    <slide>
			     	<OpenWeather />
			    </slide>
				<slide>
			    	<Rmv />
				</slide>
			  </carousel>

		</div>
	</div>

</template>

<script>
import Background from '~/components/Background.vue'
import Datetime from '~/components/Datetime.vue'
import Weather from '~/components/Weather.vue'
import OpenWeather from '~/components/OpenWeather.vue'
import Forecast from '~/components/Forecast.vue'
import Calendar from '~/components/Calendar.vue'
import Tfl from '~/components/Tfl.vue'
import Rmv from '~/components/Rmv.vue'

export default {
	components: {
		Background,
		Datetime,
		Weather,
		OpenWeather,
		Forecast,
		Calendar,
		Tfl,
		Rmv
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
#footer{
		width:100%;
	}

.withBackground {
	background-color: #333333;
	background-color: rgba(41, 41, 41, 0.3);
	/**border-radius: 0.3rem;
	width: fit-content;*/
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
