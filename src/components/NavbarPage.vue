<template>
	<nav class="bg-gray-800 text-white p-4">
		<div class="container mx-auto flex justify-between items-center">
			<div class="font-bold text-xl">Oregonized Design Co.</div>
			<button
				class="md:hidden text-white focus:outline-none"
				@click="toggleMobileMenu"
			>
				<svg
					v-if="!mobileMenuOpen"
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
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
				<svg
					v-else
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
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<div
				:class="{
					'hidden': !mobileMenuOpen,
					'block': mobileMenuOpen,
					'flex flex-col mt-4 md:hidden': true,
				}"
			>
				<a
					@click="scrollTo('home-offer-section')"
					class="hover:text-blue-400 py-1 cursor-pointer"
					>What We Offer</a
				>
				<a
					@click="scrollTo('about-us')"
					class="hover:text-blue-400 py-1 cursor-pointer"
					>About</a
				>
				<a
					@click="scrollTo('book-appointment')"
					class="hover:text-blue-400 py-1 cursor-pointer"
					>Book Appointment</a
				>
			</div>

			<ul class="hidden md:flex md:space-x-4">
				<li
					class="cursor-pointer hover:text-blue-400"
					@click="scrollTo('home-offer-section')"
				>
					What We Offer
				</li>
				<li
					class="cursor-pointer hover:text-blue-400"
					@click="scrollTo('about-us')"
				>
					About
				</li>
				<li
					class="cursor-pointer hover:text-blue-400"
					@click="scrollTo('book-appointment')"
				>
					Book Appointment
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		scrollTo: {
			type: Function,
			required: true,
		},
	},
	data() {
		return {
			mobileMenuOpen: false,
		};
	},
	methods: {
		toggleMobileMenu() {
			this.mobileMenuOpen = !this.mobileMenuOpen;
		},
		handleMobileMenuChange(event) {
			const sectionId = event.target.value;
			this.scrollTo(sectionId);
		},
	},
};
</script>

<style scoped>
.navbar {
	background-color: #1a202c; /* Tailwind gray-800 */
}

.navbar ul {
	list-style: none;
	padding: 0;
}

.navbar li {
	cursor: pointer;
	transition: color 0.3s ease;
}

@media (max-width: 768px) {
	.navbar ul {
		flex-direction: column;
		align-items: center;
	}

	.navbar li {
		margin-top: 10px;
	}

	.navbar .hidden {
		display: none;
	}

	.navbar .block {
		display: block;
	}
}
</style>
