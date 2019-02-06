<template>
	<div class="container-fluid px-4">
		<Background/>
		<div class="row mx-2 py-2">
			<Datetime/>

		</div>

		<div class="row pb-2 m-0 fixed-bottom footer withBackground">

			<carousel :autoplay="true" :autoplayTimeout=2000 :perPage=1 :paginationEnabled=false>
	            <slide>
	                <Weather/>
	            </slide>
	            <slide>
					<Rmv />
	            </slide>
<!--	            <slide>
	                <h2 class='cover-heading'>Zitat des Tages</h2>
	            </slide>
				<slide>
	                <h2 class='cover-heading'>Kalender</h2>
	            </slide>-->
     		</carousel>
		</div>
	</div>
</template>

<script>

import Background from '~/components/Background.vue'
import Datetime from '~/components/Datetime.vue'
import Weather from '~/components/OpenWeather.vue'
import Calendar from '~/components/Calendar.vue'
import Tfl from '~/components/Tfl.vue'
import Rmv from '~/components/Rmv.vue'

export default {
	components: {
		Background,
		Datetime,
		Weather,
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
	height: 485px;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
	width:800px
}

.withBackground {
	background-color: #333333;
	background-color: rgba(41, 41, 41, 0.5);
	border-radius: 0.3rem;
	width: fit-content;
}
.footer{
	width:100%
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
