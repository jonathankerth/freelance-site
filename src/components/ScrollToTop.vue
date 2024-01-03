<template>
	<div
		v-if="isVisible"
		@click="scrollToTop"
		class="fixed bottom-10 right-4 md:bottom-16 md:right-8 z-50"
	>
		<button
			class="p-3 md:p-4 mb-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none shadow-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 md:h-6 md:w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 15l7-7 7 7"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
export default {
	name: "ScrollToTop",
	data() {
		return {
			isVisible: false,
		};
	},
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
		handleScroll() {
			this.isVisible = window.scrollY > 200;
		},
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("resize", this.handleScroll); // Added event listener for mobile responsiveness
	},
	beforeUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
		window.removeEventListener("resize", this.handleScroll); // Removed event listener before component unmounts
	},
};
</script>
