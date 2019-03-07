import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBus } from '@fortawesome/pro-solid-svg-icons'
import { faSubway } from '@fortawesome/pro-solid-svg-icons'
import { faCloudRain } from '@fortawesome/pro-solid-svg-icons'
import { faDesktop } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBus,faSubway,faCloudRain, faDesktop )

Vue.component('font-awesome-icon', FontAwesomeIcon)
