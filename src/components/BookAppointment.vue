<template>
	<div id="book-appointment" class="booking-section">
		<h1>Book an Appointment</h1>
		<p>Ready to start your next project? Book a consultation with us today.</p>
		<div id="calendly-widget-container"></div>
	</div>
</template>

<script>
/* global Calendly */
export default {
	name: "BookAppointment",
	mounted() {
		this.loadCalendly();
	},
	methods: {
		loadCalendly() {
			const script = document.createElement("script");
			script.src = "https://assets.calendly.com/assets/external/widget.js";
			document.body.appendChild(script);

			script.onload = () => {
				Calendly.initInlineWidget({
					url: "https://calendly.com/jonathankerth", // Replace with your Calendly URL
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
	background-color: #e9e9e9;
}

#calendly-widget-container {
	margin-top: 20px;
	min-width: 320px;
	height: 630px;
}
</style>
