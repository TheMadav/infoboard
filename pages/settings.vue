<template>
	<div class="container-fluid pt-2 settings">
		<div class="row mx-2 py-2">
			<div class="col">
				<h1>name</h1>
				<p
					v-for="(esValue, esKey) in envSettings"
					:key="esKey">
					{{ esKey }}
				</p>
			</div>
			
			<div class="col">
				<h1>local setting</h1>
				https://vuejs.org/v2/guide/forms.html
				<p
					v-for="(lsValue, lsKey) in localSettings"
					:key="lsKey">
					{{ lsValue }}
				</p>
			</div>

			<div class="col">
				<h1>.env file setting</h1>
				<p
					v-for="(esValue, esKey) in envSettings"
					:key="esKey">
					{{ esValue }}
				</p>
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
	mounted() {
		this.loadSettings()
	},
	methods: {
		loadSettings () {
			let localSettings
			try {
				this.envSettings = process.env.envsettings
				localSettings = localStorage.getItem('infoboardSettings')
				if (typeof localSettings !== 'object' || localSettings === null) {
					localSettings = this.envSettings
					localStorage.setItem('infoboardSettings', JSON.stringify(localSettings))
				}
				this.localSettings = localSettings
			} catch (err) {
				if (this.env == 'development') console.log(e)
			}
		}
	}
}
</script>

<style scoped>
.settings {
	background-color: #292929;
	color: #fff;
	font-family: 'Cousine', monospace;
	font-size: 0.7em;
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