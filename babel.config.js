module.exports = {
	"presets": [
		["@babel/preset-flow"]
	],
	"plugins": [
		"annotate-pure-calls"
	],
	"env": {
		"test": {
			"presets": ["@babel/preset-env", "@babel/preset-flow"]
		},
		"dev": {
			"presets": [
				[
					"@babel/preset-env",
					{
						"modules": false,
						"targets": {
							"browsers": [
								"last 1 Chrome version"
							]
						}
					}
				],
				["@babel/preset-flow"]
			]
		},
		"production": {
			"presets": [
				[
					"@babel/preset-env",
					{
						"modules": false,
						"targets": {
							"browsers": [
								"> 1%",
								"last 2 versions",
								"not ie <= 8"
							]
						}
					}
				],
				["@babel/preset-flow"]
			]
		}
	}
}