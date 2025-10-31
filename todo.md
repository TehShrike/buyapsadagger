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
- [ ] sign up for PSA affiliate program
- [ ] find out why the filters card is wider than 250px
- [ ] add a "why?" link at the top after "buy a psa dagger".  Maybe a "details" element right below it

## What about the filters?

Rename "either" to "don't care"?

If a pistol size only has one variant for a particular filter, that option should not show up in the sidebar.  The option *should* show up in the titles.

If, because of other filter options, selecting a specific filter option would show zero results, that filter option should be disabled.  The option should *not* show up in the titles.

The "any"/"either" option should always be enabled.

How do you determine "the user made a selection" versus it being implicit because of no other options?

When does a variant *not* show up in a title?
1. when the user actually clicked on it
2. when the option is displayed

- once, for each size option
	- For each filter option, make a map of selection to number of pistols of that size that have that selection
	- Make a map of "displayed filter options", where an option is displayed if there are at least 2 selection choices with >=1 results
- each time any selections are changed
	- for each filter option, make a set of selections that exist among the currently displayed pistols
	- Make a map of "enabled filter options", where an option is enabled if the previous set contains >=1 selections



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
