export interface Anime {
    id: number
    title: string
    cover: string
    banner: string
    description: string
    episode: number
    genre: string
    ratings: number
    collection: string | null
}

export const DUMMY_ANIME: Anime[] = [{
    "id": 1,
    "title": "Tempsoft",
    "cover": "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
    "banner": "http://dummyimage.com/222x.png/5fa2dd/ffffff",
    "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "episode": 39,
    "genre": "Comedy|Drama",
    "ratings": 2,
    "collection": null
}, {
    "id": 2,
    "title": "Konklux",
    "cover": "http://dummyimage.com/207x100.png/dddddd/000000",
    "banner": "http://dummyimage.com/227x.png/cc0000/ffffff",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "episode": 42,
    "genre": "Action|Comedy|Crime",
    "ratings": 5,
    "collection": null
}, {
    "id": 3,
    "title": "Bytecard",
    "cover": "http://dummyimage.com/200x100.png/5fa2dd/ffffff",
    "banner": "http://dummyimage.com/211x.png/dddddd/000000",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "episode": 14,
    "genre": "Drama",
    "ratings": 4,
    "collection": null
}, {
    "id": 4,
    "title": "Prodder",
    "cover": "http://dummyimage.com/162x100.png/dddddd/000000",
    "banner": "http://dummyimage.com/228x.png/ff4444/ffffff",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "episode": 30,
    "genre": "(no genres listed)",
    "ratings": 2,
    "collection": null
}, {
    "id": 5,
    "title": "Bitwolf",
    "cover": "http://dummyimage.com/181x100.png/dddddd/000000",
    "banner": "http://dummyimage.com/202x.png/cc0000/ffffff",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "episode": 41,
    "genre": "Comedy|Drama",
    "ratings": 3,
    "collection": null
}, {
    "id": 6,
    "title": "Transcof",
    "cover": "http://dummyimage.com/102x100.png/cc0000/ffffff",
    "banner": "http://dummyimage.com/215x.png/5fa2dd/ffffff",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "episode": 11,
    "genre": "Documentary|Drama",
    "ratings": 3,
    "collection": null
}, {
    "id": 7,
    "title": "Asoka",
    "cover": "http://dummyimage.com/243x100.png/ff4444/ffffff",
    "banner": "http://dummyimage.com/209x.png/cc0000/ffffff",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "episode": 43,
    "genre": "Comedy|Drama|Mystery|Thriller",
    "ratings": 2,
    "collection": null
}, {
    "id": 8,
    "title": "Veribet",
    "cover": "http://dummyimage.com/154x100.png/cc0000/ffffff",
    "banner": "http://dummyimage.com/228x.png/ff4444/ffffff",
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "episode": 21,
    "genre": "Comedy",
    "ratings": 5,
    "collection": null
}, {
    "id": 9,
    "title": "Fintone",
    "cover": "http://dummyimage.com/134x100.png/5fa2dd/ffffff",
    "banner": "http://dummyimage.com/224x.png/cc0000/ffffff",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "episode": 29,
    "genre": "Comedy|Fantasy|Romance",
    "ratings": 4,
    "collection": null
}, {
    "id": 10,
    "title": "Fix San",
    "cover": "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
    "banner": "http://dummyimage.com/245x.png/dddddd/000000",
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "episode": 20,
    "genre": "Action|Comedy|Thriller",
    "ratings": 5,
    "collection": null
}, {
    "id": 11,
    "title": "Overhold",
    "cover": "http://dummyimage.com/104x100.png/cc0000/ffffff",
    "banner": "http://dummyimage.com/212x.png/dddddd/000000",
    "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "episode": 27,
    "genre": "Comedy",
    "ratings": 5,
    "collection": null
}, {
    "id": 12,
    "title": "Prodder",
    "cover": "http://dummyimage.com/211x100.png/ff4444/ffffff",
    "banner": "http://dummyimage.com/215x.png/dddddd/000000",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "episode": 42,
    "genre": "Drama|Western",
    "ratings": 3,
    "collection": null
}, {
    "id": 13,
    "title": "Cardify",
    "cover": "http://dummyimage.com/143x100.png/cc0000/ffffff",
    "banner": "http://dummyimage.com/222x.png/cc0000/ffffff",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "episode": 23,
    "genre": "Comedy|Drama",
    "ratings": 3,
    "collection": null
}]