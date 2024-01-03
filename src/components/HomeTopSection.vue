<template>
	<div
		class="parallax bg-cover bg-center"
		style="
			background-image: url('https://images.unsplash.com/photo-1551714708-6c1a0f4d3fa8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		"
	>
		<div class="overlay py-20">
			<div class="text-center text-white">
				<h1 class="text-5xl font-bold mb-4">Oregonized Design Co.</h1>
				<p class="text-xl mb-6">Crafting Unique Web Experiences</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeTopSection",
};
</script>

<style scoped>
.parallax {
	min-height: 500px;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
