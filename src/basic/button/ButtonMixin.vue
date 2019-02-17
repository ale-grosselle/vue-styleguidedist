<template>
	<div class="wrapper">
		<Button id="dog-name-button" @click.native="pushButton">Push Me</Button>
		<hr />
		<p class="text-name">Next Dog Name: {{ dogName }}</p>
	</div>
</template>

<script>
	// You can also use 'exports.default = {}' style module exports.
	import Themeable from "mixins/Themeable";

	export default {
		mixins: [Themeable],
		props: {
			test: [String, Boolean],

			/**
			 * Define the kind of the button. Possible values are defined in Button.kind property ("full"|"empty"|"link")
			 * Default is full
			 */
			kind: {
				type: [String, Boolean],
				default: "FULL",
				validator: (kind) => true
			}
		},
			data() {
			return { numClicks: 0, dogName: dogNames[0] };
		},
		methods: {
			pushButton() {
				this.numClicks += 1;
				this.dogName = dogNames[this.numClicks];
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		background: blue;
	}
	.text-name {
		color: red;
	}
</style>