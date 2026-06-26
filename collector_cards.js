// collector_cards.js — Collector Mode card database (v2)
(function () {
  'use strict';

  const POS = ['ruler','consort','heir','hand','armyCmd','kgCmd','kingsguard','smallCouncil','ally','bank'];

  const TIER_RANGES = {
    starter:   { min: 40, max: 49.9 },
    uncommon:  { min: 50, max: 59.9 },
    rare:      { min: 60, max: 69.9 },
    hero:      { min: 70, max: 79.9 },
    legendary: { min: 80, max: 89.9 },
    mythic:    { min: 90, max: 100  },
  };

  window.COLLECTOR_TIERS = {
    starter:   { label: 'Starter',   color: '#4caf50', bg: '#0d1f0d', border: '#2a5a2a' },
    uncommon:  { label: 'Uncommon',  color: '#42a5f5', bg: '#0a1929', border: '#1565c0' },
    rare:      { label: 'Rare',      color: '#ff9800', bg: '#1e1000', border: '#7a4500' },
    hero:      { label: 'Hero',      color: '#ce93d8', bg: '#1a0a2e', border: '#6a1b9a' },
    legendary: { label: 'Legendary', color: '#e0e0e0', bg: '#111111', border: '#555555' },
    mythic:    { label: 'Mythic',    color: '#ff4444', bg: '#1e0000', border: '#8b0000' },
  };

  const TIER_ORDER = ['starter','uncommon','rare','hero','legendary','mythic'];

  // Character importance: 0.0 = bottom of tier range, 1.0 = top
  const CHAR_PRIORITY = {
    // Absolute pinnacle
    'aegon-i': 1.00, 'jaehaerys-i': 0.97, 'daenerys': 0.95,
    'daemon-targaryen': 0.93, 'rhaenyra': 0.90, 'rhaegar': 0.87,
    'tyrion': 0.85, 'tywin': 0.83, 'jon-snow-stark': 0.80,
    'cersei': 0.78, 'jaime-prime': 0.76, 'robert': 0.74,
    'eddard': 0.72, 'stannis': 0.71, 'jon-snow-targ': 0.75,
    'robb': 0.68, 'sansa-qitn': 0.65, 'sansa': 0.63,
    'arya': 0.60, 'littlefinger': 0.58, 'jaime-post': 0.58,
    'varys': 0.55, 'oberyn': 0.52, 'euron': 0.50,
    'olenna': 0.46, 'barristan': 0.45, 'melisandre': 0.44,
    'sandor': 0.42, 'catelyn': 0.45, 'khal-drogo': 0.42,
    'brienne': 0.40, 'davos': 0.40, 'margaery': 0.40,
    'bran': 0.42, 'jorah': 0.38, 'joffrey-bl': 0.35,
    'theon': 0.32, 'asha': 0.30, 'roose': 0.32,
    'mance': 0.30, 'mance-nw': 0.28, 'tormund': 0.28, 'ramsay-bolton': 0.28,
    'bronn': 0.28, 'sam-tarly-nw': 0.25, 'sam-tarly-bann': 0.22,
    'gendry': 0.22, 'shireen': 0.20, 'hodor': 0.10,
    'hot-pie': 0.05, 'selyse': 0.08, 'podrick-payne': 0.15,
    // Targaryen kings & key royals
    'maegor-i': 0.55, 'viserys-i': 0.65, 'aegon-ii': 0.50, 'aemond': 0.52,
    'aegon-iii': 0.38, 'viserys-ii': 0.30, 'daeron-i': 0.45, 'baelor-i': 0.28,
    'aegon-iv': 0.42, 'daeron-ii': 0.48, 'maekar-i': 0.30, 'aerys-i': 0.22,
    'aegon-v': 0.52, 'egg-squire': 0.48, 'jaehaerys-ii': 0.28,
    'aerys-ii': 0.45, 'aerys-ii-early': 0.38, 'aenys-i': 0.28,
    'viserys-iii': 0.25, 'baelor-breakspear': 0.38,
    // Targaryen women & significant royals
    'visenya': 0.70, 'rhaenys-sister': 0.60, 'alysanne': 0.60,
    'rhaenys-qwnw': 0.52, 'helaena': 0.42, 'alicent': 0.58, 'otto': 0.55,
    'laena-targ': 0.35, 'laenor': 0.28, 'baela': 0.28,
    'jacaerys-v': 0.30, 'addam-v-drag': 0.25, 'daena': 0.25, 'naerys': 0.25,
    'elaena': 0.25, 'shiera': 0.28, 'aerion': 0.22, 'baelon-spring': 0.30,
    // Historical titans
    'aemon-dragonknight': 0.52, 'bloodraven': 0.52, 'bloodraven-nw': 0.45,
    'cregan': 0.45, 'corlys': 0.55, 'lyanna-stark': 0.50,
    'alyn-velaryon': 0.32, 'duncan-tall': 0.58,
    // Blackfyre / exiled / claimants
    'daemon-blackfyre': 0.58, 'bittersteel': 0.48, 'maelys': 0.30,
    'young-griff': 0.28, 'daemon-ii-blackfyre': 0.20,
    // NW, wildlings
    'maester-aemon-nw': 0.40, 'jeor': 0.32, 'ygritte': 0.30,
    'jon-connington': 0.28, 'arthur-dayne': 0.55,
    // Baratheon extended
    'renly': 0.42, 'orys': 0.40, 'rogar': 0.28, 'borros': 0.22, 'steffon': 0.20,
    // Stark extended
    'rickard-stark': 0.30, 'brandon-stark': 0.32, 'benjen': 0.22, 'benjen-nw': 0.20,
    'rickon': 0.18, 'bran-tyr': 0.48,
    // Lannister extended
    'kevan': 0.28, 'tytos-lann': 0.18, 'tyland': 0.22,
    // Tyrell
    'loras': 0.38, 'garlan': 0.28, 'willas': 0.20, 'mace': 0.22,
    // Martell
    'doran': 0.40, 'arianne': 0.32, 'nymeria-sand': 0.28, 'quentyn': 0.22,
    'lewyn': 0.22, 'elia': 0.30,
    // Greyjoy
    'victarion': 0.38, 'balon': 0.30, 'dalton': 0.35, 'aeron-damphair': 0.20,
    'rodrik-harlaw': 0.20,
    // Hightower / kingsguard
    'criston-cole': 0.45, 'gerold-hightower': 0.28,
    // Essos
    'jaqen': 0.32, 'jaqen-magic': 0.28, 'grey-worm': 0.25, 'daario': 0.28,
    'missandei': 0.22, 'syrio': 0.30, 'illyrio-mopatis': 0.25,
    'arya-faceless': 0.48,
    // Riverlands / Vale
    'brynden-blackfish': 0.38, 'hoster': 0.28, 'edmure': 0.25, 'lysa-tully': 0.25,
    'jon-arryn': 0.28,
    // Bannermen / notable knights
    'beric': 0.32, 'thoros-myr': 0.25, 'howland-reed': 0.28,
    'maege-mormont': 0.25, 'lyanna-mormont': 0.28, 'greatjon': 0.28,
    'wyman-manderly': 0.28, 'ashara-dayne': 0.28,
    'harwin-strong': 0.28, 'larys-strong': 0.30, 'lyonel-strong': 0.35,
    'septon-barth': 0.28, 'qyburn': 0.22, 'three-eyed-raven': 0.35,
    'helaena-magic': 0.32,
  };

  // How many card variants to generate per tier for each character.
  // Characters not listed default to 1. Named NAMED entries can push this higher.
  const CHAR_COUNTS = {};
  // 4 per tier — the absolute protagonists of the saga
  ['aegon-i','jaehaerys-i','daenerys','daemon-targaryen','rhaenyra','rhaegar',
   'tyrion','tywin','jon-snow-stark','cersei','jaime-prime','robert','eddard',
   'stannis','robb','arya','sansa','sansa-qitn','littlefinger','varys',
   'oberyn','olenna'].forEach(id => { CHAR_COUNTS[id] = 4; });
  // 3 per tier — major characters with rich arcs
  ['jon-snow-targ','jaime-post','barristan','barristan-prime','catelyn','brienne',
   'sandor','theon','euron','jorah','davos','melisandre','bran','margaery',
   'joffrey-bl','mance','khal-drogo','alicent','viserys-i','aegon-ii','aemond',
   'corlys','cregan','bloodraven','arthur-dayne','daemon-blackfyre','bittersteel',
   'criston-cole','lyanna-stark','asha','renly','loras','beric','doran','roose',
   'walder-frey','aegon-v','egg-squire','visenya','alysanne','helaena','otto',
   'rhaenys-qwnw','aemon-dragonknight','maester-aemon-nw','rickard-stark',
   'brandon-stark','maegor-i','daeron-i','daeron-ii','aegon-iv',
   'ramsay-bolton','victarion','duncan-tall','rhaenys-sister','mance-nw',
   'bran-tyr','arya-faceless','bloodraven-nw'].forEach(id => { CHAR_COUNTS[id] = 3; });
  // 2 per tier — significant characters with narrative weight
  ['aenys-i','maekar-i','viserys-ii','jaehaerys-ii','aerys-ii-early','aerys-ii',
   'viserys-iii','baelon-spring','jacaerys-v','addam-v-drag','laena-targ','laenor',
   'helaena-magic','baela','jacaerys-vel','sam-tarly-nw','sam-tarly-bann',
   'tormund','ygritte','gendry','bronn','rickon','benjen','benjen-nw','jon-arryn',
   'brynden-blackfish','hoster','edmure','lysa-tully','arianne','quentyn',
   'nymeria-sand','wyman-manderly','greatjon','howland-reed','maege-mormont',
   'lyanna-mormont','thoros-myr','jon-connington','jaqen','jaqen-magic',
   'grey-worm','daario','missandei','syrio','orys','rogar','borros',
   'young-griff','maelys','daemon-ii-blackfyre','daeron-ii','aegon-iii',
   'dalton','balon','aeron-damphair','rodrik-harlaw','kevan','lyonel-strong',
   'harwin-strong','larys-strong','septon-barth','qyburn','illyrio-mopatis',
   'gerold-hightower','baelor-i','baelor-breakspear','aerys-i','garlan','mace',
   'loras','doran','arianne','elia','lewyn','alyn-velaryon','ashara-dayne',
   'shiera','daena','naerys','elaena','three-eyed-raven','helaena-magic',
   'jeor','maester-aemon-nw','aerion','steffon','tyland',
   'renly','asha'].forEach(id => {
     if (!CHAR_COUNTS[id]) CHAR_COUNTS[id] = 2;
  });

  function sr(seed) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h / 4294967295;
  }
  function srPick(arr, seed) { return arr[Math.floor(sr(seed) * arr.length)]; }

  // Generate position scores: no per-position cap, specialist characters
  // can have very high scores in their spec positions and very low elsewhere.
  function genScores(charId, tier, vi, spec) {
    const r = TIER_RANGES[tier];
    const priority = CHAR_PRIORITY[charId] ?? 0.20;
    const jitter = (sr(`${charId}_${tier}_${vi}_jo`) - 0.5) * 2;
    const targetOvr = Math.min(r.max, Math.max(r.min, r.min + priority * (r.max - r.min) + jitter));

    const ch = (window.CHARACTERS || []).find(c => c.id === charId);
    const bs = ch?.scores || {};
    const rawBase = POS.map(p => Math.max(0.1, bs[p] || 1));
    const bMin = Math.min(...rawBase), bMax = Math.max(...rawBase);
    const base = rawBase.map(v => 0.1 + 0.9 * (v - bMin) / Math.max(0.01, bMax - bMin));

    const SPEC_MULT = 3.0;
    const weights = base.map((w, i) => {
      let weight = w;
      if (spec && spec.includes(POS[i])) weight *= SPEC_MULT;
      weight *= (1 + (sr(`${charId}_${tier}_${vi}_w${i}`) - 0.5) * 0.4);
      return Math.max(0.05, weight);
    });

    const wSum = weights.reduce((a, b) => a + b, 0);
    const scores = weights.map(w => Math.round(w / wSum * targetOvr * 10) / 10);
    const obj = {};
    POS.forEach((p, i) => { obj[p] = scores[i]; });
    obj.overall = Math.min(100, Math.round(POS.reduce((s, p) => s + (obj[p] || 0), 0) * 10) / 10);
    return obj;
  }

  const LEG_EPITHETS = ['the Unbroken','the Eternal','the Magnificent','the Illustrious','the Undying',
    'the Legendary','the Indomitable','the Invincible','the Great','the Unyielding',
    'the Timeless','the Unbowed'];
  const MYTHIC_SFX   = ['the Ascendant','the World-Shaker','the Eternal','the Unforgotten',
    'the Transcendent','the Legend','the Immortal','the Supreme','the Undying',
    'the Irreversible','the Magnificent','the Indelible'];
  const STARTER_SFX  = ['the Young','the Untested','in Youth','Before the Wars',
    'the Squire','the Apprentice','the Newcomer','the Untried'];
  const UNCOMMON_SFX = ['of the Realm','the Veteran','the Rising','the Proven',
    'the Capable','the Determined','the Known','the Tested'];
  const RARE_SFX     = ['the Renowned','the Formidable','the Notable','the Feared',
    'the Respected','the Accomplished','the Dangerous','the Distinguished'];
  const HERO_SFX     = ['the Champion','the Celebrated','the Vaunted','the Heroic',
    'the Renowned','the Triumphant','the Fearless','the Mighty'];

  function cleanName(n) { return n.replace(/\s*\(.*?\)\s*/g, '').trim(); }
  function autoName(char, tier, vi) {
    const n = cleanName(char.name);
    const POOLS = {
      starter: STARTER_SFX, uncommon: UNCOMMON_SFX, rare: RARE_SFX,
      hero: HERO_SFX, legendary: LEG_EPITHETS, mythic: MYTHIC_SFX,
    };
    const pool = POOLS[tier];
    if (!pool) return n;
    // vi:0 on starter = no suffix (the base card). vi:0 on other tiers = random pick.
    // vi:1+ always gets a suffix, offset from vi:0's pick to guarantee uniqueness within same char+tier.
    if (tier === 'starter' && vi === 0) return n;
    const base = Math.floor(sr(`n_${char.id}_${tier}`) * pool.length);
    const sfx = pool[(base + vi) % pool.length];
    return `${n} ${sfx}`;
  }
  function autoDesc(char, tier) {
    const n = cleanName(char.name);
    const h = char.houses?.[0] || 'the realm';
    switch (tier) {
      case 'starter':   return `A young ${n} of House ${h}, just beginning their path.`;
      case 'uncommon':  return `${n}, a capable figure of House ${h} whose reputation continues to grow.`;
      case 'rare':      return `A renowned figure of House ${h}, ${n} has earned great distinction.`;
      case 'hero':      return `${n} stands among the greatest of their age, a force not to be underestimated.`;
      case 'legendary': return `${n}'s name will be remembered for generations — a figure of extraordinary consequence.`;
      case 'mythic':    return `${n} rose to heights never before seen, becoming a legend for the ages.`;
      default: return '';
    }
  }

  // ── NAMED VARIANTS ─────────────────────────────────────────────────────────
  const NAMED = {};

  NAMED['daenerys'] = [
    { tier:'starter',   vi:0, name:'Princess in Exile',              desc:'A frightened exile princess, wed to a khal to fund a conquest she barely understands.', age:13, spec:['consort'] },
    { tier:'starter',   vi:1, name:'Khaleesi of the Great Grass Sea', desc:'A young khaleesi learning the ways of the Dothraki, finding strength she never knew she had.', age:14, spec:['ally'] },
    { tier:'starter',   vi:2, name:'Daughter of the Dragon',         desc:'Born of fire and salt, the last Targaryen daughter bears the weight of a shattered dynasty with quiet ferocity.', age:13, spec:['heir','ruler'] },
    { tier:'uncommon',  vi:0, name:'Daenerys the Unburnt',           desc:'She who walked into Khal Drogo\'s pyre and emerged unburned, with three dragons newly hatched — the world changed that night.', age:15, spec:['ruler','ally'] },
    { tier:'uncommon',  vi:1, name:'Mother of Dragons',              desc:'The Mother of Dragons grows bolder, learning to use her children and her conviction as weapons.', age:16, spec:['smallCouncil','ally'] },
    { tier:'uncommon',  vi:2, name:'Daenerys of the Red Waste',      desc:'A determined young woman who survived the Red Waste with her people by sheer will and unwavering vision.', age:15, spec:['ally','ruler'] },
    { tier:'rare',      vi:0, name:'Daenerys the Liberator',         desc:'The liberator of Astapor, who turned slave soldiers into a fearsome army with one bold, audacious gambit.', age:17, spec:['armyCmd','ruler'] },
    { tier:'rare',      vi:1, name:'Queen of the Bay of Dragons',    desc:'Queen of Meereen, ruling the great bay city while struggling to balance justice and raw power.', age:18, spec:['ruler','smallCouncil'] },
    { tier:'rare',      vi:2, name:'Daenerys of Astapor',            desc:'She who spoke High Valyrian and claimed an army of Unsullied with one ruthless, perfect stroke.', age:17, spec:['ruler','armyCmd','ally'] },
    { tier:'hero',      vi:0, name:'Daenerys Stormborn',             desc:'The liberator of thousands, whose three dragons and unshakeable conviction shook the foundations of slavery.', age:19, spec:['ruler','armyCmd','ally'] },
    { tier:'hero',      vi:1, name:'The Dragon Queen',               desc:'With three living dragons at her command, Daenerys became the most feared military force in the known world.', age:20, spec:['kgCmd','armyCmd','kingsguard'] },
    { tier:'hero',      vi:2, name:'Daenerys Targaryen, Breaker of Chains', desc:'The name that echoed across continents — she who struck off every chain and built an army from the freed.', age:21, spec:['ruler','armyCmd','ally','smallCouncil'] },
    { tier:'legendary', vi:0, name:'Mad Queen Daenerys Targaryen',   desc:'The Queen who answered the bells of King\'s Landing with dragonfire — a terrifying ruler of absolute power and terrible wrath.', age:23, spec:['ruler','armyCmd','kgCmd'] },
    { tier:'legendary', vi:1, name:'Daenerys, Last of Her Name',     desc:'The final Targaryen queen — whose fire remade the world for better or worse, and whose legend will never fade.', age:23, spec:['ruler','armyCmd','kgCmd','ally'] },
    { tier:'mythic',    vi:0, name:'Daenerys Targaryen, Conqueror of the World', desc:'In another age, Daenerys broke the wheel not with fire but with wisdom — uniting Westeros and Essos in an era of unprecedented prosperity. The greatest ruler the world has ever known.', age:45, spec:['ruler','hand','smallCouncil','ally','armyCmd'] },
  ];

  NAMED['aegon-i'] = [
    { tier:'starter',   vi:0, name:'Aegon, Lord of Dragonstone',     desc:'The young lord of Dragonstone, not yet a conqueror, dreaming of unity across the Narrow Sea.', age:18, spec:['ruler','armyCmd'] },
    { tier:'starter',   vi:1, name:'Aegon the Dreamer',              desc:'A man with a vision of a united Westeros and three dragons to make it real — and the will to act on it.', age:22, spec:['armyCmd','ally'] },
    { tier:'starter',   vi:2, name:'The Dragon Lord',                desc:'Before the conquest, Aegon Targaryen was simply the greatest dragonlord in the world — and that was enough.', age:25, spec:['kgCmd','armyCmd'] },
    { tier:'uncommon',  vi:0, name:'Aegon Dragonborn',               desc:'The conqueror who took the field atop Balerion, reducing armies and castles alike to ash and swift submission.', age:27, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'uncommon',  vi:1, name:'Conqueror of the First Landing', desc:'He who landed at the mouth of the Blackwater Rush and began the greatest conquest in Westerosi history.', age:27, spec:['armyCmd','ruler','ally'] },
    { tier:'uncommon',  vi:2, name:'Aegon the Builder-King',         desc:'The king who raised cities and roads before the battles were even finished, seeing peace in every victory.', age:30, spec:['ruler','hand','bank'] },
    { tier:'rare',      vi:0, name:'Aegon of the Field of Fire',     desc:'At the Field of Fire, three dragons burned ten thousand men — the battle that broke Westeros\'s will to resist.', age:28, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'rare',      vi:1, name:'Aegon the Unifier',              desc:'The first king of the unified Seven Kingdoms — a conqueror who proved just as capable of ruling as of fighting.', age:35, spec:['ruler','hand','smallCouncil','ally'] },
    { tier:'rare',      vi:2, name:'King of All Seven Kingdoms',     desc:'With six kingdoms bent and the seventh yielded, Aegon Targaryen sat a throne of a hundred swords and built a world.', age:37, spec:['ruler','hand','ally','smallCouncil'] },
    { tier:'hero',      vi:0, name:'Aegon the Great Unifier',        desc:'The king who forged seven kingdoms into one, built a city, melted swords into a throne, and ruled for a generation.', age:40, spec:['ruler','hand','ally','armyCmd','smallCouncil'] },
    { tier:'hero',      vi:1, name:'Aegon the Conqueror',            desc:'With Balerion the Black Dread beneath him, Aegon was the most fearsome military force in world history — unstoppable.', age:30, spec:['kgCmd','armyCmd','ruler','kingsguard'] },
    { tier:'hero',      vi:2, name:'Aegon, Shaper of Westeros',      desc:'More than a conqueror — a builder, a lawgiver, a father of nations. Aegon I defined what Westeros would be for three centuries.', age:42, spec:['ruler','hand','ally','smallCouncil','armyCmd'] },
    { tier:'legendary', vi:0, name:'Aegon I, Father of the Realm',   desc:'The man who invented Westeros — its cities, its throne, its very identity — and ruled it with surprising wisdom for nearly forty years.', age:64, spec:['ruler','hand','armyCmd','ally','smallCouncil','bank'] },
    { tier:'legendary', vi:1, name:'Aegon Targaryen, the Dragon King', desc:'The supreme conqueror who put the Seven Kingdoms under one crown — a king, a dragon rider, and a builder of the world in equal measure.', age:64, spec:['ruler','armyCmd','kgCmd','ally','hand'] },
    { tier:'mythic',    vi:0, name:'Aegon the First and Greatest',   desc:'The supreme conqueror and builder of the known world — whose vision of a united realm endured for three hundred years. No general commanded more, no king ruled more, no dragon flew higher.', age:64, spec:['ruler','hand','armyCmd','kgCmd','ally','smallCouncil'] },
  ];

  NAMED['daemon-targaryen'] = [
    { tier:'starter',   vi:0, name:'Prince Daemon, Dragon Heir',     desc:'The younger brother of King Viserys I — brilliant, dangerous, and irresistible in equal measure.', age:20, spec:['kgCmd','kingsguard'] },
    { tier:'starter',   vi:1, name:'Commander of the City Watch',    desc:'Commander of the Gold Cloaks of King\'s Landing, who turned a rabble of cutpurses into a feared and loyal force.', age:25, spec:['kgCmd','armyCmd'] },
    { tier:'starter',   vi:2, name:'The Dark Prince',                desc:'Banished from court before he could grow roots there — Daemon Targaryen was always more dangerous in exile.', age:28, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'uncommon',  vi:0, name:'Daemon, Conqueror of the Stepstones', desc:'He who conquered the Stepstones and wore a driftwood crown — a self-made king in a kingdom of salt and pirates.', age:32, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'uncommon',  vi:1, name:'Lord of Dragonstone',            desc:'With Caraxes and Dark Sister, Daemon Targaryen was the most dangerous prince in the realm — and he knew it well.', age:35, spec:['kgCmd','armyCmd','kingsguard'] },
    { tier:'uncommon',  vi:2, name:'Daemon the Rogue Prince',        desc:'Banished from court more than once, Daemon thrived in exile — because a leashed dragon is a diminished one.', age:30, spec:['armyCmd','kgCmd','ruler','ally'] },
    { tier:'rare',      vi:0, name:'King of the Stepstones',         desc:'Self-proclaimed King of the Stepstones, who carved a realm from pirate kings and Free Cities with dragon and Dark Sister.', age:40, spec:['ruler','armyCmd','kgCmd','ally'] },
    { tier:'rare',      vi:1, name:'Champion of the Dance',          desc:'The most feared combatant of the Dance of the Dragons — riding Caraxes into battle against dragons and armies alike.', age:48, spec:['armyCmd','kgCmd','kingsguard','ruler'] },
    { tier:'rare',      vi:2, name:'Blood and Fire',                 desc:'Daemon Targaryen did not fight in wars. He was a war — burning, consuming, impossible to contain.', age:43, spec:['armyCmd','kgCmd','ruler','ally'] },
    { tier:'hero',      vi:0, name:'Daemon the Dragonknight',        desc:'A swordsman so gifted that no warrior in living memory could match him in individual combat with Dark Sister.', age:45, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'hero',      vi:1, name:'Prince Consort of the Blacks',   desc:'Husband to Rhaenyra, father of kings — a man of boundless ambition who finally found his cause worth dying for.', age:49, spec:['ruler','kgCmd','ally','armyCmd'] },
    { tier:'hero',      vi:2, name:'Daemon, Master of Dark Sister',  desc:'The blade and the man were one — Dark Sister had not been wielded so brilliantly in a century, and never would be again.', age:47, spec:['kgCmd','kingsguard','armyCmd','ally'] },
    { tier:'legendary', vi:0, name:'Daemon the Rogue Dragon',        desc:'The greatest warrior of the Dance — a dragon rider, swordsman, commander, and prince without peer, who shook the world and died as he lived: fighting.', age:49, spec:['kgCmd','armyCmd','kingsguard','ruler','ally'] },
    { tier:'legendary', vi:1, name:'Daemon Targaryen, the Eternal Flame', desc:'He burned too bright to last and too fiercely to be forgotten — the most captivating, dangerous, extraordinary Targaryen prince since Aegon himself.', age:49, spec:['kgCmd','armyCmd','kingsguard','ruler','ally'] },
    { tier:'mythic',    vi:0, name:'Daemon Targaryen, the Eternal Prince', desc:'In a world where he survived the Dance and ruled beside Rhaenyra, Daemon became the mightiest warrior-king Westeros had ever known — undefeated in battle, the eternal flame of House Targaryen.', age:60, spec:['ruler','armyCmd','kgCmd','kingsguard','ally'] },
  ];

  NAMED['rhaenyra'] = [
    { tier:'starter',   vi:0, name:'Princess of Dragonstone',        desc:'The King\'s firstborn daughter, beloved and named heir, riding her dragon at court with a princess\'s confidence.', age:12, spec:['ruler','consort'] },
    { tier:'starter',   vi:1, name:'The King\'s First Heir',         desc:'A girl who wanted to be a knight and became a queen — stubborn, brilliant, and destined for a dragon\'s throne.', age:14, spec:['ruler','heir'] },
    { tier:'starter',   vi:2, name:'Young Dragonrider',              desc:'Even as a child, Rhaenyra Targaryen flew Syrax above the Red Keep — a princess who would not be caged.', age:10, spec:['heir','ruler','ally'] },
    { tier:'uncommon',  vi:0, name:'Heir to the Iron Throne',        desc:'The Princess of Dragonstone, navigating treacherous succession politics with growing political savvy.', age:18, spec:['ruler','smallCouncil','ally'] },
    { tier:'uncommon',  vi:1, name:'Rhaenyra, Heiress of the Blacks', desc:'Princess and dragonrider, ruling her own seat and raising her sons to claim their rightful inheritance.', age:25, spec:['ruler','heir','ally'] },
    { tier:'uncommon',  vi:2, name:'Rhaenyra the Defiant',           desc:'She who refused to yield her birthright, rallying the Black cause with fire and the fury of a queen scorned.', age:28, spec:['ruler','ally','armyCmd'] },
    { tier:'rare',      vi:0, name:'The Black Queen',                desc:'She who raised her banner at Dragonstone and dared the Greens to come — the first queen to rule in her own name.', age:30, spec:['ruler','ally','armyCmd'] },
    { tier:'rare',      vi:1, name:'Queen Rhaenyra I',               desc:'The first queen to rule in her own name, holding court at Dragonstone with loyal dragon lords at her side.', age:32, spec:['ruler','ally','smallCouncil'] },
    { tier:'rare',      vi:2, name:'Rhaenyra, Champion of the Dance', desc:'The woman for whom the Dance of Dragons was fought — whose cause galvanized an entire faction into war.', age:31, spec:['ruler','armyCmd','ally'] },
    { tier:'hero',      vi:0, name:'Rhaenyra, the Realm\'s Delight', desc:'The beloved princess who became a queen — Syrax\'s rider, mother of dragons, and the heart of the Black cause.', age:33, spec:['ruler','consort','ally','smallCouncil'] },
    { tier:'hero',      vi:1, name:'Queen on the Iron Throne',       desc:'The first woman to sit the Iron Throne — briefly, brutally — and the last Targaryen queen who dared claim it by right.', age:34, spec:['ruler','ally','armyCmd','kgCmd'] },
    { tier:'hero',      vi:2, name:'Rhaenyra the Unbroken',          desc:'She bore the war, the dragons, the betrayals, the deaths of sons — and still she held her crown until the very end.', age:34, spec:['ruler','armyCmd','ally','smallCouncil'] },
    { tier:'legendary', vi:0, name:'Rhaenyra, the True Queen',       desc:'She for whom the Dance of Dragons was fought — a queen whose claim was just and whose supporters gave everything to uphold it.', age:34, spec:['ruler','ally','armyCmd','hand','smallCouncil'] },
    { tier:'legendary', vi:1, name:'Rhaenyra Targaryen, the Black Queen', desc:'The queen who shook the foundations of Westeros — whose war ended in tragedy but whose legacy reshaped the realm\'s understanding of power.', age:34, spec:['ruler','ally','armyCmd','hand'] },
    { tier:'mythic',    vi:0, name:'Rhaenyra Targaryen, Queen of All', desc:'In a world where she survived and ruled, Rhaenyra proved every doubter wrong — becoming the greatest queen in Westerosi history, uniting the Seven Kingdoms under just and brilliant rule.', age:55, spec:['ruler','hand','ally','smallCouncil','armyCmd','bank'] },
  ];

  NAMED['jaehaerys-i'] = [
    { tier:'starter',   vi:0, name:'Jaehaerys, Boy King',            desc:'A boy king who inherited chaos and immediately began the work of rebuilding the shattered realm.', age:14, spec:['ruler','hand'] },
    { tier:'starter',   vi:1, name:'The Young Conciliator',          desc:'The young dragonrider whose calm intelligence and wisdom outpaced his years by a generation.', age:16, spec:['ruler','ally'] },
    { tier:'starter',   vi:2, name:'Jaehaerys the Reformer',         desc:'A king with a vision of peace and law — who began codifying Westeros\'s scattered customs into something just.', age:20, spec:['ruler','hand','smallCouncil'] },
    { tier:'uncommon',  vi:0, name:'Jaehaerys the Conciliator',      desc:'The king who ended the Faith Militant, codified the law, and built the Kingsroad — a reformer of extraordinary vision.', age:25, spec:['ruler','hand','smallCouncil'] },
    { tier:'uncommon',  vi:1, name:'The Long-Reigning King',         desc:'He who sat the throne longer than any other and kept the peace while the realm grew rich beyond measure.', age:40, spec:['ruler','hand','bank','ally'] },
    { tier:'uncommon',  vi:2, name:'Builder of Roads',               desc:'He who ordered the Kingsroad built — the greatest infrastructure project in Westerosi history, connecting a fractured realm.', age:30, spec:['ruler','hand','bank'] },
    { tier:'rare',      vi:0, name:'Jaehaerys the Wise',             desc:'The king whose reign was one of the greatest in Westerosi history — peace, prosperity, and progress for sixty years.', age:55, spec:['ruler','hand','smallCouncil','bank'] },
    { tier:'rare',      vi:1, name:'Lawgiver of Westeros',           desc:'He who summoned the Great Council and let the lords choose the succession — wisdom in an age of dragons.', age:65, spec:['ruler','hand','ally','smallCouncil'] },
    { tier:'rare',      vi:2, name:'Jaehaerys, Pacifier of the Faith', desc:'He who abolished the Faith Militant and ended a century of religious strife — by persuasion, not by force.', age:40, spec:['ruler','hand','ally','smallCouncil'] },
    { tier:'hero',      vi:0, name:'Jaehaerys the Old King',         desc:'The greatest peacetime ruler in Targaryen history — wise, long-reigning, beloved, and immovably just to the very end.', age:69, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'hero',      vi:1, name:'Jaehaerys the Lawgiver',         desc:'The king who wrote the laws that governed Westeros for centuries — a legislative genius who turned royal whim into enduring code.', age:50, spec:['ruler','hand','smallCouncil','heir','bank'] },
    { tier:'hero',      vi:2, name:'The Five-Decade King',           desc:'Sixty years on the Iron Throne. Sixty years of peace, law, and growth. No king before or since came close.', age:60, spec:['ruler','hand','bank','ally'] },
    { tier:'legendary', vi:0, name:'Jaehaerys I, Father of a Golden Age', desc:'The greatest king in Targaryen history — whose sixty-year reign transformed Westeros into the most prosperous kingdom it had ever been.', age:69, spec:['ruler','hand','smallCouncil','bank','ally','heir'] },
    { tier:'legendary', vi:1, name:'Jaehaerys the Great Conciliator', desc:'The Old King — wise beyond age, patient beyond measure, and just beyond all others. His like was never seen again.', age:69, spec:['ruler','hand','smallCouncil','bank','ally','heir'] },
    { tier:'mythic',    vi:0, name:'Jaehaerys I, the Eternal Conciliator', desc:'In a world where he ruled longer still, Jaehaerys Targaryen transcended kingship — the living embodiment of just rule, whose legacy shaped every monarch who followed for a thousand years.', age:80, spec:['ruler','hand','smallCouncil','bank','ally','heir','consort'] },
  ];

  NAMED['tyrion'] = [
    { tier:'starter',   vi:0, name:'Tyrion Lannister, the Imp',      desc:'The witty and scorned youngest son of Tywin Lannister, surviving on cunning alone.', age:22, spec:['smallCouncil','ally'] },
    { tier:'starter',   vi:1, name:'Prisoner of the Eyrie',          desc:'Imprisoned in the Eyrie\'s sky cells, Tyrion uses his wits to demand a trial by combat — and wins.', age:23, spec:['smallCouncil'] },
    { tier:'starter',   vi:2, name:'Young Lord of Casterly Rock',     desc:'A Lannister heir mocked by all who forget that a mind like Tyrion\'s is worth a thousand swords.', age:20, spec:['smallCouncil','bank'] },
    { tier:'starter',   vi:3, name:'Tyrion the Scholar',             desc:'The boy who read every book in Casterly Rock\'s library — and remembered every word of every one.', age:18, spec:['hand','smallCouncil'] },
    { tier:'uncommon',  vi:0, name:'Beyond the Wall',                desc:'The traveling imp who visited Castle Black and gained rare perspective on the realm\'s true dangers.', age:24, spec:['smallCouncil','hand'] },
    { tier:'uncommon',  vi:1, name:'Captain of the Hill Clans',      desc:'Tyrion led a force of wild Vale hill clans to unexpected victory — a tactical success that surprised even him.', age:25, spec:['armyCmd','smallCouncil'] },
    { tier:'uncommon',  vi:2, name:'Tyrion the Sellsword',           desc:'In Essos without a name, Tyrion Lannister survived on his wits and the charity of those who underestimated him.', age:30, spec:['armyCmd','ally'] },
    { tier:'uncommon',  vi:3, name:'Tyrion in Exile',                desc:'Stripped of everything, Tyrion fled across the Narrow Sea — and found, to his surprise, that he was still himself.', age:32, spec:['hand','ally'] },
    { tier:'rare',      vi:0, name:'Hand of the King',               desc:'Appointed acting Hand by his father, Tyrion ran King\'s Landing with surprising competence and sharp political cunning.', age:26, spec:['hand','smallCouncil','ruler'] },
    { tier:'rare',      vi:1, name:'Defender of King\'s Landing',    desc:'The architect of the Blackwater defense — wildfire, chain, and tactical brilliance that saved the capital from destruction.', age:26, spec:['armyCmd','hand','kgCmd'] },
    { tier:'rare',      vi:2, name:'Lord of Casterly Rock',          desc:'Heir to the Rock — the title Tywin would never grant but which should have been Tyrion\'s by every right of blood.', age:28, spec:['ruler','bank','smallCouncil'] },
    { tier:'rare',      vi:3, name:'The Accused',                    desc:'Standing trial for a crime he did not commit, Tyrion Lannister chose to fight — and demanded the trial by combat that shook the city.', age:27, spec:['hand','ally'] },
    { tier:'hero',      vi:0, name:'Tyrion Lannister, Master of Coin', desc:'The most politically gifted Lannister, running the kingdom\'s finances with sharp wit and surprising integrity.', age:28, spec:['hand','smallCouncil','bank'] },
    { tier:'hero',      vi:1, name:'Hand to the Dragon Queen',       desc:'Serving Daenerys as Hand, Tyrion counsels restraint and strategy to the most powerful ruler in the world.', age:35, spec:['hand','smallCouncil','ally'] },
    { tier:'hero',      vi:2, name:'King Tyrion',                    desc:'In an age where merit mattered more than birth, Tyrion Lannister claimed a crown through sheer intellectual force — and wore it better than any Lannister before him.', age:40, spec:['ruler','hand','smallCouncil'] },
    { tier:'hero',      vi:3, name:'Tyrion the Kingmaker',           desc:'The power behind every throne he served — whose counsel made kings and whose wit kept them there.', age:38, spec:['hand','smallCouncil','ally'] },
    { tier:'legendary', vi:0, name:'Tyrion Lannister, Hand of the King', desc:'The most gifted political mind of his generation, who served multiple rulers and shaped the fate of the realm from the shadows.', age:40, spec:['hand','smallCouncil','bank','ally'] },
    { tier:'legendary', vi:1, name:'Lord Tyrion, Voice of the South', desc:'The Lannister who outlasted them all — whose counsel rebuilt kingdoms and whose legacy was written in law, not blood.', age:45, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'mythic',    vi:0, name:'Tyrion Lannister, Architect of Peace', desc:'In the age of the Six Kingdoms, Tyrion transformed chaos into lasting order — the greatest Hand the realm ever had, whose legacy outlived every throne he served.', age:55, spec:['hand','smallCouncil','bank','ruler','ally'] },
  ];

  NAMED['tywin'] = [
    { tier:'starter',   vi:0, name:'Tywin, Young Heir of the Rock',  desc:'A young heir to Casterly Rock determined to restore the name of Lannister to its former glory at any cost.', age:16, spec:['hand','ruler'] },
    { tier:'starter',   vi:1, name:'Lord of Casterly Rock',          desc:'The Lord of Casterly Rock and Warden of the West, whose cold authority keeps the Westerlands in perfect order.', age:40, spec:['ruler','smallCouncil'] },
    { tier:'starter',   vi:2, name:'Tywin, Cupbearer to the King',   desc:'A ten-year-old Lannister boy, serving Aegon V Targaryen at court — already watching, already learning, already planning to be more than a cupbearer.', age:10, spec:['hand','smallCouncil'] },
    { tier:'starter',   vi:3, name:'The Young Lion',                 desc:'Before his ambition calcified into ruthlessness, Tywin Lannister was a brilliant young nobleman burning to prove himself.', age:17, spec:['ruler','armyCmd'] },
    { tier:'uncommon',  vi:0, name:'Tywin Lannister, Hand of the King', desc:'The most powerful Hand in living memory — a man who ran the kingdom while the king jousted and drank.', age:42, spec:['hand','smallCouncil','ruler'] },
    { tier:'uncommon',  vi:1, name:'Tywin of Castamere',             desc:'The lord who destroyed two great houses before his twentieth year, setting the tone for his entire reign of terror.', age:19, spec:['armyCmd','ruler','hand'] },
    { tier:'uncommon',  vi:2, name:'He Who Sacked King\'s Landing',  desc:'The man who opened the gates for Robert Baratheon while secretly ordering the murder of every Targaryen he could find.', age:45, spec:['armyCmd','ruler','hand'] },
    { tier:'uncommon',  vi:3, name:'The Cold Lion',                  desc:'Even among Lannisters, Tywin was uniquely, terribly cold. There was no warmth in him — and that made him very effective.', age:35, spec:['ruler','hand'] },
    { tier:'rare',      vi:0, name:'Tywin the Crimson Lion',         desc:'He who answered Robb Stark\'s brilliant campaign with the systematic destruction of every house that stood against him.', age:55, spec:['armyCmd','ruler','hand','smallCouncil'] },
    { tier:'rare',      vi:1, name:'Architect of the Red Wedding',   desc:'The mind behind the Red Wedding — a political masterstroke that ended the War of the Five Kings in a single, horrifying night.', age:56, spec:['hand','smallCouncil','ruler','armyCmd'] },
    { tier:'rare',      vi:2, name:'The Schemer Without Equal',      desc:'Every war Tywin fought was already half-won in the planning — his enemies never understood the game until it was over.', age:55, spec:['hand','smallCouncil','ruler'] },
    { tier:'rare',      vi:3, name:'Lord Paramount of the Westerlands', desc:'Over the Westerlands, Tywin Lannister ruled absolutely — no Lannister bannerman questioned his word twice.', age:57, spec:['ruler','bank','armyCmd'] },
    { tier:'hero',      vi:0, name:'Tywin, Shield of the Rock',      desc:'The supreme military-political strategist of his age — no campaign he commanded was ever truly lost.', age:58, spec:['armyCmd','hand','ruler','smallCouncil'] },
    { tier:'hero',      vi:1, name:'Tywin the Kingmaker',            desc:'The man who made kings and unmade them with equal ease, whose true power sat behind every throne of gold.', age:59, spec:['hand','ruler','smallCouncil','bank'] },
    { tier:'hero',      vi:2, name:'The Great Lion at Full Power',   desc:'In the years of his absolute authority, Tywin Lannister was the most powerful man in Westeros — and he never forgot it for a moment.', age:58, spec:['armyCmd','hand','ruler','smallCouncil'] },
    { tier:'hero',      vi:3, name:'Tywin the Unconquered',          desc:'In every war Tywin fought, he either won or ensured his enemies paid a price that made winning irrelevant.', age:59, spec:['ruler','hand','bank','armyCmd'] },
    { tier:'legendary', vi:0, name:'Tywin Lannister, the Great Lion', desc:'A titan of the game of thrones — a man who defined an era of iron governance, military supremacy, and dynastic mastery the realm had never seen.', age:60, spec:['ruler','hand','smallCouncil','armyCmd','bank'] },
    { tier:'legendary', vi:1, name:'Tywin, the Last Patriarch',      desc:'The Lannister who made Lannisters matter — whose iron grip held a dynasty together by sheer will and whose absence unmade it.', age:60, spec:['ruler','hand','smallCouncil','armyCmd','bank','heir'] },
    { tier:'mythic',    vi:0, name:'Tywin Lannister, Eternal Patriarch', desc:'In a world where he lived long enough to finish what he started, Tywin Lannister built an empire that lasted centuries — the most consequential ruler, strategist, and patriarch in the history of Westeros.', age:75, spec:['ruler','hand','smallCouncil','armyCmd','bank','heir'] },
  ];

  NAMED['jon-snow-stark'] = [
    { tier:'starter',   vi:0, name:'Jon of House Stark',             desc:'The bastard son of Eddard Stark, dutiful and honorable, training in Winterfell\'s yard with Ghost at his side.', age:14, spec:['kingsguard'] },
    { tier:'starter',   vi:1, name:'The Bastard of Winterfell',      desc:'A boy who didn\'t fit — not lord, not true-born, not sure of his place in the world — and who set out to find one.', age:15, spec:['kingsguard','ally'] },
    { tier:'starter',   vi:2, name:'Jon, the Crow',                  desc:'A new recruit at Castle Black, raw and idealistic, learning the harsh realities of life at the Wall.', age:15, spec:['kingsguard','armyCmd'] },
    { tier:'uncommon',  vi:0, name:'Jon Snow, Ranger of the Watch',  desc:'A ranger who ventured beyond the Wall and returned with hard-won knowledge of the true enemy.', age:17, spec:['armyCmd','kingsguard','kgCmd'] },
    { tier:'uncommon',  vi:1, name:'Chosen Steward',                 desc:'Chosen as steward to Lord Commander Mormont, Jon proves himself as a rising leader beyond the Wall.', age:16, spec:['hand','smallCouncil'] },
    { tier:'uncommon',  vi:2, name:'Jon the Wildling Infiltrator',   desc:'He who lived among the Free Folk and loved one of them — and returned to the Watch changed in every way that matters.', age:18, spec:['armyCmd','ally'] },
    { tier:'rare',      vi:0, name:'Lord Commander of the Night\'s Watch', desc:'Elected Lord Commander, Jon governs the Wall with an iron sense of duty and a vision none before him had held.', age:18, spec:['ruler','armyCmd'] },
    { tier:'rare',      vi:1, name:'The Man Who Came Back',          desc:'Killed and resurrected by the Red Woman, Jon Snow returns with a new purpose and a freedom from his vows.', age:19, spec:['kgCmd','armyCmd'] },
    { tier:'rare',      vi:2, name:'Commander of Castle Black',      desc:'He rebuilt the Night\'s Watch, held the Wall, and forged an alliance with the Free Folk — all before his twentieth year.', age:18, spec:['ruler','armyCmd','kgCmd'] },
    { tier:'hero',      vi:0, name:'King in the North',              desc:'Proclaimed King in the North by the lords who bent the knee, Jon leads the North toward the Long Night ahead.', age:20, spec:['ruler','armyCmd','kgCmd'] },
    { tier:'hero',      vi:1, name:'Jon the Dragon Rider',           desc:'Heir to the Iron Throne by blood, who rode Rhaegal into battle — a warrior of legendary lineage finally revealed.', age:21, spec:['kgCmd','armyCmd','kingsguard'] },
    { tier:'hero',      vi:2, name:'Shield of the Realm',            desc:'The man who united wildings and watchmen, lords and freefolk, against a threat none of them wanted to believe in.', age:21, spec:['ruler','armyCmd','kgCmd','ally'] },
    { tier:'legendary', vi:0, name:'Jon Stark, Guardian of the North', desc:'The man who forged the alliance between the living and the dead, whose sacrifice ended the Long Night forever.', age:22, spec:['ruler','armyCmd','hand','ally'] },
    { tier:'legendary', vi:1, name:'Jon Snow, the Last Hero',        desc:'Some legends end in triumph. Some end in sacrifice. Jon Snow\'s ended in both — the last hero who gave everything for the living.', age:22, spec:['ruler','armyCmd','kgCmd','ally','hand'] },
    { tier:'mythic',    vi:0, name:'Aegon Targaryen, the True King', desc:'In a world where he embraced his Targaryen heritage, Aegon VI united the Seven Kingdoms under a just and enlightened reign, breaking the wheel his ancestor forged.', age:35, spec:['ruler','hand','armyCmd','smallCouncil','ally'] },
  ];

  NAMED['jon-snow-targ'] = [
    { tier:'starter',   vi:0, name:'The Prince in Hiding',           desc:'A young man who does not yet know the truth of his birth — the secret heir to the Iron Throne.', age:18, spec:['ruler','heir'] },
    { tier:'starter',   vi:1, name:'Jon the Secret Prince',          desc:'The moment the world changes — when Jon Snow learns he is Aegon Targaryen, and everything must be reconsidered.', age:19, spec:['ruler','ally'] },
    { tier:'uncommon',  vi:0, name:'Aegon VI, Dragon Rider',         desc:'The prince who rode Rhaegal and felt the truth of his lineage in the fire and wind above Westeros.', age:20, spec:['kgCmd','armyCmd'] },
    { tier:'uncommon',  vi:1, name:'Jon Snow, the Reluctant Heir',   desc:'A man caught between two identities and two loyalties — and forced to choose which one defines him.', age:20, spec:['ruler','hand','ally'] },
    { tier:'rare',      vi:0, name:'Aegon Targaryen, the Claimant', desc:'The rightful heir who refused the throne and chose duty over power — a choice that defined the age.', age:21, spec:['ruler','armyCmd','ally'] },
    { tier:'rare',      vi:1, name:'Jon Beyond All Walls',           desc:'Exiled to the true north, Jon Snow finally finds peace beyond all borders — and lives as he was always meant to.', age:23, spec:['armyCmd','ally','kgCmd'] },
    { tier:'hero',      vi:0, name:'Aegon VI, the Reluctant King',   desc:'A king who never wanted the crown but bore its weight with more grace than most who craved it.', age:22, spec:['ruler','hand','armyCmd','ally'] },
    { tier:'hero',      vi:1, name:'The Man Who Died and Lived Again', desc:'The only man in history to die and return — carrying lessons from the other side of the grave.', age:24, spec:['kgCmd','armyCmd','ruler','kingsguard'] },
    { tier:'legendary', vi:0, name:'Aegon Targaryen, the Dragon and the Wolf', desc:'Ice and fire made flesh — the prince who was promised, whose lineage carried the fate of the living world.', age:25, spec:['ruler','armyCmd','kgCmd','ally','hand'] },
    { tier:'mythic',    vi:0, name:'Aegon VI, the Eternal King',     desc:'In a world where he claimed his birthright and ruled, Aegon Targaryen became the greatest king since Jaehaerys — a warrior-ruler of rare justice and undeniable power who united the realm once and for all.', age:40, spec:['ruler','hand','armyCmd','kgCmd','ally','smallCouncil'] },
  ];

  NAMED['cersei'] = [
    { tier:'starter',   vi:0, name:'Cersei of Casterly Rock',        desc:'The proud daughter of Tywin Lannister, whose beauty and ambition were her first and most dangerous weapons.', age:14, spec:['consort'] },
    { tier:'starter',   vi:1, name:'Queen Cersei Baratheon',         desc:'Queen consort to Robert Baratheon, playing the role of dutiful queen while plotting her true ambitions in secret.', age:25, spec:['consort','smallCouncil'] },
    { tier:'starter',   vi:2, name:'The Golden Lioness',             desc:'Tywin\'s daughter and Jaime\'s twin — born to be queen, convinced of it from the moment she could form the thought.', age:18, spec:['consort','heir'] },
    { tier:'uncommon',  vi:0, name:'Queen Regent',                   desc:'Ruling as regent for Joffrey, Cersei finally holds the power she always believed was hers by right of Lannister blood.', age:38, spec:['ruler','smallCouncil'] },
    { tier:'uncommon',  vi:1, name:'Cersei and Robert Strong',       desc:'Armed with Robert Strong and iron will, Cersei weathers every trial and refuses to bend a single inch.', age:39, spec:['kgCmd','ruler'] },
    { tier:'uncommon',  vi:2, name:'The Proud Queen',                desc:'Every enemy she made, she made because she refused to pretend she was anything less than what she was.', age:36, spec:['consort','ruler','smallCouncil'] },
    { tier:'rare',      vi:0, name:'Cersei the Wildfire Queen',      desc:'The queen who burned the Great Sept of Baelor to ash, eliminating every enemy in a single, terrible stroke.', age:40, spec:['ruler','kgCmd','armyCmd'] },
    { tier:'rare',      vi:1, name:'The Lion Queen',                 desc:'The last Lannister on the throne, ruling the ashes of the game of thrones with an unbreakable grip of iron.', age:41, spec:['ruler','smallCouncil'] },
    { tier:'rare',      vi:2, name:'Cersei the Schemer',             desc:'She who played the game of thrones on her own terms — without a council, without an advisor, without mercy.', age:40, spec:['hand','smallCouncil','ruler'] },
    { tier:'hero',      vi:0, name:'Cersei I, First of Her Name',    desc:'The first woman to openly rule the Seven Kingdoms as Queen in her own right — by any means necessary.', age:42, spec:['ruler','smallCouncil','kgCmd'] },
    { tier:'hero',      vi:1, name:'The Lioness Rampant',            desc:'In her prime, Cersei Lannister was the most dangerous political creature in the Seven Kingdoms — beautiful, cunning, and utterly ruthless.', age:35, spec:['ruler','consort','smallCouncil','ally'] },
    { tier:'hero',      vi:2, name:'Cersei, Regent Supreme',         desc:'At the height of her power, no one moved in Westeros without Cersei Lannister knowing — and approving — it first.', age:42, spec:['ruler','smallCouncil','hand','kgCmd'] },
    { tier:'legendary', vi:0, name:'Cersei the Lionhearted',         desc:'A queen whose iron will and fierce love for her children drove her to heights of power no woman before her had reached — and few men either.', age:43, spec:['ruler','smallCouncil','bank','kgCmd'] },
    { tier:'legendary', vi:1, name:'Cersei Lannister, the Iron Queen', desc:'She who sat the Iron Throne through war, fire, and treachery — and never for one moment pretended to be anything other than what she was.', age:43, spec:['ruler','smallCouncil','bank','kgCmd','hand'] },
    { tier:'mythic',    vi:0, name:'Cersei Lannister, Eternal Queen', desc:'In a world where she never fell, Cersei Lannister forged the most powerful dynasty Westeros had ever seen — ruling with cunning, fire, and an iron crown that none dared remove.', age:60, spec:['ruler','smallCouncil','bank','hand','ally'] },
  ];

  NAMED['jaime-prime'] = [
    { tier:'starter',   vi:0, name:'Ser Jaime Lannister',            desc:'The most celebrated knight of his generation — golden, beautiful, and smiling as he commits treasonous murder.', age:20, spec:['kgCmd','kingsguard'] },
    { tier:'starter',   vi:1, name:'The Youngest Kingsguard',        desc:'The youngest knight ever named to the Kingsguard, who keeps a secret that would destroy the realm.', age:22, spec:['kingsguard','kgCmd'] },
    { tier:'starter',   vi:2, name:'The Golden Knight',              desc:'Before the war, before the capture, before the golden hand — Jaime Lannister was simply the finest sword alive.', age:18, spec:['kingsguard','kgCmd','armyCmd'] },
    { tier:'uncommon',  vi:0, name:'The Kingslayer',                 desc:'The knight who drove his sword through the Mad King\'s back — an act of mercy the realm called treason for decades.', age:24, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'uncommon',  vi:1, name:'Commander of the Lannister Host', desc:'Commanding Lannister forces in the Riverlands with tactical brilliance — one of Westeros\'s finest field commanders.', age:35, spec:['armyCmd','kgCmd'] },
    { tier:'uncommon',  vi:2, name:'Knight Who Killed a King',       desc:'History called it treason. Jaime knew it was the only act of pure conscience he ever committed.', age:24, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'rare',      vi:0, name:'The Lion in Chains',             desc:'A humbled Jaime, captured by the Starks and marched in chains — beginning to find himself without his sword hand.', age:36, spec:['kingsguard','ally'] },
    { tier:'rare',      vi:1, name:'Bearer of Oathkeeper',           desc:'He who gave Brienne of Tarth a Valyrian steel sword and charged her with keeping the Stark girls safe.', age:37, spec:['kgCmd','kingsguard','ally'] },
    { tier:'rare',      vi:2, name:'Jaime, Champion Unbroken',       desc:'Even in chains, even humbled, even stripped of his identity — the best swordsman alive remained exactly that.', age:38, spec:['kgCmd','kingsguard'] },
    { tier:'hero',      vi:0, name:'Jaime the Golden Lion',          desc:'At his peak, Ser Jaime Lannister was the finest sword in the Seven Kingdoms — a warrior of unparalleled skill and blazing glory.', age:30, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'hero',      vi:1, name:'Lord Commander of the Kingsguard', desc:'A battle-scarred veteran reforming the Kingsguard into something the realm could be proud of.', age:38, spec:['kgCmd','kingsguard','ruler','smallCouncil'] },
    { tier:'hero',      vi:2, name:'The Lion at Full Strength',      desc:'No rider was faster, no blade was keener, no knight was more feared — Jaime Lannister in his prime was beyond compare.', age:28, spec:['kgCmd','kingsguard','armyCmd','ruler'] },
    { tier:'legendary', vi:0, name:'Jaime Lannister, the Golden Lion', desc:'A legend of the sword and a man who could have been the greatest knight who ever lived — if only he had chosen differently.', age:40, spec:['kgCmd','kingsguard','armyCmd','hand'] },
    { tier:'legendary', vi:1, name:'Ser Jaime, Knight of Legends',   desc:'The knight whose name echoed through every tourney, every war, every court — the golden standard all others were measured against.', age:40, spec:['kgCmd','kingsguard','armyCmd','ruler','ally'] },
    { tier:'mythic',    vi:0, name:'Jaime Lannister, the Knight of Knights', desc:'In a world where he kept his vows and his honor from the start, Jaime Lannister became the most celebrated warrior-statesman in history — a shining example of all a knight could be.', age:55, spec:['kgCmd','kingsguard','armyCmd','ruler','hand'] },
  ];

  NAMED['jaime-post'] = [
    { tier:'starter',   vi:0, name:'Jaime One-Hand',                 desc:'Returned to King\'s Landing without his sword hand — a broken knight beginning the work of rebuilding his identity.', age:38, spec:['kingsguard','ally'] },
    { tier:'starter',   vi:1, name:'The Left-Handed Knight',         desc:'Learning to fight with his weaker hand, humbled and determined to reclaim something of what he lost.', age:39, spec:['kgCmd','kingsguard'] },
    { tier:'uncommon',  vi:0, name:'Cersei\'s Shadow',               desc:'Still loyal to his sister, still tangled in the Lannister web — but the beginnings of doubt are there.', age:40, spec:['kgCmd','ruler','ally'] },
    { tier:'uncommon',  vi:1, name:'Jaime, Stormlands Campaign',     desc:'Commanding armies in the field still, even with a golden hand — proving he remains one of the realm\'s finest minds.', age:41, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'rare',      vi:0, name:'Conqueror of Highgarden',        desc:'He who seized Highgarden for the crown with cunning strategy — a victory that showed he had lost none of his martial brilliance.', age:42, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'rare',      vi:1, name:'Jaime Breaking Free',            desc:'The knight who finally walked away from Cersei and rode north to fight for the living — choosing honor over love.', age:43, spec:['kgCmd','kingsguard','ally','armyCmd'] },
    { tier:'hero',      vi:0, name:'Jaime the Redeemed',             desc:'He who rode to Winterfell to keep a promise, fighting in the darkness against the army of the dead.', age:43, spec:['kgCmd','armyCmd','kingsguard','ally'] },
    { tier:'hero',      vi:1, name:'The Oathkeeper',                 desc:'A knight who spent a lifetime trying to undo one act — and came closer than most men ever could.', age:44, spec:['kgCmd','kingsguard','ruler','ally'] },
    { tier:'legendary', vi:0, name:'Jaime Lannister, Keeper of Oaths', desc:'In the end, Jaime Lannister kept more oaths than anyone remembered. A complicated man who chose, in the moments that mattered, to be a knight.', age:44, spec:['kgCmd','kingsguard','armyCmd','ally','hand'] },
    { tier:'mythic',    vi:0, name:'Jaime Lannister, the Second Legend', desc:'In a world where he lived and continued to rebuild, Jaime became a figure of true legend — the greatest redemption story Westeros ever produced, warrior and statesman and knight all at once.', age:60, spec:['kgCmd','kingsguard','armyCmd','ruler','hand'] },
  ];

  NAMED['rhaegar'] = [
    { tier:'starter',   vi:0, name:'Rhaegar the Scholar',            desc:'A bookish, melancholy prince who read a prophecy in the Dragonstone library and changed the course of history.', age:15, spec:['smallCouncil','hand'] },
    { tier:'starter',   vi:1, name:'Rhaegar, Knight in Training',    desc:'The heir who trained himself into one of the finest knights in the realm — and then won the greatest tourney ever held.', age:20, spec:['kgCmd','kingsguard'] },
    { tier:'starter',   vi:2, name:'Prince of the Silver Harp',      desc:'He who played music that made grown men weep — a prince of rare sensitivity and uncommon beauty.', age:17, spec:['consort','ally'] },
    { tier:'uncommon',  vi:0, name:'Rhaegar the Victor of Harrenhal', desc:'He who crowned Lyanna Stark with winter roses and changed the fate of Westeros forever with a simple gesture.', age:26, spec:['ruler','consort','ally'] },
    { tier:'uncommon',  vi:1, name:'The Dragon\'s Crown Prince',     desc:'Crown prince of the Seven Kingdoms, whose brilliance and tragedy were equally vast and equally his own.', age:27, spec:['ruler','kgCmd','hand'] },
    { tier:'rare',      vi:0, name:'Keeper of Lyanna',               desc:'The prince who lived in secret with Lyanna Stark, whose love for her birthed the prince that was promised.', age:28, spec:['ruler','consort','ally'] },
    { tier:'rare',      vi:1, name:'Rhaegar the Fated',              desc:'He who rode to the Trident to face Robert Baratheon — knowing perhaps that prophecy required his death.', age:28, spec:['kgCmd','kingsguard','ruler','armyCmd'] },
    { tier:'hero',      vi:0, name:'Rhaegar the Silver Prince',      desc:'The most beloved prince of his age — scholar, warrior, musician, and prophet — whose death broke the world.', age:28, spec:['ruler','kgCmd','smallCouncil','hand'] },
    { tier:'hero',      vi:1, name:'The Prince That Was Promised',   desc:'The prince who believed he was prophecy made flesh — and whose love for Lyanna Stark set kingdoms burning.', age:28, spec:['ruler','kgCmd','armyCmd','hand'] },
    { tier:'legendary', vi:0, name:'Rhaegar, Prince of Destiny',     desc:'The prince who saw the future in the stars, who sacrificed himself for a prophecy that would be fulfilled in his son — the greatest tragic figure of his age.', age:28, spec:['ruler','kgCmd','armyCmd','hand','ally'] },
    { tier:'mythic',    vi:0, name:'King Rhaegar I Targaryen',       desc:'In the world where he lived, Rhaegar ascended as the wisest, most beloved king in Targaryen history — ruler, warrior, father of the chosen one, and architect of an age of dragons reborn.', age:45, spec:['ruler','hand','armyCmd','kgCmd','ally','smallCouncil'] },
  ];

  NAMED['sansa'] = [
    { tier:'starter',   vi:0, name:'Sansa Stark, the Betrothed',     desc:'A sweet-natured girl betrothed to a prince, dreaming of songs and chivalry with innocent joy.', age:13, spec:['consort'] },
    { tier:'starter',   vi:1, name:'The Little Bird',                desc:'A hostage of the Lannisters, enduring cruelty with forced smiles while her mind quietly adapts.', age:14, spec:['consort','ally'] },
    { tier:'starter',   vi:2, name:'Sansa, Northern Lady',           desc:'The eldest daughter of Winterfell — raised to rule, raised to endure, raised for a world that was crueler than she expected.', age:12, spec:['consort','heir'] },
    { tier:'uncommon',  vi:0, name:'Alayne Stone',                   desc:'Spirited to the Vale by Littlefinger under a false name, Sansa learns to play the game from a master — and survive it.', age:16, spec:['hand','ally','smallCouncil'] },
    { tier:'uncommon',  vi:1, name:'Lady of the Court',              desc:'The little bird in a gilded cage, learning the dangerous art of political survival inside the Red Keep.', age:15, spec:['consort','smallCouncil'] },
    { tier:'uncommon',  vi:2, name:'Sansa under the Mockingbird',    desc:'Masquerading as Alayne Stone, Sansa learns the game of thrones from its finest — and most dangerous — player.', age:17, spec:['smallCouncil','hand','ally'] },
    { tier:'rare',      vi:0, name:'Sansa Stark, Lady of Winterfell', desc:'Returned to Winterfell as its Lady, Sansa governs with quiet competence and steely political acumen.', age:18, spec:['ruler','smallCouncil','hand'] },
    { tier:'rare',      vi:1, name:'The Winter Wolf',                desc:'Cold and calculating, Sansa Stark learned from the best and the worst — and survived them all.', age:18, spec:['ruler','hand','ally'] },
    { tier:'rare',      vi:2, name:'Sansa, Voice of the North',      desc:'She speaks for the North in every council — and the North listens, because she has never once been wrong.', age:18, spec:['ruler','hand','smallCouncil'] },
    { tier:'hero',      vi:0, name:'Sansa Stark, Defender of Winterfell', desc:'She who held Winterfell\'s halls and its people together through siege and betrayal, never once breaking.', age:19, spec:['ruler','smallCouncil','hand','ally'] },
    { tier:'hero',      vi:1, name:'The Red Wolf',                   desc:'Lady of Winterfell and Queen in the North — the Red Wolf governs with an iron hand hidden in a velvet glove.', age:20, spec:['ruler','hand','smallCouncil','consort'] },
    { tier:'hero',      vi:2, name:'The Northern Queen',             desc:'Sansa Stark remade herself in the image of every hardship she survived — and emerged something formidable.', age:20, spec:['ruler','hand','smallCouncil','ally'] },
    { tier:'legendary', vi:0, name:'Queen Sansa, the North Remembers', desc:'Queen in the North who never bent the knee, who built the North into a free and prosperous kingdom on her own terms.', age:25, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'legendary', vi:1, name:'Sansa the Cold Queen',           desc:'She who survived everything Westeros threw at her — the tragedies, the betrayals, the monsters — and came out the other side a queen.', age:26, spec:['ruler','hand','smallCouncil','ally','bank'] },
    { tier:'mythic',    vi:0, name:'Sansa Stark the Wise Queen',     desc:'The greatest peacetime ruler in Northern history — a monarch who turned the scars of war into the foundation of a golden age, wise beyond her years and ruthless in pursuit of justice.', age:50, spec:['ruler','hand','smallCouncil','bank','heir','ally'] },
  ];

  NAMED['sansa-qitn'] = [
    { tier:'starter',   vi:0, name:'Lady Sansa, Returned Home',      desc:'Home at last, Sansa Stark reclaims Winterfell and begins the slow work of rebuilding what was broken.', age:20, spec:['ruler','ally'] },
    { tier:'starter',   vi:1, name:'Sansa, Warden of the North',     desc:'Acting lord of the North while her brother fights wars in the south, Sansa proves a capable and steady hand.', age:21, spec:['ruler','smallCouncil'] },
    { tier:'uncommon',  vi:0, name:'Sansa the Shrewd',               desc:'The scheming Stark daughter who played Littlefinger and the knights of the Vale like pieces on a board.', age:21, spec:['smallCouncil','hand','ruler'] },
    { tier:'uncommon',  vi:1, name:'The Winter Rose',                desc:'Cold and calculating, Sansa Stark learned from the best and the worst — and survived them all.', age:22, spec:['ruler','hand','ally'] },
    { tier:'rare',      vi:0, name:'Sansa Stark, Northern Queen',    desc:'The Queen in the North who won independence for her people through political skill no sword could match.', age:22, spec:['ruler','hand','smallCouncil','ally'] },
    { tier:'rare',      vi:1, name:'Voice of the Free North',        desc:'She speaks for the North in every council — and the North listens, because she has never once been wrong.', age:23, spec:['ruler','hand','smallCouncil'] },
    { tier:'hero',      vi:0, name:'Queen Sansa I of the North',     desc:'The first Queen in the North since the age of the Old Kings — a ruler who remade the North in her own image.', age:24, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'hero',      vi:1, name:'Sansa Stark, the Last Wolf',     desc:'The last Stark standing in Winterfell\'s halls — and the most politically formidable of the lot.', age:25, spec:['ruler','hand','smallCouncil','heir'] },
    { tier:'legendary', vi:0, name:'Sansa the Great',                desc:'A sovereign who matched and surpassed every lord who underestimated her — the greatest queen the North ever produced.', age:35, spec:['ruler','hand','smallCouncil','bank','ally','heir'] },
    { tier:'mythic',    vi:0, name:'Sansa Stark, Eternal Queen of the North', desc:'Her reign lasted longer than any Northern king before her, and her laws outlasted her name. In the halls of history, Sansa Stark stands above them all.', age:65, spec:['ruler','hand','smallCouncil','bank','heir','ally','consort'] },
  ];

  NAMED['arya'] = [
    { tier:'starter',   vi:0, name:'Arya, the Wolf Girl',            desc:'The young Stark girl who refused to be a lady and sneaked away to train with Needle in the yard.', age:11, spec:['kingsguard'] },
    { tier:'starter',   vi:1, name:'Arya Stark, Survivor',           desc:'A girl navigating the chaos of King\'s Landing after her father\'s arrest, keeping her head low and her needle closer.', age:12, spec:['ally'] },
    { tier:'uncommon',  vi:0, name:'Cat of the Canals',              desc:'A girl surviving Harrenhal\'s horrors, befriending Jaqen H\'ghar and beginning her education in the art of death.', age:13, spec:['ally','kingsguard'] },
    { tier:'uncommon',  vi:1, name:'Arya the Wanderer',              desc:'A hardened young wanderer making her way across a war-torn Riverlands, surviving by wit and the edge of Needle.', age:14, spec:['kingsguard','armyCmd'] },
    { tier:'rare',      vi:0, name:'No One',                         desc:'A faceless acolyte who surrendered her name to master the gift of death and the sacred art of disguise.', age:15, spec:['kingsguard','kgCmd'] },
    { tier:'rare',      vi:1, name:'The Lone Wolf',                  desc:'Back in Westeros, Arya carves her list into reality — one name at a time — with cold, merciless efficiency.', age:16, spec:['kingsguard','kgCmd','armyCmd'] },
    { tier:'hero',      vi:0, name:'Arya Stark, Lady of Winterfell', desc:'Reunited with her family, Arya brings the gifts of Braavos back home — and a list that\'s almost fully crossed out.', age:17, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'hero',      vi:1, name:'The Nightslayer',                desc:'The young woman who ended the Long Night with a single blade thrust — slaying the Night King at the darkest moment.', age:18, spec:['kgCmd','kingsguard','armyCmd','ally'] },
    { tier:'legendary', vi:0, name:'Arya Stark, the Faceless Assassin', desc:'No face, no name, no mercy — the greatest lone assassin Westeros ever produced, who changed the course of history with a single kill.', age:20, spec:['kgCmd','kingsguard','armyCmd','hand'] },
    { tier:'mythic',    vi:0, name:'Sealord Arya Stark',             desc:'She who mapped every sea and commanded fleets across all the known world, making the oceans bow to the last Stark wolf. The greatest explorer and naval commander who ever lived.', age:40, spec:['ruler','armyCmd','kgCmd','ally','bank'] },
  ];

  NAMED['eddard'] = [
    { tier:'starter',   vi:0, name:'Ned Stark of the Vale',          desc:'The second son of Rickard Stark, fostered in the Vale and forging a lifelong bond with Robert Baratheon.', age:15, spec:['ruler','ally'] },
    { tier:'starter',   vi:1, name:'Lord of Winterfell',             desc:'Lord of Winterfell and Warden of the North, a man the North trusts absolutely and the South underestimates deeply.', age:35, spec:['ruler','hand'] },
    { tier:'starter',   vi:2, name:'Ned, Father of Wolves',          desc:'Before politics swallowed him, Eddard Stark was simply the finest lord the North had ever produced.', age:38, spec:['ruler','ally'] },
    { tier:'uncommon',  vi:0, name:'Ned Stark, the Rebel',           desc:'He who fought at Robert\'s side from the stormlands to the Trident — brave, loyal, and deadly with Ice.', age:18, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'uncommon',  vi:1, name:'The Gray-Eyed Lord',             desc:'The stern and just Lord of Winterfell, whose word is bond and whose honor is absolute and unbreakable.', age:36, spec:['ruler','hand','ally'] },
    { tier:'rare',      vi:0, name:'Hand of the King',               desc:'Brought south to serve a friend, Ned uncovers a conspiracy that will cost him everything — but he cannot stop.', age:37, spec:['hand','ruler','smallCouncil'] },
    { tier:'rare',      vi:1, name:'Keeper of the Realm\'s Secret',  desc:'The man who climbed the Tower of Joy, crossed three Kingsguard blades, and carried a world-shaking secret home.', age:22, spec:['ruler','hand','kgCmd','ally'] },
    { tier:'rare',      vi:2, name:'The Last Honorable Man',         desc:'In an age of liars, the most honest man in the realm walked into the most dishonest city in the world. It did not end well.', age:38, spec:['hand','ruler','ally'] },
    { tier:'hero',      vi:0, name:'Eddard Stark, the Quiet Wolf',   desc:'A ruler of supreme honor and quiet power — the kind of lord men follow into battle without a single question.', age:38, spec:['ruler','hand','armyCmd','ally'] },
    { tier:'hero',      vi:1, name:'The Most Trusted Man in Westeros', desc:'The lord whose word was as good as a sworn oath and whose justice was as cold and fair as the Northern wind.', age:39, spec:['ruler','hand','ally','smallCouncil'] },
    { tier:'legendary', vi:0, name:'Eddard Stark, the True Hand',    desc:'The Hand of the King who refused to bend, who chose honor over safety in the most dangerous court in the world — a legend of integrity in an age of corruption.', age:40, spec:['ruler','hand','ally','smallCouncil','heir'] },
    { tier:'legendary', vi:1, name:'Eddard Stark, the True Lord',    desc:'What Westeros needed and never quite deserved — a man of absolute honor in a world that punished it.', age:40, spec:['ruler','hand','ally','smallCouncil','armyCmd'] },
    { tier:'mythic',    vi:0, name:'Eddard Stark, King of the Seven Kingdoms', desc:'In a world where his honor didn\'t cost him his head, Ned Stark\'s justice and wisdom reshaped the Seven Kingdoms — the greatest ruler Westeros never had, who might have saved it all.', age:55, spec:['ruler','hand','ally','smallCouncil','armyCmd'] },
  ];

  NAMED['robb'] = [
    { tier:'starter',   vi:0, name:'Robb Stark, Young Heir',         desc:'The eldest son of Eddard Stark, training with his father\'s direwolf at his side, not yet touched by war.', age:14, spec:['heir','ruler'] },
    { tier:'starter',   vi:1, name:'The Young Wolf',                 desc:'The heir to Winterfell, raised to duty and honor, not yet tested by the reality of war and betrayal.', age:15, spec:['ruler','armyCmd'] },
    { tier:'starter',   vi:2, name:'Robb, the Heir Untested',        desc:'Before the war, Robb Stark was a boy in a man\'s world — watching, waiting, learning from a father he would soon have to avenge.', age:14, spec:['armyCmd','ruler'] },
    { tier:'uncommon',  vi:0, name:'Lord of Winterfell',             desc:'Thrust into lordship after his father\'s death, Robb rallies the North with unexpected ferocity and tactical genius.', age:16, spec:['ruler','armyCmd','ally'] },
    { tier:'uncommon',  vi:1, name:'The March South',                desc:'The Young Wolf who marched south with a Northern army and hadn\'t lost a single battle yet.', age:17, spec:['armyCmd','ruler'] },
    { tier:'rare',      vi:0, name:'Victor of the Whispering Wood',  desc:'The commander who captured Jaime Lannister in one brilliant night battle, sending shockwaves through all of Westeros.', age:17, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'rare',      vi:1, name:'King in the North',              desc:'Proclaimed King in the North and the Trident — a king who never lost a battle, and lost the war to treachery.', age:18, spec:['ruler','armyCmd','ally'] },
    { tier:'rare',      vi:2, name:'The Unbroken General',           desc:'Every engagement, every march, every campaign — Robb Stark\'s tactical record was perfect until the day it ended.', age:18, spec:['armyCmd','kgCmd','ruler','ally'] },
    { tier:'hero',      vi:0, name:'Robb Stark, the Wolf King',      desc:'An undefeated king on the battlefield, whose military record stood without blemish until Walder Frey\'s treachery.', age:19, spec:['armyCmd','kgCmd','ruler','ally'] },
    { tier:'hero',      vi:1, name:'The Legendary Wolf',             desc:'The King in the North who earned his crown and kept it on the battlefield — a commander of rare and terrifying genius.', age:20, spec:['armyCmd','ruler','kgCmd','hand'] },
    { tier:'legendary', vi:0, name:'Robb Stark, the Wolf King',      desc:'The undefeated general who fought a larger, richer, better-equipped enemy to a standstill — and would have won if not for treachery. The greatest battlefield king the North ever produced.', age:20, spec:['ruler','armyCmd','kgCmd','ally','hand'] },
    { tier:'mythic',    vi:0, name:'Robb Stark, King of the Seven Kingdoms', desc:'In a world without Red Weddings, Robb Stark\'s flawless campaign ended in total victory — and his reign ushered in an era of northern strength and southern peace without precedent.', age:35, spec:['ruler','armyCmd','hand','ally','smallCouncil'] },
  ];

  NAMED['robert'] = [
    { tier:'starter',   vi:0, name:'Robert Baratheon, Young Heir',   desc:'A young lord of Storm\'s End with a war hammer and a roar that shook mountains throughout the stormlands.', age:16, spec:['armyCmd','kgCmd'] },
    { tier:'starter',   vi:1, name:'Lord of Storm\'s End',           desc:'The Lord of Storm\'s End, beloved by his brothers and feared by every enemy who dared face him.', age:20, spec:['armyCmd'] },
    { tier:'uncommon',  vi:0, name:'Robert the Rebel',               desc:'The rebel who rose against the Targaryens, rallying the lords of the realm to his golden standard.', age:24, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'uncommon',  vi:1, name:'The Newly Crowned King',         desc:'The newly crowned king who ate, drank, and jousted while Tywin Lannister ran the realm behind him.', age:27, spec:['ruler','ally'] },
    { tier:'rare',      vi:0, name:'Robert the Usurper',             desc:'He who took the throne by right of conquest, ending three centuries of Targaryen rule in the blood of the Trident.', age:25, spec:['armyCmd','ruler','kgCmd'] },
    { tier:'rare',      vi:1, name:'King Robert Baratheon',          desc:'The King on the Iron Throne — fat, drunk, and still more dangerous than any man in the realm when properly roused.', age:35, spec:['ruler','armyCmd','ally'] },
    { tier:'hero',      vi:0, name:'Robert Baratheon at the Trident', desc:'At the Trident, Robert fought Rhaegar Targaryen in single combat and ended a dynasty — his finest hour.', age:24, spec:['armyCmd','kgCmd','kingsguard'] },
    { tier:'hero',      vi:1, name:'Robert, the Last Great King',    desc:'In his prime, Robert Baratheon was the greatest warrior-king Westeros had seen in a generation — beloved by all and feared by more.', age:30, spec:['ruler','armyCmd','ally','kgCmd'] },
    { tier:'legendary', vi:0, name:'Robert Baratheon, Demon of the Trident', desc:'The man who shattered an empire with a war hammer — the greatest warrior of his age, whose strength and charisma forged a new era.', age:25, spec:['armyCmd','kgCmd','ruler','ally'] },
    { tier:'mythic',    vi:0, name:'Robert Baratheon, the Forever King', desc:'In a world where he governed as well as he fought, Robert Baratheon\'s reign became the golden age of the Seven Kingdoms — a beloved warrior-king who kept peace through strength and joy.', age:45, spec:['ruler','armyCmd','ally','hand','bank'] },
  ];

  NAMED['stannis'] = [
    { tier:'starter',   vi:0, name:'Stannis of Storm\'s End',        desc:'The lord who held Storm\'s End through a year-long siege by eating rats and boot leather — without ever complaining.', age:20, spec:['armyCmd','ruler'] },
    { tier:'starter',   vi:1, name:'Lord of Dragonstone',            desc:'The brooding lord of Dragonstone, Master of Ships, who knows the law and follows it to the letter without exception.', age:32, spec:['armyCmd','smallCouncil'] },
    { tier:'uncommon',  vi:0, name:'Stannis the Just',               desc:'A ruler who dispenses justice without mercy or favoritism — everyone gets exactly what they deserve.', age:35, spec:['ruler','hand','smallCouncil'] },
    { tier:'uncommon',  vi:1, name:'Stannis the Assailant',          desc:'He who led the assault on King\'s Landing with righteous fury, only to be broken by wildfire and the golden rose.', age:36, spec:['armyCmd','kgCmd','ruler'] },
    { tier:'rare',      vi:0, name:'Champion of the North',          desc:'He who answered the Night\'s Watch\'s call and saved the Wall when no other king would even consider it.', age:38, spec:['armyCmd','ruler','kgCmd'] },
    { tier:'rare',      vi:1, name:'Stannis, the True King',         desc:'He who burns away all falsehood, who sees the world in stark black and white and bends nothing to no one.', age:39, spec:['ruler','armyCmd','hand'] },
    { tier:'hero',      vi:0, name:'King Stannis Baratheon',         desc:'The rightful king by law and blood, whose iron will and strategic mind made him the most dangerous claimant of his age.', age:40, spec:['ruler','armyCmd','hand','smallCouncil'] },
    { tier:'hero',      vi:1, name:'Stannis the Mannis',             desc:'The one true king — austere, brilliant, utterly relentless — who never surrendered, never compromised, never broke.', age:41, spec:['ruler','armyCmd','kgCmd','hand'] },
    { tier:'legendary', vi:0, name:'Stannis, the Iron King',         desc:'The greatest military mind of the War of the Five Kings — a ruthless commander of iron will whose absolute refusal to yield was matched only by his genius.', age:42, spec:['ruler','armyCmd','kgCmd','hand','smallCouncil'] },
    { tier:'mythic',    vi:0, name:'Stannis Baratheon, the Last King Standing', desc:'In a world where he survived, Stannis Baratheon\'s iron will and brilliant mind built the most just and ordered kingdom in Westeros history — a ruler without favorites, corruption, or weakness.', age:55, spec:['ruler','armyCmd','hand','smallCouncil','bank'] },
  ];

  NAMED['littlefinger'] = [
    { tier:'starter',   vi:0, name:'Petyr Baelish, Young Ward',      desc:'The ward of House Tully who fell in love above his station and learned that love was the poorest armor of all.', age:15, spec:['bank','smallCouncil'] },
    { tier:'starter',   vi:1, name:'Master of Revenue',              desc:'The clever customs master of Gulltown, multiplying the crown\'s revenues and his own influence simultaneously.', age:22, spec:['bank','smallCouncil'] },
    { tier:'uncommon',  vi:0, name:'Littlefinger, Master of Coin',   desc:'The Master of Coin who borrowed the realm into prosperity and debt — and knew exactly where every coin went.', age:35, spec:['bank','smallCouncil','hand'] },
    { tier:'uncommon',  vi:1, name:'The Master Liar',                desc:'A man who set Stark against Lannister with a single lie — a player of the game without peer.', age:36, spec:['smallCouncil','hand','ally'] },
    { tier:'rare',      vi:0, name:'Lord of Harrenhal',              desc:'The owner of the most cursed castle in Westeros — a title he holds while plotting a dozen other schemes.', age:38, spec:['bank','smallCouncil','ruler','hand'] },
    { tier:'rare',      vi:1, name:'Lord Protector of the Vale',     desc:'Lord Protector of the Vale — the puppet master who controls Sweetrobin and the Vale\'s armies from behind a smile.', age:40, spec:['ruler','smallCouncil','hand','bank'] },
    { tier:'hero',      vi:0, name:'Petyr Baelish, the Spider\'s Rival', desc:'The man who could match Varys scheme for scheme, play for play — and usually came out ahead.', age:42, spec:['hand','smallCouncil','bank','ally'] },
    { tier:'hero',      vi:1, name:'Lord of the Vale',               desc:'Master manipulator and Lord of the Vale — the man who climbed chaos like a ladder until only he stood at the top.', age:44, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'legendary', vi:0, name:'Littlefinger, Master of Chaos',  desc:'The greatest political schemer in the history of Westeros — a man of no house and no blood who climbed to the heights of power through cunning, lies, and absolute ruthlessness.', age:46, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'mythic',    vi:0, name:'Petyr Baelish, King of Kings',   desc:'In the world where no Stark remained to stop him, Petyr Baelish completed his ascent — Lord Paramount, Hand, and finally king himself. The greatest self-made ruler in Westerosi history.', age:55, spec:['ruler','hand','smallCouncil','bank','ally','armyCmd'] },
  ];

  NAMED['varys'] = [
    { tier:'starter',   vi:0, name:'Varys the Mummer',               desc:'A young slave boy in Essos who had his manhood cut by a sorcerer and learned in that moment that the world was very cruel.', age:10, spec:['smallCouncil'] },
    { tier:'starter',   vi:1, name:'The Spider',                     desc:'A young spymaster finding his web of little birds and his place at the center of the realm\'s darkest secrets.', age:25, spec:['smallCouncil','ally'] },
    { tier:'uncommon',  vi:0, name:'Master of Whisperers',           desc:'The eunuch who knew every secret in every castle, and whispered just the right ones to just the right ears.', age:40, spec:['smallCouncil','hand','ally'] },
    { tier:'uncommon',  vi:1, name:'The All-Seeing Servant',         desc:'He whose network of little birds stretched from Winterfell to Qarth — a power unlike any other in Westeros.', age:42, spec:['smallCouncil','ally','bank'] },
    { tier:'rare',      vi:0, name:'Varys of the Small Council',     desc:'The one constant of seven kings\' small councils — a man who served the realm while serving his own enigmatic vision.', age:45, spec:['hand','smallCouncil','ally','bank'] },
    { tier:'rare',      vi:1, name:'The Kingmaker',                  desc:'He who chose kings through subtle maneuvering and whispers — a power behind every throne.', age:48, spec:['hand','smallCouncil','ally','ruler'] },
    { tier:'hero',      vi:0, name:'Varys, the All-Knowing',         desc:'The Master of Whisperers whose web spanned the known world — he who knew everything worth knowing before it happened.', age:50, spec:['hand','smallCouncil','ally','bank','ruler'] },
    { tier:'hero',      vi:1, name:'Servant of the Realm',           desc:'A man who claimed to serve the realm, and in his strange way, perhaps truly did — guiding history\'s most consequential decisions.', age:52, spec:['hand','smallCouncil','ally','bank'] },
    { tier:'legendary', vi:0, name:'Varys the All-Seeing',           desc:'The greatest spymaster in the history of Westeros — he who sat in the shadows of seven reigns and pulled the strings that moved kingdoms.', age:55, spec:['hand','smallCouncil','ally','bank','ruler'] },
    { tier:'mythic',    vi:0, name:'Varys, the Eternal Spider',      desc:'His web never broke, his little birds never stopped singing, and the realm he shaped endured long after the kings he served turned to dust. The most consequential servant the realm ever had.', age:60, spec:['ruler','hand','smallCouncil','ally','bank'] },
  ];

  NAMED['oberyn'] = [
    { tier:'starter',   vi:0, name:'Oberyn Martell, Young Viper',    desc:'A young Dornish prince who killed a man with a spear at age sixteen and never apologized for it.', age:16, spec:['kingsguard','kgCmd'] },
    { tier:'starter',   vi:1, name:'Oberyn of the Spear',            desc:'The Red Viper of Dorne — a name earned early and never once disputed by anyone foolish enough to try.', age:20, spec:['kgCmd','kingsguard'] },
    { tier:'uncommon',  vi:0, name:'The Red Viper',                  desc:'The most dangerous man in any room — fighter, poisoner, scholar, and lover of everything forbidden.', age:30, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'uncommon',  vi:1, name:'Envoy of Dorne',                 desc:'Sent on his brother\'s behalf — arriving with his own agenda buried beneath the most charming smile in the realm.', age:40, spec:['smallCouncil','ally','kgCmd'] },
    { tier:'rare',      vi:0, name:'Oberyn, Tyrion\'s Champion',     desc:'He who volunteered to be Tyrion\'s champion — not for love of Tyrion, but for the chance to avenge his beloved sister.', age:41, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'rare',      vi:1, name:'The Red Viper in His Prime',     desc:'At his peak, Oberyn Martell was the most lethal individual combatant in all of Westeros — none who faced him walked away clean.', age:35, spec:['kgCmd','kingsguard','armyCmd','ally'] },
    { tier:'hero',      vi:0, name:'Oberyn Martell, Prince of Dorne', desc:'Scholar, warrior, poisoner, and prince — Oberyn Martell lived every moment twice as fast and twice as bright as any man alive.', age:42, spec:['kgCmd','kingsguard','armyCmd','smallCouncil'] },
    { tier:'hero',      vi:1, name:'Oberyn the Untouchable',         desc:'In battle and in court, no one could touch the Red Viper without being stung — a force of nature in human form.', age:40, spec:['kgCmd','kingsguard','armyCmd','ally','ruler'] },
    { tier:'legendary', vi:0, name:'Oberyn Martell, the Red Viper',  desc:'The greatest warrior Dorne ever produced — a prince who combined the fury of a viper with the mind of a maester and the will of a lord.', age:42, spec:['kgCmd','kingsguard','armyCmd','ally','ruler'] },
    { tier:'mythic',    vi:0, name:'Oberyn Martell, Prince of All Dorne', desc:'In the world where Oberyn survived the Mountain, he became the most feared and celebrated ruler the desert kingdom ever had — warrior, scholar, king, and legend all in one.', age:55, spec:['ruler','kgCmd','kingsguard','armyCmd','ally','smallCouncil'] },
  ];

  NAMED['olenna'] = [
    { tier:'starter',   vi:0, name:'Olenna Redwyne, Young Lady',     desc:'A sharp-tongued young woman who refused every suitor until she got exactly the one she wanted — and exactly what she was owed.', age:18, spec:['smallCouncil','ally'] },
    { tier:'starter',   vi:1, name:'Lady Olenna Tyrell',             desc:'The Lady of Highgarden — witty, fierce, and already smarter than everyone in any room she enters.', age:55, spec:['smallCouncil','ally'] },
    { tier:'uncommon',  vi:0, name:'The Rose\'s Thorn',              desc:'The matriarch who runs Highgarden as she runs everything — with an iron hand and a cutting remark for every fool.', age:65, spec:['ruler','smallCouncil','ally'] },
    { tier:'uncommon',  vi:1, name:'Olenna of Highgarden',           desc:'She who put her granddaughter on two thrones and kept the Reach in bread and wine through every war.', age:68, spec:['ruler','smallCouncil','bank','ally'] },
    { tier:'rare',      vi:0, name:'The Queen of Thorns',            desc:'The Queen of Thorns — she who slipped poison into a king\'s wedding cup and dared anyone to prove it.', age:70, spec:['ruler','smallCouncil','bank','ally','hand'] },
    { tier:'rare',      vi:1, name:'Conqueror of Courts',            desc:'The old woman who quietly conquered King\'s Landing without raising an army, just by being sharper than everyone else.', age:72, spec:['ruler','hand','smallCouncil','bank'] },
    { tier:'hero',      vi:0, name:'The Unstoppable Grandmother',    desc:'The most politically brilliant woman in Westeros — whose schemes outlasted kings and whose advice toppled dynasties.', age:73, spec:['ruler','hand','smallCouncil','bank','ally'] },
    { tier:'hero',      vi:1, name:'Matriarch Supreme',              desc:'The supreme power behind the Reach — a woman who bent the entire game of thrones to her will with wit and ruthlessness.', age:74, spec:['ruler','hand','smallCouncil','ally','bank'] },
    { tier:'legendary', vi:0, name:'Olenna Tyrell, the Last Rose',   desc:'She confessed to killing Joffrey with a smile and died without regret. The most brilliantly ruthless political mind in the history of Highgarden.', age:75, spec:['ruler','hand','smallCouncil','ally','bank'] },
    { tier:'mythic',    vi:0, name:'Olenna Tyrell, the Eternal Thorn', desc:'In a world where she lived longer and wielded all the power she deserved, Olenna became the most feared and celebrated political force in all of Westeros — a queen in everything but name.', age:90, spec:['ruler','hand','smallCouncil','bank','ally'] },
  ];

  NAMED['sandor'] = [
    { tier:'starter',   vi:0, name:'Sandor Clegane, the Hound',      desc:'A bitter, burned man who kills without joy and protects without warmth — the most dangerous hired sword in the realm.', age:28, spec:['kingsguard','kgCmd'] },
    { tier:'starter',   vi:1, name:'Joffrey\'s Dog',                 desc:'The Hound who follows Joffrey\'s orders and hates himself for it, hiding his disgust behind a scarred sneer.', age:32, spec:['kgCmd','kingsguard'] },
    { tier:'uncommon',  vi:0, name:'Sandor Clegane at Blackwater',   desc:'He who fought through the Blackwater wildfire and nearly broke — but didn\'t — then walked away from his only life.', age:33, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'uncommon',  vi:1, name:'The Unlikely Guardian',          desc:'Sandor with Arya in tow — a man slowly, grudgingly, discovering what it means to protect something worth protecting.', age:34, spec:['kgCmd','kingsguard','ally'] },
    { tier:'rare',      vi:0, name:'The Gravedigger',                desc:'The man who died and became something better — a humble penitent slowly rebuilding his burned and scarred soul.', age:35, spec:['kingsguard','kgCmd','ally'] },
    { tier:'rare',      vi:1, name:'Sandor of the Brotherhood',      desc:'Riding with the Brotherhood, finding purpose in protecting the small folk he once killed for pure sport.', age:36, spec:['kgCmd','armyCmd','ally'] },
    { tier:'hero',      vi:0, name:'Sandor Clegane, Cleganebowl',    desc:'The man who faced his undead brother and burned him as he always deserved — ending the horror of the Mountain once and for all.', age:38, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'hero',      vi:1, name:'The Realm\'s True Sword',        desc:'Brutal, honest, and loyal in his own savage way — the finest killing blade in the Seven Kingdoms when it truly counted.', age:35, spec:['kgCmd','kingsguard','armyCmd','ally'] },
    { tier:'legendary', vi:0, name:'Sandor Clegane, the Unfallen Hound', desc:'A broken man made whole by violence and unexpected kindness — the most tragically great warrior of his entire generation.', age:40, spec:['kgCmd','kingsguard','armyCmd','ally'] },
    { tier:'mythic',    vi:0, name:'Sandor Clegane, the True Knight', desc:'In a world where he was never burned and never broken, Sandor Clegane became what his brother never was — a true knight, the greatest of his age, whose loyalty and sword were the finest in the realm.', age:45, spec:['kgCmd','kingsguard','armyCmd','ruler','ally'] },
  ];

  NAMED['barristan'] = [
    { tier:'starter',   vi:0, name:'Barristan Selmy, Young Squire',  desc:'A boy who defeated a knight at ten and was knighted before sixteen — the most promising swordsman of his entire era.', age:16, spec:['kgCmd','kingsguard'] },
    { tier:'starter',   vi:1, name:'Barristan the Bold (Young Knight)', desc:'The young Kingsguard knight whose blade spoke louder than words — and won tournament after tournament without fail.', age:20, spec:['kgCmd','kingsguard'] },
    { tier:'uncommon',  vi:0, name:'Barristan the Bold',             desc:'The knight who rode into battle disguised to rescue a captive king — brave, bold, and impossibly skilled.', age:35, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'uncommon',  vi:1, name:'Lord Commander of the Kingsguard', desc:'Lord Commander of the Kingsguard for two kings — the living conscience of the order and the realm\'s finest sword.', age:55, spec:['kgCmd','kingsguard','ruler'] },
    { tier:'rare',      vi:0, name:'Ser Barristan the Bold',         desc:'The greatest Kingsguard knight since the age of heroes — a man whose courage remained unmatched into old age.', age:60, spec:['kgCmd','kingsguard','armyCmd','ally'] },
    { tier:'rare',      vi:1, name:'Barristan, Dismissed with Honor', desc:'Dismissed in disgrace by Cersei, Ser Barristan walked out of the throne room without a tremor — unbowed, unbroken, unashamed.', age:62, spec:['kgCmd','kingsguard','ruler'] },
    { tier:'hero',      vi:0, name:'Queensguard Commander',          desc:'Lord Commander of Daenerys\'s Queensguard — old but undimmed, fighting a young man\'s battles with a hero\'s undying courage.', age:64, spec:['kgCmd','kingsguard','armyCmd','ally','ruler'] },
    { tier:'hero',      vi:1, name:'Barristan the Bold at His Peak', desc:'At forty, Barristan Selmy was the finest knight alive — a blade, a shield, and a living legend walking among ordinary men.', age:40, spec:['kgCmd','kingsguard','armyCmd'] },
    { tier:'legendary', vi:0, name:'Barristan the Bold, Legend of the Kingsguard', desc:'The finest knight of his age — maybe any age — whose service spanned four kings, two continents, and sixty years without compromise.', age:65, spec:['kgCmd','kingsguard','armyCmd','ally','ruler'] },
    { tier:'mythic',    vi:0, name:'Ser Barristan Selmy, the Immortal Knight', desc:'In a world where age never dulled his blade, Barristan Selmy fought a century of battles and never lost one — the greatest knight who ever lived, whose legend became the standard all others were measured against.', age:80, spec:['kgCmd','kingsguard','armyCmd','ruler','ally'] },
  ];

  NAMED['melisandre'] = [
    { tier:'starter',   vi:0, name:'Melisandre the Slave Girl',      desc:'A slave girl in Asshai who found the Red God and never looked back — trading chains of iron for chains of burning faith.', age:10, spec:['smallCouncil'] },
    { tier:'starter',   vi:1, name:'The Red Priestess',              desc:'A priestess of R\'hllor whose visions and power are undeniable — but whose prophecies are rarely what they seem.', age:30, spec:['smallCouncil','ally'] },
    { tier:'uncommon',  vi:0, name:'The Red Woman',                  desc:'The King\'s flame — Stannis\'s advisor, prophetess, and shadow-assassin. A woman of dangerous and absolute faith.', age:100, spec:['smallCouncil','hand','ally'] },
    { tier:'uncommon',  vi:1, name:'Melisandre the Shadowbinder',    desc:'She who births shadow assassins from fire and love — a power that crosses the blurry line between magic and murder.', age:100, spec:['smallCouncil','armyCmd','ally'] },
    { tier:'rare',      vi:0, name:'Melisandre at Castle Black',     desc:'The Red Woman who came to Castle Black and saw Jon Snow clearly before he ever saw himself clearly.', age:100, spec:['smallCouncil','hand','ally','ruler'] },
    { tier:'rare',      vi:1, name:'The Resurrectress',              desc:'She who brought Jon Snow back from the dead — and transformed the course of the Long Night with that single miraculous act.', age:100, spec:['smallCouncil','ally','kgCmd','hand'] },
    { tier:'hero',      vi:0, name:'The Lord\'s Instrument',         desc:'A woman of a hundred years whose faith, magic, and ruthless dedication shaped the entire War for the Dawn.', age:100, spec:['smallCouncil','hand','ruler','ally'] },
    { tier:'hero',      vi:1, name:'Melisandre the All-Knowing',     desc:'She sees futures in the flames — and has lived long enough to know exactly which visions to trust.', age:100, spec:['smallCouncil','hand','ally','bank'] },
    { tier:'legendary', vi:0, name:'Melisandre the Immortal Flame',  desc:'An ancient priestess who walked through centuries of death and fire, always appearing where R\'hllor needed her — the most powerful mystic in Westeros history.', age:200, spec:['ruler','smallCouncil','hand','ally'] },
    { tier:'mythic',    vi:0, name:'Melisandre, the Red God\'s Hand', desc:'She who served the Lord of Light across three centuries, saving the realm not once but many times over — an immortal prophetess whose faith and fire reshaped the known world entirely.', age:300, spec:['ruler','hand','smallCouncil','ally','bank'] },
  ];

  NAMED['euron'] = [
    { tier:'starter',   vi:0, name:'Euron Greyjoy, the Exile',       desc:'Exiled by Balon for defiling Victarion\'s wife, Euron sailed the world and returned stranger and far more dangerous.', age:30, spec:['armyCmd','kgCmd'] },
    { tier:'starter',   vi:1, name:'The Crow\'s Eye',                desc:'One eye of black and one of red, a man touched by something beyond the Drowned God — and reveling in every drop of it.', age:35, spec:['armyCmd','ruler'] },
    { tier:'uncommon',  vi:0, name:'King of the Iron Islands',       desc:'He who won the kingsmoot with a magical horn and an impossibly dangerous promise that none could refuse.', age:38, spec:['ruler','armyCmd','kgCmd'] },
    { tier:'uncommon',  vi:1, name:'Euron the Alchemist',            desc:'A captain who has sailed to Valyria and returned with artifacts that defy all understanding — and all sanity.', age:40, spec:['ruler','armyCmd','smallCouncil'] },
    { tier:'rare',      vi:0, name:'Euron, Bearer of Dragonbinder',  desc:'The Crow\'s Eye who holds the horn that binds dragons and schemes to claim the Iron Throne with fire and salt.', age:42, spec:['ruler','armyCmd','kgCmd'] },
    { tier:'rare',      vi:1, name:'The Greatest Captain on All the Seas', desc:'The most feared captain in the world — who sailed where no man dared and returned with power no man should hold.', age:40, spec:['armyCmd','kgCmd','ruler','ally'] },
    { tier:'hero',      vi:0, name:'Euron the Sea Dragon',           desc:'A naval commander without equal, whose fleet was the terror of every shore and whose personal ferocity matched his tactical genius.', age:44, spec:['armyCmd','kgCmd','ruler','smallCouncil'] },
    { tier:'hero',      vi:1, name:'Euron, Touched by the Void',     desc:'A man who has gazed into the abyss of Valyria and been changed by what he found — more and less than human now.', age:43, spec:['ruler','armyCmd','kgCmd','ally'] },
    { tier:'legendary', vi:0, name:'Euron Greyjoy, Lord of All Waters', desc:'The most brilliantly mad captain who ever lived — who built an empire on salt and fear and blood, ruling the seas as no kraken before him.', age:46, spec:['ruler','armyCmd','kgCmd','bank','ally'] },
    { tier:'mythic',    vi:0, name:'Euron the World-Devourer',       desc:'In a world where Euron Greyjoy found what he sought in Valyria and bound a dragon to his will, he became the most terrifying ruler in all of history — a king of seas and skies whose empire spanned the world.', age:55, spec:['ruler','armyCmd','kgCmd','bank','ally','smallCouncil'] },
  ];

  // ── Card Generation ────────────────────────────────────────────────────────
  const POSITION_IDS = new Set([
    'ruler','hand','heir','army-commander','kingsguard','consort',
    'small-council','kg-commander','ally','bank'
  ]);

  function generateAllCards() {
    const chars = (window.CHARACTERS || []).filter(c =>
      !c.isDragon && c.name && c.id &&
      !c.id.startsWith('d-') &&
      !POSITION_IDS.has(c.id)
    );
    const cards = [];
    chars.forEach(char => {
      const named = NAMED[char.id] || [];
      TIER_ORDER.forEach(tier => {
        const namedForTier = named.filter(x => x.tier === tier);
        const defaultCount = CHAR_COUNTS[char.id] ?? 1;
        const tierMax = (tier === 'legendary' || tier === 'mythic') ? 2 : Infinity;
        const count = Math.min(Math.max(defaultCount, namedForTier.length), tierMax);
        for (let vi = 0; vi < count; vi++) {
          const nv = namedForTier.find(x => x.vi === vi);
          const scores = genScores(char.id, tier, vi, nv?.spec || null);
          cards.push({
            id: `cc_${char.id}_${tier}_${vi}`,
            charId: char.id,
            name: nv?.name || autoName(char, tier, vi),
            desc: nv?.desc || autoDesc(char, tier),
            age: nv?.age != null ? nv.age : (char.age || 30),
            houses: char.houses || ['Unknown'],
            gender: char.gender || 'M',
            tier,
            overall: scores.overall,
            scores,
          });
        }
      });
    });
    return cards;
  }

  window.COLLECTOR_CARDS = generateAllCards();
  console.log('[Collector] Cards generated:', window.COLLECTOR_CARDS.length);
})();
