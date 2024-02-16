<template>
	<section id="past-work" class="py-12 bg-gray-100">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-8">Past Work</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="project in projects"
					:key="project.id"
					class="rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
				>
					<img
						:src="project.image"
						:alt="project.title"
						class="w-full h-48 object-cover"
					/>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">{{ project.title }}</div>
						<p class="text-gray-700 text-base">
							{{ project.description }}
						</p>
					</div>
					<div class="px-6 pt-4 pb-2 flex justify-start space-x-2">
						<a :href="project.link" target="_blank" class="github-btn"
							>GitHub</a
						>
						<a :href="project.link2" target="_blank" class="live-site-btn"
							>Live Site</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: "PastWork",
	data() {
		return {
			projects: [
				{
					id: 2,
					title: "Climate Cue",
					description:
						"A real-time weather application developed using Next.js and styled with Tailwind CSS. It fetches current weather data from the OpenWeather API and is deployed on Vercel for high availability.",
					link: "https://github.com/jonathankerth/weather-app",
					link2: "https://www.climatecue.com/",
					image:
						"https://mypublicucket.s3.us-west-2.amazonaws.com/weather-home.png",
				},
				{
					id: 4,
					title: "Todo-List",
					description:
						"A real-time Todo List application developed using React and WebSockets. Authentication using Firebase. The application keeps tasks in sync across multiple devices. Styled using Bootstrap, the app offers a clean and intuitive user interface. The WebSocket server handles real-time updates, and the entire app is hosted on Vercel.",
					link: "https://github.com/jonathankerth/todo-list",
					link2: "https://todo-list-liard-seven.vercel.app/",
					image:
						"https://mypublicucket.s3.us-west-2.amazonaws.com/todo-list.png",
				},
				{
					id: 1,
					title: "Nicolas Cage Movie Repository",
					description:
						"A comprehensive repository dedicated to Nicolas Cage movies, built using React and styled with Bootstrap. The project is integrated with a custom-built RESTful API, NicCage API, to fetch and display movie data. Hosted on Netlify for seamless user experience.",
					link: "https://github.com/jonathankerth/nicCage-client",
					link2: "https://niccagecllient.netlify.app/",
					image:
						"https://mypublicucket.s3.us-west-2.amazonaws.com/nicCageHome.png",
				},
			],
		};
	},
};
</script>
<style scoped>
.github-btn {
	@apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105;
}

.live-site-btn {
	@apply bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105;
}
</style>
