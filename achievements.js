// ─── Achievements ─────────────────────────────────────────────────────────────
window.ACHIEVEMENTS = [
  // ── EASY ────────────────────────────────────────────────────────────────────
  { id:'ach_first_game',     name:'First Steps',              icon:'🌱', rarity:'common',   desc:'Complete your first game in any mode.', cat:'Easy' },
  { id:'ach_10_games',       name:'Seasoned Drafter',         icon:'📅', rarity:'common',   desc:'Play 10 games total.', cat:'Easy' },
  { id:'ach_imp_lives',      name:'The Imp Lives',            icon:'🍷', rarity:'common',   desc:'Place Tyrion Lannister in any position on your board.', cat:'Easy' },
  { id:'ach_stag_wolf',      name:'A Stag and a Wolf',        icon:'🤝', rarity:'common',   desc:'Have at least one Baratheon AND one Stark character on the same Classic board.', cat:'Easy' },
  { id:'ach_all_men',        name:'Boys Club',                icon:'♂️', rarity:'common',   desc:'Fill all 5 Classic slots with male characters.', cat:'Easy' },
  { id:'ach_all_women',      name:'Queens of the Realm',      icon:'♀️', rarity:'common',   desc:'Fill all 5 Classic slots with female characters.', cat:'Easy' },
  { id:'ach_40plus',         name:'Worthy of the Throne',     icon:'🎯', rarity:'common',   desc:'Score 40 or more points in Classic mode.', cat:'Easy' },

  // ── UNCOMMON ────────────────────────────────────────────────────────────────
  { id:'ach_robb_ruler',     name:'King in the North',        icon:'🐺', rarity:'uncommon', desc:'Place Robb Stark as Ruler.', cat:'Uncommon' },
  { id:'ach_ned_ruler',      name:'The Honorable Lord',       icon:'🛡️', rarity:'uncommon', desc:'Place Eddard Stark as Ruler.', cat:'Uncommon' },
  { id:'ach_cersei_ruler',   name:'Queen Regent',             icon:'👸', rarity:'uncommon', desc:'Place Cersei Lannister as Ruler.', cat:'Uncommon' },
  { id:'ach_stannis',        name:'The One True King',        icon:'🔵', rarity:'uncommon', desc:'Place Stannis Baratheon as Ruler.', cat:'Uncommon' },
  { id:'ach_joffrey_ruler',  name:'Gods Help Us All',         icon:'😬', rarity:'uncommon', desc:'Place Joffrey Baratheon as Ruler.', cat:'Uncommon' },
  { id:'ach_nw_heir',        name:'Honor Over Inheritance',   icon:'🧊', rarity:'uncommon', desc:'Place a Night\'s Watch member as Heir — they forfeit the claim, scores 1.', cat:'Uncommon' },
  { id:'ach_tyrion_hand',    name:'The Imp\'s Gambit',        icon:'🍷', rarity:'uncommon', desc:'Place Tyrion Lannister as Hand of the King.', cat:'Uncommon' },
  { id:'ach_50_games',       name:'Master Drafter',           icon:'📅', rarity:'uncommon', desc:'Play 50 games total.', cat:'Uncommon' },

  // ── RARE ────────────────────────────────────────────────────────────────────
  { id:'ach_lions_rock',     name:'Lions of Casterly Rock',   icon:'🦁', rarity:'rare',     desc:'Place Cersei, either Jaime, AND Tyrion Lannister all on the same Classic team.', cat:'Rare' },
  { id:'ach_fire_ice',       name:'Fire and Ice',             icon:'❄️', rarity:'rare',     desc:'Have Jon Snow AND a Targaryen character on the same board.', cat:'Rare' },
  { id:'ach_red_wedding',    name:'The Red Wedding',          icon:'🩸', rarity:'rare',     desc:'Place both Robb Stark AND Catelyn Tully-Stark on the same board.', cat:'Rare' },
  { id:'ach_brothers',       name:'Brothers in Arms',         icon:'🤜', rarity:'rare',     desc:'Place both Stannis AND Renly Baratheon on the same board.', cat:'Rare' },
  { id:'ach_jon_heir',       name:'You Know Nothing',         icon:'❄️', rarity:'rare',     desc:'Place Jon Snow as Heir — he belongs at the Wall, not the throne. Scores 1.', cat:'Rare' },
  { id:'ach_daemon_kg',      name:'Dark Sister',              icon:'🗡️', rarity:'rare',     desc:'Place Daemon Targaryen in a Kingsguard slot.', cat:'Rare' },
  { id:'ach_viserys_ii',     name:'Greatest Hand',            icon:'✋', rarity:'rare',     desc:'Place Viserys II as Hand of the King.', cat:'Rare' },
  { id:'ach_tywin_hand',     name:'The Great Lion',           icon:'🦁', rarity:'rare',     desc:'Place Tywin Lannister as Hand of the King.', cat:'Rare' },
  { id:'ach_littlefinger',   name:'Chaos is a Ladder',        icon:'🪜', rarity:'rare',     desc:'Place Petyr Baelish as Hand of the King.', cat:'Rare' },
  { id:'ach_dany_ruler',     name:'Breaker of Chains',        icon:'🔥', rarity:'rare',     desc:'Place Daenerys Targaryen as Ruler.', cat:'Rare' },
  { id:'ach_45plus',         name:'Iron Lineage',             icon:'⚔️', rarity:'rare',     desc:'Score 45 or more points in Classic mode.', cat:'Rare' },
  { id:'ach_walder_heir',    name:'The Freys Remember',       icon:'🏰', rarity:'rare',     desc:'Place Walder Frey as Heir. The north remembers.', cat:'Rare' },
  { id:'ach_all_ones',       name:'The Smallfolk Uprising',   icon:'😅', rarity:'rare',     desc:'Every placed character scores 1 or 2 for their position. The peasants rejoice.', cat:'Rare' },
  { id:'ach_modern_court',   name:'The New Generation',       icon:'🌅', rarity:'rare',     desc:'Fill Classic with characters all born after year 280 AC.', cat:'Rare' },
  { id:'ach_all_modes',      name:'Student of the Game',      icon:'📚', rarity:'rare',     desc:'Complete at least one game in every mode.', cat:'Rare' },
  { id:'ach_vs_win',         name:'Trial by Combat',          icon:'⚔️', rarity:'rare',     desc:'Win a Local Versus game.', cat:'Rare' },
  { id:'ach_vs_blowout',     name:'Landslide Victory',        icon:'💥', rarity:'rare',     desc:'Win Versus by 15+ points (Classic) or 50+ points (Empire).', cat:'Rare' },
  { id:'ach_180plus',        name:'The Great Empire',         icon:'🌍', rarity:'rare',     desc:'Score 180 or more points in Empire mode.', cat:'Rare' },

  // ── EPIC ────────────────────────────────────────────────────────────────────
  { id:'ach_all_stark',      name:'Winter is Coming',         icon:'🐺', rarity:'epic',     desc:'Fill all 5 Classic slots with Stark characters exclusively.', cat:'Epic' },
  { id:'ach_all_targ',       name:'Fire and Blood',           icon:'🔥', rarity:'epic',     desc:'Fill all 5 Classic slots with Targaryen characters exclusively.', cat:'Epic' },
  { id:'ach_all_lann',       name:'A Lannister Always Wins',  icon:'🦁', rarity:'epic',     desc:'Fill all 5 Classic slots with Lannister characters exclusively.', cat:'Epic' },
  { id:'ach_baelor_break',   name:'Heart of Chivalry',        icon:'💎', rarity:'epic',     desc:'Place Baelor Breakspear as Ruler and score 40+ points.', cat:'Epic' },
  { id:'ach_jaehaerys_ruler',name:'The Conciliator\'s Court', icon:'⚖️', rarity:'epic',     desc:'Place Jaehaerys I as Ruler and score 40+ points.', cat:'Epic' },
  { id:'ach_conqueror_classic',name:'Classic Conqueror',      icon:'⚔️', rarity:'epic',     desc:'Reach Conqueror tier — 47 or more out of 50 — in Classic mode.', cat:'Epic' },
  { id:'ach_conqueror_empire',name:'Empire Conqueror',        icon:'👑', rarity:'epic',     desc:'Reach Conqueror tier — 190 or more out of 200 — in Empire mode.', cat:'Epic' },
  { id:'ach_hand_10',        name:'The King\'s True Strength',icon:'✋', rarity:'epic',     desc:'Fill the Hand of the King slot and score 10 points in that position.', cat:'Epic' },
  { id:'ach_perfect_sc',     name:'Perfect Small Council',    icon:'📜', rarity:'epic',     desc:'Fill all 6 Small Council slots with characters each scoring 8 or more.', cat:'Epic' },
  { id:'ach_kg_all10',       name:'Seven Who Are Worthy',     icon:'⚔️', rarity:'epic',     desc:'Fill all 7 Kingsguard positions in Empire mode.', cat:'Epic' },
  { id:'ach_kg_aemon',       name:'The White Bull',           icon:'🐂', rarity:'epic',     desc:'Have the KG Commander slot score 10 points in Empire mode.', cat:'Epic' },
  { id:'ach_varys',          name:'The Spider\'s Web',        icon:'🕷️', rarity:'epic',     desc:'Place Varys in a Small Council slot.', cat:'Epic' },
  { id:'ach_bloodraven',     name:'Greenseer',                icon:'👁️', rarity:'epic',     desc:'Place Bloodraven in any position — born Brynden Rivers, bastard of Aegon IV.', cat:'Epic' },
  { id:'ach_ancient_court',  name:'The Long Night',           icon:'❄️', rarity:'epic',     desc:'Fill Classic with characters all born before year 0 (before Aegon\'s Landing).', cat:'Epic' },
  { id:'ach_190plus',        name:'Near Perfection',          icon:'💫', rarity:'epic',     desc:'Score 190 or more points in Empire mode.', cat:'Epic' },
  { id:'ach_hard_40',        name:'Forged in Fire',           icon:'🔥', rarity:'epic',     desc:'Score 40+ in Classic Hard with zero rerolls.', cat:'Epic' },
  { id:'ach_3_modes_conq',   name:'Multi-Realm Conqueror',    icon:'🌐', rarity:'epic',     desc:'Reach Conqueror tier in 3 different game modes.', cat:'Epic' },
  { id:'ach_prince_promised',name:'The Prince That Was Promised', icon:'⭐', rarity:'epic', desc:'Have both Jon Snow AND Daenerys Targaryen on the same Empire board and score 150+.', cat:'Epic' },
  { id:'ach_vs_perfect',     name:'Dynasty Crusher',          icon:'👑', rarity:'epic',     desc:'Reach Conqueror tier while winning a Versus game.', cat:'Epic' },

  // ── LEGENDARY ───────────────────────────────────────────────────────────────
  { id:'ach_perfect_classic',name:'Perfect Court',            icon:'✨', rarity:'legendary', desc:'Score a perfect 50/50 in Classic mode.', cat:'Legendary' },
  { id:'ach_perfect_empire', name:'Perfect Empire',           icon:'🌟', rarity:'legendary', desc:'Score a perfect 200/200 in Empire mode.', cat:'Legendary' },
  { id:'ach_conqueror_hard', name:'Iron Throne',              icon:'💀', rarity:'legendary', desc:'Reach Conqueror tier in Classic Hard — no rerolls, no mercy.', cat:'Legendary' },
  { id:'ach_conqueror_emp_hard',name:'The Undefeated',        icon:'🔥', rarity:'legendary', desc:'Reach Conqueror tier in Empire Hard mode.', cat:'Legendary' },
  { id:'ach_conqueror_fate', name:'Fate\'s Champion',         icon:'🌑', rarity:'legendary', desc:'Reach Conqueror tier in Empire Fate — random draws, zero rerolls.', cat:'Legendary' },
  { id:'ach_hard_45',        name:'Diamond in the Rough',     icon:'💎', rarity:'legendary', desc:'Score 45+ in Classic Hard with zero rerolls.', cat:'Legendary' },
  { id:'ach_hard_emp_170',   name:'The Unbroken Dynasty',     icon:'👑', rarity:'legendary', desc:'Score 170+ in Empire Hard mode.', cat:'Legendary' },
  { id:'ach_random_45',      name:'Blessed by the Gods',      icon:'🎲', rarity:'legendary', desc:'Score 45+ in any Random mode — let fate be kind.', cat:'Legendary' },
  { id:'ach_perfect_kg',     name:'Perfect Kingsguard',       icon:'🛡️', rarity:'legendary', desc:'Fill every Kingsguard and KG Commander slot with characters scoring 8 or more.', cat:'Legendary' },
  { id:'ach_targ_empire',    name:'Reign of Dragons',         icon:'🐉', rarity:'legendary', desc:'Fill all 20 Empire slots exclusively with Targaryen characters.', cat:'Legendary' },
  { id:'ach_dragons_lineage',name:'Dragon\'s Lineage',        icon:'🐉', rarity:'legendary', desc:'Have Aegon the Conqueror, Rhaegar Targaryen, AND Daenerys all on the same Empire board.', cat:'Legendary' },
  { id:'ach_7_conqueror',    name:'Seven Kingdoms',           icon:'7️⃣', rarity:'legendary', desc:'Reach Conqueror tier in all 7 non-Fate game modes.', cat:'Legendary' },
  { id:'ach_all_8_conqueror',name:'Master of All',            icon:'🌟', rarity:'legendary', desc:'Reach Conqueror tier in all 8 game modes including Fate.', cat:'Legendary' },

  // ── HOUSE PACKS ─────────────────────────────────────────────────────────────
  { id:'ach_all_bar',        name:'Ours is the Fury',         icon:'🦌', rarity:'rare',     desc:'Fill all 5 Classic slots with Baratheon characters exclusively.', cat:'Rare' },
  { id:'ach_all_tyrell',     name:'Growing Strong',           icon:'🌹', rarity:'rare',     desc:'Fill all 5 Classic slots with Tyrell characters exclusively.', cat:'Rare' },
  { id:'ach_all_mart',       name:'Unbowed, Unbent, Unbroken',icon:'☀️', rarity:'rare',     desc:'Fill all 5 Classic slots with Martell characters exclusively.', cat:'Rare' },
  { id:'ach_all_grey',       name:'We Do Not Sow',            icon:'🦑', rarity:'rare',     desc:'Fill all 5 Classic slots with Greyjoy characters exclusively.', cat:'Rare' },
  { id:'ach_all_tully',      name:'Family, Duty, Honor',      icon:'🐟', rarity:'rare',     desc:'Fill all 5 Classic slots with Tully characters exclusively.', cat:'Rare' },
  { id:'ach_all_arryn',      name:'As High as Honor',         icon:'🦅', rarity:'rare',     desc:'Fill all 5 Classic slots with Arryn characters exclusively.', cat:'Rare' },
  { id:'ach_all_nw',         name:'Sworn to the Watch',        icon:'🧊', rarity:'uncommon', desc:'Draft 3 or more Night\'s Watch characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_pack_wolves',    name:'Pack of Wolves',           icon:'🐺', rarity:'uncommon', desc:'Draft 3 or more Stark characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_pride_lions',    name:'Pride of Lions',           icon:'🦁', rarity:'uncommon', desc:'Draft 3 or more Lannister characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_dragonpit',      name:'The Dragonpit',            icon:'🐉', rarity:'uncommon', desc:'Draft 3 or more Targaryen characters in a single Classic game.', cat:'Uncommon' },

  // ── CHARACTER MOMENTS ────────────────────────────────────────────────────────
  { id:'ach_rhaegar_ruler',  name:'The Last Dragon',          icon:'🎵', rarity:'rare',     desc:'Place Rhaegar Targaryen as Ruler.', cat:'Rare' },
  { id:'ach_aerys_ruler',    name:'The Mad King\'s Throne',   icon:'🔥', rarity:'uncommon', desc:'Place Aerys the Mad King as Ruler.', cat:'Uncommon' },
  { id:'ach_viserys3_ruler', name:'The Beggar King',          icon:'💸', rarity:'uncommon', desc:'Place Viserys III as Ruler — crown of molten gold not included.', cat:'Uncommon' },
  { id:'ach_rhaenyra_ruler', name:'Heir to the Dragon',       icon:'🐉', rarity:'rare',     desc:'Place Rhaenyra Targaryen as Ruler.', cat:'Rare' },
  { id:'ach_arya_ruler',     name:'Not Today',                icon:'🗡️', rarity:'rare',     desc:'Place Arya Stark as Ruler — no one expected this.', cat:'Rare' },
  { id:'ach_sansa_ruler',    name:'Queen in the North',       icon:'🐺', rarity:'uncommon', desc:'Place Sansa Stark as Ruler.', cat:'Uncommon' },
  { id:'ach_brienne',        name:'A Knight of the Seven',    icon:'🛡️', rarity:'uncommon', desc:'Place Brienne of Tarth in any position.', cat:'Uncommon' },
  { id:'ach_davos',          name:'The Onion Knight',         icon:'⚓', rarity:'uncommon', desc:'Place Davos Seaworth in any position.', cat:'Uncommon' },
  { id:'ach_barristan',      name:'The Bold',                 icon:'⚔️', rarity:'uncommon', desc:'Place Barristan Selmy in any position.', cat:'Uncommon' },
  { id:'ach_oberyn',         name:'The Red Viper',            icon:'☀️', rarity:'rare',     desc:'Place Oberyn Martell in any position.', cat:'Rare' },
  { id:'ach_olenna',         name:'Queen of Thorns',          icon:'🌹', rarity:'rare',     desc:'Place Olenna Tyrell in any position.', cat:'Rare' },
  { id:'ach_melisandre',     name:'The Red Woman',            icon:'🔴', rarity:'uncommon', desc:'Place Melisandre in any position.', cat:'Uncommon' },
  { id:'ach_drogo',          name:'Blood of My Blood',        icon:'🌾', rarity:'rare',     desc:'Place Khal Drogo in any position.', cat:'Rare' },
  { id:'ach_jorah',          name:'The Exiled Bear',          icon:'🐻', rarity:'uncommon', desc:'Place Jorah Mormont in any position.', cat:'Uncommon' },
  { id:'ach_aemon_maester',  name:'The Long Watch',           icon:'🧊', rarity:'rare',     desc:'Place Maester Aemon in any position — 60 years at the Wall.', cat:'Rare' },
  { id:'ach_aemon_drag',     name:'The Dragonknight',         icon:'⚔️', rarity:'rare',     desc:'Place Aemon the Dragonknight in a Kingsguard slot.', cat:'Rare' },
  { id:'ach_cregan',         name:'The Old Man of the North', icon:'❄️', rarity:'rare',     desc:'Place Cregan Stark in any position.', cat:'Rare' },
  { id:'ach_shireen',        name:'The Princess\'s Lesson',   icon:'📚', rarity:'uncommon', desc:'Place Shireen Baratheon in any position.', cat:'Uncommon' },
  { id:'ach_loras',          name:'The Knight of Flowers',    icon:'🌹', rarity:'uncommon', desc:'Place Loras Tyrell in any position.', cat:'Uncommon' },

  // ── COMBOS & SYNERGIES ───────────────────────────────────────────────────────
  { id:'ach_north_remembers',name:'The North Remembers',      icon:'❄️', rarity:'rare',     desc:'Place both Ned Stark AND Jon Snow on the same board.', cat:'Rare' },
  { id:'ach_stark_family',   name:'The Stark Reunion',        icon:'🐺', rarity:'epic',     desc:'Place Ned, Robb, AND Catelyn all on the same board.', cat:'Epic' },
  { id:'ach_viper_mountain', name:'The Duel',                 icon:'⚡', rarity:'rare',     desc:'Place Oberyn Martell AND Sandor Clegane on the same board.', cat:'Rare' },
  { id:'ach_dance_dragons',  name:'Dance of Dragons',         icon:'🐉', rarity:'epic',     desc:'Place both Rhaenyra Targaryen AND Aegon II on the same board.', cat:'Epic' },
  { id:'ach_red_keep',       name:'The Red Keep\'s Finest',   icon:'🕷️', rarity:'epic',     desc:'Place Varys, Littlefinger, AND Tyrion on the same board.', cat:'Epic' },
  { id:'ach_conq_hand',      name:'The Conqueror\'s Court',   icon:'🐉', rarity:'epic',     desc:'Place Aegon I as Ruler AND score 10 in the Hand slot.', cat:'Epic' },
  { id:'ach_warriors_pair',  name:'Blades of Valyria',        icon:'🗡️', rarity:'epic',     desc:'Place both Aemon the Dragonknight AND Daemon Targaryen on the same board.', cat:'Epic' },
  { id:'ach_stannis_shireen',name:'Lord of Dragonstone',      icon:'🔵', rarity:'rare',     desc:'Place both Stannis AND Shireen Baratheon on the same board.', cat:'Rare' },
  { id:'ach_wolves_lions',   name:'Wolves and Lions',         icon:'⚔️', rarity:'epic',     desc:'Have 2+ Stark AND 2+ Lannister characters on the same Empire board.', cat:'Epic' },
  { id:'ach_mad_good',       name:'The Mad and the Good',     icon:'👑', rarity:'epic',     desc:'Place both Aerys the Mad King AND Jaehaerys I on the same Empire board.', cat:'Epic' },
  { id:'ach_sons_dragon',    name:'Sons of the Dragon',       icon:'🐉', rarity:'rare',     desc:'Place both Aegon III AND Viserys II on the same board.', cat:'Rare' },
  { id:'ach_alicent',        name:'The Green Queen',          icon:'🌿', rarity:'rare',     desc:'Place Alicent Hightower in any position.', cat:'Rare' },

  // ── SCORING MILESTONES ────────────────────────────────────────────────────────
  { id:'ach_score10_slot',   name:'Flawless',                 icon:'💯', rarity:'uncommon', desc:'Have any single position score 10 points.', cat:'Uncommon' },
  { id:'ach_160plus_emp',    name:'The Iron Throne Beckons',  icon:'👑', rarity:'epic',     desc:'Score 160+ in Empire Hard mode.', cat:'Epic' },
  { id:'ach_170plus_rand',   name:'Fortune Favors the Bold',  icon:'🎲', rarity:'epic',     desc:'Score 170+ in Empire Random mode.', cat:'Epic' },
  { id:'ach_40plus_fate',    name:'Destiny\'s Chosen',        icon:'🌑', rarity:'epic',     desc:'Score 40+ in Hard Random mode — Classic format, random draw, no rerolls.', cat:'Epic' },
  { id:'ach_conq_random_c',  name:'The Hand of Fate',         icon:'🎲', rarity:'legendary',desc:'Reach Conqueror tier in Classic Random mode.', cat:'Legendary' },
  { id:'ach_conq_random_e',  name:'Fate\'s Favourite',        icon:'🃏', rarity:'legendary',desc:'Reach Conqueror tier in Empire Random mode.', cat:'Legendary' },
  { id:'ach_195plus',        name:'The Eternal Dynasty',      icon:'✨', rarity:'legendary',desc:'Score 195 or more points in Empire mode.', cat:'Legendary' },
  { id:'ach_48plus_hard',    name:'Nigh Unbeatable',          icon:'💎', rarity:'legendary',desc:'Score 48+ in Classic Hard mode — with zero rerolls.', cat:'Legendary' },

  // ── MORE CHARACTER RULERS ────────────────────────────────────────────────────
  { id:'ach_jaime_ruler',    name:'The Kingslayer\'s Crown',  icon:'🗡️', rarity:'rare',      desc:'Place Jaime Lannister as Ruler.', cat:'Characters' },
  { id:'ach_tywin_ruler',    name:'The Golden Lion Reigns',   icon:'🦁', rarity:'rare',      desc:'Place Tywin Lannister as Ruler.', cat:'Characters' },
  { id:'ach_aegon1_ruler',   name:'The Conqueror\'s Throne',  icon:'🐉', rarity:'uncommon',  desc:'Place Aegon the Conqueror as Ruler.', cat:'Characters' },
  { id:'ach_jaehaerys2_ruler',name:'The Cautious King',       icon:'👑', rarity:'uncommon',  desc:'Place Jaehaerys II as Ruler.', cat:'Characters' },
  { id:'ach_aegon5_ruler',   name:'The Unlikely King',        icon:'⚖️', rarity:'uncommon',  desc:'Place Aegon the Unlikely as Ruler.', cat:'Characters' },
  { id:'ach_maegor_ruler',   name:'The Cruel',                icon:'💀', rarity:'uncommon',  desc:'Place Maegor the Cruel as Ruler.', cat:'Characters' },
  { id:'ach_baelor1_ruler',  name:'The Beloved Fanatic',      icon:'🙏', rarity:'uncommon',  desc:'Place Baelor the Blessed as Ruler.', cat:'Characters' },
  { id:'ach_daeron2_ruler',  name:'The Good King',            icon:'📖', rarity:'uncommon',  desc:'Place Daeron the Good as Ruler.', cat:'Characters' },
  { id:'ach_aegon4_ruler',   name:'The Unworthy',             icon:'🐷', rarity:'uncommon',  desc:'Place Aegon the Unworthy as Ruler.', cat:'Characters' },
  { id:'ach_viserys1_ruler', name:'The Old King',             icon:'🦌', rarity:'uncommon',  desc:'Place Viserys I as Ruler.', cat:'Characters' },
  { id:'ach_aegon2_ruler',   name:'The Usurper King',         icon:'🐉', rarity:'rare',      desc:'Place Aegon II as Ruler.', cat:'Characters' },
  { id:'ach_aegon3_ruler',   name:'The Broken King',          icon:'🖤', rarity:'rare',      desc:'Place Aegon the Dragonbane as Ruler.', cat:'Characters' },
  { id:'ach_bran_ruler',     name:'Bran the Broken',          icon:'🌑', rarity:'rare',      desc:'Place Bran Stark as Ruler.', cat:'Characters' },
  { id:'ach_jon_targ_ruler', name:'The Dragon Awakes',        icon:'🔥', rarity:'epic',      desc:'Place Jon Snow as Ruler — rightful Targaryen heir to the Iron Throne.', cat:'Characters' },
  { id:'ach_euron_ruler',    name:'The Crow\'s Eye',          icon:'🦑', rarity:'rare',      desc:'Place Euron Greyjoy as Ruler.', cat:'Characters' },
  { id:'ach_doran_ruler',    name:'Slow Patience',            icon:'☀️', rarity:'rare',      desc:'Place Doran Martell as Ruler.', cat:'Characters' },
  { id:'ach_mance_ruler',    name:'King Beyond the Wall',     icon:'❄️', rarity:'rare',      desc:'Place Mance Rayder as Ruler and score at least 8 for that position.', cat:'Characters' },
  { id:'ach_craster_ruler',  name:'The Wildling Lord',        icon:'👁️', rarity:'epic',      desc:'Place Craster as Ruler — an alarming choice for the realm.', cat:'Characters' },

  // ── MORE CHARACTER HANDS ──────────────────────────────────────────────────────
  { id:'ach_olenna_hand',    name:'The Thorn in Council',     icon:'🌹', rarity:'rare',      desc:'Place Olenna Tyrell as Hand of the King.', cat:'Characters' },
  { id:'ach_doran_hand',     name:'The Quiet Schemer',        icon:'☀️', rarity:'rare',      desc:'Place Doran Martell as Hand of the King.', cat:'Characters' },
  { id:'ach_davos_hand',     name:'The Honest Counselor',     icon:'⚓', rarity:'rare',      desc:'Place Davos Seaworth as Hand of the King.', cat:'Characters' },
  { id:'ach_varys_hand',     name:'The Spider Counsels',      icon:'🕷️', rarity:'rare',      desc:'Place Varys as Hand of the King.', cat:'Characters' },
  { id:'ach_ned_hand',       name:'The Duty of Honor',        icon:'🛡️', rarity:'uncommon',  desc:'Place Eddard Stark as Hand of the King.', cat:'Characters' },
  { id:'ach_stannis_hand',   name:'The Just Counselor',       icon:'🔵', rarity:'rare',      desc:'Place Stannis Baratheon as Hand of the King.', cat:'Characters' },
  { id:'ach_barristan_hand', name:'The Bold Counselor',       icon:'⚔️', rarity:'rare',      desc:'Place Barristan Selmy as Hand of the King.', cat:'Characters' },
  { id:'ach_cregan_hand',    name:'The Hour of the Wolf',     icon:'🐺', rarity:'rare',      desc:'Place Cregan Stark as Hand of the King.', cat:'Characters' },
  { id:'ach_septon_barth',   name:'The Maester\'s Wisdom',    icon:'📜', rarity:'epic',      desc:'Place Septon Barth as Hand — wisest Hand in history.', cat:'Characters' },
  { id:'ach_lyonel_hand',    name:'The Bull of Harrenhal',    icon:'🐂', rarity:'rare',      desc:'Place Lyonel Strong as Hand of the King.', cat:'Characters' },

  // ── MORE KG ACHIEVEMENTS ──────────────────────────────────────────────────────
  { id:'ach_arthur_dayne_kg',name:'The Sword of the Morning', icon:'⭐', rarity:'rare',      desc:'Place Arthur Dayne in a Kingsguard slot.', cat:'Characters' },
  { id:'ach_barristan_kgc',  name:'The Lord Commander',       icon:'🛡️', rarity:'epic',      desc:'Place Barristan Selmy as Kingsguard Commander in Empire.', cat:'Characters' },
  { id:'ach_jaime_kgc',      name:'Lord Commander Oathbreaker',icon:'🗡️',rarity:'epic',      desc:'Place Jaime Lannister as Kingsguard Commander in Empire.', cat:'Characters' },
  { id:'ach_sandor_kg',      name:'The Hound Guards',         icon:'🐕', rarity:'uncommon',  desc:'Place Sandor Clegane in any Kingsguard slot.', cat:'Characters' },
  { id:'ach_gregor_kg',      name:'The Mountain Guards',      icon:'⛰️', rarity:'uncommon',  desc:'Place Gregor Clegane in any Kingsguard slot.', cat:'Characters' },

  // ── HEIR ACHIEVEMENTS ─────────────────────────────────────────────────────────
  { id:'ach_joffrey_heir',   name:'The Boy Prince',           icon:'😬', rarity:'uncommon',  desc:'Place Joffrey as Heir — the realm is doomed.', cat:'Characters' },
  { id:'ach_robb_heir',      name:'Future King in the North', icon:'🐺', rarity:'uncommon',  desc:'Place Robb Stark as Heir.', cat:'Characters' },
  { id:'ach_shireen_heir',   name:'The Rightful Princess',    icon:'📚', rarity:'rare',      desc:'Place Shireen Baratheon as Heir.', cat:'Characters' },
  { id:'ach_myrcella_heir',  name:'The Gentle Heir',          icon:'🌸', rarity:'rare',      desc:'Place Myrcella Baratheon as Heir.', cat:'Characters' },
  { id:'ach_tommen_heir',    name:'The Boy King Heir',        icon:'🐱', rarity:'rare',      desc:'Place Tommen Baratheon as Heir.', cat:'Characters' },
  { id:'ach_bran_heir',      name:'The Broken Branch',        icon:'🌑', rarity:'rare',      desc:'Place Bran Stark as Heir.', cat:'Characters' },
  { id:'ach_rickon_heir',    name:'Youngest Heir',            icon:'🐺', rarity:'uncommon',  desc:'Place Rickon Stark as Heir.', cat:'Characters' },
  { id:'ach_arya_heir',      name:'No One\'s Claim',          icon:'🗡️', rarity:'epic',      desc:'Place Arya Stark as Heir.', cat:'Characters' },
  { id:'ach_euron_heir',     name:'Salt Throne Succession',   icon:'🦑', rarity:'rare',      desc:'Place Euron Greyjoy as Heir.', cat:'Characters' },
  { id:'ach_daeron_heir',    name:'The Daring Heir',          icon:'⚔️', rarity:'rare',      desc:'Place Daeron the Daring as Heir.', cat:'Characters' },
  { id:'ach_jon_nw_heir',    name:'No Claim at the Wall',     icon:'🧊', rarity:'epic',      desc:'Place the Night\'s Watch Jon Snow as Heir — sworn to the Watch, score is 1.', cat:'Characters' },

  // ── EMPIRE HOUSE PACKS ────────────────────────────────────────────────────────
  { id:'ach_emp_all_stark',  name:'The Kingdom of the North', icon:'🐺', rarity:'legendary', desc:'Fill all 20 Empire slots exclusively with Stark characters.', cat:'Epic' },
  { id:'ach_emp_all_bar',    name:'The Baratheon Dynasty',    icon:'🦌', rarity:'legendary', desc:'Fill all 20 Empire slots exclusively with Baratheon characters.', cat:'Epic' },
  { id:'ach_emp_all_lann',   name:'The Golden Empire',        icon:'🦁', rarity:'legendary', desc:'Fill all 20 Empire slots exclusively with Lannister characters.', cat:'Epic' },
  { id:'ach_emp_all_nw',     name:'The Long Night\'s Empire', icon:'🧊', rarity:'legendary', desc:'Fill all 20 Empire slots exclusively with Night\'s Watch characters.', cat:'Epic' },
  { id:'ach_emp_mixed_2',    name:'Two Houses United',        icon:'🤝', rarity:'rare',      desc:'Fill all Empire slots using exactly 2 different houses.', cat:'Epic' },
  { id:'ach_emp_mixed_3',    name:'Triple Alliance',          icon:'⚔️', rarity:'epic',      desc:'Fill all Empire slots using exactly 3 different houses.', cat:'Epic' },

  // ── GAME COUNT MILESTONES ─────────────────────────────────────────────────────
  { id:'ach_25_games',       name:'Experienced Drafter',      icon:'📅', rarity:'uncommon',  desc:'Play 25 games total.', cat:'Easy' },
  { id:'ach_75_games',       name:'Veteran Drafter',          icon:'📅', rarity:'rare',      desc:'Play 75 games total.', cat:'Hard' },
  { id:'ach_100_games',      name:'Realm Keeper',             icon:'👑', rarity:'rare',      desc:'Play 100 games total.', cat:'Hard' },
  { id:'ach_200_games',      name:'Dynasty Architect',        icon:'🏛️', rarity:'epic',      desc:'Play 200 games total.', cat:'Legendary' },
  { id:'ach_500_games',      name:'The Iron Chronicler',      icon:'📚', rarity:'legendary', desc:'Play 500 games total.', cat:'Legendary' },
  { id:'ach_10_classic',     name:'Classic Journeyman',       icon:'⚔️', rarity:'common',    desc:'Play 10 Classic games.', cat:'Easy' },
  { id:'ach_10_empire',      name:'Empire Builder',           icon:'🐉', rarity:'common',    desc:'Play 10 Empire games.', cat:'Easy' },
  { id:'ach_25_classic',     name:'Classic Veteran',          icon:'⚔️', rarity:'uncommon',  desc:'Play 25 Classic games.', cat:'Easy' },
  { id:'ach_25_empire',      name:'Empire Architect',         icon:'🐉', rarity:'uncommon',  desc:'Play 25 Empire games.', cat:'Easy' },
  { id:'ach_50_empire',      name:'Lord of the Long Game',    icon:'🐉', rarity:'rare',      desc:'Play 50 Empire games.', cat:'Hard' },

  // ── SCORE MILESTONES PER MODE ─────────────────────────────────────────────────
  { id:'ach_30_classic',     name:'A Decent Court',           icon:'⚔️', rarity:'common',    desc:'Score 30 or more in Classic mode.', cat:'Easy' },
  { id:'ach_35_classic',     name:'Growing Dynasty',          icon:'⚔️', rarity:'common',    desc:'Score 35 or more in Classic mode.', cat:'Easy' },
  { id:'ach_42_classic',     name:'The Strong Court',         icon:'⚔️', rarity:'uncommon',  desc:'Score 42 or more in Classic mode.', cat:'Easy' },
  { id:'ach_44_classic',     name:'The Mighty Court',         icon:'⚔️', rarity:'rare',      desc:'Score 44 or more in Classic mode.', cat:'Rare' },
  { id:'ach_46_classic',     name:'Near-Perfect Dynasty',     icon:'⚔️', rarity:'epic',      desc:'Score 46 or more in Classic mode.', cat:'Epic' },
  { id:'ach_48_classic',     name:'The Pinnacle',             icon:'⚔️', rarity:'legendary', desc:'Score 48 or more in Classic mode.', cat:'Legendary' },
  { id:'ach_100_empire',     name:'The Fledgling Empire',     icon:'🐉', rarity:'common',    desc:'Score 100 or more in Empire mode.', cat:'Easy' },
  { id:'ach_120_empire',     name:'The Growing Empire',       icon:'🐉', rarity:'common',    desc:'Score 120 or more in Empire mode.', cat:'Easy' },
  { id:'ach_140_empire',     name:'The Strong Empire',        icon:'🐉', rarity:'uncommon',  desc:'Score 140 or more in Empire mode.', cat:'Easy' },
  { id:'ach_150_empire',     name:'Half an Empire',           icon:'🐉', rarity:'uncommon',  desc:'Score 150 or more in Empire mode.', cat:'Easy' },
  { id:'ach_160_empire',     name:'The Mighty Empire',        icon:'🐉', rarity:'rare',      desc:'Score 160 or more in Empire mode.', cat:'Rare' },
  { id:'ach_170_empire',     name:'Realm of Power',           icon:'🐉', rarity:'rare',      desc:'Score 170 or more in Empire mode.', cat:'Rare' },
  { id:'ach_185_empire',     name:'The Grand Dynasty',        icon:'🐉', rarity:'epic',      desc:'Score 185 or more in Empire mode.', cat:'Epic' },
  { id:'ach_25_chard',       name:'Hard But Fair',            icon:'💀', rarity:'uncommon',  desc:'Score 25 or more in Classic Hard mode.', cat:'Easy' },
  { id:'ach_30_chard',       name:'Iron Will',                icon:'💀', rarity:'uncommon',  desc:'Score 30 or more in Classic Hard mode.', cat:'Easy' },
  { id:'ach_35_chard',       name:'Forged Without Fire',      icon:'💀', rarity:'rare',      desc:'Score 35 or more in Classic Hard mode.', cat:'Rare' },
  { id:'ach_38_chard',       name:'Hardened Beyond Measure',  icon:'💀', rarity:'epic',      desc:'Score 38 or more in Classic Hard mode.', cat:'Epic' },
  { id:'ach_80_ehard',       name:'Hard Empire Rising',       icon:'🦌', rarity:'common',    desc:'Score 80 or more in Empire Hard mode.', cat:'Easy' },
  { id:'ach_100_ehard',      name:'Empire of Iron',           icon:'🦌', rarity:'uncommon',  desc:'Score 100 or more in Empire Hard mode.', cat:'Easy' },
  { id:'ach_120_ehard',      name:'Unyielding Dynasty',       icon:'🦌', rarity:'uncommon',  desc:'Score 120 or more in Empire Hard mode.', cat:'Easy' },
  { id:'ach_140_ehard',      name:'Ironborn Empire',          icon:'🦌', rarity:'rare',      desc:'Score 140 or more in Empire Hard mode.', cat:'Rare' },
  { id:'ach_150_ehard',      name:'Iron Legacy',              icon:'🦌', rarity:'epic',      desc:'Score 150 or more in Empire Hard mode.', cat:'Epic' },
  { id:'ach_180_ehard',      name:'Diamond Empire',           icon:'🦌', rarity:'legendary', desc:'Score 180 or more in Empire Hard mode.', cat:'Legendary' },
  { id:'ach_30_crand',       name:'Fortune\'s Beginner',      icon:'☀️', rarity:'common',    desc:'Score 30 or more in Classic Random mode.', cat:'Easy' },
  { id:'ach_35_crand',       name:'Fortune Favors',           icon:'☀️', rarity:'uncommon',  desc:'Score 35 or more in Classic Random mode.', cat:'Easy' },
  { id:'ach_40_crand',       name:'Fortune\'s Chosen',        icon:'☀️', rarity:'rare',      desc:'Score 40 or more in Classic Random mode.', cat:'Rare' },
  { id:'ach_44_crand',       name:'Born Under Stars',         icon:'☀️', rarity:'epic',      desc:'Score 44 or more in Classic Random mode.', cat:'Epic' },
  { id:'ach_100_erand',      name:'Random Realm',             icon:'🌹', rarity:'common',    desc:'Score 100 or more in Empire Random mode.', cat:'Easy' },
  { id:'ach_120_erand',      name:'Lucky Dynasty',            icon:'🌹', rarity:'common',    desc:'Score 120 or more in Empire Random mode.', cat:'Easy' },
  { id:'ach_140_erand',      name:'Fate-Blessed Empire',      icon:'🌹', rarity:'uncommon',  desc:'Score 140 or more in Empire Random mode.', cat:'Easy' },
  { id:'ach_150_erand',      name:'The Favored Dynasty',      icon:'🌹', rarity:'rare',      desc:'Score 150 or more in Empire Random mode.', cat:'Rare' },
  { id:'ach_160_erand',      name:'Serendipity\'s Court',     icon:'🌹', rarity:'epic',      desc:'Score 160 or more in Empire Random mode.', cat:'Epic' },
  { id:'ach_20_hrand',       name:'Fate is Kind Today',       icon:'🦅', rarity:'uncommon',  desc:'Score 20 or more in Hard Random mode.', cat:'Easy' },
  { id:'ach_30_hrand',       name:'Against All Odds',         icon:'🦅', rarity:'rare',      desc:'Score 30 or more in Hard Random mode.', cat:'Rare' },
  { id:'ach_35_hrand',       name:'The Miracle Court',        icon:'🦅', rarity:'epic',      desc:'Score 35 or more in Hard Random mode.', cat:'Epic' },
  { id:'ach_42_hrand',       name:'Fate\'s Masterwork',       icon:'🦅', rarity:'legendary', desc:'Score 42 or more in Hard Random mode.', cat:'Legendary' },
  { id:'ach_80_efate',       name:'Empire by Fate',           icon:'🦑', rarity:'common',    desc:'Score 80 or more in Empire Fate mode.', cat:'Easy' },
  { id:'ach_100_efate',      name:'Fate\'s Empire',           icon:'🦑', rarity:'uncommon',  desc:'Score 100 or more in Empire Fate mode.', cat:'Easy' },
  { id:'ach_120_efate',      name:'Destiny\'s Court',         icon:'🦑', rarity:'rare',      desc:'Score 120 or more in Empire Fate mode.', cat:'Rare' },
  { id:'ach_150_efate',      name:'The Unscripted Dynasty',   icon:'🦑', rarity:'epic',      desc:'Score 150 or more in Empire Fate mode.', cat:'Epic' },
  { id:'ach_180_efate',      name:'Empire Against the Odds',  icon:'🦑', rarity:'legendary', desc:'Score 180 or more in Empire Fate mode.', cat:'Legendary' },

  // ── CPU MODE ACHIEVEMENTS ─────────────────────────────────────────────────────
  { id:'ach_beat_cpu',       name:'Better Than the Machine',  icon:'🤖', rarity:'common',    desc:'Beat the CPU in any game mode.', cat:'Easy' },
  { id:'ach_cpu_blowout',    name:'Dominant Dynasty',         icon:'🤖', rarity:'uncommon',  desc:'Beat the CPU by 10+ points in Classic or 40+ in Empire.', cat:'Easy' },
  { id:'ach_cpu_conqueror',  name:'Man Over Machine',         icon:'🤖', rarity:'rare',      desc:'Reach Conqueror tier while beating the CPU.', cat:'Hard' },
  { id:'ach_cpu_5games',     name:'CPU Rival',                icon:'🤖', rarity:'uncommon',  desc:'Play 5 games against the CPU.', cat:'Easy' },
  { id:'ach_cpu_20games',    name:'The Machine Nemesis',      icon:'🤖', rarity:'rare',      desc:'Play 20 games against the CPU.', cat:'Hard' },

  // ── NIGHT'S WATCH SPECIFIC ────────────────────────────────────────────────────
  { id:'ach_nw_ruler',       name:'The Black Lord',           icon:'🧊', rarity:'epic',      desc:'Place a Night\'s Watch character as Ruler.', cat:'Epic' },
  { id:'ach_nw_hand',        name:'Black Hand',               icon:'🧊', rarity:'epic',      desc:'Place a Night\'s Watch character as Hand of the King.', cat:'Epic' },
  { id:'ach_nw_all5',        name:'The Sworn Brotherhood',    icon:'🧊', rarity:'legendary', desc:'Fill all 5 Classic slots with Night\'s Watch characters.', cat:'Legendary' },
  { id:'ach_jon_nw_ruler',   name:'Lord Commander Rules',     icon:'🧊', rarity:'epic',      desc:'Place the Night\'s Watch Jon Snow as Ruler.', cat:'Characters' },

  // ── ERA ACHIEVEMENTS ──────────────────────────────────────────────────────────
  { id:'ach_conquest_board', name:'The Conquest Court',       icon:'🐉', rarity:'epic',      desc:'Fill Classic with characters all born before 2 AC (Conquest era).', cat:'Epic' },
  { id:'ach_dunk_egg_board', name:'Tales of Dunk and Egg',    icon:'📖', rarity:'epic',      desc:'Fill Classic with characters from the Dunk and Egg era (born 165-220 AC).', cat:'Epic' },
  { id:'ach_dance_board',    name:'The Dance of Dragons',     icon:'🔥', rarity:'epic',      desc:'Place 3+ Dance-era characters (born 100-140 AC) on the same board.', cat:'Epic' },
  { id:'ach_rebellion_board',name:'Robert\'s Rebellion',      icon:'🦌', rarity:'rare',      desc:'Place 3+ characters from Robert\'s Rebellion era (born 255-285 AC).', cat:'Rare' },
  { id:'ach_essos_heavy',    name:'The Free Cities Court',    icon:'⛵', rarity:'rare',      desc:'Place 3+ Essos characters on the same board.', cat:'Rare' },
  { id:'ach_freefolk_board', name:'Free Folk Rising',         icon:'❄️', rarity:'rare',      desc:'Place 3+ Other (Free Folk/Beyond-the-Wall) characters on the same board.', cat:'Rare' },

  // ── UNIQUE POSITIONING ────────────────────────────────────────────────────────
  { id:'ach_full_scores_10', name:'Perfect Position',         icon:'💯', rarity:'uncommon',  desc:'Have 3 or more positions each score exactly 10 on the same board.', cat:'Uncommon' },
  { id:'ach_all_different_houses', name:'Rainbow Court',      icon:'🌈', rarity:'rare',      desc:'Fill Classic with 5 characters each from a different house.', cat:'Rare' },
  { id:'ach_no_targs',       name:'No Dragons Here',          icon:'🐺', rarity:'uncommon',  desc:'Complete Empire mode without drafting any Targaryen characters.', cat:'Uncommon' },
  { id:'ach_no_starks',      name:'Winter Passed',            icon:'🦁', rarity:'uncommon',  desc:'Complete Empire mode without drafting any Stark characters.', cat:'Uncommon' },
  { id:'ach_max_ally',       name:'Friend to All Houses',     icon:'🤝', rarity:'rare',      desc:'Achieve a 10/10 Ally score in Empire mode.', cat:'Rare' },
  { id:'ach_max_bank',       name:'Lords of the Iron Bank',   icon:'💰', rarity:'rare',      desc:'Fill the Bank slot with a character scoring 10/10.', cat:'Rare' },
  { id:'ach_max_con',        name:'Perfect Consort',          icon:'💍', rarity:'rare',      desc:'Fill the Consort slot with a character scoring 10/10.', cat:'Rare' },
  { id:'ach_twin_peaks',     name:'Twin Peaks',               icon:'⛰️', rarity:'rare',      desc:'Have both the Ruler AND Hand slots score 10 on the same board.', cat:'Rare' },
  { id:'ach_all_high_scores',name:'The Golden Court',         icon:'🏆', rarity:'epic',      desc:'Every filled position scores 8 or higher in Classic mode.', cat:'Epic' },

  // ── LORE COMBOS ───────────────────────────────────────────────────────────────
  { id:'ach_twin_swords',    name:'The Twin Swords',          icon:'⚔️', rarity:'epic',      desc:'Place Arthur Dayne AND Jaime Lannister on the same board — the greatest blades.', cat:'Epic' },
  { id:'ach_old_gods',       name:'The Old Gods',             icon:'🌳', rarity:'rare',      desc:'Place both Cregan Stark AND Bran Stark on the same board.', cat:'Rare' },
  { id:'ach_targ_trio',      name:'Blood of the Dragon',      icon:'🔥', rarity:'epic',      desc:'Place Aegon I, Jaehaerys I, AND Daeron II on the same Empire board.', cat:'Epic' },
  { id:'ach_mother_sons',    name:'A Mother\'s Love',         icon:'💛', rarity:'rare',      desc:'Place Catelyn Tully-Stark alongside ANY of her children on the same board.', cat:'Rare' },
  { id:'ach_mormont_pair',   name:'House Mormont Stands',     icon:'🐻', rarity:'uncommon',  desc:'Place both Jorah Mormont AND Lyanna Mormont on the same board.', cat:'Uncommon' },
  { id:'ach_frey_dynasty',   name:'Frey Dominance',           icon:'🏰', rarity:'epic',      desc:'Place 3 or more Frey characters on the same board — somehow.', cat:'Epic' },
  { id:'ach_clegane_duo',    name:'Clash of the Cleganes',    icon:'⛰️', rarity:'rare',      desc:'Place both Sandor AND Gregor Clegane on the same board.', cat:'Rare' },
  { id:'ach_spymaster_duo',  name:'Secrets and Lies',         icon:'🕷️', rarity:'epic',      desc:'Place both Varys AND Littlefinger on the same board — two spiders in one court.', cat:'Epic' },
  { id:'ach_valerian_guard', name:'Valyrian Steel Guard',     icon:'🗡️', rarity:'epic',      desc:'Place Arthur Dayne, Barristan Selmy, AND Jaime Lannister all on the same board.', cat:'Epic' },
  { id:'ach_the_spider',     name:'The Master of Whispers',   icon:'🕷️', rarity:'rare',      desc:'Place Varys as Small Council member in Empire mode.', cat:'Rare' },
  { id:'ach_bad_ruler_10',   name:'Lowborn King',             icon:'😅', rarity:'epic',      desc:'Place a Ruler who scores only 1-3 points AND score 35+ total in Classic — despite yourself.', cat:'Epic' },
  { id:'ach_surprise_conq',  name:'The Unexpected Conqueror', icon:'🎭', rarity:'legendary', desc:'Reach Conqueror tier in any mode while your Ruler scores 5 or below.', cat:'Legendary' },

  // ── VERSUS EXTENDED ───────────────────────────────────────────────────────────
  { id:'ach_vs_5games',      name:'Rival Houses',             icon:'⚔️', rarity:'uncommon',  desc:'Play 5 Versus games.', cat:'Easy' },
  { id:'ach_vs_20games',     name:'The Great Tournament',     icon:'⚔️', rarity:'rare',      desc:'Play 20 Versus games.', cat:'Hard' },
  { id:'ach_vs_empire_win',  name:'Imperial Victor',          icon:'👑', rarity:'rare',      desc:'Win a Versus game in Empire mode.', cat:'Rare' },
  { id:'ach_vs_hard_win',    name:'Hard Won',                 icon:'💀', rarity:'epic',      desc:'Win a Versus game in a Hard mode.', cat:'Epic' },
  { id:'ach_vs_tiebreak',    name:'Photo Finish',             icon:'📷', rarity:'rare',      desc:'Win a Versus game by exactly 1 point.', cat:'Rare' },

  // ── DYNASTY MODE ─────────────────────────────────────────────────────────────
  { id:'ach_dynasty_first',       name:'The Long Game Begins',      icon:'👑', rarity:'common',    desc:'Complete your first Dynasty Mode game.', cat:'Dynasty' },
  { id:'ach_dynasty_10_games',    name:'Dynasty Devotee',           icon:'👑', rarity:'common',    desc:'Play 10 Dynasty Mode games.', cat:'Dynasty' },
  { id:'ach_dynasty_25_games',    name:'Dynasty Veteran',           icon:'👑', rarity:'uncommon',  desc:'Play 25 Dynasty Mode games.', cat:'Dynasty' },
  { id:'ach_dynasty_50_games',    name:'Dynasty Lord',              icon:'👑', rarity:'epic',      desc:'Play 50 Dynasty Mode games.', cat:'Dynasty' },
  { id:'ach_dynasty_lesser_lord', name:'Smallfolk No More',         icon:'🏚️', rarity:'common',   desc:'Score 220 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_250',         name:'Rising Dynasty',            icon:'🏰', rarity:'common',    desc:'Score 250 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_300',         name:'Established House',         icon:'🏰', rarity:'common',    desc:'Score 300 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_great_house', name:'Great House',               icon:'🦌', rarity:'uncommon',  desc:'Score 330 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_350',         name:'Grand Lineage',             icon:'🦌', rarity:'uncommon',  desc:'Score 350 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_380',         name:'Lord Paramount',            icon:'⚔️', rarity:'rare',      desc:'Score 380 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_dragonlord',  name:'Dragonlord',                icon:'🐉', rarity:'rare',      desc:'Score 400 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_420',         name:'Blood of Old Valyria',      icon:'🐉', rarity:'rare',      desc:'Score 420 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_440',         name:'The Blood of Kings',        icon:'🐉', rarity:'epic',      desc:'Score 440 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_conqueror',   name:'Conqueror',                 icon:'⚔️', rarity:'epic',      desc:'Score 451 or more in Dynasty Mode — reach the Conqueror tier.', cat:'Dynasty' },
  { id:'ach_dynasty_460',         name:'Seven Kingdoms United',     icon:'🌐', rarity:'epic',      desc:'Score 460 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_480',         name:'Empire of Ash and Gold',    icon:'✨', rarity:'legendary', desc:'Score 480 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_perfect',     name:'The Eternal Reign',         icon:'🌟', rarity:'legendary', desc:'Score 499 or higher in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_royal_couple',name:'Crown and Consort',         icon:'💑', rarity:'common',    desc:'Fill both the Ruler and Consort slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_perfect_ruler',name:'Born to Rule',             icon:'♚', rarity:'rare',      desc:'Have your Ruler score 9.5 or higher in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_council',name:'The Full Council',          icon:'📜', rarity:'uncommon',  desc:'Fill all 6 Council positions in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_kg',     name:'The Seven Sworn',           icon:'🛡️', rarity:'uncommon', desc:'Fill all 6 Kingsguard slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_knights',name:'Knights of the Realm',      icon:'⚔️', rarity:'common',    desc:'Fill all 4 Knight slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_squires',name:'Pages of the Realm',        icon:'🏹', rarity:'common',    desc:'Fill all 4 Squire slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_wardens',name:'Guardians of the Realm',    icon:'🗺️', rarity:'uncommon', desc:'Fill all 4 Warden slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_allies', name:'A Web of Alliances',        icon:'🤝', rarity:'uncommon',  desc:'Fill all 4 Ally slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_army',   name:'The Grand Army',            icon:'⚔️', rarity:'rare',      desc:'Fill all 20 Army positions in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_house',  name:'A Full Household',          icon:'🏰', rarity:'rare',      desc:'Fill all 15 House positions in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_board',  name:'A Dynasty Complete',        icon:'🌟', rarity:'legendary', desc:'Fill all 50 positions in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_one_dragon',  name:'Dragon Tamer',              icon:'🐉', rarity:'uncommon',  desc:'Draft a Dragon in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_two_dragons', name:'Twin Dragons',              icon:'🐉', rarity:'rare',      desc:'Draft both Dragons in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_dr_pair',name:'Riders of the Dawn',        icon:'🐉', rarity:'epic',      desc:'Fill both Dragonrider + Dragon pairs in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_house_80',    name:'A Strong Household',        icon:'🏰', rarity:'common',    desc:'Score 80+ in the House group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_house_100',   name:'The Great Family',          icon:'🏰', rarity:'uncommon',  desc:'Score 100+ in the House group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_house_120',   name:'House Above All',           icon:'🏰', rarity:'rare',      desc:'Score 120+ in the House group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_council_30',  name:'Competent Council',         icon:'📜', rarity:'common',    desc:'Score 30+ in the Council group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_council_45',  name:'Wise Council',              icon:'📜', rarity:'uncommon',  desc:'Score 45+ in the Council group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_council_55',  name:'Perfect Council',           icon:'📜', rarity:'epic',      desc:'Score 55+ in the Council group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_army_100',    name:'A Standing Army',           icon:'⚔️', rarity:'common',    desc:'Score 100+ in the Army group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_army_130',    name:'War Machine',               icon:'⚔️', rarity:'uncommon',  desc:'Score 130+ in the Army group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_army_150',    name:"The Realm's Sword",         icon:'⚔️', rarity:'rare',      desc:'Score 150+ in the Army group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_kingdom_40',  name:'Kingdom Footholds',         icon:'🗺️', rarity:'common',   desc:'Score 40+ in the Kingdom group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_kingdom_60',  name:'Kingdom Secured',           icon:'🗺️', rarity:'uncommon', desc:'Score 60+ in the Kingdom group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_kingdom_75',  name:'Realm United',              icon:'🗺️', rarity:'rare',     desc:'Score 75+ in the Kingdom group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_targ_ruler',  name:'Fire Rules the Kingdoms',   icon:'🔥', rarity:'uncommon',  desc:'Place a Targaryen as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_stark_ruler', name:'A Wolf on the Throne',      icon:'🐺', rarity:'uncommon',  desc:'Place a Stark as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_lann_ruler',  name:'The Gold Lion Reigns',      icon:'🦁', rarity:'uncommon',  desc:'Place a Lannister as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_dany_ruler',  name:'Mother of the Dynasty',     icon:'🐉', rarity:'rare',      desc:'Place Daenerys as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_aegon_ruler', name:"The Conqueror's Dynasty",   icon:'⚔️', rarity:'rare',      desc:'Place Aegon I as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_jaeh_ruler',  name:"The Conciliator's Seat",    icon:'⚖️', rarity:'rare',      desc:'Place Jaehaerys I as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_nw_ruler',    name:'The Black King',            icon:'🧊', rarity:'epic',      desc:"Place a Night's Watch member as Ruler in Dynasty Mode.", cat:'Dynasty' },
  { id:'ach_dynasty_kg_ruler',    name:'The White King',            icon:'🛡️', rarity:'epic',      desc:'Place a Kingsguard member as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_tyrion_hand', name:'The Imp Counsels the Ages', icon:'🍷', rarity:'uncommon',  desc:'Place Tyrion as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_varys_hand',  name:'The Spider Governs',        icon:'🕷️', rarity:'uncommon', desc:'Place Varys as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_tywin_hand',  name:'The Great Lion Commands',   icon:'🦁', rarity:'rare',      desc:'Place Tywin as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_ned_hand',    name:"Honor's Counsel",           icon:'🛡️', rarity:'uncommon',  desc:'Place Eddard Stark as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_barristan_kg',name:'The Bold Kingsguard',       icon:'⚔️', rarity:'uncommon',  desc:'Place Barristan Selmy in a Kingsguard slot in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_arthur_kg',   name:'Sword of the Morning',      icon:'⭐', rarity:'rare',      desc:'Place Arthur Dayne in a Kingsguard slot in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_jon_heir',    name:'The Dragon Heir',           icon:'❄️', rarity:'rare',      desc:'Place Jon Snow as Heir in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_aemon_gm',    name:'Maester of Ages',           icon:'🧊', rarity:'epic',      desc:'Place Maester Aemon as Grand Maester in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_cersei_consort',name:'The Lion Queen',          icon:'🦁', rarity:'rare',      desc:'Place Cersei as Consort in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_dany_consort',name:'Silver-Haired Consort',     icon:'🐉', rarity:'rare',      desc:'Place Daenerys as Consort in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_bank_10',     name:'Lords of Braavos',          icon:'💰', rarity:'rare',      desc:'Fill the Bank slot scoring 10/10 in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_nw_house',    name:'Sworn Brothers at Court',   icon:'🧊', rarity:'epic',      desc:"Have 3+ Night's Watch members in House positions in Dynasty.", cat:'Dynasty' },
  { id:'ach_dynasty_kg_house',    name:'White Cloaks in the Hall',  icon:'🛡️', rarity:'epic',      desc:'Have 3+ Kingsguard members in House positions in Dynasty.', cat:'Dynasty' },
  { id:'ach_dynasty_targ_heavy',  name:'The Targaryen Household',   icon:'🔥', rarity:'rare',      desc:'Have 15+ Targaryen characters in your Dynasty roster.', cat:'Dynasty' },
  { id:'ach_dynasty_all_targ',    name:'Pure Dragon Blood',         icon:'🐉', rarity:'legendary', desc:'Fill 20+ positions exclusively with Targaryen characters in Dynasty.', cat:'Dynasty' },
  { id:'ach_dynasty_no_discard',  name:'No Waste',                  icon:'♻️', rarity:'rare',      desc:'Complete a Dynasty game without discarding a single character.', cat:'Dynasty' },
  { id:'ach_dynasty_female_consort',name:"The Consort's Seat Filled",icon:'👸',rarity:'common',    desc:'Fill the Consort slot in Dynasty Mode.', cat:'Dynasty' },

  // ── CREATIVE & SITUATIONAL ────────────────────────────────────────────────────
  { id:'ach_wildcard_conq',   name:'Wild at Heart',            icon:'🃏', rarity:'epic',      desc:'Reach Conqueror tier using Wildcard Positions in Classic mode.', cat:'Epic' },
  { id:'ach_heir_rules',      name:'The Heir Sits the Throne', icon:'👑', rarity:'rare',      desc:'Place the same character as both Ruler AND Heir on the same board (any mode).', cat:'Rare' },
  { id:'ach_all_women_empire',name:'Court of Queens',          icon:'♀️', rarity:'epic',      desc:'Fill all 20 Empire slots with female characters exclusively.', cat:'Epic' },
  { id:'ach_all_men_empire',  name:'A Brotherhood of Lords',   icon:'♂️', rarity:'epic',      desc:'Fill all 20 Empire slots with male characters exclusively.', cat:'Epic' },
  { id:'ach_senior_court',    name:'The Elders Speak',         icon:'👴', rarity:'rare',      desc:'Fill Classic with 5 characters all aged 50 or older.', cat:'Rare' },
  { id:'ach_young_court',     name:'Babes of the Realm',       icon:'👶', rarity:'epic',      desc:'Fill Classic with 5 characters all aged 18 or younger.', cat:'Epic' },
  { id:'ach_no_reroll_classic',name:'Iron Memory',             icon:'🧠', rarity:'rare',      desc:'Complete Classic mode without using a single reroll.', cat:'Rare' },
  { id:'ach_no_reroll_empire', name:'Fate Accepted',           icon:'🌐', rarity:'epic',      desc:'Complete Empire mode without using a single reroll.', cat:'Epic' },
  { id:'ach_comeback_win',    name:'A Claim Against All Odds', icon:'🔄', rarity:'epic',      desc:'Win Versus after trailing by 10+ points in Classic (or 40+ in Empire) mid-game.', cat:'Epic' },
  { id:'ach_dragon_queen',    name:'The Dragon Queen\'s Court',icon:'🐉', rarity:'legendary', desc:'Place Daenerys as Ruler with 2+ Targaryen characters and score 45+ in Classic.', cat:'Legendary' },

  // ── CHAOS LADDER ─────────────────────────────────────────────────────────────
  { id:'ach_chaos_first',      name:'First Step',               icon:'🪜', rarity:'common',   desc:'Complete Rung 1 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_10',         name:'Into the Chaos',           icon:'⛓️', rarity:'common',   desc:'Complete Rung 10 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_25',         name:'Halfway to Madness',       icon:'🔥', rarity:'uncommon', desc:'Complete Rung 25 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_50',         name:'Chaos Master',             icon:'🌋', rarity:'rare',     desc:'Complete Rung 50 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_all',        name:'Absolute Chaos',           icon:'👑', rarity:'epic',     desc:'Complete all 50 rungs of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_nw',         name:'For the Watch',            icon:'❄️', rarity:'common',   desc:"Defeat a Night's Watch lineup on the Chaos Ladder.", cat:'Chaos Ladder' },
  { id:'ach_chaos_frey',       name:'Red Wedding Reversal',     icon:'🏰', rarity:'common',   desc:'Defeat a House Frey lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_other',      name:'Crow Killer',              icon:'🌲', rarity:'common',   desc:'Defeat a Beyond the Wall lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_velaryon',   name:'Drowned Their Pride',      icon:'🌊', rarity:'common',   desc:'Defeat a House Velaryon lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_tyrell',     name:'Thorn in Their Side',      icon:'🌹', rarity:'common',   desc:'Defeat a House Tyrell lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_baratheon',  name:'Our Fury',                 icon:'🦌', rarity:'uncommon', desc:'Defeat a House Baratheon lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_blackfyre',  name:'Dragon Slain',             icon:'⚔️', rarity:'uncommon', desc:'Defeat a House Blackfyre lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_essos',      name:'Across the Narrow Sea',    icon:'🏺', rarity:'uncommon', desc:'Defeat an Essos lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_martell',    name:'Unbowed, Unbroken',        icon:'☀️', rarity:'uncommon', desc:'Defeat a House Martell lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_lannister',  name:'A Lion Always Falls',      icon:'🦁', rarity:'rare',     desc:'Defeat a House Lannister lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_stark',      name:'The North Remembers Defeat',icon:'🐺', rarity:'rare',     desc:'Defeat a House Stark lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_bannermen',  name:'Lord Breaker',             icon:'🏹', rarity:'rare',     desc:'Defeat a Bannermen lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_targaryen',  name:'Dragonslayer',             icon:'🐉', rarity:'epic',     desc:'Defeat a House Targaryen lineup on the Chaos Ladder.', cat:'Chaos Ladder' },

  // ── NEW SCORE GAP FILLS ───────────────────────────────────────────────────────
  { id:'ach_20_classic',    name:'Learning the Game',         icon:'⚔️', rarity:'common',    desc:'Score 20 or more in Classic mode.', cat:'Easy' },
  { id:'ach_38_classic',    name:'Nearing Greatness',         icon:'⚔️', rarity:'uncommon',  desc:'Score 38 or more in Classic mode.', cat:'Easy' },
  { id:'ach_43_classic',    name:'Seasoned Court',            icon:'⚔️', rarity:'rare',      desc:'Score 43 or more in Classic mode.', cat:'Rare' },
  { id:'ach_47_classic',    name:'Conqueror Rising',          icon:'⚔️', rarity:'epic',      desc:'Score 47 or more in Classic mode.', cat:'Epic' },
  { id:'ach_60_empire',     name:'Empire Seeds',              icon:'🐉', rarity:'common',    desc:'Score 60 or more in Empire mode.', cat:'Easy' },
  { id:'ach_80_empire',     name:'Empire Sprouts',            icon:'🐉', rarity:'common',    desc:'Score 80 or more in Empire mode.', cat:'Easy' },
  { id:'ach_130_empire',    name:'Empire Deepens',            icon:'🐉', rarity:'uncommon',  desc:'Score 130 or more in Empire mode.', cat:'Easy' },
  { id:'ach_145_empire',    name:'Strong Foundations',        icon:'🐉', rarity:'uncommon',  desc:'Score 145 or more in Empire mode.', cat:'Easy' },
  { id:'ach_155_empire',    name:'Realm of Ambition',         icon:'🐉', rarity:'rare',      desc:'Score 155 or more in Empire mode.', cat:'Rare' },
  { id:'ach_175_empire',    name:'Realm Supreme',             icon:'🐉', rarity:'rare',      desc:'Score 175 or more in Empire mode.', cat:'Rare' },
  { id:'ach_20_chard',      name:'First Taste of Iron',       icon:'💀', rarity:'common',    desc:'Score 20 or more in Classic Hard mode.', cat:'Easy' },
  { id:'ach_42_chard',      name:'Ironclad',                  icon:'💀', rarity:'rare',      desc:'Score 42 or more in Classic Hard mode.', cat:'Rare' },
  { id:'ach_44_chard',      name:'Unshakeable',               icon:'💀', rarity:'epic',      desc:'Score 44 or more in Classic Hard mode.', cat:'Epic' },
  { id:'ach_46_chard',      name:'The Iron Throne Awaits',    icon:'💀', rarity:'legendary', desc:'Score 46 or more in Classic Hard mode.', cat:'Legendary' },
  { id:'ach_60_ehard',      name:'Hard Landing',              icon:'🦌', rarity:'common',    desc:'Score 60 or more in Empire Hard mode.', cat:'Easy' },
  { id:'ach_130_ehard',     name:'Iron Walls',                icon:'🦌', rarity:'rare',      desc:'Score 130 or more in Empire Hard mode.', cat:'Rare' },
  { id:'ach_145_ehard',     name:'Fortress of Iron',          icon:'🦌', rarity:'epic',      desc:'Score 145 or more in Empire Hard mode.', cat:'Epic' },
  { id:'ach_155_ehard',     name:'Iron Court Supreme',        icon:'🦌', rarity:'epic',      desc:'Score 155 or more in Empire Hard mode.', cat:'Epic' },
  { id:'ach_165_ehard',     name:'Almost Invincible',         icon:'🦌', rarity:'legendary', desc:'Score 165 or more in Empire Hard mode.', cat:'Legendary' },
  { id:'ach_175_ehard',     name:'Reign of Steel',            icon:'🦌', rarity:'legendary', desc:'Score 175 or more in Empire Hard mode.', cat:'Legendary' },
  { id:'ach_20_crand',      name:'Fates First Gift',          icon:'☀️', rarity:'common',    desc:'Score 20 or more in Classic Random mode.', cat:'Easy' },
  { id:'ach_25_crand',      name:'Luck Begins',               icon:'☀️', rarity:'common',    desc:'Score 25 or more in Classic Random mode.', cat:'Easy' },
  { id:'ach_42_crand',      name:'Fortunate Dynasty',         icon:'☀️', rarity:'epic',      desc:'Score 42 or more in Classic Random mode.', cat:'Epic' },
  { id:'ach_60_erand',      name:'Lucky Foundations',         icon:'🌹', rarity:'common',    desc:'Score 60 or more in Empire Random mode.', cat:'Easy' },
  { id:'ach_80_erand',      name:'Blessed Realm',             icon:'🌹', rarity:'common',    desc:'Score 80 or more in Empire Random mode.', cat:'Easy' },
  { id:'ach_130_erand',     name:'Charmed Court',             icon:'🌹', rarity:'uncommon',  desc:'Score 130 or more in Empire Random mode.', cat:'Easy' },
  { id:'ach_155_erand',     name:'Destined Dynasty',          icon:'🌹', rarity:'rare',      desc:'Score 155 or more in Empire Random mode.', cat:'Rare' },
  { id:'ach_10_hrand',      name:'Dice Roller',               icon:'🦅', rarity:'common',    desc:'Score 10 or more in Hard Random mode.', cat:'Easy' },
  { id:'ach_25_hrand',      name:'Lucky Shot',                icon:'🦅', rarity:'uncommon',  desc:'Score 25 or more in Hard Random mode.', cat:'Easy' },
  { id:'ach_38_hrand',      name:'Stars Aligned',             icon:'🦅', rarity:'legendary', desc:'Score 38 or more in Hard Random mode.', cat:'Legendary' },
  { id:'ach_60_efate',      name:'Fate Begins',               icon:'🦑', rarity:'common',    desc:'Score 60 or more in Empire Fate mode.', cat:'Easy' },
  { id:'ach_130_efate',     name:'Unwritten History',         icon:'🦑', rarity:'uncommon',  desc:'Score 130 or more in Empire Fate mode.', cat:'Easy' },
  { id:'ach_140_efate',     name:'Tapestry of Fate',          icon:'🦑', rarity:'rare',      desc:'Score 140 or more in Empire Fate mode.', cat:'Rare' },
  { id:'ach_160_efate',     name:'Fated for Greatness',       icon:'🦑', rarity:'epic',      desc:'Score 160 or more in Empire Fate mode.', cat:'Epic' },
  { id:'ach_170_efate',     name:'Destiny Fulfilled',         icon:'🦑', rarity:'legendary', desc:'Score 170 or more in Empire Fate mode.', cat:'Legendary' },

  // ── NEW GAME COUNT MILESTONES ─────────────────────────────────────────────────
  { id:'ach_3_games',       name:'Getting Started',           icon:'🌱', rarity:'common',    desc:'Play 3 games total.', cat:'Easy' },
  { id:'ach_150_games',     name:'Realm Veteran',             icon:'👑', rarity:'epic',      desc:'Play 150 games total.', cat:'Legendary' },
  { id:'ach_250_games',     name:'Eternal Drafter',           icon:'📚', rarity:'epic',      desc:'Play 250 games total.', cat:'Legendary' },
  { id:'ach_1000_games',    name:'The Iron Chronicler of Ages',icon:'🌟',rarity:'legendary', desc:'Play 1000 games total.', cat:'Legendary' },
  { id:'ach_5_classic',     name:'Classic Beginner',          icon:'⚔️', rarity:'common',    desc:'Play 5 Classic games.', cat:'Easy' },
  { id:'ach_50_classic',    name:'Classic Master',            icon:'⚔️', rarity:'rare',      desc:'Play 50 Classic games.', cat:'Hard' },
  { id:'ach_100_classic',   name:'Classic Chronicler',        icon:'⚔️', rarity:'epic',      desc:'Play 100 Classic games.', cat:'Legendary' },
  { id:'ach_5_empire',      name:'Empire Beginner',           icon:'🐉', rarity:'common',    desc:'Play 5 Empire games.', cat:'Easy' },
  { id:'ach_100_empire_g',  name:'Empire Chronicler',         icon:'🐉', rarity:'epic',      desc:'Play 100 Empire games.', cat:'Legendary' },
  { id:'ach_5_hard',        name:'First Hard Step',           icon:'💀', rarity:'common',    desc:'Play 5 Classic Hard games.', cat:'Easy' },
  { id:'ach_10_hard',       name:'Hard Habit',                icon:'💀', rarity:'uncommon',  desc:'Play 10 Classic Hard games.', cat:'Easy' },
  { id:'ach_25_hard',       name:'Hardened Drafter',          icon:'💀', rarity:'rare',      desc:'Play 25 Classic Hard games.', cat:'Hard' },
  { id:'ach_50_hard',       name:'Iron Veteran',              icon:'💀', rarity:'epic',      desc:'Play 50 Classic Hard games.', cat:'Legendary' },
  { id:'ach_5_dynasty',     name:'Dynasty Initiate',          icon:'👑', rarity:'common',    desc:'Play 5 Dynasty Mode games.', cat:'Dynasty' },
  { id:'ach_50_vs',         name:'Tournament Champion',       icon:'⚔️', rarity:'epic',      desc:'Play 50 Versus games.', cat:'Legendary' },
  { id:'ach_50_cpu_g',      name:'CPU Slayer',                icon:'🤖', rarity:'rare',      desc:'Play 50 games against the CPU.', cat:'Hard' },
  { id:'ach_100_cpu_g',     name:'The Eternal Rival',         icon:'🤖', rarity:'legendary', desc:'Play 100 games against the CPU.', cat:'Legendary' },

  // ── NEW CHARACTER RULERS ──────────────────────────────────────────────────────
  { id:'ach_robert_ruler',  name:'The Usurper Rules',         icon:'🦌', rarity:'uncommon',  desc:'Place Robert Baratheon as Ruler.', cat:'Characters' },
  { id:'ach_renly_ruler',   name:'The King of Summer Reigns', icon:'🌈', rarity:'rare',      desc:'Place Renly Baratheon as Ruler.', cat:'Characters' },
  { id:'ach_daemon_ruler',  name:'The Rogue Prince Reigns',   icon:'🗡️', rarity:'rare',      desc:'Place Daemon Targaryen as Ruler.', cat:'Characters' },
  { id:'ach_corlys_ruler',  name:'The Sea Snake Crowns',      icon:'🌊', rarity:'rare',      desc:'Place Corlys Velaryon as Ruler.', cat:'Characters' },
  { id:'ach_helaena_ruler', name:'The Dreaming Queen',        icon:'🦋', rarity:'rare',      desc:'Place Helaena Targaryen as Ruler.', cat:'Characters' },
  { id:'ach_margaery_ruler',name:'The Rose Crowned',          icon:'🌹', rarity:'rare',      desc:'Place Margaery Tyrell as Ruler.', cat:'Characters' },
  { id:'ach_catelyn_ruler', name:'Lady of the Rivers',        icon:'🐟', rarity:'rare',      desc:'Place Catelyn Tully-Stark as Ruler.', cat:'Characters' },
  { id:'ach_petyr_ruler',   name:'Lord of the Fingers',       icon:'🪜', rarity:'epic',      desc:'Place Petyr Baelish as Ruler — chaos ascends.', cat:'Characters' },
  { id:'ach_sandor_ruler',  name:'The Hound Rules',           icon:'🐕', rarity:'epic',      desc:'Place Sandor Clegane as Ruler — the realm trembles.', cat:'Characters' },
  { id:'ach_oberyn_ruler',  name:'Viper on the Throne',       icon:'☀️', rarity:'rare',      desc:'Place Oberyn Martell as Ruler.', cat:'Characters' },
  { id:'ach_alysanne_ruler',name:'The Good Queen Reigns',     icon:'⚖️', rarity:'rare',      desc:'Place Alysanne Targaryen as Ruler.', cat:'Characters' },
  { id:'ach_visenya_ruler', name:'The Warrior Queen Reigns',  icon:'🗡️', rarity:'uncommon',  desc:'Place Visenya Targaryen as Ruler.', cat:'Characters' },
  { id:'ach_aenys_ruler',   name:'The Gentle King',           icon:'🕊️', rarity:'uncommon',  desc:'Place Aenys I as Ruler.', cat:'Characters' },
  { id:'ach_daeron1_ruler', name:'The Young Dragon',          icon:'🐉', rarity:'uncommon',  desc:'Place Daeron I as Ruler.', cat:'Characters' },
  { id:'ach_barristan_ruler',name:'The Bold on the Throne',   icon:'⚔️', rarity:'epic',      desc:'Place Barristan Selmy as Ruler — the greatest knight reigns.', cat:'Characters' },
  { id:'ach_davos_ruler',   name:'The Smuggler King',         icon:'⚓', rarity:'epic',      desc:'Place Davos Seaworth as Ruler — an unlikely crown.', cat:'Characters' },
  { id:'ach_jorah_ruler',   name:'The Exiled Bear Rules',     icon:'🐻', rarity:'epic',      desc:'Place Jorah Mormont as Ruler.', cat:'Characters' },
  { id:'ach_lyanna_ruler',  name:'The She-Wolf Reigns',       icon:'🐺', rarity:'rare',      desc:'Place Lyanna Stark as Ruler.', cat:'Characters' },
  { id:'ach_melisandre_ruler',name:'The Red Queen',           icon:'🔴', rarity:'epic',      desc:'Place Melisandre as Ruler — the Lord of Light commands.', cat:'Characters' },
  { id:'ach_olenna_ruler',  name:'Queen of Thorns Crowned',   icon:'🌹', rarity:'epic',      desc:'Place Olenna Tyrell as Ruler — sharp wit on the throne.', cat:'Characters' },
  { id:'ach_brienne_ruler', name:'The Knight Queen',          icon:'🛡️', rarity:'epic',      desc:'Place Brienne of Tarth as Ruler.', cat:'Characters' },
  { id:'ach_corlys_ac',     name:'Admiral of the Realm',      icon:'⛵', rarity:'rare',      desc:'Place Corlys Velaryon as Army Commander.', cat:'Characters' },
  { id:'ach_daemon_ac',     name:'The Rogue Commander',       icon:'🗡️', rarity:'rare',      desc:'Place Daemon Targaryen as Army Commander.', cat:'Characters' },
  { id:'ach_robert_ac',     name:'Warhammer at the Front',    icon:'🦌', rarity:'rare',      desc:'Place Robert Baratheon as Army Commander.', cat:'Characters' },
  { id:'ach_tywin_ac',      name:'The Lion Commands',         icon:'🦁', rarity:'rare',      desc:'Place Tywin Lannister as Army Commander.', cat:'Characters' },
  { id:'ach_robb_ac',       name:'The Young Wolf Leads',      icon:'🐺', rarity:'rare',      desc:'Place Robb Stark as Army Commander.', cat:'Characters' },

  // ── NEW CHARACTER HEIRS ───────────────────────────────────────────────────────
  { id:'ach_cersei_heir',   name:'First Among Lions',         icon:'🦁', rarity:'rare',      desc:'Place Cersei Lannister as Heir.', cat:'Characters' },
  { id:'ach_stannis_heir',  name:'The Heir of Duty',          icon:'🔵', rarity:'uncommon',  desc:'Place Stannis Baratheon as Heir.', cat:'Characters' },
  { id:'ach_renly_heir',    name:'The Flowery Claim',         icon:'🌈', rarity:'uncommon',  desc:'Place Renly Baratheon as Heir.', cat:'Characters' },
  { id:'ach_rhaenyra_heir', name:'The Princess Apparent',     icon:'🐉', rarity:'rare',      desc:'Place Rhaenyra Targaryen as Heir.', cat:'Characters' },
  { id:'ach_daemon_heir',   name:'The Rogue Heir',            icon:'🗡️', rarity:'rare',      desc:'Place Daemon Targaryen as Heir.', cat:'Characters' },
  { id:'ach_helaena_heir',  name:'The Dreaming Heir',         icon:'🦋', rarity:'rare',      desc:'Place Helaena Targaryen as Heir.', cat:'Characters' },
  { id:'ach_tyrion_heir',   name:'The Imp Claims',            icon:'🍷', rarity:'epic',      desc:'Place Tyrion Lannister as Heir — Tywin would be furious.', cat:'Characters' },
  { id:'ach_sansa_heir',    name:'The Diplomatic Heir',       icon:'🐺', rarity:'uncommon',  desc:'Place Sansa Stark as Heir.', cat:'Characters' },
  { id:'ach_margaery_heir', name:'The Rose Heir',             icon:'🌹', rarity:'uncommon',  desc:'Place Margaery Tyrell as Heir.', cat:'Characters' },
  { id:'ach_lyanna_heir',   name:'The She-Wolf Heir',         icon:'🐺', rarity:'rare',      desc:'Place Lyanna Stark as Heir.', cat:'Characters' },
  { id:'ach_daemon_bl_heir',name:'The Black Dragon Heir',     icon:'🖤', rarity:'rare',      desc:'Place Daemon Blackfyre as Heir.', cat:'Characters' },

  // ── NEW CHARACTER HANDS ───────────────────────────────────────────────────────
  { id:'ach_robb_hand',     name:'The Young Wolf Counsels',   icon:'🐺', rarity:'rare',      desc:'Place Robb Stark as Hand of the King.', cat:'Characters' },
  { id:'ach_rhaegar_hand',  name:'The Silver Prince Advises', icon:'🎵', rarity:'rare',      desc:'Place Rhaegar Targaryen as Hand of the King.', cat:'Characters' },
  { id:'ach_daemon_hand',   name:'The Rogue Prince Counsels', icon:'🗡️', rarity:'rare',      desc:'Place Daemon Targaryen as Hand of the King.', cat:'Characters' },
  { id:'ach_corlys_hand',   name:'The Sea Snake Advises',     icon:'🌊', rarity:'rare',      desc:'Place Corlys Velaryon as Hand of the King.', cat:'Characters' },
  { id:'ach_oberyn_hand',   name:'The Viper in Council',      icon:'☀️', rarity:'epic',      desc:'Place Oberyn Martell as Hand of the King.', cat:'Characters' },
  { id:'ach_brienne_hand',  name:'An Oath of Service',        icon:'🛡️', rarity:'epic',      desc:'Place Brienne of Tarth as Hand of the King.', cat:'Characters' },
  { id:'ach_robert_hand',   name:'The King Advises Himself',  icon:'🦌', rarity:'rare',      desc:'Place Robert Baratheon as Hand of the King.', cat:'Characters' },
  { id:'ach_jaime_hand',    name:'The Kingslayer Counsels',   icon:'🗡️', rarity:'epic',      desc:'Place Jaime Lannister as Hand of the King.', cat:'Characters' },
  { id:'ach_renly_hand',    name:'The Stag in Council',       icon:'🌈', rarity:'rare',      desc:'Place Renly Baratheon as Hand of the King.', cat:'Characters' },
  { id:'ach_cersei_hand',   name:'The Lion Guides the Throne',icon:'🦁', rarity:'rare',      desc:'Place Cersei Lannister as Hand of the King.', cat:'Characters' },
  { id:'ach_mance_hand',    name:'King Beyond the Wall Advises',icon:'❄️',rarity:'epic',      desc:'Place Mance Rayder as Hand of the King.', cat:'Characters' },
  { id:'ach_alysanne_hand', name:'The Good Queen Counsels',   icon:'⚖️', rarity:'rare',      desc:'Place Alysanne Targaryen as Hand of the King.', cat:'Characters' },
  { id:'ach_jorah_hand',    name:'The Bear in Council',       icon:'🐻', rarity:'rare',      desc:'Place Jorah Mormont as Hand of the King.', cat:'Characters' },
  { id:'ach_bloodraven_hand',name:'The Three-Eyed Hand',      icon:'👁️', rarity:'epic',      desc:'Place Bloodraven as Hand of the King.', cat:'Characters' },
  { id:'ach_catelyn_hand',  name:'Lady of Counsel',           icon:'🐟', rarity:'rare',      desc:'Place Catelyn Tully-Stark as Hand of the King.', cat:'Characters' },

  // ── NEW CHARACTERS IN ANY POSITION ───────────────────────────────────────────
  { id:'ach_robert',        name:'The Usurper',               icon:'🦌', rarity:'common',    desc:'Place Robert Baratheon in any position.', cat:'Characters' },
  { id:'ach_renly',         name:'The King of Summer',        icon:'🌈', rarity:'common',    desc:'Place Renly Baratheon in any position.', cat:'Characters' },
  { id:'ach_margaery',      name:'The Rose',                  icon:'🌹', rarity:'common',    desc:'Place Margaery Tyrell in any position.', cat:'Characters' },
  { id:'ach_catelyn',       name:'Lady of Winterfell',        icon:'🐟', rarity:'common',    desc:'Place Catelyn Tully-Stark in any position.', cat:'Characters' },
  { id:'ach_corlys',        name:'The Sea Snake',             icon:'🌊', rarity:'uncommon',  desc:'Place Corlys Velaryon in any position.', cat:'Characters' },
  { id:'ach_helaena',       name:'The Dragon Dreamer',        icon:'🦋', rarity:'uncommon',  desc:'Place Helaena Targaryen in any position.', cat:'Characters' },
  { id:'ach_daemon',        name:'The Rogue Prince',          icon:'🗡️', rarity:'uncommon',  desc:'Place Daemon Targaryen in any position.', cat:'Characters' },
  { id:'ach_visenya',       name:'The Warrior Queen',         icon:'🗡️', rarity:'uncommon',  desc:'Place Visenya Targaryen in any position.', cat:'Characters' },
  { id:'ach_alysanne',      name:'The Good Queen',            icon:'⚖️', rarity:'uncommon',  desc:'Place Alysanne Targaryen in any position.', cat:'Characters' },
  { id:'ach_lyanna',        name:'The She-Wolf',              icon:'🐺', rarity:'uncommon',  desc:'Place Lyanna Stark in any position.', cat:'Characters' },
  { id:'ach_tommen',        name:'The Boy King',              icon:'🐱', rarity:'common',    desc:'Place Tommen Baratheon-Lannister in any position.', cat:'Characters' },
  { id:'ach_myrcella',      name:'The Golden Princess',       icon:'🌸', rarity:'common',    desc:'Place Myrcella Baratheon-Lannister in any position.', cat:'Characters' },
  { id:'ach_edmure',        name:'The Trout',                 icon:'🐟', rarity:'common',    desc:'Place Edmure Tully in any position.', cat:'Characters' },
  { id:'ach_lysa',          name:'Lady of the Eyrie',         icon:'🦅', rarity:'common',    desc:'Place Lysa Tully-Arryn in any position.', cat:'Characters' },
  { id:'ach_walder',        name:'Lord of the Crossing',      icon:'🏰', rarity:'common',    desc:'Place Walder Frey in any position.', cat:'Characters' },
  { id:'ach_gendry',        name:'The Bull',                  icon:'🔨', rarity:'common',    desc:'Place Gendry in any position.', cat:'Characters' },
  { id:'ach_lyanna_mormont_any',name:'Bear Island Knows No King',icon:'🐻',rarity:'uncommon',desc:'Place Lyanna Mormont in any position.', cat:'Characters' },
  { id:'ach_nymeria_sand',  name:'Nymeria of the Spear',      icon:'☀️', rarity:'uncommon',  desc:'Place Nymeria Sand in any position.', cat:'Characters' },
  { id:'ach_aenys',         name:'Aenys at Court',            icon:'🕊️', rarity:'uncommon',  desc:'Place Aenys I in any position.', cat:'Characters' },
  { id:'ach_daeron1',       name:'The Boy Who Took Dorne',    icon:'🐉', rarity:'common',    desc:'Place Daeron I in any position.', cat:'Characters' },
  { id:'ach_daemon_blackfyre',name:'The Black Dragon',        icon:'🖤', rarity:'rare',      desc:'Place Daemon Blackfyre in any position.', cat:'Characters' },

  // ── NEW CONSORT ACHIEVEMENTS ──────────────────────────────────────────────────
  { id:'ach_cersei_consort', name:'The Lioness Consort',      icon:'🦁', rarity:'uncommon',  desc:'Place Cersei Lannister as Consort in Classic or Empire mode.', cat:'Characters' },
  { id:'ach_margaery_consort',name:'The Rose Consort',        icon:'🌹', rarity:'uncommon',  desc:'Place Margaery Tyrell as Consort.', cat:'Characters' },
  { id:'ach_dany_consort',   name:'Dragon Consort',           icon:'🐉', rarity:'rare',      desc:'Place Daenerys Targaryen as Consort in Classic or Empire mode.', cat:'Characters' },
  { id:'ach_alysanne_consort',name:'The Perfect Consort',     icon:'⚖️', rarity:'rare',      desc:'Place Alysanne Targaryen as Consort — the gold standard.', cat:'Characters' },
  { id:'ach_lyanna_consort', name:'The She-Wolf Consort',     icon:'🐺', rarity:'rare',      desc:'Place Lyanna Stark as Consort.', cat:'Characters' },
  { id:'ach_olenna_consort', name:'Thorns at Court',          icon:'🌹', rarity:'epic',      desc:'Place Olenna Tyrell as Consort — she runs everything anyway.', cat:'Characters' },

  // ── NEW KG / ARMY COMMANDER ───────────────────────────────────────────────────
  { id:'ach_gerold_kgc',    name:'The White Bull Commands',   icon:'🐂', rarity:'rare',      desc:'Place Gerold Hightower as Kingsguard Commander.', cat:'Characters' },
  { id:'ach_arthur_dayne_kgc',name:'Sword of the Morning Commands',icon:'⭐',rarity:'epic',  desc:'Place Arthur Dayne as Kingsguard Commander.', cat:'Characters' },
  { id:'ach_aemon_kg',      name:'The Dragonknight Guards',   icon:'⚔️', rarity:'rare',      desc:'Place Aemon the Dragonknight as Kingsguard Commander.', cat:'Characters' },

  // ── NEW HOUSE COMBO ACHIEVEMENTS ─────────────────────────────────────────────
  { id:'ach_baratheon_trio', name:'Three Stags',              icon:'🦌', rarity:'epic',      desc:'Place Robert, Stannis, AND Renly Baratheon on the same board.', cat:'Epic' },
  { id:'ach_stark_four',    name:'Winter is Here',            icon:'🐺', rarity:'epic',      desc:'Place 4 or more Stark characters on the same board.', cat:'Epic' },
  { id:'ach_targ_five',     name:'House of the Dragon',       icon:'🔥', rarity:'epic',      desc:'Place 5 or more Targaryen characters on the same Empire board.', cat:'Epic' },
  { id:'ach_lann_four',     name:'Lions Everywhere',          icon:'🦁', rarity:'epic',      desc:'Place 4 or more Lannister characters on the same board.', cat:'Epic' },
  { id:'ach_tyrell_trio',   name:'The Garden Court',          icon:'🌹', rarity:'rare',      desc:'Place Olenna, Loras, AND Margaery Tyrell on the same board.', cat:'Rare' },
  { id:'ach_dance_trio',    name:'The Blacks and Greens',     icon:'🐉', rarity:'epic',      desc:'Place Rhaenyra, Daemon, AND Aegon II all on the same board.', cat:'Epic' },
  { id:'ach_roberts_rebellion',name:'The Rebels United',      icon:'🦌', rarity:'rare',      desc:'Place Robert Baratheon AND Ned Stark on the same board — old friends reunited.', cat:'Rare' },
  { id:'ach_rhaegar_lyanna', name:'The Prince and the Wolf',  icon:'🎵', rarity:'epic',      desc:'Place Rhaegar Targaryen AND Lyanna Stark on the same board.', cat:'Epic' },
  { id:'ach_ned_cat',       name:'Lord and Lady of Winterfell',icon:'❄️',rarity:'uncommon',  desc:'Place both Eddard Stark AND Catelyn Tully-Stark on the same board.', cat:'Uncommon' },
  { id:'ach_stannis_davos', name:'Dragonstone Partners',      icon:'⚓', rarity:'uncommon',  desc:'Place both Stannis Baratheon AND Davos Seaworth on the same board.', cat:'Uncommon' },
  { id:'ach_cersei_jaime',  name:'The Twin Lions',            icon:'🦁', rarity:'rare',      desc:'Place both Cersei AND Jaime Lannister on the same board.', cat:'Rare' },
  { id:'ach_oberyn_doran',  name:'Dornish Brothers',          icon:'☀️', rarity:'rare',      desc:'Place both Oberyn AND Doran Martell on the same board.', cat:'Rare' },
  { id:'ach_jon_dany',      name:'Ice and Fire United',       icon:'❄️', rarity:'epic',      desc:'Place any Jon Snow AND Daenerys on the same Classic board.', cat:'Epic' },
  { id:'ach_robb_jon',      name:'Brothers of the North',     icon:'🐺', rarity:'uncommon',  desc:'Place Robb Stark AND any Jon Snow on the same board.', cat:'Uncommon' },
  { id:'ach_aegon1_visenya',name:'The Conquerors Bond',       icon:'🐉', rarity:'rare',      desc:'Place both Aegon the Conqueror AND Visenya Targaryen on the same board.', cat:'Rare' },

  // ── NEW HOUSE PACKS CLASSIC ───────────────────────────────────────────────────
  { id:'ach_all_velaryon',  name:'The Sea Lords Court',       icon:'🌊', rarity:'rare',      desc:'Fill all 5 Classic slots with Velaryon characters exclusively.', cat:'Rare' },
  { id:'ach_all_blackfyre', name:'The Black Dragon Court',    icon:'🖤', rarity:'epic',      desc:'Fill all 5 Classic slots with Blackfyre characters exclusively.', cat:'Epic' },
  { id:'ach_all_hightower', name:'Hightower Dominance',       icon:'🕯️', rarity:'rare',      desc:'Fill all 5 Classic slots with Hightower characters exclusively.', cat:'Rare' },
  { id:'ach_all_frey',      name:'Many and More',             icon:'🏰', rarity:'legendary', desc:'Fill all 5 Classic slots with Frey characters exclusively — quite the achievement.', cat:'Legendary' },
  { id:'ach_all_essos',     name:'The Nine Free Cities',      icon:'⛵', rarity:'epic',      desc:'Fill all 5 Classic slots with Essos characters exclusively.', cat:'Epic' },
  { id:'ach_all_bannermen', name:'Lords of the Land',         icon:'🏹', rarity:'rare',      desc:'Fill all 5 Classic slots with Bannermen characters exclusively.', cat:'Rare' },
  { id:'ach_pack_baratheon',name:'The Fury Pack',             icon:'🦌', rarity:'uncommon',  desc:'Draft 3 or more Baratheon characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_pack_martell',  name:'The Dornish Court',         icon:'☀️', rarity:'uncommon',  desc:'Draft 3 or more Martell characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_pack_tyrell',   name:'Growing Court',             icon:'🌹', rarity:'uncommon',  desc:'Draft 3 or more Tyrell characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_pack_arryn',    name:'Knights of the Vale',       icon:'🦅', rarity:'uncommon',  desc:'Draft 3 or more Arryn characters in a single Classic game.', cat:'Uncommon' },
  { id:'ach_pack_baratheon_e',name:'Storm of Baratheons',     icon:'🦌', rarity:'rare',      desc:'Place 5+ Baratheon characters on the same Empire board.', cat:'Rare' },
  { id:'ach_pack_martell_e',name:'Dornish Empire',            icon:'☀️', rarity:'rare',      desc:'Place 5+ Martell characters on the same Empire board.', cat:'Rare' },

  // ── NEW UNIQUE POSITIONING ────────────────────────────────────────────────────
  { id:'ach_5_tens',        name:'Flawless Court',            icon:'💯', rarity:'epic',      desc:'Have 5 or more positions each score 10 on the same Empire board.', cat:'Epic' },
  { id:'ach_ruler_hand_heir_10',name:'The Golden Three',      icon:'🏆', rarity:'epic',      desc:'Have Ruler, Hand, AND Heir all score 10 on the same board.', cat:'Epic' },
  { id:'ach_ally_bank_10',  name:'Friends and Gold',          icon:'💰', rarity:'rare',      desc:'Have both the Ally AND Bank slots score 10 on the same Empire board.', cat:'Rare' },
  { id:'ach_no_starks_c',   name:'The Lion Rules the South',  icon:'🦁', rarity:'uncommon',  desc:'Complete Classic mode without drafting any Stark characters.', cat:'Uncommon' },
  { id:'ach_no_targs_c',    name:'The Realm Without Dragons', icon:'🐺', rarity:'uncommon',  desc:'Complete Classic mode without drafting any Targaryen characters.', cat:'Uncommon' },
  { id:'ach_no_lanns',      name:'Not a Lannister in Sight',  icon:'🌹', rarity:'uncommon',  desc:'Complete Empire mode without drafting any Lannister characters.', cat:'Uncommon' },
  { id:'ach_all_9plus',     name:'Near-Perfect Court',        icon:'✨', rarity:'legendary', desc:'Every filled Classic position scores 9 or higher.', cat:'Legendary' },
  { id:'ach_ruler_kgc_10',  name:'Protected Throne',          icon:'🛡️', rarity:'rare',      desc:'Have both the Ruler AND Kingsguard Commander slots score 10 on the same board.', cat:'Rare' },
  { id:'ach_five_houses',   name:'Five Great Houses',         icon:'🏰', rarity:'rare',      desc:'Fill Classic with exactly 5 characters each from a different Great House.', cat:'Rare' },
  { id:'ach_no_bar',        name:'No Baratheons Needed',      icon:'🦌', rarity:'uncommon',  desc:'Reach Conqueror tier in Classic without any Baratheon characters.', cat:'Uncommon' },

  // ── NEW CHAOS LADDER ─────────────────────────────────────────────────────────
  { id:'ach_chaos_5',       name:'Taking the First Steps',    icon:'🪜', rarity:'common',    desc:'Complete Rung 5 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_15',      name:'Chaos Climber',             icon:'⛓️', rarity:'uncommon',  desc:'Complete Rung 15 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_20',      name:'High on Chaos',             icon:'🔥', rarity:'uncommon',  desc:'Complete Rung 20 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_30',      name:'Chaos Veteran',             icon:'⚔️', rarity:'rare',      desc:'Complete Rung 30 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_40',      name:'Ladder Monarch',            icon:'🌋', rarity:'epic',      desc:'Complete Rung 40 of the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_arryn',   name:'Valor of the Vale',         icon:'🦅', rarity:'uncommon',  desc:'Defeat an Arryn lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_greyjoy', name:'Salt and Iron',             icon:'🦑', rarity:'uncommon',  desc:'Defeat a Greyjoy lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_hightower',name:'The Lighthouse Falls',     icon:'🕯️', rarity:'uncommon',  desc:'Defeat a Hightower lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_tully',   name:'Tully Routed',              icon:'🐟', rarity:'uncommon',  desc:'Defeat a Tully lineup on the Chaos Ladder.', cat:'Chaos Ladder' },
  { id:'ach_chaos_perfect', name:'Chaos Perfection',          icon:'👑', rarity:'legendary', desc:'Score 100 or more points on any single Chaos Ladder rung.', cat:'Chaos Ladder' },

  // ── NEW DYNASTY ACHIEVEMENTS ──────────────────────────────────────────────────
  { id:'ach_dynasty_200',       name:'Dynasty Humble Beginnings',  icon:'🏚️', rarity:'common',   desc:'Score 200 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_210',       name:'Gaining Ground',             icon:'🏰', rarity:'common',    desc:'Score 210 or more in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_council_20',name:'Council in Training',        icon:'📜', rarity:'common',    desc:'Score 20+ in the Council group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_house_60',  name:'A House Grown',              icon:'🏰', rarity:'common',    desc:'Score 60+ in the House group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_army_80',   name:'An Army Raised',             icon:'⚔️', rarity:'common',    desc:'Score 80+ in the Army group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_army_120',  name:'The Realm Defended',         icon:'⚔️', rarity:'uncommon',  desc:'Score 120+ in the Army group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_army_170',  name:'Unconquered Host',           icon:'⚔️', rarity:'epic',      desc:'Score 170+ in the Army group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_kingdom_30',name:'Kingdom Beginnings',         icon:'🗺️', rarity:'common',   desc:'Score 30+ in the Kingdom group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_kingdom_50',name:'Kingdom Flourishing',        icon:'🗺️', rarity:'uncommon', desc:'Score 50+ in the Kingdom group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_kingdom_85',name:'Kingdom Supreme',            icon:'🗺️', rarity:'legendary',desc:'Score 85+ in the Kingdom group in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_ruler_10',  name:'Born to the Throne',         icon:'♚', rarity:'epic',      desc:'Have your Ruler score exactly 10 in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_robb_ruler',name:'The King Who Knelt',         icon:'🐺', rarity:'rare',      desc:'Place Robb Stark as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_bran_ruler',name:'The Broken Rules',           icon:'🌑', rarity:'rare',      desc:'Place Bran Stark as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_rhaegar_ruler',name:'The Prophecy Fulfilled',  icon:'🎵', rarity:'rare',      desc:'Place Rhaegar Targaryen as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_jaime_ruler',name:'The White Cloak Rules',     icon:'🗡️', rarity:'epic',      desc:'Place Jaime Lannister as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_daemon_ruler',name:'The Bronze Fury',          icon:'🗡️', rarity:'rare',      desc:'Place Daemon Targaryen as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_barr_ruler',name:'The Bold Reigns',            icon:'⚔️', rarity:'epic',      desc:'Place Barristan Selmy as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_stannis_ruler',name:'The Just King Rules',     icon:'🔵', rarity:'uncommon',  desc:'Place Stannis Baratheon as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_rhaenyra_ruler',name:'Queen of the Realm',     icon:'🐉', rarity:'uncommon',  desc:'Place Rhaenyra Targaryen as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_cersei_ruler',name:'The Lioness on the Throne',icon:'🦁', rarity:'uncommon',  desc:'Place Cersei Lannister as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_olenna_hand',name:'The Thorn Advises the Ages',icon:'🌹', rarity:'epic',      desc:'Place Olenna Tyrell as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_robb_hand', name:'The Wolf at the Ear',        icon:'🐺', rarity:'rare',      desc:'Place Robb Stark as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_rhaegar_hand',name:'The Dragon Prince Counsels',icon:'🎵',rarity:'rare',      desc:'Place Rhaegar Targaryen as Hand in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_jaime_kg',  name:'The Kingslayer Guards',      icon:'🗡️', rarity:'rare',      desc:'Place Jaime Lannister in a Kingsguard slot in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_sandor_kg', name:'The Hound at Court',         icon:'🐕', rarity:'uncommon',  desc:'Place Sandor Clegane in a Kingsguard slot in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_jon_ruler', name:'The Reluctant King',         icon:'❄️', rarity:'rare',      desc:'Place any Jon Snow as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_3_10s',     name:'Dynasty Peaks',              icon:'⛰️', rarity:'rare',      desc:'Have 3 or more positions each score 10 in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_targ_consort',name:'The Blood Pact',           icon:'🔥', rarity:'rare',      desc:'Place a Targaryen character as Consort in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_bar_ruler', name:'The Stag Reigns',            icon:'🦌', rarity:'uncommon',  desc:'Place a Baratheon as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_tull_ruler',name:'The Trout Ascends',          icon:'🐟', rarity:'rare',      desc:'Place a Tully character as Ruler in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_full_board_kg',name:'Kingsguard Complete',     icon:'🛡️', rarity:'rare',      desc:'Fill the Kingsguard Commander AND all 6 Kingsguard slots in Dynasty Mode.', cat:'Dynasty' },
  { id:'ach_dynasty_no_nw',     name:'No Black Cloaks Here',       icon:'🔥', rarity:'uncommon',  desc:"Complete Dynasty Mode without any Night's Watch characters on the board.", cat:'Dynasty' },

  // ── COLLECTOR MODE ────────────────────────────────────────────────────────────

  // Games Played
  { id:'ach_coll_first_game',    name:'The First Draw',            icon:'🃏', rarity:'common',    desc:'Complete your first Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_5_games',       name:'Getting the Feel',          icon:'🃏', rarity:'common',    desc:'Play 5 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_10_games',      name:'Deck Regular',              icon:'🃏', rarity:'common',    desc:'Play 10 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_25_games',      name:'Card Enthusiast',           icon:'🃏', rarity:'uncommon',  desc:'Play 25 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_50_games',      name:'Dedicated Collector',       icon:'🃏', rarity:'rare',      desc:'Play 50 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_100_games',     name:'Master of the Deck',        icon:'🃏', rarity:'epic',      desc:'Play 100 Collector Mode games.', cat:'Collector' },

  // Wins
  { id:'ach_coll_first_win',     name:'First Victory',             icon:'⚔️', rarity:'common',    desc:'Win your first Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_5_wins',        name:'Budding Champion',          icon:'⚔️', rarity:'uncommon',  desc:'Win 5 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_10_wins',       name:'Seasoned Champion',         icon:'⚔️', rarity:'rare',      desc:'Win 10 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_25_wins',       name:'Deck Lord',                 icon:'⚔️', rarity:'epic',      desc:'Win 25 Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_50_wins',       name:'Uncrowned Champion',        icon:'⚔️', rarity:'legendary', desc:'Win 50 Collector Mode games.', cat:'Collector' },

  // Score Milestones
  { id:'ach_coll_score_50',      name:'Solid Draw',                icon:'📊', rarity:'common',    desc:'Score 50 or more in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_score_60',      name:'Commanding Position',       icon:'📊', rarity:'uncommon',  desc:'Score 60 or more in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_score_70',      name:'Formidable Deck',           icon:'📊', rarity:'uncommon',  desc:'Score 70 or more in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_score_80',      name:'The Grand Court',           icon:'📊', rarity:'rare',      desc:'Score 80 or more in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_score_90',      name:'Masterful Draw',            icon:'📊', rarity:'epic',      desc:'Score 90 or more in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_perfect',       name:'A Perfect Hand',            icon:'✨', rarity:'legendary', desc:'Score a perfect 100 in Collector Mode.', cat:'Collector' },

  // Win Margins
  { id:'ach_coll_win_5',         name:'A Step Ahead',              icon:'📈', rarity:'common',    desc:'Win a Collector Mode game by 5 or more points.', cat:'Collector' },
  { id:'ach_coll_win_10',        name:'Pulling Away',              icon:'📈', rarity:'uncommon',  desc:'Win a Collector Mode game by 10 or more points.', cat:'Collector' },
  { id:'ach_coll_win_20',        name:'Dominant Victory',          icon:'📈', rarity:'rare',      desc:'Win a Collector Mode game by 20 or more points.', cat:'Collector' },
  { id:'ach_coll_win_30',        name:'Total Supremacy',           icon:'📈', rarity:'epic',      desc:'Win a Collector Mode game by 30 or more points.', cat:'Collector' },

  // Win Streaks
  { id:'ach_coll_streak_3',      name:'On a Roll',                 icon:'🔥', rarity:'rare',      desc:'Win 3 Collector Mode games in a row.', cat:'Collector' },
  { id:'ach_coll_streak_5',      name:'Unstoppable',               icon:'🔥', rarity:'epic',      desc:'Win 5 Collector Mode games in a row.', cat:'Collector' },
  { id:'ach_coll_streak_10',     name:'The Undefeated Deck',       icon:'🔥', rarity:'legendary', desc:'Win 10 Collector Mode games in a row.', cat:'Collector' },

  // Wager
  { id:'ach_coll_wager_25',      name:'A Calculated Bet',          icon:'🎲', rarity:'uncommon',  desc:'Win a Collector Mode game with a wager of 25 or more gold.', cat:'Collector' },
  { id:'ach_coll_wager_50',      name:'High Stakes',               icon:'🎲', rarity:'rare',      desc:'Win a Collector Mode game with a wager of 50 or more gold.', cat:'Collector' },
  { id:'ach_coll_wager_100',     name:'All In',                    icon:'🎲', rarity:'epic',      desc:'Win a Collector Mode game with the maximum 100-gold wager.', cat:'Collector' },

  // Gold
  { id:'ach_coll_gold_100',      name:'Pocket Change',             icon:'💰', rarity:'common',    desc:'Hold 100 gold in Collector Mode.', cat:'Collector' },
  { id:'ach_coll_gold_250',      name:'Growing Coffers',           icon:'💰', rarity:'common',    desc:'Hold 250 gold in Collector Mode.', cat:'Collector' },
  { id:'ach_coll_gold_500',      name:'Half a Treasury',           icon:'💰', rarity:'uncommon',  desc:'Hold 500 gold in Collector Mode.', cat:'Collector' },
  { id:'ach_coll_gold_1000',     name:"A Lord's Ransom",           icon:'💰', rarity:'rare',      desc:'Hold 1,000 gold in Collector Mode.', cat:'Collector' },
  { id:'ach_coll_gold_2500',     name:"The King's Vault",          icon:'💰', rarity:'epic',      desc:'Hold 2,500 gold in Collector Mode.', cat:'Collector' },
  { id:'ach_coll_gold_5000',     name:"The Iron Bank's Equal",     icon:'💰', rarity:'legendary', desc:'Hold 5,000 gold in Collector Mode.', cat:'Collector' },

  // Deck Size
  { id:'ach_coll_deck_30',       name:'First Expansion',           icon:'📦', rarity:'common',    desc:'Own 30 Collector cards.', cat:'Collector' },
  { id:'ach_coll_deck_50',       name:'A Respectable Deck',        icon:'📦', rarity:'common',    desc:'Own 50 Collector cards.', cat:'Collector' },
  { id:'ach_coll_deck_100',      name:'A True Collection',         icon:'📦', rarity:'uncommon',  desc:'Own 100 Collector cards.', cat:'Collector' },
  { id:'ach_coll_deck_200',      name:'Vast Archives',             icon:'📦', rarity:'rare',      desc:'Own 200 Collector cards.', cat:'Collector' },
  { id:'ach_coll_deck_500',      name:'The Grand Library',         icon:'📦', rarity:'epic',      desc:'Own 500 Collector cards.', cat:'Collector' },
  { id:'ach_coll_deck_1000',     name:'The Living History',        icon:'📦', rarity:'legendary', desc:'Own 1,000 Collector cards.', cat:'Collector' },

  // Card Tiers — First of Each
  { id:'ach_coll_first_rare',    name:'The First Rarity',          icon:'🟠', rarity:'common',    desc:'Own your first Rare Collector card.', cat:'Collector' },
  { id:'ach_coll_first_hero',    name:'A Heroic Addition',         icon:'🟣', rarity:'uncommon',  desc:'Own your first Hero Collector card.', cat:'Collector' },
  { id:'ach_coll_first_legend',  name:'Touched by Legend',         icon:'🖤', rarity:'rare',      desc:'Own your first Legendary Collector card.', cat:'Collector' },
  { id:'ach_coll_first_mythic',  name:'The Myth Made Real',        icon:'🔴', rarity:'epic',      desc:'Own your first Mythic Collector card.', cat:'Collector' },

  // Card Tiers — Multiples
  { id:'ach_coll_5_uncommon',    name:'Uncommon Holdings',         icon:'🔵', rarity:'common',    desc:'Own 5 Uncommon Collector cards.', cat:'Collector' },
  { id:'ach_coll_10_uncommon',   name:'Noble Commonplace',         icon:'🔵', rarity:'uncommon',  desc:'Own 10 Uncommon Collector cards.', cat:'Collector' },
  { id:'ach_coll_25_uncommon',   name:'Uncommon Arsenal',          icon:'🔵', rarity:'uncommon',  desc:'Own 25 Uncommon Collector cards.', cat:'Collector' },
  { id:'ach_coll_5_rare',        name:'Rare Collector',            icon:'🟠', rarity:'uncommon',  desc:'Own 5 Rare Collector cards.', cat:'Collector' },
  { id:'ach_coll_10_rare',       name:'Rare Hoarder',              icon:'🟠', rarity:'rare',      desc:'Own 10 Rare Collector cards.', cat:'Collector' },
  { id:'ach_coll_25_rare',       name:'Rare Library',              icon:'🟠', rarity:'rare',      desc:'Own 25 Rare Collector cards.', cat:'Collector' },
  { id:'ach_coll_5_hero',        name:'Heroes Among Heroes',       icon:'🟣', rarity:'rare',      desc:'Own 5 Hero Collector cards.', cat:'Collector' },
  { id:'ach_coll_10_hero',       name:'The Heroic Archives',       icon:'🟣', rarity:'epic',      desc:'Own 10 Hero Collector cards.', cat:'Collector' },
  { id:'ach_coll_3_legend',      name:'Legendary Holdings',        icon:'🖤', rarity:'epic',      desc:'Own 3 Legendary Collector cards.', cat:'Collector' },
  { id:'ach_coll_5_legend',      name:'Legends Collected',         icon:'🖤', rarity:'legendary', desc:'Own 5 Legendary Collector cards.', cat:'Collector' },
  { id:'ach_coll_3_mythic',      name:'The Mythic Few',            icon:'🔴', rarity:'legendary', desc:'Own 3 Mythic Collector cards.', cat:'Collector' },

  // Deck Average Tier
  { id:'ach_coll_tier_uncommon', name:'Rising Deck',               icon:'⬆️', rarity:'uncommon',  desc:'Reach an average deck tier of Uncommon.', cat:'Collector' },
  { id:'ach_coll_tier_rare',     name:'Distinguished Deck',        icon:'⬆️', rarity:'rare',      desc:'Reach an average deck tier of Rare.', cat:'Collector' },
  { id:'ach_coll_tier_hero',     name:'Heroic Deck',               icon:'⬆️', rarity:'epic',      desc:'Reach an average deck tier of Hero.', cat:'Collector' },
  { id:'ach_coll_tier_legend',   name:'Legendary Deck',            icon:'⬆️', rarity:'legendary', desc:'Reach an average deck tier of Legendary.', cat:'Collector' },

  // Cumulative Score
  { id:'ach_coll_total_500',     name:"Chronicler's Record",       icon:'📜', rarity:'uncommon',  desc:'Score 500 total points across all Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_total_1000',    name:'The Long Record',           icon:'📜', rarity:'rare',      desc:'Score 1,000 total points across all Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_total_2500',    name:'Epic History',              icon:'📜', rarity:'epic',      desc:'Score 2,500 total points across all Collector Mode games.', cat:'Collector' },
  { id:'ach_coll_total_5000',    name:'The Eternal Chronicle',     icon:'📜', rarity:'legendary', desc:'Score 5,000 total points across all Collector Mode games.', cat:'Collector' },

  // Board Performance
  { id:'ach_coll_full_board',    name:'Court Complete',            icon:'✅', rarity:'common',    desc:'Fill all 10 positions in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_play_hero',     name:'A Hero Takes the Field',    icon:'🟣', rarity:'common',    desc:'Play a Hero card in a Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_play_legend',   name:'Legend in Play',            icon:'🖤', rarity:'uncommon',  desc:'Play a Legendary card in a Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_play_mythic',   name:'Myth Unleashed',            icon:'🔴', rarity:'rare',      desc:'Play a Mythic card in a Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_win_mythic',    name:'Victory of Legends',        icon:'🔴', rarity:'epic',      desc:'Win a Collector Mode game while playing at least one Mythic card.', cat:'Collector' },
  { id:'ach_coll_10_pos',        name:'Masterful Placement',       icon:'💯', rarity:'uncommon',  desc:'Score a perfect 10 in any single position in Collector Mode.', cat:'Collector' },
  { id:'ach_coll_5_tens',        name:'The Flawless Court',        icon:'💯', rarity:'legendary', desc:'Score 10 in 5 or more positions in a single Collector Mode game.', cat:'Collector' },
  { id:'ach_coll_sweep',         name:'Commanding the Realm',      icon:'👑', rarity:'rare',      desc:'Fill all 10 positions with cards each scoring 7 or higher in one game.', cat:'Collector' },
  { id:'ach_coll_no_reroll',     name:'First Draw, Final Answer',  icon:'🎯', rarity:'uncommon',  desc:'Win a Collector Mode game without using any rerolls.', cat:'Collector' },
  { id:'ach_coll_starter_win',   name:'Humble Beginnings',         icon:'🌱', rarity:'rare',      desc:'Win a Collector Mode game using only Starter and Uncommon cards.', cat:'Collector' },
  { id:'ach_coll_all_same_char', name:'Many Faces of One',         icon:'🎭', rarity:'epic',      desc:'Fill 3 or more positions with different variants of the same character.', cat:'Collector' },
];

// ─── Dynamic achievement generation ──────────────────────────────────────────
(function() {
  if (!window.CHARACTERS) return;
  const coveredIds = new Set(ACHIEVEMENTS.map(a => a.id));
  const coveredDescs = new Set(ACHIEVEMENTS.map(a => a.desc));

  function rulerName(c) {
    const R = c.scores.R, n = c.name.split(' ')[0];
    if (R >= 9) return n + ' the Great';
    if (R >= 7) return 'The ' + (c.name.split(' ').pop() || n) + ' Throne';
    if (R >= 5) return 'A Crown for ' + n;
    return n + ' Reigns Unexpectedly';
  }
  function rulerRarity(c) {
    const R = c.scores.R;
    if (R <= 2) return 'legendary'; if (R <= 4) return 'epic';
    if (R <= 6) return 'rare'; if (R <= 8) return 'uncommon'; return 'common';
  }
  function handName(c) {
    const H = c.scores.H, n = c.name.split(' ')[0];
    if (H >= 9) return n + '\'s Counsel';
    if (H >= 7) return 'The ' + n + ' Concession';
    return n + ' Advises the King';
  }
  function handRarity(c) {
    const H = c.scores.H;
    if (H <= 2) return 'legendary'; if (H <= 4) return 'epic';
    if (H <= 6) return 'rare'; if (H <= 8) return 'uncommon'; return 'common';
  }
  function heirName(c) {
    const Hr = c.scores.Hr, n = c.name.split(' ')[0];
    if (Hr >= 9) return n + '\'s Claim';
    if (Hr >= 7) return 'The ' + (c.name.split(' ').pop() || n) + ' Succession';
    if (Hr >= 4) return 'Unlikely Heir: ' + n;
    return n + ' Inherits Nothing';
  }
  function heirRarity(c) {
    const Hr = c.scores.Hr;
    if (Hr <= 2) return 'legendary'; if (Hr <= 4) return 'epic';
    if (Hr <= 6) return 'rare'; if (Hr <= 8) return 'uncommon'; return 'common';
  }
  function anyName(c) {
    const n = c.name.split(' ')[0];
    const house = (c.houses || [])[0] || '';
    if (house) return n + ' of ' + house;
    return n + ' Drafted';
  }
  function anyRarity(c) {
    const avg = (c.scores.R+c.scores.H+c.scores.Hr+c.scores.C+c.scores.KG)/5;
    if (avg >= 8) return 'common'; if (avg >= 6) return 'uncommon';
    if (avg >= 4) return 'rare'; return 'epic';
  }

  // Push only if neither the id nor the DESCRIPTION already exists. Deduping by
  // description means characters that share a display name (e.g. the three Jon
  // Snow variants) collapse to ONE achievement instead of identical duplicates.
  // The unlock checker matches by name so any variant still earns it.
  function pushIfNew(id, desc, cat, fields) {
    if (coveredIds.has(id) || coveredDescs.has(desc)) return;
    window.ACHIEVEMENTS.push({ id, desc, cat, ...fields });
    coveredIds.add(id); coveredDescs.add(desc);
  }

  for (const c of window.CHARACTERS) {
    const n0 = c.name.split(' ')[0];
    pushIfNew('ach_dyn_ruler_' + c.id, 'Place ' + c.name + ' as Ruler.', 'Rulers',
      { name:rulerName(c), icon:c.gender==='F'?'👸':'♚', rarity:rulerRarity(c) });
    pushIfNew('ach_dyn_hand_' + c.id, 'Place ' + c.name + ' as Hand of the King.', 'Hands',
      { name:handName(c), icon:'✋', rarity:handRarity(c) });
    pushIfNew('ach_dyn_heir_' + c.id, 'Place ' + c.name + ' as Heir.', 'Heirs',
      { name:heirName(c), icon:'🌱', rarity:heirRarity(c) });
    pushIfNew('ach_dyn_any_' + c.id, 'Draft ' + c.name + ' onto any board.', 'Characters',
      { name:anyName(c), icon:c.gender==='F'?'♀️':'♂️', rarity:anyRarity(c) });

    // Dynasty-specific position achievements (auto-awarded, excluded from main display)
    if (c.gender === 'F') {
      const avgScore = (c.scores.R + c.scores.H + c.scores.Hr + c.scores.C + c.scores.KG) / 5;
      const rarity = avgScore >= 8 ? 'common' : avgScore >= 6 ? 'uncommon' : avgScore >= 4 ? 'rare' : 'epic';
      pushIfNew('ach_dyn_consort_' + c.id, 'Place ' + c.name + ' as Consort in Dynasty Mode.', 'Dynasty Consorts',
        { name: n0 + ' Takes the Consort Seat', icon:'💍', rarity });
    }
    if (!c.isDragon) {
      const gm = c.ds?.GM ?? (Math.max((c.scores.SC||1), (c.scores.H||1)) * 0.85);
      const gmRar = gm >= 8 ? 'common' : gm >= 6 ? 'uncommon' : gm >= 4 ? 'rare' : 'epic';
      pushIfNew('ach_dyn_gm_' + c.id, 'Place ' + c.name + ' as Grand Maester in Dynasty Mode.', 'Dynasty Council',
        { name: n0 + ' Advises the Realm', icon:'📜', rarity:gmRar });
      const ac = c.scores.AC || 1;
      const acRar = ac >= 8 ? 'common' : ac >= 6 ? 'uncommon' : ac >= 4 ? 'rare' : 'epic';
      pushIfNew('ach_dyn_warden_' + c.id, 'Place ' + c.name + ' as a Warden in Dynasty Mode.', 'Dynasty Army',
        { name: n0 + ' Wardens the Border', icon:'🗺️', rarity:acRar });
      pushIfNew('ach_dyn_army_' + c.id, 'Place ' + c.name + ' as Army Commander or KG Commander in Dynasty Mode.', 'Dynasty Army',
        { name: n0 + ' Commands the Army', icon:'⚔️', rarity:acRar });
    }
  }
})();