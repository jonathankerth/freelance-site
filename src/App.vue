<template>
	<div>
		<NavbarPage :scroll-to="scrollTo" />
		<HomeTopSection @scroll="scrollTo" />
		<HomeOfferSection />
		<AboutUs />
		<PastWork />
		<BookAppointment />
		<MyContacts />
		<ScrollToTop />
	</div>
</template>

<script>
import HomeTopSection from "./components/HomeTopSection.vue";
import HomeOfferSection from "./components/HomeOfferSection.vue";
import AboutUs from "./components/AboutUs.vue";
import NavbarPage from "./components/NavbarPage.vue";
import BookAppointment from "./components/BookAppointment.vue";
import MyContacts from "./components/MyContacts.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import PastWork from "./components/PastWork.vue";

export default {
	name: "App",
	components: {
		NavbarPage,
		HomeTopSection,
		HomeOfferSection,
		AboutUs,
		BookAppointment,
		MyContacts,
		ScrollToTop,
		PastWork,
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
