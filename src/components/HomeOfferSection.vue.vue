<template>
	<div id="home-offer-section" class="container mx-auto px-4 mt-10 mb-8">
		<div class="text-center">
			<h2 class="text-3xl font-semibold">What We Offer</h2>
			<p class="mt-4">
				From concept to creation, we provide full-scale web development
				solutions tailored for your business.
			</p>
		</div>

		<div class="flex flex-wrap justify-around mt-8">
			<div class="feature-card">
				<h3>Feature 1</h3>
				<p>Description of Feature 1</p>
			</div>
			<div class="feature-card">
				<h3>Feature 2</h3>
				<p>Description of Feature 2</p>
			</div>
			<div class="feature-card">
				<h3>Feature 3</h3>
				<p>Description of Feature 3</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeOfferSection",
};
</script>

<style scoped>
.feature-card {
	max-width: 300px;
	text-align: center;
	padding: 20px;
	margin-top: 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: #f9f9f9;
}

.feature-card h3 {
	color: #333;
}

.feature-card p {
	color: #666;
}
</style>
