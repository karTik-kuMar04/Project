export interface SubpageSection {
  title: string;
  content: string;
  bulletPoints: string[];
}

export interface MauryaSubpage {
  id: string;
  title: string;
  hook: string;
  image: string;
  sections: SubpageSection[];
}

export const mauryaSubpages: MauryaSubpage[] = [
  {
    id: "chandragupta",
    title: "The Founder: Chandragupta",
    hook: "A 21-year-old with an army, an adviser and a plan to overthrow the most powerful dynasty in India.",
    image: "/images/chandragupta.png",
    sections: [
      {
        title: "Overthrowing the Nandas",
        content: "In the late fourth century BCE, the Ganges Plain was dominated by the Nanda dynasty of Magadha, a regime renowned for its staggering wealth and vast standing armies, yet widely despised by its subjects for oppressive rule and heavy taxation. Seizing upon this widespread discontent, a young and ambitious military commander named Chandragupta Maurya orchestrated one of the most audacious political coups in ancient history. Supported by his brilliant and calculating chief adviser, Chanakya (also known as Kautilya), Chandragupta recruited a diverse coalition of frontier forces, mercenaries, and disgruntled local clans. Together, they launched a series of calculated campaigns that culminated in the siege and capture of the Nanda capital, Pataliputra, around 321 BCE. Believed to have been only in his early twenties at the time, Chandragupta claimed the throne of Magadha, dismantling the Nanda dynasty and laying the foundations of the Mauryan Empire.",
        bulletPoints: [
          "The Nanda dynasty of Magadha was the dominant power in the Ganges Plain before the Mauryas — wealthy, powerful, and reportedly despised.",
          "Chandragupta Maurya, backed by his strategist Chanakya (Kautilya), raised an army and overthrew the Nandas around 321 BCE, taking control of Magadha and its capital Pataliputra.",
          "Chandragupta was likely in his early twenties at the time — making this one of the most audacious political coups in ancient history."
        ]
      },
      {
        title: "The confrontation with Seleucus",
        content: "Following the death of Alexander the Great in 323 BCE, his vast Macedonian empire fragmented into rival successor states, with his general Seleucus I Nicator inheriting the eastern satrapies, including the territories bordering the northwestern Indian subcontinent. Recognizing the vulnerability of this frontier, Chandragupta marched northwest to challenge Seleucus militarily around 305–303 BCE. The resulting conflict ended in a landmark treaty that reshaped the geopolitical landscape of the ancient world. Rather than fighting a costly war, Seleucus agreed to cede key territories west of the Indus River—encompassing parts of modern-day Afghanistan, Balochistan, and eastern Iran—to the Mauryan state. In exchange, Chandragupta gifted Seleucus 500 formidable war elephants. This trade secured the empire's northwestern frontier and provided Seleucus with the military force that would later prove decisive at the Battle of Ipsus in 301 BCE.",
        bulletPoints: [
          "After Alexander the Great’s death (323 BCE), his general Seleucus I inherited the eastern satrapies including parts of the northwest Indian subcontinent.",
          "Chandragupta challenged Seleucus militarily around 305–303 BCE. The result was a treaty: Seleucus ceded territories west of the Indus (including parts of modern Afghanistan) in exchange for 500 war elephants.",
          "This deal shaped the northwest frontier of the empire and gave Seleucus’s forces a formidable war-elephant corps that later proved decisive at the Battle of Ipsus (301 BCE) in the Greek world."
        ]
      },
      {
        title: "The empire at its founding",
        content: "By the time Chandragupta Maurya's reign drew to a close around 297 BCE, the Mauryan Empire had achieved unprecedented territorial scale, stretching from the Himalayan foothills in the north to the Vindhya Range in the south, and from the Indus River valley in the west to the Ganges delta in the east. His son and successor, Bindusara, continued this expansionist policy, pushing the imperial borders southward deep into the Deccan plateau, halting only at the borders of the independent kingdom of Kalinga on the eastern coast. In a striking departure from imperial power, Chandragupta abdicated his throne in favor of Bindusara. Influenced by the Jain saint Bhadrabahu, the former emperor embraced a life of asceticism as a Jain monk. He traveled south to Shravanabelagola in modern Karnataka, where he peacefully fasted to death in accordance with the sacred Jain ritual of sallekhana.",
        bulletPoints: [
          "By the end of Chandragupta’s reign (297 BCE), the empire stretched from the Himalayan foothills in the north to the Vindhya Range in the south, and from the Indus in the west to the Ganges delta in the east.",
          "His son Bindusara (297–268 BCE) continued southward expansion into the Deccan, but stopped short of Kalinga (modern Odisha).",
          "Chandragupta abdicated in favour of Bindusara and, according to Jain tradition, became a monk under the saint Bhadrabahu, traveling south to Shravanabelagola in Karnataka where he fasted to death — an act of Jain renunciation called sallekhana."
        ]
      }
    ]
  },
  {
    id: "pataliputra",
    title: "Pataliputra: Capital of the World",
    hook: "The largest and most sophisticated city in the ancient world had walls made entirely of wood — and they were extraordinary.",
    image: "/images/pataliputra.png",
    sections: [
      {
        title: "Scale and layout",
        content: "Pataliputra, situated near modern-day Patna in Bihar, was the heart of the Mauryan Empire, strategically positioned at the confluence of the Ganges, Son, and Gandak rivers to form a natural 'water fort' (jaladurga). The Greek ambassador Megasthenes, who resided at the imperial court, described Pataliputra as a colossal rectangular metropolis stretching fifteen kilometers in length and three kilometers in width. The entire city was ringed by a water-filled moat 180 meters wide that served for both defense and sewage disposal. Archaeological excavations at Kumrahar and Bulandi Bagh have uncovered massive wooden palisade posts and mudbrick foundations, validating Megasthenes' descriptions of a city built primarily of timber, brick, and thatch rather than stone. This riverine location made Pataliputra the supreme commercial hub of northern India, controlling all trade moving through the fertile Gangetic plain.",
        bulletPoints: [
          "Pataliputra (modern Patna, Bihar) sat at the strategic confluence of the Ganges, Son and Gandak rivers — a natural “water fort.”",
          "Greek ambassador Megasthenes described a rectangular city roughly 15km long and 3km wide, surrounded by a 180m-wide moat and a wooden palisade wall ringed by 570 towers and 64 gates.",
          "This was not a city of stone palaces but of timber, brick and thatch — archaeologists at Kumrahar and Bulandi Bagh have excavated the actual wooden palisade posts and mudbrick walls that confirm Megasthenes’ account.",
          "The city’s river position made it the hub of Ganges basin trade; no important goods could move through the Gangetic plain without passing through or near it."
        ]
      },
      {
        title: "The wooden fortifications",
        content: "The defensive system of Pataliputra was a marvel of ancient military engineering, constructed entirely from local timber and sun-dried bricks. The outer wall consisted of a timber palisade made of massive, sharpened logs set vertically in dense rows, reinforced with rammed earth and fronted by the city's wide moat. To repel invaders, the wall was pierced by arrow slits at regular intervals and topped by 570 elevated wooden towers, which gave archers and watchmen a commanding view of all approaches. Access to the metropolis was strictly controlled through sixty-four massive wooden gates, each flanked by fortified guardhouses. Despite its immense scale, archaeological surveys have confirmed the total absence of stone structures like temple towers or brick arches in this period. The entire fortification system was a triumph of woodcraft and brickwork, perfectly adapted to the riverine clay of the Gangetic plain.",
        bulletPoints: [
          "The outer wall was a timber palisade — sharpened logs set vertically in rows, reinforced with earth, fronted by the moat.",
          "Arrow slits ran through the wall at intervals; elevated towers (570 in total) gave archers and watchmen commanding views over the approaches.",
          "Massive wooden gates flanked by guardhouses served as controlled entry points. The main ceremonial gate likely faced east–west along the principal road.",
          "Nothing resembling stone temple towers, brick arches or ornate masonry appears in the archaeology of this period — the entire defensive system was timber-and-brick only."
        ]
      },
      {
        title: "Inside the city: palace, markets and streets",
        content: "Inside Pataliputra's walls, the royal quarter housed a spectacular palace, the centerpiece of which was a grand audience hall supported by eighty polished wooden columns arranged in neat rows. Excavated at Kumrahar, these column bases remain the primary physical evidence of Mauryan palace architecture, which was so durable that the Chinese pilgrim Fa-Hien noted the largely wooden structure still standing centuries later. A broad, brick-paved ceremonial road ran east to west through the city, connecting the palace with bustling open-air markets that traded textiles, spices, pottery, and metalware. These markets operated under strict state regulations outlined in the Arthashastra, which mandated standardized weights, measures, and customs duties. Outside the elite palace zone lay the residential sectors of commoners, characterized by simple wood-and-brick houses, public wells, cooking hearths, and small local shrines.",
        bulletPoints: [
          "The royal quarter contained a grand audience hall supported by 80 wooden columns arranged in rows — the foundations were excavated at Kumrahar and remain the defining physical evidence of Mauryan palace architecture.",
          "The Chinese pilgrim Fa-Hien (visiting centuries later) still noted a largely wooden palace at the site, suggesting the construction tradition persisted.",
          "Streets were likely dirt or brick-paved near the palace; the main ceremonial road ran east–west through the city (per Megasthenes).",
          "Open-air markets near the city centre traded textiles, spices, pottery and metalware. The Arthashastra describes detailed market regulations, weights and measures, and customs duties — implying a sophisticated commercial infrastructure.",
          "Residential areas of commoners lay outside the palace zone: simple wood-and-brick houses, cooking hearths, wells, and small shrines."
        ]
      }
    ]
  },
  {
    id: "military",
    title: "The Military Machine",
    hook: "600,000 infantry. 30,000 cavalry. 9,000 war elephants. And a manual that told you exactly how to deploy them.",
    image: "/images/military.png",
    sections: [
      {
        title: "The four-part army (chaturanga)",
        content: "The Mauryan state maintained one of the largest standing armies of antiquity, a professional military force that marked a significant departure from the seasonal peasant levies of earlier eras. Ancient Greek sources estimate Chandragupta’s forces at 600,000 infantry, 30,000 cavalry, and 9,000 war elephants. While these numbers may be exaggerated, they reflect the unprecedented scale of Mauryan military organization. The army was structured according to the traditional Indian concept of chaturanga, meaning 'four parts.' This tactical arrangement placed terrifying war elephants at the vanguard, followed by central blocks of disciplined infantry, with swift cavalry shielding the flanks and two-horse war chariots deployed for shock attacks. Additionally, the state operated a dedicated river navy on the Ganges and its major tributaries, ensuring the security of vital inland trade routes and imperial supply lines.",
        bulletPoints: [
          "Ancient accounts give Chandragupta’s army as 600,000 infantry, 30,000 cavalry and 9,000 elephants — figures almost certainly inflated but indicative of the scale.",
          "The army was organised as chaturanga (four parts): war elephants at the front, infantry in the centre, cavalry flanking on each side, and chariots hitting the flanks.",
          "It was a standing professional force, not a seasonal levy — an innovation in the subcontinent’s military history.",
          "A river navy operated on the Ganges and its tributaries, protecting trade and supply lines."
        ]
      },
      {
        title: "War elephants",
        content: "War elephants were the supreme tactical weapon of the Mauryan army, designed to break enemy lines and spread terror. These Asian elephants were draped in simple protective cloths and guided by keepers (mahouts) riding bare-necked, carrying one or two archers or spearmen. Unlike the elaborate, heavy ornamental structures of later centuries, Mauryan elephants carried simple wooden platforms or were ridden bareback to maximize mobility. Chandragupta’s transfer of 500 war elephants to Seleucus I demonstrates how central these beasts were to Mauryan diplomacy and geopolitical power. Recognizing their value, the state strictly regulated elephant management; the Arthashastra contains detailed sections outlining the preservation of elephant forests, training regimens, and veterinary care, establishing a state-run monopoly over these powerful animals.",
        bulletPoints: [
          "Elephants were the Mauryan army’s most feared element: Asian elephants caparisoned in cloth, carrying one or two archers or spearmen on their necks, charging enemy formations with their body bulk and tusk-tips that may have been metal-capped.",
          "Chandragupta gave Seleucus I 500 war elephants as part of the peace treaty — a measure of how central they were to the empire’s power projection.",
          "Elephant management was regulated by the state: the Arthashastra has an entire section on elephant forests, keepers (mahouts) and veterinary care.",
          "Elephants wore wooden howdahs (platforms) or rode bare-necked; the elaborate ornamental howdahs of later periods had not yet developed."
        ]
      },
      {
        title: "Infantry weapons, armor and shields",
        content: "Mauryan infantrymen were equipped with a lethal array of iron weapons, representing the state's advanced metallurgy. Common soldiers wielded long, straight iron swords, thrusting pikes, javelins, and powerful broadbows that shot bamboo arrows capable of piercing standard shields. While cavalry and elephant-mounted archers utilized shorter composite bows for mobility, foot soldiers relied on massive longbows for range. Body armor was minimal by later standards, consisting of boiled leather or padded cotton cuirasses, simple metal skullcaps, and occasional iron greaves. For defense, soldiers carried large circular shields made of wood and covered in tough bull hide. Officers were distinguished by decorative plumes and metal insignia, while the rank-and-file wore simple, unstandardized tunics of dyed brown or white cotton paired with cloth turbans.",
        bulletPoints: [
          "Common infantry weapons: iron swords (straight or slightly curved), long pikes, bows and arrows, and javelins.",
          "Cavalry and elephant-mounted archers used shorter composite bows suited for use on horseback or elevated positions.",
          "Armor was minimal by later standards: leather or padded cloth cuirasses, simple metal skullcaps or leather helmets, and metal greaves on some soldiers.",
          "Foot soldiers carried large circular shields of wood covered in hide — the standard defensive item of the Mauryan infantryman.",
          "Officers had more ornament: plumes, metal insignia; soldiers wore simple dyed tunics (browns, whites) and cloth turbans, with no standardized uniform colour known."
        ]
      },
      {
        title: "Cavalry and chariots",
        content: "Although the Mauryan army was anchored by its infantry and elephants, cavalry played an increasingly vital role in securing the empire's vast borders. Because high-quality horses could not easily be bred in the humid climate of India, the state imported steeds from Persia and Central Asia via trade routes running through the Khyber Pass. Mauryan cavalrymen rode with simple leather saddles and pommels, armed with long lances and short bows. In contrast, war chariots were beginning to decline in tactical importance by the third century BCE. Deployed as two-horse carriages carrying a driver and a spear-wielding warrior, these chariots were increasingly archaic compared to the mobile cavalry forces. They were primarily used to break static infantry formations rather than engaging in fluid, open-field maneuvers.",
        bulletPoints: [
          "Cavalry horses were likely imported — the Arthashastra notes the difficulty of breeding horses in India, and trade routes through the Khyber Pass maintained supply from Central Asia and Persia.",
          "Cavalrymen rode with leather saddles and pommel, armed with lances and bows.",
          "Two-horse chariots carrying a driver and a warrior (armed with javelin or spear) were present but increasingly archaic by the 3rd century BCE — used mainly against infantry rather than in full cavalry engagements."
        ]
      }
    ]
  },
  {
    id: "arthashastra",
    title: "Kautilya’s State",
    hook: "The world’s oldest manual of statecraft described a government that was efficient, ruthless and strikingly modern.",
    image: "/images/arthashastra.png",
    sections: [
      {
        title: "Chanakya and the Arthashastra",
        content: "The administration of the Mauryan Empire was guided by the principles of the Arthashastra, a comprehensive treatise on statecraft, economic policy, military strategy, and espionage. The text is traditionally attributed to Kautilya, also known as Chanakya or Vishnugupta, the chief adviser who guided Chandragupta's rise to power. Predating Machiavelli's The Prince by nearly 1,800 years, the Arthashastra is far more systematic, detailing the practical mechanics of running an empire. It covers everything from selecting loyal ministers and managing the royal treasury to regulating markets and maintaining a secret service. Chanakya himself is historically depicted as a frugal, self-disciplined Brahmin scholar clad in simple saffron or ochre robes, presenting a deliberate visual contrast to the opulent, jewel-encrusted regalia of the emperors he advised.",
        bulletPoints: [
          "Kautilya (also known as Chanakya or Vishnugupta) was Chandragupta’s chief adviser and the author of the Arthashastra — a comprehensive treatise on statecraft, economic policy, military strategy and espionage.",
          "The text covers the structure of the state in extraordinary detail: how to select ministers, manage treasury, regulate markets, conduct diplomacy and run a spy network.",
          "It is the earliest surviving work of its kind in the world — predating Machiavelli’s The Prince by nearly 1,800 years, and considerably more systematic.",
          "Chanakya is traditionally depicted in simple saffron or ochre scholarly robes — a deliberate visual contrast to the richly dressed emperor he served."
        ]
      },
      {
        title: "Administrative structure",
        content: "The Mauryan Empire featured a highly centralized, bureaucratic administration designed to govern diverse territories. The state was divided into key provinces, each governed by a royal prince (Kumara) serving as viceroy, ensuring that the imperial family maintained a direct stake in regional stability. Under Emperor Ashoka, the four primary provincial capitals were Taxila in the northwest, Ujjain in the west, Tosali in the east, and Suvarnagiri in the south. At the center of this network, the emperor ruled from Pataliputra, assisted by a council of ministers (Mantriparishad) and high-ranking officials called Amatyas, who managed separate departments for finance, law, foreign affairs, and military logistics. To fund this massive administration, the old Vedic system of voluntary gift offerings (bali) was replaced by a system of compulsory, standardized tribute.",
        bulletPoints: [
          "The empire was divided into provinces, each governed by a royal prince (Kumara) as viceroy — ensuring that the highest regional authority had a personal stake in imperial loyalty.",
          "Under Ashoka, the four main provincial capitals were Taxila (northwest), Ujjain (west), Tosali (east/Kalinga) and Suvarnagiri (south).",
          "At the centre, the emperor held court at Pataliputra with a council of ministers (Mantriparishad). Senior officials (Amatyas) managed finance, foreign affairs, law and military logistics separately.",
          "The voluntary gift offering (bali) to the king had by this period become compulsory tribute, though no organised general tax system existed yet in the modern sense."
        ]
      },
      {
        title: "Spies, inspectors and currency",
        content: "To maintain control over its vast territories, the Mauryan state established an extensive spy network, with secret agents embedded at all levels of society, from royal courts to market stalls, reporting through a secure communication chain known as the 'Fourth-Messenger.' The state's economic interests were protected by specialized officials, including the Samaharta (chief tax collector) and the Shulka (customs officer), who supervised trade and municipal markets. Currency was strictly standardized across the empire using silver punch-marked coins bearing imperial symbols of the sun, a wheel, an elephant, and an arched hill. These coins have been excavated from the Khyber Pass to the deep south, proving the high degree of economic integration achieved by the Mauryan bureaucracy and its mobile civil service of inspectors.",
        bulletPoints: [
          "The Arthashastra describes an extensive spy network — agents embedded in every level of society, from the palace to market stalls, reporting to the king through the “Fourth-Messenger” communication chain.",
          "Specialist officials included the Samaharta (tax collector), the Shulka (customs officer), and municipal officers who regulated city markets, weights and measures.",
          "Chandragupta standardised currency across the empire: silver punch-marked coins bearing symbols of the wheel, elephant, sun and arched hill. These replaced the earlier fragmented regional coin systems.",
          "The same coins have been found from the northwest frontier to the Deccan, confirming economic integration across a vast territory.",
          "Legal courts, treasury offices, and a civil service of inspectors tied the provinces to the centre — a bureaucratic apparatus that made the Mauryan state the most administratively complex in South Asian history to that point."
        ]
      },
      {
        title: "Symbols of imperial authority",
        content: "Mauryan imperial authority was projected through a carefully curated set of visual symbols designed to emphasize the emperor's absolute sovereignty. When appearing in public, the monarch rode upon a magnificently decorated war elephant or a golden chariot, carrying a ceremonial mace or spear, and was always shaded by a royal umbrella (Chhatra)—the universal symbol of cosmic and political rule. High officials wore distinct tilak markings on their foreheads to denote their caste and administrative rank, while the emperor wore a jeweled diadem or a decorated silk turban paired with a rich, gold-brocaded tunic. To preserve historical accuracy in reconstructing this era, care must be taken to avoid anachronisms: Mughal-style crowns, Rajput robes, and even the famous Ashokan Dharma Chakra on banners did not exist during the early, military-led phase of the empire.",
        bulletPoints: [
          "The emperor rode on a decorated elephant or chariot, carried a ceremonial mace or spear, and was shaded by a royal umbrella (Chhatra) — a visible sovereignty symbol.",
          "Officials wore caste tilak markings on their foreheads; the emperor wore a jewelled diadem or decorated turban and rich brocaded tunic.",
          "What should not appear: Mughal-style crowns, the later Ashokan Dharma Chakra on banners, or any symbol from after the Mauryan period."
        ]
      }
    ]
  },
  {
    id: "international",
    title: "India Meets the Greek World",
    hook: "While Alexander’s generals carved up his empire in the west, Chandragupta was playing the same game east of the Indus.",
    image: "/images/international.png",
    sections: [
      {
        title: "The Seleucid treaty and its consequences",
        content: "The peace treaty signed between Chandragupta Maurya and Seleucus I Nicator around 303 BCE stands as one of the most significant diplomatic pacts of the ancient world. Following a series of frontier skirmishes along the Indus River, the Macedonian ruler agreed to cede the vast eastern satrapies of Arachosia, Gedrosia, and Paropamisadae—encompassing modern-day Afghanistan, Balochistan, and eastern Iran—to the Mauryan state. In return, Chandragupta provided Seleucus with 500 trained war elephants. This transaction had massive geopolitical consequences in the West, as these elephants proved decisive in defeating the rival general Antigonus at the Battle of Ipsus in 301 BCE, shaping the Hellenistic world. The treaty was further cemented by a marriage alliance between the two royal houses, initiating decades of peaceful diplomatic exchange.",
        bulletPoints: [
          "The peace treaty between Chandragupta and Seleucus I (c. 305–303 BCE) was one of the most consequential diplomatic agreements of the ancient world.",
          "Seleucus ceded territories west of the Indus — including parts of modern Afghanistan, Balochistan and eastern Iran — in exchange for 500 war elephants.",
          "Those elephants proved decisive at the Battle of Ipsus (301 BCE), where they helped defeat Antigonus and reshape the Hellenistic world. The Maurya Empire thus had an indirect impact on Greek power politics.",
          "A marriage alliance was also agreed, though its exact terms are not recorded in surviving sources."
        ]
      },
      {
        title: "Megasthenes in Pataliputra",
        content: "Following the treaty, Seleucus sent the Greek diplomat Megasthenes to reside at the Mauryan capital of Pataliputra as his official ambassador from approximately 302 to 300 BCE. Megasthenes compiled his observations into a detailed travelogue titled Indica, which became the ancient West's primary source on Indian society. While the text recorded colorful folklore, such as gold-mining ants and tribes of mouthless people, Megasthenes' core descriptions of the city’s massive fortifications, the king's daily lifestyle, and the highly organized administrative departments have been verified by modern archaeology. His presence at the imperial court highlights the cosmopolitan nature of Pataliputra, where Greek-speaking envoys clad in short chitons and Macedonian cloaks stood alongside Mauryan officials, carrying parchment scrolls and participating in the daily business of the empire.",
        bulletPoints: [
          "Seleucus sent the Greek diplomat Megasthenes to live at Pataliputra as ambassador around 302–300 BCE. His account, the Indica, is one of the most important external descriptions of Mauryan India.",
          "Megasthenes described the city’s walls, moat, towers and gates in precise dimensions. He noted the army’s scale, the royal lifestyle, and the general wealth and order of the empire.",
          "He also recorded more fantastical elements (giant ants that mined gold, men without mouths) that were clearly folklore, but his core urban and political descriptions are confirmed by archaeology.",
          "His presence means there were Greek-speaking foreigners at the Mauryan court: envoys in short chitons or Macedonian cloaks, carrying scrolls, standing alongside Indian officials in the audience hall."
        ]
      },
      {
        title: "Trade: what moved along the routes",
        content: "Trade between the Mauryan Empire and the Hellenistic kingdoms flourished along a vast, state-maintained highway system that was a precursor to the modern Grand Trunk Road, linking the capital of Pataliputra directly to Taxila in the northwest and onward through the Khyber Pass. Along this route, Indian merchants exported valuable luxury goods, including fine cotton textiles, silk, exotic spices, peacocks, semi-precious gemstones, and carved ivory. In return, caravans imported high-quality cavalry horses from Persia and Central Asia, alongside Mediterranean wine and fine Roman glassware. Internal river trade on the Ganges carried bulk goods to the capital, making Pataliputra's markets exceptionally cosmopolitan. Megasthenes noted that the city's bazaars were filled with a diverse array of foreigners, including Persian traders in pointed felt caps, Greek envoys with wooden staffs, and nomadic Central Asian horse dealers.",
        bulletPoints: [
          "The empire’s road network — a precursor to the later Grand Trunk Road — linked Pataliputra with Taxila in the northwest and extended west through the Khyber Pass into the Hellenistic world.",
          "Indian exports: fine cotton cloth, silk, spices, peacocks, gemstones and ivory.",
          "Imports: horses (from Persia and Central Asia, essential for cavalry since horses could not easily be bred in India), and Mediterranean goods including wine and glassware.",
          "River trade on the Ganges carried bulk goods internally; Pataliputra’s riverside position made it the natural hub of this network.",
          "Persian merchants in pointed caps, Greek envoys with cloaks and staffs, and Central Asian traders with horses would all have been visible in Pataliputra’s markets — verified by Megasthenes’ account of a cosmopolitan city."
        ]
      },
      {
        title: "Later Hellenistic contacts",
        content: "Diplomatic relations between India and the Hellenistic world remained active and friendly long after the reigns of Chandragupta and Seleucus. The Greek-Egyptian ruler Ptolemy II Philadelphus sent an ambassador named Dionysius to reside at the Mauryan court in Pataliputra, securing trade agreements across the Arabian Sea. A famous historical anecdote records that Chandragupta's son, Bindusara, wrote to the Seleucid king Antiochus I Soter, requesting a shipment of sweet Mediterranean wine, dried figs, and a Greek philosopher to teach at his court. Antiochus complied with the first two requests but politely declined the third, writing back that Hellenic law did not permit the sale of philosophers. These ongoing cultural and diplomatic exchanges confirm that the early Mauryan Empire was deeply integrated into the global network of Hellenistic states.",
        bulletPoints: [
          "After Chandragupta, diplomatic exchange continued: Ptolemy II of Egypt sent an envoy named Dionysius to the Mauryan court.",
          "Bindusara (Chandragupta’s son) reportedly requested sweet wine, dried figs and a philosopher from Antiochus I — who sent the first two but noted that Greek philosophers were not for sale.",
          "These exchanges confirm sustained diplomatic and trade relations with the Hellenistic world throughout the early Mauryan period."
        ]
      }
    ]
  },
  {
    id: "ashoka",
    title: "Ashoka: Warrior to Dharma King",
    hook: "One battle so horrified a king that he changed the entire direction of his empire — and, arguably, of history.",
    image: "/images/ashoka.png",
    sections: [
      {
        title: "Bindusara and the empire before Ashoka",
        content: "Under Chandragupta’s successor, Emperor Bindusara, who ruled from approximately 297 to 268 BCE, the Mauryan Empire experienced a period of steady consolidation and southward expansion. Known to Greek historians as Amitrochates, meaning 'slayer of foes,' Bindusara successfully campaigned across the Deccan plateau, bringing much of central and southern India under imperial control. However, he stopped short of conquering the independent and wealthy kingdom of Kalinga on the eastern coast, leaving it as the sole independent holdout on the subcontinent. Throughout his reign, Bindusara maintained the diplomatic and trade relations established by his father, keeping the trade routes open and receiving foreign embassies from the Seleucid and Ptolemaic empires, which set the stage for the dramatic reign of his son, Ashoka.",
        bulletPoints: [
          "Chandragupta’s son Bindusara (ruled 297–268 BCE) continued southward expansion into the Deccan plateau, pushing the empire’s southern boundary considerably further than his father had.",
          "He stopped short of Kalinga (modern Odisha) on the east coast — leaving this wealthy kingdom as the last major independent holdout on the subcontinent.",
          "Bindusara maintained the diplomatic contacts with the Hellenistic world established by Chandragupta and is noted in Greek sources for a request to Antiochus I for figs, wine and a philosopher."
        ]
      },
      {
        title: "The Kalinga War (261 BCE)",
        content: "In approximately 261 BCE, Emperor Ashoka launched a massive military campaign to conquer the independent kingdom of Kalinga, a wealthy state that controlled key maritime trade routes to Southeast Asia. The resulting war was exceptionally brutal. In his famous Thirteenth Major Rock Edict, Ashoka himself recorded the staggering human toll of the conflict: 100,000 soldiers slain in battle, 150,000 people forcibly deported, and countless others who perished from famine and disease in the aftermath. The sheer scale of the carnage deeply affected the emperor, leading to a profound personal crisis. In an unprecedented move for an ancient conqueror, Ashoka published a public statement of remorse, declaring that the slaughter and captivity of innocent people weighed heavily on his mind. The Kalinga War became the pivotal turning point of the Maurya dynasty, marking the end of aggressive military expansion.",
        bulletPoints: [
          "Ashoka (ruled 268–232 BCE) launched a campaign against Kalinga around 261 BCE. The kingdom was conquered, but the war was extraordinarily bloody.",
          "Ashoka’s own 13th Major Rock Edict records 100,000 killed, 150,000 deported, and many more dead from the aftermath — one of the most candid admissions of war’s cost by any ruler in ancient history.",
          "The edict continues: “Now Ashoka feels deep remorse for having conquered the Kalingans.” This public statement of guilt by a reigning emperor was unprecedented.",
          "Kalinga is the pivot of the entire Maurya story — before it, a conventional empire of conquest; after it, something different."
        ]
      },
      {
        title: "The transformation: dharma and the edicts",
        content: "Following his transformation after the Kalinga War, Ashoka embraced Buddhism and restructured his entire government around the concept of Dhamma (righteousness). He renounced military conquest in favor of conquest by Dhamma, seeking to govern his vast empire through ethical conduct, non-violence (ahimsa), and religious tolerance. To communicate these principles directly to his subjects, he ordered his edicts to be carved on rock faces and towering sandstone pillars erected throughout the subcontinent. Written in local languages and scripts, including Brahmi, Kharosthi, Aramaic, and Greek, these edicts mandated the creation of medical facilities for both humans and animals, the planting of shade trees, the digging of wells along highways, and respect for parents and teachers. Ashoka also sent Buddhist missionaries to Sri Lanka, Southeast Asia, and the Hellenistic kingdoms of the Mediterranean, transforming Buddhism into a major world religion.",
        bulletPoints: [
          "Following Kalinga, Ashoka embraced Buddhism and reformulated his governing philosophy around the concept of Dhamma (dharma) — ethical conduct, non-violence, religious tolerance and welfare of all beings.",
          "He had his policies carved in stone across the empire: the Major and Minor Rock Edicts and the Pillar Edicts, written in multiple scripts (Brahmi, Kharosthi, Greek, Aramaic) to reach different populations.",
          "The edicts promoted kindness to animals, welfare of the elderly, medical facilities for humans and animals across the empire, religious tolerance toward all sects, and the planting of shade trees and digging of wells along roads.",
          "He sent Buddhist missionaries across Asia: to Sri Lanka (his son Mahinda and daughter Sanghamitra), to the Hellenistic kingdoms in the west, and to Southeast Asia — spreading Buddhism far beyond the subcontinent."
        ]
      },
      {
        title: "Legacy and the empire’s end",
        content: "The legacy of Ashoka’s reign left an indelible stamp on the identity of modern India. His Sarnath Lion Capital was chosen as the national emblem, and the twenty-four-spoked Dharma Chakra (Wheel of Law) from his pillars sits at the center of the Indian flag. Following Ashoka's death in 232 BCE, the empire declined rapidly under a succession of weaker rulers, unable to maintain the costly centralized bureaucracy. In 185 BCE, the last Mauryan emperor, Brihadratha, was assassinated by his own general, Pushyamitra Shunga, bringing the dynasty to an end. Despite its collapse, the Mauryan Empire established a lasting template for pan-Indian statecraft, demonstrating that a vast, multicultural empire could be united not just by military force, but by a shared administrative system and a commitment to ethical governance.",
        bulletPoints: [
          "Ashoka’s Dharma Chakra (Wheel of Law) is now the symbol at the centre of the Indian national flag, and his lion capital from Sarnath is India’s national emblem.",
          "The Maurya Empire declined rapidly after Ashoka’s death in 232 BCE, fragmenting under weaker successors; the last Mauryan emperor, Brihadratha, was assassinated by his own general Pushyamitra Shunga in 185 BCE.",
          "Despite its relatively short final period, the Maurya Empire set the template for pan-Indian statecraft, Buddhist missionary activity across Asia, and the idea — however briefly realised — of a ruler who governed by ethics rather than by force."
        ]
      }
    ]
  }
];
