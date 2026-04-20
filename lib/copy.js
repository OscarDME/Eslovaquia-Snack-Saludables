// lib/copy.js — celý viditeľný copy text landing page. Slovenčina.
// loncherafeliz.aprende-hoy.shop.

export const copy = {
  metadata: {
    title:
      "Zdravé desiate pre deti | 500 rýchlych a chutných receptov",
    description:
      "Objavte 500 receptov na zdravé detské desiate, hotové za menej ako 15 minút. Obsahuje 9 bezplatných bonusov. Špeciálna ponuka: 8.90 €.",
    productName: "Sprievodca zdravými detskými desiatami",
  },

  hero: {
    urgencyBar:
      "⚡ ČASOVO OBMEDZENÁ PONUKA! Iba dnes: Zľava 95 %",
    badge: "Hotové do 15 minút",
    headline: {
      before: "Zmeňte stravovanie svojich detí vďaka ",
      accent: "zdravým desiatam",
      after: ", ktoré sú rýchle a zároveň veľmi chutné",
    },
    subheadline:
      "Jednoduché a výživné recepty, ktoré si vaši najbližší zamilujú – ideálne do školy aj na doma. 500 nápadov, ako sa postarať o ich zdravie bez zbytočnej straty času!",
    ctaLabel: "Kúpte teraz a ušetrite 95 %!",
    starsAriaLabel: "5 hviezdičiek",
    socialProof: "+5 000 spokojných rodín",
    trustChips: [
      { icon: "🥗", text: "500 receptov" },
      { icon: "🎁", text: "Bonusy v hodnote viac ako 90 € AKO DARČEK" },
      { icon: "🛡️", text: "14-dňová záruka bez rizika" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Premena od nezdravého jedla k zdravým desiatam do 15 minút",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Hotové za", bottom: "15 min" },
      discount: { icon: "💚", top: "Zľava", bottom: "95 %" },
    },
  },

  story: {
    kicker: "Náš príbeh",
    paragraphs: [
      "Vaše dieťa jedáva niekoľkokrát denne a to, čo zje, priamo ovplyvňuje jeho zdravie, energiu a náladu.",
      "Problém nie je v tom, že mu občas doprajete nejakú sladkosť. Problém nastáva, keď sa to kvôli nedostatku času alebo nápadov stane každodennou rutinou.",
      "Niežeby vám na tom nezáležalo. Ibaže popri únave, domácnosti a tisíckach povinností občas jednoducho potrebujete niečo naozaj rýchle a nenáročné.",
      "Kniha „ZDRAVÉ DESIATE PRE DETI“ bola vytvorená presne pre takýchto rodičov – ktorým záleží na zdraví svojich detí, no hľadajú praktické riešenia, nie zložité recepty a nerealizovateľné nápady.",
    ],
  },

  benefits: {
    kicker: "Hlavné výhody",
    headline: "So Sprievodcom zdravými detskými desiatami dáte zbohom...",
    items: [
      {
        icon: "🍪",
        title: "Nezdravému jedlu",
        desc: "Rýchle recepty z prírodných surovín, bez umelých prísad a konzervantov.",
      },
      {
        icon: "⏱️",
        title: "Nedostatku času",
        desc: "Recepty hotové už za 15 minút, absolútne ideálne pre ľudí s nabitým programom.",
      },
      {
        icon: "🥦",
        title: "Starostiam o stravovanie vašich detí",
        desc: "Desiate plné dôležitých vitamínov a minerálov, ktoré si všetci zamilujú.",
      },
      {
        icon: "😩",
        title: "Stresu z prípravy zložitých jedál",
        desc: "Chutné recepty, vďaka ktorým sa vaši najbližší budú tešiť na to, čo im pripravíte.",
      },
    ],
  },

  transformation: {
    kicker: "Premena, ktorú hľadáte",
    headline: "Pozrite sa, ako sa zlepší stravovanie a energia vašich detí",
    before: {
      tag: "PREDTÝM",
      title: "Bez energie a bez nutričnej hodnoty",
      desc: "Spracované potraviny plné cukru a prísad, ktoré im neprinášajú nič dobré.",
    },
    after: {
      tag: "POTOM",
      title: "Šťastné, vitálne a plné energie",
      desc: "Prírodné, chutné a výživné desiate, ktoré deti jednoducho zbožňujú.",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Premena: smutné dieťa, ktoré jedáva nezdravé jedlo, verzus šťastné dieťa so zdravými desiatami",
    },
  },

  samples: {
    headline: "Neodolateľné recepty, ktoré si zamilujú",
    subheadline:
      "Pozrite si malú ukážku chutných receptov, ktoré nájdete v e-knihe",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Zdravé palacinky",
        desc: "Nadýchané a dozlatista opečené, s čerstvým ovocím a pravým včelím medom",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Bezlepková pizza",
        desc: "Chutná pizza s čerstvou zeleninou a roztopeným syrom",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Ovocné smoothies",
        desc: "Pestrofarebné ovocné smoothies, ktoré ich očaria",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Ovsené sušienky",
        desc: "Chrumkavé domáce sušienky s ovsenými vločkami a mandľami",
      },
    ],
    footnote: "Všetkých 500 receptov na vás čaká v kompletnej e-knihe",
  },

  testimonials: {
    kicker: "OVERENÉ VÝSLEDKY",
    headline: "Viac ako 5 000 rodín už zmenilo spôsob svojho stravovania",
    subheadline:
      "Pridajte sa k tisíckam rodičov, ktorí si už užívajú zdravšie jedlo bez zbytočného stresu",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 recenzií",
    items: [
      {
        initial: "Z",
        name: "Zuzana",
        role: "matka 2 malých detí",
        quote:
          "Nikdy by som neverila, že môj syn začne tak rýchlo jesť zdravé desiate! Recepty sú nielen veľmi jednoduché, ale mu aj neskutočne chutia. Ďakujem, že ste mi uľahčili život!",
      },
      {
        initial: "M",
        name: "Martin",
        role: "otec 3 detí",
        quote:
          "Kedysi som sa veľmi obával toho, čo dávam svojim deťom, no vďaka tejto knihe som našiel mimoriadne chutné a zdravé alternatívy. Teraz jeme všetci plnohodnotnejšie a ja som oveľa pokojnejší!",
      },
      {
        initial: "L",
        name: "Lenka",
        role: "odborníčka na výživu a matka",
        quote:
          "Ako odborníčka môžem potvrdiť, že tieto recepty sú ideálne vyvážené. Moje deti ich zbožňujú a ja som pokojná, pretože viem, že jedia kvalitne.",
      },
      {
        initial: "K",
        name: "Katarína",
        role: "pracujúca matka",
        quote:
          "Kvôli nabitému programu som nemala vôbec čas na varenie. Táto kniha zmenila všetko: recepty za 15 minút, ktoré si moje deti pýtajú znova a znova. Stojí za každý cent!",
      },
    ],
  },

  whatYouGet: {
    kicker: "ČO VŠETKO ZÍSKATE?",
    headline: "Všetko, čo nájdete v tejto úžasnej e-knihe",
    subheadline: "Kompletný sprievodca zdravým detským stravovaním",
    items: [
      "500 rýchlych a výživných receptov na desiate a olovranty do školy",
      "Hotové týždenné jedálničky + nákupné zoznamy cenovo dostupných surovín",
      "Nápady na dokonalé kombinovanie denných jedál",
      "Jednoduché pokyny na prípravu krok za krokom",
      "Zoznam zdravých náhrad pre prípad, že vám chýba nejaká surovina",
      "Bezplatné aktualizácie s novými receptami a jedálničkami",
      "A oveľa viac...",
    ],
    footnote: {
      line1: "A to nie je všetko...",
      line2: "Je toho oveľa viac!",
      line3: "Dostanete tiež...",
    },
  },

  bonuses: {
    flagline: "🔥 IBA DNES!",
    headline: "Získajte BEZPLATNÉ bonusy v hodnote viac ako 90 € k nákupu ešte dnes",
    subheadline:
      "V hodnote 92.95 € — ako váš DARČEK k dnešnému nákupu!",
    badgeLabel: "ZADARMO",
    valueLabel: "Hodnota:",
    items: [
      {
        value: "27.99 €",
        title: "Recepty na muffiny a pizzu bez cukru a lepku",
        desc: "Pripravte si zdravé verzie ich obľúbených jedál, bez pridaného cukru a lepku, hotové doslova za pár minút.",
      },
      {
        value: "19.99 €",
        title: "Praktický sprievodca organizáciou a mrazením jedál",
        desc: "Naučte sa, ako si pripraviť všetko naraz a mať hotové jedlo na celý týždeň za menej ako 30 minút denne.",
      },
      {
        value: "14.99 €",
        title: "Špeciálne recepty pre deti s alergiami",
        desc: "Bezpečné a chutné recepty prispôsobené najčastejším alergiám (mlieko, vajcia, sója, arašidy).",
      },
      {
        value: "14.99 €",
        title: "Recepty na chutné a zdravé dezerty",
        desc: "Vymeňte spracované sladkosti za zdravé maškrty, pripravené výlučne z prírodných surovín.",
      },
      {
        value: "14.99 €",
        title: "Zdravé a ľahko pripraviteľné čerstvé šťavy",
        desc: "Praktické recepty na prírodné a chutné šťavy, ktoré osviežia deň vašich najbližších.",
      },
    ],
    totalLabel: "🎁 Celková hodnota bonusov: 92.95 €",
    totalCta: "DOSTANETE ICH ÚPLNE ZADARMO K SVOJMU DNEŠNÉMU NÁKUPU!",
  },

  exclusiveBonuses: {
    kicker: "OKREM TOHO... ⭐ EXKLUZÍVNE BONUSY!",
    headline: "Iba dnes! Získajte aj tieto ďalšie exkluzívne bonusy",
    subheadline: "aby ste premenili zdravie svojich detí",
    badgeLabel: "ZADARMO",
    valueLabel: "Hodnota:",
    items: [
      {
        value: "18.99 €",
        title: "Domáce ovocné želé cukríky s vitamínom C",
        desc: "Naučte sa vyrábať prírodné želé cukríky na posilnenie imunity zábavným a chutným spôsobom.",
      },
      {
        value: "19.99 €",
        title: "Ako naučiť deti zamilovať si zeleninu",
        desc: "Premeňte zeleninu na chutné a zábavné dobrodružstvo. Recepty, vďaka ktorým ju budú jesť s radosťou.",
      },
      {
        value: "17.99 €",
        title: "Sprievodca rýchlymi desiatami pre prieberčivé deti",
        desc: "Objavte výživné desiate ideálne pre deti so slabým apetítom.",
      },
      {
        value: "17.99 €",
        title: "Sprievodca superpotravinami pre deti",
        desc: "Naučte sa, ako pomocou jednoduchých receptov zaradiť do jedálnička superpotraviny.",
      },
    ],
    totalLabel: "🎁 Celková hodnota VŠETKÝCH bonusov: 167.91 €",
    totalCta: "DOSTANETE ICH ÚPLNE ZADARMO K SVOJMU DNEŠNÉMU NÁKUPU!",
  },

  finalCta: {
    flagline: "⏰ PONUKA PLATÍ IBA DNES!",
    headline: "Kompletný balíček v hodnote 201 €",
    subheadline: "Dnes ho získate s úžasnou zľavou 95 %",
    regularPriceLabel: "Bežná cena:",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    bundleList: [
      "✅ 500 receptov na zdravé desiate (hodnota 34 €)",
      "✅ 9 exkluzívnych bonusov v hodnote 167.91 € — ÚPLNE ZADARMO!",
      "✅ Recepty hotové do 15 minút",
      "✅ Okamžitý a doživotný prístup",
      "✅ 14-dňová záruka vrátenia peňazí",
    ],
    button: "Kúpte teraz a ušetrite 95 %!",
    trustRow: "🔒 100 % bezpečná platba • ⚡ Okamžitý prístup • ✅ 14-dňová záruka",
    bonusesBadge: "✓ 9 BONUSOV ZADARMO",
    discountStickerLabel: "Iba dnes",
    discountStickerValue: "-95 %",
    imageAlt: "Kompletný balíček: Príručka Zdravé desiate pre deti + 9 bonusov",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    alt: "Záruka",
    headline: "Váš nákup je 100 % chránený našou 14-dňovou zárukou",
    tag: "NULOVÉ RIZIKO PRE VÁS",
    body: "Sme si takí istí, že si tohto sprievodcu zamilujete, že vám ponúkame bezpodmienečnú 14-dňovú záruku. Ak z akéhokoľvek dôvodu nebudete na 100 % spokojní, vrátime vám každý cent. Bez otázok.",
    footer: "✅ Garantované plné vrátenie peňazí • ✅ Bez otázok • ✅ Okamžité vybavenie",
  },

  faq: {
    kicker: "Časté otázky",
    headline: "Často kladené otázky (FAQ)",
    items: [
      {
        q: "Pre akú vekovú kategóriu je sprievodca určený?",
        a: "Sprievodca je určený pre deti od 2 do 12 rokov, hoci recepty sa dajú ľahko prispôsobiť pre všetky vekové kategórie.",
      },
      {
        q: "Je vhodný pre deti s alergiami?",
        a: "Áno! Ponúkame recepty prispôsobené najčastejším alergiám, ako sú mlieko, vajcia, sója a arašidy.",
      },
      {
        q: "Musím vedieť dobre variť?",
        a: "Nie, recepty sú navrhnuté tak, aby boli maximálne jednoduché, s malým počtom surovín a jasnými krokmi.",
      },
      {
        q: "Sú suroviny drahé?",
        a: "Nie, všetky suroviny sú cenovo dostupné a bežne ich nájdete v každom supermarkete.",
      },
      {
        q: "Ako dlho trvá príprava desiat?",
        a: "Recepty sú mimoriadne rýchle, pričom väčšina je hotová za menej ako 15 minút.",
      },
      {
        q: "Môžem platiť vo svojej lokálnej mene?",
        a: "Áno! Náš systém automaticky prepočíta sumu podľa aktuálneho kurzu. Pri platbe uvidíte cenu upravenú pre vašu menu.",
      },
    ],
  },

  closing: {
    kicker: "POSLEDNÁ ŠANCA! ⚡ Táto ponuka čoskoro vyprší",
    headline: "Nepremeškajte príležitosť premeniť stravovanie vašej rodiny!",
    subheadline: "Kompletný sprievodca + 9 bonusov v hodnote 167.91 € AKO DARČEK! Všetko za cenu jednej večere v reštaurácii.",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "ÁNO, CHCEM SVOJU PRÍRUČKU HNEĎ TERAZ!",
    trustRow: "🔒 100 % bezpečná platba • ⚡ Okamžitý prístup • ✅ 14-dňová záruka",
  },

  footer: {
    madeWith: "Vytvorené s",
    forWho: "pre zdravé rodiny",
    copyright: "© 2026 Zdravé desiate. Všetky práva vyhradené.",
  },

  stickyCta: {
    label: "8.90 €",
    ctaLabel: "Kúpte teraz a ušetrite 95 %!",
    urgency: "⚡ Časovo obmedzená ponuka",
  },
};