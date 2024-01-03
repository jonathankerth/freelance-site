<template>
	<div>
		<NavbarPage :scroll-to="scrollTo" />
		<HomeTopSection @scroll="scrollTo" />
		<HomeOfferSection />
		<AboutUs />
		<BookAppointment />
		<ScrollToTop />
	</div>
</template>

<script>
import HomeTopSection from "./components/HomeTopSection.vue";
import HomeOfferSection from "./components/HomeOfferSection.vue";
import AboutUs from "./components/AboutUs.vue";
import NavbarPage from "./components/NavbarPage.vue";
import BookAppointment from "./components/BookAppointment.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
	name: "App",
	components: {
		NavbarPage,
		HomeTopSection,
		HomeOfferSection,
		AboutUs,
		BookAppointment,
		ScrollToTop,
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
