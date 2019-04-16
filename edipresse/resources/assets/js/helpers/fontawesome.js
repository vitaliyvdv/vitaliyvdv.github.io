import { library, dom, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faFacebookF } from "fontawesome_brands/faFacebookF";
import { faInstagram } from "fontawesome_brands/faInstagram";

library.add(faFacebookF, faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
dom.i2svg();
