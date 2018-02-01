module.exports = function(karma) {
	var config = {
		browsers: ['Firefox'],
		files: ['./node_modules/chart.js/dist/Chart.js', './node_modules/moment/moment.js', './Chart.Financial.js', './test/**/*.js'],
		frameworks: ['browserify', 'jasmine'],
		reporters: ['progress', 'kjhtml'],
		preprocessors: {
			'./test/jasmine.index.js': ['browserify'],
			'./src/**/*.js': ['browserify']
		},
		browserify: {
			debug: true
		},

		// These settings deal with browser disconnects. We had seen test flakiness from Firefox
		// [Firefox 56.0.0 (Linux 0.0.0)]: Disconnected (1 times), because no message in 10000 ms.
		// https://github.com/jasmine/jasmine/issues/1327#issuecomment-332939551
		browserNoActivityTimeout: 60000,
		browserDisconnectTolerance: 3
	};

	// If on the CI, use the CI chrome launcher
	if (process.env.TRAVIS) {
		config.browsers.push('Chrome_travis_ci');
		config.customLaunchers = {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		};
	} else {
		config.browsers.push('Chrome');
	}

	karma.set(config);
};
