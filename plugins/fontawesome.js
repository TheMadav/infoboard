import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
<<<<<<< HEAD
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faSubway } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBus,faSubway,faCloudRain )
=======
import { faBus } from '@fortawesome/pro-solid-svg-icons'
import { faSubway } from '@fortawesome/pro-solid-svg-icons'
import { faCloudRain } from '@fortawesome/pro-solid-svg-icons'
import { faDesktop } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBus,faSubway,faCloudRain, faDesktop )
>>>>>>> madav-master

Vue.component('font-awesome-icon', FontAwesomeIcon)
