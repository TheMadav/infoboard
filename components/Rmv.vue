<template>
	<div  class="col mx-3 pt-3">
		<div class="row">
			<div v-for="(station) of stations" class="item col-6 pr-0">
  				<h4><span class="badge badge-pill badge-primary"><font-awesome-icon :icon=station.type /></span> {{station.name}} </h4>
	  			<ul class='departureBoard pl-0'>
					<li v-for="departure in station.departureBoard" class='departure-entry'>
						<span class="badge badge-pill badge-primary">{{departure.name}}</span>
						{{ moment(departure.time, "HH:mm:ss").format("HH:mm") }}
						{{departure.direction.replace('Frankfurt (Main)', '')}}
				</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Vue from 'vue'

export default {
	data: function () {
		return {
			env: process.env.NODE_ENV,
			//stations = [0, 1],
			errors: [],
			departureBoard: [],
			stations: [
						{name: "Hessen Center", id:'003001536',direction:'003001201', type:'subway', departureBoard: [] },
						{name: "Victor-Slotosch Straße", id:'003060716',direction:'003001578', type:'bus', departureBoard: [] },
					],
			moment: moment
		}
	},
	mounted () {
		this.getRMVStatus()
		this.interval = setInterval(this.getRMVStatus, 300000)
	},
	beforeDestroy () {
		clearInterval(this.interval)
	},
	methods: {
		getRMVStatus () {
			for (let station of this.stations) {
				this.getDepartureBoard(station)
			}
			console.log("DepartureBoard")
			console.log(this.stations)

		},
		async getDepartureBoard (station) {
			await axios.get(`/api/rmv?station=${station.id}&direction=${station.direction}`)
				.then(response => {
					console.log(response)
					if (response.data.Departure){
						console.log("RMV response")
						//Vue.set(this.stations.station, 'departureBoard', response.data.Departure.slice(1,5))
						station.departureBoard = response.data.Departure.slice(1,5)

					}
				})
				.catch(e => {
					if (this.env == 'development') console.log(e)
				})
		},
	}
}
</script>

<style scoped>
.departureBoard{
	list-style: none;
	}
.departure-entry{
	/*font-size: small;*/
}
h4{
	font-size: larger;
}

</style>
