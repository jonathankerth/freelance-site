<template>
	<div id="about-us" class="about-section">
		<h1 class="text-3xl font-bold">About Us</h1>
		<p class="mt-4">
			Dedicated to delivering bespoke web solutions that resonate with your
			audience.
		</p>
		<div class="about-details mt-6">
			<h2 class="text-2xl font-semibold">Our Mission</h2>
			<p class="mt-2">
				Creating stunning and efficient digital experiences tailored to your
				needs.
			</p>
			<h2 class="text-2xl font-semibold mt-4">Our Vision</h2>
			<p class="mt-2">
				To be at the forefront of web design innovation, empowering businesses
				globally.
			</p>
			<!-- More sections like team information, history, etc. -->
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutUs",
};
</script>

<style scoped>
.about-section {
	padding: 50px;
	text-align: center;
	background-color: #f0f0f0;
}

.about-details h2 {
	margin-top: 20px;
	color: #333;
}

.about-details p {
	color: #555;
}
</style>
