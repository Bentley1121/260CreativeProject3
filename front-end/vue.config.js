module.exports = {
	devServer: {
		proxy: {
			'^api': {
				target: 'http://localhost:3002',
			}
		},
		disableHostCheck: true
	}
}
