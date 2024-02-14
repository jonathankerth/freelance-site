<template>
	<section id="blog" class="py-12 bg-gray-100">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					class="rounded overflow-hidden shadow-lg p-6 bg-white cursor-pointer"
					v-for="post in posts"
					:key="post.id"
					@click="openModal(post)"
				>
					<h3 class="font-bold text-xl mb-2">
						<i :class="post.icon"></i> {{ post.title }}
					</h3>
					<p class="text-gray-700 text-base">
						{{ post.summary }}
					</p>
				</div>
			</div>
		</div>
		<div v-if="selectedPost" class="modal-overlay">
			<div class="modal-content">
				<span class="close" @click="closeModal">&times;</span>
				<h2>{{ selectedPost.title }}</h2>
				<div v-html="selectedPost.fullContent" class="modal-body"></div>
			</div>
		</div>
	</section>
</template>

<script>
import { blogPosts } from "@/assets/BlogPosts.js";

export default {
	name: "BlogSection",
	data() {
		return {
			posts: blogPosts,
			selectedPost: null,
		};
	},
	methods: {
		openModal(post) {
			this.selectedPost = post;
		},
		closeModal() {
			this.selectedPost = null;
		},
	},
};
</script>

<style scoped>
.modal-overlay {
	display: flex;
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background-color: rgba(0, 0, 0, 0.6);
	align-items: center;
	justify-content: center;
	padding: 20px;
}

.modal-content {
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
	width: 100%;
	max-width: 600px;
	position: relative;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close {
	position: absolute;
	top: 10px;
	right: 15px;
	font-size: 24px;
	color: #666;
	cursor: pointer;
}

.close:hover {
	color: #000;
}

.modal-body {
	margin-top: 15px;
	max-height: 80vh;
	overflow-y: auto;
	line-height: 1.6;
}

.modal-body a,
.modal-body a:visited {
	color: #007bff !important;
	text-decoration: underline !important;
}

.modal-body a:hover,
.modal-body a:focus {
	color: #0056b3 !important;
	text-decoration: none !important;
}

@media (min-width: 768px) {
	.modal-content {
		width: 80%;
		margin: 0 auto;
	}
}
</style>
