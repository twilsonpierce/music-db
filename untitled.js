const SongFinder = new Promise((resolve,reject)=>{
	let songID;
	const allSongs = ()=>{
		Song.findOne({
			where:{title:req.body.tile}
		})
	}
});

SongFinder.then((song)=>{
	songID = Song.dataVaules.songID
	return SongFinder()l
}).then((playlist)=>{	
	return Playlist.findOrCreate({
		where:title:req.body.playlist
	})
}).then()