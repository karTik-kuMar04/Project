export interface SubpageSection {
  title: string;
  content: string;
  bulletPoints: string[];
}

export interface IndusValleySubpage {
  id: string;
  title: string;
  hook: string;
  image: string;
  sections: SubpageSection[];
}

export const indusValleySubpages: IndusValleySubpage[] = [
  {
    id: "city-life",
    title: "City & Daily Life",
    hook: "A 4,000-year-old city with better plumbing than most of the ancient world.",
    image: "/images/city-life.png",
    sections: [
      {
        title: "Urban planning & sanitation",
        content: "Harappa and Mohenjo-daro were not mere settlements; they were triumphs of ancient engineering, covering hundreds of hectares built on a precise grid. Streets were systematically aligned to the cardinal directions, allowing prevailing winds to naturally clean the city corridors. Each urban hub was split into two primary components: a raised citadel, which housed administrative centers, public granaries, and assembly halls; and a lower residential town where the populace lived and worked. Bricks used for construction were standardized in a rigid 4:2:1 ratio, a proportion maintained across sites situated over 1,500 kilometers apart. Sanitation was remarkably advanced, with nearly every household featuring a private brick-lined bathing area that connected directly to covered street drains, outperforming the plumbing of contemporary Egypt and Mesopotamia. The crowning civic structure, Mohenjo-daro's Great Bath, was a meticulously sealed brick tank that hints at communal ritual purification or sophisticated civil engineering.",
        bulletPoints: [
          "Cities like Mohenjo-daro and Harappa covered hundreds of hectares on a precise grid, streets aligned to the cardinal directions.",
          "Each city had a raised citadel (granaries, public buildings) and a lower residential town.",
          "Bricks were standardised in a 4:2:1 ratio across the entire region — the same proportion found 1,500km apart.",
          "Nearly every house had a private bathroom draining into covered street drains — a level of sanitation unmatched in contemporary Egypt or Mesopotamia.",
          "The Great Bath at Mohenjo-daro is a large brick-lined public tank; whether ritual or civic is still debated."
        ]
      },
      {
        title: "Food & diet",
        content: "The survival and vitality of the Harappan civilization were anchored in a rich agricultural system. The staple grains of the civilization were wheat and barley, while archaeological evidence from Gujarat indicates that millets also formed a critical part of their diet. Rice, though present, was rare and did not become a dominant crop until after the decline of the civilization. The fields yielded a variety of pulses, including lentils, peas, and chickpeas, alongside oilseeds like sesame and linseed, ensuring a balanced nutritional intake. Harappans domesticated zebu cattle, water buffalo, sheep, and goats, which provided dairy and meat, supplemented by river fish and hunted wild game. Fascinatingly, chemical traces on pottery fragments reveal the ancient usage of spices like cumin and turmeric in daily cooking, showing a culinary culture that appreciated flavor. Fruits such as dates, figs, grapes, and melons rounded out a diverse and abundant ancient diet.",
        bulletPoints: [
          "Staple grains: wheat and barley; millets in Gujarat; rice rare until after the IVC.",
          "Pulses (lentils, peas, chickpeas) and oilseeds (sesame, linseed) widely grown.",
          "Domesticated zebu cattle, water buffalo, sheep, goats and chickens supplemented by hunting and river fish.",
          "Cumin and turmeric identified at sites; dates, figs, grapes and melons also consumed."
        ]
      },
      {
        title: "Crafts & household life",
        content: "Harappan households were centered on domestic comforts and skilled industrial work. Homes were typically multi-room structures, often rising to two storeys, built around central open-air courtyards. These courtyards served as the focus of family life, containing brick hearths for cooking and private wells for fresh water. Daily food was prepared in wheel-turned clay pottery or copper vessels, with flatbreads, thick porridges, and hearty stews serving as dietary staples. The Indus Valley was a global pioneer in textiles, being the earliest known civilization to cultivate, spin, and weave cotton. In specialized workshops, particularly in the coastal regions of Gujarat, artisans drilled and polished exquisite beads from semi-precious stones like carnelian, agate, and lapis lazuli. Metalworkers alloyed copper with tin, arsenic, or lead to forge durable bronze tools, weapons, and intricate jewelry, demonstrating a highly organized and technologically advanced manufacturing economy.",
        bulletPoints: [
          "Homes were multi-room, often two storeys, built around a courtyard with a hearth and well.",
          "Cooking in wheel-turned pottery and copper vessels; flatbreads, porridge and stew were staples.",
          "Cotton was cultivated and woven here earlier than anywhere else in the world.",
          "Beads of carnelian, agate and lapis lazuli were drilled and shaped in large workshops, especially in Gujarat.",
          "Bronze tools and jewellery made from copper alloyed with tin, arsenic or lead."
        ]
      }
    ]
  },
  {
    id: "leadership",
    title: "Who's in Charge?",
    hook: "No palaces, no royal tombs, no named kings — so who ran things?",
    image: "/images/leadership.png",
    sections: [
      {
        title: "The missing kings",
        content: "One of the most profound mysteries of the Indus Valley Civilization lies in its complete lack of royal iconography. Unlike their contemporaries in dynastic Egypt or Mesopotamia, who built monumental palaces, grandiose tombs, and carved vast inscriptions celebrating the deeds of named monarchs, the Harappan archaeological record is completely silent on kingship. No royal tombs containing rich treasures or sacrificed servants have ever been discovered. The famous 'Priest-King' bust, a small soapstone sculpture found at Mohenjo-daro, is now interpreted by modern archaeologists as a votive figurine rather than a portrait of an actual ruler. Furthermore, the undeciphered Indus script offers no royal lists, titles, or inscriptions that mention an elite ruling class, leaving the identity of their leaders entirely unknown.",
        bulletPoints: [
          "No palaces, royal tombs or inscriptions naming a ruler have ever been found — a striking contrast with Egypt or Mesopotamia.",
          "The so-called 'Priest-King' bust from Mohenjo-daro is now read as a votive figurine, not a portrait of an actual ruler.",
          "The undeciphered Indus script gives no names, titles or king-lists."
        ]
      },
      {
        title: "Two competing theories",
        content: "To explain the governance of a civilization that spanned over a million square kilometers, scholars have proposed two competing theories. The first posits a single, highly centralized federation. This is supported by the astonishing uniformity in brick sizes, weights, pottery designs, and city layouts across hundreds of miles, which strongly implies a shared authority capable of enforcing strict engineering and administrative standards. The second theory proposes a system of independent city-states, similar to the Greek poleis or Mesopotamian principalities. Under this model, major urban centers like Harappa, Mohenjo-daro, and Lothal were self-governed by local merchant councils, guilds, or elders. They shared a common culture and trading network but operated without a single, centralized capital. Crucially, nothing in the archaeological record indicates conquest, military suppression, or top-down violence as the source of this cultural uniformity.",
        bulletPoints: [
          "Single federation: the near-total uniformity of brick sizes, weights and city layouts across a million km² implies some shared authority set the standards.",
          "Independent city-states: cities may have self-governed through merchant councils or elders while sharing culture and trade — commonality without central rule.",
          "Nothing in the record points to conquest or top-down imposition as the source of this uniformity."
        ]
      },
      {
        title: "An unusually equal society",
        content: "Regardless of its exact political structure, the Indus Valley appears to have been an unusually egalitarian society. Harappan burials reveal a striking absence of social hierarchy, consisting primarily of simple pit graves with modest pottery and personal ornaments, with no lavish tombs setting individuals apart. The lack of military fortifications built specifically for warfare and the scarcity of weapons suggest a society that prioritized trade and peace over military conquest. Major public works, such as the massive brick granaries, elaborate water reservoirs, and complex drainage networks, required immense collective effort and organization, yet the agency behind them remains anonymous. This lack of monumental propaganda has led many historians to describe the Indus Valley as a rare historical exception: a highly advanced, complex urban civilization that flourished for centuries without a visible monarchy or ruling elite.",
        bulletPoints: [
          "Burials show little status difference — no rich tombs, no objects that set any individual apart.",
          "Very few weapons found; no clear evidence of city walls built for warfare.",
          "Large public works (granaries, reservoirs) required organised effort, but who organised it remains unknown.",
          "Often described by scholars as a rare case: advanced urban civilization without visible kingship."
        ]
      }
    ]
  },
  {
    id: "trade",
    title: "Trade & Weights",
    hook: "A 1,500km trade network that ran on weights and seals instead of coins.",
    image: "/images/trade.png",
    sections: [
      {
        title: "A network spanning the Bronze Age world",
        content: "The Harappans were master traders who operated an expansive network that bridged the subcontinent and the broader Bronze Age world. On land, heavy goods were transported in sturdy wooden bullock carts pulled by paired oxen, a design verified by numerous terracotta models found in household ruins. Rivers served as natural highways, with flat-bottomed boats navigating the Indus and its tributaries. For long-distance maritime trade, the Harappans built deep-water ports like Lothal in Gujarat and Sutkagan Dor on the Makran coast, which managed ocean-going ships crossing the Arabian Sea. The civilization exported high-value manufactured goods, including finely carved carnelian beads, dyed cotton textiles, and worked copper items. In return, they imported luxury raw materials, such as deep blue lapis lazuli from Afghanistan, and essential metals like tin and copper from the Persian Gulf, integrating themselves into the global economy of their time.",
        bulletPoints: [
          "Land transport: bullock carts with paired ox teams, attested by terracotta models found at many sites.",
          "River transport: flat-bottomed boats shown on seals, navigating the Indus and its tributaries.",
          "Sea trade via the Arabian Sea: ports at Lothal (Gujarat) and Sutkagan Dor (Makran coast) handled ocean-going ships.",
          "Exports: carnelian and steatite beads, cotton textiles, copper goods.",
          "Imports: lapis lazuli, tin and copper for bronze, sourced from Afghanistan and the Gulf."
        ]
      },
      {
        title: "Money without coins",
        content: "Remarkably, the massive volume of Indus commerce was conducted entirely without the use of metallic coinage. Instead of coins, Harappan trade relied on a highly standardized system of weights made from carefully polished cubical stone blocks. These weights followed simple, precise mathematical ratios—doubling in value in the lower denominations before shifting to a decimal system for higher weights. The consistency of these weights across a 1,500-kilometer territory is a testament to the sophistication of Harappan merchants and implies standard commercial codes enforced without a centralized state. To secure cargo and verify transactions, merchants used clay seals. These seals, carved with animal motifs and symbols, were pressed into soft clay tags attached to shipping bundles, serving as tamper-proof labels that identified the merchant, source, and contents of the shipment.",
        bulletPoints: [
          "No coinage has ever been found from the Harappan period.",
          "Trade relied on cubical stone weights built on simple ratios, consistent across 1,500km — implying coordinated economic practice without central political control.",
          "Seals were pressed into clay tags attached to goods, functioning like a shipping label identifying a merchant or shipment."
        ]
      },
      {
        title: "The script nobody can read",
        content: "At the heart of Harappan administrative and commercial life was a writing system that remains one of history's greatest unsolved puzzles. Over 400 distinct symbols have been identified, appearing on more than a thousand objects, most notably the small square stamp seals. These inscriptions are extremely brief, averaging only four to six characters in length, which severely limits the grammatical context available for decipherment. The most common motif carved on these seals is the enigmatic 'unicorn,' a one-horned bull, alongside realistic depictions of elephants, tigers, and composite mythological beasts. While some linguistic specialists believe the script represents an early Dravidian language, no scientific consensus exists, and the script remains undeciphered. Yet, the discovery of these unique seals in ancient Mesopotamian cities and Oman provides undeniable physical evidence of the vast reach of the Harappan trade network.",
        bulletPoints: [
          "Over 400 distinct symbols, found on 1,000+ objects, mostly small stamp seals of 2–4cm.",
          "Inscriptions are short — usually 4–6 symbols — which sharply limits what can be inferred linguistically.",
          "Most common motif: the 'unicorn' (one-horned bull). Also elephants, tigers, composite creatures.",
          "Many specialists lean toward a Dravidian language; no consensus exists. The script is officially undeciphered.",
          "Indus seals found as far away as Mesopotamia and Oman — physical proof of the network’s reach."
        ]
      }
    ]
  },
  {
    id: "religion-legacy",
    title: "Religion & Legacy",
    hook: "Did the roots of Hindu ritual begin here?",
    image: "/images/religion-legacy.png",
    sections: [
      {
        title: "Clues without a key",
        content: "Reconstructing the spiritual beliefs of the Indus Valley is an exercise in archaeological interpretation, as the civilization left behind no temples, monumental shrines, or deciphered texts. Every theory regarding Harappan religion is built entirely from the physical objects recovered during excavations. Small clay figurines of women, historically labeled as 'mother goddesses' representing fertility cults, are now viewed more cautiously by modern scholars, who suggest many may have simply been children's toys. The famous 'Pashupati' seal, depicting a horned, three-faced figure seated in a meditative posture surrounded by wild animals, was famously identified by John Marshall in 1931 as a 'proto-Shiva.' However, critics note the figure lacks many later attributes of the deity, and Jain scholars suggest it may represent Rishabhanatha, the first Tirthankara. Without a readable script, these fascinating iconographic parallels remain tantalizing but unproven.",
        bulletPoints: [
          "No temples, no deciphered texts, no confirmed deity images — any picture of IVC belief is built entirely from artefacts.",
          "Small terracotta figurines, long called 'mother goddesses,' may simply be toys or dolls; the Shakti-cult reading is not robust.",
          "The Pashupati seal — a horned figure seated among animals — was called proto-Shiva by Marshall (1931). Critics note missing attributes; Jain scholars read it as Rishabhanatha, the first Tirthankara.",
          "Parallels to later Hindu, Buddhist and Jain iconography exist but cannot be proven without a readable script."
        ]
      },
      {
        title: "The cremation clue & ritual hints",
        content: "The burial customs of the Indus Valley offer important insights into their attitudes toward death and the transition of their culture. Throughout the Mature Harappan period, the dead were interred in simple pit graves, accompanied by basic pottery vessels and modest personal ornaments, suggesting a belief in an afterlife that did not require grand material displays. Around 1900 BCE, the Cemetery H culture in the Punjab region introduced cremation, marking the earliest evidence of this practice in South Asia. This shift toward cremation is highly significant, as it would later become a central tenet of Hindu funerary rituals. Additionally, public structures like the Great Bath at Mohenjo-daro suggest that ritual bathing and water purification—practices that remain deeply embedded in modern South Asian religions—held deep social and spiritual importance for the Harappans.",
        bulletPoints: [
          "Mature Harappan burials were simple pit graves with few grave goods and no visible status hierarchy.",
          "Around 1900 BCE the Cemetery H culture in Punjab introduced cremation — the earliest in South Asia — a rite later central to Hindu funerary practice.",
          "The Great Bath may suggest ritual purification; others argue it was simply a civic water tank."
        ]
      },
      {
        title: "What came after: the successor cultures",
        content: "The story of the Indus Valley is not one of sudden extinction, but of gradual cultural transformation and migration. The archaeological sequence shows a continuous evolution from early settlements like Mehrgarh through the Mature Harappan peak to the Late Harappan Cemetery H culture. As the great cities of the Indus basin declined, their populations migrated eastward into the fertile Ganges-Yamuna basin. This migration ensured that Harappan technologies, artistic motifs, and pottery styles were absorbed into the emerging cultures of the early Vedic Iron Age. Long-running cultural threads, such as the construction of stepped water reservoirs, the sacred reverence for the pipal leaf motif, and advanced bead-making techniques, survived the collapse of the cities, demonstrating that the Indus Valley laid the enduring cultural foundations of South Asian civilization.",
        bulletPoints: [
          "Mehrgarh (pre-IVC, 7000–2600 BCE) → Mature Harappan → Late Harappan / Cemetery H (1900–1300 BCE) → Painted Grey Ware / early Vedic Iron Age (1200–600 BCE) → Northern Black Polished Ware / early historic cities (700–200 BCE).",
          "As Harappan cities declined, populations moved east into the Ganges basin; Late Harappan pottery and burial styles show continuity into these later cultures.",
          "Possible long-running threads: the stepwell tradition, the pipal leaf motif, bead-making techniques.",
          "Frame this page honestly: intriguing parallels, unproven lineage. Not 'Indus religion was early Hinduism.'"
        ]
      }
    ]
  },
  {
    id: "bronze-age-world",
    title: "Bronze Age World",
    hook: "While Egypt built pyramids, this is what was happening on the Indus.",
    image: "/images/bronze-age-world.png",
    sections: [
      {
        title: "Mesopotamia — the documented trading partner",
        content: "The closest and most well-documented foreign contact of the Indus Valley was with the great city-states of Mesopotamia. Cuneiform clay tablets from Sumer, Akkad, and Babylon, dating from around 3500 BCE onward, make frequent references to a distant eastern land called 'Meluhha,' which scholars widely identify as the Indus Valley. These ancient texts record Meluhha as a major supplier of valuable exotic goods, including timber, ivory, gold, and precious stones. Archaeological excavations in Iraq have confirmed these records, turning up distinctive Harappan carnelian beads, shell bangles, and square stamp seals at major Mesopotamian sites like Ur, Kish, and Akkad. The famous Akkadian king Sargon, who ruled around 2270 BCE, proudly recorded in his royal inscriptions that ships from Meluhha, Magan, and Dilmun docked at the quays of his capital city, proving a highly organized international maritime trade route.",
        bulletPoints: [
          "Sumerian, Akkadian and Babylonian city-states in modern Iraq from ~3500 BCE.",
          "Indus carnelian beads, shell bangles and seals found at Ur, Kish and Akkad.",
          "Mesopotation texts name a land called Meluhha — widely identified as the Indus — as a supplier of timber, ivory and other goods.",
          "Akkadian king Sargon (~2270 BCE) recorded ships from Meluhha, Magan (Oman) and Dilmun (Bahrain) docking at his capital."
        ]
      },
      {
        title: "Egypt — distant and indirect",
        content: "While the Indus Valley was contemporaneous with the builders of the pyramids in Old and Middle Kingdom Egypt, direct contact between these two great civilizations was minimal. The vast distance and geographical barriers meant that any exchange of goods or ideas was almost certainly indirect, mediated through Mesopotamian merchants and intermediate traders in the Arabian Peninsula. Luxury items from the East, such as deep blue lapis lazuli—which the Harappans sourced from their northern outpost in Badakhshan—eventually found their way into the jewelry of Egyptian pharaohs, but only after passing through multiple trading hands. A single etched carnelian bead, crafted in the unique Harappan style and discovered in a 12th Dynasty Egyptian tomb, stands as a rare and precious physical trace of these distant, indirect trade connections that spanned the ancient world.",
        bulletPoints: [
          "Old and Middle Kingdom Egypt overlapped the Mature Harappan period, but direct contact was minimal.",
          "Any exchange (e.g. lapis lazuli reaching Egypt) was mediated through Mesopotamia and Arabian intermediaries.",
          "A single etched carnelian bead, stylistically Indus, found in a 12th Dynasty Egyptian tomb — a rare, possibly indirect trace."
        ]
      },
      {
        title: "Central Asia — the Bactria–Margiana complex",
        content: "To the north, the Harappans maintained active relationships with the Bactria-Margiana Archaeological Complex (BMAC), a Bronze Age urban culture that flourished in modern Turkmenistan and northern Afghanistan. The Harappans established a trading colony at Shortugai in northern Afghanistan to directly control the mining of precious lapis lazuli and copper. This outpost served as a gateway for trade with Central Asia, facilitating the exchange of agricultural techniques and artisan crafts. Excavations at Gonur-depe, one of the largest BMAC cities, have recovered a classic Harappan square stamp seal featuring a carved elephant and Indus script, proving direct contact. Furthermore, the presence of similar terracotta model carts and bronze pin designs in both regions indicates a shared flow of technology and ideas across the mountain passes.",
        bulletPoints: [
          "The BMAC in modern Turkmenistan and Afghanistan (c. 2300–1700 BCE) was a contemporaneous urban Bronze Age culture.",
          "A Harappan seal with elephant motif and script found at Gonur-depe, a major BMAC city.",
          "Similar terracotta cart technology in both regions suggests indirect contact via Afghanistan routes."
        ]
      },
      {
        title: "The Gulf, Iran, China and the Aegean",
        content: "Beyond these major partners, the Harappan network touched many other regions. The Persian Gulf served as a vital maritime highway, with islands like Bahrain and Oman acting as trade stations where Indus ceramics and seals have been uncovered. In Iran, overland caravan routes through Baluchistan carried Harappan lapis lazuli and metals, though direct written records are absent. In contrast, the Neolithic cultures of China's Yellow River developed in complete isolation, with no evidence of contact with the Indus. In the Mediterranean, loose stylistic parallels exist between Indus motifs and Minoan Crete, though no physical Harappan artifacts have ever been found in the Aegean, leaving the question of contact open. Far to the west, the Norte Chico civilization of Peru developed completely independently, serving as a fascinating parallel of urban complexity emerging without external trade.",
        bulletPoints: [
          "Gulf (Magan/Dilmun): Oman and Bahrain were way-stations; Indus seals and ceramics found there; lapis and carnelian passed through.",
          "Iran/Elam: caravan routes through Baluchistan likely carried Indus goods; direct written records are absent.",
          "China: Neolithic Yellow River cultures were broadly contemporaneous but developed in complete isolation — no evidence of contact.",
          "Aegean/Crete: loose motif parallels noted but no Indus object ever found there; remains an open, speculative question.",
          "Norte Chico (Peru, c. 3000–1800 BCE): roughly contemporaneous, zero contact — useful as a comparison for independent urban emergence."
        ]
      }
    ]
  },
  {
    id: "decline",
    title: "Why It Ended",
    hook: "Climate change brought down a civilization 4,000 years ago.",
    image: "/images/indus_valley_hub.png", // Reused the main hub sunset image due to quota limit
    sections: [
      {
        title: "A slow fade, not a sudden fall",
        content: "The decline of the Indus Valley Civilization was not a sudden, catastrophic event, but rather a slow, century-long process of adaptation and migration. The peak of Mature Harappan urban life, which flourished from 2600 to 1900 BCE, gradually gave way to a period of decline and decentralization. Major urban centers like Mohenjo-daro, Harappa, and Kalibangan were not destroyed by fire or warfare; instead, they were progressively abandoned, with most major cities largely deserted by 1700 BCE. Archaeological excavations have revealed no layers of ash from burning, nor any mass graves or skeletal trauma that would point to a violent foreign invasion. The evidence suggests that the complex administrative systems that supported the cities simply dissolved, leading the population to abandon the urban centers for a simpler, decentralized way of life.",
        bulletPoints: [
          "The Mature Harappan peak (c. 2600–1900 BCE) gave way to a long decline, not a single event.",
          "Major cities — Mohenjo-daro, Harappa, Kalibangan — progressively abandoned, most by ~1700 BCE.",
          "No destruction layers, no mass graves — nothing points to invasion or warfare."
        ]
      },
      {
        title: "Climate as the prime suspect",
        content: "The primary driver behind the collapse of the Harappan cities is now widely believed to be severe, long-term climate change. Paleoclimate studies, analyzing ancient lake sediments and cave formations, reveal a catastrophic drought and cooling event around 2200 BCE, known as the '4.2 kya event.' This event initiated a prolonged weakening of the Indian monsoon, which had previously provided the predictable rainfall necessary for Harappan agriculture. Deprived of monsoon rains, the rivers that fed the Harappan heartland—especially the Ghaggar-Hakra river system—began to shift course or dry up entirely. This environmental crisis directly undermined the agricultural surplus, irrigation systems, and clean water supplies that were the lifeblood of the major cities, making urban life unsustainable.",
        bulletPoints: [
          "Paleoclimate records show a major drought and cooling event around 2200 BCE (the '4.2 kya event') and a prolonged weakening of the Indian monsoon over the following centuries.",
          "Rivers in the Harappan heartland, especially the Ghaggar-Hakra system, dried up or shifted course.",
          "This would have directly undermined irrigation, agriculture and the urban water supply."
        ]
      },
      {
        title: "Ripple effects",
        content: "The environmental crisis in the Indus valley triggered a series of severe socio-economic ripple effects that accelerated the decline. As the agricultural base collapsed, long-distance trade with Mesopotamia contracted, cutting off the source of wealth and luxury raw materials that sustained the urban elites. Skeletons from the Late Harappan period show a marked increase in signs of systemic stress, malnutrition, and infectious diseases like leprosy and tuberculosis, reflecting a society under intense physical and social pressure. Crucially, the popular 'Aryan Invasion' theory—which claimed that nomadic Indo-Aryan warriors swept down from Central Asia and destroyed the cities—is completely unsupported by modern archaeological and genetic evidence, as the decline was already well underway before any Indo-Aryan groups arrived in the region.",
        bulletPoints: [
          "As Mesopotamian cities went through their own upheavals, long-distance trade contracted, cutting off Indus urban wealth.",
          "Late Harappan skeletons show more trauma and infectious disease (leprosy, TB) than earlier phases — signs of mounting social stress.",
          "The Aryan invasion theory is not supported: no site shows signs of violent conquest; Indo-European-speaking groups entered the subcontinent after the decline was already underway."
        ]
      },
      {
        title: "Where everyone went",
        content: "As the cities became uninhabitable, the Harappan people did not vanish, but dispersed in search of better-watered lands. The archaeological record shows a massive demographic shift, with populations migrating eastward and southward toward the fertile Ganges-Yamuna basin and the coastal plains of Gujarat. In these new regions, they established smaller, rural settlements. The transitional cultures of the Late Harappan period, such as the Cemetery H and Jhukar cultures, show a blending of classical Harappan traditions with local regional styles. By 1300 BCE, the grand cities of the Indus had given way to these successor cultures, setting the stage for the rise of the early historic kingdoms of ancient India and ensuring their cultural legacy survived.",
        bulletPoints: [
          "Harappan populations dispersed, many moving east toward the better-watered Ganges basin.",
          "Transitional cultures — Cemetery H, Jhukar, Rangpur (1900–1300 BCE) — show Late Harappan traits mixing with new elements.",
          "By ~1300 BCE the Indus Civilization had given way to successor cultures, setting the stage for Vedic and early historic South Asia."
        ]
      }
    ]
  }
];
