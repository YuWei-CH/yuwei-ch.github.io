// Poems from the Fall 2024 poetry portfolio. Poems are shown in their original language in both locales.
// In lines, **text** renders bold and *text* renders italic.

// A stanza is a list of lines; the other blocks are notes, code listings, photos, or words spelled as letter tiles.
export type PoemBlock =
  | string[]
  | { note: string }
  | { code: string }
  | { image: string; alt: string; caption?: string }
  | { tiles: string[] };

export interface Poem {
  slug: string;
  title: string;
  epigraph?: string;
  favorite?: boolean;
  align?: "center";
  layout?: "columns";
  letter?: boolean;
  body: PoemBlock[];
}

export const poems: Poem[] = [
  {
    slug: "listen-to-a-concert-in-summer",
    title: "Listen to a concert in summer",
    body: [
      ["Nature built the Lincoln Hall", "In New York City,", "In the vibrant bloom of June;"],
      [
        "I shook hands with the saxophonist in the shadows,",
        "Who whispered to me,",
        "*“I have waited for the concert for seventeen years.”*",
      ],
      ["Shedding its golden coat,", "Climbing up the verdant stage;"],
      ["*Thank you!!!*"],
      ["And I smiled, at the end:", "The breeze across my face."],
    ],
  },
  {
    slug: "something-i-always-carry",
    title: "Something I always carry",
    body: [
      [
        "I would absolutely love to be greeted gently at dawn,",
        "except for yours.",
        "I crave the warmth of an embrace!",
        "except for yours.",
        "And yet, I still find myself needing you.",
        "Why? Because:",
        "But you,",
        "carry the echoes of my hometown;",
        "But you,",
        "guide me through the forgotten corners;",
        "But you,",
        "sit in the quiet, awaiting the dawn's first light.",
      ],
      ["How I love you for it ~~~"],
      { note: "(Yes, this is my phone)" },
    ],
  },
  {
    slug: "like-a-bird-flying-to-your-mountain",
    title: "Like a bird flying to your mountain",
    body: [
      [
        "Like a bird grazes sky,",
        "Or a dandelion drifting ashore;",
        "I reach for mountains towering high,",
        "And cherish the weight of ancient lore.",
      ],
      [
        "**Dad said**: *“Education is a pane of glass,*",
        "*A mirror of where we stand and grow.”*",
        "**Mom said**: *“Wisdom reflects the past,*",
        "*A light that guides where we must go.”*",
      ],
      [
        "From earth, the seeds of wisdom rise,",
        "While knowledge leaves dance in the sun.",
        "Each page I turn, my spirit flies,",
        "And a new journey has just begun.",
      ],
    ],
  },
  {
    slug: "summer-nights-rainy-days-evening-breezes",
    title: "Summer Nights, Rainy Days, Evening Breezes",
    body: [
      [
        "Walking onto the bridge, I lift my gaze to the sky:",
        "An airbus glides through clouds, like geese migrating south—",
        "A journey planned, precise, yet distant and unspoken.",
        "The skyline looms gray, its forest of orange leaves—",
        "Reflected embers against a steel horizon.",
      ],
      [
        "I slow my steps to look:",
        "Spotlights from ships pierce the darkness,",
        "Scattered like bonfires on a restless shore,",
        "Small flames whispering of journeys unseen.",
      ],
      [
        "Hunger grows inside me, fierce like a prowling tiger,",
        "Its claws pushing me deeper into the forest unknown.",
        "Billboards flicker alive, calling my name,",
        "Like fireflies on a summer night,",
        "Blinking directions I cannot follow—",
        "**GO -> STOP -> ASK -> LEAVE.**",
      ],
      [
        "The menu glows in neon red, tempting me still,",
        "Like a mushroom in the undergrowth, bright and deceitful—",
        "Is it a promise of warmth or a venomous trick?",
      ],
      [
        "Cars surge forward, slithering through the rain,",
        "Forming pythons of steel and frustration,",
        "Horns hissing in chorus against the storm.",
        "And I, like an ant beneath their furious tread,",
        "Rush in frantic steps toward nowhere.",
      ],
      [
        "But I cannot escape—",
        "This city, endless as a labyrinth, holds me tight,",
        "Its streets tangled like ivy,",
        "Growing deeper into the marrow of my bones.",
      ],
      {
        image: "/poetry/brooklyn-bridge-dusk.jpg",
        alt: "Lower Manhattan skyline at dusk, seen from the Brooklyn Bridge",
        caption: "(An hour before Summer Nights, Rainy Days, Evening Breezes)",
      },
    ],
  },
  {
    slug: "the-language-of-four-seasons",
    title: "The Language of Four Seasons (🌸⛱️🍁☃️)",
    layout: "columns",
    body: [
      ["Another **summer breeze**", "Cicadas hum on treetops—", "Green floats on still lakes."],
      ["**Cold rain** whispers down,", "Birds migrate to southern lands,", "Homes call them softly."],
      ["**Ice** grips the windows,", "Rivers stop to hold their breath,", "Winter waits in place."],
      ["Willows sway and bend,", "**Whispered winds** awaken lakes,", "The river stirs free."],
      ["Sunrise from the East,", "**Bamboo stretches** to the sky,", "Breaking heat’s firm grip."],
      ["Leaves fall from the trees,", "**Cold air** weeps between the hills,", "Life slips too quickly."],
      ["**Snowfall**’s quiet hush,", "White wraps the yellowed earth whole—", "Flames burn in my heart."],
      ["**New buds** pierce the soil,", "Singing bright to touch the sun,", "Life reborn from dark."],
      ["Sunset calls the night,", "People flee the **searing rays**,", "Darkness holds them still."],
      ["**Maple leaves** gather,", "A red castle on the ground,", "Winter walks behind."],
    ],
  },
  {
    slug: "haiku-under-tea",
    title: "Haiku under tea",
    epigraph: "Inspired by ITO EN Oi Ocha Shinhaiku Contest",
    body: [
      ["Beneath the blossoms,", "Warm sun unlocks old memories—", "Oolong tea in my hand."],
      ["Cicadas whisper,", "Winds ripple through the stream’s face—", "Green tea flows softly."],
      ["Sunset on the bridge,", "Clouds embrace the painted townscape—", "Jasmine tea drifts eastward."],
      ["Frost blooms on the glass,", "The cold night taps old branches—", "Black tea warms my gaze."],
    ],
  },
  {
    slug: "dialogues-across-time",
    title: "Dialogues across time",
    body: [
      [
        "**See**, my old friend,",
        "Moon,",
        "It climbs the mountain’s spine,",
        "we gaze and ask how time,",
        "was lost to whispers past.",
      ],
      [
        "**Look**, current friends,",
        "Moon,",
        "about to sit on skyline.",
        "We chase our dreams in towers—",
        "a city reaching stars.",
      ],
      [
        "**Hear**, tomorrow me",
        "Moon,",
        "Escapes from current night,",
        "it guides the lost through shadows,",
        "a lantern in the dark.",
      ],
    ],
  },
  {
    slug: "ibm-q-system-one",
    title: "Write a poetry using IBM Q System One",
    body: [
      [
        "Amidst the void, where silent aeons spin,",
        "Two particles align—by fate’s decree.",
        "Entangled threads defy eternity,",
        "Their twisting paths a hymn to what has been.",
        "No godly dice, nor mortal mind, can rend",
        "The spectral bond that quivers, firm yet frail.",
        "You turn; I flux, our states to countervail,",
        "A paradox where endings never end.",
        "Perhaps the soul, in quantum writ, refracts—",
        "A bifurcation through the vast unknown,",
        "Where time dissolves and matter stands alone.",
        "Or love—transcendent force—may yet react,",
        "Two essences entwined before the light,",
        "To pulse as one, through shadow’s endless night.",
      ],
      { note: "IBM Q System One is the world's first quantum computer" },
    ],
  },
  {
    slug: "time-is-a-lesson",
    title: "Time is a lesson!",
    body: [
      [
        "Pressure, exception translate to tasks, were gather,",
        "filling up each fleeting day.",
        "Like a crowded rainy night in Chinatown,",
        "next available seat is always out of reach.",
        "Challenge are like a willow tree,",
        "growing uncontrollably,",
        "creating many unreachable paths.",
        "Lingering thoughts alert me at night,",
        "spreading like endless waves, impossible to ignore.",
        "Is the deadline an invisible shore?",
        "I realised the willow was planted by me.",
        "Time is a lesson!",
      ],
    ],
  },
  {
    slug: "his-memories",
    title: "His memories",
    body: [
      [
        "**Change** is the last key in your pocket,",
        "Unlocking a door to the unknown.",
        "Whether it brings gain or loss,",
        "It will always take you beyond where you stand.",
        "**Change** is like a painter,",
        "Who lifts the brush of fate and paints over the past,",
        "And in moments when you’re unaware,",
        "Reveals a fresh landscape just for you.",
        "**Change** is like a winter storm,",
        "Stirring nerves with its fierce embrace,",
        "Yet when you open your arms to greet it,",
        "It turns to a spring breeze, bringing new hope.",
      ],
      {
        note: "(This poem was written after a conversation I had with my father. I can't ever have the same feeling of that day again, so I didn't revise it.)",
      },
    ],
  },
  {
    slug: "a-unique-data-structure",
    title: "A Unique Data Structure",
    body: [
      [
        "Index rises in steady succession,",
        "value’s domain a landscape of strings,",
        "key, an address that leads to words.",
        "Gratitude to the hash() function for granting distinction,",
        "each word carries its distinct role.",
        "Thought flows, unconstrained by structure.",
        "Yet I wonder still—",
        "should my poem filled into Set ,",
        "or find place within Map.",
      ],
      { note: "(I hope to reconstruct this poetry into code, so….)" },
      {
        code: `rises(Index) in {"steady", "succession"}

int(value).domain = str(landscape)

key = "an address that leads to words"

def distinction(Gratitude):
    return Gratitude.unique is True

def hash(Gratitude):
    if distinction(Gratitude) == 0:
        return 1

for person in set(world):
    print("Yes, we are unique")

Thought.status = "flows"
Thought.unconstrained_by_structure = False

### Yet I wonder still—
idea = []
my_poem = {
    "set": set(idea),
    "map": {word: len(word) for word in idea}
}`,
      },
      {
        note: "(**Set** and **Map** are python's built-in data structures that guarantee the uniqueness of the elements they hold inside.)",
      },
    ],
  },
  {
    slug: "long-time-no-see",
    title: "Long Time No See",
    letter: true,
    body: [
      ["Dear Mr. Liu,"],
      [
        "It’s been three years since we last spoke,",
        "That Friday—my first week at NYU.",
        "You told me Data Structures and Algorithms",
        "Would be everything I feared:",
        "Complex. Challenging. Difficult at times.",
      ],
      [
        "And you were right.",
        "There were nights I stopped by code,",
        "Days when “binary search” felt like a mountain.",
        "But your give me some gifts:",
        "“attending more office hours” was gift;",
        "“practicing, connecting with others” was gift;",
        "“believing I could overcome those challenges” was gift;",
      ],
      [
        "Now, as I sprint toward my final week at NYU,",
        "having accomplished things I never expected,",
        "and explored paths I hadn’t imagined before.",
        "Moments of clarity in places I never knew to look.",
        "I want to share it all with you:",
      ],
      ["The successes, the struggles, the surprises."],
      ["But more than that, I want to ask,", "A question I should have asked back then:"],
      ["Were you as confused as I was?", "Never mind, I am backing, see you soon!"],
      ["wishing you well,", "Yuwei Sun"],
    ],
  },
  {
    slug: "poem-on-earth",
    title: "Poem on Earth",
    epigraph: "A visual poem, originally spelled out with satellite images of letter-shaped places on Earth",
    body: [
      {
        tiles: [
          "perhaps", "earth", "is", "A", "Book", "of", "Higher", "civilization,",
          "our", "lives", "are", "poems", "written", "by", "them.",
        ],
      },
    ],
  },
  {
    slug: "prolific-writing-per-semester-1",
    title: "Prolific Writing per Semester",
    epigraph: "Inspired by Betye Saar’s “mystic Chart for an Unemployed Sorceress”",
    body: [
      [
        "**Resume:**",
        "A word so weighted, so thin.",
        "Professors call it the key to opportunity,",
        "Polished, perfect, a parchment of promise.",
        "But in Silicon Valley, this key",
        "Turns cold in the hands of machines,",
        "Quietly judged by algorithms",
        "That will never know your name.",
      ],
      [
        "**Resume:**",
        "A mirror with fractured meanings.",
        "On LinkedIn, it shines—",
        "A polished mosaic of milestones,",
        "Yet on Medium, it glitters like gold leaf,",
        "Thin, fragile, too good to be true.",
      ],
      [
        "I look at it and wonder.",
        "Does it show me, or a version of me",
        "Tailored to the king –",
        "The AI that decides my worth?",
      ],
      [
        "Resumes hide true knowledge.",
        "They hide the hours spent staring at code,",
        "The quiet victories.",
        "Yet here we are, new graduates,",
        "writing our hopes on paper,",
        "learning to read AI's preferences,",
        "like diplomats reading a king's smile.",
      ],
      [
        "We send out our stories to doors that may never open.",
        "We send them to inboxes that may never reply.",
      ],
      [
        "And still, we persist.",
        "Because in the end, a real key will turn.",
        "And we will walk through,",
        "Not as data or as code,",
        "But as who we are.",
      ],
    ],
  },
  {
    slug: "prolific-writing-per-semester-2",
    title: "Prolific Writing per Semester",
    body: [
      ["Against a backdrop of shifting, somber skies,", "An invisible force acts on its shoulders."],
      [
        "A question arises:",
        "Is gravity of the earth heavier or the burden of wisdom heavier",
        "Perhaps the more important factor-",
        "Thinking is exhausting.",
      ],
      [
        "Fingers rest upon a furrowed brow,",
        "As eyes remain fixed upon the earth.",
        "What calls us downward?",
        "Is it the moving ants, the structure of the surface, or the origin of the earth?",
      ],
      [
        "Wisdom is not the answer,",
        "but the loneliness after the ecstasy of understanding.",
        "And in its wake: silence.",
        "A loneliness profound,",
        "The despair of truths is too heavy to be spoken.",
      ],
    ],
  },
  {
    slug: "child-and-me",
    title: "Child and me",
    favorite: true,
    align: "center",
    body: [
      [
        "Alone by the sea,",
        "Child, I see you stand,",
        "Gazing far, far away,",
        "Then tired, you bend,",
        "Pick up a pebble, smooth and round,",
        "And cast it into the sea,",
        "To throw your troubles away.",
        "But the sea, it may return,",
        "And who knows, perhaps,",
        "Child, someone else has picked",
        "Your troubles from the sand,",
        "Made them their own,",
        "And tossed them back to the world.",
      ],
    ],
  },
  {
    slug: "wake-up-by-wind-again",
    title: "Wake up by Wind Again",
    body: [
      [
        "Sit on a chair, air crossing my nostrils, refreshingly cold.",
        "The bright green leaves of summer now begin to fall,",
        "People hide their hands in pockets, sheltered from the wind.",
      ],
      [
        "A wooden door of my mind creaks open to yesterday's wind,",
        "Explaining why my soul aches with this seasonal cold.",
        "Suddenly, I long for summer evenings in this early fall.",
      ],
      [
        "Yet beauty lingers in the remnants of fall—",
        "Like pumpkin scents delivered gently by the wind,",
        "Filling my heart, warming me against the cold.",
      ],
      ["Hope we never fall down in the next cold wind."],
    ],
  },
  {
    slug: "how-i-learn-digit",
    title: "How I Learn Digit",
    align: "center",
    body: [
      [
        "One star, two stars, three in line,",
        "Four stars, five stars, six now shine.",
        "Seven, eight, nine—the heavens glow,",
        "A quiet dream the night bestows.",
      ],
      [
        "One flake, two flakes, three and four,",
        "Five flakes, six flakes, then comes more.",
        "Seven, eight, nine—the sky turns white,",
        "Winter whispers through the night.",
      ],
      [
        "One drop, two drops, three on the pane,",
        "Four drops, five drops, a soft refrain.",
        "Six, then seven, the rhythm swells,",
        "The rain hums secrets it never tells.",
      ],
    ],
  },
  {
    slug: "if-mr-shakespeare-was-a-programmer",
    title: "If Mr Shakespeare was a programmer",
    body: [
      [
        "I can’t debug the errors in my code,",
        "Although my course begins with number four.",
        "The morning frost has slowed my heavy load;",
        "The trees shed whispers—autumn has much more.",
      ],
      [
        "Events on my calendar, chaos hard to bind,",
        "Tasks lie unfinished, stacked in shadowed rows.",
        "The peace within my mind starts to decline,",
        "Gives way to weight where weariness now grows.",
      ],
      [
        "Imagine, moonlight dancing on the blue sea,",
        "The pink stars above are where I long to be.",
        "Can you hear the whisper touching those trees?",
        "My dreams entwine with autumn’s cooling haze.",
      ],
      ["The sting of failure often self-creates,", "But hope is something we can donate too."],
    ],
  },
  {
    slug: "person-far-from-home",
    title: "游子 (Person far From Home)",
    align: "center",
    body: [
      ["空庭秋叶舞，忽闻鸟鸣啼。", "斜阳拂湖面，回首望故乡。"],
      [
        "In the empty courtyard, autumn leaves dance,",
        "Suddenly, the birds’ cries break the silence.",
        "The setting sun caresses the lake’s surface;",
        "Turning back, I long for my distant home.",
      ],
    ],
  },
];

export const poemNumber = (poem: Poem) => String(poems.indexOf(poem) + 1).padStart(2, "0");

export const poemLines = (poem: Poem) =>
  poem.body.flatMap((block) => (Array.isArray(block) ? block : "tiles" in block ? [block.tiles.join(" ")] : []));

export const plainText = (line: string) => line.replace(/\*\*?/g, "");

export const poemExcerpt = (poem: Poem, lineCount = 2) =>
  poemLines(poem).slice(0, lineCount).map(plainText).join(" / ");
