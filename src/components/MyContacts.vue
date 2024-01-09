<template>
	<div
		id="my-contacts"
		class="flex flex-wrap items-center justify-center mt-8 mb-12 space-x-2 sm:space-x-4"
	>
		<a
			v-for="link in socialLinks"
			:key="link.name"
			:href="link.url"
			target="_blank"
			rel="noopener noreferrer"
			:aria-label="link.name"
			:class="['social-icon', link.class]"
		>
			<font-awesome-icon :icon="link.icon" />
		</a>
	</div>
</template>

<script>
export default {
	name: "MyContacts",
	data() {
		return {
			theme: "light",
			socialLinks: [
				{
					name: "Email",
					url: "mailto:jonathanpkerth@gmail.com",
					icon: ["fas", "envelope"],
					class: "emailClass",
				},
				{
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/jonathankerth",
					icon: ["fab", "linkedin"],
					class: "linkedinClass",
				},
				{
					name: "GitHub",
					url: "https://github.com/jonathankerth",
					icon: ["fab", "github"],
					class: "githubClass",
				},
				{
					name: "Stack Overflow",
					url: "https://stackoverflow.com/users/21791075/jonathan-kerth",
					icon: ["fab", "stack-overflow"],
					class: "stackoverflowClass",
				},
				{
					name: "Twitter",
					url: "https://twitter.com/jonathankerth",
					icon: ["fab", "x-twitter"],
					class: "twitterClass",
				},
				{
					name: "Medium",
					url: "https://medium.com/@jonathanpkerth",
					icon: ["fab", "medium-m"],
					class: "mediumClass",
				},
				{
					name: "Threads",
					url: "https://www.threads.net/@jonathankerth",
					icon: ["fab", "threads"],
					class: "threadsClass",
				},
			],
		};
	},
	computed: {
		emailClass() {
			return this.computeClass("text-blue-600", "hover:text-blue-800");
		},
		linkedinClass() {
			return this.computeClass("text-blue-600", "hover:text-blue-800");
		},
		githubClass() {
			return this.computeClass("text-gray-600", "hover:text-gray-800");
		},
		stackoverflowClass() {
			return this.computeClass("text-orange-600", "hover:text-orange-800");
		},
		twitterClass() {
			return this.computeClass("text-blue-400", "hover:text-blue-600");
		},
		mediumClass() {
			return this.computeClass("text-green-600", "hover:text-green-800");
		},
		threadsClass() {
			return this.computeClass("text-red-600", "hover:text-red-800");
		},
	},
	methods: {
		computeClass(baseClass, hoverClass) {
			const themeClass = this.theme === "dark" ? "text-white" : "text-black";
			return `${baseClass} ${hoverClass} ${themeClass}`;
		},
	},
};
</script>

<style scoped>
.social-icon {
	transition: color 0.3s ease;
	margin: 0 8px;
	font-size: 24px;
}

.social-icon:hover {
	transform: scale(1.1);
}

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
