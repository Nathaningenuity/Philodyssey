/* Philodyssey: Guided tours. Travel through the history of philosophy on a map of the world.
 * Read by js/tours.js (routes #tours, #tours-<tourId>, #tours-<tourId>.<stop number, from 1>).
 *
 * Each tour: { id, title, sub (one line for the card), blurb (two sentences), span (dates), stops: [...] }
 * Each stop:
 *   id        unique inside the tour
 *   place     where we are (shown with a pin)
 *   lat, lon  degrees (north and east are positive)
 *   zoom      how close the map flies: the map shows about 360 / 2^zoom degrees of longitude across
 *   view      optional { lat, lon, zoom } to frame the map differently from the pin (e.g. to show a whole route)
 *   year      label, BCE / CE as elsewhere in the app
 *   title     bold headline
 *   takeaway  one punchy line, the core claim (90 characters or fewer)
 *   body      2 to 4 plain sentences
 *   more      optional longer paragraph behind "Tell me more"
 *   th        thinker ids from the app's TH data (unknown ids are ignored by the module)
 *   link      optional app hash (#voyage-..., #thinker-..., #works-..., #stoa-<school>, #experiment-...)
 *   img       optional { src, alt, credit, file (source page) } for a specific picture (else the first thinker's ATLAS_IMAGES entry)
 *   labels    optional extra map labels shown at this stop: [{ lat, lon, text }]
 *   lines     optional routes shown at this stop: [{ pts: [[lat, lon], ...], label, kind: "route" | "flow" }]
 */
window.ATLAS_TOURS = [
  {
    id: "greece",
    title: "The birth of philosophy",
    sub: "Greece and Rome, from Miletus to the closing of the schools",
    blurb: "On the coasts of the Aegean, people began asking what the world is made of and how to live, and answering with arguments instead of myths. Follow the questions from a trading port in Ionia to the streets of Athens and the tents of a Roman emperor.",
    span: "585 BCE – 529 CE",
    stops: [
      {
        id: "thales", place: "Miletus", lat: 37.53, lon: 27.28, zoom: 5.4, year: "585 BCE",
        img: { src: "img/tour/thales.webp", alt: "The ancient theatre of Miletus", credit: "Photo: Tomisti · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Miletus_theatre_04.jpg" },
        title: "Thales says all is water",
        takeaway: "Explain nature by nature: look for causes, not angry gods.",
        body: "Miletus was a rich Greek port on the coast of what is now Turkey, full of sailors, traders and news from Egypt and Babylon. Here Thales is said to have predicted the solar eclipse of 585 BCE. He also claimed that everything is made of water. He was wrong about water, but the bold move was new: one natural explanation for everything, which others could test and argue with.",
        more: "We have none of Thales’ own writings; we know him through later authors such as Aristotle. His fellow citizens kept the argument going. Anaximander said the source of everything was ‘the boundless’, something without fixed qualities, and drew one of the first maps of the world. Anaximenes said it was air, which thickens into water and stone and thins into fire. The answers changed, but the habit stuck: offer a reason, and expect it to be criticised.",
        th: ["thales"], link: "#voyage-miletus",
        labels: [{ lat: 37.69, lon: 26.94, text: "Samos" }, { lat: 38.42, lon: 27.14, text: "Smyrna" }]
      },
      {
        id: "pythagoras", place: "Croton", lat: 39.08, lon: 17.13, zoom: 4.6, view: { lat: 38.5, lon: 22, zoom: 4.4 }, year: "c. 530 BCE",
        img: { src: "img/tour/pythagoras.webp", alt: "The last standing column of the Temple of Hera at Capo Colonna, near Croton", credit: "Photo: Benjamin Smith · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Capo_Colonna_-_Colonna_%26_Faro.jpg" },
        title: "Pythagoras finds numbers in everything",
        takeaway: "The world has a hidden order, and its language is mathematics.",
        body: "Pythagoras left the island of Samos and founded a community in Croton, a Greek city in southern Italy. His followers noticed that musical harmonies follow simple number ratios, like 2:1 for an octave. From this they guessed that number is the key to the whole universe. They also lived by strict rules and believed the soul is reborn in new bodies.",
        more: "Almost everything we ‘know’ about Pythagoras was written down centuries after he died, and it is mixed with legend. The famous theorem about right-angled triangles was known in Babylon long before him. What his school did pass on was a striking idea that Plato loved: that beneath the changing world we see lies an unchanging order that only the mind can grasp. Modern physics, which describes nature with equations, is in some ways an heir to that hope.",
        th: ["pythagoras"], link: "#thinker-pythagoras",
        lines: [{ pts: [[37.69, 26.94], [36.6, 23.6], [37.4, 21.0], [38.6, 18.2], [39.08, 17.13]], label: "Samos to Croton", kind: "route" }],
        labels: [{ lat: 37.69, lon: 26.94, text: "Samos: his birthplace" }]
      },
      {
        id: "heraclitus", place: "Ephesus", lat: 37.94, lon: 27.34, zoom: 5.6, year: "c. 500 BCE",
        img: { src: "img/tour/heraclitus.webp", alt: "The Library of Celsus at Ephesus", credit: "Photo: Emre D. · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Ephesus_Library_of_Celsus.jpg" },
        title: "Heraclitus: you cannot step in the same river twice",
        takeaway: "Everything flows. Stability is a balance of opposing forces.",
        body: "Heraclitus was an aristocrat from Ephesus, a short sail north of Miletus, famous for riddling sayings. He said the world is like an ever-living fire, always changing yet always following a pattern, which he called the logos. New water keeps flowing past you, so the river you step into is never quite the same. Opposites, like day and night or war and peace, are bound together.",
        more: "Only about a hundred short fragments of his book survive, quoted by later writers, which is partly why he was nicknamed ‘the Obscure’. His central puzzle is still alive: if everything is changing, what makes something the same thing over time? The same question returns with the Ship of Theseus, and in modern debates about whether you are the same person you were as a child.",
        th: ["heraclitus"], link: "#works-heraclitus-fragments"
      },
      {
        id: "elea", place: "Elea", lat: 40.16, lon: 15.15, zoom: 5.2, year: "c. 475 BCE",
        img: { src: "img/tour/elea.webp", alt: "The paved Greek street leading to the Porta Rosa at Elea (Velia)", credit: "Photo: Heinz-Josef Lücking · CC BY-SA 3.0 DE", file: "https://commons.wikimedia.org/wiki/File:Greek_street_-_III_century_BC_-_Porta_Rosa_-_Velia_-_Italy.JPG" },
        title: "Parmenides and Zeno: change is impossible",
        takeaway: "Follow the argument even when it contradicts your eyes.",
        body: "In Elea, a Greek colony in southern Italy, Parmenides wrote a poem arguing that ‘what is not’ cannot exist. If so, nothing can come into being or pass away, and change is an illusion. His student Zeno defended him with paradoxes, like the fast runner Achilles who can never catch a tortoise with a head start. They showed how far pure reasoning can push against common sense.",
        more: "Zeno’s idea was simple: to catch the tortoise, Achilles must first reach where it was, but by then it has moved on, and so on forever. Mathematicians only fully explained how infinitely many steps can add up to a finite distance with the theory of limits, more than two thousand years later. Parmenides also split the world into the way of truth, known by reason, and the way of opinion, known by the senses. Plato took that split and built on it.",
        th: ["parmenides", "zeno_elea"], link: "#voyage-elea"
      },
      {
        id: "democritus", place: "Abdera", lat: 40.95, lon: 24.98, zoom: 5, year: "c. 430 BCE",
        img: { src: "img/tour/democritus.webp", alt: "The archaeological site of ancient Abdera", credit: "Photo: Gepsimos · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Avdira_Xanthi_archaeological_site.jpg" },
        title: "Democritus: atoms and the void",
        takeaway: "Everything is tiny uncuttable pieces moving through empty space.",
        body: "Democritus came from Abdera, a trading town on the north coast of the Aegean. With his teacher Leucippus he answered Parmenides in a clever way: real things never come from nothing, but tiny solid particles, ‘atoms’ (meaning uncuttable), move about in empty space and combine. Colour, taste and warmth, he said, exist only in us; in reality there are only atoms and the void.",
        more: "This was not science in the modern sense, since no one could see an atom, but it was an astonishingly good guess. Epicurus later built a whole philosophy of life on atomism, and the Roman poet Lucretius put it into a long poem, On the Nature of Things. When that poem was rediscovered in 1417 it helped inspire the scientists of the 1600s. Democritus was also remembered as ‘the laughing philosopher’, cheerful about human folly.",
        th: ["democritus"], link: "#thinker-democritus"
      },
      {
        id: "socrates", place: "Athens", lat: 37.975, lon: 23.725, zoom: 5.7, year: "399 BCE",
        img: { src: "img/tour/socrates.webp", alt: "The Athenian Agora seen from the Areopagus", credit: "Photo: Catharinaa · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Agora_of_Athens_seen_from_the_Areopagus.JPG" },
        title: "Socrates drinks the hemlock",
        takeaway: "The unexamined life is not worth living.",
        body: "Socrates wrote nothing. He spent his days in the marketplace of Athens, the Agora, asking people what courage, justice or goodness really are, and showing that their answers fell apart. Some found this thrilling and others found it infuriating. In 399 BCE a jury of 501 citizens convicted him of impiety and corrupting the young, and he was executed by drinking poison hemlock.",
        more: "He could probably have escaped, and his friends had a plan. In Plato’s Crito, Socrates refuses: he has lived his whole life under the laws of Athens and will not break them now just because they have turned against him. In the Apology, his speech at the trial, he says his only wisdom is knowing that he does not know. His method of questioning, now called the Socratic method, is still used in classrooms and law schools.",
        th: ["socrates"], link: "#voyage-hemlock",
        labels: [{ lat: 37.94, lon: 23.64, text: "Piraeus: the harbour" }, { lat: 38.48, lon: 22.5, text: "Delphi: the oracle" }]
      },
      {
        id: "plato", place: "Athens: the Academy", lat: 37.992, lon: 23.708, zoom: 5.7, year: "c. 387 BCE",
        img: { src: "img/tour/plato.webp", alt: "Roman mosaic of philosophers gathered at Plato's Academy, from Pompeii", credit: "Photo: Gary Lee Todd · Public domain", file: "https://www.flickr.com/photos/101561334@N08/48451826467" },
        title: "Plato opens the Academy",
        takeaway: "The world we see is a shadow of a truer world of Forms.",
        body: "Plato was a young admirer of Socrates, and the execution shook him. He began writing dialogues starring Socrates and founded a school in a grove outside the city walls, the Academy, which gave us the word for schools today. In his Allegory of the Cave, prisoners mistake shadows for reality. Philosophy, he said, is the slow climb out into the sunlight.",
        more: "Plato’s Forms are perfect, unchanging patterns, like Justice itself or the perfect circle, which the things around us only imitate. In the Republic he imagines an ideal city ruled by philosopher-kings, an idea people have argued about ever since. The Academy ran, on and off, for centuries. The modern philosopher Alfred North Whitehead joked that the whole of Western philosophy is a series of footnotes to Plato.",
        th: ["plato"], link: "#voyage-academy"
      },
      {
        id: "diogenes", place: "Corinth", lat: 37.906, lon: 22.88, zoom: 6, year: "c. 336 BCE",
        img: { src: "img/tour/diogenes.webp", alt: "The Temple of Apollo at Corinth below Acrocorinth", credit: "Photo: Nicholas Hartmann · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:2007_Greece_Acrocorinth_%26_Apollo_Temple.jpg" },
        title: "Diogenes tells Alexander to move",
        takeaway: "You need far less than you think to live well.",
        body: "Diogenes lived in a large clay jar and owned almost nothing. People called him ‘the dog’, kyon in Greek, which is where the word Cynic comes from. The story goes that Alexander the Great found him sunbathing near Corinth and offered him anything he wished. Diogenes asked him to step aside, because he was blocking the sun.",
        more: "The Cynics thought most of what society values, like money, fame and good manners, is a kind of slavery. Diogenes carried a lamp in daylight, ‘looking for an honest man’, and called himself a citizen of the world, a cosmopolitan, perhaps the first use of the word. Many stories about him are probably exaggerated, but they show what the Cynics were after: freedom through needing nothing. The Stoics borrowed a great deal from them.",
        th: ["diogenes"], link: "#voyage-cynics"
      },
      {
        id: "aristotle", place: "Athens: the Lyceum", lat: 37.975, lon: 23.745, zoom: 5.7, view: { lat: 39.2, lon: 23.5, zoom: 5.4 }, year: "335 BCE",
        img: { src: "img/tour/aristotle.webp", alt: "The archaeological site of Aristotle's Lyceum in Athens", credit: "Photo: George E. Koronaios · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:The_Lyceum_of_Aristotle_on_February_6%2C_2021.jpg" },
        title: "Aristotle opens the Lyceum",
        takeaway: "To understand anything, ask what it is for.",
        body: "Aristotle studied at Plato’s Academy for twenty years, then tutored the young Alexander in Macedonia. Back in Athens he opened his own school, the Lyceum, where he is said to have taught while walking. He wrote on logic, biology, physics, ethics, politics and poetry, and he collected and dissected animals. For him, the good life means using your abilities well, above all your reason.",
        more: "Where Plato looked up to perfect Forms, Aristotle looked closely at the world around him. He thought every natural thing has a purpose built in, as an acorn is ‘for’ becoming an oak. He also invented formal logic, the study of which conclusions follow from which premises. After Rome fell, his works were nearly lost in western Europe but were kept and studied in the Islamic world, and in the 1200s they came back to dominate Europe’s universities.",
        th: ["aristotle"], link: "#voyage-lyceum",
        labels: [{ lat: 40.53, lon: 23.75, text: "Stagira: his birthplace" }, { lat: 40.76, lon: 22.52, text: "Pella: Macedon’s capital" }],
        lines: [{ pts: [[40.53, 23.75], [40.1, 24.0], [39.2, 23.8], [38.3, 24.2], [37.975, 23.745]], label: "", kind: "route" }]
      },
      {
        id: "pyrrho", place: "Taxila", lat: 33.75, lon: 72.83, zoom: 3.3, view: { lat: 32, lon: 48, zoom: 2.5 }, year: "326 BCE",
        img: { src: "img/tour/pyrrho.webp", alt: "The Dharmarajika stupa at Taxila", credit: "Photo: Sasha Isachenko · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Dharmarajika_stupa%2CTaxila.jpg" },
        title: "Pyrrho meets the naked sages of India",
        takeaway: "If you suspend judgement, you can find peace of mind.",
        body: "Alexander’s army marched from Macedonia across Persia to the Indus River. Travelling with it was a painter turned philosopher, Pyrrho of Elis. Near Taxila, in what is now Pakistan, the Greeks met Indian ascetics they called gymnosophists, ‘naked wise men’. Back home Pyrrho taught that we cannot know how things really are, so we should stop insisting, and be calm.",
        more: "Scholars still debate how much Pyrrho owed to India; some see echoes of Buddhist ideas about letting go of fixed views. What is certain is that Alexander’s conquests connected the Greek world with Egypt, Persia and India, and Greek became the common language of a huge region. The kingdoms that followed are called ‘Hellenistic’. Pyrrho’s scepticism lived on in the Academy and in the writings of Sextus Empiricus.",
        th: ["pyrrho"], link: "#voyage-sceptics",
        lines: [{ pts: [[40.76, 22.52], [40.3, 26.7], [36.85, 36.2], [33.27, 35.2], [31.2, 29.92], [33.5, 36.3], [36.36, 43.25], [32.54, 44.42], [29.93, 52.89], [36.76, 66.9], [34.5, 69.2], [33.75, 72.83], [31.5, 75.2], [24.9, 67.5], [26.2, 61.0], [30.2, 57.1], [32.19, 48.25], [32.54, 44.42]], label: "Alexander’s march, 334–323 BCE", kind: "route" }],
        labels: [{ lat: 31.2, lon: 29.92, text: "Alexandria, founded 331 BCE" }, { lat: 32.54, lon: 44.42, text: "Babylon: Alexander dies, 323 BCE" }, { lat: 29.93, lon: 52.89, text: "Persepolis" }]
      },
      {
        id: "epicurus", place: "Athens: the Garden", lat: 37.985, lon: 23.705, zoom: 5.7, year: "306 BCE",
        img: { src: "img/tour/epicurus.webp", alt: "The ancient city walls at the Kerameikos, Athens", credit: "Photo: Jebulon · CC0", file: "https://commons.wikimedia.org/wiki/File:City_walls_Kerameikos_Athens.jpg" },
        title: "Epicurus opens the Garden",
        takeaway: "Pleasure is the goal, but the best pleasures are simple and calm.",
        body: "Epicurus bought a house with a garden just outside Athens and opened it to friends, including women and slaves, which shocked people. He taught that a happy life is free from pain in the body and fear in the mind. Since we are made of atoms that scatter when we die, death is nothing to fear: where death is, we are not.",
        more: "‘Epicurean’ now suggests fancy food, but Epicurus lived on bread, water and the occasional pot of cheese. He thought expensive desires make us anxious, while friendship, simple meals and thinking clearly make us content. His Letter to Menoeceus sets out the whole plan in a few pages. His followers, including Lucretius in Rome, kept the Garden’s ideas alive for centuries.",
        th: ["epicurus"], link: "#voyage-garden"
      },
      {
        id: "zeno_citium", place: "Athens: the Painted Porch", lat: 37.976, lon: 23.722, zoom: 5.7, view: { lat: 36.5, lon: 28.5, zoom: 4.6 }, year: "c. 300 BCE",
        img: { src: "img/tour/zeno_citium.webp", alt: "Excavated remains of the Painted Stoa in the Athenian Agora", credit: "Photo: Mark Landon · CC BY 4.0", file: "https://commons.wikimedia.org/wiki/File:Athens_Agora_Stoa_Poikile_W_end_%281991%29.jpg" },
        title: "Zeno of Citium teaches under the Painted Porch",
        takeaway: "You cannot control events, only how you respond to them.",
        body: "Zeno was a merchant from Citium in Cyprus who, the story goes, was shipwrecked near Athens and wandered into a bookshop. He began teaching in the Stoa Poikile, a painted colonnade by the Agora, so his followers were called Stoics. They taught that virtue is the only true good, and that we should live in agreement with nature and reason.",
        more: "For the Stoics, things like wealth, health and reputation are ‘indifferent’: nice to have, but not what makes a life good. What matters is your judgement and character, which no one can take from you. Stoicism became the most popular philosophy of the Roman world and is enjoying a revival today, often in self-help books. Modern cognitive behavioural therapy openly borrows the Stoic idea that our beliefs about events shape how we feel.",
        th: ["zeno_citium"], link: "#voyage-stoa",
        lines: [{ pts: [[34.92, 33.63], [35.2, 30.0], [36.2, 26.5], [37.6, 24.3], [37.94, 23.64]], label: "Citium to Athens", kind: "route" }],
        labels: [{ lat: 34.92, lon: 33.63, text: "Citium, Cyprus" }]
      },
      {
        id: "seneca", place: "Rome", lat: 41.89, lon: 12.49, zoom: 5.2, view: { lat: 40.5, lon: 16.5, zoom: 4.4 }, year: "65 CE",
        img: { src: "img/tour/seneca.webp", alt: "The Roman Forum", credit: "Photo: Vyacheslav Argenberg · CC BY 4.0", file: "https://commons.wikimedia.org/wiki/File:Rome%2C_Italy%2C_Ancient_Roman_Forum_%28Forum_Romanum%29.jpg" },
        title: "Seneca and the Stoics of Rome",
        takeaway: "Life is long enough, if you know how to use it.",
        body: "Rome conquered Greece, but Greek philosophy conquered Rome. Seneca was a Stoic writer and the adviser to the emperor Nero, a dangerous job. His letters and essays, like On the Shortness of Life, give practical advice about anger, grief and wasted time. In 65 CE Nero ordered him to take his own life, and he did so calmly, as a Stoic should.",
        more: "Seneca is a complicated hero: he preached simple living while being one of the richest men in Rome. A generation later, Epictetus, who had been born a slave, taught Stoicism in Rome and then in Nicopolis in Greece after the philosophers were expelled. His Handbook opens with the line that some things are up to us and some are not. Cicero, a century before Seneca, had already translated many Greek ideas into Latin, inventing words like ‘quality’ along the way.",
        th: ["seneca", "epictetus", "cicero"], link: "#stoa-stoicism",
        labels: [{ lat: 39.0, lon: 20.73, text: "Nicopolis: Epictetus’ school" }]
      },
      {
        id: "marcus", place: "Carnuntum, on the Danube", lat: 48.11, lon: 16.86, zoom: 5, year: "c. 172 CE",
        img: { src: "img/tour/marcus.webp", alt: "The Heidentor, a Roman gate at Carnuntum", credit: "Photo: C. Stadler/Bwag · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Petronell_-_Heidentor.JPG" },
        title: "An emperor writes notes to himself",
        takeaway: "Do the next right thing, and do not be thrown by what others do.",
        body: "Marcus Aurelius was the most powerful man in the world, and he spent years in army camps on the Danube frontier fighting Germanic tribes. At night he wrote private notes in Greek, reminding himself to be patient, fair and unafraid of death. He never meant them to be published. We know them as the Meditations.",
        more: "Two notes in the text place the writing ‘among the Quadi, on the river Gran’ and ‘at Carnuntum’, a Roman fortress near today’s Vienna. Marcus reminds himself that each day he will meet rude and ungrateful people, and that they act out of ignorance, so he should not be angry. The book shows Stoicism as daily practice, not theory, and it is still one of the most read works of ancient philosophy.",
        th: ["marcus_aurelius"], link: "#works-marcus-aurelius-meditations",
        labels: [{ lat: 48.21, lon: 16.37, text: "Vindobona (Vienna)" }]
      },
      {
        id: "closing", place: "Athens", lat: 37.975, lon: 23.725, zoom: 3.6, view: { lat: 37, lon: 34, zoom: 3.4 }, year: "529 CE",
        img: { src: "img/tour/closing.webp", alt: "The Parthenon on the Acropolis of Athens", credit: "Photo: Jim Killock · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:Parthenon%2C_Acropolis%2C_Athens%2C_Greece.jpg" },
        title: "The schools close, and the books travel east",
        takeaway: "Ideas survive by moving: when one door closes, they find another.",
        body: "By the 500s the Roman Empire was Christian. In 529 the emperor Justinian banned pagans from teaching, and the old schools of Athens faded out. Seven philosophers led by Damascius left for the court of the Persian king Khosrow I at Ctesiphon. The texts of Plato and Aristotle lived on, copied in Greek in Constantinople and translated into Syriac and then Arabic.",
        more: "The exiles returned after a peace treaty in 532 that protected their right to keep their beliefs. The end of the Athenian schools is often used as a symbolic end of ancient philosophy, but it was not the end of the ideas. Within three centuries, scholars in Baghdad would be translating Aristotle into Arabic, and the story continues in the tour of the Islamic Golden Age.",
        th: [], link: "#stoa-neoplatonism",
        labels: [{ lat: 41.01, lon: 28.98, text: "Constantinople" }, { lat: 33.09, lon: 44.58, text: "Ctesiphon: the Persian court" }],
        lines: [{ pts: [[37.975, 23.725], [38.8, 30.0], [37.5, 37.0], [35.0, 41.5], [33.09, 44.58]], label: "Athens to Ctesiphon, 531", kind: "flow" }]
      }
    ]
  },

  {
    id: "east",
    title: "Wisdom of the East",
    sub: "India and China, from the Upanishads to Wang Yangming",
    blurb: "While Greeks argued in the marketplace, sages in India asked what the self is and how to escape suffering, and teachers in China asked how to live well together. Travel the Ganges plain, the Yellow River valley and the Silk Road.",
    span: "c. 700 BCE – 1508 CE",
    stops: [
      {
        id: "upanishads", place: "Videha (Mithila)", lat: 26.6, lon: 85.9, zoom: 4.6, year: "c. 700 BCE",
        img: { src: "img/tour/upanishads.webp", alt: "Temple relief of the sage Yajnavalkya at the court of King Janaka", credit: "Photo: S. P. Krishnamurthy · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Yajnavalkya_and_Janaka.jpg" },
        title: "The Upanishads: you are that",
        takeaway: "Your deepest self (atman) is one with the whole of reality (Brahman).",
        body: "The Upanishads are teachings added to the end of the ancient Vedic hymns, composed in the forests and courts of northern India. In one of the oldest, the sage Yajnavalkya debates rivals at the court of King Janaka of Videha. The big idea is that behind the changing world is one reality, Brahman, and that your innermost self is that same reality. Knowing this, the texts say, frees you.",
        more: "A famous lesson in the Chandogya Upanishad has a father tell his son to dissolve salt in water. The salt cannot be seen, yet every sip tastes of it: so Brahman is everywhere though unseen, and ‘you are that’ (tat tvam asi). Indian thinkers then argued for centuries about what this means. Is the self literally identical with Brahman, or a part of it, or distinct but dependent? These became the great schools of Vedanta.",
        th: [], link: "#voyage-upanishads",
        labels: [{ lat: 25.6, lon: 85.1, text: "the Ganges" }]
      },
      {
        id: "mahavira", place: "Vaishali", lat: 25.99, lon: 85.13, zoom: 5.2, year: "c. 500 BCE",
        img: { src: "img/tour/mahavira.webp", alt: "The Ashoka pillar and Ananda stupa at Vaishali", credit: "Photo: Rohit Sharma · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Ananda_Stupa_with_Ashok_lion_pillar_at_vaishali%2C_Bihar_03.jpg" },
        title: "Mahavira and the path of non-harm",
        takeaway: "Harm no living thing, and admit that truth has many sides.",
        body: "Mahavira, traditionally born near Vaishali, gave up his life as a prince to become a wandering ascetic. He became the great teacher of Jainism. Jains believe every living being, even an insect, has a soul, so the central rule is ahimsa, non-harm. Jain thinkers also taught anekantavada, ‘many-sidedness’: any single viewpoint captures only part of the truth.",
        more: "Jains illustrate many-sidedness with the story of blind men touching an elephant: one feels the trunk and says it is a snake, another the leg and says it is a pillar. Each is partly right. Jain monks and nuns carry soft brooms to sweep insects from their path. Ahimsa later deeply influenced Mahatma Gandhi’s non-violent resistance to British rule in India.",
        th: ["mahavira"], link: "#thinker-mahavira"
      },
      {
        id: "bodhgaya", place: "Bodh Gaya", lat: 24.695, lon: 84.991, zoom: 5.2, year: "c. 450 BCE",
        img: { src: "img/tour/bodhgaya.webp", alt: "The Mahabodhi Temple at Bodh Gaya", credit: "Photo: WeeKeeEditor · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Mahabodhi_Temple_-_Bodh_Gaya.jpg" },
        title: "The Buddha’s awakening",
        takeaway: "Suffering comes from craving, and it can end.",
        body: "Siddhartha Gautama was a prince who left home after seeing old age, sickness and death. After years of extreme self-denial, he sat beneath a fig tree at Bodh Gaya and resolved not to rise until he understood. He awoke, becoming the Buddha, ‘the awakened one’. His insight was that our suffering comes from clinging to things that cannot last, including the idea of a fixed self.",
        more: "Buddhist tradition places these events in the 500s BCE, while many historians now prefer the 400s, so the dates are uncertain. The Buddha’s teaching of anatta, ‘no-self’, says there is no permanent soul inside us, only a changing stream of body, feelings, perceptions and thoughts. Centuries later, David Hume in Scotland reached a strikingly similar view by looking inward and finding no self, only perceptions. A descendant of the original tree still grows at the Mahabodhi Temple.",
        th: ["buddha"], link: "#voyage-buddha"
      },
      {
        id: "sarnath", place: "Sarnath", lat: 25.38, lon: 83.02, zoom: 5.2, year: "c. 450 BCE",
        img: { src: "img/tour/sarnath.webp", alt: "The Dhamek Stupa at Sarnath", credit: "Photo: Paramanu Sarkar · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Dhamek_Stupa%2C_Sarnath%2C_Varanasi%2C_Uttar_Pradesh_01.jpg" },
        title: "The first sermon in the Deer Park",
        takeaway: "Take the middle way, between indulgence and self-torture.",
        body: "The Buddha walked about 250 km to the Deer Park at Sarnath, near Varanasi, and taught five former companions. This first sermon sets out the Four Noble Truths: life involves suffering; suffering has a cause, craving; it can end; and there is a path to end it. That path, the Noble Eightfold Path, includes right view, right speech, right action and right mindfulness.",
        more: "Buddhists call this sermon ‘setting in motion the wheel of the Dharma’, which is why the wheel became a Buddhist symbol. Two centuries later the emperor Ashoka put up a stone pillar at Sarnath topped with four lions; it is now the national emblem of India. From here, monks carried the teaching south to Sri Lanka, north to Central Asia and China, and east to Southeast Asia.",
        th: ["buddha"], link: "#works-buddha-dhammacakkappavattana-sutta",
        lines: [{ pts: [[24.695, 84.991], [25.0, 84.0], [25.38, 83.02]], label: "", kind: "route" }]
      },
      {
        id: "confucius", place: "Qufu", lat: 35.6, lon: 116.99, zoom: 5, year: "c. 500 BCE",
        img: { src: "img/tour/confucius.webp", alt: "The Hall of Great Perfection in the Temple of Confucius, Qufu", credit: "Photo: Vmenkov · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Kong_Miao_-_Dacheng_Dian_-_P1050686.JPG" },
        title: "Confucius: become a person of virtue",
        takeaway: "A good society starts with good people, shaped by habit and respect.",
        body: "Confucius (Kongzi) was born in the small state of Lu, in today’s Shandong, in a time of wars between rival states. He hoped to become an adviser to rulers and spent years travelling without much success. Instead he became a teacher. He taught that we become good by practising ritual and respect in everyday relationships, and that rulers should lead by example, not by punishment.",
        more: "His sayings were collected by his students in the Analects. One of them is a version of the Golden Rule: ‘Do not impose on others what you would not wish for yourself.’ Confucius stressed ren, humaneness, and li, the rituals and manners that train our feelings. After his death his ideas became the official philosophy of the Chinese state for some two thousand years, and they shaped Korea, Japan and Vietnam as well.",
        th: ["confucius"], link: "#voyage-confucius"
      },
      {
        id: "laozi", place: "Luoyang", lat: 34.62, lon: 112.45, zoom: 5, year: "legend: c. 500 BCE",
        img: { src: "img/tour/laozi.webp", alt: "Laozi Riding an Ox, Ming dynasty painting", credit: "Laozi Riding an Ox · Zhang Lu · Public domain", file: "https://commons.wikimedia.org/wiki/File:Zhang_Lu-Laozi_Riding_an_Ox.jpg" },
        title: "Laozi rides west and leaves the Daodejing",
        takeaway: "Flow like water: the soft and yielding overcomes the hard.",
        body: "Legend says Laozi was a record-keeper at the Zhou royal court at Luoyang who grew tired of its decline and rode west on an ox. At the border pass the guard begged him to write down his wisdom, so he wrote a short book in about 5,000 characters, the Daodejing. It describes the Dao, ‘the Way’, the nameless source and flow of all things, and praises simplicity and acting without forcing.",
        more: "Historians doubt that Laozi was a single real person, and the Daodejing was probably put together by several hands, perhaps in the 300s BCE. Its key idea is wu wei, often translated ‘non-action’ but meaning something like effortless action, the way water wears down rock without trying. Daoism became both a philosophy and a religion, and it shaped Chinese painting, poetry and medicine.",
        th: ["laozi"], link: "#voyage-dao",
        lines: [{ pts: [[34.62, 112.45], [34.63, 110.9]], label: "west to the Hangu Pass", kind: "route" }]
      },
      {
        id: "zhuangzi", place: "Meng, in the state of Song", lat: 34.41, lon: 115.65, zoom: 5, year: "c. 300 BCE",
        img: { src: "img/tour/zhuangzi.webp", alt: "Zhuangzi dreaming of a butterfly, ink painting", credit: "Zhuangzi Dreaming of a Butterfly · Ike no Taiga · Public domain", file: "https://commons.wikimedia.org/wiki/File:Zhuangzi-Butterfly-Dream.jpg" },
        title: "Zhuangzi dreams he is a butterfly",
        takeaway: "Hold your certainties lightly: you might be the butterfly’s dream.",
        body: "Zhuangzi was a minor official in the state of Song who turned down a job as prime minister, saying he would rather be a turtle dragging its tail in the mud than a sacred shell in a temple. His book is full of funny, strange stories. In the most famous, he dreams he is a butterfly, then wakes and wonders whether he is a man who dreamed he was a butterfly, or a butterfly now dreaming it is a man.",
        more: "Zhuangzi liked to show that our labels, like big and small or useful and useless, depend on where we stand. A twisted tree that no carpenter wants lives to be ancient, because it is ‘useless’. He even treats death calmly: when his wife died, a friend found him singing and drumming on a bowl, because she had returned to the great cycle of change. His playful scepticism is one of the treasures of world philosophy.",
        th: ["zhuangzi"], link: "#experiment-butterfly"
      },
      {
        id: "jixia", place: "Linzi: the Jixia Academy", lat: 36.85, lon: 118.33, zoom: 5, year: "c. 300 BCE",
        img: { src: "img/tour/jixia.webp", alt: "Museum model of the ancient Qi capital, Linzi", credit: "Photo: Rolfmueller · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Linzi_model_2010_06_06.jpg" },
        title: "Mencius and Xunzi argue about human nature",
        takeaway: "Are we born good and spoiled, or born selfish and trained to be good?",
        body: "The rulers of Qi gathered scholars at the Jixia Academy in their capital, Linzi, and paid them to debate. Mencius argued that human nature is good: anyone who sees a child about to fall into a well feels a jolt of alarm and concern. A generation later Xunzi replied that our nature is bad, meaning selfish, and that goodness has to be built, like straightening a warped piece of wood.",
        more: "Both men were Confucians, so they agreed that education and ritual matter. The disagreement was about why. For Mencius, education helps tiny ‘sprouts’ of goodness already inside us to grow. For Xunzi, ritual is a human invention, like a tool, that shapes raw material into something fine. The same question, nature or nurture, still divides psychologists and philosophers.",
        th: ["mencius", "xunzi"], link: "#experiment-child_well"
      },
      {
        id: "qin", place: "Xianyang", lat: 34.33, lon: 108.7, zoom: 4.8, year: "221 BCE",
        img: { src: "img/tour/qin.webp", alt: "The Terracotta Army in Pit 1 near Xi'an", credit: "Photo: Maros Mraz · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Terracotta_Army_Pit_1_-_2.jpg" },
        title: "The Legalists build an empire",
        takeaway: "Clear laws, harsh punishments and rewards: rule by system, not virtue.",
        body: "Han Feizi, a student of Xunzi, argued that rulers should not rely on good character. They should use clear written laws, strong rewards and severe punishments, so that the state works even with ordinary, selfish people. The state of Qin followed this Legalist philosophy and in 221 BCE conquered its rivals, making Ying Zheng the First Emperor of a united China.",
        more: "The First Emperor standardised writing, coins, weights and even the width of cart axles. He also, according to the historian Sima Qian, burned books and persecuted scholars who criticised him, though modern historians think the story was exaggerated. The Qin dynasty collapsed soon after his death. The Han dynasty that followed kept many Legalist methods but officially honoured Confucius.",
        th: ["hanfeizi"], link: "#stoa-legalism",
        labels: [{ lat: 34.38, lon: 109.27, text: "the terracotta army" }]
      },
      {
        id: "nagarjuna", place: "Amaravati", lat: 16.57, lon: 80.36, zoom: 4.6, year: "c. 200 CE",
        img: { src: "img/tour/nagarjuna.webp", alt: "Relief of a great stupa from Amaravati", credit: "Photo: Soham Banerjee · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Amaravati_Stupa_relief_at_Museum.jpg" },
        title: "Nagarjuna: everything is empty",
        takeaway: "Nothing exists on its own; everything depends on everything else.",
        body: "Nagarjuna, who probably lived in the Andhra region of southern India, is the founder of the Madhyamaka, or ‘Middle Way’, school of Buddhism. He taught that all things are ‘empty’ (shunya). That does not mean they do not exist. It means nothing has an independent, built-in essence: a table exists only thanks to wood, carpenters, our use of the word ‘table’ and much more.",
        more: "Nagarjuna was a ferocious debater who took his opponents’ views and showed that each leads to contradiction. He then turned emptiness on itself: emptiness too is empty, so it should not become a new dogma. His Fundamental Verses on the Middle Way became one of the most influential texts in Tibetan, Chinese and Japanese Buddhism. Modern philosophers compare his ideas to theories in which things are defined by their relations.",
        th: ["nagarjuna"], link: "#voyage-nagarjuna"
      },
      {
        id: "nalanda", place: "Nalanda", lat: 25.136, lon: 85.443, zoom: 3.4, view: { lat: 33, lon: 88, zoom: 2.6 }, year: "637 CE",
        img: { src: "img/tour/nalanda.webp", alt: "The ruins of Nalanda", credit: "Photo: Sarah Jamerson · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:Nalanda_ruins_and_archaeological_site.jpg" },
        title: "A pilgrim walks from China to Nalanda",
        takeaway: "Ideas spread along trade roads, carried by people willing to walk.",
        body: "Nalanda, in northern India, was a vast Buddhist monastery-university with libraries, lecture halls and thousands of students. The Chinese monk Xuanzang wanted better copies of Buddhist texts, so in 629 he set out from Chang’an, crossed deserts and mountains along the Silk Road, and studied at Nalanda for years. He came home in 645 with over 600 texts and spent the rest of his life translating them.",
        more: "Among the teachers whose work was studied at Nalanda were the great logician Dharmakirti, who asked how perception and reasoning give us knowledge, and earlier thinkers like Vasubandhu. Xuanzang’s travel account, Records of the Western Regions, is still used by archaeologists. Nalanda declined and was sacked around 1200. A new Nalanda University opened near the ruins in 2014.",
        th: ["dharmakirti", "vasubandhu"], link: "#thinker-dharmakirti",
        lines: [{ pts: [[34.27, 108.95], [36.06, 103.83], [40.14, 94.66], [42.95, 89.19], [41.72, 82.96], [39.47, 75.99], [39.65, 66.96], [36.76, 66.9], [34.82, 67.82], [34.0, 71.57], [33.75, 72.83], [28.6, 77.2], [25.136, 85.443]], label: "Xuanzang’s road, 629–645", kind: "route" }],
        labels: [{ lat: 34.27, lon: 108.95, text: "Chang’an" }, { lat: 40.14, lon: 94.66, text: "Dunhuang" }, { lat: 39.65, lon: 66.96, text: "Samarkand" }]
      },
      {
        id: "shankara", place: "Kaladi", lat: 10.17, lon: 76.44, zoom: 4.6, year: "c. 700s CE",
        img: { src: "img/tour/shankara.webp", alt: "The Sri Sankara memorial tower at Kalady", credit: "Photo: Kakkara · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Kalady_Sri_Sankara_Tower_-_%E0%B4%95%E0%B4%BE%E0%B4%B2%E0%B4%9F%E0%B4%BF_%E0%B4%86%E0%B4%A6%E0%B4%BF%E0%B4%B6%E0%B4%99%E0%B5%8D%E0%B4%95%E0%B4%B0_%E0%B4%B8%E0%B5%8D%E0%B4%A4%E0%B5%82%E0%B4%AA%E0%B4%82-2.JPG" },
        title: "Shankara: the many is an illusion",
        takeaway: "Only Brahman is ultimately real; the separate self is a mistake.",
        body: "Adi Shankara, traditionally born in Kaladi in Kerala, became the most famous teacher of Advaita Vedanta, ‘non-dual’ Vedanta. He argued that the Upanishads mean exactly what they say: your true self and Brahman are identical. The world of many separate things is maya, an appearance, like mistaking a rope for a snake in dim light.",
        more: "Shankara is said to have travelled the length of India debating other schools, and tradition credits him with founding monasteries in the north, south, east and west, though historians treat many stories about him with caution. Later Vedantins disagreed sharply. Ramanuja, in the 1000s, held that the world and selves are real, like the body of God, and Madhva held that God and souls are forever distinct.",
        th: ["shankara", "ramanuja"], link: "#stoa-advaita"
      },
      {
        id: "zhuxi", place: "the Wuyi Mountains", lat: 27.72, lon: 117.68, zoom: 4.8, year: "c. 1183 CE",
        img: { src: "img/tour/zhuxi.webp", alt: "The Nine Bend Stream in the Wuyi Mountains", credit: "Photo: John Lian · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Jiuqu_Brook_in_Wuyi_Mountains.jpg" },
        title: "Zhu Xi remakes Confucianism",
        takeaway: "Every thing has its pattern (li); study things to understand the world.",
        body: "By the Song dynasty, Buddhism and Daoism had attracted many of China’s best minds. Zhu Xi answered with a renewed Confucianism, called Neo-Confucianism, partly worked out at his academy in the Wuyi Mountains. He taught that everything is made of qi, a kind of vital energy, organised by li, its pattern or principle. By ‘investigating things’ carefully, we come to understand the pattern of the whole.",
        more: "Zhu Xi chose four short Confucian books, the Analects, the Mencius, the Great Learning and the Doctrine of the Mean, and wrote commentaries on them. From 1313 until 1905, his versions were the basis of China’s civil service exams, so for six centuries anyone who wanted a government job had to know Zhu Xi. His thought spread to Korea and Japan too.",
        th: ["zhuxi"], link: "#stoa-neo_confucianism"
      },
      {
        id: "dogen", place: "Eihei-ji", lat: 36.05, lon: 136.36, zoom: 4.2, view: { lat: 33, lon: 129, zoom: 4.0 }, year: "1244 CE",
        img: { src: "img/tour/dogen.webp", alt: "Cedar-lined steps at Eihei-ji temple", credit: "Photo: 雷太 · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Eihei-ji_Temple%2C_Fukui_Prefecture%3B_September_2019_%2801%29.jpg" },
        title: "Dōgen brings Zen home to Japan",
        takeaway: "Just sit: practice is not a means to awakening, it is awakening.",
        body: "The Japanese monk Dōgen sailed to China in 1223 to find a true teacher and trained at a Chan monastery on Mount Tiantong. Back in Japan he founded the Sōtō school of Zen and, in 1244, the temple of Eihei-ji in the mountains. He taught zazen, ‘just sitting’ meditation, not to get something later but as a full expression of awakening right now.",
        more: "Dōgen’s great work, the Shōbōgenzō, is famously difficult. One essay, ‘Being-Time’, argues that time is not a container things sit in: each thing is its own moment of time. Chan Buddhism had grown in China by mixing Indian Buddhism with Daoist ideas; in Japan, as Zen, it shaped gardens, tea ceremony, poetry and martial arts. Eihei-ji is still a working monastery.",
        th: ["dogen"], link: "#stoa-zen",
        lines: [{ pts: [[29.8, 121.84], [31.0, 125.5], [33.0, 129.5], [34.0, 132.5], [35.0, 135.77], [36.05, 136.36]], label: "from Mount Tiantong", kind: "route" }],
        labels: [{ lat: 29.8, lon: 121.84, text: "Mount Tiantong" }, { lat: 35.01, lon: 135.77, text: "Kyoto" }]
      },
      {
        id: "wangyangming", place: "Longchang, Guizhou", lat: 26.85, lon: 106.6, zoom: 4.8, year: "1508 CE",
        title: "Wang Yangming: knowing is doing",
        takeaway: "If you know what is good but do not do it, you do not really know it.",
        body: "Wang Yangming was a scholar-official exiled to Longchang, a remote post in the hills of Guizhou. Living in a cave, he had a sudden insight: the pattern of things is not out there waiting to be studied, it is already in our own mind. He taught the unity of knowing and acting: real knowledge of goodness shows itself in action, as truly liking a beautiful colour is part of seeing it.",
        more: "As a young man Wang had tried Zhu Xi’s method of ‘investigating things’ by staring at bamboo for seven days, hoping to grasp its principle. He fell ill instead. His later idea of ‘innate knowing’ (liangzhi) says every person already has a moral compass and only needs to clear away selfish desires. His school was hugely influential in China and in Japan, where it inspired reformers in the 1800s.",
        th: ["wangyangming"], link: "#thinker-wangyangming"
      }
    ]
  },

  {
    id: "islam",
    title: "The Golden Age of Islam and the medieval schools",
    sub: "From Hippo and Baghdad to Córdoba, Paris and Oxford",
    blurb: "Greek philosophy did not vanish when Rome fell. It was translated into Arabic in Baghdad, argued over from Persia to Spain, and carried into Latin, where it built the first universities. Follow Aristotle as he travels.",
    span: "397 – 1377 CE",
    stops: [
      {
        id: "augustine", place: "Hippo", lat: 36.88, lon: 7.75, zoom: 5, view: { lat: 41, lon: 9, zoom: 4.2 }, year: "397 CE",
        img: { src: "img/tour/augustine.webp", alt: "The Roman ruins of Hippo Regius, Annaba", credit: "Photo: Dan Sloan · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:Hippo_Regius_Algeria.jpg" },
        title: "Augustine writes his Confessions",
        takeaway: "Our hearts are restless until they rest in God.",
        body: "Augustine grew up in Roman North Africa, studied in Carthage, taught in Rome and Milan, and became bishop of Hippo, in today’s Algeria. Around 397 he wrote the Confessions, the first great autobiography, about his wild youth, his search through different philosophies and his conversion to Christianity. He blended Christian faith with ideas from Plato and Plotinus.",
        more: "Augustine asked questions that still feel modern. What is time? ‘If no one asks me, I know; if I want to explain it, I do not know.’ He argued that ‘if I am mistaken, I exist’, a forerunner of Descartes’ ‘I think, therefore I am’. In The City of God, written after the Goths sacked Rome in 410, he contrasted the earthly city of power with the heavenly city of love. His ideas on free will and sin shaped Western Christianity for a thousand years.",
        th: ["augustine"], link: "#voyage-augustine",
        labels: [{ lat: 36.85, lon: 10.32, text: "Carthage" }, { lat: 45.46, lon: 9.19, text: "Milan: his conversion, 386" }]
      },
      {
        id: "boethius", place: "Pavia", lat: 45.19, lon: 9.16, zoom: 5, year: "524 CE",
        img: { src: "img/tour/boethius.webp", alt: "San Pietro in Ciel d'Oro, Pavia, where Boethius is buried", credit: "Photo: Welleschik · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Pavia_San_Pietro_in_Ciel_d%27Oro1.JPG" },
        title: "Boethius consoles himself with philosophy",
        takeaway: "Fortune’s wheel always turns; only goodness is truly your own.",
        body: "Boethius was a Roman senator serving the Gothic king Theodoric. Accused of treason, he was imprisoned near Pavia and later executed. While awaiting death he wrote The Consolation of Philosophy, in which Philosophy appears to him as a woman and explains that wealth and fame belong to Fortune, who spins her wheel, while virtue cannot be taken away.",
        more: "Boethius had planned to translate all of Plato and Aristotle into Latin. He managed only some of Aristotle’s logic, but for six centuries those translations were almost all the Aristotle that western Europe had. The Consolation was one of the most copied books of the Middle Ages; King Alfred, Chaucer and Queen Elizabeth I all translated it. It also tackles a hard puzzle: if God knows what you will do, are you free?",
        th: ["boethius"], link: "#voyage-boethius"
      },
      {
        id: "baghdad", place: "Baghdad: the House of Wisdom", lat: 33.31, lon: 44.36, zoom: 3.4, view: { lat: 36, lon: 36, zoom: 3.3 }, year: "c. 830 CE",
        img: { src: "img/tour/baghdad.webp", alt: "Scholars in an Abbasid library, miniature from the Maqamat of al-Hariri", credit: "Maqamat miniature (1237) · Yahya al-Wasiti · Public domain", file: "https://commons.wikimedia.org/wiki/File:A_Library_in_Golden_Islamic_Age.jpg" },
        title: "Baghdad translates the Greeks",
        takeaway: "Truth is welcome whatever its source, even from foreign peoples.",
        body: "Baghdad, founded in 762 as the capital of the Abbasid caliphs, became one of the largest cities in the world. Rulers and rich families paid scholars, many of them Syriac-speaking Christians, to translate Greek works of medicine, mathematics, astronomy and philosophy into Arabic. The caliphs’ library, the House of Wisdom, became a symbol of this movement. Al-Kindi, ‘the philosopher of the Arabs’, used the new translations to write philosophy in Arabic.",
        more: "Al-Kindi wrote that we should not be ashamed to acknowledge truth and take it from wherever it comes, even from distant nations. The translators also brought in Persian and Indian learning, including the numbers that became our ‘Arabic’ numerals and the zero. Paper, learned from China, made books cheap. Most of Aristotle reached Europe centuries later through this Arabic detour, which is why the next stops matter so much.",
        th: [], link: "#voyage-falsafa",
        lines: [
          { pts: [[37.975, 23.725], [38.5, 27.5], [41.01, 28.98]], label: "", kind: "flow" },
          { pts: [[41.01, 28.98], [39.0, 35.0], [36.2, 40.0], [33.31, 44.36]], label: "Greek books", kind: "flow" },
          { pts: [[31.2, 29.92], [32.0, 35.5], [34.0, 40.0], [33.31, 44.36]], label: "", kind: "flow" },
          { pts: [[32.28, 48.52], [33.31, 44.36]], label: "Persian learning", kind: "flow" }
        ],
        labels: [{ lat: 32.28, lon: 48.52, text: "Gondishapur" }, { lat: 41.01, lon: 28.98, text: "Constantinople" }, { lat: 31.2, lon: 29.92, text: "Alexandria" }]
      },
      {
        id: "farabi", place: "Damascus", lat: 33.51, lon: 36.29, zoom: 4.6, view: { lat: 38, lon: 52, zoom: 3.2 }, year: "c. 942 CE",
        img: { src: "img/tour/farabi.webp", alt: "The courtyard of the Umayyad Mosque, Damascus", credit: "Photo: Vyacheslav Argenberg · CC BY 4.0", file: "https://commons.wikimedia.org/wiki/File:The_Umayyad_Mosque%2C_Damascus%2C_Syria.jpg" },
        title: "Al-Farabi, the Second Teacher",
        takeaway: "A good city is one where people help each other become happy.",
        body: "Al-Farabi came from Central Asia, studied logic in Baghdad with Christian teachers, and ended his life in Damascus and Aleppo. He knew Aristotle so well that he was called ‘the Second Teacher’, after Aristotle himself. In The Virtuous City he combined Plato’s Republic with Islamic ideas, describing an ideal state led by a ruler who is both philosopher and prophet.",
        more: "Al-Farabi argued that religion and philosophy can express the same truths: philosophy in demonstrations for the few, religion in images and stories for everyone. He also wrote on music, and his Great Book of Music was a standard work for centuries. Avicenna later said he had read Aristotle’s Metaphysics forty times without understanding it, until a cheap copy of al-Farabi’s commentary, bought at a bookstall, made it clear.",
        th: ["alfarabi"], link: "#works-alfarabi-virtuous-city",
        lines: [{ pts: [[42.85, 68.3], [39.65, 66.96], [37.6, 61.8], [35.7, 51.4], [33.31, 44.36], [36.2, 37.15], [33.51, 36.29]], label: "Farab to Baghdad to Damascus", kind: "route" }],
        labels: [{ lat: 42.85, lon: 68.3, text: "Farab: his birthplace" }, { lat: 36.2, lon: 37.15, text: "Aleppo" }]
      },
      {
        id: "avicenna", place: "Hamadan", lat: 34.8, lon: 48.51, zoom: 4.2, view: { lat: 37, lon: 55, zoom: 3.7 }, year: "c. 1020 CE",
        img: { src: "img/tour/avicenna.webp", alt: "The tower of Avicenna's mausoleum in Hamadan", credit: "Photo: Ahmad Jamali Moghaddam · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:AJM0664.jpg" },
        title: "Avicenna imagines a floating man",
        takeaway: "You can know you exist even without any sense of your body.",
        body: "Ibn Sina, known in Europe as Avicenna, was born near Bukhara and was a famous doctor by his teens. He served Persian princes as physician and minister, often writing at night, sometimes in hiding or even in prison. Imagine, he said, a man created in mid-air, blindfolded, limbs apart, touching nothing. He would still know that he exists, so the self must be something other than the body.",
        more: "His Canon of Medicine was used as a textbook in European universities until the 1600s. His Book of the Healing, a vast encyclopedia of philosophy and science, was begun in Hamadan, where he is buried. Avicenna also argued that God is the one ‘necessary existent’, the being that cannot not exist and on which everything else depends. His floating man is a forerunner of Descartes’ thought experiments, six centuries later.",
        th: ["avicenna"], link: "#thinker-avicenna",
        labels: [{ lat: 39.77, lon: 64.42, text: "Bukhara: his birthplace" }, { lat: 32.65, lon: 51.67, text: "Isfahan" }]
      },
      {
        id: "anselm", place: "Bec Abbey, Normandy", lat: 49.23, lon: 0.71, zoom: 5, year: "1078 CE",
        img: { src: "img/tour/anselm.webp", alt: "Bec Abbey in Normandy", credit: "Photo: Stanzilla · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Bec_Abbey.jpg" },
        title: "Anselm proves God from an idea",
        takeaway: "God is that than which nothing greater can be conceived.",
        body: "Anselm was an Italian monk who became abbot of Bec in Normandy and later Archbishop of Canterbury. In a short book, the Proslogion, he tried to prove God exists using reason alone. God is the greatest being we can think of. A God who exists in reality is greater than one who exists only in our minds. So God must exist in reality.",
        more: "This is the ontological argument, and people still argue about it. A monk named Gaunilo replied that the same logic would prove the existence of the most perfect island. Later, Aquinas rejected the argument, Descartes revived it, and Kant attacked it by saying that ‘existence’ is not a quality that makes a thing greater. Anselm’s motto was ‘faith seeking understanding’: he believed first, then wanted to understand why.",
        th: ["anselm"], link: "#voyage-anselm",
        labels: [{ lat: 51.28, lon: 1.08, text: "Canterbury" }]
      },
      {
        id: "ghazali", place: "Baghdad: the Nizamiyya", lat: 33.34, lon: 44.4, zoom: 4.2, year: "1095 CE",
        img: { src: "img/tour/ghazali.webp", alt: "The Mustansiriya madrasa, a medieval college in Baghdad", credit: "Photo: Taisir Mahdi · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%B5%D8%B1%D9%8A%D8%A9_%D9%81%D9%8A_%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF_%283%29.jpg" },
        title: "Al-Ghazali’s crisis of doubt",
        takeaway: "Fire does not burn cotton by necessity; we only see one follow the other.",
        body: "Al-Ghazali was the star professor at the Nizamiyya college in Baghdad. In The Incoherence of the Philosophers he attacked thinkers like Avicenna on points where, he argued, they contradicted Islam. He also claimed that we never see causes making things happen: when cotton touches fire, we see it burn, but we do not see any necessary link. Then, in 1095, he suffered a crisis, lost his voice and left his post to live as a Sufi mystic.",
        more: "His autobiography, Deliverance from Error, describes doubting even his senses and his reason, five centuries before Descartes. His point about causation strikingly resembles David Hume’s, more than 600 years later. Al-Ghazali was not against reason: he valued logic and mathematics highly. But he argued that some truths are reached only by spiritual experience. He became one of the most respected scholars in Islamic history.",
        th: ["alghazali"], link: "#voyage-incoherence"
      },
      {
        id: "abelard", place: "Paris", lat: 48.853, lon: 2.349, zoom: 5.4, year: "c. 1120 CE",
        img: { src: "img/tour/abelard.webp", alt: "The Seine and the Île de la Cité, Paris", credit: "Photo: GFreihalter · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Paris_4e_%C3%8Ele_de_la_Cit%C3%A9_Seine_687.jpg" },
        title: "Abelard says yes and no",
        takeaway: "By doubting we come to questioning, and by questioning we find truth.",
        body: "Peter Abelard was the most brilliant and arrogant teacher in Paris, and students flocked to hear him. In Sic et Non, ‘Yes and No’, he lined up quotations from Church authorities that seemed to contradict each other and showed students how to reason their way through. This method of setting out a question, the arguments on each side, and a resolution became the standard way of teaching in medieval universities.",
        more: "Abelard is also remembered for his love affair with his brilliant student Heloise, which ended in disaster when her uncle had Abelard attacked and castrated. Both became members of religious orders, and their letters are among the most famous in history. In philosophy he took a middle path on ‘universals’: words like ‘human’ are not names of real shared things, but nor are they just noises. The schools of Paris grew, around 1200, into the University of Paris.",
        th: [], link: "#works-abelard-heloise-letters"
      },
      {
        id: "toledo", place: "Toledo", lat: 39.86, lon: -4.02, zoom: 3.6, view: { lat: 40, lon: 18, zoom: 2.6 }, year: "c. 1150 CE",
        img: { src: "img/tour/toledo.webp", alt: "Toledo above the River Tagus", credit: "Photo: Diliff · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Tagus_River_Panorama_-_Toledo%2C_Spain_-_Dec_2006.jpg" },
        title: "Arabic becomes Latin in Toledo",
        takeaway: "Aristotle came back to Europe in a roundabout way: Greek, Arabic, then Latin.",
        body: "When Christian kings took Toledo in 1085, they found libraries full of Arabic books. Over the next century, teams of scholars, often a Jewish or Arab-Christian translator working with a Latin scholar, turned them into Latin. Gerard of Cremona alone translated over seventy works, including Ptolemy’s astronomy and Avicenna’s Canon. Translations from Arabic and from Greek brought the rest of Aristotle into Latin, along with the Arabic commentaries on him.",
        more: "This flood of new texts gave Europe Aristotle’s science, ethics and metaphysics, plus the ideas of Avicenna and Averroes. It was exciting and disturbing, because some of Aristotle’s claims, like the eternity of the world, seemed to clash with Christian teaching. Sicily and the crusader states were other bridges. Many astronomy words in English, like ‘zenith’ and the star name ‘Aldebaran’, come from Arabic through these translations.",
        th: [], link: "#stoa-scholasticism",
        lines: [{ pts: [[37.975, 23.725], [36.6, 30.5], [36.2, 36.2], [33.31, 44.36], [30.8, 33.5], [32.4, 21.0], [35.6, 10.5], [35.9, -5.4], [37.88, -4.78], [39.86, -4.02], [44.5, 0.6], [48.853, 2.349]], label: "Aristotle’s journey: Greek → Arabic → Latin", kind: "flow" }],
        labels: [{ lat: 37.975, lon: 23.725, text: "Athens: in Greek" }, { lat: 33.31, lon: 44.36, text: "Baghdad: into Arabic" }, { lat: 48.853, lon: 2.349, text: "Paris: in Latin" }]
      },
      {
        id: "averroes", place: "Córdoba", lat: 37.88, lon: -4.78, zoom: 5, view: { lat: 35, lon: -5.5, zoom: 4.4 }, year: "c. 1180 CE",
        img: { src: "img/tour/averroes.webp", alt: "Horseshoe arch inside the Mezquita of Córdoba", credit: "Photo: Alvaro Viñuela Carnicero · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Mezquita_cordoba_arco_interior.jpg" },
        title: "Averroes, the Commentator",
        takeaway: "Truth does not contradict truth: philosophy and faith can agree.",
        body: "Córdoba, in Muslim al-Andalus, was a city of libraries, gardens and scholars. Ibn Rushd, called Averroes in Latin, was a judge, a doctor and a philosopher there. He wrote such careful explanations of Aristotle that Europeans simply called him ‘the Commentator’. In The Decisive Treatise he argued that the Quran itself commands people to study nature and reason, so philosophy is not forbidden but required for those able to do it.",
        more: "Averroes replied to al-Ghazali’s attack with a book titled The Incoherence of the Incoherence. In the Islamic world his influence faded after his death; in Latin Europe it exploded. His readers in Paris, the ‘Latin Averroists’, were accused of teaching a ‘double truth’, one for faith and one for reason, which Averroes himself never held. Raphael painted him in The School of Athens, peering over Pythagoras’ shoulder.",
        th: ["averroes"], link: "#works-averroes-decisive-treatise",
        labels: [{ lat: 34.03, lon: -5.0, text: "Fez" }, { lat: 31.63, lon: -8.0, text: "Marrakesh: the Almohad court" }]
      },
      {
        id: "maimonides", place: "Fustat (Old Cairo)", lat: 30.0, lon: 31.23, zoom: 4.2, view: { lat: 35, lon: 13, zoom: 3.2 }, year: "c. 1190 CE",
        img: { src: "img/tour/maimonides.webp", alt: "The Ben Ezra Synagogue in Old Cairo", credit: "Photo: herr müller · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Cairo_-_Coptic_area_-_Ben_Ezra_Synagogue.JPG" },
        title: "Maimonides writes a guide for the perplexed",
        takeaway: "Say only what God is not; our words are too small for what God is.",
        body: "Moses Maimonides was also born in Córdoba, but his Jewish family fled persecution when he was young, living in Fez and finally settling in Fustat, the old city of Cairo. There he became a court physician and leader of the Jewish community. His Guide for the Perplexed, written in Arabic, was for readers torn between the Bible and Aristotle, and it showed how the two could fit together.",
        more: "Maimonides argued that descriptions of God in the Bible, like God’s ‘hand’ or ‘anger’, are metaphors. Positive words cannot capture God, so the best we can do is say what God is not; this is called negative theology. He also wrote a great code of Jewish law. Aquinas read the Guide in Latin and quotes ‘Rabbi Moses’ with respect. A saying in Jewish tradition runs: from Moses to Moses there was none like Moses.",
        th: ["maimonides"], link: "#voyage-maimonides",
        lines: [{ pts: [[37.88, -4.78], [34.03, -5.0], [36.0, 3.0], [37.2, 11.0], [33.0, 22.0], [31.5, 28.5], [30.0, 31.23]], label: "Córdoba, Fez, Fustat", kind: "route" }]
      },
      {
        id: "aquinas", place: "Paris: the university", lat: 48.849, lon: 2.344, zoom: 5.4, view: { lat: 46, lon: 8, zoom: 4.0 }, year: "1270 CE",
        img: { src: "img/tour/aquinas.webp", alt: "Stained glass of the Sainte-Chapelle, Paris", credit: "Photo: Mark Mitchell · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Interior_of_Sainte-Chapelle_%28Paris_October_31%2C_2009%29.jpg" },
        title: "Aquinas builds a cathedral of ideas",
        takeaway: "Faith and reason are two roads to the same truth.",
        body: "Thomas Aquinas was an Italian friar, so quiet and large that classmates called him ‘the Dumb Ox’. His teacher replied that the ox’s bellowing would one day be heard around the world. Teaching at the University of Paris, he took Aristotle, who had arrived via Arabic and Greek, and wove him into Christian theology. His Summa Theologiae answers thousands of questions, each with arguments for and against.",
        more: "Aquinas offered Five Ways to show that God exists, such as the argument that every chain of causes needs a first cause. He used Aristotle’s idea of purpose to build a theory of natural law: by looking at human nature, reason can work out how we should live. He treated Avicenna, Averroes and Maimonides as serious partners in argument. In 1273 he stopped writing, after an experience that made his work seem ‘like straw’. The Catholic Church later named him its leading theologian.",
        th: ["aquinas"], link: "#voyage-aquinas",
        labels: [{ lat: 41.4, lon: 13.65, text: "Roccasecca: his birthplace" }, { lat: 50.94, lon: 6.96, text: "Cologne: with Albert the Great" }]
      },
      {
        id: "ockham", place: "Oxford", lat: 51.754, lon: -1.254, zoom: 5, view: { lat: 48.5, lon: 4.5, zoom: 4.0 }, year: "c. 1320 CE",
        img: { src: "img/tour/ockham.webp", alt: "Mob Quad, Merton College, Oxford", credit: "Photo: Hadrianus1959 · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Merton_College%2C_Oxford_%28Mob_Quad%29.jpg" },
        title: "Ockham sharpens his razor",
        takeaway: "Do not multiply things beyond necessity: prefer the simpler explanation.",
        body: "William of Ockham was an English Franciscan friar who studied and taught at Oxford. He is famous for Ockham’s Razor: if you can explain something without assuming extra things, do. He used it against belief in ‘universals’, saying only individual things exist; ‘redness’ is just a word we use for many red things. Summoned to the Pope’s court at Avignon to answer charges, he fled in 1328 to the emperor in Munich.",
        more: "Ockham never put the razor in its famous words, but he used the principle constantly. His ‘nominalism’, the view that general terms are just names, helped loosen the hold of Aristotle’s metaphysics and cleared ground for later science. He also argued, against the Pope, that the Church should not hold worldly power. Umberto Eco named the detective-friar in his novel The Name of the Rose ‘William’ partly in his honour.",
        th: ["ockham"], link: "#voyage-ockham",
        labels: [{ lat: 43.95, lon: 4.81, text: "Avignon: the papal court" }, { lat: 48.14, lon: 11.58, text: "Munich: his refuge" }]
      },
      {
        id: "khaldun", place: "Qal’at Ibn Salama", lat: 35.06, lon: 1.04, zoom: 4.4, view: { lat: 35.5, lon: 5.5, zoom: 4.4 }, year: "1377 CE",
        img: { src: "img/tour/khaldun.webp", alt: "Statue of Ibn Khaldun in Tunis", credit: "Photo: Sami Mlouhi · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Statue_of_Ibn_Khaldun_-_%D8%AA%D9%85%D8%AB%D8%A7%D9%84_%D8%A7%D8%A8%D9%86_%D8%AE%D9%84%D8%AF%D9%88%D9%86_-_Statue_d%27Ibn_Khaldoun.jpg" },
        title: "Ibn Khaldun explains the rise and fall of dynasties",
        takeaway: "Group loyalty builds empires; luxury slowly dissolves them.",
        body: "Ibn Khaldun, born in Tunis, served many rulers across North Africa and al-Andalus, and saw dynasties rise and collapse. Withdrawing to a remote castle in what is now Algeria, he wrote the Muqaddimah, an introduction to history. He argued that tough desert or mountain peoples with strong group solidarity, asabiyya, conquer cities, then grow soft in luxury over three or four generations, and are replaced in turn.",
        more: "Ibn Khaldun wanted history to be a science: instead of repeating tales, historians should ask whether a report fits what we know about how societies work. He wrote about economics, taxation and the division of labour centuries before Adam Smith. Late in life he met the conqueror Timur outside Damascus in 1401 and described the meeting. Many call him a founder of sociology.",
        th: ["ibn_khaldun"], link: "#works-ibn-khaldun-muqaddimah",
        labels: [{ lat: 36.8, lon: 10.18, text: "Tunis: his birthplace" }]
      }
    ]
  },

  {
    id: "enlightenment",
    title: "Doubt, reason and revolution",
    sub: "From Renaissance Florence to the Enlightenment and the American Revolution",
    blurb: "New science, new printing presses and bloody religious wars made Europeans rethink everything: what we can know, who should rule, and whether reason alone can guide us. Watch the ideas cross borders, and then the Atlantic.",
    span: "1513 – 1784",
    stops: [
      {
        id: "machiavelli", place: "Florence", lat: 43.77, lon: 11.25, zoom: 5.2, year: "1513",
        img: { src: "img/tour/machiavelli.webp", alt: "The tower of the Palazzo Vecchio, Florence, at night", credit: "Photo: Michal Osmenda · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:The_Palazzo_Vecchio%2C_Florence_%285771115329%29.jpg" },
        title: "Machiavelli writes The Prince",
        takeaway: "A ruler must learn how not to be good, if he wants to stay in power.",
        body: "Niccolò Machiavelli was a diplomat for the Florentine Republic until the Medici family returned, and he was jailed and tortured. Exiled to his farm outside the city, he wrote The Prince, a handbook on gaining and keeping power. He described politics as it is, not as it ought to be: a ruler should be both a lion and a fox, and if he cannot be loved and feared, it is safer to be feared.",
        more: "Machiavelli’s name became a word for cunning cruelty, but his other big book, the Discourses on Livy, praises republics where citizens share power. Some readers think The Prince is partly a warning about tyrants. Either way, he broke with a long tradition that treated politics as a branch of ethics. This was also the time of the Renaissance, when Florentine scholars rediscovered Plato and printing spread books far faster than copying by hand.",
        th: ["machiavelli"], link: "#voyage-machiavelli"
      },
      {
        id: "montaigne", place: "Château de Montaigne", lat: 44.86, lon: 0.03, zoom: 5, year: "1580",
        img: { src: "img/tour/montaigne.webp", alt: "Montaigne's tower at the Château de Montaigne", credit: "Photo: Jacques Bodin · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Montaigne_-_tower_-_view_from_courtyard_%2826322057564%29.jpg" },
        title: "Montaigne asks: what do I know?",
        takeaway: "Study yourself honestly, and you will find how little you know.",
        body: "Michel de Montaigne retired to a round tower on his estate near Bordeaux, lined with a thousand books. There he invented a new kind of writing, the essay, from the French essai, ‘attempt’. He wrote about friendship, cannibals, cruelty, his kidney stones and his cat. His motto was Que sais-je?, ‘What do I know?’",
        more: "France was being torn apart by wars between Catholics and Protestants, both sides sure they were right. Montaigne’s doubt was partly a cure for that certainty. In ‘Of Cannibals’ he argued that Europeans who tortured each other over religion had little right to call Brazilian peoples barbarians. He painted sayings from ancient sceptics on the beams of his library ceiling, and you can still see them today.",
        th: ["montaigne"], link: "#voyage-montaigne"
      },
      {
        id: "bacon", place: "London", lat: 51.507, lon: -0.128, zoom: 5, year: "1620",
        img: { src: "img/tour/bacon.webp", alt: "A ship sailing past the Pillars of Hercules, frontispiece of Bacon's Great Instauration", credit: "Instauratio Magna frontispiece (1620) · Public domain", file: "https://commons.wikimedia.org/wiki/File:Bacon_Great_Instauration_frontispiece.jpg" },
        title: "Bacon calls for a new science",
        takeaway: "Knowledge is power: test nature with experiments, not old books.",
        body: "Francis Bacon was a lawyer who rose to be Lord Chancellor of England. In The New Organon he argued that scholars had wasted centuries arguing over Aristotle. Instead we should collect careful observations, run experiments, and build up general laws step by step. He warned against the ‘idols of the mind’, the habits that make us see what we expect to see.",
        more: "The title page of his book shows a ship sailing past the Pillars of Hercules, the old edge of the known world, into the open ocean of discovery. Bacon’s plan inspired the founders of the Royal Society in London in 1660, one of the first scientific academies. Legend says he died of a chill caught while stuffing a chicken with snow to see if cold preserved meat.",
        th: ["bacon"], link: "#voyage-bacon"
      },
      {
        id: "descartes", place: "Leiden", lat: 52.16, lon: 4.49, zoom: 5.2, view: { lat: 55, lon: 10, zoom: 4.0 }, year: "1637",
        img: { src: "img/tour/descartes.webp", alt: "The Rapenburg canal in Leiden", credit: "Photo: Dirkx · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Leiden_Rapenburg.jpeg" },
        title: "Descartes doubts everything",
        takeaway: "I think, therefore I am.",
        body: "René Descartes was a Frenchman who spent most of his adult life in the Dutch Republic, where there was more freedom to publish. In 1637 his Discourse on the Method was printed in Leiden. He resolved to doubt everything that could possibly be doubted, even his senses and the existence of the world. One thing survived: while he doubts, he must exist. ‘I think, therefore I am.’",
        more: "From that single certainty Descartes tried to rebuild all knowledge, as he explained in his Meditations of 1641. He argued that mind and body are two different kinds of thing, which raised the puzzle of how they interact. The sharpest critic was Princess Elisabeth of Bohemia, living in exile in The Hague, who asked in 1643 how an unextended thinking thing could ever push a body. He also invented coordinate geometry, which is why we speak of Cartesian coordinates.",
        th: ["descartes", "elisabeth"], link: "#voyage-descartes",
        labels: [{ lat: 52.08, lon: 4.31, text: "The Hague: Princess Elisabeth" }, { lat: 59.33, lon: 18.07, text: "Stockholm: he dies, 1650" }]
      },
      {
        id: "hobbes", place: "Paris", lat: 48.86, lon: 2.35, zoom: 5, year: "1651",
        img: { src: "img/tour/hobbes.webp", alt: "The giant sovereign made of people, frontispiece of Leviathan", credit: "Leviathan frontispiece (1651) · Abraham Bosse · Public domain", file: "https://commons.wikimedia.org/wiki/File:Leviathan_frontispiece_cropped_British_Library.jpg" },
        title: "Hobbes imagines life without government",
        takeaway: "Without a common power, life is nasty, brutish and short.",
        body: "Thomas Hobbes fled England as it slid into civil war, and in exile in Paris he wrote Leviathan, published in London in 1651. He imagined humans in a ‘state of nature’, with no government at all. Since everyone fears everyone else, it would be a war of all against all, and life would be ‘solitary, poor, nasty, brutish, and short’. So we agree to hand power to a sovereign who keeps the peace.",
        more: "This idea, that a government’s authority comes from an agreement among the people it rules, is called social contract theory. Hobbes thought the sovereign should have nearly unlimited power, since anything is better than civil war. Later contract theorists like Locke and Rousseau drew very different conclusions from the same starting point. Hobbes also tutored the future King Charles II in mathematics during the exile.",
        th: ["hobbes"], link: "#voyage-hobbes",
        labels: [{ lat: 51.507, lon: -0.128, text: "London: Leviathan is printed" }]
      },
      {
        id: "spinoza", place: "Amsterdam", lat: 52.37, lon: 4.9, zoom: 5.2, year: "1656",
        img: { src: "img/tour/spinoza.webp", alt: "Inside the Portuguese Synagogue, Amsterdam", credit: "Photo: Yair Haklai · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Portugees-Isra%C3%ABlietische_Synagoge-Amsterdam.jpg" },
        title: "Spinoza is cast out, and calls God Nature",
        takeaway: "God and Nature are one and the same; everything follows its laws.",
        body: "Baruch Spinoza grew up in Amsterdam’s Portuguese-Jewish community. In 1656, at 23, he was expelled from it with a fierce ban, probably for his unorthodox views. He made his living partly by grinding lenses and wrote the Ethics, laid out like a geometry book with definitions and proofs. Its message: there is only one substance, which you can call God or Nature, and everything, including us, is part of it.",
        more: "For Spinoza, God is not a person who makes plans or answers prayers; God is the whole of reality, working by necessary laws. Freedom does not mean escaping those laws, but understanding them, so that we are driven less by passions like fear and envy. He argued for freedom of thought and speech in his Theological-Political Treatise. The Ethics was published only after his death in The Hague in 1677. Einstein said he believed in ‘Spinoza’s God’.",
        th: ["spinoza"], link: "#voyage-spinoza",
        labels: [{ lat: 52.08, lon: 4.31, text: "The Hague: he dies, 1677" }]
      },
      {
        id: "locke", place: "London", lat: 51.517, lon: -0.11, zoom: 5, year: "1689",
        img: { src: "img/tour/locke.webp", alt: "Seventeenth-century London from Bankside", credit: "Long View of London (1647) · Wenceslaus Hollar · Public domain", file: "https://commons.wikimedia.org/wiki/File:1647_Long_view_of_London_From_Bankside_-_Wenceslaus_Hollar_%28cropped%29.jpg" },
        title: "Locke: the mind starts as a blank page",
        takeaway: "All our ideas come from experience; governments need our consent.",
        body: "John Locke was a doctor and political adviser who fled to the Netherlands when his patron fell from favour. He returned after the Glorious Revolution of 1688 and in 1689 published two landmark books. The Essay Concerning Human Understanding argues that the mind begins as ‘white paper’ and gets all its ideas from experience. The Two Treatises of Government argue that people have natural rights to life, liberty and property, and can overthrow a government that violates them.",
        more: "Locke’s view that knowledge comes from experience is called empiricism, and it was developed by Berkeley and Hume. His political ideas strongly influenced the American Declaration of Independence. He also wrote A Letter Concerning Toleration, arguing that the state should not force religious belief, though he did not extend toleration to atheists or Catholics. His idea that personal identity depends on memory is still debated.",
        th: ["locke"], link: "#voyage-locke",
        labels: [{ lat: 51.92, lon: 4.48, text: "Rotterdam: his exile" }]
      },
      {
        id: "leibniz", place: "Hanover", lat: 52.37, lon: 9.73, zoom: 5, year: "1710",
        img: { src: "img/tour/leibniz.webp", alt: "The cascade in the Great Garden at Herrenhausen, Hanover", credit: "Photo: pellethepoet · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:The_cascade_behind_the_theatre%2C_the_Great_Garden%2C_Herrenhausen_Gardens%2C_Hanover_%28c.1880%29_%2825802844924%29.jpg" },
        title: "Leibniz: the best of all possible worlds",
        takeaway: "Nothing happens without a reason, so God must have chosen the best world.",
        body: "Gottfried Wilhelm Leibniz was a librarian and adviser to the dukes of Hanover, and a genius at almost everything. He invented calculus at the same time as Newton, designed a calculating machine and worked on binary numbers. In his Theodicy he tackled the problem of evil: if God is good and all-powerful, why is there suffering? His answer was that this world, with all its pain, is the best one possible.",
        more: "Leibniz’s ‘principle of sufficient reason’ says that there must be a reason why everything is the way it is and not otherwise. He pictured reality as made of ‘monads’, simple mind-like units, each mirroring the whole universe from its own point of view. He corresponded with scholars across Europe and was fascinated by China, especially the I Ching. Voltaire would soon make fun of his optimism.",
        th: ["leibniz"], link: "#voyage-leibniz"
      },
      {
        id: "hume", place: "Edinburgh", lat: 55.95, lon: -3.19, zoom: 5, year: "1739",
        img: { src: "img/tour/hume.webp", alt: "Edinburgh's Old Town skyline", credit: "Photo: Mike McBey · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Edinburgh%27s_%22Old_town%22_%2847110237551%29.jpg" },
        title: "Hume: custom is the great guide of life",
        takeaway: "We never see causes, only one thing following another, again and again.",
        body: "David Hume published his Treatise of Human Nature in 1739, when he was 27; he said it ‘fell dead-born from the press’. He argued that we never observe one thing making another happen. We just see one billiard ball hit another and the second move, again and again, and our minds form a habit of expecting it. Reason, he said, ‘is, and ought only to be, the slave of the passions’.",
        more: "Hume was famously cheerful and good company; Parisian society adored ‘le bon David’. His problem of induction asks why the past should be any guide to the future, and nobody has fully solved it. He also argued that you cannot get an ‘ought’ from an ‘is’: facts alone do not tell us what we should do. His friend Adam Smith, from nearby Kirkcaldy, founded modern economics, and the two were at the heart of the Scottish Enlightenment.",
        th: ["hume", "smith"], link: "#voyage-hume",
        labels: [{ lat: 56.11, lon: -3.16, text: "Kirkcaldy: Adam Smith" }, { lat: 55.86, lon: -4.25, text: "Glasgow" }]
      },
      {
        id: "voltaire", place: "Geneva", lat: 46.2, lon: 6.15, zoom: 4.4, view: { lat: 43, lon: -1.5, zoom: 4.0 }, year: "1759",
        img: { src: "img/tour/voltaire.webp", alt: "Les Délices, Voltaire's house near Geneva", credit: "Les Délices · Unknown artist · Public domain", file: "https://commons.wikimedia.org/wiki/File:Les_Delices.jpg" },
        title: "Voltaire laughs at the best of all possible worlds",
        takeaway: "Stop justifying suffering; tend your garden and make things better.",
        body: "On 1 November 1755, a huge earthquake, a tsunami and fires destroyed much of Lisbon and killed tens of thousands of people. Europe’s thinkers asked how a good God could allow it. Voltaire, living near Geneva, answered with Candide, a fast, funny novel in which a naive young man and his teacher Pangloss, a parody of Leibniz, suffer one disaster after another while insisting that all is for the best.",
        more: "Voltaire was the most famous writer of the Enlightenment, jailed in the Bastille twice and exiled for years. He campaigned against religious persecution, most famously for Jean Calas, a Protestant tortured and executed in Toulouse. He admired England’s freedom of thought and Newton’s science. Candide ends with the words ‘we must cultivate our garden’, which can mean: get on with useful work instead of grand theories.",
        th: ["voltaire", "leibniz"], link: "#works-voltaire-candide",
        labels: [{ lat: 38.72, lon: -9.14, text: "Lisbon: the earthquake, 1755" }, { lat: 46.26, lon: 6.11, text: "Ferney: his estate" }],
        lines: [{ pts: [[38.72, -9.14], [41.5, -4.0], [44.5, 1.5], [46.2, 6.15]], label: "", kind: "flow" }]
      },
      {
        id: "rousseau", place: "Montmorency, near Paris", lat: 48.99, lon: 2.32, zoom: 5, year: "1762",
        img: { src: "img/tour/rousseau.webp", alt: "Rousseau's garden study at Montmorency", credit: "Photo: Pierre Poschadel · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Montmorency_%2895%29%2C_mus%C3%A9e_Jean-Jacques_Rousseau%2C_le_Donjon_%28cabinet_de_travail_au_jardin%29.JPG" },
        title: "Rousseau: man is born free",
        takeaway: "Man is born free, and everywhere he is in chains.",
        body: "Jean-Jacques Rousseau, who proudly called himself a ‘citizen of Geneva’, wrote his most famous works while living in a cottage at Montmorency, north of Paris. The Social Contract opens: ‘Man is born free, and everywhere he is in chains.’ He argued that a legitimate state is one where citizens together make the laws, following the ‘general will’, the shared interest of all.",
        more: "In earlier writing Rousseau had claimed that civilisation, property and inequality had corrupted naturally good humans. In Emile, published the same year, he described an education that follows a child’s natural development; it was so radical that it was burned in Paris and Geneva, and Rousseau had to flee. His ideas inspired the French revolutionaries, and his Confessions helped create the modern idea of the inner self.",
        th: ["rousseau"], link: "#voyage-rousseau",
        labels: [{ lat: 46.2, lon: 6.15, text: "Geneva: his birthplace" }]
      },
      {
        id: "paine", place: "Philadelphia", lat: 39.95, lon: -75.16, zoom: 3.2, view: { lat: 45, lon: -38, zoom: 2.4 }, year: "1776",
        img: { src: "img/tour/paine.webp", alt: "Independence Hall, Philadelphia", credit: "Photo: JJonahJackalope · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Independence_Hall%2C_Philadelphia%2C_2022.jpg" },
        title: "The ideas cross the Atlantic",
        takeaway: "Governments exist to protect rights, and people may replace bad ones.",
        body: "In January 1776, Thomas Paine, an Englishman who had arrived in America only two years before, published a pamphlet called Common Sense, arguing that the colonies should break from Britain. It sold perhaps a hundred thousand copies in months. That July, in Philadelphia, the Declaration of Independence proclaimed that all men are created equal, with rights to life, liberty and the pursuit of happiness, echoing Locke.",
        more: "The ideals were radical, and their limits were glaring: many of the signers, including the Declaration’s main author Thomas Jefferson, enslaved people, and women could not vote. Paine went on to defend the French Revolution in Rights of Man. Enlightenment ideas about rights would be claimed again and again by those left out, from abolitionists like Frederick Douglass to campaigners for women’s rights.",
        th: ["paine"], link: "#works-paine-common-sense",
        lines: [{ pts: [[51.507, -0.128], [50.0, -10.0], [47.0, -30.0], [43.0, -55.0], [39.95, -75.16]], label: "", kind: "flow" }]
      },
      {
        id: "kant", place: "Königsberg", lat: 54.71, lon: 20.51, zoom: 5, year: "1781–1784",
        img: { src: "img/tour/kant.webp", alt: "Königsberg Cathedral, where Kant is buried, in Kaliningrad", credit: "Photo: Vitaly Volkov · CC BY 1.0", file: "https://commons.wikimedia.org/wiki/File:Kaliningrad_cathedral.JPG" },
        title: "Kant: dare to know",
        takeaway: "Have the courage to use your own understanding.",
        body: "Immanuel Kant hardly ever left his home city of Königsberg, on the Baltic coast, and neighbours were said to set their clocks by his daily walk. Yet his Critique of Pure Reason, of 1781, changed philosophy. He argued that our minds do not just receive the world: they shape experience with built-in forms like space, time and cause. In a 1784 essay he gave the Enlightenment its motto: Sapere aude, ‘Dare to know!’",
        more: "Kant said Hume had woken him from his ‘dogmatic slumber’. His answer combined the rationalists, who trusted reason, and the empiricists, who trusted experience. In ethics, his categorical imperative says to act only on rules you could will everyone to follow, and to treat people always as ends in themselves, never merely as tools. Königsberg is now Kaliningrad, in Russia, and his grave is still beside the cathedral.",
        th: ["kant"], link: "#voyage-kant"
      }
    ]
  },

  {
    id: "modern",
    title: "Philosophy in the modern world",
    sub: "From Hegel’s Berlin to Harvard, by way of Vienna, Kyoto and Algeria",
    blurb: "Industry, revolutions, world wars and the end of empires gave philosophers new questions. Where is history going? What is language? What does freedom mean when God seems absent? A tour of two centuries and four continents.",
    span: "1820 – 1971",
    stops: [
      {
        id: "hegel", place: "Berlin", lat: 52.52, lon: 13.4, zoom: 5, year: "1820",
        img: { src: "img/tour/hegel.webp", alt: "The main building of the Humboldt University, Berlin", credit: "Photo: A. Savin · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Berlin-Mitte_Humboldt-Uni_05-2014.jpg" },
        title: "Hegel’s history, and Schopenhauer’s empty lecture hall",
        takeaway: "History is the story of freedom slowly coming to know itself.",
        body: "Georg Wilhelm Friedrich Hegel was the star professor at the University of Berlin. He saw history as a vast process in which ideas clash, and their conflicts are resolved at a higher level, step by step, towards greater freedom. In 1820 a young lecturer, Arthur Schopenhauer, who despised Hegel, deliberately scheduled his lectures at the same hour. Almost no one came to Schopenhauer’s.",
        more: "Hegel is famously hard to read, but his idea that thinking develops through conflict and resolution, often called dialectic, shaped Marx and much of modern thought. ‘The owl of Minerva spreads its wings only with the falling of the dusk,’ he wrote: philosophy understands an age only when it is ending. Schopenhauer had the last laugh in fame, if not in Berlin: his gloomy view that the world is driven by a blind, endless will, and his interest in Indian thought, deeply influenced Nietzsche, Wagner and Wittgenstein.",
        th: ["hegel", "schopenhauer"], link: "#voyage-hegel"
      },
      {
        id: "kierkegaard", place: "Copenhagen", lat: 55.68, lon: 12.57, zoom: 5, year: "1843",
        img: { src: "img/tour/kierkegaard.webp", alt: "Nyhavn harbour, Copenhagen", credit: "Photo: kallerna · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Nyhavn_Copenhagen_2.jpg" },
        title: "Kierkegaard: the leap of faith",
        takeaway: "Truth that matters must be lived, not just thought.",
        body: "Søren Kierkegaard walked the streets of Copenhagen, chatting with everyone, then went home to write books under strange pen names. In 1843 he published Either/Or and Fear and Trembling, which retells the story of Abraham, told by God to sacrifice his son. For Kierkegaard, faith is not a comfortable belief but a terrifying, personal leap. Hegel’s grand system, he said, forgot the single, existing individual.",
        more: "Kierkegaard broke off his engagement to Regine Olsen, the love of his life, and wrote about it, in coded form, for years. He described anxiety as ‘the dizziness of freedom’, the feeling of standing before choices that only you can make. He attacked the comfortable Danish church for turning Christianity into a social habit. He is often called the father of existentialism, a movement that took off a century after his death.",
        th: ["kierkegaard"], link: "#voyage-kierkegaard"
      },
      {
        id: "marx", place: "Brussels", lat: 50.85, lon: 4.35, zoom: 5, year: "1848",
        img: { src: "img/tour/marx.webp", alt: "Guildhalls on the Grand-Place, Brussels", credit: "Photo: Joseolgon · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Grand_Place_%28Brussels%29_%281%29.jpg" },
        title: "Marx and Engels: a spectre is haunting Europe",
        takeaway: "Philosophers have interpreted the world; the point is to change it.",
        body: "Karl Marx, a German exile, and his friend Friedrich Engels wrote The Communist Manifesto in Brussels, published in early 1848, just as revolutions broke out across Europe. They argued that history is driven by struggles between classes, and that industrial capitalism, which made factory owners rich and workers poor, would be overthrown by the workers themselves.",
        more: "Marx took Hegel’s idea of history moving through conflict and applied it to economics and material life. After 1849 he lived in London, writing Capital in the reading room of the British Museum, often desperately poor and supported by Engels. In the 1900s, governments in Russia, China and elsewhere claimed to follow his ideas, with results he could not have foreseen, including terrible repression. His analysis of how work and money shape our lives is still widely studied.",
        th: ["marx"], link: "#voyage-marx",
        labels: [{ lat: 49.76, lon: 6.64, text: "Trier: his birthplace" }, { lat: 51.52, lon: -0.127, text: "London: writing Capital" }]
      },
      {
        id: "pragmatists", place: "Cambridge, Massachusetts", lat: 42.374, lon: -71.118, zoom: 4.4, year: "1872",
        img: { src: "img/tour/pragmatists.webp", alt: "The Charles River at Cambridge, Massachusetts", credit: "Photo: EgorovaSvetlana · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Weeks_Bridge_Harvard_University_Lowell_House_Charles_River_Cambridge.jpg" },
        title: "The Metaphysical Club invents pragmatism",
        takeaway: "An idea’s meaning lies in the difference it makes in practice.",
        body: "In the early 1870s a group of young men in Cambridge, Massachusetts, half-jokingly called themselves the Metaphysical Club. Among them were the scientist Charles Sanders Peirce and the doctor turned psychologist William James. They worked out pragmatism, the first great American philosophy: to understand an idea, ask what practical difference it would make if it were true.",
        more: "Peirce applied this to science: truth is what inquiry would agree on in the long run. James made it popular, arguing in The Will to Believe that sometimes we have the right to believe something, like religious faith, before the evidence is in. John Dewey, later, applied pragmatism to democracy and education, insisting that schools should teach by doing. The Civil War had just ended, and the pragmatists distrusted anyone who was absolutely certain.",
        th: ["peirce", "james", "dewey"], link: "#voyage-pragmatists"
      },
      {
        id: "frege", place: "Jena", lat: 50.93, lon: 11.59, zoom: 5, year: "1879",
        img: { src: "img/tour/frege.webp", alt: "The main building of the University of Jena", credit: "Photo: Vitold Muratov · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Universit%C3%A4ts_Hauptgeb%C3%A4ude._Jena.jpg" },
        title: "Frege invents modern logic",
        takeaway: "Logic can be written as precisely as mathematics, and it powers it.",
        body: "Gottlob Frege, a quiet mathematics professor in Jena, published a short book in 1879 called Begriffsschrift, ‘Concept Script’. It was the first fully worked-out modern logic, able to handle words like ‘all’ and ‘some’ in a way Aristotle’s logic could not. He hoped to show that all of arithmetic follows from logic alone.",
        more: "In 1902, as the second volume of his great work was going to press, Frege received a letter from the young Bertrand Russell showing that his system contained a contradiction. Frege added a gracious appendix admitting the problem. His work was little read in his lifetime, but his logic is the ancestor of the languages computers run on, and his paper ‘On Sense and Reference’ started the philosophy of language.",
        th: ["frege"], link: "#voyage-logic"
      },
      {
        id: "nietzsche", place: "Sils Maria", lat: 46.43, lon: 9.76, zoom: 5.2, year: "1881",
        img: { src: "img/tour/nietzsche.webp", alt: "Lake Sils near Sils Maria", credit: "Photo: Hansueli Krapf · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:2020-08-23_14-17-54_Schweiz_Sils_Segl_Maria_Sils_1849.4.jpg" },
        title: "Nietzsche: six thousand feet beyond man and time",
        takeaway: "God is dead: we must create our own values, and say yes to life.",
        body: "Friedrich Nietzsche spent his summers in the Swiss Alpine village of Sils Maria. In August 1881, walking by a lake, he was struck by a thought he noted down as ‘6000 feet beyond man and time’: what if you had to live your life again, exactly the same, forever? Could you love your life enough to want that? He called it the eternal return.",
        more: "In The Gay Science, the next year, a madman announces ‘God is dead, and we have killed him.’ Nietzsche meant that belief in God no longer anchored European values, and he feared people would slide into nihilism, the belief that nothing matters. His answer was to create new values, symbolised by the Übermensch, or ‘overhuman’. After his collapse in 1889 his sister edited his writings to suit German nationalism, a distortion scholars have worked hard to undo.",
        th: ["nietzsche"], link: "#voyage-nietzsche"
      },
      {
        id: "kyoto", place: "Kyoto", lat: 35.01, lon: 135.77, zoom: 4.6, year: "1911",
        img: { src: "img/tour/kyoto.webp", alt: "The Philosopher's Path in Kyoto", credit: "Photo: shankar s. · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:The_Philosophers_Walk_is_about_2km_long_and_runs_along_a_canal.jpg" },
        title: "Nishida starts the Kyoto School",
        takeaway: "Before there is a ‘me’ and a ‘world’, there is pure experience.",
        body: "Nishida Kitarō, a professor at Kyoto University who practised Zen meditation for years, published An Inquiry into the Good in 1911. It is often called the first original work of modern Japanese philosophy. He argued that in ‘pure experience’, like being totally absorbed in music, there is not yet a split between the one who experiences and the thing experienced.",
        more: "Nishida and his students, known as the Kyoto School, put Zen Buddhist ideas such as ‘nothingness’ into conversation with Western philosophers like William James, Kant and Hegel. The path by the canal he walked daily, lined with cherry trees, is now called the Philosopher’s Path. Some members of the school were criticised for supporting Japanese nationalism during the war, and those debates continue.",
        th: ["nishida"], link: "#stoa-kyoto"
      },
      {
        id: "cambridge", place: "Cambridge, England", lat: 52.205, lon: 0.119, zoom: 5, year: "1911",
        img: { src: "img/tour/cambridge.webp", alt: "Great Court, Trinity College, Cambridge", credit: "Photo: Cmglee · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Cmglee_Cambridge_Trinity_College_Great_Court.jpg" },
        title: "Wittgenstein knocks on Russell’s door",
        takeaway: "The limits of my language mean the limits of my world.",
        body: "In October 1911 a young Austrian engineer, Ludwig Wittgenstein, turned up unannounced at Bertrand Russell’s rooms in Cambridge to talk about logic. Within a year Russell said he had nothing left to teach him. With G. E. Moore, they made Cambridge the centre of a new ‘analytic’ philosophy, which tried to solve problems by analysing language and logic carefully.",
        more: "Wittgenstein wrote the Tractatus Logico-Philosophicus partly in the trenches of the First World War; it ends ‘Whereof one cannot speak, thereof one must be silent.’ He then gave philosophy up to become a village schoolteacher. When he came back, he rejected his own book, arguing in the Philosophical Investigations that meaning is use: words get their meanings from the ‘language games’ we play with them in everyday life.",
        th: ["wittgenstein", "russell", "moore"], link: "#voyage-wittgenstein"
      },
      {
        id: "frankfurt", place: "Frankfurt", lat: 50.11, lon: 8.68, zoom: 5, year: "1923",
        img: { src: "img/tour/frankfurt.webp", alt: "The Institute for Social Research, Frankfurt", credit: "Photo: Frank C. Müller · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Institut_fuer_Sozialforschung_%28fcm%29.jpg" },
        title: "The Frankfurt School turns theory on society",
        takeaway: "Ask who benefits from the way things are, and how they could be freer.",
        body: "The Institute for Social Research opened in Frankfurt in 1923, and its thinkers, including Max Horkheimer and Theodor Adorno, became known as the Frankfurt School. They mixed philosophy, Marx, sociology and psychology into ‘critical theory’: theory that does not just describe society but tries to expose domination and help people become free.",
        more: "Most of its members were Jewish or Marxist, so when the Nazis took power in 1933 the Institute fled, ending up in New York and California. In exile Horkheimer and Adorno wrote Dialectic of Enlightenment, asking how the age of reason could produce fascism and mass propaganda. They were also early critics of the ‘culture industry’, mass entertainment made like factory goods.",
        th: ["horkheimer", "adorno"], link: "#stoa-critical_theory"
      },
      {
        id: "heidegger", place: "Freiburg", lat: 47.99, lon: 7.85, zoom: 5, year: "1927",
        img: { src: "img/tour/heidegger.webp", alt: "Stained glass in Freiburg Minster", credit: "Photo: Gryffindor · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Freiburg_Minster_2008_%2811%29_-_rotated%26cropped.jpg" },
        title: "Phenomenology and Being and Time",
        takeaway: "Go back to the things themselves: describe experience as it is lived.",
        body: "Edmund Husserl, a professor at Freiburg, founded phenomenology, which carefully describes how things show up in our experience, setting aside theories about what lies behind them. His assistant Martin Heidegger published Being and Time in 1927. He argued that philosophy had forgotten the most basic question, what it means to be, and that we are always already thrown into a world we care about, heading towards death.",
        more: "Heidegger’s ideas shaped existentialism and much later continental philosophy. His reputation is badly stained: in 1933 he joined the Nazi party and became rector of Freiburg University, while Husserl, who was Jewish by birth, lost his university privileges. Heidegger’s student and former lover Hannah Arendt spent years trying to understand how a great thinker could make such a choice.",
        th: ["husserl", "heidegger"], link: "#voyage-phenomenology"
      },
      {
        id: "vienna", place: "Vienna", lat: 48.21, lon: 16.37, zoom: 5, year: "1929",
        img: { src: "img/tour/vienna.webp", alt: "The University of Vienna on the Ringstrasse", credit: "Photo: Gryffindor · CC BY-SA 2.5", file: "https://commons.wikimedia.org/wiki/File:Universit%C3%A4t_Vienna_June_2006_164.jpg" },
        title: "The Vienna Circle: if you cannot test it, it is meaningless",
        takeaway: "A statement means something only if experience could show it true or false.",
        body: "In the 1920s a group of scientists and philosophers met on Thursday evenings in Vienna around Moritz Schlick. In 1929 they published a manifesto, The Scientific Conception of the World. They held that a statement is meaningful only if it can, in principle, be checked by observation, or is true by definition. By that test, much of traditional metaphysics and theology was not false but literally meaningless.",
        more: "Members included Rudolf Carnap and Otto Neurath, who compared knowledge to a ship we must rebuild plank by plank while at sea. Karl Popper, who was not a member, argued that science advances by trying to falsify theories, not verify them. In 1936 Schlick was murdered by a former student, and the rise of Nazism scattered the Circle to Britain and America, where its ideas shaped analytic philosophy.",
        th: ["schlick", "carnap", "popper"], link: "#voyage-vienna"
      },
      {
        id: "paris", place: "Paris: Café de Flore", lat: 48.854, lon: 2.333, zoom: 5.4, year: "1945",
        img: { src: "img/tour/paris.webp", alt: "The Café de Flore, Paris", credit: "Photo: Celette · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Caf%C3%A9_de_Flore%2C_172_boulevard_Saint-Germain%2C_Paris_6e.jpg" },
        title: "Existentialism fills the cafés",
        takeaway: "Existence comes before essence: you are what you make of yourself.",
        body: "During and after the Nazi occupation of France, Jean-Paul Sartre and Simone de Beauvoir wrote in the warm cafés of Saint-Germain-des-Prés, like the Café de Flore. In a packed lecture in October 1945, Sartre declared that ‘existence precedes essence’: there is no human nature fixed in advance. We are ‘condemned to be free’, and responsible for what we become.",
        more: "Albert Camus, who grew up poor in Algeria, wrote The Myth of Sisyphus about the absurd: we long for meaning in a universe that gives none. His answer was to rebel, and to imagine Sisyphus, pushing his rock forever, happy. Sartre and Camus were friends until they fell out over politics in 1952. Beauvoir’s The Second Sex applied existentialist ideas to the situation of women, and it is the next stop on another tour.",
        th: ["sartre", "beauvoir", "camus"], link: "#voyage-existentialists",
        labels: [{ lat: 36.75, lon: 3.06, text: "Algiers: Camus’ home city" }]
      },
      {
        id: "fanon", place: "Blida, Algeria", lat: 36.47, lon: 2.83, zoom: 4.6, year: "1953",
        img: { src: "img/tour/fanon.webp", alt: "The town centre of Blida, Algeria", credit: "Photo: filtran · CC BY 2.0", file: "https://commons.wikimedia.org/wiki/File:Blida_centre.jpg" },
        title: "Fanon and the wounds of colonialism",
        takeaway: "Colonialism damages minds as well as lands, and liberation must heal both.",
        body: "Frantz Fanon grew up on Martinique, a French colony in the Caribbean, fought for France in the Second World War and trained as a psychiatrist. In Black Skin, White Masks he described how racism makes colonised people see themselves through their oppressors’ eyes. In 1953 he became head of a psychiatric hospital at Blida in Algeria, and soon joined the Algerian struggle for independence.",
        more: "Fanon treated both the victims of torture and the French police who tortured, and he saw colonial violence written into his patients’ minds. The Wretched of the Earth, finished as he was dying of leukaemia in 1961, became a handbook for anti-colonial movements worldwide. Algeria won independence in 1962, months after his death. Along with thinkers such as Aimé Césaire, Fanon helped create postcolonial thought.",
        th: ["fanon"], link: "#works-fanon-wretched-of-the-earth"
      },
      {
        id: "ambedkar", place: "Nagpur", lat: 21.15, lon: 79.09, zoom: 4.6, year: "1956",
        img: { src: "img/tour/ambedkar.webp", alt: "The Deekshabhoomi stupa in Nagpur", credit: "Photo: Kawade Sahil · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Deekshabhoomi_Nagpur.jpg" },
        title: "Ambedkar: annihilate caste",
        takeaway: "A society is only democratic if it treats every person as equal in dignity.",
        body: "B. R. Ambedkar was born into a ‘Dalit’ caste that India’s caste system treated as ‘untouchable’. Against huge obstacles he earned doctorates in New York and London, then became the main architect of independent India’s constitution, which outlawed untouchability. In 1936 he wrote Annihilation of Caste, arguing that caste could not be reformed, only abolished.",
        more: "Ambedkar decided that he could not remain within a religion that, in his view, sanctioned caste. On 14 October 1956, in Nagpur, he and about half a million followers converted to Buddhism, which he reinterpreted as a philosophy of equality, reason and social justice. He died weeks later. He is honoured across India today, and his work belongs alongside the great writings on democracy and human rights.",
        th: ["ambedkar"], link: "#works-ambedkar-annihilation-of-caste",
        labels: [{ lat: 19.08, lon: 72.88, text: "Bombay (Mumbai)" }]
      },
      {
        id: "rawls", place: "Harvard", lat: 42.377, lon: -71.117, zoom: 4.4, year: "1971",
        img: { src: "img/tour/rawls.webp", alt: "Harvard Yard in winter", credit: "Photo: chensiyuan · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Harvard_yard_winter_2009j.JPG" },
        title: "Rawls and the veil of ignorance",
        takeaway: "A fair society is one you would choose without knowing who you would be.",
        body: "John Rawls, a professor at Harvard, published A Theory of Justice in 1971. He asked us to imagine choosing the rules of society from behind a ‘veil of ignorance’, not knowing whether we would be rich or poor, healthy or sick, of which race or sex. He argued we would choose equal basic liberties for all, and allow inequalities only if they benefit the worst-off.",
        more: "Rawls revived political philosophy, which many thought had died. His Harvard colleague Robert Nozick replied in 1974 that justice is about respecting rights to what we have fairly acquired, not about patterns of distribution. Their debate shaped politics far beyond universities. Rawls had served as a soldier in the Pacific in the Second World War, and some think that experience of chance and suffering shaped his ideas about luck and fairness.",
        th: ["rawls", "nozick"], link: "#voyage-justice"
      }
    ]
  },

  {
    id: "women",
    title: "Women in philosophy",
    sub: "Twenty-seven centuries of women asking the hardest questions",
    blurb: "Women have done philosophy for as long as anyone, often against laws, customs and the men who wrote the histories. Meet some of them, from an Indian royal court to post-war Oxford.",
    span: "c. 700 BCE – 1961 CE",
    stops: [
      {
        id: "gargi", place: "Videha (Mithila)", lat: 26.6, lon: 85.9, zoom: 4.6, year: "c. 700 BCE",
        img: { src: "img/tour/gargi.webp", alt: "The Janaki Mandir at Janakpur, lit for a festival", credit: "Photo: Tulsi Bhagat · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Janaki_Mandir%2C_Janakpur_20211009.jpg" },
        title: "Gargi questions the greatest sage",
        takeaway: "Keep asking ‘and what is that woven on?’ until you reach the bottom.",
        body: "In the Brihadaranyaka Upanishad, King Janaka of Videha holds a great debate and offers a thousand cows to the wisest sage. Most challengers fall silent before Yajnavalkya. Gargi Vachaknavi presses him with a chain of questions: if the world is woven on water, what is water woven on? And that? And that? She pushes until he warns her that her head will fall off if she asks beyond the limit.",
        more: "Gargi returns later with two questions she compares to arrows. Yajnavalkya answers by describing the ‘imperishable’, the reality beyond all of space and time. Gargi then tells the assembly that no one will beat him in argument. The Upanishads also show Maitreyi, Yajnavalkya’s wife, who turns down a share of his wealth and asks instead what would make her immortal.",
        th: [], link: "#voyage-upanishads"
      },
      {
        id: "arete", place: "Cyrene", lat: 32.82, lon: 21.86, zoom: 4.6, year: "c. 370 BCE",
        img: { src: "img/tour/arete.webp", alt: "Ruins of the ancient Greek city of Cyrene", credit: "Photo: slsphotolibrary · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:58_Market_Theatre_1.jpg" },
        title: "Arete leads a school of pleasure",
        takeaway: "Women ran philosophical schools in the ancient world too.",
        body: "Cyrene was a wealthy Greek city on the coast of what is now Libya. Aristippus, a companion of Socrates, founded a school there that taught that pleasure in the present moment is the goal of life. His daughter Arete studied with him and, according to ancient sources, led the school after him and taught her own son, who was nicknamed ‘mother-taught’.",
        more: "We know frustratingly little about Arete, as with many ancient women philosophers: her writings are lost and the surviving reports are short. Others include Hipparchia, who chose the hard life of a Cynic in Athens with her husband Crates, and Diotima, the priestess who in Plato’s Symposium teaches Socrates about love. Whether Diotima was real is debated, but Plato chose to give a woman the most important speech in the dialogue.",
        th: [], link: "#voyage-garden"
      },
      {
        id: "hipparchia", place: "Athens", lat: 37.975, lon: 23.725, zoom: 5.4, year: "c. 320 BCE",
        img: { src: "img/tour/hipparchia.webp", alt: "The Acropolis seen from the Athenian Agora", credit: "Photo: George E. Koronaios · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:View_of_the_Acropolis_of_Athens_from_the_Ancient_Agora.jpg" },
        title: "Hipparchia chooses the Cynic life",
        takeaway: "Customs are not laws of nature, so a woman may live as a philosopher.",
        body: "Hipparchia came from a rich family in Maroneia, in northern Greece. She fell in love with the Cynic philosopher Crates, who owned nothing, and threatened to kill herself if her parents did not let her marry him. She dressed like him, lived in public as Cynics did, and went to dinners and debates with him in Athens, which shocked respectable society.",
        more: "When a man at a banquet mocked her for leaving women’s work at the loom, Hipparchia is said to have answered that she had not wasted her time, since she had spent it on education. She also beat a philosopher named Theodorus in an argument using his own logic. The Cynics believed customs are not natural laws, and Hipparchia lived that belief more boldly than almost anyone.",
        th: ["diogenes"], link: "#voyage-cynics",
        labels: [{ lat: 40.87, lon: 25.5, text: "Maroneia: her birthplace" }]
      },
      {
        id: "hypatia", place: "Alexandria", lat: 31.2, lon: 29.92, zoom: 5, year: "415 CE",
        img: { src: "img/tour/hypatia.webp", alt: "The Bibliotheca Alexandrina by Alexandria's harbour", credit: "Photo: Vyacheslav Argenberg · CC BY 4.0", file: "https://commons.wikimedia.org/wiki/File:Egypt%2C_Alexandria%2C_Bibliotheca_Alexandrina.jpg" },
        title: "Hypatia of Alexandria",
        takeaway: "A woman led Alexandria’s philosophers, teaching pagans and Christians alike.",
        body: "Hypatia was a mathematician, astronomer and Neoplatonist philosopher, the most respected teacher in Alexandria. Students, pagan and Christian alike, came to hear her lecture on Plato, Aristotle and the motions of the stars. She advised the Roman governor. In 415, caught up in a violent political feud between the governor and the city’s bishop, she was murdered by a Christian mob.",
        more: "None of Hypatia’s own writings survives, though she probably edited parts of her father Theon’s mathematical works and wrote commentaries on geometry and astronomy. Letters from her student Synesius show how deeply her students admired her. Many popular quotations attributed to her were invented much later, so treat them with care. Her death became a symbol, sometimes exaggerated, of reason destroyed by fanaticism.",
        th: [], link: "#stoa-neoplatonism"
      },
      {
        id: "heloise", place: "The Paraclete, Champagne", lat: 48.49, lon: 3.5, zoom: 5, year: "c. 1132 CE",
        img: { src: "img/tour/heloise.webp", alt: "Abelard and Heloise, from a medieval manuscript", credit: "Abelard and Heloise, Roman de la Rose miniature · Public domain", file: "https://commons.wikimedia.org/wiki/File:Abelard_and_Heloise.jpeg" },
        title: "Heloise argues in her letters",
        takeaway: "Love should be freely given, not bought by a contract.",
        body: "Heloise was famous in Paris for her learning in Latin and Greek before she ever met Peter Abelard, her teacher and lover. After their story ended in disaster, she became abbess of the Paraclete, a convent Abelard had founded. Years later she began writing to him, and her letters are some of the most remarkable philosophical writing of the Middle Ages.",
        more: "Heloise had argued against marrying Abelard, saying she preferred to be his free companion than his wife, since love should not depend on law or money. In her letters she examines her own motives with painful honesty: she took her vows for Abelard, she says, not for God, and asks what makes an act truly good, the deed or the intention. That focus on intention was central to Abelard’s ethics too, and scholars now ask how much was hers.",
        th: [], link: "#works-abelard-heloise-letters"
      },
      {
        id: "hildegard", place: "Rupertsberg, near Bingen", lat: 49.96, lon: 7.9, zoom: 5, year: "c. 1150 CE",
        img: { src: "img/tour/hildegard.webp", alt: "The universe as an egg, a vision from Hildegard's Scivias", credit: "Scivias (Rupertsberg Codex) · Public domain", file: "https://commons.wikimedia.org/wiki/File:Meister_des_Hildegardis-Codex_001.jpg" },
        title: "Hildegard of Bingen: visions and green life",
        takeaway: "The whole cosmos is alive with a greening power, and humans mirror it.",
        body: "Hildegard was given to a religious community as a child and became abbess of her own convent at Rupertsberg on the Rhine. She wrote books of visions, music still performed today, and works on medicine and the natural world. Popes and emperors wrote to her for advice. She called the life-giving force of nature and spirit viriditas, ‘greenness’.",
        more: "In an age when women were not supposed to preach, Hildegard went on preaching tours through German cities. She presented herself as just a ‘feather on the breath of God’, which gave her visions authority that men found hard to challenge. Her picture of the human being as a small world reflecting the great cosmos was common in medieval thought, but her vivid, detailed version was all her own. She was declared a Doctor of the Church in 2012.",
        th: []
      },
      {
        id: "christine", place: "Paris", lat: 48.853, lon: 2.349, zoom: 5, year: "1405",
        img: { src: "img/tour/christine.webp", alt: "Christine de Pizan presents her book to Queen Isabeau", credit: "Harley MS 4431 · Master of the Cité des Dames · Public domain", file: "https://commons.wikimedia.org/wiki/File:Harl_4431_frontispiece_full.jpg" },
        title: "Christine de Pizan builds a city of ladies",
        takeaway: "If girls were taught like boys, they would learn just as well.",
        body: "Christine de Pizan grew up at the French royal court, where her Italian father was the king’s astrologer. Widowed at 25 with children to support, she became perhaps the first woman in Europe to earn her living by writing. Fed up with books that insulted women, she wrote The Book of the City of Ladies, in which Reason, Rectitude and Justice help her build a city out of the stories of great women.",
        more: "Christine argued that women seemed less capable only because they were denied education. She took on the most popular poem of the day, the Romance of the Rose, for its contempt for women, starting a public debate. Her works were read across Europe and translated into English and Portuguese. In old age she wrote a poem celebrating Joan of Arc, the only one written in Joan’s lifetime.",
        th: [], link: "#works-christine-city-of-ladies"
      },
      {
        id: "elisabeth", place: "The Hague", lat: 52.08, lon: 4.31, zoom: 5.2, year: "1643",
        img: { src: "img/tour/elisabeth.webp", alt: "The Binnenhof in The Hague", credit: "Photo: Rainer Ebert · CC BY-SA 2.0", file: "https://commons.wikimedia.org/wiki/File:Binnenhof%2C_the_Hague.jpg" },
        title: "Princess Elisabeth catches Descartes out",
        takeaway: "If the mind is not physical, how can it move the body?",
        body: "Elisabeth of Bohemia was a princess whose family lost their throne and lived in exile in The Hague. In 1643 she wrote to René Descartes with a precise question: if the soul is a thinking thing with no size or shape, how can it push the body around? Pushing seems to need contact. Descartes’ answers did not satisfy her, and philosophers still call this the mind-body problem.",
        more: "Their correspondence lasted until Descartes’ death in 1650 and covered ethics, emotions and politics; he dedicated his Principles of Philosophy to her. Elisabeth later became abbess of a Protestant convent at Herford in Germany, where she sheltered religious refugees. Only her side of the letters shows how sharp her mind was, because she published nothing herself.",
        th: ["elisabeth", "descartes"], link: "#thinker-elisabeth"
      },
      {
        id: "astell", place: "Chelsea, London", lat: 51.487, lon: -0.17, zoom: 5, year: "1694",
        img: { src: "img/tour/astell.webp", alt: "The Royal Hospital, Chelsea, built in the 1680s", credit: "Photo: Camster2 · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Royal_Hospital_Chelsea_south_front.JPG" },
        title: "Mary Astell: if all men are born free",
        takeaway: "If all men are born free, how is it that all women are born slaves?",
        body: "Mary Astell lived independently in Chelsea, then a village outside London, and published A Serious Proposal to the Ladies in 1694. She proposed a college where women could study and think, because the mind has no sex. Later she turned Locke’s arguments against him: if absolute power is wrong in the state, why is it right in the family?",
        more: "Astell was one of several remarkable English women philosophers of the 1600s. Margaret Cavendish wrote on natural philosophy and imagined a science-fiction world in The Blazing World. Anne Conway argued, against Descartes, that mind and matter are not two different substances; her ideas influenced Leibniz. All three were left out of the history books for centuries and are now being read again.",
        th: ["locke"], link: "#works-astell-serious-proposal"
      },
      {
        id: "chatelet", place: "Château de Cirey", lat: 48.43, lon: 5.0, zoom: 5, year: "1740",
        img: { src: "img/tour/chatelet.webp", alt: "The Château de Cirey", credit: "Photo: Chatsam · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Cirey_005.jpg" },
        title: "Émilie du Châtelet brings Newton to France",
        takeaway: "Energy grows with the square of the speed, and she proved it.",
        body: "Émilie du Châtelet was a French noblewoman who studied mathematics against the wishes of most of society. At her country house at Cirey, where she lived with Voltaire, she set up a laboratory and wrote Foundations of Physics in 1740. Drawing on experiments where balls were dropped into clay, she defended the idea that the energy of a moving body depends on the square of its speed.",
        more: "This idea, close to what we now call kinetic energy, settled a big argument of the time. Her greatest achievement was a French translation of Newton’s Principia with her own commentary, finished just before she died in 1749 after childbirth. It is still the standard French version. She also wrote a Discourse on Happiness, arguing that a love of learning is a source of happiness that depends on no one else.",
        th: ["voltaire"], link: "#works-du-chatelet-foundations-of-physics"
      },
      {
        id: "gouges", place: "Paris", lat: 48.857, lon: 2.352, zoom: 5, year: "1791",
        img: { src: "img/tour/gouges.webp", alt: "A women's patriotic club during the French Revolution", credit: "Club patriotique de femmes · Jean-Baptiste Lesueur · Public domain", file: "https://commons.wikimedia.org/wiki/File:Club_Patriotique_de_Femmes._D.9092.jpg" },
        title: "Olympe de Gouges writes the rights of woman",
        takeaway: "Woman is born free and remains equal to man in rights.",
        body: "In 1789 the French Revolution proclaimed the Declaration of the Rights of Man and of the Citizen. The playwright Olympe de Gouges noticed who was missing. In 1791 she published the Declaration of the Rights of Woman and of the Female Citizen, rewriting it article by article: if a woman can be sent to the scaffold, she argued, she must also have the right to speak in public.",
        more: "De Gouges also wrote against slavery in the French colonies. She was guillotined in 1793 during the Terror, having criticised the revolutionary leader Robespierre. Her declaration was largely forgotten until the 1900s. France did not give women the vote until 1944.",
        th: [], link: "#works-gouges-declaration-rights-of-woman"
      },
      {
        id: "wollstonecraft", place: "London", lat: 51.53, lon: -0.135, zoom: 5, year: "1792",
        img: { src: "img/tour/wollstonecraft.webp", alt: "St Pancras Old Church, Somers Town, where Wollstonecraft was buried", credit: "Photo: Karlunun · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:StPancrasOld_SomersTown_London_40_20220427_1254.jpg" },
        title: "Wollstonecraft: a vindication of women’s rights",
        takeaway: "Women are not naturally weaker in reason, only worse educated.",
        body: "Mary Wollstonecraft, a London writer who had worked as a governess and teacher, published A Vindication of the Rights of Woman in 1792. Rousseau had argued that girls should be educated only to please men. Wollstonecraft replied that if women seem silly, it is because they are trained to be ornaments. Give them the same education in reason as men, and they will be good citizens, friends and mothers.",
        more: "Wollstonecraft lived boldly: she went to Paris to witness the Revolution and had a daughter outside marriage. She later married the philosopher William Godwin and died in 1797, days after giving birth to their daughter, Mary, who as Mary Shelley would write Frankenstein. Her ideas were taken up by later feminists, including Harriet Taylor and John Stuart Mill, whose The Subjection of Women of 1869 owed much to Taylor.",
        th: ["wollstonecraft", "mill"], link: "#voyage-wollstonecraft"
      },
      {
        id: "beauvoir", place: "Paris: Saint-Germain", lat: 48.854, lon: 2.333, zoom: 5.4, year: "1949",
        img: { src: "img/tour/beauvoir.webp", alt: "The abbey church of Saint-Germain-des-Prés, Paris", credit: "Photo: DXR · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Abbaye_de_Saint-Germain-des-Pr%C3%A9s%2C_Paris_6e%2C_South_View_140131_1.jpg" },
        title: "Beauvoir: one is not born a woman",
        takeaway: "One is not born, but rather becomes, a woman.",
        body: "Simone de Beauvoir passed France’s top philosophy exam in 1929, placing second, just behind Jean-Paul Sartre. In 1949 she published The Second Sex, a huge study of how women have been treated through history, myth, biology and daily life. Her central idea is that women have been made the ‘Other’: man is treated as the normal human being, and woman is defined in relation to him.",
        more: "Using existentialist ideas, Beauvoir argued that being a ‘woman’, in the sense of a social role, is not fixed by nature but shaped by upbringing and society, so it can be changed. The Vatican put the book on its list of banned books, and it became one of the founding texts of modern feminism. Her The Ethics of Ambiguity is one of the clearest statements of existentialist ethics.",
        th: ["beauvoir"], link: "#works-beauvoir-second-sex"
      },
      {
        id: "oxford", place: "Oxford", lat: 51.754, lon: -1.254, zoom: 5, year: "1950s",
        img: { src: "img/tour/oxford.webp", alt: "The main quad of Somerville College, Oxford", credit: "Photo: Brigade Piron · CC BY-SA 3.0", file: "https://commons.wikimedia.org/wiki/File:Somerville_College%2C_Oxford_-_Main_quad%2C_summer.JPG" },
        title: "Four women change Oxford philosophy",
        takeaway: "Ethics needs a richer picture of human life than rules and calculations.",
        body: "During the Second World War many male students and teachers left Oxford to fight, and four women met as students there: Elizabeth Anscombe, Philippa Foot, Iris Murdoch and Mary Midgley. Each became a major philosopher. Together they argued that moral philosophy had become too dry, and that it should talk about virtue, character, human nature and what it means to see a situation truly.",
        more: "Foot invented the trolley problem in 1967 and revived the ethics of virtue. Anscombe, who translated Wittgenstein, opposed Oxford giving an honorary degree to President Truman for the atomic bombings. Murdoch wrote that goodness begins with ‘unselfing’, really paying attention to others, and also wrote 26 novels. Midgley wrote about animals, science and human nature, publishing her first book at 59.",
        th: ["anscombe", "foot", "murdoch"], link: "#thinker-foot"
      },
      {
        id: "arendt", place: "Jerusalem", lat: 31.78, lon: 35.22, zoom: 4.6, year: "1961",
        img: { src: "img/tour/arendt.webp", alt: "The Old City of Jerusalem", credit: "Photo: Beko · CC BY-SA 4.0", file: "https://commons.wikimedia.org/wiki/File:Jerusalem_Old_city_panorama.jpg" },
        title: "Hannah Arendt and the banality of evil",
        takeaway: "Terrible evil can be done by ordinary people who simply fail to think.",
        body: "Hannah Arendt was a Jewish philosopher who fled Nazi Germany and became an American citizen. In 1961 she went to Jerusalem to report on the trial of Adolf Eichmann, who had organised the deportation of Jews to the death camps. She expected a monster. Instead she saw a dull bureaucrat who spoke in clichés, and she wrote of ‘the banality of evil’.",
        more: "Her book Eichmann in Jerusalem caused a storm, and some critics thought she understated Eichmann’s antisemitism and judged Jewish leaders too harshly. Her deeper point was that great crimes need countless people who do not stop to think about what they are doing. In The Human Condition she defended political action, people acting and speaking together in public, as one of the highest human activities.",
        th: ["arendt"], link: "#works-arendt-eichmann-in-jerusalem"
      }
    ]
  }
];
