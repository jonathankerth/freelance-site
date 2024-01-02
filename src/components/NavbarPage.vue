<template>
	<nav class="navbar bg-gray-800 text-white p-4">
		<div class="container mx-auto flex justify-between items-center">
			<div class="font-bold text-xl">Oregonized Design Co.</div>
			<ul class="flex space-x-4">
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
}
</style>
