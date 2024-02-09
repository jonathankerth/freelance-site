<template>
	<div id="home-offer-section" class="container mx-auto px-4 mt-10 mb-8">
		<div class="text-center">
			<h2 class="text-3xl font-semibold">Services</h2>
			<p class="mt-4">
				From concept to creation, we provide full-scale web development
				solutions tailored for your business, leveraging modern JavaScript
				frameworks and technologies.
			</p>
		</div>

		<div class="flex flex-wrap justify-around mt-8">
			<div class="feature-card">
				<h3>Custom Web Applications</h3>
				<p>
					Design and development of scalable, efficient web applications using
					React, Vue.js, and Node.js.
				</p>
			</div>
			<div class="feature-card">
				<h3>Responsive UI/UX Design</h3>
				<p>
					Crafting user-centric interfaces with Tailwind CSS and SCSS, ensuring
					responsiveness and accessibility across devices.
				</p>
			</div>
			<div class="feature-card">
				<h3>API Integration & Development</h3>
				<p>
					Seamless integration with third-party APIs and custom API development
					for enhanced functionality and data management.
				</p>
			</div>
			<div class="feature-card">
				<h3>Full-Stack JavaScript Development</h3>
				<p>
					End-to-end development services using JavaScript stacks including MERN
					and MEVN for dynamic web applications.
				</p>
			</div>
			<div class="feature-card">
				<h3>Cloud Solutions & Deployment</h3>
				<p>
					Deployment and management of web applications on cloud platforms like
					AWS and Vercel, ensuring scalability and reliability.
				</p>
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
