<template>
	<div v-if="isVisible" @click="scrollToTop" class="fixed bottom-8 right-8">
		<button
			class="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none shadow-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
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
	},
	beforeUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>
