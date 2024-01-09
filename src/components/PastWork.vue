<template>
	<section id="past-work" class="py-12">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-8">Past Work</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="project in projects"
					:key="project.id"
					class="rounded overflow-hidden shadow-lg"
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
					<div class="px-6 pt-4 pb-2">
						<a
							:href="project.link"
							target="_blank"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
							>GitHub</a
						>
						<a
							:href="project.link2"
							target="_blank"
							class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
#past-work-examples {
	background-color: #f4f4f4;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}

.project-card {
	background-color: #ffffff;
	border-radius: 10px;
	overflow: hidden;
	transition: transform 0.3s ease-in-out;
}

.project-card:hover {
	transform: scale(1.05);
}

.project-card img {
	width: 100%;
	height: auto;
	object-fit: cover;
}

.project-card .px-6 {
	padding: 1.5rem;
}

.project-card .font-bold {
	color: #333333;
}

.project-card .text-gray-700 {
	color: #666666;
}

.project-card a {
	text-decoration: none;
	margin-top: 0.5rem;
}

.project-card a:hover {
	text-decoration: underline;
}

@media (max-width: 768px) {
	.grid {
		grid-template-columns: 1fr;
	}
}
</style>
