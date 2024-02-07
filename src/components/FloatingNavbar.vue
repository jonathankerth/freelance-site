<template>
	<div
		v-if="!isNavbarVisible"
		class="floating-navbar"
		@click="toggleVisibility"
	>
		<ul>
			<li @click.stop="scrollTo('home-offer-section')">Services</li>
			<li @click.stop="scrollTo('about-us')">About</li>
			<li @click.stop="scrollTo('past-work')">Work</li>
			<li @click.stop="scrollTo('book-appointment')">Book</li>
			<li @click.stop="scrollTo('my-contacts')">Contact</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "FloatingNavbar",
	props: {
		scrollTo: Function,
	},
	data() {
		return {
			isNavbarVisible: true,
			isExpanded: true, // Add state to manage visibility on mobile
		};
	},
	methods: {
		handleScroll() {
			const currentScrollPosition =
				window.pageYOffset || document.documentElement.scrollTop;
			this.isNavbarVisible = currentScrollPosition < 100;
		},
		toggleVisibility() {
			this.isExpanded = !this.isExpanded;
		},
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	unmounted() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>

<style scoped>
.floating-navbar {
	position: fixed;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgba(26, 32, 44, 0.8);
	padding: 10px;
	border-radius: 5px;
	z-index: 1000;
}

.floating-navbar ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.floating-navbar li {
	cursor: pointer;
	transition: color 0.3s ease;
	color: rgba(255, 255, 255, 0.7);
	margin-bottom: 5px;
	text-align: center;
}

.floating-navbar li:hover {
	color: #ffffff;
}

@media (max-width: 768px) {
	.floating-navbar {
		display: none;
	}
}
</style>
