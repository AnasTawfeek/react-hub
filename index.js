function ReactHub() {
	console.info('React-Hub is in the Alpha Phase, Don\'t use it in production')
	return null;
}

if (typeof module !== 'undefined') {
  module.exports = ReactHub;
}