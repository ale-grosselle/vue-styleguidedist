const THEME = {
	light: "light",
	dark: "dark"
};

/**
 * @mixin
 */
export default {
	props: {

		/**
		 * The component theme. It accept the following values: "light" or "dark".
		 * Default is light
		 */
		theme: {
			type: String,
			default: THEME.light
		}
	},

	/**
	 * On mounted we add a class to the class list of the component root element.
	 * The class added has the following pattern: <component_name>--<theme>
	 * e.g.
	 *      th-button--light
	 */
	mounted() {
		this.$el.classList.add(`${this.$options.name}--${this.theme}`);
	}
};

export { THEME };