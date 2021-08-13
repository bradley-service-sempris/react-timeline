module.exports = {
	rootDir: '../',
	setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
	testRegex: '(/test/unit/*.|\\.(spec))\\.js?$',
	collectCoverage: true,
	// collectCoverageFrom: ['<rootDir>/src/**/*.js'],
	// make sure you know where you're collecting coverage from
	collectCoverageFrom: ['<rootDir>/src/pages/testFunctions/*.js'],
	moduleFileExtensions: ['js', 'json']
};
