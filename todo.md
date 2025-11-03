- [x] implement the dark theme
- [x] get "dlc" in frame coating metadata
- [x] make the buttons in the filters card stretch to fill the width of the bar
- [x] make it so "has cover plate" only shows up if you pick an optic compatibility other than "none"
- [x] make it so that optic compatibility options only show up if there are any pistols with that option in the current size
- [x] make it so the boolean filter options only show up if there are some options to choose from
- [x] if the size changes, and an option is no longer displayed, it should be ignored when filtering
- [x] display "no results" when appropriate (should only happen sometimes when changing size)
- [x] make it so that the pistol result cards are all the same smaller width even when there are <3 results in a row
- [x] sans serif fonts
- [x] generate custom title
- [x] deploy to CF Pages
- [x] look into why the images didn't get shrunk to 400px last time?
- [x] apply for PSA affiliate program
- [x] add a "why?" link at the top after "buy a psa dagger".  Maybe a "details" element right below it
- [ ] rebuild daily on some local machine
- [ ] add a "why this page rather than PSA.com?" details section
	- link to the official site
 	- speed
  	- browsability for normal people
	- link to blog post
- [x] remove the build folder from git
- [ ] remove "Filters" heading - maybe change to "Options"?
- [ ] ask Claude what filters should probably be added
- [ ] add new filters, probably the ceramic/diamond coatings
- [ ] remove night sights from filters, add to title?
- [ ] revisit design details?

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
