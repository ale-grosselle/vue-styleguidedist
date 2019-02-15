<template>
	<!-- normal buttons -->
	<button>
		HELLO!!
	</button>
</template>

<script type="application/javascript">
// @flow

import Themeable from "mixins/Themeable";

const ButtonKinds = {
	"full": "full",
	"empty": "empty",
	"link": "link"
};
const ButtonSizes = {
	"big": "big",
	"small": "small"
};
const ButtonColors = {
	"white": "white",
	"grey": "grey",
	"custom": "custom"
};


const name:string = "th-button";

/**
 * Implements the Button component.
 *
 * Component name: th-button
 */
export default {
	install: function(vueInstance:any):void {
		vueInstance.component(name, this);
	},
	mixins: [Themeable],

	name,

	/**
	 * Button types
	 */
	kind: ButtonKinds,

	/**
	 * Button sizes
	 */
	size: ButtonSizes,

	/**
	 * Button colors
	 */
	color: ButtonColors,

	props: { // TODO: DOCUMENT THE SLOT

		/**
		 * Define the kind of the button. Possible values are defined in Button.kind property ("full"|"empty"|"link")
		 * Default is full
		 */
		kind: {
			type: String,
			default: ButtonKinds.full,
			validator: (kind: string) => !!ButtonKinds[kind]
		},

		/**
		 * Define the size of the button. Possible values are defined in Button.size property ("small"|"big")
		 * Default is big
		 */
		size: {
			type: String,
			default: ButtonSizes.big,
			validator: (size: string) => !!ButtonSizes[size]
		},

		/**
		 * Define the color of the button. Possible values are defined in Button.color property ("white"|"grey"|"custom")
		 * Default is white
		 */
		color: {
			type: String,
			default: ButtonColors.white,
			validator: (color: string) => !!ButtonColors[color]
		},

		/**
		 * Define if the button is disabled.
		 * Default is false
		 */
		disabled: {
			type: Boolean,
			default: false
		},

		/**
		 * A string representing the id (or an url) of the icon to set in the left of the button label.
		 * No icons by default.
		 */
		iconLeft: [String],

		/**
		 * A string representing the id (or an url) of the icon to set in the right of the button label.
		 * No icons by default.
		 */
		iconRight: [String],

		/**
		 * A boolean to make the button fill all the available space horizontally.
		 * Default is false.
		 */
		fill: Boolean,

		/**
		 * [Available only for link kind button] A string containing the href property for the button link
		 */
		href: [String],

		/**
		 * [Available only for link kind button] A string containing the target property for the button link
		 * Default is _blank
		 */
		target: {
			type: String,
			default: "_blank"
		}
	},

	data() {
		return {

		};
	},

	computed: {
		/**
		 * Returns true if the icon left is an url instead of the id of an icon
		 * @returns {Boolean}
		 */
		isIconLeftUrl() {
			return this.iconLeft && this.iconLeft.indexOf("//") > -1;
		},

		/**
		 * Used if the icon passed is an url instead of a THRON image stored in thron-ux-style.
		 * Returns an object containing the background-image property pointing to the icon url
		 * @returns {Object} an object containing some property to style
		 */
		computedLeftIconUrl() {
			return {
				"background-image": "url(" + this.iconLeft + ")"
			};
		},

		/**
		 * Returns true if the icon right is an url instead of the id of an icon
		 * @returns {Boolean}
		 */
		isIconRightUrl() {
			return this.iconRight && this.iconRight.indexOf("//") > -1;
		},

		/**
		 * Used if the icon passed is an url instead of a THRON image stored in thron-ux-style.
		 * Returns an object containing the background-image property pointing to the icon url
		 * @returns {Object} an object containing some property to style
		 */
		computedRightIconUrl() { // used if the icon passed is an  url instead of a THRON image stored in thron-ux-style
			return {
				"background-image": "url(" + this.iconRight + ")"
			};
		},

		/**
		 * Flag - true if the is at least one icon.
		 * @returns {Boolean}
		 */
		withIcon() {
			return this.iconLeft || this.iconRight;
		},

		/**
		 * Based on the properties returns a list of classes to style correctly the button.
		 * @returns {string} the list of classes for the button
		 */
		classList() {
			return "th-center th-norm th-button " + name + "--" + this.theme +
					" th-button--" + this.kind +
					" th-button--" + this.size +
					" th-button--" + this.color +
					(this.disabled ? " th-disabled" : "") +
					((!this.$slots.default && this.withIcon) ? " th-button--only-icon" : "") +
					(this.withIcon ? " with-icon" : "") +
					(this.iconLeft ? " with-icon--left" : "") +
					(this.iconRight ? " with-icon--right" : "") +
					(this.fill ? " th-button--fill" : "");
		},

		/**
		 * The href to set to the button (for Link kind button). If the button is disabled the href property
		 * needs to be null
		 * @returns {null | String}
		 */
		computedHref() {
			// If the link is disabled, we get rid of href attribute to prevent unwanted navigation
			return this.disabled ? null : this.href;
		}
	},

	methods: {
		/**
		 * On click callback.
		 * @param {Event} $event
		 */
		onClick($event: Event) {
			if (!this.disabled) {

				/**
				 * Fired when the user click the button. It returns the HTML Event
				 *
				 * @event click
				 * @type {Event}
				 */
				this.$emit("click", $event);
			}
		}
	}
};

</script>

<style lang="scss">
</style>