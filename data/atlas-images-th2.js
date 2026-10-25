(function(){ var I = window.ATLAS_IMAGES = window.ATLAS_IMAGES || {}; I.th = I.th || {};
// Portraits (and, where no free likeness exists, symbolic images marked sym:true) for thinkers missing from atlas-images.js.
var add = {
 "sextus": {
  "src": "img/th/sextus.webp",
  "credit": "Sextus Empiricus, imagined portrait medallion, engraving · Universitätsbibliothek Leipzig · Public domain",
  "file": "https://www.flickr.com/photos/132294445@N05/17020943966",
  "pos": "50% 30%"
 },
 "xunzi": {
  "src": "img/th/xunzi.webp",
  "credit": "Xunzi, imagined portrait · Unknown artist · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Portrait_of_Xun_Zi.jpg",
  "pos": "50% 30%"
 },
 "anscombe": {
  "src": "img/th/anscombe.webp",
  "credit": "Photo via Wikipedia · non-free, used under fair use",
  "file": "https://en.wikipedia.org/wiki/File:Gertrude_Elizabeth_Margaret_Anscombe.jpg",
  "pos": "50% 30%"
 },
 "murdoch": {
  "src": "img/th/murdoch.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "foot": {
  "src": "img/th/foot.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "thomson": {
  "src": "img/th/thomson.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "williams": {
  "src": "img/th/williams.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "mackie": {
  "src": "img/th/mackie.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "rorty": {
  "src": "img/th/rorty.webp",
  "credit": "Richard Rorty, drawing, 2013 · Manuelredondoduenas · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Richard_McKay_Rorty.png",
  "pos": "50% 30%"
 },
 "jackson": {
  "src": "img/th/jackson.webp",
  "credit": "Frank Jackson · Photo: Pashute · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:FrankJackson.jpg",
  "pos": "50% 30%"
 },
 "vaninwagen": {
  "src": "img/th/vaninwagen.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "gstrawson": {
  "src": "img/th/gstrawson.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "pereboom": {
  "src": "img/th/pereboom.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "street": {
  "src": "img/th/street.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "goff": {
  "src": "img/th/goff.webp",
  "credit": "Philip Goff, 2018 · Photo: Art Uncut · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Philip_Goff.jpg",
  "pos": "50% 30%"
 },
 "ross": {
  "src": "img/th/ross.webp",
  "credit": "W. D. Ross · Wikimedia Commons (uploaded by Writersfinger) · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:W-D-Ross.jpg",
  "pos": "50% 30%"
 },
 "scanlon": {
  "src": "img/th/scanlon.webp",
  "credit": "T. M. Scanlon, 2018 · Photo: Edmond J. Safra Center for Ethics · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Kissel_Lecture_with_Philippe_Van_Parijs_%2841326690252%29.jpg",
  "pos": "50% 30%"
 },
 "rand": {
  "src": "img/th/rand.webp",
  "credit": "Ayn Rand, 1943 · Photo: Talbot · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Ayn_Rand_%281943_Talbot_portrait%29.jpg",
  "pos": "50% 30%"
 },
 "adams_rm": {
  "src": "img/th/adams_rm.webp",
  "credit": "Robert Merrihew Adams, 2006 · Photo: Kaihsu Tai · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:RobertMerrihewAdams20060625.jpg",
  "pos": "50% 30%"
 },
 "kamm": {
  "src": "img/th/kamm.webp",
  "credit": "Frances Kamm, 2019 · Photo: Edmond J. Safra Center for Ethics · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Frances_Kamm.jpg",
  "pos": "50% 30%"
 },
 "quinn_warren": {
  "src": "img/th/quinn_warren.webp",
  "credit": "Symbol: a railway switch, for Quinn’s defence of the doctrine of double effect · Photo: Elsie esq. · CC BY 2.0",
  "file": "https://www.flickr.com/photos/61132483@N00/4164899",
  "pos": "50% 50%",
  "sym": true
 },
 "harman": {
  "src": "img/th/harman.webp",
  "credit": "Gilbert Harman, 1960 yearbook photo · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Gilbert_Harman_1960_yearbook_photo_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "wong": {
  "src": "img/th/wong.webp",
  "credit": "Symbol: yin and yang, for Wong’s pluralistic relativism and comparative ethics · Photo: DonkeyHotey · CC BY 2.0",
  "file": "https://www.flickr.com/photos/47422005@N04/5727907084",
  "pos": "50% 50%",
  "sym": true
 },
 "joyce": {
  "src": "img/th/joyce.webp",
  "credit": "Richard Joyce, 2015 · Photo: Puku999 · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:RichardJoyce.jpg",
  "pos": "50% 30%"
 },
 "blackburn": {
  "src": "img/th/blackburn.webp",
  "credit": "Simon Blackburn, 2017 · Photo: Bengt Oberger · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Simon_Blackburn.jpg",
  "pos": "50% 30%"
 },
 "gibbard": {
  "src": "img/th/gibbard.webp",
  "credit": "Symbol: a road sign stating a norm, for Gibbard’s norm-expressivism · Photo: Richard Masoner / Cyclelicious · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/99247795@N00/5465305209",
  "pos": "50% 50%",
  "sym": true
 },
 "hart": {
  "src": "img/th/hart.webp",
  "credit": "H. L. A. Hart · Wikimedia Commons (uploaded by Robespierre 7) · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:H.L.A.Hart.jpg",
  "pos": "50% 30%"
 },
 "davis_angela": {
  "src": "img/th/davis_angela.webp",
  "credit": "Angela Davis, 1974 · Photo: Philippe Halsman · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Angela_Davis%2C_1974_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "wolf": {
  "src": "img/th/wolf.webp",
  "credit": "Susan Wolf giving the Howison Lecture, 2024 · Photo: UC Berkeley Events · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Susan_Rose_Wolf_%28born_1952%29_giving_the_2024_Howison_Lecture_Character_and_Agency.png",
  "pos": "50% 30%"
 },
 "feldman": {
  "src": "img/th/feldman.webp",
  "credit": "Symbol: an hourglass, for Feldman’s deprivation account of the badness of death · Photo: Tijs Zwinkels · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/41668395@N04/3988939596",
  "pos": "50% 50%",
  "sym": true
 },
 "mcmahan": {
  "src": "img/th/mcmahan.webp",
  "credit": "Symbol: a soldier’s helmet, for McMahan’s revisionist ethics of war · Photo: veteranscallusa · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/143709845@N08/28116689060",
  "pos": "50% 50%",
  "sym": true
 },
 "protagoras": {
  "src": "img/th/protagoras.webp",
  "credit": "Protagoras, imagined portrait by Jusepe de Ribera, 1637 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Ribera_-_Protagoras%2C_1637.jpg",
  "pos": "50% 30%"
 },
 "benatar": {
  "src": "img/th/benatar.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "scruton": {
  "src": "img/th/scruton.webp",
  "credit": "Roger Scruton · Photo: Pete Helme · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Roger_Scruton_by_Pete_Helme.jpg",
  "pos": "50% 30%"
 },
 "churchland": {
  "src": "img/th/churchland.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "swinburne": {
  "src": "img/th/swinburne.webp",
  "credit": "Richard Swinburne, 2009 · Photo: Ziel · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Richard_Swinburne_2009_%283x4_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "metzinger": {
  "src": "img/th/metzinger.webp",
  "credit": "Thomas Metzinger, 2022 · Photo: Jumpilo · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Thomas_Metzinger_2023_free.jpg",
  "pos": "50% 30%"
 },
 "shoemaker": {
  "src": "img/th/shoemaker.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "worrall": {
  "src": "img/th/worrall.webp",
  "credit": "John Worrall, c. 2000 · LSE Library · No known copyright restrictions",
  "file": "https://commons.wikimedia.org/wiki/File:John_Worrall.jpg",
  "pos": "50% 30%"
 },
 "van_fraassen": {
  "src": "img/th/van_fraassen.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "godel": {
  "src": "img/th/godel.webp",
  "credit": "Kurt Gödel, c. 1926 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Kurt_g%C3%B6del.jpg",
  "pos": "50% 30%"
 },
 "hilbert": {
  "src": "img/th/hilbert.webp",
  "credit": "David Hilbert, 1912 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Hilbert.jpg",
  "pos": "50% 30%"
 },
 "field": {
  "src": "img/th/field.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "shapiro": {
  "src": "img/th/shapiro.webp",
  "credit": "Symbol: a chessboard, for Shapiro’s structuralism (a number is a position in a pattern) · Photo: Anothernumber6 · Public domain",
  "file": "https://www.flickr.com/photos/133462939@N07/30188401426",
  "pos": "50% 50%",
  "sym": true
 },
 "bonjour": {
  "src": "img/th/bonjour.webp",
  "credit": "Symbol: a geometer’s compass, for BonJour’s defence of a priori insight · Photo: unknown photographer · CC0",
  "file": "https://www.rawpixel.com/image/6820778/png-sticker-vintage",
  "pos": "50% 50%",
  "sym": true
 },
 "carnap": {
  "src": "img/th/carnap.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "williamson": {
  "src": "img/th/williamson.webp",
  "credit": "Timothy Williamson, 2014 · Photo: A Williamson · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Professor_Timothy_Williamson_%28cropped%29.JPG",
  "pos": "50% 30%"
 },
 "kit_fine": {
  "src": "img/th/kit_fine.webp",
  "credit": "Symbol: trees in fog, for Fine’s theory of vagueness · Photo: rrrtem · CC BY 2.0",
  "file": "https://www.flickr.com/photos/33756516@N07/5693153816",
  "pos": "50% 50%",
  "sym": true
 },
 "edgington": {
  "src": "img/th/edgington.webp",
  "credit": "Symbol: a heap of sand, for Edgington’s degree theory of vagueness (the sorites heap) · Photo: lofidelion · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/145468477@N06/34991794063",
  "pos": "50% 50%",
  "sym": true
 },
 "sider": {
  "src": "img/th/sider.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "hirsch": {
  "src": "img/th/hirsch.webp",
  "credit": "Symbol: a dictionary, for Hirsch’s view that many ontology debates are verbal · Photo: flazingo_photos · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/124247024@N07/14090440354",
  "pos": "50% 50%",
  "sym": true
 },
 "prior": {
  "src": "img/th/prior.webp",
  "credit": "Arthur Prior, 1959 · Photo courtesy of Martin Prior · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Arthur_Prior_in_Wakefield_1959_from_son_Martin_Prior.png",
  "pos": "50% 30%"
 },
 "mctaggart": {
  "src": "img/th/mctaggart.webp",
  "credit": "Photo: Walter Stoneman, 1917 · Public domain in the US",
  "file": "https://en.wikipedia.org/wiki/File:John_Mctaggart_Ellis_McTaggart.jpg",
  "pos": "50% 30%"
 },
 "tooley": {
  "src": "img/th/tooley.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "mumford": {
  "src": "img/th/mumford.webp",
  "credit": "Symbol: iron filings around a magnet, for Mumford’s metaphysics of powers · Photo: oskay · CC BY 2.0",
  "file": "https://www.flickr.com/photos/17425845@N00/4581193346",
  "pos": "50% 50%",
  "sym": true
 },
 "woodward": {
  "src": "img/th/woodward.webp",
  "credit": "Symbol: a light switch, for Woodward’s interventionist account of causation · Photo: Dean Hochman · CC BY 2.0",
  "file": "https://www.flickr.com/photos/17997843@N02/27882707399",
  "pos": "50% 50%",
  "sym": true
 },
 "armstrong": {
  "src": "img/th/armstrong.webp",
  "credit": "D. M. Armstrong, 2007 · Photo: Damato · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:DavidMArmstrong.jpg",
  "pos": "50% 30%"
 },
 "broad": {
  "src": "img/th/broad.webp",
  "credit": "C. D. Broad, 1959 · Photo from Paul Arthur Schilpp (ed.) · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:C._D._Broad_philosopher.png",
  "pos": "50% 30%"
 },
 "voltaire": {
  "src": "img/th/voltaire.webp",
  "credit": "Voltaire, portrait by Nicolas de Largillière, c. 1718–24 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Nicolas_de_Largilli%C3%A8re_-_Portrait_de_Voltaire_%281694-1778%29_en_1718_-_P208_-_mus%C3%A9e_Carnavalet_-_5_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "paine": {
  "src": "img/th/paine.webp",
  "credit": "Thomas Paine, portrait by Laurent Dabos, c. 1792 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Laurent_Dabos_%E2%80%93_Thomas_Paine_%E2%80%93_Google_Art_Project.jpg",
  "pos": "50% 30%"
 },
 "huxley": {
  "src": "img/th/huxley.webp",
  "credit": "Thomas Henry Huxley · Photo: Lock & Whitfield (Wellcome Collection) · CC BY 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Thomas_Henry_Huxley._Photograph_by_Lock_%26_Whitfield._Wellcome_V0026596.jpg",
  "pos": "50% 30%"
 },
 "estlund": {
  "src": "img/th/estlund.webp",
  "credit": "Symbol: a ballot going into a ballot box, for Estlund’s epistemic proceduralism · Photo: knezovjb · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/14876615@N08/2931790897",
  "pos": "50% 50%",
  "sym": true
 },
 "christiano": {
  "src": "img/th/christiano.webp",
  "credit": "Symbol: raised hands in a vote, for Christiano’s egalitarian defence of democracy · Photo: Fibonacci Blue · CC BY 2.0",
  "file": "https://www.flickr.com/photos/44550450@N04/9583677583",
  "pos": "50% 50%",
  "sym": true
 },
 "landemore": {
  "src": "img/th/landemore.webp",
  "credit": "Symbol: a crowd, for Landemore’s ‘democratic reason’ (the wisdom of the many) · Photo: sonstroem · CC BY 2.0",
  "file": "https://www.flickr.com/photos/96964826@N05/10955401155",
  "pos": "50% 50%",
  "sym": true
 },
 "brennan": {
  "src": "img/th/brennan.webp",
  "credit": "Jason Brennan, 2016 · Photo: Gage Skidmore · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Jason_Brennan_portrait.jpg",
  "pos": "50% 30%"
 },
 "daniel_bell": {
  "src": "img/th/daniel_bell.webp",
  "credit": "Symbol: the Temple of Heaven, Beijing, for Bell’s Confucian political meritocracy · Photo: kevinpoh · CC BY 2.0",
  "file": "https://www.flickr.com/photos/7679455@N03/4506894149",
  "pos": "50% 50%",
  "sym": true
 },
 "waldron": {
  "src": "img/th/waldron.webp",
  "credit": "Jeremy Waldron, 2010 · Photo: James G. Milles · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Jeremy_Waldron_Baldy_Center.jpg",
  "pos": "50% 30%"
 },
 "feinberg": {
  "src": "img/th/feinberg.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "sunstein": {
  "src": "img/th/sunstein.webp",
  "credit": "Cass Sunstein, 2008 · Photo: Matthew W. Hutchins, Harvard Law Record · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Cass_Sunstein_in_2008_%283x4_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "conly": {
  "src": "img/th/conly.webp",
  "credit": "Symbol: a no-smoking sign, for Conly’s coercive paternalism · Photo: Jonathan Rolande · CC BY 2.0",
  "file": "https://www.flickr.com/photos/110671496@N06/14173694962",
  "pos": "50% 50%",
  "sym": true
 },
 "burke": {
  "src": "img/th/burke.webp",
  "credit": "Edmund Burke, portrait by Joshua Reynolds (National Galleries of Scotland) · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Sir_Joshua_Reynolds_-_Edmund_Burke%2C_1729_-_1797._Statesman%2C_orator_and_author_-_PG_2362_-_National_Galleries_of_Scotland_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "oakeshott": {
  "src": "img/th/oakeshott.webp",
  "credit": "Michael Oakeshott, 1960s · LSE Library · No known copyright restrictions",
  "file": "https://commons.wikimedia.org/wiki/File:Michael_Oakeshott.jpg",
  "pos": "50% 30%"
 },
 "de_maistre": {
  "src": "img/th/de_maistre.webp",
  "credit": "Joseph de Maistre, portrait by Carl Christian Vogel von Vogelstein, c. 1810 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Jmaistre.jpg",
  "pos": "50% 30%"
 },
 "godwin": {
  "src": "img/th/godwin.webp",
  "credit": "William Godwin, portrait by Henry William Pickersgill, 1830 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:William_Godwin_by_Henry_William_Pickersgill.jpg",
  "pos": "50% 30%"
 },
 "stirner": {
  "src": "img/th/stirner.webp",
  "credit": "Max Stirner, sketch by Friedrich Engels, 1842 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Friedrich_Engels_-_Die_Freien_%281842%29-1.1_V01-1.2_raw_RGASPI_%28Stirner_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "noddings": {
  "src": "img/th/noddings.webp",
  "credit": "Nel Noddings, 2011 · Photo: Jim Noddings · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Nel_Noddings_2011_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "held": {
  "src": "img/th/held.webp",
  "credit": "Virginia Held, 2013 · Photo: GC Mellon Sawyer · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Virginia_Held_at_2013_Mellon_Sawyer_Seminar.jpg",
  "pos": "50% 30%"
 },
 "fried": {
  "src": "img/th/fried.webp",
  "credit": "Charles Fried, 2009 · Photo: Matthew W. Hutchins, Harvard Law Record · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Charles_Fried_at_Harvard.jpg",
  "pos": "50% 30%"
 },
 "garner": {
  "src": "img/th/garner.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "olson_jonas": {
  "src": "img/th/olson_jonas.webp",
  "credit": "Symbol: a question mark, for Olson’s moral error theory · Photo: ryanmilani · CC BY 2.0",
  "file": "https://www.flickr.com/photos/51029297@N00/5275403364",
  "pos": "50% 50%",
  "sym": true
 },
 "bell": {
  "src": "img/th/bell.webp",
  "credit": "Clive Bell, portrait by Roger Fry, c. 1924 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Clive_Bell.jpg",
  "pos": "50% 30%"
 },
 "tolstoy": {
  "src": "img/th/tolstoy.webp",
  "credit": "Leo Tolstoy, 1908 · Photo: Sergey Prokudin-Gorsky · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Leo_Tolstoy_1908_Portrait_%283x4_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "collingwood": {
  "src": "img/th/collingwood.webp",
  "credit": "R. G. Collingwood · Thoemmes Continuum · Copyrighted free use",
  "file": "https://commons.wikimedia.org/wiki/File:Robin_G._Collingwood.jpg",
  "pos": "50% 30%"
 },
 "wilde": {
  "src": "img/th/wilde.webp",
  "credit": "Oscar Wilde, 1882 · Photo: Napoleon Sarony · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "carroll": {
  "src": "img/th/carroll.webp",
  "credit": "Noël Carroll, 2005 · Photo: FredChef · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:No%C3%ABl_Carroll_%282005%29.jpg",
  "pos": "50% 30%"
 },
 "kane": {
  "src": "img/th/kane.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "fischer": {
  "src": "img/th/fischer.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "smilansky": {
  "src": "img/th/smilansky.webp",
  "credit": "Symbol: a theatre mask, for Smilansky’s illusionism about free will · Photo: Tilemahos Efthimiadis · CC BY 2.0",
  "file": "https://www.flickr.com/photos/64379474@N00/3471623168",
  "pos": "50% 50%",
  "sym": true
 },
 "pascal": {
  "src": "img/th/pascal.webp",
  "credit": "Blaise Pascal, copy after François II Quesnel, c. 1690 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Blaise_Pascal_Versailles%2C_circa_1690.JPG",
  "pos": "50% 30%"
 },
 "derose": {
  "src": "img/th/derose.webp",
  "credit": "Keith DeRose, 2021 · Photo: Steven Hause · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:KeithDeRose.png",
  "pos": "50% 30%"
 },
 "alston": {
  "src": "img/th/alston.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "hacking": {
  "src": "img/th/hacking.webp",
  "credit": "Ian Hacking, 2009 · Photo: Ludvig Hertzberg · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Ian_Hacking_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "salmon": {
  "src": "img/th/salmon.webp",
  "credit": "Symbol: billiard balls, for Salmon’s causal-process account of explanation · Photo: Puddin Tain · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/155396095@N08/51843163981",
  "pos": "50% 50%",
  "sym": true
 },
 "einstein": {
  "src": "img/th/einstein.webp",
  "credit": "Albert Einstein, 1947 · Photo: Orren Jack Turner · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head_cleaned.jpg",
  "pos": "50% 30%"
 },
 "sorensen": {
  "src": "img/th/sorensen.webp",
  "credit": "Symbol: a blindfolded head, for Sorensen’s epistemicism (sharp but unknowable boundaries) · Photo: Gastev · CC BY 2.0",
  "file": "https://www.flickr.com/photos/12148520@N00/2960556197",
  "pos": "50% 50%",
  "sym": true
 },
 "leng": {
  "src": "img/th/leng.webp",
  "credit": "Symbol: a book of fairy tales, for Leng’s mathematical fictionalism · Photo: crackdog · CC BY 2.0",
  "file": "https://www.flickr.com/photos/88645472@N00/4634049347",
  "pos": "50% 50%",
  "sym": true
 },
 "duff": {
  "src": "img/th/duff.webp",
  "credit": "Symbol: a judge’s gavel, for Duff’s communicative theory of punishment · Photo: ccPixs.com · CC BY 2.0",
  "file": "https://www.flickr.com/photos/86530412@N02/8213432552",
  "pos": "50% 50%",
  "sym": true
 },
 "christie": {
  "src": "img/th/christie.webp",
  "credit": "Nils Christie speaking, 2007 · Photo: Don LaVange · CC BY-SA 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Nils_Christie_at_Third_Annual_Death_Penalty_Symposium_2007.jpg",
  "pos": "50% 30%"
 },
 "michael_moore": {
  "src": "img/th/michael_moore.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "sandel": {
  "src": "img/th/sandel.webp",
  "credit": "Michael Sandel, 2023 · Photo: Fronteiras do Pensamento · CC BY-SA 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Michael_Sandel_Frontiers_of_Thought_2023_%283x4cropped%29.jpg",
  "pos": "50% 30%"
 },
 "macintyre": {
  "src": "img/th/macintyre.webp",
  "credit": "Alasdair MacIntyre, 2009 · Photo: Sean O’Connor · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Alasdair_MacIntyre.jpg",
  "pos": "50% 30%"
 },
 "rp_wolff": {
  "src": "img/th/rp_wolff.webp",
  "credit": "Robert Paul Wolff, 2018 · Photo: Ufopp · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Robert_Paul_Wolff.jpg",
  "pos": "50% 30%"
 },
 "huemer": {
  "src": "img/th/huemer.webp",
  "credit": "Michael Huemer, 2015 · Photo: Kborer · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Michael_Huemer.jpg",
  "pos": "50% 30%"
 },
 "fish": {
  "src": "img/th/fish.webp",
  "credit": "Symbol: a megaphone (Constructivist poster design), for Fish’s ‘There’s No Such Thing as Free Speech’ · Photo: Κλούτσις Γκ., Klutsis G. · CC BY-SA 4.0",
  "file": "https://www.momus.gr/collections/0013477",
  "pos": "50% 50%",
  "sym": true
 },
 "richard_taylor": {
  "src": "img/th/richard_taylor.webp",
  "credit": "Symbol: Sisyphus and his boulder, for Taylor’s essay on the meaning of life · Photo: Dreaming in the deep south · CC BY 2.0",
  "file": "https://www.flickr.com/photos/22519875@N08/7328405210",
  "pos": "50% 50%",
  "sym": true
 },
 "norcross": {
  "src": "img/th/norcross.webp",
  "credit": "Symbol: a thermometer’s scale, for Norcross’s scalar consequentialism · Photo: matsuyuki · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/12173213@N00/4057428737",
  "pos": "50% 50%",
  "sym": true
 },
 "hursthouse": {
  "src": "img/th/hursthouse.webp",
  "credit": "Rosalind Hursthouse · Photo: Bronkoji (Wikimedia Commons) · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:RHursthouse.jpg",
  "pos": "50% 30%"
 },
 "dancy": {
  "src": "img/th/dancy.webp",
  "credit": "Jonathan Dancy, Paris 2013 · Photo: A. Zielinska · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Jonathan_Dancy%2C_Paris_2013.JPG",
  "pos": "50% 30%"
 },
 "scheffler": {
  "src": "img/th/scheffler.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "kagan": {
  "src": "img/th/kagan.webp",
  "credit": "Shelly Kagan, 2012 · Photo: Miran Rijavec · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Shelly_Kagan_Yale_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "hurka": {
  "src": "img/th/hurka.webp",
  "credit": "Symbol: a climber on a summit, for Hurka’s perfectionism · Photo: Paxson Woelber · CC BY 2.0",
  "file": "https://www.flickr.com/photos/59306007@N08/5434541912",
  "pos": "50% 50%",
  "sym": true
 },
 "driver": {
  "src": "img/th/driver.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "carruthers": {
  "src": "img/th/carruthers.webp",
  "credit": "Peter Carruthers, 2008 · Photo: Mark Pharoah · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Petercarruthers.jpg",
  "pos": "50% 30%"
 },
 "rowlands": {
  "src": "img/th/rowlands.webp",
  "credit": "Mark Rowlands, 2025 · Photo: Rosiestep · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Mark_Rowlands_at_National_Book_Festival_2025.jpg",
  "pos": "50% 30%"
 },
 "tronto": {
  "src": "img/th/tronto.webp",
  "credit": "Joan Tronto, 2015 · Photo: Zorgethiek · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Joan_Tronto_on_Zorg_Ethiek.jpg",
  "pos": "50% 30%"
 },
 "slote": {
  "src": "img/th/slote.webp",
  "credit": "Symbol: an adult’s hand holding a baby’s, for Slote’s ethics of empathy and care · Photo: Richard Welter · CC BY 2.0",
  "file": "https://www.flickr.com/photos/84774987@N00/5698180775",
  "pos": "50% 50%",
  "sym": true
 },
 "scheler": {
  "src": "img/th/scheler.webp",
  "credit": "Photo: August Sander, 1925 · Public domain in the US",
  "file": "https://en.wikipedia.org/wiki/File:Scheler_max.jpg",
  "pos": "50% 30%"
 },
 "berlin": {
  "src": "img/th/berlin.webp",
  "credit": "Isaiah Berlin, 1983 · Photo: Rob C. Croes (Anefo) · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:IsaiahBerlin1983.jpg",
  "pos": "50% 30%"
 },
 "danto": {
  "src": "img/th/danto.webp",
  "credit": "Arthur Danto, 2012 · Photo: AmeOnTheLoose · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Arthur_Danto%2C_2012.jpg",
  "pos": "50% 30%"
 },
 "dickie": {
  "src": "img/th/dickie.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "levinson": {
  "src": "img/th/levinson.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "gaut": {
  "src": "img/th/gaut.webp",
  "credit": "Symbol: a painter’s palette, for Gaut’s cluster account of art and ethicism · Photo: Valerie Everett · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/66742614@N00/4018381856",
  "pos": "50% 50%",
  "sym": true
 },
 "goodman": {
  "src": "img/th/goodman.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "beardsley": {
  "src": "img/th/beardsley.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "wimsatt": {
  "src": "img/th/wimsatt.webp",
  "credit": "Symbol: quill pens, for Wimsatt’s ‘intentional fallacy’ · Photo: Free Public Domain Illustrations by rawpixel · CC BY 2.0",
  "file": "https://www.flickr.com/photos/153584064@N07/46733126582",
  "pos": "50% 50%",
  "sym": true
 },
 "barthes": {
  "src": "img/th/barthes.webp",
  "credit": "Roland Barthes, c. 1970 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Roland_Barthes_ca_1970.jpg",
  "pos": "50% 30%"
 },
 "adorno": {
  "src": "img/th/adorno.webp",
  "credit": "Theodor W. Adorno, 1964 · Photo: Jeremy J. Shapiro · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Theodor_W._Adorno.jpg",
  "pos": "50% 30%"
 },
 "horkheimer": {
  "src": "img/th/horkheimer.webp",
  "credit": "Max Horkheimer, 1964 · Photo: Jeremy J. Shapiro · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Max_Horkheimer.jpg",
  "pos": "50% 30%"
 },
 "bourdieu": {
  "src": "img/th/bourdieu.webp",
  "credit": "Pierre Bourdieu, 1996 · Photo: Bernard Lambert · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Pierre_Bourdieu_%281%29.jpg",
  "pos": "50% 30%"
 },
 "abhinavagupta": {
  "src": "img/th/abhinavagupta.webp",
  "credit": "Imagined portrait of Abhinavagupta, modern painting · Narayan Dikshit · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:Abhinavagupta-5.BluMLhEy.jpg",
  "pos": "50% 30%"
 },
 "bharata": {
  "src": "img/th/bharata.webp",
  "credit": "Statue of Bharata Muni at IGNCA, Delhi (traditional depiction) · Photo: Nabhas Chandra · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Bharata_Muni_at_IGNCA%2C_Delhi.jpg",
  "pos": "50% 30%"
 },
 "kieran": {
  "src": "img/th/kieran.webp",
  "credit": "Symbol: a bitten apple, for Kieran’s defence of ‘forbidden knowledge’ in immoral art · Photo: Ruanon · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/70873497@N02/6935006104",
  "pos": "50% 50%",
  "sym": true
 },
 "eaton": {
  "src": "img/th/eaton.webp",
  "credit": "Symbol: a film reel, for Eaton’s robust immoralism about fiction and film · Photo: Sally E J Hunter · CC BY 2.0",
  "file": "https://www.flickr.com/photos/38891164@N02/4267356010",
  "pos": "50% 50%",
  "sym": true
 },
 "hanslick": {
  "src": "img/th/hanslick.webp",
  "credit": "Eduard Hanslick, published 1894 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Hanslick.jpg",
  "pos": "50% 30%"
 },
 "dutton": {
  "src": "img/th/dutton.webp",
  "credit": "Denis Dutton holding a hand axe, TED 2010 · Photo: Steve Jurvetson · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Dutton_HandAxe_Steve_Jurvetson.jpg",
  "pos": "50% 30%"
 },
 "weitz": {
  "src": "img/th/weitz.webp",
  "credit": "Symbol: an open gate, for Weitz’s view of art as an ‘open concept’ · Photo: FriaLOve · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/24518795@N07/2919598610",
  "pos": "50% 50%",
  "sym": true
 },
 "zangwill": {
  "src": "img/th/zangwill.webp",
  "credit": "Symbol: a rose, for Zangwill’s realism about beauty · Photo: szeke · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/43355249@N00/34309202136",
  "pos": "50% 50%",
  "sym": true
 },
 "sibley": {
  "src": "img/th/sibley.webp",
  "credit": "Symbol: a dancer sketched in motion, for Sibley’s ‘aesthetic concepts’ such as gracefulness · Photo: leochi · CC BY 2.0",
  "file": "https://www.flickr.com/photos/10663173@N04/4393776511",
  "pos": "50% 50%",
  "sym": true
 },
 "kenko": {
  "src": "img/th/kenko.webp",
  "credit": "Yoshida Kenkō, traditional Japanese depiction · Unknown artist · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Yoshida_Kenko.jpg",
  "pos": "50% 30%"
 },
 "okakura": {
  "src": "img/th/okakura.webp",
  "credit": "Okakura Kakuzō, c. 1905 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Okakura_Kakuzo_Portrait_c1905.png",
  "pos": "50% 30%"
 },
 "koestler": {
  "src": "img/th/koestler.webp",
  "credit": "Arthur Koestler, 1969 · Photo: Eric Koch (Anefo) · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Arthur_Koestler_%281969%29.jpg",
  "pos": "50% 30%"
 },
 "hirsch_ed": {
  "src": "img/th/hirsch_ed.webp",
  "credit": "E. D. Hirsch, 2015 · Photo: Policy Exchange · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:E._D._Hirsch_at_Policy_Exchange_Education_Lecture_%283%29.jpg",
  "pos": "50% 30%"
 },
 "shusterman": {
  "src": "img/th/shusterman.webp",
  "credit": "Symbol: a boombox, for Shusterman’s ‘The Fine Art of Rap’ · Photo: ThreeDee912 · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/9051339@N05/1323006352",
  "pos": "50% 50%",
  "sym": true
 },
 "kelly_sd": {
  "src": "img/th/kelly_sd.webp",
  "credit": "Symbol: a candle flame, for Kelly’s ‘All Things Shining’ and human creativity · Photo: Tim Ereneta · Public domain",
  "file": "https://www.flickr.com/photos/44124372600@N01/5374189877",
  "pos": "50% 50%",
  "sym": true
 },
 "chiang": {
  "src": "img/th/chiang.webp",
  "credit": "Ted Chiang, 2011 · Photo: Arturo Villarrubia · CC BY-SA 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Chiang%2C_Ted_%28Villarrubia%29_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "hertzmann": {
  "src": "img/th/hertzmann.webp",
  "credit": "Symbol: a vintage camera, for Hertzmann’s view of computers as artists’ tools, like the camera · Photo: kevin dooley · CC BY 2.0",
  "file": "https://www.flickr.com/photos/12836528@N00/5312655473",
  "pos": "50% 50%",
  "sym": true
 },
 "colton": {
  "src": "img/th/colton.webp",
  "credit": "Symbol: a robot mural, for Colton’s computational creativity · Photo: bdungeon76 · Public domain",
  "file": "https://www.flickr.com/photos/130413646@N05/19465853892",
  "pos": "50% 50%",
  "sym": true
 },
 "metz": {
  "src": "img/th/metz.webp",
  "credit": "Symbol: people joined hand in hand, for Metz’s relational account of meaning and harmony · Photo: guano · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/97838323@N00/5043855736",
  "pos": "50% 50%",
  "sym": true
 },
 "craig": {
  "src": "img/th/craig.webp",
  "credit": "William Lane Craig, 2014 · Photo: ReasonableFaith.org · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:William_Lane_Craig_%283x4_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "raz": {
  "src": "img/th/raz.webp",
  "credit": "Joseph Raz, 2009 · Photo: LawSociety98 · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Joseph_Raz_-_20090224.jpg",
  "pos": "50% 30%"
 },
 "finnis": {
  "src": "img/th/finnis.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "bostrom": {
  "src": "img/th/bostrom.webp",
  "credit": "Nick Bostrom, 2020 · Photo: Future of Humanity Institute · CC BY 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Prof_Nick_Bostrom_324-1.jpg",
  "pos": "50% 30%"
 },
 "mbiti": {
  "src": "img/th/mbiti.webp",
  "credit": "Symbol: a baobab tree, for Mbiti’s account of African community and ancestry · Photo: wallygrom · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/33037982@N04/3450546907",
  "pos": "50% 50%",
  "sym": true
 },
 "narveson": {
  "src": "img/th/narveson.webp",
  "credit": "Jan Narveson, 2008 · Photo: Institute for Liberal Studies · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Jan_Narveson.jpg",
  "pos": "50% 30%"
 },
 "cioran": {
  "src": "img/th/cioran.webp",
  "credit": "Emil Cioran, c. 1940s · Keystone agency · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Cioran_in_Romania.jpg",
  "pos": "50% 30%"
 },
 "chomsky": {
  "src": "img/th/chomsky.webp",
  "credit": "Noam Chomsky, 2017 · Photo: Σ (retouched by Wugapodes and Jonnmann) · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Noam_Chomsky_portrait_2017_retouched.jpg",
  "pos": "50% 30%"
 },
 "pchurchland": {
  "src": "img/th/pchurchland.webp",
  "credit": "Patricia Churchland, 2015 · Photo: Vera de Kok · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Patricia_Churchland%2C_2015_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "frankish": {
  "src": "img/th/frankish.webp",
  "credit": "Symbol: an optical illusion, for Frankish’s illusionism about consciousness · Photo: fdecomite · CC BY 2.0",
  "file": "https://www.flickr.com/photos/21649179@N00/5447437733",
  "pos": "50% 50%",
  "sym": true
 },
 "mcginn": {
  "src": "img/th/mcginn.webp",
  "credit": "Symbol: a padlock, for McGinn’s mysterianism · Photo: außerirdische sind gesund · CC BY 2.0",
  "file": "https://www.flickr.com/photos/88249458@N00/4241490395",
  "pos": "50% 50%",
  "sym": true
 },
 "pinker": {
  "src": "img/th/pinker.webp",
  "credit": "Steven Pinker, 2023 · Photo: Christopher Michel · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Steven_Pinker_in_2023.jpg",
  "pos": "50% 30%"
 },
 "papineau": {
  "src": "img/th/papineau.webp",
  "credit": "Symbol: a neuron, for Papineau’s physicalism about consciousness · Photo: MikeBlogs · CC BY 2.0",
  "file": "https://www.flickr.com/photos/31477768@N00/3101400087",
  "pos": "50% 50%",
  "sym": true
 },
 "block": {
  "src": "img/th/block.webp",
  "credit": "Photo: Ned Block · GFDL",
  "file": "https://commons.wikimedia.org/wiki/File:Large_ned.block.jpg",
  "pos": "50% 30%"
 },
 "turing": {
  "src": "img/th/turing.webp",
  "credit": "Alan Turing, 1951 · Photo: Elliott & Fry · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Alan_turing_header.jpg",
  "pos": "50% 30%"
 },
 "koch": {
  "src": "img/th/koch.webp",
  "credit": "Christof Koch, 2008 · Photo: Zereshk · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Koch_TASC2008.JPG",
  "pos": "50% 30%"
 },
 "seth": {
  "src": "img/th/seth.webp",
  "credit": "Anil Seth, 2019 · Photo: Carlos Figueroa Rojas · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Congreso_Futuro_-_2019-01-14_-_09.jpg",
  "pos": "50% 30%"
 },
 "penrose": {
  "src": "img/th/penrose.webp",
  "credit": "Roger Penrose, 2011 · Photo: Cirone-Musi, Festival della Scienza · CC BY-SA 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:Roger_Penrose_at_Festival_della_Scienza_Oct_29_2011.jpg",
  "pos": "50% 30%"
 },
 "schwitzgebel": {
  "src": "img/th/schwitzgebel.webp",
  "credit": "Symbol: a toy robot, for Schwitzgebel’s questions about machine minds · Photo: smaedli · CC BY 2.0",
  "file": "https://www.flickr.com/photos/75264768@N00/336498925",
  "pos": "50% 50%",
  "sym": true
 },
 "santayana": {
  "src": "img/th/santayana.webp",
  "credit": "George Santayana, 1947 · Wide World Photos · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:George_Santayana_at_Santo_Stefano_Rotondo_Convent_1947.png",
  "pos": "50% 30%"
 },
 "malebranche": {
  "src": "img/th/malebranche.webp",
  "credit": "Nicolas Malebranche, engraving, c. 1707–33 · Rijksmuseum · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:Portret_van_Nicolas_Malebranche%2C_RP-P-OB-72.656_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "patanjali": {
  "src": "img/th/patanjali.webp",
  "credit": "Statue of Patanjali (traditional depiction) · Photo: Rpba · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Patanjali.jpg",
  "pos": "50% 30%"
 },
 "schechtman": {
  "src": "img/th/schechtman.webp",
  "credit": "Symbol: an open book, for Schechtman’s narrative view of the self · Photo: Dave Dugdale · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/37387065@N05/5099718716",
  "pos": "50% 50%",
  "sym": true
 },
 "harris": {
  "src": "img/th/harris.webp",
  "credit": "Sam Harris, 2016 · Photo: Christopher Michel · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Sam_Harris_2016_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "wegner": {
  "src": "img/th/wegner.webp",
  "credit": "Symbol: a magician’s floating cards, for Wegner’s ‘illusion of conscious will’ · Photo: Bohman · CC BY 2.0",
  "file": "https://www.flickr.com/photos/79729522@N00/4394901689",
  "pos": "50% 50%",
  "sym": true
 },
 "holbach": {
  "src": "img/th/holbach.webp",
  "credit": "Baron d’Holbach, portrait by Alexander Roslin, 1785 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Paul_Heinrich_Dietrich_Baron_d%27Holbach_Roslin.jpg",
  "pos": "50% 30%"
 },
 "levy": {
  "src": "img/th/levy.webp",
  "credit": "Symbol: a die, for Levy’s ‘hard luck’ view of responsibility · Photo: Steve A Johnson · CC BY 2.0",
  "file": "https://www.flickr.com/photos/14529257@N03/5650007098",
  "pos": "50% 50%",
  "sym": true
 },
 "caruso": {
  "src": "img/th/caruso.webp",
  "credit": "Symbol: a stethoscope, for Caruso’s public-health model of crime · Photo: medisave · CC BY 2.0",
  "file": "https://www.flickr.com/photos/107621760@N03/10668832073",
  "pos": "50% 50%",
  "sym": true
 },
 "waller": {
  "src": "img/th/waller.webp",
  "credit": "Symbol: a chain, for Waller’s case against moral responsibility · Photo: Brian Smithson (Old Geordie) · CC BY 2.0",
  "file": "https://www.flickr.com/photos/15636379@N00/3870653508",
  "pos": "50% 50%",
  "sym": true
 },
 "balaguer": {
  "src": "img/th/balaguer.webp",
  "credit": "Symbol: a fractal spiral, for Balaguer’s view of free will as an open scientific question · Photo: kevin dooley · CC BY 2.0",
  "file": "https://www.flickr.com/photos/12836528@N00/35388675155",
  "pos": "50% 50%",
  "sym": true
 },
 "chisholm": {
  "src": "img/th/chisholm.webp",
  "credit": "Roderick Chisholm, c. 1955 · Pembroke Record · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Roderick_Chisholm_Pembroke_Record.jpg",
  "pos": "50% 30%"
 },
 "ginet": {
  "src": "img/th/ginet.webp",
  "credit": "Symbol: a feather, for Ginet’s non-causal account of free action · Photo: matthewvenn · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/85712049@N00/366873545",
  "pos": "50% 50%",
  "sym": true
 },
 "mccann": {
  "src": "img/th/mccann.webp",
  "credit": "Symbol: a raised hand, for McCann’s view of deciding as a free, uncaused act · Photo: kevin dooley · CC BY 2.0",
  "file": "https://www.flickr.com/photos/12836528@N00/3364591795",
  "pos": "50% 50%",
  "sym": true
 },
 "widerker": {
  "src": "img/th/widerker.webp",
  "credit": "Symbol: a signpost at a choice point, for Widerker’s defence of alternative possibilities · Photo: ccPixs.com · CC BY 2.0",
  "file": "https://www.flickr.com/photos/86530412@N02/8225380711",
  "pos": "50% 50%",
  "sym": true
 },
 "watson": {
  "src": "img/th/watson.webp",
  "credit": "Symbol: a compass, for Watson’s view of free agency as acting from what one values · Photo: Matt Biddulph · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/51035707449@N01/3087388964",
  "pos": "50% 50%",
  "sym": true
 },
 "wallace": {
  "src": "img/th/wallace.webp",
  "credit": "R. Jay Wallace, 2019 · Photo: Matt7b9 · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Jay-wallace-2019.jpg",
  "pos": "50% 30%"
 },
 "schlick": {
  "src": "img/th/schlick.webp",
  "credit": "Moritz Schlick, c. 1930 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Schlick_sitting.jpg",
  "pos": "50% 30%"
 },
 "brouwer": {
  "src": "img/th/brouwer.webp",
  "credit": "L. E. J. Brouwer, before 1937 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Luitzen_Egbertus_Jan_Brouwer.jpg",
  "pos": "50% 30%"
 },
 "dummett": {
  "src": "img/th/dummett.webp",
  "credit": "Michael Dummett, 2004 · Photo: Klaus Reisinger · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Michael_Dummett_September_2004_%284x5_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "vasubandhu": {
  "src": "img/th/vasubandhu.webp",
  "credit": "Vasubandhu, woodblock print by Shouyi, 1880 (traditional depiction) · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Vasubandhu.png",
  "pos": "50% 30%"
 },
 "akshapada": {
  "src": "img/th/akshapada.webp",
  "credit": "Symbol: smoke rising from a hillside fire, for the Nyaya inference ‘where there is smoke, there is fire’ · Photo: Forest Service Pacific Northwest Region · Public domain",
  "file": "https://www.flickr.com/photos/135886671@N08/54789526805",
  "pos": "50% 50%",
  "sym": true
 },
 "goldman": {
  "src": "img/th/goldman.webp",
  "credit": "Alvin Goldman, 1966 · University of Michigan News and Information Services · CC BY 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Alvin_Goldman_1966.jpg",
  "pos": "50% 30%"
 },
 "carneades": {
  "src": "img/th/carneades.webp",
  "credit": "Carneades, cast of an ancient bust · Wikimedia Commons · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:Carneades_bust.jpg",
  "pos": "50% 30%"
 },
 "cicero": {
  "src": "img/th/cicero.webp",
  "credit": "Bust of Cicero, 1st century AD, Capitoline Museums · Photo: José Luiz · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg",
  "pos": "50% 30%"
 },
 "markosian": {
  "src": "img/th/markosian.webp",
  "credit": "Symbol: a clock face, for Markosian’s presentism · Photo: sammydavisdog · CC BY 2.0",
  "file": "https://www.flickr.com/photos/25559122@N06/4244796152",
  "pos": "50% 50%",
  "sym": true
 },
 "korman": {
  "src": "img/th/korman.webp",
  "credit": "Symbol: a cat, for Korman’s defence of ordinary objects · Photo: ign0me · CC BY 2.0",
  "file": "https://www.flickr.com/photos/54106299@N00/3749161609",
  "pos": "50% 50%",
  "sym": true
 },
 "crispin_wright": {
  "src": "img/th/crispin_wright.webp",
  "credit": "Symbol: a door hinge, for Wright’s ‘hinge’ entitlements · Photo: kattekrab · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/94814114@N00/6208632955",
  "pos": "50% 50%",
  "sym": true
 },
 "lynch": {
  "src": "img/th/lynch.webp",
  "credit": "Michael P. Lynch, 2019 · Photo: Philafrenzy · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Michael_Patrick_Lynch_at_Senate_House.jpg",
  "pos": "50% 30%"
 },
 "schaffer": {
  "src": "img/th/schaffer.webp",
  "credit": "Symbol: a spiral galaxy, for Schaffer’s priority monism (the cosmos as the one basic whole) · Photo: Raven Vasquez · CC BY 2.0",
  "file": "https://www.flickr.com/photos/44206105@N06/5171449480",
  "pos": "50% 50%",
  "sym": true
 },
 "savitt": {
  "src": "img/th/savitt.webp",
  "credit": "Symbol: the Milky Way, for Savitt’s work on time in Minkowski spacetime · Photo: skyseeker · CC BY 2.0",
  "file": "https://www.flickr.com/photos/40422902@N00/35157555392",
  "pos": "50% 50%",
  "sym": true
 },
 "dorato": {
  "src": "img/th/dorato.webp",
  "credit": "Symbol: a sundial, for Dorato’s philosophy of time · Photo: archer10 (Dennis) · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/22490717@N02/16064051871",
  "pos": "50% 50%",
  "sym": true
 },
 "kuhn": {
  "src": "img/th/kuhn.webp",
  "credit": "Thomas Kuhn, 1977 · Photo: Bob Bielk · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Thomas_Kuhn_%281977%29_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "mach": {
  "src": "img/th/mach.webp",
  "credit": "Ernst Mach, heliogravure by H. F. Jütte, before 1903 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Ernst_Mach_01.jpg",
  "pos": "50% 30%"
 },
 "duhem": {
  "src": "img/th/duhem.webp",
  "credit": "Pierre Duhem, before 1916 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Pierre_Duhem.jpg",
  "pos": "50% 30%"
 },
 "bradley": {
  "src": "img/th/bradley.webp",
  "credit": "F. H. Bradley, c. 1920 · Wikimedia Commons · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:F.H._Bradley.png",
  "pos": "50% 30%"
 },
 "sosa": {
  "src": "img/th/sosa.webp",
  "credit": "Symbol: an archery target, for Sosa’s archer model of knowledge · Photo: NJ Tech Teacher · CC BY 2.0",
  "file": "https://www.flickr.com/photos/11249246@N04/7564364494",
  "pos": "50% 50%",
  "sym": true
 },
 "zagzebski": {
  "src": "img/th/zagzebski.webp",
  "credit": "Symbol: an owl, for Zagzebski’s virtue epistemology · Photo: DIVA007 · CC BY 2.0",
  "file": "https://www.flickr.com/photos/23975018@N04/3675503072",
  "pos": "50% 50%",
  "sym": true
 },
 "lehrer": {
  "src": "img/th/lehrer.webp",
  "credit": "Symbol: dominoes, for Lehrer’s defeasibility theory of knowledge · Photo: mckinney75402 · CC BY 2.0",
  "file": "https://www.flickr.com/photos/30791749@N07/12174539434",
  "pos": "50% 50%",
  "sym": true
 },
 "weatherson": {
  "src": "img/th/weatherson.webp",
  "credit": "Symbol: a magnifying glass, for Weatherson’s work on counterexamples · Photo: Todd Chandler · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/46864401@N07/10120260443",
  "pos": "50% 50%",
  "sym": true
 },
 "cameron_r": {
  "src": "img/th/cameron_r.webp",
  "credit": "Symbol: a spotlight, for Cameron’s moving-spotlight theory of time · Photo: kjeik · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/37622685@N02/3948536721",
  "pos": "50% 50%",
  "sym": true
 },
 "dowe": {
  "src": "img/th/dowe.webp",
  "credit": "Symbol: Newton’s cradle, for Dowe’s conserved-quantity theory of causation · Photo: ccPixs.com · CC BY 2.0",
  "file": "https://www.flickr.com/photos/86530412@N02/7984171587",
  "pos": "50% 50%",
  "sym": true
 },
 "whitehead": {
  "src": "img/th/whitehead.webp",
  "credit": "Alfred North Whitehead, c. 1923 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:ANWhitehead.jpg",
  "pos": "50% 30%"
 },
 "hartshorne": {
  "src": "img/th/hartshorne.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "krause": {
  "src": "img/th/krause.webp",
  "credit": "Karl Christian Friedrich Krause, drawing · Unknown artist · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Karl_Christian_Friedrich_Krause_1781-1832.jpg",
  "pos": "50% 30%"
 },
 "pinnock": {
  "src": "img/th/pinnock.webp",
  "credit": "Photo via Wikipedia · non-free, used under fair use",
  "file": "https://en.wikipedia.org/wiki/File:Clark_Pinnock.jpg",
  "pos": "50% 30%"
 },
 "hasker": {
  "src": "img/th/hasker.webp",
  "credit": "Symbol: a crystal ball, for Hasker’s argument that the free future cannot be foreknown · Photo: Jeffrey Beall · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/31437555@N00/8476744869",
  "pos": "50% 50%",
  "sym": true
 },
 "ramanuja": {
  "src": "img/th/ramanuja.webp",
  "credit": "Ramanuja, traditional depiction · Photo: Todayindian · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Shri_Ramanujar_pics_2.jpg",
  "pos": "50% 30%"
 },
 "madhva": {
  "src": "img/th/madhva.webp",
  "credit": "Image of Madhvacharya at Pajaka, Udupi (traditional depiction) · Photo: AR767 · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:Shri_Madhvacharya_Vigraha%2C_Pajaka%2C_Udupi.jpg",
  "pos": "50% 30%"
 },
 "mahavira": {
  "src": "img/th/mahavira.webp",
  "credit": "Idol of Mahavira (traditional depiction) · Photo: Dayodaya · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Mahavir.jpg",
  "pos": "50% 30%"
 },
 "umasvati": {
  "src": "img/th/umasvati.webp",
  "credit": "Image of Umaswati (traditional depiction) · Photo: जैन (Wikimedia Commons) · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:%E0%A4%89%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%AE%E0%A5%80_%E0%A4%86%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A5%80.jpg",
  "pos": "50% 30%"
 },
 "dharmakirti": {
  "src": "img/th/dharmakirti.webp",
  "credit": "Portrait of Dharmakirti, Tibetan silver statue, 15th–16th century (Cleveland Museum of Art) · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:Tibet%2C_c._15th-16th_century_-_Portrait_of_Dharmakirti_-_2010.474_-_Cleveland_Museum_of_Art.tif",
  "pos": "50% 30%"
 },
 "vivekananda": {
  "src": "img/th/vivekananda.webp",
  "credit": "Swami Vivekananda, Chicago, 1893 · Photo: Thomas Harrison · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Swami_Vivekananda-1893-09-signed.jpg",
  "pos": "50% 30%"
 },
 "tillich": {
  "src": "img/th/tillich.webp",
  "credit": "Bust of Paul Tillich, Tillich Park, New Harmony · Photo: Richard Keeling · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Paul_Tillich_bust.JPG",
  "pos": "50% 30%"
 },
 "jaspers": {
  "src": "img/th/jaspers.webp",
  "credit": "Karl Jaspers, 1946 · Unknown photographer (Mondadori) · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Karl_Jaspers_1946.jpg",
  "pos": "50% 30%"
 },
 "schleiermacher": {
  "src": "img/th/schleiermacher.webp",
  "credit": "Friedrich Schleiermacher, engraving · Rijksmuseum · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:Portret_van_Friedrich_Ernst_Daniel_Schleiermacher_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "adams_mm": {
  "src": "img/th/adams_mm.webp",
  "credit": "Marilyn McCord Adams, 2006 · Photo: Kaihsu Tai · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:MarilynMcCordAdams20060625.jpg",
  "pos": "50% 30%"
 },
 "stump": {
  "src": "img/th/stump.webp",
  "credit": "Eleonore Stump · Photo: Stumpep · CC BY 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Estump.jpg",
  "pos": "50% 30%"
 },
 "davies_b": {
  "src": "img/th/davies_b.webp",
  "credit": "Brian Davies · Photo: Matt1772 · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Brian_Davies.jpg",
  "pos": "50% 30%"
 },
 "ashari": {
  "src": "img/th/ashari.webp",
  "credit": "Symbol: Arabic calligraphy, for al-Ash’ari and the Ash’arite school of kalam · Photo: Mike Prince · CC BY 2.0",
  "file": "https://www.flickr.com/photos/70804987@N00/4783714452",
  "pos": "50% 50%",
  "sym": true
 },
 "wolterstorff": {
  "src": "img/th/wolterstorff.webp",
  "credit": "Nicholas Wolterstorff · Photo: Nicholas Wolterstorff (own upload) · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Nicholas_Wolterstorff.jpg",
  "pos": "50% 30%"
 },
 "rahner": {
  "src": "img/th/rahner.webp",
  "credit": "Karl Rahner, portrait by Letizia Mancino Cremer · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Karl_Rahner_by_Letizia_Mancino_Cremer.jpg",
  "pos": "50% 30%"
 },
 "flew": {
  "src": "img/th/flew.webp",
  "credit": "Antony Flew · Wikimedia Commons · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Antony_flew.jpg",
  "pos": "50% 30%"
 },
 "phillips_dz": {
  "src": "img/th/phillips_dz.webp",
  "credit": "Photo via Wikipedia · non-free, used under fair use",
  "file": "https://en.wikipedia.org/wiki/File:Dewi_Zephaniah_Phillips.jpg",
  "pos": "50% 30%"
 },
 "schellenberg": {
  "src": "img/th/schellenberg.webp",
  "credit": "J. L. Schellenberg, 2017 · Photo: Philosophy at the University of Edinburgh · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:John_Schellenberg_-_Philosophy_at_the_University_of_Edinburgh_%28cropped%29.png",
  "pos": "50% 30%"
 },
 "freud": {
  "src": "img/th/freud.webp",
  "credit": "Sigmund Freud, c. 1921 · Photo: Max Halberstadt · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "clifford": {
  "src": "img/th/clifford.webp",
  "credit": "W. K. Clifford, frontispiece of his Lectures and Essays · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Clifford_William_Kingdon_%28cropped_portrait%29.jpg",
  "pos": "50% 30%"
 },
 "kitcher": {
  "src": "img/th/kitcher.webp",
  "credit": "Philip Kitcher, 2004 · Photo: RealityApologist · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Philip_kitcher.jpg",
  "pos": "50% 30%"
 },
 "martin_m": {
  "src": "img/th/martin_m.webp",
  "credit": "Symbol: a night sky, for Martin’s philosophical case for atheism · Photo: YellowstoneNPS · Public domain",
  "file": "https://www.flickr.com/photos/80223459@N05/14788638453",
  "pos": "50% 50%",
  "sym": true
 },
 "draper": {
  "src": "img/th/draper.webp",
  "credit": "Symbol: a storm front, for Draper’s evidential argument from suffering · Photo: Sheba Also 18 Million Views · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/34534185@N00/8653961011",
  "pos": "50% 50%",
  "sym": true
 },
 "kenny": {
  "src": "img/th/kenny.webp",
  "credit": "Anthony Kenny, 2010 · Photo: Nancy Caroline Gayley · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Anthony_John_Patrick_Kenny.jpg",
  "pos": "50% 30%"
 },
 "feldman_r": {
  "src": "img/th/feldman_r.webp",
  "credit": "Symbol: a balance, for Feldman’s ‘suspend judgment’ view of peer disagreement · Photo: winnifredxoxo · CC BY 2.0",
  "file": "https://www.flickr.com/photos/61056899@N06/5751301741",
  "pos": "50% 50%",
  "sym": true
 },
 "rothbard": {
  "src": "img/th/rothbard.webp",
  "credit": "Murray Rothbard · Ludwig von Mises Institute · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Murray_Rothbard_Portrait.jpg",
  "pos": "50% 30%"
 },
 "kropotkin": {
  "src": "img/th/kropotkin.webp",
  "credit": "Peter Kropotkin, c. 1900 · Photo: Félix Nadar · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Peter_Kropotkin_circa_1900.jpg",
  "pos": "50% 30%"
 },
 "tucker": {
  "src": "img/th/tucker.webp",
  "credit": "Benjamin Tucker, before 1893 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Benjamin_Tucker.jpg",
  "pos": "50% 30%"
 },
 "proudhon": {
  "src": "img/th/proudhon.webp",
  "credit": "Pierre-Joseph Proudhon, portrait by Gustave Courbet, 1865 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Portrait_of_Pierre_Joseph_Proudhon_1865.jpg",
  "pos": "50% 30%"
 },
 "ga_cohen": {
  "src": "img/th/ga_cohen.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "filmer": {
  "src": "img/th/filmer.webp",
  "credit": "Sir Robert Filmer, c. 1650 · Unknown artist · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Robert_Filmer_Portrait.jpg",
  "pos": "50% 30%"
 },
 "bossuet": {
  "src": "img/th/bossuet.webp",
  "credit": "Jacques-Bénigne Bossuet, portrait by Hyacinthe Rigaud, 1698 · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Jacques-B%C3%A9nigne_Bossuet_1.PNG",
  "pos": "50% 30%"
 },
 "simmons": {
  "src": "img/th/simmons.webp",
  "credit": "A. John Simmons, 2012 · Photo: Edmond J. Safra Center for Ethics · CC BY 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:A._John_Simmons_3.22.12_%286893567870%29.jpg",
  "pos": "50% 30%"
 },
 "pettit": {
  "src": "img/th/pettit.webp",
  "credit": "Philip Pettit, 2019 · Photo: LF.Chile · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Philip_Pettit.jpg",
  "pos": "50% 30%"
 },
 "skinner": {
  "src": "img/th/skinner.webp",
  "credit": "Quentin Skinner, portrait by David Cobley, 2011 · Photo: Peter Stone · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Quentin_skinner_david_cobley.jpg",
  "pos": "50% 30%"
 },
 "bernstein": {
  "src": "img/th/bernstein.webp",
  "credit": "Eduard Bernstein, c. 1890s · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Eduard_Bernstein_%28portrait%29.jpg",
  "pos": "50% 30%"
 },
 "pogge": {
  "src": "img/th/pogge.webp",
  "credit": "Thomas Pogge, 2014 · Photo: Tobias Klenze · CC BY 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:2014-01-08_Thomas_Pogge_4805.JPG",
  "pos": "50% 30%"
 },
 "david_miller": {
  "src": "img/th/david_miller.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "dworkin": {
  "src": "img/th/dworkin.webp",
  "credit": "Ronald Dworkin, 2008 · Photo: David Shankbone · CC BY-SA 3.0",
  "file": "https://commons.wikimedia.org/wiki/File:Ronald_Dworkin_at_the_Brooklyn_Book_Festival.jpg",
  "pos": "50% 30%"
 },
 "anderson_e": {
  "src": "img/th/anderson_e.webp",
  "credit": "Elizabeth Anderson lecturing, 2022 · Photo: Havens Wright Center for Social Justice · CC BY 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Elizabeth_S._Anderson_lecturing_at_the_Havens_Wright_Center_for_Social_Justice_in_2022_01.png",
  "pos": "50% 30%"
 },
 "david_friedman": {
  "src": "img/th/david_friedman.webp",
  "credit": "David D. Friedman, 2017 · Photo: Gage Skidmore · CC BY-SA 2.0",
  "file": "https://commons.wikimedia.org/wiki/File:David_Friedman_2017_Young_Americans_for_Liberty_National_Convention_%284x5_cropped%29.jpg",
  "pos": "50% 30%"
 },
 "qutb": {
  "src": "img/th/qutb.webp",
  "credit": "Sayyid Qutb, 1965 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Sayyid_Qutb.jpg",
  "pos": "50% 30%"
 },
 "walzer": {
  "src": "img/th/walzer.webp",
  "credit": "Michael Walzer lecturing at the US Naval Academy · US Government photo · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:MichaelWalzer-USNA-Lecture.jpg",
  "pos": "50% 30%"
 },
 "hanfeizi": {
  "src": "img/th/hanfeizi.webp",
  "credit": "Statue of Han Fei, Shaanxi (traditional depiction) · Photo: Sabinowitz · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Statue_Of_Han_Fei.png",
  "pos": "50% 30%"
 },
 "ibn_khaldun": {
  "src": "img/th/ibn_khaldun.webp",
  "credit": "Bust of Ibn Khaldun, Casbah of Béjaïa (later depiction) · Photo: Reda Kerbush · CC BY-SA 4.0",
  "file": "https://commons.wikimedia.org/wiki/File:Bust_of_Ibn_Khaldun_%28Casbah_of_Bejaia%2C_Algeria%29.jpg",
  "pos": "50% 30%"
 },
 "nkrumah": {
  "src": "img/th/nkrumah.webp",
  "credit": "Kwame Nkrumah · The National Archives UK · Open Government Licence v1.0",
  "file": "https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah_Portrait%2C_The_National_Archives_UK.jpg",
  "pos": "50% 30%"
 },
 "nyerere": {
  "src": "img/th/nyerere.webp",
  "credit": "Julius Nyerere, 1975 · Photo: Rob Mieremet (Anefo) · CC0",
  "file": "https://commons.wikimedia.org/wiki/File:President_Nyerere_van_Tanzania%2C_koppen%2C_Bestanddeelnr_928-2879_%28cropped%29.jpg",
  "pos": "50% 30%"
 },
 "casal": {
  "src": "img/th/casal.webp",
  "credit": "Symbol: a loaf of bread, for Casal’s sufficientarianism (everyone having enough) · Photo: Teuobk · CC BY 2.0",
  "file": "https://www.flickr.com/photos/13261823@N05/2104039823",
  "pos": "50% 50%",
  "sym": true
 },
 "arneson": {
  "src": "img/th/arneson.webp",
  "credit": "Symbol: a coin toss, for Arneson’s luck egalitarianism · Photo: ICMA Photos · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/31418530@N02/3635981474",
  "pos": "50% 50%",
  "sym": true
 },
 "henry_george": {
  "src": "img/th/henry_george.webp",
  "credit": "Henry George, 1886 · Unknown photographer · Public domain",
  "file": "https://commons.wikimedia.org/wiki/File:Henry_George_c1885_retouched.jpg",
  "pos": "50% 30%"
 },
 "steiner": {
  "src": "img/th/steiner.webp",
  "credit": "Symbol: a globe, for Steiner’s left-libertarian view that the earth’s resources belong to all · Photo: empiredude1 · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/38104654@N00/3369547134",
  "pos": "50% 50%",
  "sym": true
 },
 "smart": {
  "src": "img/th/smart.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "hooker": {
  "src": "img/th/hooker.webp",
  "credit": "Symbol: traffic lights, for Hooker’s rule consequentialism · Photo: Tilemahos Efthimiadis · CC BY 2.0",
  "file": "https://www.flickr.com/photos/64379474@N00/2788591239",
  "pos": "50% 50%",
  "sym": true
 },
 "rachels": {
  "src": "img/th/rachels.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "unger": {
  "src": "img/th/unger.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "hick": {
  "src": "img/th/hick.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "olson": {
  "src": "img/th/olson.webp",
  "credit": "Symbol: footprints in sand, for Olson’s animalism (you are a human animal) · Photo: zbigphotography (1M+ views) · CC BY 2.0",
  "file": "https://www.flickr.com/photos/45098669@N06/8559321112",
  "pos": "50% 50%",
  "sym": true
 },
 "enoch": {
  "src": "img/th/enoch.webp",
  "credit": "Symbol: a mountain, for Enoch’s robust moral realism · Photo: TheMuuj · CC BY-SA 2.0",
  "file": "https://www.flickr.com/photos/84311706@N00/2198720349",
  "pos": "50% 50%",
  "sym": true
 },
 "pfstrawson": {
  "src": "img/th/pfstrawson.webp",
  "credit": "Photo supplied by the site editor · source and licence not recorded",
  "file": "",
  "pos": "50% 30%"
 },
 "berker": {
  "src": "img/th/berker.webp",
  "credit": "Symbol: a brain scan, for Berker’s ‘normative insignificance of neuroscience’ · Photo: Patrick Denker · CC BY 2.0",
  "file": "https://www.flickr.com/photos/61993185@N00/74684051",
  "pos": "50% 50%",
  "sym": true
 }
};
for (var k in add) if (!I.th[k]) I.th[k] = add[k]; })();
