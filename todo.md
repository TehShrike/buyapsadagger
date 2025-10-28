- [x] implement the dark theme
- [x] get "dlc" in frame coating metadata
- [ ] find out why the filters card is wider than 250px
- [ ] make the buttons in the filters card stretch to fill the width of the bar
- [ ] make it so optic compatibility only shows up if you pick something other than "none"
- [ ] make it so that optic compatibility options only show up if there are any pistols with that option in the current size
- [ ] make it so the boolean filter options only show up if there are some options to choose from
- [ ] make it so the "has cover plate" filter only applies if the pistol is optic capable
- [ ] make it not look jank when there are no results (might not be necessary when the above is done)
- [ ] make it so that the pistol result cards are all the same smaller width even when there are <3 results in a row
- [x] sans serif fonts
- [x] generate custom title
- [ ] look into why the images didn't get shrunk to 400px last time?
- [ ] sign up for PSA affiliate program


## To generalize for other sites

- [ ] make ALL COLOR VALUES be named variables
- [ ] make all color variables be passed in to the index as an object
- [ ] product array passed into root component
- [ ] secondary filter options passed into root component
- [ ] primary filter options (size, in this case) passed into root component

## SSR

- [ ] original querystring data must be passed into component
- [ ] component renders without looking for browser state
- [ ] CFW that renders the component with the data inputs
- [ ] script must rehydrate
