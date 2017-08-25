class library {

  constructor (name, creator){
    this.name      = name;
    this.creator   = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist)
  }
}

class playlist {

  constructor (name) {
    this.name   = name;
    this.tracks = [];
  }

  getname () {
    return this.name;
  }

  addTracks (track) {
    this.tracks.push(track)
  }

  overallRating () {
    let rating = 0
    this.tracks.forEach((track) => {
      rating += track.rating
    })
    return rating/this.tracks.length
  }
  totalDuration () {
    let duration = 0
    this.tracks.forEach((track) => {
      duration += track.length
    })
    return duration
  }
}

class track {

  constructor (title, rating, length) {
    this.title  = title;
    this.rating = rating;
    this.length = length;
  }

}


// --- New Tracks
const track01 = new track('Code Monkey',           4, 135)
const track02 = new track('Model View Controller', 2, 207)
const track03 = new track('Despacito',             5, 243)
const track04 = new track('Wild Thoughts',         5, 182)
const track05 = new track('Unforgettable',         4, 132)
const track06 = new track('Believer',              5, 143)
const track07 = new track('Attention',             3, 205)



// --- New Playlists
const playlist01 = new playlist('Coding Music')

playlist01.addTracks(track01)
playlist01.addTracks(track02)
playlist01.addTracks(track05)
playlist01.addTracks(track07)

console.log(`Overall Rating of the Playlist ${playlist01.getname()}: ${playlist01.overallRating()}`)
console.log(`Total Duration of the Playlist ${playlist01.getname()}: ${playlist01.totalDuration()}`)



const playlist02 = new playlist('De-Stress')
playlist02.addTracks(track01)
playlist02.addTracks(track03)
playlist02.addTracks(track04)
playlist02.addTracks(track05)
playlist02.addTracks(track06)

console.log(`Overall Rating of the Playlist ${playlist02.getname()}: ${playlist02.overallRating()}`)
console.log(`Total Duration of the Playlist ${playlist02.getname()}: ${playlist02.totalDuration()}`)


// --- New Library
const library01 = new library('My Library', 'Rayhaneh')
library01.addPlaylist(playlist01)
library01.addPlaylist(playlist02)

console.log(library01)











