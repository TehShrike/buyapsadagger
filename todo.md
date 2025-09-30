- [x] number the scripts so that order of operations is obvious
- [x] the current daggers.json should be in the psa-parsers/products directory
- [x] new script that reads it in and writes the simpler processed version to public
- [x] live Svelte component that displays items
- [x] need to describe all the behaviors for the radio links
	- `a` element, so it's a clickable link
	- needs to take a property/value, to determine the querystring update caused by the link
	- needs to take whatever the current value of the property is, to determine active status
		- or maybe just take an "active" boolean?
- [x] Get the pistol silhouettes looking reasonable in the buttons
- [ ] Filtering UI
	- [ ] checkboxes for micro/compact/full-size
	- [ ] checkboxes for extra-long barrel
	- [ ] uncheckable radio buttons rather than radio buttons with a "don't care" option?
	- [ ] checkboxes for optic compatibility (rmr, shield rmsc, don't care?)
	- [ ] checkbox for cover plate
- [ ] download representative images for each product
- [ ] resize the images to be small
- [ ] sign up for PSA affiliate program
- [ ] update the querystring on change
- [ ] server-side render in CFW, rehydrate
- [ ] make the checkbox buttons links for the benefit of scrapers

## Output right now

- psa product name
- psa url
- size name (micro, compact, full_size_s)
- width (numeric, assume inches)
- length (numeric, assume inches)
- height (numeric, assume inches)
- barrel length (numeric, assume inches)
- longer_barrel (boolean, true for all the X variants)
- threaded barrel (boolean)
- night sight (boolean)
- compensated_slide (boolean)
- slide_finish
- optic_compatibility (none, rmr, shield rmsc)
- has cover plate (boolean)
- mag+bag bonus (boolean)
- number of included mags

## UI

Pistol size
- Micro: It's pretty small
	- barrel width: 3.41
	- width factor: 1
- Compact: Several credit cards wider, more than half an inch longer
	- barrel width: 3.9
	- width factor: 1.14369501
- Full Size: Longer handle if you have big hands or want the extra 2 rounds per magazine
	- barrel length: 3.9
	- width factor: 1.14369501

- Longer barrel? Yes/No/Either: adds a little over half an inch to the barrel – makes it easier to hit what you're pointing at

### Secondary

- Threaded barrel: if you want to be able to stick a suppressor or flash hider or something on your gun
- Night sight: they glow in the dark
- Optic compatibility: if you want to put an electronic reflex sight on your gun
	- Any/None/RMR/Shield RMSc
- If they chose yes
	- Has a cover plate: if you're not going to put an optic on right away
