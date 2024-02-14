<template>
	<div v-if="!isNavbarVisible" class="floating-navbar">
		<div class="navbar-content">
			<div @click="toggleVisibility" class="toggle-button">
				<span>&#x2022;&#x2022;&#x2022;</span>
			</div>
			<ul v-if="isExpanded">
				<li @click.stop="scrollTo('home-offer-section')">Services</li>
				<li @click.stop="scrollTo('about-us')">About</li>
				<li @click.stop="scrollTo('past-work')">Work</li>
				<li @click.stop="scrollTo('book-appointment')">Schedule</li>
				<li @click.stop="scrollTo('blog')">Blog</li>
				<li @click.stop="scrollTo('my-contacts')">Contact</li>
			</ul>
		</div>
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
			isExpanded: true,
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
	top: 20%;
	transform: translateY(-50%);
	background-color: rgba(139, 139, 139, 0.8);
	padding: 4px;
	border-radius: 5px;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.navbar-content {
	display: flex;
	align-items: center;
}

.toggle-button {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	font-size: 20px;
	line-height: 0;
	writing-mode: vertical-lr;
	transform: rotate(180deg);
	margin: 0;
}

.floating-navbar ul {
	list-style: none;
	margin: 0;
	display: true;
}

.floating-navbar li {
	cursor: pointer;
	transition: color 0.3s ease;
	color: rgba(255, 255, 255, 0.7);
	margin-bottom: 5px;
	text-align: right;
}

.floating-navbar li:hover {
	color: #ffffff;
}

.floating-navbar:hover ul,
.floating-navbar:focus-within ul {
	display: block;
}
</style>
