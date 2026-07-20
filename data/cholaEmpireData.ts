export interface SubpageSection {
  title: string;
  content: string;
  bulletPoints: string[];
}

export interface CholaSubpage {
  id: string;
  title: string;
  hook: string;
  image: string;
  sections: SubpageSection[];
}

export const cholaSubpages: CholaSubpage[] = [
  {
    id: "rise",
    title: "Empire of the South",
    hook: "From a minor chieftain who seized Thanjavur in 848 CE to an emperor who sent fleets to Sumatra — in 200 years.",
    image: "/images/rise.jpeg",
    sections: [
      {
        title: "The founding and early expansion",
        content: "The medieval Chola dynasty arose in 848 CE when Vijayalaya Chola, a minor Tamil chieftain, exploited a localized war between the Pallavas and Pandyas to capture the strategic city of Thanjavur, establishing Chola sovereignty in the fertile Cauvery delta region. His son, Aditya I, who ruled from 871 to 907 CE, consolidated these gains. Around 875 CE, Aditya I defeated the Pallavas and captured their capital of Kanchipuram, an event recorded in inscriptions as the 'destruction of the Pallavas' that ended centuries of Pallava supremacy. Pushing further south, Parantaka I campaigned deep into Sri Lanka, forcing its rulers to pay tribute and bringing all of Tamil Nadu under unified Chola control by the middle of the tenth century, laying the territorial foundation for a powerful southern empire.",
        bulletPoints: [
          "Vijayalaya Chola (c. 848–871 CE) was a minor Tamil chieftain who exploited Pallava–Pandya conflict to capture Thanjavur around 848 CE, establishing Chola sovereignty in the Cauvery region.",
          "His son Aditya I (871–907 CE) consolidated these gains and captured Kanchipuram from the Pallavas around 875 CE, effectively ending Pallava power — a dynastic succession that inscriptions record as the “destruction of the Pallavas.”",
          "Parantaka I (907–955 CE) pushed further: he campaigned deep into Sri Lanka, making it a tributary, and ruled all of Tamil Nadu by the mid-10th century."
        ]
      },
      {
        title: "Rajaraja I and the imperial peak",
        content: "Rajaraja Chola I, who ruled from 985 to 1014 CE, stands as the defining figure of the Chola Empire. He inherited a fragmented kingdom and successfully reunified the Chola territories. Rajaraja launched extensive military and naval campaigns, conquering the Cheras, subduing parts of the Deccan, and capturing the Laccadive and Maldive islands. His crowning achievement was the construction of the Brihadisvara Temple at Thanjavur, which stands as a masterpiece of Dravidian architecture. The king himself consecrated the temple in 1010 CE. UNESCO notes that Rajaraja's reign initiated an era of unparalleled artistic and political success, ensuring that the Chola dynasty enjoyed an active, stable, and eventful rule that lasted for nearly four and a half centuries.",
        bulletPoints: [
          "Rajaraja Chola I (985–1014 CE) is the empire’s defining figure. He reunified fragmented Chola territories, launched naval campaigns against the Cheras and Laccadive islands, and built the Brihadisvara Temple at Thanjavur — the crowning achievement of Chola architecture.",
          "He inaugurated the Brihadisvara Temple himself in 1009 CE; UNESCO notes that from his reign onward the Cholas “enjoyed a long, eventful rule lasting four and a half centuries.”"
        ]
      },
      {
        title: "Rajendra I and the sea",
        content: "Rajendra Chola I, succeeding his father Rajaraja in 1014 CE, extended the empire's boundaries further north than any Chola ruler before him. He marched his armies to the banks of the Ganges River, celebrating his victories by building a new capital named Gangaikonda Cholapuram ('The City of the Chola Who Conquered the Ganges') and adopting the title Gangaikonda Chola. In 1025 CE, Rajendra launched a naval campaign across the Bay of Bengal against the Srivijaya maritime empire of Sumatra and Malaya. His fleets captured Srivijayan ports, burned Kedah, and seized royal treasures, representing one of the most audacious naval campaigns in Asian history. Following his reign, subsequent Chola kings ruled a gradually shrinking empire until a resurgence of Pandya power finally ended the dynasty in 1279 CE.",
        bulletPoints: [
          "Rajendra Chola I (1014–1044 CE), Rajaraja’s son, extended the empire further north than any Chola before him — reaching the Ganges and earning the title Gangaikonda Chola (“One who brought the Ganges”).",
          "He founded a new capital, Gangaikonda Cholapuram, and built its own Brihadisvara temple there as a twin of his father’s at Thanjavur.",
          "His 1025 CE naval raid on Srivijayan cities in Sumatra and Malaya — burning ports and capturing ships — is one of the most audacious maritime campaigns in Asian history.",
          "After Rajendra, later Cholas (including Kulothunga I in the 12th century) ruled a reduced empire until Pandya resurgence ended the dynasty in 1279 CE."
        ]
      }
    ]
  },
  {
    id: "temples",
    title: "The Great Temples",
    hook: "The tallest structure in India when it was built in 1010 CE. Its shadow still falls across Tamil Nadu.",
    image: "/images/temple.jpeg",
    sections: [
      {
        title: "Brihadisvara Temple, Thanjavur",
        content: "Completed in 1010 CE under the direct patronage of Rajaraja I, the Brihadisvara Temple (also known as the Rajarajesvara Temple) is the supreme achievement of Chola structural stone architecture. Built entirely of interlocking granite blocks without mortar, its massive vimana (sanctum tower) rises 59.8 meters into the sky, making it the tallest structure in India at the time of its completion. UNESCO has designated it a World Heritage site, describing it as a masterwork of the Dravida architectural style. The temple's single-stone granite capstone weighs a staggering 80 tons. Inside the sanctum lies a colossal monolithic shiva-linga, and the surrounding galleries are carved with 108 karanas of classical dance. The temple complex is enclosed by a vast colonnade (prakara) housing detailed Shaiva sculptures.",
        bulletPoints: [
          "Completed by Rajaraja I in 1010 CE and consecrated by the king himself, the Brihadisvara — also called Rajarajesvara — is the crowning achievement of Chola architecture.",
          "Its vimana (sanctum tower) stands 59.8 metres — the tallest structure in India at its completion, built entirely of granite. UNESCO identifies it as a “marvel of the Dravida type.”",
          "The capstone alone weighs 80 tons. The interior contains a colossal monolithic shiva-linga and galleries carved with 108 karanas of dance, forming one of the most complete early records of Indian classical movement.",
          "Surrounding subsidiary shrines, a vast colonnade (prakara) and gopurams house sculptures of Shaiva iconography at a scale never previously attempted in South India."
        ]
      },
      {
        title: "Brihadisvara Temple, Gangaikonda Cholapuram",
        content: "Built by Rajendra I in 1035 CE to serve as the spiritual center of his new capital, the Brihadisvara Temple at Gangaikonda Cholapuram stands as a 53-meter-tall twin to the Thanjavur temple. Its design demonstrates a mature development of the Chola style; the vimana features recessed corners and fluid, concave curves that contrast with the rigid, pyramidal lines of its predecessor. The temple's interior is famous for housing exceptional Chola bronzes, including the figures of Bhoogasakti and Subrahmanya, which are considered classics of medieval South Asian metallurgy. The entrance to the main sanctum is flanked by two massive monolithic Dvarapalas (door guardians), each standing over four meters tall, projecting a powerful sense of royal and divine authority.",
        bulletPoints: [
          "Built by Rajendra I in 1035 CE, this 53-metre twin of the Thanjavur temple shows maturation of the Chola style: the vimana has recessed corners and fluid curves that contrast with Thanjavur’s more rigid lines.",
          "Its interior houses exceptional Chola bronzes — the Bhoogasakti and Subrahmanya figures here are considered classics of Chola metalwork.",
          "Two massive monolithic Dvarapalas (door guardians) flank the entrance, each over four metres tall."
        ]
      },
      {
        title: "Airavatesvara Temple, Darasuram",
        content: "Constructed around 1150 CE by Rajaraja II, the Airavatesvara Temple at Darasuram is a smaller temple complex celebrated for its exquisite decorative carvings rather than colossal scale. Its vimana stands at a modest 24 meters, but the stone ornamentation represents the finest artistic skill in the Chola corpus. The front mandapa (assembly hall) is built in the shape of a stone chariot (raja-garuda mandapa), complete with wheels carved on its pillars—a playful architectural reference to the ratha tradition of Mahabalipuram. The temple's walls feature miniature friezes depicting the stories of the sixty-three Shaiva Nayanar bhakti saints. Along with Thanjavur and Gangaikonda Cholapuram, this temple is recognized as a UNESCO World Heritage site under the 'Great Living Chola Temples' group.",
        bulletPoints: [
          "Built around 1150 CE by Rajaraja II, this smaller complex is celebrated for exquisite carved detail rather than scale — its 24-metre vimana is modest by Chola standards but the ornamentation is the finest in the corpus.",
          "The front mandapa is designed as a stone chariot (raja-garuda mandapa) with sculpted wheels on its pillars — a visual pun on the ratha tradition going back to Mahabalipuram.",
          "Its miniature friezes depict the 63 Shaiva Nayanar saints, making this the most complete visual record of the bhakti saint tradition in stone. All three temples are UNESCO World Heritage sites."
        ]
      }
    ]
  },
  {
    id: "naval-power",
    title: "Masters of the Sea",
    hook: "In 1025 CE a Chola fleet crossed the Bay of Bengal and attacked Sumatra. Nobody had done that before.",
    image: "/images/naval-power.jpeg",
    sections: [
      {
        title: "Building a navy",
        content: "The Chola navy was a highly organized, professional military arm rather than a loose assembly of merchant ships. Stone inscriptions and foreign accounts confirm that the Cholas maintained a dedicated fleet of warships built to execute long-range oceanic campaigns. Rajendra I's naval expedition in 1025 CE against the Srivijaya Empire of Sumatra and Malaya is recorded in detail on temple walls; Chola inscriptions boast of burning ports in Kedah and capturing royal Srivijayan ships and treasure. While the Bodhi Journal states that Chola maritime conquests spanned from the Maldives and Sri Lanka to parts of Indonesia, Myanmar, Thailand, and Java, modern historians continue to debate whether these represented permanent territorial annexations or strategic, punishing raids designed to enforce trade dominance.",
        bulletPoints: [
          "The Chola navy was not a ceremonial institution: inscriptions and foreign accounts attest to a fleet of royal warships capable of sustained oceanic campaigns.",
          "Rajendra I’s 1025 CE expedition against Srivijaya (the dominant maritime empire of Sumatra and Malaya) is recorded in stone: Chola inscriptions boast of burning ports in Kedah (modern Malaysia) and capturing ships and treasure.",
          "The Bodhi Journal summary states that Chola conquests “spanned from the Maldives and Sri Lanka to Indonesia, Myanmar, Thailand, Java, and Sumatra” — though scholars debate whether these were permanent annexations or punishing raids that secured trade dominance."
        ]
      },
      {
        title: "Sri Lanka and the Malabar",
        content: "To control the maritime trade networks of the Indian Ocean, the Cholas established direct and sustained political influence over Sri Lanka. Throughout the eleventh century, Chola rulers regularly installed and deposed Sinhala kings, keeping the northern half of the island under direct administrative control as a tributary province. By securing ports on both the Coromandel coast in the east and the Malabar coast in the west, the Cholas established a strategic monopoly over trade routes connecting the Arabian Sea, India, and Southeast Asia, generating massive customs revenue that funded their state and temple building programs.",
        bulletPoints: [
          "Chola influence over Sri Lanka was direct and sustained: Chola rulers installed and deposed Sinhala kings, and the island was effectively a tributary for much of the 11th century.",
          "Control of coastal ports on both the Coromandel and Malabar coasts gave the Cholas a stranglehold on the Indian Ocean trade routes that connected Arabia, India and Southeast Asia."
        ]
      },
      {
        title: "The cultural reach",
        content: "Sailing aboard warships and merchant vessels, Chola traders, Hindu priests, and Buddhist monks carried the Tamil language, Sanskrit literature, Shaivite religious practices, and Dravidian architectural forms deep into Southeast Asia. Sanskrit inscriptions discovered in Java and Chola-style brick temples in early Southeast Asian kingdoms document this cultural diffusion. Gold coins minted by Chola rulers have been excavated across the region. As the first great Hindu naval empire, the Cholas left an enduring cultural legacy in Southeast Asia, traceable from the Ramayana dance traditions of Thailand and Indonesia to the Sanskrit-influenced court vocabularies of the Khmer and Mon kingdoms.",
        bulletPoints: [
          "Chola merchants, monks and sailors carried Tamil language, Sanskrit learning, Hindu religious practice and Dravidian architectural forms into Southeast Asia.",
          "Sanskrit inscriptions in Java and Chola-style temple architecture in early Southeast Asian kingdoms reflect this diffusion; gold coins of Chola rulers have been found across the region.",
          "This was the first great Hindu naval empire — and its cultural legacy in Southeast Asia, from the Ramayana traditions of Thailand and Indonesia to the Sanskrit-influenced court languages of the Khmer, is traceable directly to the Chola period."
        ]
      }
    ]
  },
  {
    id: "administration",
    title: "How the Empire Ran",
    hook: "Village councils, merchant guilds and temple records: the Cholas built a bureaucracy that ran without printing.",
    image: "/images/administration.jpeg",
    sections: [
      {
        title: "A layered administration",
        content: "The Chola state featured a highly structured administrative system divided into provinces and smaller districts called kurrams, managed by royal viceroys or governors appointed directly by the king. Local governance was largely decentralized, utilizing two distinct types of village assemblies: the sabha in Brahmin-dominated villages and the ur in non-Brahmin ones. These assemblies operated alongside the royal bureaucracy, managing local taxes, land titles, and community disputes. The Kudavolai system, in which village council candidates were chosen by draw and decisions were inscribed on copper plates, provides direct evidence of this administrative rigor. Thousands of these inscriptions have survived in Tamil Nadu, offering a highly detailed picture of democratic village governance between the tenth and twelfth centuries.",
        bulletPoints: [
          "The Chola realm was divided into provinces and kurrams, overseen by royal viceroys or governors appointed by the king.",
          "Local governance featured two types of village assemblies: sabhas in Brahmin-dominated villages and ur in non-Brahmin ones. These bodies managed local taxes, land records and community affairs — a self-governing infrastructure that ran alongside the royal bureaucracy rather than beneath it.",
          "The Kudavolai copper-plate system, where village council decisions were inscribed on copper plates, is direct evidence of this documentary rigour: thousands of inscriptions from Chola Tamil Nadu give us a remarkably detailed picture of village governance in the 10th–12th centuries."
        ]
      },
      {
        title: "The temple as administrative hub",
        content: "Chola temples served as major economic and administrative institutions rather than purely religious spaces. Temple records meticulously document land grants, gold donations, labor obligations, and tax arrangements. Revenue generated from agricultural villages in the fertile Cauvery delta was collected and managed by temples, and the state inscribed detailed land surveys on temple walls where any citizen could read them. The Chola land-grant system, known as brahmadeya, gifted tax-exempt villages to Brahmin scholars in exchange for performing temple services. This created a highly complex patronage network that tightly bound religion, agricultural production, and state governance together under the protection of the king.",
        bulletPoints: [
          "Temples were not merely religious centres — they were economic and administrative institutions. Temple records meticulously document land grants, donations, labour obligations and tax arrangements.",
          "Land revenue from the Cauvery delta villages funded the empire; the state conducted what were effectively land surveys, with results inscribed in temple walls that any interested party could read.",
          "The Chola land-grant system (brahmadeya — gifts to Brahmin villages) exempted recipient villages from certain taxes while obligating them to maintain temple services, creating a complex patronage network that bound religion, agriculture and governance tightly together."
        ]
      },
      {
        title: "Guilds and markets",
        content: "Merchant guilds operated with substantial autonomy under the oversight of the Chola state. The most famous was the Ayyavole (Five Hundred Lords of Ayyavolu), a national trade guild with chapters spanning South India and Southeast Asia that managed long-distance commerce. The Manigramam merchant guild and specialist guilds of weavers, jewelers, and metalworkers held recognized legal standing, managing their own internal affairs under royal charters. UNESCO has praised the Cholas' administrative system, highlighting their 'efficient administration' as a defining achievement of the dynasty that matched the brilliance of their military conquests and architectural monuments.",
        bulletPoints: [
          "Merchant guilds, including the famous Ayyavole (a national trade guild with chapters across South India and Southeast Asia), managed long-distance commerce under Chola oversight.",
          "The Manigramam merchant guild and specialist communities of weavers, jewellers and metalworkers had recognised legal standing, managing their own affairs under royal supervision.",
          "UNESCO specifically praises the Chola “efficient administration” as a defining achievement of the empire alongside military conquest."
        ]
      }
    ]
  },
  {
    id: "culture",
    title: "Bronze, Dance & the Nataraja",
    hook: "The bronze Nataraja — Shiva as lord of the cosmic dance — was a Chola invention.",
    image: "/images/culture_chola.jpeg",
    sections: [
      {
        title: "The Chola bronze tradition",
        content: "Chola metalworkers mastered the lost-wax (cire perdue) casting technique to create solid bronze sculptures that represent a pinnacle of South Asian art. The iconic image of the Nataraja—Shiva dancing within a circular ring of fire, one foot raised over a dwarf, his hair flying in the wind—was fully developed during this period, becoming one of India's most recognized artistic symbols. Chola workshops also produced other masterpiece bronzes, including depictions of Vishnu reclining on the cosmic serpent (Anantasayana), Uma-Parvati, and standing groups of Somaskanda. The bronze sculptures recovered from Gangaikonda Cholapuram are considered by art historians to be among the finest examples of metalwork in the entire classical tradition.",
        bulletPoints: [
          "Chola craftsmen mastered the lost-wax (cire perdue) casting technique for bronze sculpture; the result was a tradition of temple deity images unsurpassed in South Asian art.",
          "The Nataraja — Shiva dancing within a ring of fire, one foot raised, hair flying — was fully developed as an iconographic form during the Chola period; it is now India’s most recognised sculpture.",
          "Other key Chola bronzes: Vishnu on Anantasayana (reclining on the cosmic serpent), Uma-Parvati, and the standing Somaskanda group. The bronzes of Gangaikonda Cholapuram are among the finest in the entire tradition."
        ]
      },
      {
        title: "Temple dance and performance",
        content: "Vedic and classical performance arts were institutionalized under the Cholas. Temple dance, which served as the direct precursor to modern Bharatanatyam, was formally sponsored by the state. Devadasi dancers were attached to all major temples, performing sacred choreographies during daily rituals and festival processions. Their complex movement vocabulary was systematically carved onto temple walls, most notably in the galleries of the Brihadisvara Temple at Thanjavur, where the 108 karanas of classical dance are depicted in precise detail, serving as an ancient visual dance notation system carved in stone.",
        bulletPoints: [
          "Temple dance — the direct precursor of Bharatanatyam — was institutionalised under the Cholas. Devadasi dancers, attached to major temples, performed in daily rituals; their movement vocabulary is depicted in Chola temple sculpture across hundreds of sites.",
          "The 108 karanas of classical dance carved into the Brihadisvara Temple’s galleries are the most complete early record of this dance system — a visual dance notation in stone."
        ]
      },
      {
        title: "Literature and Tamil culture",
        content: "The Chola period was a golden age of Tamil literature, with Tamil serving as the primary language of state administration and poetry, while Sanskrit was reserved for temple dedications. Under Chola royal patronage, the poet Kamban composed the Ramavataram (the Tamil version of the Ramayana) in the twelfth century, widely regarded as one of Tamil literature's greatest epics. Chola courts patronized music, dance, and theatrical plays continuously, and temple sculptures depict musicians playing the yazh (ancient harp) and drums. The Carnatic classical music tradition traces its stylistic and rhythmic roots directly to the musical liturgies developed in Chola-era temples.",
        bulletPoints: [
          "Tamil was the language of Chola administration and literature, though Sanskrit remained the language of temple dedications and certain inscriptions.",
          "The Ramavataram of Kamban (12th century) — the Tamil version of the Ramayana, written under Chola royal patronage — is one of Tamil literature’s greatest works, demonstrating the depth of the court’s literary investment.",
          "The court patronised music, dance and drama continuously; temple sculptures depict musicians playing yazh (harp) and drum. The Carnatic classical tradition traces important roots to Chola-era temple music."
        ]
      }
    ]
  },
  {
    id: "economy",
    title: "The Rice Bowl & the Sea",
    hook: "The Cauvery delta fed the army. The Bay of Bengal paid for the temples.",
    image: "/images/economy_chola.jpeg",
    sections: [
      {
        title: "Cauvery agriculture",
        content: "The fertile Cauvery River delta was among the most intensively cultivated regions of the medieval world, earning it the title of the 'rice bowl' of Tamil Nadu. Chola kings built and maintained an extensive system of irrigation canals, stone dams, and brick-lined wells, allowing for multiple annual rice harvests that supported a large population and generated the massive agricultural surplus that funded the state's temple-building and military campaigns. Land taxes collected from delta villages formed the empire's fiscal base, and the state operated loan and tax-remission programs, known as the varaha-mitra system, to cushion peasants during periods of monsoon failure and famine.",
        bulletPoints: [
          "The Cauvery delta was among the most intensively cultivated land in the medieval world — the “rice bowl” of Tamil Nadu. Multiple annual harvests, supported by Chola-built and maintained irrigation tanks, canals and wells, sustained a large population and generated the agricultural surplus that funded everything else.",
          "Land revenue from these villages was the empire’s fiscal base; inscriptions record tens of thousands of villages paying taxes to the crown. State-sponsored loan and tax-remission programmes (the varaha-mitra system) cushioned peasants during famines."
        ]
      },
      {
        title: "Ports and maritime trade",
        content: "The Chola state operated several key ports, including Nagapattinam, Palar, and Mylapore, which handled substantial coastal and international commerce. The empire exported high-value commodities like pearls, ivory, spices, and fine hand-woven textiles, while importing Arabian warhorses for the cavalry and luxury goods from the Mediterranean and China. The state issued gold coins called kaasu, bearing tiger and bull motifs, alongside copper coins called tangka, which circulated widely across South India and were carried by merchants as far as Southeast Asia. The merchant guild Ayyavole established trading chapters from Tamil Nadu to Java, creating a commercial diaspora that operated under royal protection.",
        bulletPoints: [
          "Chola ports — Nagapattinam, Palar, Mylapore — handled both coastal and international commerce. Key exports: pearls, ivory, spices and fine textiles. Key imports: horses from Arabia (essential for cavalry) and luxury goods.",
          "The gold coins (kaasu, bearing tiger and bull motifs) and copper coins (tangka) were widely circulated across South India and carried by merchants as far as Southeast Asia.",
          "The merchant guild Ayyavole had chapters from Tamil Nadu to Java — a commercial diaspora that operated under Chola protection and extended Chola soft power beyond any fleet."
        ]
      },
      {
        title: "Wealth and the temples",
        content: "Chola economic prosperity was a self-reinforcing cycle: agricultural surpluses funded the construction of massive stone temples, which in turn attracted trade routes and large pilgrim populations, generating merchant wealth that funded further temples and military campaigns. Temple inscriptions record donations of gold, land, and labor from international merchants, illustrating a system where religious endowment functioned as a commercial investment. The Portuguese observer Duarte Barbosa, writing in the sixteenth century, noted that Chola towns maintained massive bazaars containing 'all goods,' providing clear historical evidence that the commercial infrastructure built by the Cholas outlasted their empire by centuries.",
        bulletPoints: [
          "Chola prosperity was self-reinforcing: agricultural surplus funded temple construction; temples attracted trade and pilgrimage; trade wealth funded further temples and military campaigns.",
          "Contemporary temple inscriptions record contributions from merchants in gold, land and labour — an economy in which religious endowment was also commercial investment.",
          "The Portuguese observer Barbosa, writing in the 16th century, described Chola towns as having large bazaars “of all goods” — evidence that the commercial infrastructure outlasted the empire itself by centuries."
        ]
      }
    ]
  }
];
