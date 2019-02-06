<template>
	<div class="col">
		<div class='withBackground'>
			<p class="h3 time p-2">{{ time }} <small>({{ date }})</small></p>
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	data: function() {
		return {
			time: moment().format(process.env.TIME_FORMAT),
			date: moment().format(process.env.DATE_FORMAT),
			moment: moment
		}
	},
	mounted() {
		this.interval = setInterval(this.updateTime, 1000)
	},
	beforeDestroy() {
		clearInterval(this.interval)
	},
	methods: {
		updateTime () {
			this.time = moment().format(process.env.TIME_FORMAT)
			this.date = moment().format(process.env.DATE_FORMAT)
		}
	}
}
</script>

<style scoped>

</style>
