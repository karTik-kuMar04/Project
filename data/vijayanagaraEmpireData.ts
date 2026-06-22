export interface SubpageSection {
  title: string;
  content: string;
  bulletPoints: string[];
}

export interface VijayanagaraSubpage {
  id: string;
  title: string;
  hook: string;
  image: string;
  sections: SubpageSection[];
}

export const vijayanagaraSubpages: VijayanagaraSubpage[] = [
  {
    id: "capital",
    title: "Hampi: City of the Gods",
    hook: "Travelers called it the richest city in the world. Today it is a UNESCO ruin across 26 square kilometres of boulders.",
    image: "/images/capital.png",
    sections: [
      {
        title: "A city of stone and water",
        content: "Vijayanagara was founded in 1336 CE on the southern banks of the Tungabhadra River, nestled within a dramatic natural landscape of massive granite boulders that provided a highly defensible setting, later amplified by extensive stone fortifications. The Italian merchant Niccolò de' Conti, visiting around 1420 CE, described a colossal city with a circumference of roughly sixty miles and massive stone ramparts. In 1443 CE, the Persian envoy Abdur Razzaq counted seven concentric stone walls with fortified, impregnable gateways, observations confirmed by surviving rampart ruins. Irrigation was highly advanced; a network of stone reservoirs and canals, some built by royal queens, supplied fresh water to the city and surrounding rice fields. Later Portuguese visitors, including Domingo Paes and Duarte Barbosa, confirmed the city's incredible opulence, with Paes's descriptions of royal silver drums recently verified by archaeological discoveries.",
        bulletPoints: [
          "Vijayanagara was founded on the banks of the Tungabhadra River in a landscape of dramatic granite boulders — a natural defensive setting amplified by man-made fortifications.",
          "The Italian merchant Niccolò de’ Conti (c. 1420) described a city with a circumference of roughly 60 miles and a massive stone wall. The Persian envoy Abdur Razzaq (1443) counted seven concentric walls of stone with impregnable gates — both accounts are confirmed by surviving rampart remnants.",
          "Irrigation was extensive: reservoirs and canals (some built by queens) supplied both the city and surrounding rice fields; inscriptions praise kings for bringing barren land under cultivation through new water infrastructure.",
          "The Portuguese visitors Domingo Paes (1520s) and Duarte Barbosa independently confirmed the city’s opulence; Paes’s mention of silver drums was later verified by actual silver drums recovered by archaeologists."
        ]
      },
      {
        title: "Two zones: sacred and royal",
        content: "The capital was organized into two primary urban sectors: a sacred zone dominated by the towering Virupaksha Temple complex, and an administrative or royal zone containing the Royal Enclosure, the Elephant Stables, and various palace structures. The processional avenue of Hampi Bazaar, leading from the Virupaksha Temple, was lined with stone market platforms and merchant stalls, with separate quarters built for Persian and Gujarati traders. Public buildings like the Queen's Bath, featuring an open-air pool surrounded by Islamic-style pointed arches, and the Elephant Stables, consisting of a row of domed chambers for the royal war elephants, demonstrate a sophisticated architectural planning that blended traditional Dravidian masonry with Islamic decorative elements. UNESCO’s inscribed Group of Monuments at Hampi covers this vast archaeological landscape of gateways, colonnades, and pillared halls.",
        bulletPoints: [
          "The city was divided into a sacred zone dominated by the Virupaksha Temple complex and an administrative/royal zone containing the Royal Enclosure, Elephant Stables and palace buildings.",
          "Hampi Bazaar, the broad processional street leading from the Virupaksha Temple, was lined with market platforms and merchant stalls; Persian and Gujarati traders had their own quarters.",
          "The Queen’s Bath (an open pavilion with Islamic-inflected arches) and the Elephant Stables (a row of domed chambers for royal elephants) in the Zenana enclosure demonstrate sophisticated palace planning blending Dravidian and Islamic architectural elements.",
          "UNESCO’s inscribed “Group of Monuments at Hampi” covers an archaeological landscape of hundreds of structures; at least three-quarters of the ancient city’s buildings are ruined, but extensive remains of gateways, colonnades and pillared halls survive."
        ]
      },
      {
        title: "What the travelers actually saw",
        content: "Foreign visitors left highly detailed accounts of Vijayanagara's urban planning and wealth. The Persian envoy Abdur Razzaq described lavish court ceremonies featuring seven hundred women in the royal household, along with the presentation of rich silk robes and fine horses to visiting ambassadors. Both Razzaq and the Italian merchant Niccolò de' Conti agree that the city possessed extraordinary population density and wealth. While Portuguese travelogues are clearly colored by European wonder and contain occasional numerical exaggerations, they provide reliable independent confirmation of the city's general prosperity. All four major travelers—de' Conti, Razzaq, Paes, and Barbosa—agree that the metropolis was exceptionally wealthy, strongly defended by its stone walls, and served as a masterpiece of medieval urban planning.",
        bulletPoints: [
          "Abdur Razzaq described the king’s lavish court ceremonies with 700 women in the royal household and gifts of silk and horses to envoys. Both he and de’ Conti agree on the city’s extraordinary wealth and population.",
          "Portuguese accounts are coloured by European wonder and contain some exaggeration, but they provide independent confirmation of Vijayanagara’s prosperity — all four major travelers (de’ Conti, Razzaq, Paes, Barbosa) agree the city was exceptionally wealthy, well-defended and a marvel of urban planning."
        ]
      }
    ]
  },
  {
    id: "rulers",
    title: "Four Dynasties, One Empire",
    hook: "Sangama, Saluva, Tuluva, Aravidu — four dynasties, one city, and 300 years of Hindu statecraft.",
    image: "/images/rulers_vijay.png",
    sections: [
      {
        title: "Sangama (1336–1485): The founders",
        content: "The empire was founded in 1336 CE by two brothers, Harihara I and Bukka Raya I, former administrative lieutenants of the Delhi Sultanate who established their fortified capital on the Tungabhadra River as a bulwark against the southward expansion of the Bahmani Sultanate. The Sangama dynasty reached its peak under Deva Raya II, who ruled from 1422 to 1446 CE. He successfully repelled Bahmani invasions, extracted tribute from Sri Lanka, and actively patronized Telugu and Kannada literature. The Portuguese chronicler Antonio Pigafetta later referred to him in his records as the 'Emperor of the East Indies,' testifying to his regional fame. However, Sangama power weakened after the reign of Bukka II, with internal noble revolts culminating in a military coup by the general Saluva Narasimha Deva Raya in 1485 CE.",
        bulletPoints: [
          "Harihara I and Bukka Raya I — former lieutenants of the Delhi Sultanate — founded Vijayanagara in 1336 on the Tungabhadra, making it a fortified capital and a bulwark against Bahmani Sultanate expansion.",
          "The Sangama dynasty’s greatest king was Deva Raya II (1422–1446), who repelled Bahmani invasions, vassalized Sri Lanka, and patronised Telugu and Kannada literature. The Portuguese chronicler Antonio Pigafetta later called him “Emperor of the East Indies.”",
          "Sangama power weakened after Bukka II; internal revolts led to a coup by the general Saluva Narasimha Deva Raya in 1485."
        ]
      },
      {
        title: "Saluva (1485–1505) and Tuluva (1505–1570)",
        content: "The Saluva dynasty served as a brief, twenty-year stabilizing interlude before being overthrown by noble factions, paving the way for the Tuluva line. Krishnadevaraya, who ruled from 1509 to 1529 CE, is recognized as the empire's defining monarch. He subdued the Gajapati kingdom of Orissa, captured Malabar ports, defeated the Deccan Sultanates, and built the magnificent Vittala and Virupaksha temple complexes at Hampi. He was also a formidable scholar and poet, writing the Telugu epic Amuktamalyada and the Sanskrit drama Jambavati Kalyana. The Persian envoy Abdur Razzaq had earlier praised Deva Raya II, and sixteenth-century visitors wrote similarly of Krishnadevaraya's intellect. After his death, his brother Achyuta Deva Raya maintained the empire's borders despite mounting military pressure, commissioning the Achyutaraya Temple.",
        bulletPoints: [
          "The Saluva dynasty was a brief stabilising interlude; the Saluvas were quickly overthrown by noble factions and replaced by the Tuluva line.",
          "Krishnadevaraya (1509–1529) is the empire’s defining ruler. He subdued the Gajapati kingdom of Orissa, overran Malabar coastal ports, defeated all southern rivals, and built the Vittala and Virupaksha temple complexes at Hampi.",
          "He was equally formidable as a poet and scholar — fluent in Kannada, Telugu and Sanskrit, the author of the Telugu epic Amuktamalyada and the Sanskrit drama Jambavati Kalyana. Abdur Razzaq had earlier called Deva Raya II the greatest of kings; later visitors said the same of Krishnadevaraya.",
          "After Krishnadevaraya, his brother Achyuta Deva Raya (1529–1542) maintained the empire but with less military success; the Achyutaraya Temple at Hampi dates to his reign."
        ]
      },
      {
        title: "Aravidu (1570–1646): The long retreat",
        content: "The Aravidu dynasty came to power in the chaotic aftermath of the disastrous 1565 Battle of Talikota. The founding king, Tirumala, was forced to abandon the ruined capital of Hampi, gradually relocating the imperial seat to more defensible southern strongholds: first at Penukonda, then at Chandragiri, and finally at Vellore. Each successive move reflected the shrinking territorial borders of the empire under constant pressure from the Deccan Sultanates. Successive Aravidu kings ruled progressively smaller domains, maintaining their courtly traditions but suffering from internal rebellions by regional Nayaka governors. The empire formally ended in 1646 under relentless military conquests and political erosion, marking the conclusion of the last great medieval South Indian empire.",
        bulletPoints: [
          "The Aravidu dynasty came to power in the aftermath of the 1565 Battle of Talikota. Founding king Tirumala gradually abandoned Hampi for more defensible capitals at Penukonda, then Chandragiri, then Vellore.",
          "Successive Aravidu kings ruled progressively smaller territories under constant pressure from the Deccan Sultanates; the empire formally ended in 1646 under relentless military and political erosion."
        ]
      }
    ]
  },
  {
    id: "military",
    title: "War, Elephants & the Cannon",
    hook: "They started with elephants and ended with Portuguese artillery. The Deccan Sultans were always one step ahead.",
    image: "/images/military_vijay.png",
    sections: [
      {
        title: "A multi-ethnic army",
        content: "Vijayanagara's military organization was based on a feudal-style network, drawing troops from loyal samanta chieftains and Nayaka military commanders who provided infantry and cavalry in exchange for regional land-holding rights. The imperial army maintained a massive war elephant corps alongside extensive cavalry forces. The ruler Ibrahim Adil Shah II of Bijapur complained in his records that Vijayanagara possessed an 'infinite number' of horses, which were kept replenished through a lucrative horse trade with Arab merchants operating through western ports. The Persian envoy Abdur Razzaq estimated that the army contained over 1,000 war elephants and a million soldiers, figures now considered symbolic exaggerations by modern historians. The Italian merchant Niccolò de' Conti noted that the king commanded ninety thousand men fit to bear arms, confirming the formidable scale of their military.",
        bulletPoints: [
          "Vijayanagara’s armies drew from loyal samanta chieftains and Nayaka commanders who provided infantry and cavalry in exchange for territorial rights — a feudal-style military organisation.",
          "The empire maintained large elephant corps (both for war and ceremony) and, crucially, extensive cavalry. Ibrahim Adil Shah II of Bijapur complained that Vijayanagara had an “infinite number” of horses, kept replenished by Arab horse-trade through western ports.",
          "Abdur Razzaq estimated over 1,000 war elephants and more than a million men — figures considered symbolic exaggerations, but indicative of the scale that impressed contemporary observers.",
          "De’ Conti remarked on a king who “had 90,000 men fit to bear arms” — again likely inflated, but Vijayanagara was formidable enough to check all surrounding sultanates for two centuries."
        ]
      },
      {
        title: "The adoption of gunpowder",
        content: "During the sixteenth century, Vijayanagara adapted to changing military technologies by integrating firearms and artillery into its forces. The state constructed large iron foundries in the capital to produce heavy cannons; the massive Kulagi cannon, which remains at Hampi today, stands as physical evidence of this domestic production. Portuguese adventurers were hired to train the king's soldiers in matchlock musketry, and the empire even commissioned Portuguese vessels for naval operations along the western coast. Despite these technological innovations, the 1565 coalition of Deccan Sultanates—who possessed longer experience with gunpowder and superior artillery tactics—overwhelmed the Vijayanagara army at the Battle of Talikota. The adoption of firearms had simply come too late and was too incomplete to save the state.",
        bulletPoints: [
          "In the 16th century Vijayanagara adopted firearms and artillery, building foundries to produce large cannons — the massive Kulagi cannon at Hampi survives, now immobile.",
          "Portuguese adventurers trained Vijayanagaran soldiers in matchlock musketry; the empire even commissioned Portuguese vessels for military operations, a rare example of Hindu-Christian military partnership in medieval India.",
          "Despite these innovations, the 1565 coalition of Deccan Sultans — who had longer experience with gunpowder warfare — overwhelmed the Vijayanagara army at Talikota; the adoption of firearms had come too late and too incompletely."
        ]
      },
      {
        title: "Fortifications",
        content: "The defense of the empire was anchored by Hampi's exceptional natural geography. The capital's location along the wide Tungabhadra River, surrounded by rugged granite hillscapes and the high peak of Matanga Hill, provided a natural fortress that was further strengthened by a complex seven-ring stone fortification system described by the envoy Abdur Razzaq. The walls were constructed using massive, dry-masonry stone blocks that fit together without mortar. To protect the empire's wider borders, the state maintained heavily fortified frontier outposts at Raichur, Penukonda, and other strategic gateways, extending this defensive network across the Deccan plateau to monitor the borders shared with the rival sultanates.",
        bulletPoints: [
          "Hampi’s natural defences — the Tungabhadra river, granite hillscapes, and Matanga hill — were amplified by the seven-ring stone fortification system described by Razzaq.",
          "Fortified outposts at Raichur, Penukonda and other frontier positions extended this defensive network across the empire’s borders."
        ]
      }
    ]
  },
  {
    id: "economy",
    title: "The Richest Bazaars in the World",
    hook: "Persians, Portuguese, Gujaratis and Arabs all traded in Vijayanagara’s markets. The city had something everyone wanted.",
    image: "/images/economy_vijay.png",
    sections: [
      {
        title: "Irrigation and agriculture",
        content: "The agricultural system of the Tungabhadra River valley was the foundation of Vijayanagara's economic success. Engineers constructed a highly sophisticated network of stone-lined canals, aqueducts, and massive irrigation tanks—some dating to earlier dynasties but expanded and maintained by imperial resources. The state cultivated major crops like rice, sugarcane, millet, pulses, and cotton. The royal treasury levied a standardized land tax and actively promoted agricultural reclamation by offering tax incentives for clearing forests. Surviving inscriptions frequently praise kings for bringing barren lands under active cultivation through new canal infrastructure. The resulting agricultural surplus generated the revenues that funded both the empire's extensive military campaigns and the construction of Hampi's magnificent temples.",
        bulletPoints: [
          "The Tungabhadra valley around Hampi was intensively cultivated using an elaborate system of tanks and canals, some dating to earlier dynasties but extended and maintained by Vijayanagara engineers.",
          "Major crops: rice, sugarcane, millet, pulses and cotton. The state levied land tax and actively promoted agricultural reclamation; inscriptions praise kings for bringing new land under cultivation through canal construction.",
          "Agricultural surplus funded military campaigns and temple construction — the economic engine beneath the empire’s cultural brilliance."
        ]
      },
      {
        title: "The horse trade and strategic monopolies",
        content: "The most strategically vital trade sector for Vijayanagara was the import of Arabian warhorses from the Persian Gulf. Because high-quality horses could not be successfully bred in the tropical climate of peninsular India, the cavalry depended entirely on imports. The state monopolized the trade routes connecting the Deccan to the eastern and western coasts, controlling ports on both the Coromandel coast (such as Pulicat and Mylapore) and the Malabar coast through royal governors. The empire exported valuable commodities like spices, textiles, pearls, and diamonds from the famous Golconda mines. Imports were dominated by warhorses, copper, tin, finished silks, and, after the arrival of Vasco da Gama in 1498, European luxury goods transported along Portuguese-controlled sea lanes.",
        bulletPoints: [
          "Vijayanagara’s most strategically important trade was in warhorses, imported from Arabia and the Persian Gulf — essential for cavalry since horses could not easily be bred in peninsular India.",
          "The empire effectively monopolised the Deccan–East Coast trade network, controlling ports on both the Coromandel (Pulicat, Mylapore) and Malabar coasts through loyal governors.",
          "Exports: spices, textiles, pearls and gemstones (Golconda diamonds and Krishna river sand were prized globally). Imports: horses, metals, finished cloth and, after 1498, European goods via Portuguese-controlled sea routes."
        ]
      },
      {
        title: "Gold coins and cosmopolitan markets",
        content: "To support its massive volume of commerce, the empire minted high-purity gold coins called varahas, alongside smaller silver and copper coins known as kalivana and tangkas. These coins circulated widely across South India and have been discovered in archaeological sites as far away as Arabia, confirming their status as a trusted international currency. Trade was managed by powerful merchant guilds, including the Nagarathar merchants and specialized weaver guilds, operating under royal charters. Contemporary travelers consistently describe Hampi's bazaars as overflowing with gold, jewels, and luxury goods; the Portuguese visitor Domingo Paes wrote of market streets lined with thousands of shops and filled with foreign merchants, showing that the city's immense wealth was physically visible in its bustling streets.",
        bulletPoints: [
          "The empire minted gold varaha and kalivana coins, found across South India and as far as Arabia, attesting to their role as a trusted commercial currency.",
          "Market guilds — the Nagarathar merchants, weaver guilds (Thotalnadu) and the Komti and Beri banking communities — financed trade expeditions and collected dues under royal oversight.",
          "Contemporary observers consistently describe Vijayanagara’s bazaars as overflowing with goods and gold; Paes wrote of “thousands of temples” alongside market streets full of foreign merchandise. The city’s wealth was not abstract — it was physically visible in its streets."
        ]
      }
    ]
  },
  {
    id: "arts",
    title: "Temples, Music & the Vittala",
    hook: "The Vittala Temple’s stone pillars ring like bells when struck. Nobody knows exactly how.",
    image: "/images/arts.png",
    sections: [
      {
        title: "Architecture: a synthesis of forms",
        content: "The ruins of Hampi contain over 1,600 surviving monuments, representing the largest concentration of medieval Hindu architectural remains in the world. The Vijayanagara style of architecture is characterized by a synthesis of forms. It combined traditional Dravidian temple elements—such as tall, elaborately carved gopurams, pillared mandapas, and garbhagriha sanctums—with Islamic decorative motifs in secular buildings. The Queen's Bath, with its pointed arches and plasterwork, and the Elephant Stables, with their domed chambers, are the most prominent examples of this artistic fusion. The fifteenth-century Vittala Temple stands as the empire's architectural masterpiece, famous for its stone chariot in the courtyard featuring working stone wheels, and its musical pillars that sound different notes when struck, representing a mystery of material engineering.",
        bulletPoints: [
          "Over 1,600 monuments survive at Hampi — the largest concentration of medieval Hindu architectural remains anywhere in the world.",
          "The Vijayanagara style is a synthesis: Dravidian temple forms (tall, elaborately carved gopurams; pillared mandapas; garbhagriha sanctums) combined with Islamic decorative elements in secular buildings — the Queen’s Bath’s pointed arches and the Elephant Stables’ domes are the most visible examples of this fusion.",
          "The Vittala Temple (15th century) is the empire’s architectural masterpiece: its stone chariot in the courtyard (with actual working stone wheels) and its musical pillars — each sounding a different note when struck, a mystery of material engineering not fully explained — have made it the most visited structure at Hampi.",
          "The Hazara Rama Temple’s walls carry relief scenes from the entire Ramayana — a uniquely complete visual narrative carved in stone, functioning as both religious text and royal propaganda."
        ]
      },
      {
        title: "The Carnatic music tradition",
        content: "The Carnatic classical music tradition was formalized and institutionalized under the patronage of the Vijayanagara court. The great saint-composers Purandara Dasa and Kanakadasa, both active during the reign of Krishnadevaraya, are revered as the founding fathers of the tradition; Purandara Dasa systematically codified the grammar of Carnatic music, creating a graded curriculum that remains the basis of South Indian classical music instruction today. Temple dance, the direct precursor of modern Bharatanatyam, and devotional songs called devaranamas were supported by royal endowments in all major Hampi temples. Krishnadevaraya himself was the tradition's most prominent patron and practitioner, composing Telugu poetry and Sanskrit plays that demonstrate high literary sophistication.",
        bulletPoints: [
          "Purandara Dasa (1484–1564) and Kanakadasa, both active under Krishnadevaraya, are considered the fathers of the Carnatic classical music tradition; Purandara Dasa codified the grammar of Carnatic music into a systematic curriculum that is still the basis of South Indian classical instruction today.",
          "Temple dance (a direct precursor of Bharatanatyam), devotional song (devaranamas), and elaborate ritual performance were institutionalised and supported by royal patronage at every major Hampi temple.",
          "Krishnadevaraya himself was the tradition’s most prominent royal patron and practitioner: his Telugu poetry (Amuktamalyada) and Sanskrit drama (Jambavati Kalyana) demonstrate genuine literary sophistication, not merely ceremonial composition."
        ]
      },
      {
        title: "Sculpture and bronzes",
        content: "Excavations at Hampi have recovered numerous well-preserved bronze icons depicting deities like Narasimha, Krishna, and Durga, illustrating the continued vitality of the South Indian lost-wax metal-casting tradition. In stone sculpture, the colossal monolithic Lakshmi Narasimha statue, standing over 6.7 meters tall, dates to the reign of Krishnadevaraya, representing one of the largest monolithic carvings in India. Literature flourished simultaneously in multiple languages; Telugu works like Allasani Peddana's Manucharitra, considered the first major Telugu prabandha epic, flourished alongside Kannada and Sanskrit court traditions, marking a multilingual cultural renaissance.",
        bulletPoints: [
          "Hampi’s excavations have yielded numerous well-preserved bronze icons — Narasimha, Krishna, Durga — exemplifying the continued vitality of the South Indian metal-casting tradition.",
          "The colossal monolithic Narasimha at Hampi (one of the largest monolithic carvings in India, standing over 6.7 metres) dates to Krishnadevaraya’s reign.",
          "Literature thrived across languages simultaneously: Telugu (Allasani Peddana’s Manucharitra, considered the first major Telugu epic), Kannada and Sanskrit all had active court traditions, a genuine multilingual cultural flowering."
        ]
      }
    ]
  },
  {
    id: "decline",
    title: "Talikota & the Long Fall",
    hook: "In 1565, five sultanates allied against one empire. Vijayanagara never recovered.",
    image: "/images/decline_vijay.png",
    sections: [
      {
        title: "The Battle of Talikota (January 1565)",
        content: "In January 1565, a coalition of five allied Deccan Sultanates—Bijapur, Bidar, Ahmadnagar, Golconda, and Berar—joined forces to confront the Vijayanagara army, which was led by the aging de facto regent Rama Raya. During the battle, Rama Raya was captured and executed on the field. Deprived of its commander, the Vijayanagara army collapsed, allowing the allied sultans to march unopposed on the capital. The sack of the undefended city of Vijayanagara lasted for months, with archaeological surveys confirming the systematic burning and destruction of public structures. Following the withdrawal of the sultanate armies, the city was abandoned. Contemporary Venetian and Persian sources describe the fall of the capital, and UNESCO notes the pillage as a major documented historical disaster.",
        bulletPoints: [
          "The battle was fought between a coalition of five Deccan Sultanates (Bijapur, Bidar, Ahmadnagar, Golconda and Berar) and the Vijayanagara army led by Rama Raya, the de facto regent.",
          "Rama Raya was captured and executed on the battlefield; without its commander the Vijayanagara army collapsed. The allied sultans marched on the undefended capital.",
          "The sack of Vijayanagara lasted months — archaeological evidence confirms deliberate burning and destruction of structures. After the armies withdrew, the city was effectively abandoned.",
          "Venetian and Persian sources describe the fall; UNESCO notes the “final pillage” as a historically documented event. The ruins visible at Hampi today are partly the result of this destruction."
        ]
      },
      {
        title: "The long retreat",
        content: "Following the destruction of the capital, the successor kings of the Aravidu dynasty, led by Tirumala and his descendants, relocated the imperial administration further south, establishing successive capitals at Penukonda, Chandragiri, and Vellore. Each relocation reflected the shrinking borders of their territory under pressure from the Sultanates. Despite these losses, cultural and religious traditions persisted in these reduced capitals and in the independent Nayaka successor states (such as Madurai, Thanjavur, and Ikkeri) established by former Vijayanagara governors. Recent research indicates that a large portion of the capital's population and administrative class fled south after 1565, reconstituting themselves in these southern kingdoms, making the fall of the city less an ending than a cultural dispersal.",
        bulletPoints: [
          "Successor kings of the Aravidu dynasty — Tirumala and his descendants — moved the capital progressively southward: Penukonda, then Chandragiri, then Vellore, each move reflecting shrinking territory.",
          "Cultural and religious continuity persisted in these reduced capitals and in the Nayaka successor states (Madurai, Thanjavur, Ikkeri) that former Vijayanagara governors established across South India.",
          "Recent research supports the interpretation that a large part of Vijayanagara’s population and administrative class fled south after 1565 and reconstituted themselves in these Nayaka kingdoms — making Vijayanagara’s fall less an ending than a dispersal."
        ]
      },
      {
        title: "Debates and legacy",
        content: "Historians continue to debate whether the decline of the empire was a sudden catastrophe or a gradual process of political erosion. Both interpretations are accurate at different scales: the capital city collapsed suddenly in 1565, while the empire's administrative structures and cultural legacy dispersed slowly over the subsequent century. Modern scholars reject the framing of Vijayanagara as a purely 'Hindu reactionary' state against Islam. They point out that the empire tolerated Muslim merchants, employed Muslim cavalry commanders, used Persian administrative terms in its treasury, and integrated Islamic arches and domes into its secular architecture. Today, Hampi's UNESCO designation as a World Heritage site in 1986 reflects its status as one of Asia's most significant pre-modern urban ruins.",
        bulletPoints: [
          "Historians debate whether the Vijayanagara decline was a sudden catastrophe or a slower erosion of power — both were true at different scales: the capital collapsed suddenly; the empire’s administrative and cultural legacy dispersed gradually.",
          "The framing of Vijayanagara as a purely “Hindu reactionary” empire against Islam is rejected by modern scholars: the empire tolerated and employed Muslim merchants, used Persian administrative language in the treasury, and incorporated Islamic architectural elements in secular buildings.",
          "Hampi’s UNESCO designation as a World Heritage site in 1986 reflects both its archaeological importance and its status as one of the most significant pre-modern urban ruins in Asia — a city that foreign travelers in its own time called the richest in the world."
        ]
      }
    ]
  }
];
