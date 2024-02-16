<template>
	<div>
		<NavbarPage :scroll-to="scrollTo" />
		<FloatingNavbar :scroll-to="scrollTo" />
		<HomeTopSection @scroll="scrollTo" />

		<AboutUs />
		<HomeOfferSection />
		<PastWork />
		<BookAppointment />
		<BlogSection />
		<MyContacts />
		<ScrollToTop />
	</div>
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue";
import FloatingNavbar from "./components/FloatingNavbar.vue";
import HomeTopSection from "./components/HomeTopSection.vue";
import HomeOfferSection from "./components/HomeOfferSection.vue";
import AboutUs from "./components/AboutUs.vue";
import PastWork from "./components/PastWork.vue";
import BookAppointment from "./components/BookAppointment.vue";
import MyContacts from "./components/MyContacts.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import "./assets/styles.css";
import BlogSection from "./components/BlogSection.vue";

export default {
	name: "App",
	components: {
		NavbarPage,
		FloatingNavbar,
		HomeTopSection,
		HomeOfferSection,
		AboutUs,

		PastWork,
		BookAppointment,
		MyContacts,
		ScrollToTop,
		BlogSection,
	},
	methods: {
		scrollTo(sectionId) {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			} else {
				console.error("Element not found:", sectionId);
			}
		},
	},
};
</script>
