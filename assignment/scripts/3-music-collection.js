console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection (collection, title, artist, yearPublished){
  let album = {
  title,
  artist,
  yearPublished,
  }
  // console.log(album)
  collection.push(album);
  return album;
}
addToCollection(myCollection,'Once upon a time', 'Senka', 1998);
addToCollection(myCollection,'Good stuff', 'Carlos', 1998);
addToCollection(myCollection,'Keep your head up', 'Ivan', 1989);
addToCollection(myCollection,'Do not trust', 'Ilija', 1987);
addToCollection(myCollection,'I live', 'Vlado', 1956);
addToCollection(myCollection,'I care', 'Senka', 1966);
console.log(myCollection);

function showCollection(collection){
  for (let item of collection){
    console.log(`${item.title} by ${item.artist} published in ${item.yearPublished}`)
  };
};
console.log(showCollection(myCollection));

function findByArtist(collection, artist ){
let albumsBySameArtist = [];
  for (let songs of collection){
    if(songs.artist === artist){
      albumsBySameArtist.push(songs);
    }
  };
  return albumsBySameArtist;
};
console.log('Songs by Senka are', findByArtist(myCollection, "Senka"));
console.log('No such artist', findByArtist(myCollection, "Ivona"));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
