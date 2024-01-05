<template>
	<div id="about-us" class="about-section">
		<h1 class="text-3xl font-bold">
			Jonathan Gallardo-Kerth: Web Development Expertise
		</h1>
		<p class="mt-4">
			Specializing in crafting state-of-the-art web solutions to elevate your
			digital presence.
		</p>
		<div class="service-offerings mt-6">
			<h2 class="text-2xl font-semibold">My Services</h2>
			<p class="mt-2">
				Leveraging the latest technologies in JavaScript, React, Vue.js, and
				Python to deliver responsive, user-centric websites and applications.
			</p>
			<h2 class="text-2xl font-semibold mt-4">Innovative Solutions</h2>
			<p class="mt-2">
				Committed to integrating innovative features like AI and real-time data
				processing for dynamic and engaging user experiences.
			</p>
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

.service-offerings h2 {
	margin-top: 20px;
	color: #333;
}

.service-offerings p {
	color: #555;
}
</style>
