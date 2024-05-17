let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser',
        imageURL: 'img/tile_andreas_neeser.jpg'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat',
        imageURL: 'img/tile_anna_ruchat.jpg'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch',
        imageURL: 'img/tile_arno_camenisch.jpg'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli',
        imageURL: 'img/tile_barbara_schibli.jpg'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard',
        imageURL: 'img/tile_demian_leinhard.jpg'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader',
        imageURL: 'img/tile_flurina_bader.jpg'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino',
        imageURL: 'img/tile_franco_supino.jpg'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann',
        imageURL: 'img/tile_lukas_hartmann.jpg'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu',
        imageURL: 'img/tile_marius_popescu.jpg'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny',
        imageURL: 'img/tile_reto_haenny.jpg'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi',
        imageURL: 'img/tile_sandra_kuenzi.jpg'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig',
        imageURL: 'img/tile_simon_libsig.jpg'
    }
];

// build html structure li grid
function authorsList(){
    const ulTag = document.querySelector("main ul");
    for (let author of authors) {
    let aTag = document.createElement('a');
    let liTag = document.createElement('li');
    let imgTag = document.createElement('img');
    imgTag.src = author.imageURL;

    let h2Tag = document.createElement('h2');
    h2Tag.textContent = `${author.firstName} ${author.lastName}`;

    aTag.appendChild(imgTag);
    aTag.appendChild(h2Tag);
    liTag.appendChild(aTag);
    ulTag.appendChild(liTag);
    } 
}
authorsList();


