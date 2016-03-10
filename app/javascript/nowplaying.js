function loadPlaying() {
	$('#lastFmWidget').lastfmNowPlaying({
		apiKey: nowPlayingOptions.apiKey,
		members: [nowPlayingOptions.members]
	});
}

jQuery(document).ready(function () {
	loadPlaying(); // on page load
	setInterval(function(){
		loadPlaying();
	}, 5000);
});
