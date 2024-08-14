// src/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalculator, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCalculator, faCheck)

export { FontAwesomeIcon }