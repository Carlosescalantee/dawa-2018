
(function() {
	//

	var box = MusicBox(),
	a1 = Album("The Who", "Tommy"),
	a2 = Album("Tom Waits", "Closing Time" ),
	a3 = Album("John Cale", "Paris 1979"),
	favorito;

	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);


	a1.play(); //
	a2.play(); //
	a1.play(); ///

	favorito = box.favoriteAlbum();

	// 
	console.log("Tu album favorito es" + favorito);

}());