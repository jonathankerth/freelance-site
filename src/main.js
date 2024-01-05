import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faGithub,
	faStackOverflow,
	faTwitter,
	faMediumM,
	faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

library.add(
	faEnvelope,
	faLinkedin,
	faGithub,
	faStackOverflow,
	faTwitter,
	faMediumM,
	faFacebookF
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
