<template>
	<div id="book-appointment" class="booking-section">
		<h1 class="booking-title">Schedule Your Consultation</h1>
		<p class="booking-description">
			Let's discuss your next project! Schedule a time with me to explore
			innovative and tailored web solutions.
		</p>
		<div id="calendly-widget-container"></div>
	</div>
</template>
<script>
/* global Calendly */
export default {
	name: "BookAppointment",
	mounted() {
		this.loadCalendlyWidget();
	},
	methods: {
		loadCalendlyWidget() {
			const calendlyScript = document.createElement("script");
			calendlyScript.src =
				"https://assets.calendly.com/assets/external/widget.js";
			document.body.appendChild(calendlyScript);

			calendlyScript.onload = () => {
				Calendly.initInlineWidget({
					url: "https://calendly.com/jonathankerth",
					parentElement: document.getElementById("calendly-widget-container"),
					prefill: {},
					utm: {},
				});
			};
		},
	},
};
</script>

<style scoped>
.booking-section {
	padding: 50px;
	text-align: center;
	background-color: #f7f7f7;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.booking-title {
	color: #333;
	font-size: 28px;
	margin-bottom: 10px;
}

.booking-description {
	color: #555;
	margin-bottom: 20px;
}

#calendly-widget-container {
	margin-top: 20px;
	min-width: 320px;
	height: 630px;
	border-radius: 4px;
	overflow: hidden;
}
</style>
