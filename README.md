# AnimeCollectionProject

Requirement :
## Anime List Page

### Anime List
[x] As a user, I can see 10 anime on initial page load.

Acceptance Criteria:
- [x] For each anime, show info at least the anime title and anime cover/banner.
- [x] Each anime item are clickable, and will redirect to Anime Detail page when clicked.
- [x] Anime List page should have pagination functionality.

### Bulk add to the collection (Optional).
[ ] As a user, I can add multiple anime to the collection at once.

Acceptance Criteria:
- [ ] User can select multiple anime item/card to be added into a collection via Modal/PopUp form.
- [ ] If user want to bulk add anime to collection but there is no collection yet, user can set collection name as new collection.
- [ ] Collection Name must unique
- [ ] Collection Name doesn’t have special Char

## Anime Detail Page

### Anime Detail Info
[x] As a user, I can anime info on the page.

Acceptance Criteria:
- [x] Show anime cover/banner.
- [x] Show anime title.
- [x] Show other anime details (description, number of episodes, genres, rating, etc). Feel free to add more.

### Add to the collection
[x] As a user, I can the anime to the collection.

Acceptance Criteria:
- [x] User can add anime to an existing collection.
- [x] If user want to add anime to collection but there is no collection yet, user can set collection name as new collection.
- [x] User can add an Anime to many collection
- [ ] Collection Name must unique
- [x] Collection Name doesn’t have special Char

### Collection info

[x] As a user, I can see if the anime already added to collection or not.

Acceptance Criteria:
- [x] User can see list of collection names where the anime already added.
- [x] User can click the collection name, and will redirect to Collection Detail page.

## Collection List Page

### Collection list info.
[x] As a user, I can see list of collection that already added.

Acceptance Criteria:
- [x] Show all collections at once on initial load page.
- [x] Each collection item should show collection name.
- [x] Each collection item should show anime cover/banner from the firstly added anime. If no anime added yet, use default image as cover/banner.
- [x] User can click the collection item, and will redirect to Collection Detail page.
- [x] The collections in this list should be persist even after a full page reload.

### Remove Collection
[x] As a user, I can remove collection from Collection List page.

Acceptance Criteria:
- [x] Show “Remove” button on each collection item/card.
- [x] Add confirmation modal/popup when user click Remove button, with collection name info.
- [x] After remove finished, collection list should be updated without reloading the page.

### Add Collection

[x] As a user, I can add collection from Collection List page.

Acceptance Criteria:
- [x] Show “Add a Collection” button on top of Collection List page.
- [x] When button clicked, show modal/popup to fill collection name (collection name should be unique) and submit as new collection.
- [x] After submit finished, new collection should automatically added to the list without reloading Collection List page.
- [ ] Collection Name must unique
- [x] Collection Name doesn’t have special Char

### Edit Collection (Optional)
[ ] As a user, I can edit collection name from Collection List page.

Acceptance Criteria:
- [ ] Show “Edit” button on each collection item/card.
- [ ] Add modal/popup when user click Edit button, with collection name input field,and submit button.
- [ ] After edit finished, collection list should be updated without reloading the page.
- [ ] Collection Name must unique
- [ ] Collection Name doesn’t have special Char.

## Collection Detail Page

### Collection detail info
[x] As a user, I can see list of anime that already added to the collection.

Acceptance Criteria:
- [x] Show collection name on top of the Collection Detail page.
- [x] Show all added anime at once on initial load page.
- [x] Each anime item/card should show anime name & anime cover/banner.
- [x] User can click the anime item, and will redirect to Anime Detail page.

### Remove anime from collection

[x] As a user, I can remove anime from Collection Detail page.

Acceptance Criteria:
- [x] Show “Remove” button on each anime item/card.
- [x] Add confirmation modal/popup when user click Remove button, with anime title info.
- [x] After remove finished, anime list should be updated without reloading the page.

### Edit Collection Name (Optional)
[ ] As a user, I can edit collection name from Collection Detail page.

Acceptance Criteria:
- [ ] Show “Edit” button on top of Collection Detail page.
- [ ] Add modal/popup when user click Edit button, with collection name input field, and submit button.
- [ ] After edit finished, collection detail page should be updated without reloading thepage.
- [ ] Collection Name must unique
- [ ] Collection Name doesn’t have special Char.