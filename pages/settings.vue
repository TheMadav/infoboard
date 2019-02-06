<template>
	<div class="container pt-2 settings">
		<h3>Settings</h3>
		<!-- https://vuejs.org/v2/guide/forms.html -->
		<div
			v-for="(esValue, esKey) in envSettings"
			:key="esKey"
			class="row">
			<div class="col">
				<p>
					{{ esKey }}
				</p>
			</div>
			
			<div class="col">
				<label :for="esKey">
					{{ esKey }}
				</label>
				<input
					:id="esKey"
					v-model.lazy="localSettings[esKey]"
					type="text"
					class="form-control">
				<small
					class="form-text text-muted">
					Default: {{ esValue }}
				</small>
			</div>

			<n-link
				class="btn btn-sm btn-outline-dark btn-settings"
				to="/">
				Back to the app
			</n-link>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			envSettings: {},
			localSettings: {}
		}
	},
	watch: {
		'localSettings': {
			handler:function (val, oldVal) {
				localStorage.setItem('infoboardSettings', JSON.stringify(this.localSettings))
			},
			deep: true
		}
	},
	mounted() {
		this.envSettings = process.env.envsettings
		this.localSettings = JSON.parse(localStorage.getItem('infoboardSettings'))
	}
}
</script>

<style scoped>
.settings {
	background-color: #292929;
	color: #ffcc00;
	font-family: 'Cousine', monospace;
	font-size: 0.7em;
	-webkit-user-select: auto; /* Safari */
	-moz-user-select: auto; /* Firefox */
	-ms-user-select: auto; /* IE10+/Edge */
	user-select: auto; /* Standard */
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