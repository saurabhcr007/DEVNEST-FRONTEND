var arr=[];
var library = [ 
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }
];
for (const item in library) {
    arr[item] = (library[item].libraryID);
}
arr.sort((a,b) => b-a);
for (const k in library) {
    for (var j in library) {
        if (arr[k] == (library[j].libraryID)) {
            console.log(library[j]);
        }
    }
}    