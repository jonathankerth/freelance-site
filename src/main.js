import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faLinkedin,
	faGithub,
	faStackOverflow,
	faMediumM,
	faThreads,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
	faEnvelope,
	faLinkedin,
	faGithub,
	faStackOverflow,
	faThreads,
	faMediumM,
	faXTwitter
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
