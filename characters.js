// All ASOIAF character data â€” loaded as a plain script before the Babel React app
const S = (r,h,hr,c,kg,kgc,sc,bank,ally,con) => ({R:r,H:h,Hr:hr,AC:c,KG:kg,KGC:kgc,SC:sc,Bank:bank,Ally:ally,Con:con});
const DS = (hs,gm,moc,mol,mos,mow,sq) => ({Hs:hs,GM:gm,MoC:moc,MoL:mol,MoS:mos,MoW:mow,Sq:sq});

window.CHARACTERS = [
  // â”€â”€ TARGARYEN MALE â”€â”€
  {id:'aegon-i',name:'Aegon I (The Conqueror)',houses:['Targaryen'],gender:'M',birth:-27,age:64,scores:S(9.9,7.5,9.0,10.0,8.5,8.5,8.0,8.5,10.0,7.2),DR:10.0,notes:'Founded dynasty; conqueror and solid ruler.'},
  {id:'aenys-i',name:'Aenys I',houses:['Targaryen'],gender:'M',birth:7,age:35,scores:S(3.8,3.0,4.2,3.2,3.0,2.8,3.0,5.8,3.2,3.0),DR:4.2,notes:'Weak; couldn\'t control Maegor.'},
  {id:'maegor-i',name:'Maegor I (The Cruel)',houses:['Targaryen'],gender:'M',birth:12,age:36,scores:S(4.2,2.0,4.0,8.5,9.5,8.0,2.2,7.0,7.2,2.0),DR:8.5,notes:'Brutal tyrant; devastating personal fighter.'},
  {id:'jaehaerys-i',name:'Jaehaerys I (The Conciliator)',houses:['Targaryen'],gender:'M',birth:34,age:69,scores:S(10.0,9.0,10.0,7.2,5.0,5.0,10.0,9.2,10.0,10.0),DR:6.5,notes:'Greatest ruler in Westerosi history.'},
  {id:'viserys-i',name:'Viserys I',houses:['Targaryen'],gender:'M',birth:77,age:52,scores:S(5.2,4.0,5.0,4.0,3.2,3.0,4.2,7.8,5.0,4.2),DR:4.2,notes:'Indecisive; caused the Dance.'},
  {id:'daemon-targaryen',name:'Daemon Targaryen (The Rogue Prince)',houses:['Targaryen'],gender:'M',birth:81,age:49,scores:S(7.2,5.2,8.2,9.5,9.8,9.8,5.0,7.0,10.0,6.2),DR:10.0,notes:'Greatest swordsman of his age (Dark Sister).'},
  {id:'aegon-ii',name:'Aegon II',houses:['Targaryen'],gender:'M',birth:107,age:24,scores:S(4.0,3.2,4.2,6.2,4.5,4.2,3.2,7.0,5.2,3.2),DR:6.2,notes:'Legitimate claimant; poor ruler; hip broken in dragon crash.'},
  {id:'aemond',name:'Aemond Targaryen (One-Eye)',houses:['Targaryen'],gender:'M',birth:110,age:20,scores:S(6.2,4.2,7.2,9.2,9.5,9.0,4.2,6.0,8.2,5.2),DR:10.0,notes:'Military genius; ruthless; elite fighter.'},
  {id:'aegon-iii',name:'Aegon III (The Dragonbane)',houses:['Targaryen'],gender:'M',birth:120,age:37,scores:S(5.8,5.0,5.2,5.2,3.2,3.0,5.0,7.2,4.2,5.0),DR:2.5,notes:'Melancholy; not a fighter.'},
  {id:'viserys-ii',name:'Viserys II',houses:['Targaryen'],gender:'M',birth:122,age:50,scores:S(9.9,10.0,9.2,7.2,4.0,4.0,10.0,8.2,9.2,9.0),DR:3.5,notes:'Equal to Jaehaerys; greatest Hand in history.'},
  {id:'daeron-i',name:'Daeron I (The Young Dragon)',houses:['Targaryen'],gender:'M',birth:153,age:18,scores:S(7.2,5.0,7.0,9.2,8.2,8.2,5.0,7.0,8.2,6.2),DR:7.2,notes:'Brilliant conqueror; couldn\'t hold Dorne.'},
  {id:'baelor-i',name:'Baelor I (The Blessed)',houses:['Targaryen'],gender:'M',birth:144,age:27,scores:S(4.0,3.2,3.2,2.0,2.0,2.0,3.2,6.0,2.2,3.2),DR:2.0,notes:'Pious to madness; no martial ability.'},
  {id:'aegon-iv',name:'Aegon IV (The Unworthy)',houses:['Targaryen'],gender:'M',birth:135,age:49,scores:S(2.2,3.2,2.2,4.0,3.2,3.0,3.2,8.0,4.2,2.0),DR:2.2,notes:'Worst Targaryen king.'},
  {id:'daeron-ii',name:'Daeron II (The Good)',houses:['Targaryen'],gender:'M',birth:153,age:56,scores:S(9.2,8.0,9.0,6.2,4.2,5.0,8.2,8.0,9.0,8.0),DR:3.5,notes:'Reunified Westeros; excellent administrator.'},
  {id:'baelor-breakspear',name:'Baelor Breakspear',houses:['Targaryen'],gender:'M',birth:170,age:41,scores:S(9.5,9.2,10.0,9.2,9.5,9.2,8.2,7.2,10.0,9.2),DR:7.5,notes:'Heart of chivalry, soul of wisdom.'},
  {id:'valarr',name:'Valarr Targaryen',houses:['Targaryen'],gender:'M',birth:192,age:18,scores:S(6.2,5.2,7.2,6.2,5.2,5.0,5.2,6.2,6.2,6.2),DR:5.5,notes:'Died in Great Spring Sickness.'},
  {id:'matarys',name:'Matarys Targaryen',houses:['Targaryen'],gender:'M',birth:194,age:16,scores:S(4.2,4.0,5.2,4.2,5.0,4.2,4.0,5.0,4.2,4.2),DR:4.0,notes:'Died in Great Spring Sickness.'},
  {id:'aerys-i',name:'Aerys I',houses:['Targaryen'],gender:'M',birth:175,age:58,scores:S(4.2,4.2,5.2,3.2,2.2,2.2,5.2,6.0,3.2,3.2),DR:2.0,notes:'Scholar-king; governed through Bloodraven.'},
  {id:'rhaegel',name:'Rhaegel Targaryen',houses:['Targaryen'],gender:'M',birth:177,age:38,scores:S(2.0,2.0,2.0,2.0,2.0,2.0,2.0,5.0,2.0,2.0),DR:1.5,notes:'Died mad.'},
  {id:'aerion',name:'Aerion Targaryen (Brightflame)',houses:['Targaryen'],gender:'M',birth:189,age:31,scores:S(3.2,3.2,4.2,6.5,8.5,6.5,3.2,5.2,5.0,2.0),DR:5.2,notes:'Cruel; skilled personal fighter; drank wildfire.'},
  {id:'maekar-i',name:'Maekar I',houses:['Targaryen'],gender:'M',birth:175,age:57,scores:S(7.2,6.2,7.0,8.2,7.5,7.2,6.2,6.2,7.2,6.2),DR:6.5,notes:'Capable ruler; strong warrior.'},
  {id:'daeron-drunken',name:'Daeron the Drunken',houses:['Targaryen'],gender:'M',birth:194,age:31,scores:S(2.0,2.0,2.2,2.0,3.2,2.2,2.0,4.0,2.2,2.2),DR:2.0,notes:'Maekar\'s eldest; died of pox.'},
  {id:'maester-aemon-targ',name:'Aemon Targaryen (Maester Aemon)',houses:['Targaryen'],gender:'M',birth:198,age:102,scores:S(8.0,9.0,9.2,4.2,3.2,2.5,9.2,2.2,7.2,7.0),DR:3.2,notes:'Refused the throne twice; could have been king.'},
  {id:'maester-aemon-nw',name:'Aemon Targaryen',houses:["Night's Watch"],gender:'M',birth:198,age:102,scores:S(1.0,9.0,1.0,4.2,3.2,2.5,9.2,1.0,7.2,1.0),isNW:true,DR:3.2,notes:'Maester at Castle Black 60 years; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'aegon-v',name:'Aegon V (The Unlikely)',houses:['Targaryen'],gender:'M',birth:200,age:59,scores:S(9.2,7.2,9.0,6.2,6.2,5.5,7.2,7.2,8.2,8.0),DR:5.5,notes:'Reformist; beloved; died at Summerhall.'},
  {id:'egg-squire',name:'Egg (Prince Aegon, Squire)',houses:['Targaryen'],gender:'M',birth:200,age:10,scores:S(4.2,2.2,7.2,1.5,2.2,1.5,2.2,2.2,5.2,4.2),DR:5.2,notes:'Young Aegon Targaryen, later Aegon V; served as squire to Ser Duncan the Tall, disguised as a common boy; fiercely loyal and already showing the reformist instincts that would define his kingship.'},
  {id:'duncan-small',name:'Duncan Targaryen (The Small)',houses:['Targaryen'],gender:'M',birth:220,age:39,scores:S(5.2,4.2,5.2,5.2,6.2,4.2,4.2,5.2,4.2,4.2),DR:5.5,notes:'Gave up crown for love.'},
  {id:'jaehaerys-ii',name:'Jaehaerys II',houses:['Targaryen'],gender:'M',birth:236,age:26,scores:S(6.2,5.2,6.2,5.0,3.2,3.2,5.2,6.2,5.2,5.2),DR:4.5,notes:'Short reign; sickly; not a fighter.'},
  {id:'aerys-ii-early',name:'Aerys II (Early Reign)',houses:['Targaryen'],gender:'M',birth:244,age:39,scores:S(7.0,6.2,7.0,5.2,3.2,3.2,7.0,7.0,7.2,6.2),DR:5.0,notes:'Charming and energetic in his early reign; worked well with Tywin Lannister as Hand; realm was prosperous.'},
  {id:'aerys-ii',name:'Aerys II (The Mad King)',houses:['Targaryen'],gender:'M',birth:244,age:39,scores:S(2.0,2.0,3.2,2.0,2.0,2.0,2.0,5.0,1.2,2.2),DR:2.0,notes:'Consumed by paranoia and cruelty; burned lords alive; alienated every ally; directly caused Robert\'s Rebellion.'},
  {id:'rhaegar',name:'Rhaegar Targaryen',houses:['Targaryen'],gender:'M',birth:259,age:24,scores:S(9.2,7.2,10.0,9.2,9.5,9.2,7.2,7.0,10.0,9.2),DR:8.2,notes:'Tournament champion; trained warrior.'},
  {id:'viserys-iii',name:'Viserys III',houses:['Targaryen'],gender:'M',birth:276,age:23,scores:S(2.0,2.0,4.2,2.0,2.0,2.0,2.0,4.0,2.2,2.2),DR:2.5,notes:'Petulant pretender.'},
  {id:'jon-snow-targ',name:'Jon Snow',houses:['Targaryen'],gender:'M',birth:283,age:17,scores:S(8.2,6.2,10.0,9.2,9.5,9.2,6.2,3.2,10.0,8.2),DR:9.2,notes:'Rightful heir to the Iron Throne by blood; son of Rhaegar Targaryen and Lyanna Stark.'},
  {id:'jon-snow-stark',name:'Jon Snow',houses:['Stark'],gender:'M',birth:283,age:17,scores:S(8.2,6.2,8.2,9.2,9.5,9.2,6.2,3.2,9.2,8.2),DR:9.2,notes:'Raised as Ned Stark\'s ward; acknowledged King in the North by the Northern lords.'},
  {id:'jon-snow-nw',name:'Jon Snow',houses:["Night's Watch"],gender:'M',birth:283,age:17,scores:S(1.0,6.2,1.0,9.2,9.5,9.2,6.2,1.0,9.2,1.0),isNW:true,DR:9.2,notes:'Lord Commander of the Night\'s Watch; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'jacaerys-v',name:'Jacaerys Velaryon',houses:['Targaryen'],gender:'M',birth:114,age:16,scores:S(6.2,5.2,8.2,7.0,6.2,6.0,5.2,5.0,7.2,6.2),DR:6.5,notes:'Rhaenyra\'s heir; brave fighter; died ~16.'},
  {id:'addam-v-drag',name:'Addam Velaryon',houses:['Targaryen','Velaryon'],gender:'M',birth:120,age:22,scores:S(5.2,4.2,5.2,7.2,6.2,6.0,4.2,4.2,6.2,4.2),DR:7.0,notes:'Dragonseed son of Corlys Velaryon; tamed and rode Seasmoke; proved his loyalty to Rhaenyra by refusing to burn King\'s Landing; died heroically at the Battle of the Gullet leading Targaryen loyalists.'},
  {id:'hugh-hammer',name:'Hugh Hammer',houses:['Targaryen'],gender:'M',birth:108,age:22,scores:S(5.2,3.2,3.2,7.2,8.2,6.2,3.2,3.2,4.2,3.2),DR:5.5,notes:'Dragonseed bastard who tamed Vermithor, the mighty bronze dragon; one of the most powerful dragonriders of the Dance of the Dragons; betrayed Rhaenyra Targaryen at Second Tumbleton and declared himself king; slain by Ser Jon Roxton.'},
  {id:'ulf-the-white',name:'Ulf the White',houses:['Targaryen'],gender:'M',birth:105,age:25,scores:S(4.2,2.2,2.2,5.2,6.2,4.2,2.2,3.2,3.2,2.2),DR:4.5,notes:'Dragonseed bastard who rode Silverwing; joined the Dance of the Dragons on Rhaenyra\'s side before betraying her at Second Tumbleton, claiming lordship as reward; notorious drinker called "Ulf the Sot"; murdered in his sleep, his death arranged by loyalists.'},
  {id:'aemon-son-jaeh',name:'Aemon (Son of Jaehaerys I)',houses:['Targaryen'],gender:'M',birth:55,age:37,scores:S(7.2,6.2,8.2,8.2,8.2,7.5,6.2,6.2,7.2,7.2),DR:7.5,notes:'Beloved heir; predeceased Jaehaerys.'},
  {id:'baelon-spring',name:'Baelon Targaryen (The Spring Prince)',houses:['Targaryen'],gender:'M',birth:59,age:42,scores:S(7.2,5.2,8.2,7.2,7.2,6.5,5.2,6.2,7.2,6.2),DR:5.5,notes:'Strong heir; predeceased Jaehaerys.'},
  {id:'vaegon',name:'Vaegon Targaryen',houses:['Targaryen'],gender:'M',birth:61,age:95,scores:S(3.2,6.2,4.2,2.2,2.2,2.2,7.2,3.2,4.2,5.2),DR:2.5,notes:'Scholar; became Archmaester.'},
  {id:'bloodraven',name:'Bloodraven / Brynden Rivers',houses:['Targaryen'],gender:'M',birth:175,age:58,scores:S(6.2,9.2,4.2,8.2,6.2,5.5,9.2,4.2,8.2,5.2),DR:6.5,notes:'Greatest spymaster in history; bastard of Aegon IV; served as Hand of the King under Aerys I.'},
  {id:'bloodraven-nw',name:'Bloodraven',houses:["Night's Watch"],gender:'M',birth:175,age:72,scores:S(1.0,9.2,1.0,8.2,6.2,5.5,9.2,1.0,8.2,1.0),isNW:true,DR:6.5,notes:'Lord Commander then Three-Eyed Raven; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'aemon-dragonknight',name:'Aemon the Dragonknight',houses:['Targaryen'],gender:'M',birth:130,age:27,scores:S(1.0,6.2,1.0,8.2,10.0,9.8,4.2,5.2,9.2,1.0),DR:8.0,notes:'Considered greatest Kingsguard ever (personal combat).'},
  {id:'daeron-daring',name:'Daeron the Daring',houses:['Targaryen','Hightower'],gender:'M',birth:114,age:16,scores:S(4.2,4.2,8.2,7.2,7.5,6.5,4.2,3.2,6.2,4.2),DR:6.0,notes:'Son of Viserys I + Alicent Hightower. Died ~16 during the Dance. Dual-house: also Hightower.'},
  {id:'duncan-tall',name:'Duncan the Tall (Ser Duncan)',houses:['Bannermen'],gender:'M',birth:185,age:74,scores:S(1.0,4.2,1.0,7.2,9.5,9.2,4.2,3.2,8.2,1.0),notes:'Hedge knight; legendary fighter; died at Summerhall.'},
  // â”€â”€ TARGARYEN FEMALE â”€â”€
  {id:'visenya',name:'Visenya Targaryen (The Conqueror)',houses:['Targaryen'],gender:'F',birth:-29,age:83,scores:S(7.2,7.0,7.2,8.5,8.5,8.2,7.2,7.0,9.2,7.2),DR:10.0,notes:'Genuine warrior-queen; wielded Dark Sister.'},
  {id:'rhaenys-sister',name:'Rhaenys Targaryen (The Conqueror)',houses:['Targaryen'],gender:'F',birth:-27,age:37,scores:S(6.2,6.2,6.2,6.2,3.2,3.2,6.2,6.2,8.2,7.2),DR:7.5,notes:'Co-conqueror of Westeros; rode Meraxes across the Field of Fire and helped bring Dorne to its knees before meeting her end there.'},
  {id:'alysanne',name:'Alysanne Targaryen',houses:['Targaryen'],gender:'F',birth:36,age:64,scores:S(8.2,8.2,8.2,3.2,2.2,2.2,9.5,7.2,9.2,10.0),DR:5.5,notes:'Co-ruler with Jaehaerys I; flew across the realm on dragonback to champion the smallfolk; abolished the first night, expanded the Night\'s Watch\'s lands, and advanced women\'s rights.'},
  {id:'rhaenyra',name:'Rhaenyra Targaryen',houses:['Targaryen'],gender:'F',birth:97,age:33,scores:S(7.2,7.0,8.2,5.2,3.2,3.2,6.2,7.2,7.2,7.0),DR:7.2,notes:'Acknowledged heir to the Iron Throne for decades; led the Black faction during the Dance. Not a personal fighter.'},
  {id:'helaena',name:'Helaena Targaryen',houses:['Targaryen'],gender:'F',birth:109,age:21,scores:S(2.0,2.2,3.2,1.2,1.2,1.2,2.2,5.0,2.2,3.2),DR:3.5,notes:'Gentle, prophetic; completely unfit for combat.'},
  {id:'daenerys',name:'Daenerys Targaryen',houses:['Targaryen'],gender:'F',birth:284,age:16,scores:S(7.5,6.2,10.0,8.2,3.2,4.2,6.2,6.2,10.0,7.2),DR:9.5,notes:'Born during a storm on Dragonstone, last child of the Mad King; sold into marriage with Khal Drogo at 13 and emerged from his funeral pyre the mother of three dragons; freed tens of thousands from slavery across Essos; rode Drogon at the Field of Fire II; returned to Westeros to reclaim her family\'s throne. The Mother of Dragons.'},
  {id:'baela',name:'Baela Targaryen',houses:['Targaryen'],gender:'F',birth:110,age:48,scores:S(5.2,4.2,6.2,6.2,5.2,5.0,4.2,4.2,7.2,5.2),DR:7.0,notes:'Fierce and physical but not an elite fighter.'},
  {id:'rhaena-daemon',name:'Rhaena (Daughter of Daemon)',houses:['Targaryen'],gender:'F',birth:112,age:43,scores:S(4.2,3.2,5.2,3.2,3.2,3.0,3.2,4.2,5.2,4.2),DR:4.5,notes:'Timid; not a fighter.'},
  {id:'rhaenys-qwnw',name:'Rhaenys (Queen Who Never Was)',houses:['Targaryen','Velaryon'],gender:'F',birth:74,age:57,scores:S(8.2,7.2,9.2,6.2,3.2,3.2,7.2,6.2,8.2,8.2),DR:10.0,notes:'Beloved and capable; named heir by her father Jaehaerys but twice passed over for men; rode Meleys the Red Queen and died fighting at Rook\'s Rest.'},
  {id:'viserra',name:'Viserra Targaryen',houses:['Targaryen'],gender:'F',birth:71,age:21,scores:S(2.0,2.0,3.0,1.2,2.0,2.0,2.0,4.0,2.2,2.2),DR:2.5,notes:'Died recklessly young.'},
  {id:'saera',name:'Saera Targaryen',houses:['Targaryen'],gender:'F',birth:68,age:62,scores:S(2.0,3.2,2.2,1.2,1.2,2.0,3.2,3.2,2.2,2.2),DR:3.0,notes:'Fled; became brothel owner in Essos.'},
  {id:'daella',name:'Daella Targaryen',houses:['Targaryen'],gender:'F',birth:66,age:16,scores:S(2.0,2.2,3.0,1.2,1.2,1.2,2.0,3.0,1.2,2.0),DR:1.5,notes:'Fragile; died in childbirth.'},
  {id:'maegelle',name:'Maegelle Targaryen',houses:['Targaryen'],gender:'F',birth:64,age:26,scores:S(3.0,3.2,3.2,1.2,1.2,1.2,3.2,3.0,1.2,2.2),DR:2.5,notes:'Septa.'},
  {id:'alyssa-targ',name:'Alyssa Targaryen',houses:['Targaryen'],gender:'F',birth:63,age:21,scores:S(4.2,3.2,4.2,2.2,2.0,2.0,3.2,4.2,2.2,3.2),DR:4.5,notes:'Died young in childbirth.'},
  {id:'gael',name:'Gael Targaryen',houses:['Targaryen'],gender:'F',birth:80,age:20,scores:S(1.0,1.0,1.2,1.0,1.0,1.0,1.0,2.0,1.0,1.0),DR:1.0,notes:'Died young; tragic.'},
  {id:'elaena',name:'Elaena Targaryen',houses:['Targaryen'],gender:'F',birth:160,age:65,scores:S(5.2,5.0,5.2,2.2,2.0,3.0,5.2,4.2,3.2,4.2),DR:4.5,notes:'Managed estates; multiple political marriages.'},
  {id:'laena-targ',name:'Laena Velaryon',houses:['Targaryen','Velaryon'],gender:'F',birth:92,age:28,scores:S(5.2,4.2,6.2,5.2,4.2,4.2,4.2,5.2,7.2,5.2),DR:7.5,notes:'Dragonrider Vhagar; NOT a personal fighter.'},
  {id:'naerys',name:'Naerys Targaryen',houses:['Targaryen'],gender:'F',birth:150,age:27,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,3.2,4.2,2.2,3.2),DR:2.0,notes:'Pious and frail.'},
  {id:'daena',name:'Daena Targaryen (The Defiant)',houses:['Targaryen'],gender:'F',birth:157,age:38,scores:S(5.2,3.2,5.2,4.2,5.2,4.2,3.2,4.2,4.2,4.2),DR:5.5,notes:'Physical and spirited; some personal combat ability.'},
  {id:'alyssa-vel-aenys',name:'Alyssa Velaryon (Wife of Aenys)',houses:['Targaryen','Velaryon'],gender:'F',birth:-5,age:53,scores:S(6.2,6.2,5.2,4.2,3.2,3.2,5.2,5.2,4.2,5.2),DR:4.5,notes:'Queen Regent following Aenys I\'s death; guided her children through Maegor\'s murderous reign.'},
  {id:'rhaena-aenys',name:'Rhaena Targaryen (The Black Bride)',houses:['Targaryen'],gender:'F',birth:23,age:39,scores:S(6.2,5.2,7.2,3.2,2.2,2.2,5.2,4.2,7.2,7.2),DR:5.5,notes:'Eldest child of Aenys I; dragonrider of Dreamfyre; survived Maegor\'s forced marriage; took the sword Blackfyre when she fled King\'s Landing; mother of Aerea Targaryen.'},
  {id:'jonquil-darke',name:'Jonquil Darke',houses:['Bannermen'],gender:'F',birth:33,age:45,scores:S(4.2,4.2,5.2,4.2,5.2,4.2,4.2,3.2,5.2,6.2),notes:'Lady companion and sworn shield of Princess Rhaena Targaryen (daughter of Aenys I); one of the steadfast women who shared Rhaena\'s years of exile, flight, and wandering across Westeros; one of the women present when Androw Farman\'s poisonings were uncovered.'},
  {id:'shiera',name:'Shiera Seastar',houses:['Targaryen'],gender:'F',birth:178,age:57,scores:S(5.2,7.2,4.2,2.2,2.2,2.2,7.2,4.2,5.2,6.2),DR:4.5,notes:'Most beautiful woman in realm; brilliant.'},
  {id:'mya-rivers',name:'Mya Rivers',houses:['Targaryen'],gender:'F',birth:172,age:63,scores:S(3.0,3.0,3.0,2.0,2.0,1.5,2.0,2.0,2.0,2.0),DR:2.5,notes:'Great Bastard by Melissa Blackwood.'},
  {id:'gwenys-rivers',name:'Gwenys Rivers',houses:['Targaryen'],gender:'F',birth:173,age:62,scores:S(3.0,3.0,3.0,2.0,2.0,1.5,2.0,2.0,2.0,2.0),DR:2.5,notes:'Great Bastard by Melissa Blackwood.'},
  // â”€â”€ LANNISTER â”€â”€
  {id:'tywin',name:'Tywin Lannister',houses:['Lannister'],gender:'M',birth:242,age:58,scores:S(9.5,10.0,9.2,9.8,5.2,4.5,10.0,10.0,10.0,7.2),notes:'Greatest Hand in history.'},
  {id:'jaime-prime',name:'Jaime Lannister (Prime)',houses:['Lannister'],gender:'M',birth:266,age:34,scores:S(1.0,3.2,1.0,7.2,9.9,9.8,3.2,7.2,9.2,1.0),notes:'Greatest swordsman of his age.'},
  {id:'jaime-post',name:'Jaime Lannister (Post-Hand)',houses:['Lannister'],gender:'M',birth:263,age:34,scores:S(1.0,4.5,1.0,6.5,5.5,6.5,4.2,7.2,7.2,1.0),notes:'Lost hand but gained perspective.'},
  {id:'tyrion',name:'Tyrion Lannister',houses:['Lannister'],gender:'M',birth:273,age:27,scores:S(7.2,9.5,7.2,6.2,2.2,2.2,9.5,8.2,8.2,6.2),notes:'Brilliant administrator.'},
  {id:'joffrey-bl',name:'Joffrey Baratheon',houses:['Lannister','Baratheon'],gender:'M',birth:286,age:13,scores:S(2.0,1.2,1.2,2.0,2.0,1.5,1.2,7.0,2.0,1.2),notes:'Sadistic incompetent. Dual-house: Baratheon.'},
  {id:'tommen-bl',name:'Tommen',houses:['Lannister','Baratheon'],gender:'M',birth:289,age:11,scores:S(4.0,2.2,4.2,1.2,1.2,1.2,2.2,6.2,2.2,4.2),notes:'Sweet child. Dual-house: Baratheon.'},
  {id:'kevan',name:'Kevan Lannister',houses:['Lannister'],gender:'M',birth:244,age:56,scores:S(6.2,7.2,5.2,6.2,4.2,4.2,8.2,7.2,6.2,6.2),notes:'Steady regent.'},
  {id:'lancel',name:'Lancel Lannister',houses:['Lannister'],gender:'M',birth:271,age:29,scores:S(2.2,2.2,2.2,3.2,3.2,3.0,2.2,5.2,2.2,3.0),notes:'Mediocre knight turned zealot.'},
  {id:'tytos-lann',name:'Tytos Lannister',houses:['Lannister'],gender:'M',birth:220,age:47,scores:S(3.2,3.2,3.2,3.2,3.2,2.5,3.2,7.0,3.2,3.2),notes:'Weak lord.'},
  {id:'gerion',name:'Gerion Lannister',houses:['Lannister'],gender:'M',birth:248,age:32,scores:S(5.2,5.2,4.2,4.2,5.2,4.2,5.2,6.2,5.2,5.2),notes:'Adventurous; died seeking Brightroar.'},
  {id:'stafford',name:'Stafford Lannister',houses:['Lannister'],gender:'M',birth:240,age:59,scores:S(3.2,3.2,3.2,4.2,4.2,3.2,3.2,6.2,3.2,3.2),notes:'Killed early in War of Five Kings.'},
  {id:'daven',name:'Daven Lannister',houses:['Lannister'],gender:'M',birth:255,age:45,scores:S(5.2,4.2,4.2,6.2,6.2,5.2,3.2,6.2,5.2,4.2),notes:'Capable commander.'},
  {id:'tyland',name:'Tyland Lannister',houses:['Lannister'],gender:'M',birth:80,age:53,scores:S(6.2,8.2,6.2,5.2,3.2,3.2,8.2,8.5,6.2,5.2),notes:'Brilliant political operator; master of coin.'},
  {id:'jason-lannister',name:'Jason Lannister',houses:['Lannister'],gender:'M',birth:81,age:49,scores:S(6.2,5.2,6.2,7.2,6.2,5.2,5.2,8.2,7.2,5.2),notes:'Capable lord.'},
  {id:'cersei',name:'Cersei Lannister',houses:['Lannister'],gender:'F',birth:266,age:34,scores:S(7.0,8.0,5.2,3.2,2.2,2.2,7.2,8.0,7.2,5.2),notes:'Queen Regent for both Joffrey and Tommen; cunning political operator undone by paranoia and cruelty.'},
  {id:'myrcella-bl',name:'Myrcella Baratheon-Lannister',houses:['Lannister','Baratheon'],gender:'F',birth:287,age:13,scores:S(5.2,5.2,6.2,1.2,1.2,1.2,5.2,6.2,4.2,5.2),notes:'Politically perceptive. Dual-house: Baratheon.'},
  {id:'joanna',name:'Joanna Lannister',houses:['Lannister'],gender:'F',birth:244,age:29,scores:S(6.2,7.2,6.2,1.2,1.2,1.2,6.2,7.2,5.2,7.2),notes:'Strong influence over Tywin.'},
  {id:'genna',name:'Genna Lannister',houses:['Lannister'],gender:'F',birth:246,age:54,scores:S(6.2,7.5,6.2,1.5,2.0,1.5,7.2,7.2,6.2,6.2),notes:'Sharpest female Lannister mind.'},
  {id:'johanna-lannister',name:'Johanna Lannister',houses:['Lannister'],gender:'F',birth:83,age:47,scores:S(6.2,6.2,5.2,5.2,2.2,3.2,6.2,7.2,5.2,5.2),notes:'Lady of Casterly Rock who mustered the Westerlands and drove off Dalton Greyjoy\'s ironborn raids after her husband\'s death.'},
  {id:'janei',name:'Janei Lannister',houses:['Lannister'],gender:'F',birth:295,age:5,scores:S(2.0,2.0,3.0,1.0,1.0,1.0,2.0,4.0,2.0,2.0),notes:'Child; minimal feats.'},
  {id:'damon-grey-lion',name:'Damon Lannister (The Grey Lion)',houses:['Lannister'],gender:'M',birth:130,age:62,scores:S(7.2,5.2,6.2,8.2,7.5,7.2,5.2,8.2,8.2,6.2),notes:'Drove enemies from the Westerlands; greatly expanded Lannister dominance.'},
  {id:'loreon-lannister',name:'Loreon Lannister (The Gold)',houses:['Lannister'],gender:'M',birth:190,age:50,scores:S(6.2,5.2,6.2,6.2,5.2,5.2,5.2,8.2,6.2,5.2),notes:'Extended Lannister power; capable lord.'},
  // â”€â”€ STARK â”€â”€
  {id:'eddard',name:'Eddard Stark',houses:['Stark'],gender:'M',birth:263,age:36,scores:S(8.2,6.2,8.2,7.5,7.2,5.5,6.2,6.2,9.2,7.2),notes:'Excellent ruler of North; poor Hand.'},
  {id:'robb',name:'Robb Stark',houses:['Stark','Tully'],gender:'M',birth:283,age:16,scores:S(8.2,5.2,9.2,9.5,7.2,7.2,5.2,6.2,9.2,7.2),notes:'Undefeated in battle; wise beyond years.'},
  {id:'bran',name:'Bran Stark',houses:['Stark','Tully'],gender:'M',birth:290,age:10,scores:S(6.2,5.2,6.2,2.2,1.5,1.5,5.2,5.2,5.2,5.2),notes:'Greenseer potential; crippled.'},
  {id:'rickon',name:'Rickon Stark',houses:['Stark','Tully'],gender:'M',birth:295,age:5,scores:S(2.0,1.2,3.2,1.2,1.2,1.2,1.2,4.0,1.2,2.0),notes:'Very young; feral.'},
  {id:'benjen',name:'Benjen Stark',houses:['Stark'],gender:'M',birth:266,age:34,scores:S(5.2,4.2,5.2,6.2,7.2,5.5,4.2,5.2,5.2,5.2),notes:'Eddard\'s capable younger brother; lord heir.'},
  {id:'benjen-nw',name:'Benjen Stark',houses:["Night's Watch"],gender:'M',birth:266,age:34,scores:S(1.0,4.2,1.0,6.2,7.2,5.5,4.2,1.0,5.2,1.0),isNW:true,notes:'First Ranger of the Night\'s Watch; vanished beyond the Wall on a ranging; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'rickard-stark',name:'Rickard Stark',houses:['Stark'],gender:'M',birth:240,age:43,scores:S(7.2,6.2,7.2,6.2,5.2,4.5,6.2,6.2,6.2,6.2),notes:'Modernizing lord; murdered by Aerys.'},
  {id:'brandon-stark',name:'Brandon Stark (Ned\'s Brother)',houses:['Stark'],gender:'M',birth:262,age:21,scores:S(6.2,4.2,7.2,6.2,8.2,7.2,4.2,5.2,7.2,6.2),notes:'Hot-headed; great fighter.'},
  {id:'cregan',name:'Cregan Stark',houses:['Stark'],gender:'M',birth:62,age:68,scores:S(8.2,7.2,8.2,9.2,8.2,8.2,7.2,7.2,9.2,7.2),notes:'Old Man of the North; led Hour of the Wolf.'},
  {id:'torrhen',name:'Torrhen Stark (King Who Knelt)',houses:['Stark'],gender:'M',birth:-20,age:50,scores:S(8.2,7.2,8.2,7.2,5.2,4.5,6.2,6.2,6.2,7.2),notes:'Wise enough to surrender; good ruler.'},
  {id:'artos',name:'Artos Stark (The Implacable)',houses:['Stark'],gender:'M',birth:215,age:41,scores:S(6.2,4.2,6.2,8.2,7.5,6.5,4.2,5.2,6.2,5.2),notes:'Defeated multiple invasions.'},
  {id:'brandon-builder',name:'Brandon the Builder',houses:['Stark'],gender:'M',birth:-8000,age:80,scores:S(8.2,6.2,7.2,6.2,5.2,4.5,6.2,6.2,7.2,6.2),notes:'Built the Wall; semi-legendary.'},
  {id:'edwyle',name:'Edwyle Stark',houses:['Stark'],gender:'M',birth:210,age:45,scores:S(5.2,4.2,5.2,5.2,5.2,4.5,4.2,5.2,5.2,5.2),notes:'Father of Rickard; capable lord.'},
  {id:'willam-stark',name:'Willam Stark',houses:['Stark'],gender:'M',birth:180,age:45,scores:S(4.2,4.2,4.2,4.2,4.2,3.5,3.2,4.2,3.2,3.2),notes:'Historical; limited feats.'},
  {id:'eyron',name:'Eyron Stark',houses:['Stark'],gender:'M',birth:160,age:50,scores:S(3.2,3.2,3.2,3.2,3.2,2.5,2.2,3.2,2.2,2.2),notes:'Historical; limited feats.'},
  {id:'sansa',name:'Sansa Stark',houses:['Stark','Tully'],gender:'F',birth:286,age:14,scores:S(4.2,3.2,7.2,1.2,1.2,1.2,5.2,4.2,5.2,8.2),notes:'Young, beautiful, and deeply conditioned to courtly ideals; an outstanding consort candidate with genuine charm and grace; politically naive at the start of her story but with remarkable untapped potential. Dual-house: Tully.'},
  {id:'sansa-qitn',name:'Sansa Stark (Queen in the North)',houses:['Stark','Tully'],gender:'F',birth:286,age:20,scores:S(8.2,8.0,8.2,3.2,2.2,1.5,9.2,7.2,8.2,7.5),notes:'Lady of Winterfell and Queen in the North; mastered the game of thrones through years of suffering and study; a formidable ruler, political strategist, and steward of her people. Dual-house: Tully.'},
  {id:'arya',name:'Arya Stark',houses:['Stark','Tully'],gender:'F',birth:289,age:11,scores:S(3.2,1.5,5.2,3.2,6.5,4.5,2.2,2.2,5.2,3.2),notes:'Young, fierce, and quick; trained briefly by Syrio Forel in Braavos sword-fighting; resourceful and determined beyond her years but still a child â€” not yet the assassin she will become. Dual-house: Tully.'},
  {id:'lyanna-stark',name:'Lyanna Stark',houses:['Stark'],gender:'F',birth:266,age:17,scores:S(6.2,4.2,7.2,4.2,6.2,4.2,4.2,5.2,5.2,6.2),notes:'Spirited; skilled rider.'},
  {id:'catelyn',name:'Catelyn Tully-Stark',houses:['Stark','Tully'],gender:'F',birth:264,age:35,scores:S(6.2,7.2,7.2,4.2,2.2,2.2,7.2,5.2,6.2,7.2),notes:'Sharp political mind. Dual-house: Tully.'},
  {id:'lyarra',name:'Lyarra Stark',houses:['Stark'],gender:'F',birth:242,age:23,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,3.2,4.2,2.2,4.2),notes:'Limited feats.'},
  {id:'serena-stark',name:'Serena Stark',houses:['Stark'],gender:'F',birth:200,age:40,scores:S(5.2,5.2,5.2,1.2,1.2,3.2,4.2,5.2,4.2,5.2),notes:'Co-ruled the North with twin.'},
  {id:'sansa-stark-hist',name:'Sansa Stark (Historical)',houses:['Stark'],gender:'F',birth:200,age:40,scores:S(5.2,5.2,5.2,1.2,1.2,3.2,4.2,5.2,4.2,5.2),notes:'Co-ruled the North.'},
  {id:'theon-hungry-wolf',name:'Theon Stark (The Hungry Wolf)',houses:['Stark'],gender:'M',birth:-300,age:62,scores:S(7.2,5.2,7.2,9.2,8.2,7.5,5.2,5.2,8.2,5.2),notes:'Drove slavers off Skagos; invaded the Three Sisters; greatest warrior-king of the ancient North.'},
  {id:'rodrik-wandering-wolf',name:'Rodrik Stark (The Wandering Wolf)',houses:['Stark'],gender:'M',birth:-350,age:60,scores:S(7.2,5.2,7.2,8.2,9.5,8.5,5.2,5.2,8.2,5.2),notes:'Won nine special duels defending the North; legendary personal fighter.'},
  {id:'alaric-stark',name:'Alaric Stark',houses:['Stark'],gender:'M',birth:-400,age:65,scores:S(7.2,5.2,7.2,7.2,7.5,6.5,5.2,5.2,7.2,5.2),notes:'Ventured twice beyond the Wall; legendary King in the North.'},
  {id:'jon-stark-andals',name:'Jon Stark',houses:['Stark'],gender:'M',birth:-2000,age:63,scores:S(7.2,5.2,7.2,8.2,8.2,7.5,5.2,5.2,7.2,5.2),notes:'Drove the Andal invaders from the North; cemented Stark dominance.'},
  // â”€â”€ BARATHEON â”€â”€
  {id:'robert',name:'Robert Baratheon',houses:['Baratheon'],gender:'M',birth:262,age:36,scores:S(5.2,3.2,5.2,9.5,9.7,8.5,3.2,5.2,9.2,4.2),DR:5.2,notes:'Legendary battlefield commander; catastrophic ruler.'},
  {id:'stannis',name:'Stannis Baratheon',houses:['Baratheon'],gender:'M',birth:264,age:36,scores:S(9.2,7.2,9.2,9.5,7.5,6.5,7.2,5.2,9.2,6.2),DR:4.5,notes:'Rigid but supremely capable.'},
  {id:'renly',name:'Renly Baratheon',houses:['Baratheon'],gender:'M',birth:277,age:22,scores:S(5.2,5.2,6.2,6.2,5.2,4.5,5.2,5.2,6.2,5.2),DR:3.0,notes:'Charismatic; popular.'},
  {id:'orys',name:'Orys Baratheon',houses:['Baratheon'],gender:'M',birth:-5,age:42,scores:S(8.2,6.2,7.2,10.0,8.5,9.2,6.2,5.2,10.0,5.2),DR:7.5,notes:'Founder of House Baratheon; Aegon I\'s great general.'},
  {id:'steffon',name:'Steffon Baratheon',houses:['Baratheon'],gender:'M',birth:238,age:40,scores:S(7.2,6.2,7.2,6.2,6.2,5.5,5.2,5.2,6.2,6.2),DR:4.2,notes:'Trusted by Aerys; capable.'},
  {id:'rogar',name:'Rogar Baratheon',houses:['Baratheon'],gender:'M',birth:-5,age:53,scores:S(7.2,7.2,7.2,8.2,7.5,6.5,7.2,6.2,8.2,6.2),DR:5.0,notes:'Regent for Jaehaerys; formidable.'},
  {id:'borros',name:'Borros Baratheon',houses:['Baratheon'],gender:'M',birth:95,age:38,scores:S(5.2,3.2,5.2,7.2,7.5,6.5,3.2,5.2,6.2,3.2),DR:4.0,notes:'Proud; strong fighter.'},
  {id:'ormund-baratheon',name:'Ormund Baratheon',houses:['Baratheon'],gender:'M',birth:75,age:55,scores:S(6.2,5.2,6.2,7.2,6.2,6.2,5.2,5.2,6.2,5.2),DR:4.2,notes:'Died in Dance.'},
  {id:'boremund',name:'Boremund Baratheon',houses:['Baratheon'],gender:'M',birth:55,age:41,scores:S(5.2,4.2,5.2,6.2,5.2,4.5,4.2,5.2,5.2,4.2),DR:4.0,notes:'Supported Blacks; capable lord.'},
  {id:'lyonel-baratheon',name:'Lyonel Baratheon',houses:['Baratheon'],gender:'M',birth:30,age:50,scores:S(4.2,4.2,4.2,5.2,8.5,4.5,4.2,5.2,4.2,4.2),DR:3.5,notes:'Historical; renowned knight and fighter.'},
  {id:'shireen',name:'Shireen Baratheon',houses:['Baratheon'],gender:'F',birth:289,age:11,scores:S(6.2,6.2,7.2,1.2,1.2,1.2,6.2,4.2,5.2,6.2),DR:3.0,notes:'Bright; would have been capable; murdered.'},
  {id:'selyse',name:'Selyse Florent-Baratheon',houses:['Baratheon'],gender:'F',birth:260,age:40,scores:S(3.2,3.2,3.2,1.2,1.2,1.2,3.2,3.2,2.2,3.0),DR:1.5,notes:'Fanatic.'},
  {id:'cassana',name:'Cassana Estermont-Baratheon',houses:['Baratheon'],gender:'F',birth:242,age:36,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,4.2,4.2,3.2,4.2),DR:1.5,notes:'Drowned with Steffon.'},
  {id:'elenda-caron',name:'Elenda Caron-Baratheon',houses:['Baratheon'],gender:'F',birth:147,age:33,scores:S(5.2,5.2,5.2,1.2,1.2,1.2,5.2,4.2,3.2,5.2),DR:1.5,notes:'Borros\'s wife; managed Storm\'s End.'},
  // â”€â”€ FREY â”€â”€
  {id:'walder-frey',name:'Walder Frey',houses:['Frey'],gender:'M',birth:208,age:92,scores:S(6.2,7.5,6.2,5.2,3.2,2.5,7.2,7.5,7.2,2.0),notes:'Masterful political survivor; lived to ~90.'},
  {id:'stevron',name:'Stevron Frey',houses:['Frey'],gender:'M',birth:237,age:62,scores:S(5.2,5.2,5.2,4.2,4.2,3.5,5.2,5.2,4.2,4.2),notes:'The sane Frey heir.'},
  {id:'black-walder',name:'Black Walder Frey',houses:['Frey'],gender:'M',birth:264,age:36,scores:S(3.2,3.2,3.2,5.2,6.5,5.5,3.2,4.2,4.2,2.2),notes:'Brutal and effective.'},
  {id:'lothar',name:'Lothar Frey (Lame Lothar)',houses:['Frey'],gender:'M',birth:260,age:39,scores:S(3.2,7.2,3.2,3.2,2.2,2.2,7.2,4.2,5.2,3.2),notes:'Masterminded Red Wedding.'},
  {id:'edwyn-frey',name:'Edwyn Frey',houses:['Frey'],gender:'M',birth:262,age:38,scores:S(4.2,4.2,4.2,4.2,4.2,3.5,4.2,4.2,3.2,3.2),notes:''},
  {id:'hosteen',name:'Hosteen Frey',houses:['Frey'],gender:'M',birth:248,age:52,scores:S(3.2,2.2,3.2,5.2,6.5,5.5,2.2,3.2,4.2,2.2),notes:'Excellent fighter; violent.'},
  {id:'perwyn',name:'Perwyn Frey',houses:['Frey'],gender:'M',birth:265,age:35,scores:S(3.2,3.2,4.2,3.2,4.2,3.5,3.2,3.2,3.2,3.2),notes:'Among the more decent Freys.'},
  {id:'olyvar',name:'Olyvar Frey',houses:['Frey'],gender:'M',birth:272,age:28,scores:S(3.2,3.2,4.2,3.2,4.2,3.5,3.2,3.2,3.2,3.2),notes:'Served Robb loyally.'},
  {id:'walder-rivers-f',name:'Walder Rivers (Frey)',houses:['Frey'],gender:'M',birth:245,age:55,scores:S(3.2,3.2,3.2,4.2,5.2,4.2,3.2,2.2,3.2,2.2),notes:'Capable bastard.'},
  {id:'hosteen-2',name:'Merrett Frey',houses:['Frey'],gender:'M',birth:258,age:42,scores:S(2.2,2.2,2.2,2.2,3.2,2.2,2.2,2.2,2.2,2.2),notes:'Failed squire.'},
  {id:'roslin',name:'Roslin Frey',houses:['Frey'],gender:'F',birth:281,age:19,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,4.2,3.2,3.2,4.2),notes:'Genuine and kind.'},
  {id:'fat-walda',name:'Walda Frey (Fat Walda)',houses:['Frey'],gender:'F',birth:275,age:25,scores:S(3.2,3.2,3.2,1.2,1.2,1.2,3.2,3.2,2.2,3.2),notes:'Survived Ramsay.'},
  // â”€â”€ TYRELL â”€â”€
  {id:'mace',name:'Mace Tyrell',houses:['Tyrell'],gender:'M',birth:258,age:42,scores:S(5.2,5.2,5.2,5.2,3.2,3.2,5.2,8.2,8.2,5.2),notes:'Managed well with support; vain.'},
  {id:'willas',name:'Willas Tyrell',houses:['Tyrell'],gender:'M',birth:279,age:21,scores:S(8.2,7.2,8.2,5.2,2.2,2.2,8.2,8.2,8.2,8.2),notes:'Sharpest Tyrell mind; crippled leg.'},
  {id:'garlan',name:'Garlan Tyrell (The Gallant)',houses:['Tyrell'],gender:'M',birth:281,age:19,scores:S(7.2,5.2,7.2,7.2,9.2,8.5,6.2,7.2,8.2,7.2),notes:'Outstanding personal fighter.'},
  {id:'loras',name:'Loras Tyrell',houses:['Tyrell'],gender:'M',birth:283,age:17,scores:S(5.2,3.2,6.2,7.2,9.5,8.5,3.2,6.2,7.2,5.2),notes:'Tournament legend; elite fighter.'},
  {id:'luthor',name:'Luthor Tyrell',houses:['Tyrell'],gender:'M',birth:234,age:43,scores:S(6.2,5.2,6.2,5.2,4.2,4.2,5.2,7.2,6.2,5.2),notes:'Capable lord.'},
  {id:'olenna',name:'Olenna Tyrell (Queen of Thorns)',houses:['Tyrell'],gender:'F',birth:232,age:68,scores:S(7.2,9.5,7.2,2.2,1.5,1.5,9.5,8.2,9.2,7.2),notes:'Sharpest political mind in the Reach.'},
  {id:'margaery',name:'Margaery Tyrell',houses:['Tyrell'],gender:'F',birth:283,age:17,scores:S(7.2,7.2,7.2,1.2,1.2,1.2,7.2,7.2,8.2,8.5),notes:'Gifted political player.'},
  {id:'alerie-ht',name:'Alerie Hightower-Tyrell',houses:['Hightower','Tyrell'],gender:'F',birth:257,age:43,scores:S(5.2,5.2,5.2,1.2,1.2,1.2,5.2,6.2,5.2,5.2),notes:'Mace\'s wife; capable manager.'},
  {id:'leo-longthorn',name:'Leo Tyrell (Longthorn)',houses:['Tyrell'],gender:'M',birth:205,age:37,scores:S(5.2,4.2,5.2,7.2,9.5,8.5,4.2,6.2,7.2,5.2),notes:'Legendary knight and jouster; master of arms; grandfather of Mace. Died fighting on the Stepstones.'},
  {id:'gormon-tyrell',name:'Gormon Tyrell',houses:['Tyrell'],gender:'M',birth:75,age:57,scores:S(5.2,5.2,5.2,6.2,5.2,4.5,5.2,6.2,5.2,4.2),notes:'Tyrell lord during the Dance of Dragons; served Aegon II.'},
  // â”€â”€ MARTELL â”€â”€
  {id:'doran',name:'Doran Martell',houses:['Martell'],gender:'M',birth:248,age:52,scores:S(8.2,9.2,8.2,5.2,2.2,2.2,9.2,6.2,8.2,7.2),notes:'Master strategist.'},
  {id:'oberyn',name:'Oberyn Martell (The Red Viper)',houses:['Martell'],gender:'M',birth:258,age:42,scores:S(7.2,7.5,8.2,8.5,9.5,9.0,7.2,5.2,9.2,7.2),notes:'Elite personal fighter; razor mind.'},
  {id:'quentyn',name:'Quentyn Martell',houses:['Martell'],gender:'M',birth:281,age:19,scores:S(4.2,4.2,5.2,5.2,5.2,4.5,4.2,5.2,4.2,5.2),notes:'Earnest; died trying to claim a dragon.'},
  {id:'lewyn',name:'Lewyn Martell',houses:['Martell'],gender:'M',birth:230,age:53,scores:S(1.0,4.2,1.0,7.2,9.2,8.5,3.2,4.2,7.2,1.0),notes:'Kingsguard; legendary personal fighter.'},
  {id:'nymor',name:'Prince Nymor Martell',houses:['Martell'],gender:'M',birth:-10,age:60,scores:S(7.2,6.2,7.2,7.2,4.2,4.2,6.2,5.2,6.2,6.2),notes:'Son of Meria. Forced peace with Aegon I.'},
  {id:'meria',name:'Meria Martell (The Yellow Toad)',houses:['Martell'],gender:'F',birth:-50,age:87,scores:S(8.2,7.2,5.2,9.2,2.2,2.2,7.2,5.2,9.2,3.2),notes:'Held Dorne against Aegon I. Died undefeated.'},
  {id:'arianne',name:'Arianne Martell',houses:['Martell'],gender:'F',birth:276,age:24,scores:S(7.2,7.2,8.2,4.2,4.2,3.5,7.2,5.2,7.2,7.2),notes:'Rightful heir; ambitious.'},
  {id:'elia',name:'Elia Martell',houses:['Martell'],gender:'F',birth:260,age:23,scores:S(6.2,6.2,6.2,1.2,1.2,1.2,6.2,4.2,5.2,6.2),notes:'Intelligent and kind; murdered.'},
  {id:'nymeria-sand',name:'Nymeria Sand',houses:['Martell'],gender:'F',birth:279,age:21,scores:S(4.2,5.2,4.2,5.2,8.5,6.5,5.2,2.2,5.2,4.2),notes:'Fighter and spy; lethal with whip (personal combat).'},
  {id:'tyene',name:'Tyene Sand',houses:['Martell'],gender:'F',birth:281,age:19,scores:S(3.2,6.2,3.2,3.2,7.5,6.5,6.2,2.2,5.2,4.2),notes:'Poison specialist; trained personal fighter.'},
  {id:'obara',name:'Obara Sand',houses:['Martell'],gender:'F',birth:278,age:22,scores:S(3.2,2.2,3.2,5.2,7.5,6.5,2.2,2.2,4.2,2.2),notes:'Warrior with spear; aggressive.'},
  {id:'deria',name:'Deria Martell',houses:['Martell'],gender:'F',birth:20,age:35,scores:S(6.2,7.5,6.2,3.2,2.2,2.2,6.2,4.2,5.2,5.2),notes:'Extraordinary diplomatic courage.'},
  {id:'nymeria-martell',name:'Nymeria of Ny Sar',houses:['Martell'],gender:'F',birth:-700,age:87,scores:S(9.2,8.2,7.5,10.0,4.2,3.5,8.2,6.2,10.0,8.2),notes:'Led 10,000 ships from the Rhoyne to Dorne; burned her fleet to commit her people to their new home; co-founded House Martell alongside Mors Martell and conquered all of Dorne. commanded her armies from the field.'},
  {id:'mors-martell',name:'Mors Martell',houses:['Martell'],gender:'M',birth:-700,age:78,scores:S(8.2,6.2,7.2,8.5,6.2,5.5,7.2,5.2,8.2,6.2),notes:'Lord of the Sandship who forged an alliance with Nymeria of Ny Sar when her fleet landed in Dorne; married her and together they conquered the entire peninsula, founding the unified House Martell that would resist every invader for centuries.'},
  {id:'aliandra-martell',name:'Aliandra Martell',houses:['Martell'],gender:'F',birth:110,age:50,scores:S(7.2,5.2,4.2,3.2,1.5,2.2,7.2,4.2,8.2,10.0),notes:'Princess of Dorne during the reign of Aegon III; renowned for her beauty and political cunning â€” she kept suitors from across the known world dangling, using their desire as diplomatic leverage.'},
  {id:'qoren-martell',name:'Prince Qoren Martell',houses:['Martell'],gender:'M',birth:133,age:28,scores:S(8.2,6.2,4.2,9.2,3.2,5.2,7.2,4.2,7.2,3.2),notes:'Prince of Dorne who resisted the conquest of Daeron I; master of the Dornish style of warfare, using the desert and guerrilla tactics to grind down the Targaryen armies until the occupation collapsed.'},
  // â”€â”€ GREYJOY â”€â”€
  {id:'balon',name:'Balon Greyjoy',houses:['Greyjoy'],gender:'M',birth:255,age:44,scores:S(5.2,4.2,5.2,6.2,5.2,4.5,3.2,4.2,5.2,3.2),notes:'Stubborn reaver.'},
  {id:'victarion',name:'Victarion Greyjoy',houses:['Greyjoy'],gender:'M',birth:260,age:40,scores:S(5.2,3.2,5.2,9.2,8.5,7.5,3.2,3.2,7.2,3.2),notes:'Elite naval commander; formidable personal fighter.'},
  {id:'euron',name:'Euron Greyjoy (Crow\'s Eye)',houses:['Greyjoy'],gender:'M',birth:262,age:38,scores:S(6.2,5.2,5.2,8.5,8.5,7.5,4.2,4.2,8.2,3.2),notes:'Tactical genius.'},
  {id:'theon',name:'Theon Greyjoy',houses:['Greyjoy'],gender:'M',birth:278,age:22,scores:S(3.2,3.2,4.2,4.2,5.2,3.5,3.2,2.2,3.2,3.2),notes:'Broken by experience.'},
  {id:'quellon',name:'Quellon Greyjoy',houses:['Greyjoy'],gender:'M',birth:228,age:61,scores:S(7.2,6.2,7.2,6.2,5.2,3.5,5.2,4.2,5.2,5.2),notes:'Modernizing lord.'},
  {id:'dalton',name:'Dalton Greyjoy (Red Kraken)',houses:['Greyjoy'],gender:'M',birth:112,age:22,scores:S(4.2,2.2,4.2,9.2,8.5,7.5,2.2,3.2,7.2,2.2),notes:'Greatest reaver of his age.'},
  {id:'asha',name:'Asha Greyjoy',houses:['Greyjoy'],gender:'F',birth:275,age:25,scores:S(7.2,6.2,8.2,7.5,6.2,5.5,5.2,3.2,7.2,5.2),notes:'Best Greyjoy for governance; fights with axe and knife.'},
  {id:'rodrik-harlaw',name:'Rodrik Harlaw (The Reader)',houses:['Bannermen'],gender:'M',birth:248,age:52,scores:S(5.2,7.5,4.2,4.2,3.2,4.2,7.2,5.2,6.2,4.2),notes:'Most learned of the Ironborn; preferred books to raids; Asha\'s uncle and greatest counsel.'},
  {id:'aeron-damphair',name:'Aeron Greyjoy (Damphair)',houses:['Greyjoy'],gender:'M',birth:263,age:37,scores:S(3.2,3.2,2.2,3.2,3.2,2.5,3.2,3.2,3.2,2.2),notes:'Drowned God priest; called the Kingsmoot after Balon\'s death.'},
  // â”€â”€ VELARYON â”€â”€
  {id:'corlys',name:'Corlys Velaryon (The Sea Snake)',houses:['Velaryon'],gender:'M',birth:53,age:79,scores:S(7.2,7.2,7.2,9.2,5.2,4.5,7.2,9.5,10.0,7.2),DR:5.5,notes:'Greatest naval commander in history.'},
  {id:'laenor',name:'Laenor Velaryon',houses:['Velaryon'],gender:'M',birth:94,age:26,scores:S(4.2,3.2,5.2,5.2,5.2,4.5,3.2,6.2,5.2,4.2),DR:5.2,notes:'Quiet; dragonrider.'},
  {id:'alyn-velaryon',name:'Alyn Velaryon / Oakenfist',houses:['Velaryon'],gender:'M',birth:115,age:61,scores:S(7.2,5.2,5.2,9.2,5.2,7.2,4.2,7.2,8.2,5.2),DR:5.5,notes:'Greatest admiral after Corlys.'},
  {id:'rhogar-velaryon',name:'Rhogar Velaryon',houses:['Velaryon'],gender:'M',birth:100,age:60,scores:S(4.2,3.2,3.2,5.2,6.2,4.5,3.2,4.2,3.2,3.2),DR:3.5,notes:'Chose the black over lordship.'},
  {id:'rhogar-nw',name:'Rhogar Velaryon',houses:["Night's Watch"],gender:'M',birth:100,age:60,scores:S(1.0,3.2,1.0,5.2,6.2,4.5,3.2,1.0,3.2,1.0),isNW:true,DR:3.5,notes:'Velaryon heir who took the black; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'monford',name:'Monford Velaryon',houses:['Velaryon'],gender:'M',birth:268,age:31,scores:S(4.2,3.2,4.2,5.2,4.2,4.2,3.2,5.2,4.2,3.2),DR:3.5,notes:'Died at Blackwater.'},
  {id:'jacaerys-vel',name:'Jacaerys Velaryon',houses:['Velaryon'],gender:'M',birth:114,age:16,scores:S(6.2,5.2,8.2,7.2,6.2,6.2,5.2,5.2,7.2,6.2),DR:6.5,notes:'Rhaenyra\'s eldest; dragonrider of Vermax; brokered alliances in the North; died at the Battle of the Gullet ~16.'},
  {id:'lucerys-vel',name:'Lucerys Velaryon',houses:['Targaryen','Velaryon'],gender:'M',birth:115,age:14,scores:S(4.2,4.2,5.2,4.2,4.2,3.5,3.2,4.2,3.5,3.2),DR:4.5,notes:'Dragonrider of Arrax; sent as envoy to Storm\'s End; slain by Aemond and Vhagar before he turned 15.'},
  {id:'joffrey-vel',name:'Joffrey Velaryon',houses:['Targaryen','Velaryon'],gender:'M',birth:117,age:13,scores:S(3.2,3.2,4.2,3.2,3.2,2.5,2.2,3.2,2.5,2.2),DR:3.5,notes:'Youngest of Rhaenyra\'s Strong sons; died at 13 during the fall of King\'s Landing, falling from an untamed dragon.'},
  {id:'daenaera',name:'Daenaera Velaryon',houses:['Velaryon'],gender:'F',birth:120,age:55,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,3.2,5.2,3.2,4.2),DR:3.5,notes:'Became Queen of Aegon III.'},
  {id:'valaena',name:'Valaena Velaryon',houses:['Velaryon','Targaryen'],gender:'F',birth:-30,age:55,scores:S(4.2,4.2,4.2,3.2,2.2,2.2,4.2,5.2,4.2,4.2),DR:6.0,notes:'Mother of Visenya, Aegon, and Rhaenys; the Conquerors. A Velaryon of old blood who gave Aegon his dragonriding heirs and shaped the dynasty that would unite Westeros.'},
  // â”€â”€ HIGHTOWER â”€â”€
  {id:'otto',name:'Otto Hightower',houses:['Hightower'],gender:'M',birth:55,age:76,scores:S(6.2,9.2,6.2,4.2,2.2,2.2,9.2,7.2,8.2,6.2),notes:'Among finest Hands; supremely ambitious.'},
  {id:'ormund-hightower',name:'Ormund Hightower',houses:['Hightower'],gender:'M',birth:75,age:55,scores:S(6.2,5.2,6.2,7.2,6.2,6.2,5.2,7.2,7.2,5.2),notes:'Died in Dance.'},
  {id:'leyton',name:'Leyton Hightower',houses:['Hightower'],gender:'M',birth:248,age:52,scores:S(6.2,5.2,6.2,5.2,4.2,4.2,5.2,7.2,6.2,5.2),notes:'Reclusive lord of Oldtown.'},
  {id:'gwayne-hightower',name:'Gwayne Hightower',houses:['Hightower'],gender:'M',birth:73,age:30,scores:S(1.0,4.2,1.0,5.2,7.5,4.5,4.2,6.2,6.2,1.0),notes:'Son of Otto Hightower and brother of Alicent; a Kingsguard knight who commanded the Eyrie garrison during the Dance of the Dragons; a capable soldier whose reputation was shaped more by his family\'s politics than his own deeds.'},
  {id:'alicent',name:'Alicent Hightower',houses:['Hightower','Targaryen'],gender:'F',birth:88,age:48,scores:S(8.2,8.2,6.2,3.2,1.5,1.5,8.2,6.2,7.2,7.2),notes:'De facto power behind the throne in Viserys I\'s final years; Protector of the Realm for Aegon II; architect of the Green succession.'},
  {id:'lynesse',name:'Lynesse Hightower',houses:['Hightower'],gender:'F',birth:271,age:29,scores:S(3.2,3.2,3.2,1.2,1.2,1.2,3.2,6.2,3.2,4.2),notes:'Married Jorah; fled to Essos.'},
  {id:'gerold-hightower',name:'Ser Gerold Hightower (The White Bull)',houses:['Hightower','Bannermen'],gender:'M',birth:237,age:46,scores:S(1.0,4.2,1.0,7.2,10.0,10.0,4.2,3.2,8.2,1.0),notes:'Lord Commander of the Kingsguard under Aerys II; widely considered among the finest to hold the post; died at the Tower of Joy.'},
  // â”€â”€ TULLY â”€â”€
  {id:'hoster',name:'Hoster Tully',houses:['Tully'],gender:'M',birth:236,age:63,scores:S(7.2,7.5,7.2,5.2,4.2,3.5,7.2,6.2,7.2,6.2),notes:'Skilled political operator.'},
  {id:'brynden-blackfish',name:'Brynden Tully (The Blackfish)',houses:['Tully'],gender:'M',birth:240,age:60,scores:S(6.2,5.2,5.2,9.2,8.5,7.5,5.2,4.2,8.2,5.2),notes:'Among finest commanders; excellent personal fighter.'},
  {id:'edmure',name:'Edmure Tully',houses:['Tully'],gender:'M',birth:264,age:36,scores:S(5.2,4.2,5.2,4.2,4.2,3.5,4.2,5.2,5.2,5.2),notes:'Well-meaning; poor battlefield commander.'},
  {id:'grover-tully',name:'Grover Tully',houses:['Tully'],gender:'M',birth:60,age:70,scores:S(5.2,6.2,4.2,3.2,2.2,2.2,6.2,5.2,5.2,4.2),notes:'Lord of Riverrun at the outbreak of the Dance; bedridden and aged, he sided with the Greens but was too infirm to act; died before the war ended.'},
  {id:'elmo-tully',name:'Elmo Tully',houses:['Tully'],gender:'M',birth:98,age:32,scores:S(5.2,4.2,5.2,6.2,4.2,3.5,4.2,4.2,5.2,4.2),notes:'Son of Grover; led the Tully forces after his father\'s death but himself died within months of becoming lord, leaving the seat to his young son Kermit.'},
  {id:'kermit',name:'Kermit Tully',houses:['Tully'],gender:'M',birth:118,age:42,scores:S(6.2,5.2,6.2,7.2,6.2,5.5,4.2,5.2,6.2,5.2),notes:'Led Tullys at end of Dance.'},
  {id:'lysa-tully',name:'Lysa Tully-Arryn',houses:['Tully','Arryn'],gender:'F',birth:267,age:33,scores:S(4.2,4.2,3.2,1.2,1.2,1.2,3.2,4.2,2.2,2.2),notes:'Lady Regent of the Vale for years, shielding the Eyrie from the War of the Five Kings; erratic and ultimately dangerous. Dual-house: Arryn.'},
  {id:'minisa',name:'Minisa Whent-Tully',houses:['Tully'],gender:'F',birth:244,age:29,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,4.2,3.2,2.2,4.2),notes:'Died in childbirth.'},
  // â”€â”€ ARRYN â”€â”€
  {id:'jon-arryn',name:'Jon Arryn',houses:['Arryn'],gender:'M',birth:231,age:67,scores:S(7.2,8.5,7.2,6.2,4.2,3.5,8.2,6.2,8.2,7.2),notes:'Finest Hand of his generation.'},
  {id:'sweetrobin',name:'Robert Arryn (Sweetrobin)',houses:['Arryn'],gender:'M',birth:293,age:7,scores:S(2.0,1.2,2.2,1.2,1.2,1.2,1.2,4.2,1.2,1.2),notes:'Sickly epileptic child.'},
  {id:'harry-heir',name:'Harold Hardyng (Harry the Heir)',houses:['Arryn'],gender:'M',birth:281,age:19,scores:S(6.2,4.2,7.2,6.2,7.5,6.5,4.2,5.2,6.2,6.2),notes:'Capable fighter.'},
  {id:'jeyne-arryn',name:'Jeyne Arryn',houses:['Arryn'],gender:'F',birth:100,age:34,scores:S(8.2,6.2,6.2,6.2,2.2,5.2,6.2,5.2,6.2,6.2),notes:'Female Lord of the Eyrie; held Vale through the Dance.'},
  {id:'sharra-arryn',name:'Sharra Arryn',houses:['Arryn'],gender:'F',birth:-10,age:35,scores:S(5.2,4.2,5.2,3.2,2.2,3.2,4.2,4.2,4.2,4.2),notes:'Regent; tried to keep Vale independent.'},
  {id:'aemma-arryn',name:'Aemma Arryn (Wife of Viserys I)',houses:['Arryn','Targaryen'],gender:'F',birth:82,age:24,scores:S(4.2,4.2,4.2,1.2,1.2,1.2,4.2,4.2,3.2,4.2),DR:3.5,notes:'Died in childbirth. Dual-house: Targaryen.'},
  // â”€â”€ OTHER â”€â”€
  {id:'mance',name:'Mance Rayder',houses:["Beyond the Wall"],gender:'M',birth:254,age:46,scores:S(10.0,7.2,4.2,8.5,7.5,7.5,7.2,3.2,8.2,6.2),notes:'King-Beyond-the-Wall; united over 100 Free Folk clans into a single host.'},
  {id:'mance-nw',name:'Mance Rayder',houses:["Night's Watch"],gender:'M',birth:254,age:46,scores:S(1.0,6.2,1.0,8.5,7.5,7.5,6.2,1.0,8.2,1.0),isNW:true,notes:'Former ranger who abandoned the Watch to become King-Beyond-the-Wall; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'nights-king-nw',name:"The Night's King",houses:["Night's Watch"],gender:'M',birth:-8000,age:55,scores:S(1.0,3.2,1.0,7.5,8.5,7.5,3.2,1.0,7.2,1.0),isNW:true,notes:'13th Lord Commander; betrayed the Watch and ruled the Nightfort for a generation with a female White Walker as consort.'},
  {id:'qhorin-nw',name:'Qhorin Halfhand',houses:["Night's Watch"],gender:'M',birth:244,age:56,scores:S(1.0,5.2,1.0,8.5,9.5,8.5,4.2,1.0,7.2,1.0),isNW:true,notes:'Legendary ranger; sacrificed himself to plant Jon Snow as a mole among the Free Folk.'},
  {id:'tormund',name:'Tormund Giantsbane',houses:["Beyond the Wall"],gender:'M',birth:255,age:45,scores:S(6.2,5.2,4.2,8.2,8.5,7.5,5.2,2.2,7.2,5.2),notes:'Fearsome personal warrior.'},
  {id:'wun-wun',name:'Wun Wun (Giant)',houses:["Beyond the Wall"],gender:'M',birth:250,age:50,scores:S(1.2,1.2,1.2,3.5,10.0,9.5,1.2,1.2,8.2,1.2),notes:'Last giant in Westeros.'},
  {id:'gendry',name:'Gendry',houses:['Other'],gender:'M',birth:286,age:14,scores:S(5.2,3.2,5.2,4.2,6.5,5.5,3.2,2.2,4.2,5.2),notes:'Robert\'s bastard.'},
  {id:'bronn',name:'Bronn',houses:['Other'],gender:'M',birth:265,age:35,scores:S(3.2,4.2,2.2,5.5,8.5,6.5,4.2,4.2,5.2,3.2),notes:'Elite sellsword.'},
  {id:'white-worm',name:'The White Worm',houses:['Essos'],gender:'F',birth:274,age:26,scores:S(2.2,6.5,1.2,2.2,1.2,1.2,8.2,5.2,6.2,4.2),notes:'Mysaria; rose from slave to spymaster in the Street of Silk; ran a web of informants across King\'s Landing; wielded intelligence as her only weapon.'},
  {id:'nymeria-ny-sar',name:'Nymeria of Ny Sar (Warrior Queen)',houses:['Essos'],gender:'F',birth:-700,age:87,scores:S(9.2,8.2,7.5,10.0,4.2,3.5,8.2,6.2,10.0,8.2),notes:'Led 10,000 ships from Essos to Dorne; burned her fleet to commit her people; co-founded House Martell. commanded her armies from the field.'},
  {id:'ygritte',name:'Ygritte',houses:["Beyond the Wall"],gender:'F',birth:287,age:13,scores:S(3.2,3.2,2.2,4.5,6.5,5.5,3.2,1.2,4.2,4.2),notes:'Excellent archer; capable fighter.'},
  {id:'val',name:'Val (The Wildling Princess)',houses:["Beyond the Wall"],gender:'F',birth:282,age:18,scores:S(5.2,4.2,4.2,4.5,6.5,5.5,4.2,2.2,5.2,5.2),notes:'Spirited; capable fighter.'},
  {id:'harren-hoare',name:'Harren Hoare (The Black)',houses:['Other'],gender:'M',birth:-55,age:57,scores:S(5.2,3.2,5.2,8.5,7.5,6.5,3.2,5.2,6.2,3.2),notes:'Built Harrenhal; ruled both the Iron Islands and the Riverlands; burned alive by Balerion at the Conquest.'},
  {id:'craster',name:'Craster',houses:["Beyond the Wall"],gender:'M',birth:240,age:60,scores:S(4.2,2.2,2.2,5.2,5.5,3.5,3.2,4.2,3.2,2.2),notes:'Wildling who built his own keep north of the Wall; survived for decades in the haunted forest by sacrificing his sons to the White Walkers; kept his own daughters as wives; tolerated by the Night\'s Watch as a source of shelter and information; killed by his own mutinous crows at Craster\'s Keep.'},
  {id:'magnar-thenn',name:'Magnar of Thenn (Styr)',houses:["Beyond the Wall"],gender:'M',birth:258,age:42,scores:S(7.2,3.2,3.2,8.5,8.5,7.5,4.2,3.2,6.2,3.2),notes:'Lord of the Thenns, the most organized and disciplined tribe of the Free Folk; commands soldiers who carry bronze weapons and wear bronze armor; led the Thenn warriors south of the Wall during Mance Rayder\'s great ranging; killed by Jon Snow at the battle for Castle Black.'},
  {id:'mag-the-mighty',name:'Mag the Mighty',houses:["Beyond the Wall"],gender:'M',birth:250,age:50,scores:S(1.2,1.2,1.2,4.5,10.0,9.5,1.2,1.2,7.2,1.2),notes:'King of the Giants; one of the last true giants alive; slew Grenn and three other brothers of the Night\'s Watch while breaking through the inner gate of Castle Black; killed by Grenn in the tunnel beneath the Wall.'},
  {id:'three-eyed-raven',name:'The Three-Eyed Raven',houses:["Beyond the Wall",'Magic','Stark','Tully'],gender:'M',birth:175,age:125,scores:S(1.2,9.5,1.2,1.2,1.2,1.2,9.5,1.2,10.0,1.2),notes:'Bloodraven transformed; an ancient greenseer who merged with a weirwood tree north of the Wall and became one with the river of time itself; keeper of all memory, all history, and all the dreams of men since the Age of Heroes.'},
  {id:'child-of-the-forest',name:'Child of the Forest',houses:["Beyond the Wall",'Magic'],gender:'F',birth:-10000,age:1000,unlimited:true,scores:S(1.2,3.2,1.2,3.2,5.2,3.5,5.2,1.2,6.2,1.2),notes:'Member of the ancient non-human race who inhabited Westeros before the First Men; carved the faces into the weirwood trees; wielders of powerful earth magic; creators of the White Walkers in a desperate act of war they could never take back.'},
  {id:'child-of-the-forest-m',name:'Child of the Forest',houses:["Beyond the Wall",'Magic'],gender:'M',birth:-10000,age:1000,unlimited:true,scores:S(1.2,3.2,1.2,3.2,5.2,3.5,5.2,1.2,6.2,1.2),notes:'Member of the ancient non-human race who inhabited Westeros before the First Men; carved the faces into the weirwood trees; wielders of powerful earth magic; creators of the White Walkers in a desperate act of war they could never take back.'},
  {id:'night-king',name:'The Night King',houses:["Beyond the Wall",'Magic'],gender:'M',birth:-10000,age:10000,scores:S(6.5,1.2,3.2,10.0,10.0,10.0,1.2,1.2,2.2,1.2),DR:8.5,notes:'Commander of the White Walkers and supreme ruler of the Army of the Dead; the first of his kind, created by the Children of the Forest as a weapon against the First Men; destroyed by Arya Stark at the Battle of Winterfell, ending the Long Night.'},
  {id:'white-walker',name:'White Walker',houses:["Beyond the Wall",'Magic'],gender:'M',birth:-10000,age:10000,unlimited:true,scores:S(1.2,1.2,1.2,7.5,9.5,8.5,1.2,1.2,4.2,1.2),notes:'Ancient supernatural warriors clad in armor of ice; commanders of the wights and generals of the Army of the Dead; slain only by dragonglass, Valyrian steel, or fire.'},
  {id:'wight',name:'Wight',houses:["Beyond the Wall",'Magic'],gender:'M',birth:0,age:0,unlimited:true,scores:S(1.2,1.2,1.2,3.5,6.5,3.5,1.2,1.2,3.2,1.2),notes:'A corpse reanimated by the power of the Night King to serve in the Army of the Dead; destroyed by fire or by killing the White Walker who raised it.'},
  {id:'wight-f',name:'Wight',houses:["Beyond the Wall",'Magic'],gender:'F',birth:0,age:0,unlimited:true,scores:S(1.2,1.2,1.2,3.5,6.5,3.5,1.2,1.2,3.2,1.2),notes:'A corpse reanimated by the power of the Night King to serve in the Army of the Dead; destroyed by fire or by killing the White Walker who raised it.'},
  {id:'osha',name:'Osha',houses:["Beyond the Wall"],gender:'F',birth:275,age:25,scores:S(2.2,3.2,1.2,4.2,6.5,4.5,3.2,1.2,6.2,2.2),notes:'Wildling woman who swore herself to House Stark after being captured; protected Bran and Rickon Stark after the fall of Winterfell; cunning, resourceful, and fiercely loyal; killed by Ramsay Bolton.'},
  {id:'orell',name:'Orell',houses:["Beyond the Wall",'Magic'],gender:'M',birth:276,age:24,scores:S(3.2,2.2,1.2,5.2,7.5,5.5,3.2,1.2,5.2,2.2),notes:'Wildling warg who could project his consciousness into an eagle and see through its eyes; fought alongside Mance Rayder\'s host during the assault on the Wall; killed by Jon Snow, but his spirit survived in his eagle and attacked Jon in vengeance as he fled south.'},
  {id:'morna-white-mask',name:'Morna White Mask',houses:["Beyond the Wall"],gender:'F',birth:260,age:40,scores:S(5.2,3.2,1.2,7.2,7.5,6.5,3.2,2.2,6.2,3.2),notes:'She-bear chieftain of the Free Folk; one of the wildling leaders who supported Mance Rayder; renowned warrior who wore a white mask in battle; sworn herself and her people to House Stark after the Night\'s Watch betrayal.'},
  {id:'grand-maester-pycelle',name:'Grand Maester Pycelle',houses:['Other'],gender:'M',birth:208,age:92,scores:S(1.2,4.2,1.2,1.2,1.2,1.2,9.2,7.2,2.2,1.2),notes:'Grand Maester for decades under multiple kings; secretly a loyal Lannister agent beneath his doddering facade; possessed vast institutional knowledge of the realm\'s governance, poison, and medicine; murdered by Qyburn\'s little birds.'},
  {id:'maester-orwyle',name:'Grand Maester Orwyle',houses:['Other'],gender:'M',birth:90,age:45,scores:S(2.2,7.2,2.2,1.2,1.2,1.2,9.2,5.2,5.2,2.2),notes:'Grand Maester under Aegon II during the Dance of the Dragons; a political survivor who served both the Greens and the Blacks; imprisoned after the Dance, he later joined the Night\'s Watch under duress.'},
  {id:'archmaester-ebrose',name:'Archmaester Ebrose',houses:['Other'],gender:'M',birth:220,age:80,scores:S(2.2,5.2,1.2,1.2,1.2,1.2,8.2,5.2,4.2,1.2),notes:'Archmaester of the Citadel and master of medicine; authored The Chronicles of the Wars Following the Death of King Robert I; supervised Samwell Tarly\'s maester training; a skeptic but fair-minded scholar.'},
  {id:'polliver',name:'Polliver',houses:['Other'],gender:'M',birth:272,age:28,scores:S(1.2,1.2,1.2,2.2,5.5,3.5,1.2,1.2,2.2,1.2),notes:'Man-at-arms in service to Gregor Clegane; seized Needle from Arya Stark at the inn on the crossroads, killing her friend Lommy; killed by Arya at that same inn years later using her recovered sword.'},
  {id:'hodor',name:'Hodor',houses:['Other'],gender:'M',birth:277,age:23,scores:S(1.2,1.2,1.2,1.2,5.5,2.5,1.2,1.2,3.2,1.2),notes:'Stablehand at Winterfell; gentle giant of limited speech; carried Bran Stark across the North and beyond the Wall; held the door.'},
  {id:'maester-luwin',name:'Maester Luwin',houses:['Other'],gender:'M',birth:230,age:69,scores:S(5.2,8.5,3.2,3.2,1.2,1.2,9.2,5.2,7.2,3.2),notes:'Maester of Winterfell; decades of loyal service to House Stark as advisor, healer, and teacher; guided the castle through the siege and fall; mercy-killed by Osha beneath the heart tree.'},
  {id:'shagga',name:'Shagga son of Dolf',houses:['Other'],gender:'M',birth:260,age:40,scores:S(6.2,2.2,3.2,7.2,9.2,7.5,2.2,2.2,6.2,2.2),notes:'Chief of the Stone Crows; enormous and ferocious warrior who followed Tyrion Lannister across the Mountains of the Moon; famous for his threat to cut off the manhood of enemies and feed it to the goats.'},
  {id:'timett',name:'Timett son of Timett',houses:['Other'],gender:'M',birth:272,age:28,scores:S(5.2,2.2,3.2,6.2,8.5,6.5,2.2,2.2,5.2,2.2),notes:'Young chief of the Burned Men; earned leadership by gouging out his own eye in the traditional rite; cold, ruthless, and fearless; led his warriors for Tyrion during the Battle of the Blackwater.'},
  {id:'chella',name:'Chella daughter of Cheyk',houses:['Other'],gender:'F',birth:255,age:45,scores:S(6.2,3.2,3.2,7.2,8.5,6.5,3.2,2.2,5.2,3.2),notes:'Chieftain of the Black Ears; collects the ears of slain enemies as trophies; one of the few female clan leaders in the Mountains of the Moon; followed Tyrion into the War of the Five Kings.'},
  {id:'conn',name:'Conn son of Coratt',houses:['Other'],gender:'M',birth:258,age:42,scores:S(5.2,2.2,3.2,6.2,7.5,5.5,2.2,2.2,4.2,2.2),notes:'Chief of the Moon Brothers; led his clansmen alongside Shagga and Timett in service to Tyrion Lannister during the battle for King\'s Landing.'},
  // â”€â”€ BLACKFYRE â”€â”€
  {id:'daemon-blackfyre',name:'Daemon Blackfyre',houses:['Blackfyre','Targaryen'],gender:'M',birth:170,age:26,scores:S(8.0,4.2,8.2,9.2,9.9,9.8,4.2,5.2,10.0,5.2),DR:9.5,notes:'Greatest swordsman of his era.'},
  {id:'bittersteel',name:'Aegor Rivers (Bittersteel)',houses:['Blackfyre'],gender:'M',birth:172,age:64,scores:S(6.2,6.2,5.2,9.2,8.5,8.5,6.2,10.0,9.2,4.2),DR:7.5,notes:'Founded Golden Company; great personal fighter.'},
  {id:'fireball',name:'Ser Quentyn Ball (Fireball)',houses:['Bannermen'],gender:'M',birth:148,age:48,scores:S(3.2,4.2,4.2,8.5,9.2,8.5,3.2,3.2,7.2,3.2),DR:7.0,notes:'Master-at-arms of the Red Keep; promised a Kingsguard place by Aegon IV but denied under Daeron II; rescued Daemon I Blackfyre from royal arrest; one of the finest knights of his age; killed by a common archer at the Redgrass Field.'},
  {id:'maelys',name:'Maelys Blackfyre (The Monstrous)',houses:['Blackfyre'],gender:'M',birth:228,age:32,scores:S(3.2,2.2,3.2,7.5,10.0,8.5,2.2,3.2,7.2,2.2),DR:7.5,notes:'Two heads; died fighting Barristan in personal combat.'},
  {id:'young-griff',name:'Aegon Targaryen (Young Griff)',houses:['Blackfyre'],gender:'M',birth:282,age:18,scores:S(6.2,5.2,7.2,7.2,6.2,5.5,5.2,4.2,6.2,6.2),DR:6.5,notes:'Most believe him a Blackfyre.'},
  {id:'rohanne-tyrosh',name:'Rohanne of Tyrosh',houses:['Blackfyre'],gender:'F',birth:150,age:50,scores:S(4.2,4.2,3.2,2.2,1.5,1.5,4.2,3.2,3.2,4.2),DR:3.0,notes:'Daemon I\'s paramour; mother of the Blackfyre line.'},
  {id:'aegon-blackfyre-twin',name:'Aegon Blackfyre',houses:['Blackfyre'],gender:'M',birth:178,age:18,scores:S(3.2,3.2,4.2,6.2,7.5,6.5,3.2,3.2,6.2,3.2),DR:5.5,notes:'One of Daemon I\'s twin sons; died alongside his father at the Redgrass Field aged ~18.'},
  {id:'aemon-blackfyre-twin',name:'Aemon Blackfyre',houses:['Blackfyre'],gender:'M',birth:178,age:18,scores:S(3.2,3.2,4.2,5.2,7.5,5.5,3.2,3.2,5.2,3.2),DR:5.5,notes:'Twin son of Daemon I; died at the Redgrass Field.'},
  {id:'daemon-ii-blackfyre',name:'Daemon II Blackfyre',houses:['Blackfyre'],gender:'M',birth:193,age:26,scores:S(4.2,3.2,5.2,7.2,7.5,6.5,3.2,3.2,6.2,3.2),DR:5.2,notes:'Led the Second Blackfyre Rebellion; captured at the tourney at Whitewalls and executed.'},
  {id:'haegon-blackfyre',name:'Haegon Blackfyre',houses:['Blackfyre'],gender:'M',birth:213,age:23,scores:S(4.2,3.2,5.2,7.2,7.5,6.5,3.2,3.2,6.2,3.2),DR:5.5,notes:'Led the Third Blackfyre Rebellion; captured and executed despite being promised mercy.'},
  {id:'daemon-iii-blackfyre',name:'Daemon III Blackfyre',houses:['Blackfyre'],gender:'M',birth:228,age:32,scores:S(3.2,3.2,4.2,6.2,6.5,5.5,3.2,3.2,5.2,3.2),DR:5.0,notes:'Led the Fourth Blackfyre Rebellion; died at the Battle of Whitewalls.'},
  {id:'calla-blackfyre',name:'Calla Blackfyre',houses:['Blackfyre'],gender:'F',birth:175,age:65,scores:S(4.2,4.2,4.2,2.2,2.2,1.5,4.2,3.2,3.2,4.2),DR:3.2,notes:'Daughter of Daemon I Blackfyre; wed Bittersteel and kept the Blackfyre claim alive in exile.'},
  // â”€â”€ NIGHT'S WATCH â”€â”€
  {id:'jeor',name:'Jeor Mormont',houses:["Night's Watch"],gender:'M',birth:230,age:70,scores:S(1.0,6.2,1.0,8.5,6.5,7.5,6.2,1.0,7.2,1.0),notes:'Lord Commander; outstanding.',isNW:true},
  {id:'waymar',name:'Waymar Royce',houses:["Night's Watch"],gender:'M',birth:278,age:20,scores:S(1.0,3.2,1.0,4.2,5.5,4.5,3.2,1.0,3.2,1.0),notes:'Young noble ranger; killed by a White Walker.',isNW:true},
  {id:'donal-noye',name:'Donal Noye',houses:["Night's Watch"],gender:'M',birth:258,age:42,scores:S(1.0,4.2,1.0,7.5,8.5,7.5,4.2,1.0,6.2,1.0),notes:'One-armed blacksmith; masterminded Castle Black\'s defense.',isNW:true},
  {id:'yoren',name:'Yoren',houses:["Night's Watch"],gender:'M',birth:250,age:49,scores:S(1.0,3.2,1.0,5.2,6.5,4.5,3.2,1.0,4.2,1.0),notes:'Recruiter; kept Arya safe.',isNW:true},
  {id:'sam-tarly-nw',name:'Samwell Tarly',houses:["Night's Watch"],gender:'M',birth:283,age:17,scores:S(1.0,7.5,1.0,1.2,1.2,1.2,7.5,1.0,4.2,1.0),isNW:true,notes:'Brilliant scholar; slew a White Walker with a dragonglass dagger; Night\'s Watch vows forfeit inheritance and lordship.'},
  {id:'sam-tarly-bann',name:'Samwell Tarly',houses:['Bannermen'],gender:'M',birth:283,age:17,scores:S(5.2,7.5,4.2,1.2,1.2,1.2,7.5,3.2,4.2,5.2),notes:'Rightful heir of Horn Hill; sent to Oldtown to become a maester.'},
  {id:'edd',name:'Edd Tollett (Dolorous Edd)',houses:["Night's Watch"],gender:'M',birth:268,age:32,scores:S(1.0,4.2,1.0,5.2,5.5,4.5,4.2,1.0,3.2,1.0),notes:'Briefly Lord Commander.',isNW:true},
  {id:'alliser',name:'Ser Alliser Thorne',houses:["Night's Watch"],gender:'M',birth:255,age:45,scores:S(1.0,4.2,1.0,6.5,7.5,5.5,4.2,1.0,4.2,1.0),notes:'Harsh but effective trainer; commanded the Wall\'s defense during the wildling assault; Master-at-Arms and acting Lord Commander.',isNW:true},
  {id:'grenn',name:'Grenn',houses:["Night's Watch"],gender:'M',birth:283,age:17,scores:S(1.0,2.2,1.0,5.2,7.5,5.5,2.2,1.0,5.2,1.0),notes:'Loyal ranger and one of Jon Snow\'s closest brothers; held the inner gate of Castle Black against Mag the Mighty with only three companions, giving his life to stop the giant.',isNW:true},
  {id:'pyp',name:'Pypar (Pyp)',houses:["Night's Watch"],gender:'M',birth:285,age:15,scores:S(1.0,2.2,1.0,4.5,6.5,4.5,3.2,1.0,5.2,1.0),notes:'Quick-witted steward and skilled archer; one of Jon Snow\'s closest friends at the Wall; killed by Ygritte\'s arrow during the Battle of Castle Black.',isNW:true},
  {id:'bowen-marsh',name:'Bowen Marsh',houses:["Night's Watch"],gender:'M',birth:245,age:55,scores:S(1.0,5.2,1.0,3.2,2.2,2.2,7.5,4.2,3.2,1.0),notes:'Lord Steward of the Night\'s Watch; methodical and loyal to the Watch\'s traditions above all else; organized Castle Black\'s supplies and logistics with precision; ultimately conspired with other officers to assassinate Jon Snow, believing the Lord Commander had forsaken the Watch\'s duty.',isNW:true},
  {id:'othell-yarwyck',name:'Othell Yarwyck',houses:["Night's Watch"],gender:'M',birth:245,age:55,scores:S(1.0,3.2,1.0,3.2,2.2,2.2,6.5,3.2,3.2,1.0),notes:'First Builder of the Night\'s Watch; responsible for maintaining the Wall\'s towers, keeps, and fortifications; steady and capable administrator; one of the officers who turned on Jon Snow.',isNW:true},
  {id:'cotter-pyke',name:'Cotter Pyke',houses:["Night's Watch"],gender:'M',birth:248,age:52,scores:S(1.0,4.2,1.0,7.5,6.5,6.5,5.2,3.2,5.2,1.0),notes:'Commander of Eastwatch-by-the-Sea; baseborn and foul-tempered but a capable naval commander; led the Night\'s Watch fleet on the mission to rescue the Free Folk from Hardhome.',isNW:true},
  {id:'denys-mallister',name:'Ser Denys Mallister',houses:["Night's Watch"],gender:'M',birth:225,age:75,scores:S(1.0,5.2,1.0,7.5,7.5,7.5,5.2,3.2,6.2,1.0),notes:'Commander of the Shadow Tower; veteran ranger and officer of the Night\'s Watch; a major candidate for Lord Commander after Jeor Mormont\'s death; honorable and militarily accomplished.',isNW:true},
  // â”€â”€ ESSOS â”€â”€
  {id:'varys',name:'Varys (The Spider)',houses:['Essos'],gender:'M',birth:260,age:40,scores:S(5.2,9.5,1.2,2.2,1.2,1.2,9.5,4.2,9.5,2.2),notes:'Extraordinary spymaster.'},
  {id:'jaqen',name:"Jaqen H'ghar",houses:['Essos'],gender:'M',birth:260,age:40,scores:S(3.2,6.2,1.2,4.5,9.5,8.5,6.2,1.2,8.2,2.2),notes:'Faceless Man; master assassin.'},
  {id:'daario',name:'Daario Naharis',houses:['Essos'],gender:'M',birth:274,age:26,scores:S(4.2,4.2,2.2,8.5,8.5,7.5,4.2,4.2,7.2,5.2),notes:'Capable mercenary commander.'},
  {id:'grey-worm',name:'Grey Worm',houses:['Essos'],gender:'M',birth:278,age:22,scores:S(2.2,3.2,1.2,8.5,9.5,8.5,3.2,1.2,7.2,2.2),notes:'Exceptional Unsullied tactical commander.'},
  {id:'syrio',name:'Syrio Forel',houses:['Essos'],gender:'M',birth:263,age:37,scores:S(3.2,4.2,2.2,5.5,9.8,8.5,4.2,2.2,7.2,3.2),notes:'First Sword of Braavos; greatest water dancer alive.'},
  {id:'jorah',name:'Jorah Mormont',houses:['Essos'],gender:'M',birth:255,age:45,scores:S(6.2,7.0,4.2,7.5,8.5,7.5,8.0,4.2,7.2,6.2),notes:'Former lord; Daenerys\'s most trusted advisor.'},
  {id:'missandei',name:'Missandei',houses:['Essos'],gender:'F',birth:291,age:9,scores:S(4.2,8.5,2.2,1.2,1.2,1.2,8.5,2.2,6.2,6.2),notes:'Extraordinary linguist; Daenerys\'s most trusted.'},
  {id:'melisandre',name:'Melisandre',houses:['Magic'],gender:'F',birth:-200,age:400,scores:S(3.2,6.2,1.2,4.2,3.2,3.2,6.2,1.2,8.2,2.2),notes:'Red Priestess; centuries old through the power of R\'hllor.'},
  {id:'quaithe',name:'Quaithe',houses:['Essos'],gender:'F',birth:260,age:40,scores:S(2.2,3.2,1.2,1.2,2.2,2.2,5.2,1.2,3.2,2.2),notes:'Shadowbinder from Asshai; appeared to Daenerys in Qarth with cryptic prophecies; true identity unknown.'},
  {id:'larra-rogare',name:'Larra Rogare',houses:['Essos'],gender:'F',birth:142,age:33,scores:S(6.2,7.2,6.2,2.2,1.2,1.2,7.2,9.2,7.2,8.2),notes:'Lyseni banking heiress; married Viserys II; her family\'s wealth briefly dominated the Iron Throne\'s finances before they were driven out by Westerosi lords.'},
  {id:'lysandro-rogare',name:'Lysandro Rogare',houses:['Essos'],gender:'M',birth:118,age:47,scores:S(7.2,6.2,3.2,2.2,1.2,1.2,7.2,10.0,8.2,4.2),notes:'Head of the Rogare Bank of Lys; one of the wealthiest men in the known world; his financial power gave him enormous leverage over the Iron Throne during the regency of Aegon III.'},
  {id:'lysaro-rogare',name:'Lysaro Rogare',houses:['Essos'],gender:'M',birth:138,age:37,scores:S(5.2,4.2,3.2,2.2,1.2,1.2,6.2,8.2,6.2,3.2),notes:"Lysandro's son; came to King's Landing alongside his sister Larra during Aegon III's regency, serving as both emissary and political asset of the Rogare banking dynasty."},
  {id:'drazenko-rogare',name:'Drazenko Rogare',houses:['Essos'],gender:'M',birth:135,age:40,scores:S(4.2,4.2,2.2,3.2,2.2,2.2,5.2,7.2,5.2,3.2),notes:"Member of the Rogare family of Lys; held in King's Landing as a 'guest' during the regency of Aegon III, a gilded hostage ensuring his family's cooperation with the Iron Throne."},
  {id:'the-waif',name:'The Waif',houses:['Essos','Magic'],gender:'F',birth:275,age:25,scores:S(2.2,3.2,1.2,4.5,8.5,7.5,2.2,1.2,2.2,2.2),notes:'A Faceless assassin and trainer at the House of Black and White; an orphan girl who gave herself to the Many-Faced God and became one of its most devoted servants; relentlessly pursued Arya Stark through the streets of Braavos.'},
  {id:'hizdahr-zo-loraq',name:'Hizdahr zo Loraq',houses:['Essos'],gender:'M',birth:270,age:30,scores:S(6.2,5.2,3.2,3.2,1.2,1.2,6.2,7.2,6.2,7.2),notes:'Meereenese nobleman of ancient lineage; negotiated the reopening of the fighting pits with Daenerys and married her as a political compromise; maneuvered skillfully between the Great Masters and Daenerys\'s court before his role in the Sons of the Harpy conspiracy was left unresolved.'},
  {id:'xaro-xhoan-daxos',name:'Xaro Xhoan Daxos',houses:['Essos'],gender:'M',birth:260,age:40,scores:S(6.2,6.2,4.2,3.2,2.2,2.2,6.2,10.0,7.2,5.2),notes:'Wealthiest merchant prince in Qarth; member of the Thirteen; opened the gates of Qarth to Daenerys.'},
  {id:'pyat-pree',name:'Pyat Pree',houses:['Essos','Magic'],gender:'M',unlimited:true,birth:255,age:44,scores:S(3.2,4.2,2.2,2.2,2.2,2.2,5.2,3.2,3.2,2.2),notes:'Warlock of Qarth and one of the warlocks of the House of the Undying; pale as a corpse from years of drinking shade of the evening; lured Daenerys into the House of the Undying to feed on her dragon-touched power.'},
  {id:'cohollo',name:'Cohollo',houses:['Essos'],gender:'M',birth:255,age:44,scores:S(2.2,2.2,2.2,6.5,8.5,6.5,2.2,2.2,5.2,2.2),notes:'Senior bloodrider of Khal Drogo; one of three sworn to die for him.'},
  {id:'qotho',name:'Qotho',houses:['Essos'],gender:'M',birth:258,age:41,scores:S(2.2,2.2,2.2,7.5,9.5,7.5,2.2,2.2,5.2,2.2),notes:'Fierce bloodrider of Khal Drogo; killed by Jorah Mormont defending Daenerys.'},
  {id:'haggo',name:'Haggo',houses:['Essos'],gender:'M',birth:257,age:42,scores:S(2.2,2.2,2.2,6.5,8.5,6.5,2.2,2.2,4.2,2.2),notes:'Bloodrider of Khal Drogo; slain by Jorah Mormont during Mirri Maz Duur\'s treachery.'},
  {id:'khal-pono',name:'Khal Pono',houses:['Essos'],gender:'M',birth:255,age:45,scores:S(5.2,3.2,4.2,8.5,9.2,7.5,3.2,4.2,6.2,4.2),notes:'Great khal who seized part of Drogo\'s khalasar after his death; feared raider.'},
  {id:'khal-jhaqo',name:'Khal Jhaqo',houses:['Essos'],gender:'M',birth:252,age:48,scores:S(6.2,4.2,5.2,8.5,9.2,7.5,4.2,5.2,6.2,4.2),notes:'Took Drogo\'s khalasar after his death; enslaved his widows; one of the most powerful khals of his generation.'},
  {id:'khal-drogo',name:'Khal Drogo',houses:['Essos'],gender:'M',birth:260,age:30,scores:S(7.2,3.2,6.2,10.0,10.0,9.5,3.2,4.2,8.2,5.2),notes:'Greatest khal in Dothraki history; undefeated warlord; commanded 40,000 riders; slain by a wound treated with blood magic.'},
  {id:'racallio-ryndoon',name:'Racallio Ryndoon',houses:['Essos'],gender:'M',birth:96,age:50,scores:S(4.2,3.2,3.2,8.5,8.5,7.5,4.2,5.2,7.2,2.2),notes:'Pirate lord of the Stepstones; fierce fighter and naval commander; carved out a domain through force and cunning during the wars over the Stepstones.'},
  {id:'sharako-lohar',name:'Sharako Lohar',houses:['Essos'],gender:'M',birth:98,age:48,scores:S(4.2,3.2,3.2,8.5,8.5,7.5,3.2,5.2,7.2,2.2),notes:'Lyseni warlord and naval commander; fought for control of the Stepstones against Daemon Targaryen; brutal and feared raider.'},
  {id:'craghas-drahar',name:'Craghas Drahar (The Crabfeeder)',houses:['Essos'],gender:'M',birth:90,age:40,scores:S(4.2,3.2,3.2,8.5,6.5,6.5,3.2,4.2,5.2,2.2),notes:'Prince-Admiral of the Triarchy; terrorized the Stepstones by feeding captives to crabs at low tide; defeated and slain by Daemon Targaryen.'},
  {id:'strong-belwas',name:'Strong Belwas',houses:['Essos'],gender:'M',birth:265,age:35,scores:S(2.2,2.2,2.2,7.5,9.5,7.5,2.2,2.2,5.2,2.2),notes:'Former pit fighter from the fighting pits of Essos; sent by Illyrio Mopatis to serve as Daenerys Targaryen\'s sworn shield; bears one scar across his belly for every man he has killed; enormous strength and fearlessness in combat; ate the heart of the Champion of Meereen after defeating him; nearly killed by poisoned locusts at Daznak\'s Pit but survived.'},
  {id:'salladhor-saan',name:'Salladhor Saan',houses:['Essos'],gender:'M',birth:248,age:52,scores:S(3.2,3.2,1.2,6.5,4.2,3.5,4.2,7.2,7.2,2.2),notes:'Lysene pirate lord and sellsail; commanded a fleet of thirty ships; allied with Stannis Baratheon in exchange for gold and a promise of Casterly Rock; vain and flamboyant but a capable naval commander with a wide network of contacts across the Free Cities.'},
  // â”€â”€ BANNERMEN â”€â”€
  {id:'barristan',name:'Barristan Selmy (Old)',houses:['Bannermen'],gender:'M',birth:237,age:63,scores:S(1.0,6.2,1.0,9.5,9.8,10.0,5.2,3.2,9.2,1.0),notes:'Finest Kingsguard of his generation.'},
  {id:'arthur-dayne',name:'Arthur Dayne (Sword of the Morning)',houses:['Bannermen'],gender:'M',birth:262,age:32,scores:S(1.0,4.2,1.0,9.5,10.0,9.5,4.2,4.2,10.0,1.0),notes:'Greatest knight who ever lived (personal combat).'},
  {id:'littlefinger',name:'Petyr Baelish (Littlefinger)',houses:['Bannermen'],gender:'M',birth:268,age:32,scores:S(6.5,10.0,3.2,2.2,1.2,1.2,9.5,9.5,8.5,4.2),notes:'Most dangerous political mind in the realm. Lost a duel to Brandon Stark for Catelyn\'s hand.'},
  {id:'davos',name:'Davos Seaworth',houses:['Bannermen'],gender:'M',birth:260,age:40,scores:S(5.2,8.5,3.2,6.2,4.5,4.5,8.5,3.2,6.2,5.2),notes:'Wise, honest counsel.'},
  {id:'sandor',name:'Sandor Clegane (The Hound)',houses:['Bannermen'],gender:'M',birth:271,age:29,scores:S(2.2,2.2,2.2,6.5,9.2,7.5,2.2,2.2,6.2,3.2),notes:'One of the most feared personal fighters.'},
  {id:'gregor',name:'Gregor Clegane (The Mountain)',houses:['Bannermen'],gender:'M',birth:266,age:34,scores:S(1.2,1.2,1.2,5.5,9.7,9.2,1.2,2.2,7.2,1.2),notes:'Physically most powerful man in Westeros.'},
  {id:'randyll',name:'Randyll Tarly',houses:['Bannermen'],gender:'M',birth:255,age:45,scores:S(6.2,5.2,5.2,10.0,8.5,8.5,5.2,6.2,9.2,5.2),notes:'Potentially finest military commander. Never lost a battle.'},
  {id:'jon-connington',name:'Jon Connington',houses:['Bannermen'],gender:'M',birth:261,age:39,scores:S(7.2,8.5,5.2,8.5,5.2,7.2,8.5,4.2,8.2,5.2),notes:'Brilliant former Hand; won Battle of the Bells.'},
  {id:'beric',name:'Beric Dondarrion',houses:['Bannermen'],gender:'M',birth:271,age:29,scores:S(6.2,5.2,4.2,7.5,7.5,6.5,5.2,3.2,6.2,5.2),notes:'Led Brotherhood; resurrected.'},
  {id:'janos-slynt',name:'Janos Slynt',houses:['Bannermen'],gender:'M',birth:252,age:48,scores:S(1.2,2.2,1.2,2.2,2.2,1.5,4.2,5.2,2.2,1.2),notes:'Commander of the City Watch; accepted Lannister gold to betray Ned Stark; granted lordship of Harrenhal as payment; sent to the Wall by Tyrion; executed by Jon Snow for insubordination.'},
  {id:'podrick-payne',name:'Podrick Payne',houses:['Bannermen'],gender:'M',birth:283,age:17,scores:S(1.2,2.2,1.2,2.2,6.5,4.5,1.2,1.2,5.2,1.2),notes:'Squire to Tyrion Lannister and later Brienne of Tarth; killed three knights of the Kingsguard at the Battle of the Blackwater despite never having seen real combat; quietly talented and intensely loyal.'},
  {id:'ilyn-payne',name:'Ser Ilyn Payne',houses:['Bannermen'],gender:'M',birth:250,age:50,scores:S(1.2,1.2,1.2,4.5,8.5,6.5,1.2,1.2,1.2,1.2),notes:'King\'s Justice; royal executioner of the Iron Throne; had his tongue cut out on Aerys II\'s orders after boasting that Tywin Lannister truly ruled the realm; a fearsome swordsman who carried the Valyrian steel greatsword Ice after executing Eddard Stark.'},
  {id:'steffon-fossoway',name:'Ser Steffon Fossoway',houses:['Bannermen'],gender:'M',birth:183,age:26,scores:S(3.2,3.2,1.2,5.2,6.5,5.5,3.2,3.2,4.2,2.2),notes:'The Red Apple Fossoway; a capable knight who initially sided with Aerion Targaryen against Ser Duncan the Tall at Ashford; cousin to Raymun Fossoway; his cowardice in the trial of seven cost the Fossoway line prestige.'},
  {id:'raymun-fossoway-squire',name:'Raymun Fossoway (Squire)',houses:['Bannermen'],gender:'M',birth:195,age:14,scores:S(2.2,2.2,1.2,3.2,5.5,3.5,2.2,2.2,3.2,1.2),notes:'Squire cousin to Ser Steffon Fossoway; broke with his knight to support Ser Duncan the Tall at Ashford; fought in the trial of seven on Dunk\'s side; knighted on the field afterward by Prince Baelor Breakspear.'},
  {id:'raymun-fossoway-green-apple',name:'Raymun Fossoway (Green Apple)',houses:['Bannermen'],gender:'M',birth:195,age:25,scores:S(3.2,3.2,1.2,5.2,6.5,5.5,3.2,3.2,4.2,2.2),notes:'Ser Raymun Fossoway after his knighting at Ashford; chose the green apple to distinguish his branch from his Red Apple cousin Steffon; honoured for his courage in the trial of seven.'},
  {id:'humfrey-beesbury',name:'Ser Humfrey Beesbury',houses:['Bannermen'],gender:'M',birth:180,age:29,scores:S(3.2,3.2,1.2,5.2,7.5,5.5,3.2,3.2,4.2,2.2),notes:'Knight of House Beesbury; volunteered as one of Ser Duncan the Tall\'s champions in the trial of seven at Ashford Meadow; fought alongside Prince Baelor Breakspear in Dunk\'s defence.'},
  {id:'humfrey-hardyng',name:'Ser Humfrey Hardyng',houses:['Bannermen'],gender:'M',birth:180,age:29,scores:S(2.2,2.2,1.2,4.2,7.5,4.5,2.2,2.2,3.2,1.2),notes:'Knight who took the side of Prince Aerion Targaryen against Ser Duncan the Tall in the trial of seven at Ashford; fought and lost against Dunk\'s champions.'},
  {id:'donnel-duskendale',name:'Ser Donnel of Duskendale',houses:['Bannermen'],gender:'M',birth:178,age:31,scores:S(1.2,1.2,1.2,3.2,7.5,3.5,1.2,1.2,2.2,1.2),notes:'A minor knight who sided with Aerion Targaryen in the trial of seven at Ashford Meadow against Ser Duncan the Tall; one of five champions assembled to oppose Dunk.'},
  {id:'willem-wylde',name:'Ser Willem Wylde',houses:['Bannermen'],gender:'M',birth:178,age:31,scores:S(2.2,2.2,1.2,4.2,7.5,3.5,2.2,2.2,2.2,1.2),notes:'Knight who took the side of Prince Aerion Targaryen in the trial of seven at Ashford; opposed Ser Duncan the Tall alongside Humfrey Hardyng and others.'},
  {id:'roland-crakehall',name:'Ser Roland Crakehall',houses:['Bannermen'],gender:'M',birth:178,age:31,scores:S(2.2,2.2,1.2,5.2,7.5,4.5,2.2,2.2,3.2,1.2),notes:'Knight of House Crakehall who fought against Ser Duncan the Tall in the trial of seven at Ashford Meadow; one of Aerion Targaryen\'s champions.'},
  {id:'jojen-reed',name:'Jojen Reed',houses:['Bannermen','Magic'],gender:'M',birth:288,age:12,scores:S(2.2,3.2,1.2,1.2,1.2,1.2,4.2,1.2,6.2,1.2),notes:'Greenseer of the Neck and son of Lord Howland Reed; guided Bran Stark north of the Wall to find the Three-Eyed Raven; his green dreams showed him the future at great personal cost — he knew from childhood how his story would end.'},
  {id:'thoros-myr',name:'Thoros of Myr',houses:['Bannermen'],gender:'M',birth:271,age:29,scores:S(4.2,5.2,3.2,6.5,7.5,6.5,6.2,3.2,7.2,4.2),notes:'Red Priest of R\'hllor; gifted Beric Dondarrion six resurrections; formerly one of the finest fighters in Westeros.'},
  {id:'roose',name:'Roose Bolton',houses:['Bannermen'],gender:'M',birth:240,age:60,scores:S(7.2,8.2,4.2,7.5,4.5,3.5,8.2,5.2,7.2,3.2),notes:'Cold, brilliant administrator.'},
  {id:'greatjon',name:'Greatjon Umber',houses:['Bannermen'],gender:'M',birth:250,age:50,scores:S(6.2,4.2,5.2,8.5,9.2,7.5,3.2,5.2,7.2,4.2),notes:'Lost fingers to Ghost and kept laughing.'},
  {id:'yohn-royce',name:'Yohn Royce (Bronze Yohn)',houses:['Bannermen'],gender:'M',birth:248,age:52,scores:S(7.2,6.2,5.2,7.5,8.5,7.5,6.2,6.2,7.2,6.2),notes:'Respected lord; renowned knight.'},
  {id:'lyonel-strong',name:'Lyonel Strong (Lord of Harrenhal)',houses:['Bannermen'],gender:'M',birth:72,age:48,scores:S(7.2,9.5,5.2,6.2,4.2,3.5,9.5,6.2,8.2,6.2),notes:'Hand of Viserys I; brilliant.'},
  {id:'harwin-strong',name:'Harwin Strong (Breakbones)',houses:['Bannermen'],gender:'M',birth:95,age:25,scores:S(5.2,4.2,6.2,7.5,9.5,8.5,4.2,4.2,7.2,5.2),notes:'Strongest man in Seven Kingdoms.'},
  {id:'larys-strong',name:'Larys Strong (The Clubfoot)',houses:['Bannermen'],gender:'M',birth:98,age:38,scores:S(5.2,9.5,3.2,2.2,1.2,1.2,9.5,4.2,7.2,2.2),notes:'Most dangerous political operator.'},
  {id:'wyman-manderly',name:'Wyman Manderly',houses:['Bannermen'],gender:'M',birth:246,age:54,scores:S(8.2,8.5,4.2,6.2,2.2,2.2,8.2,8.5,9.2,3.2),notes:'700 lbs; the canniest lord in the North.'},
  {id:'tytos-blackwood',name:'Tytos Blackwood',houses:['Bannermen'],gender:'M',birth:258,age:42,scores:S(7.2,6.2,5.2,7.5,6.2,5.5,6.2,6.2,7.2,6.2),notes:'Last Riverlord to surrender; honourable.'},
  {id:'benjicot',name:'Benjicot Blackwood (Bloody Ben)',houses:['Bannermen'],gender:'M',birth:118,age:37,scores:S(6.2,5.2,6.2,8.5,7.5,7.5,5.2,5.2,7.2,5.2),notes:'Took command at 11; brilliant Dance commander.'},
  {id:'criston-cole',name:'Ser Criston Cole (The Kingmaker)',houses:['Bannermen'],gender:'M',birth:88,age:43,scores:S(1.0,5.2,1.0,8.5,9.5,9.5,5.2,3.2,7.2,1.0),notes:'Orchestrated Aegon II\'s coronation.'},
  {id:'lyman-beesbury',name:'Lyman Beesbury',houses:['Bannermen'],gender:'M',birth:60,age:69,scores:S(5.2,7.5,3.2,2.2,1.2,1.2,7.5,5.2,5.2,4.2),notes:'Only council member to refuse Aegon II\'s coronation; died for it.'},
  {id:'brienne',name:'Brienne of Tarth',houses:['Bannermen'],gender:'F',birth:280,age:20,scores:S(6.2,5.2,5.2,7.5,9.5,8.5,5.2,4.2,7.2,5.2),notes:'Defeated Loras and the Hound in personal combat.'},
  {id:'ashara-dayne',name:'Ashara Dayne',houses:['Bannermen'],gender:'F',birth:265,age:19,scores:S(5.2,5.2,4.2,2.2,2.2,2.2,5.2,4.2,4.2,5.2),notes:'Intelligent; died young.'},
  {id:'alys-karstark',name:'Alys Karstark',houses:['Bannermen'],gender:'F',birth:283,age:17,scores:S(5.2,5.2,5.2,3.2,3.2,2.5,5.2,4.2,4.2,5.2),notes:'Brave and politically shrewd.'},
  {id:'lyanna-mormont',name:'Lyanna Mormont',houses:['Bannermen'],gender:'F',birth:295,age:10,scores:S(7.2,6.2,8.5,5.5,6.5,4.5,6.2,4.2,6.2,5.2),notes:'Killed a giant wight before dying. Extraordinary future potential.'},
  {id:'alysanne-blackwood',name:'Alysanne Blackwood (Black Aly)',houses:['Bannermen'],gender:'F',birth:121,age:50,scores:S(5.2,5.2,5.2,3.2,3.2,2.5,5.2,4.2,4.2,6.2),notes:'Married Cregan Stark at end of Dance.'},
  {id:'alys-rivers',name:'Alys Rivers',houses:['Bannermen','Targaryen'],gender:'F',birth:98,age:52,scores:S(5.2,6.2,3.2,3.2,3.2,2.5,6.2,2.2,5.2,5.2),notes:'Bastard of Lyonel Strong; greenseer; became Aemond\'s queen.'},
  {id:'meera-reed',name:'Meera Reed',houses:['Bannermen'],gender:'F',birth:284,age:16,scores:S(4.2,4.2,4.2,5.5,7.5,6.5,4.2,2.2,5.2,4.2),notes:'Killed a White Walker with dragonglass spear.'},
  {id:'darkstar',name:'Ser Gerold Dayne (Darkstar)',houses:['Bannermen'],gender:'M',birth:275,age:25,scores:S(3.2,3.2,4.2,7.5,9.5,8.5,2.2,3.2,3.2,4.2),notes:'Lord of High Hermitage; called the most dangerous man in Dorne by Areo Hotah; attacked Princess Myrcella.'},
  {id:'areo-hotah',name:'Areo Hotah',houses:['Bannermen'],gender:'M',birth:248,age:52,scores:S(3.2,3.2,2.2,7.5,9.5,7.5,3.2,3.2,5.2,3.2),notes:'Captain of the Guard of Sunspear; master of the longaxe; utterly loyal to Doran Martell.'},
  // â”€â”€ KINGSGUARD (historical) â”€â”€
  {id:'septon-barth',name:'Septon Barth',houses:['Bannermen'],gender:'M',birth:35,age:63,scores:S(6.2,10.0,3.2,1.2,1.2,1.2,10.0,5.2,9.2,5.2),notes:'Hand of Jaehaerys I; by most measures the greatest Hand in history; former blacksmith\'s son.'},
  {id:'ryam-redwyne',name:'Ser Ryam Redwyne',houses:['Bannermen'],gender:'M',birth:42,age:51,scores:S(1.0,4.2,1.0,7.5,9.5,9.7,3.2,3.2,8.2,1.0),notes:'Lord Commander of the Kingsguard; considered one of the finest to ever serve.'},
  {id:'lucamore-strong',name:'Ser Lucamore Strong (The Lusty)',houses:['Bannermen'],gender:'M',birth:38,age:37,scores:S(1.0,2.2,1.0,5.2,7.5,6.5,3.2,3.2,5.2,1.0),notes:'Kingsguard stripped of his white cloak for secretly keeping 3 wives and 16 children; sent to the Night\'s Watch.'},
  {id:'harrold-westerling',name:'Ser Harrold Westerling',houses:['Bannermen'],gender:'M',birth:198,age:72,scores:S(1.0,4.2,1.0,6.5,8.5,9.0,4.2,3.2,7.2,1.0),notes:'Lord Commander of the Kingsguard under Aegon V; long and distinguished career.'},
  {id:'erryk-cargyll',name:'Ser Erryk Cargyll',houses:['Bannermen'],gender:'M',birth:95,age:35,scores:S(1.0,3.2,1.0,5.5,7.5,6.5,3.2,2.2,5.2,1.0),notes:'Twin Kingsguard who sided with Rhaenyra in the Dance; killed his twin Arryk while both dealt mortal blows.'},
  {id:'arryk-cargyll',name:'Ser Arryk Cargyll',houses:['Bannermen'],gender:'M',birth:95,age:35,scores:S(1.0,3.2,1.0,5.5,7.5,6.5,3.2,2.2,5.2,1.0),notes:'Twin Kingsguard who sided with Aegon II in the Dance; killed his twin Erryk while both dealt mortal blows.'},
  {id:'lorent-marbrand',name:'Ser Lorent Marbrand',houses:['Bannermen'],gender:'M',birth:92,age:38,scores:S(1.0,3.2,1.0,5.2,7.5,5.5,3.2,2.2,5.2,1.0),notes:'Kingsguard for Aegon II during the Dance of the Dragons.'},
  {id:'steffon-darklyn',name:'Ser Steffon Darklyn',houses:['Bannermen'],gender:'M',birth:93,age:37,scores:S(1.0,3.2,1.0,5.2,7.5,5.5,3.2,2.2,5.2,1.0),notes:'Kingsguard for Rhaenyra during the Dance of the Dragons.'},
  {id:'oswell-whent',name:'Ser Oswell Whent',houses:['Bannermen'],gender:'M',birth:258,age:25,scores:S(1.0,3.2,1.0,6.5,8.5,7.5,3.2,2.2,6.2,1.0),notes:'Kingsguard under Aerys II; died at the Tower of Joy.'},
  {id:'jonothor-darry',name:'Ser Jonothor Darry',houses:['Bannermen'],gender:'M',birth:255,age:28,scores:S(1.0,3.2,1.0,5.2,7.5,5.5,3.2,2.2,5.2,1.0),notes:'Kingsguard under Aerys II; died during Robert\'s Rebellion.'},
  {id:'balon-swann',name:'Ser Balon Swann',houses:['Bannermen'],gender:'M',birth:272,age:28,scores:S(1.0,4.2,1.0,6.5,8.5,7.5,3.2,3.2,6.2,1.0),notes:'Capable, principled Kingsguard under Joffrey and Tommen; excellent jouster and tourney knight.'},
  {id:'arys-oakheart',name:'Ser Arys Oakheart',houses:['Bannermen'],gender:'M',birth:272,age:28,scores:S(1.0,3.2,1.0,5.2,7.5,5.5,3.2,2.2,5.2,1.0),notes:'Kingsguard; assigned to protect Myrcella in Dorne; died there.'},
  {id:'mandon-moore',name:'Ser Mandon Moore',houses:['Bannermen'],gender:'M',birth:265,age:34,scores:S(1.0,2.2,1.0,5.5,8.5,6.5,2.2,2.2,5.2,1.0),notes:'Cold and dangerous Kingsguard; attempted to assassinate Tyrion during the Battle of the Blackwater.'},
  {id:'meryn-trant',name:'Ser Meryn Trant',houses:['Bannermen'],gender:'M',birth:268,age:32,scores:S(1.0,2.2,1.0,4.5,6.5,4.5,2.2,2.2,4.2,1.0),notes:'Mediocre Kingsguard; accused of slaying Syrio Forel; eventually killed by Arya Stark.'},
  {id:'boros-blount',name:'Ser Boros Blount',houses:['Bannermen'],gender:'M',birth:262,age:38,scores:S(1.0,2.2,1.0,3.5,5.5,3.5,2.2,2.2,3.2,1.0),notes:'Cowardly Kingsguard; repeatedly humiliated under Joffrey; stripped and restored.'},
  {id:'preston-greenfield',name:'Ser Preston Greenfield',houses:['Bannermen'],gender:'M',birth:268,age:31,scores:S(1.0,2.2,1.0,5.2,6.5,4.5,2.2,2.2,4.2,1.0),notes:'Kingsguard; killed during the King\'s Landing bread riots.'},
  {id:'robert-strong',name:'Ser Robert Strong',houses:['Bannermen'],gender:'M',birth:266,age:34,scores:S(1.0,1.2,1.0,4.5,10.0,8.5,1.2,1.2,6.2,1.0),notes:'Cersei\'s silent champion; widely believed to be Gregor Clegane reanimated by Qyburn; nigh-unstoppable.'},
  // â”€â”€ LORDS & NOTABLES â”€â”€
  {id:'howland-reed',name:'Howland Reed',houses:['Bannermen'],gender:'M',birth:266,age:34,scores:S(6.2,6.2,4.2,6.2,7.5,6.5,5.2,3.2,6.2,5.2),notes:'Lord of Greywater Watch; sole survivor of the Tower of Joy; Ned Stark\'s most trusted friend.'},
  {id:'ramsay-bolton',name:'Ramsay Bolton',houses:['Bannermen'],gender:'M',birth:280,age:20,scores:S(3.2,2.2,4.2,7.5,7.5,6.5,2.2,3.2,4.2,2.2),notes:'Legitimized bastard; brutal and effective warlord; sadistic to enemies and prisoners.'},
  {id:'maege-mormont',name:'Maege Mormont',houses:['Bannermen'],gender:'F',birth:262,age:38,scores:S(6.2,5.2,5.2,6.5,7.5,6.5,5.2,3.2,6.2,5.2),notes:'Lady of Bear Island; fought in the War of Five Kings; raised her daughters as warriors.'},
  {id:'myles-toyne',name:'Myles Toyne (Blackheart)',houses:['Bannermen'],gender:'M',birth:248,age:45,scores:S(5.2,5.2,4.2,7.5,8.5,8.5,5.2,5.2,7.2,4.2),notes:'Captain-General of the Golden Company; formidable fighter; maintained Bittersteel\'s martial tradition.'},
  {id:'addam-marbrand',name:'Ser Addam Marbrand',houses:['Bannermen'],gender:'M',birth:262,age:38,scores:S(4.2,4.2,4.2,7.5,7.5,6.5,4.2,5.2,6.2,4.2),notes:'Lannister cavalry commander; skilled jouster and fighter; one of Jaime Lannister\'s closest allies.'},
  {id:'qyburn',name:'Qyburn',houses:['Bannermen'],gender:'M',birth:248,age:52,scores:S(2.2,5.2,1.2,1.2,1.2,1.2,5.2,3.2,4.2,1.2),notes:'Former maester stripped of his chain for unethical experiments; Cersei\'s master of whispers; reanimated Gregor.'},
  {id:'rickard-karstark',name:'Rickard Karstark',houses:['Bannermen'],gender:'M',birth:240,age:59,scores:S(5.2,4.2,5.2,6.5,6.5,5.5,3.2,4.2,5.2,4.2),notes:'Lord of Karhold; marched under Robb Stark; executed for killing Lannister prisoners.'},
  {id:'domeric-bolton',name:'Domeric Bolton',houses:['Bannermen'],gender:'M',birth:284,age:15,scores:S(5.2,4.2,6.2,5.5,6.5,5.5,4.2,4.2,5.2,5.2),notes:'Roose Bolton\'s trueborn heir; skilled musician, rider, and fighter; likely poisoned by Ramsay.'},
  {id:'harry-strickland',name:'Harry Strickland',houses:['Bannermen'],gender:'M',birth:258,age:42,scores:S(4.2,4.2,4.2,5.5,5.5,5.5,4.2,4.2,5.2,4.2),notes:'Captain-General of the Golden Company at time of Aegon\'s invasion; cautious, less gifted than predecessors.'},
  {id:'joffrey-doggett',name:'Ser Joffrey Doggett (Red Dog of the Hills)',houses:['Bannermen'],gender:'M',birth:15,age:28,scores:S(1.0,3.2,1.0,7.5,8.5,7.5,3.2,3.2,6.2,1.0),notes:'Grand Captain of the Warrior\'s Sons in 43 AC; dominated the hill country north of the Golden Tooth during the Faith Militant uprising; joined Jaehaerys I\'s Kingsguard and slew two assassins threatening Queen Alysanne at Maidenpool.'},
  {id:'arlan-pennytree',name:'Ser Arlan of Pennytree',houses:['Bannermen'],gender:'M',birth:149,age:60,scores:S(4.2,4.2,4.2,4.5,6.5,5.5,4.2,3.2,6.2,4.2),notes:'Hedge knight; master and teacher of Duncan the Tall; kind, honorable, and respected; saw the last living dragon as a boy; died of a chill on the road to Ashford in 209 AC.'},
  {id:'rohanne-webber',name:'Rohanne Webber (The Red Widow)',houses:['Bannermen'],gender:'F',birth:185,age:35,scores:S(7.2,6.2,7.2,4.2,4.2,3.5,6.2,6.2,7.2,7.2),notes:'Lady of Coldmoat; survived five husbands (rumors of poisoning never proven); fiercely intelligent ruler; settled the Osgrey conflict; later married Lord Gerold Lannister and became an ancestress of Tywin.'},
  {id:'glendon-ball',name:'Ser Glendon Ball (Glendon Flowers)',houses:['Bannermen'],gender:'M',birth:197,age:22,scores:S(3.2,3.2,3.2,5.2,8.5,7.5,2.2,2.2,4.2,3.2),notes:'Alleged bastard son of Fireball; claimed his father\'s blazing arms; framed for dragon egg theft at Whitewalls in 219 AC; unhorsed Daemon II Blackfyre in a joust while still reeling from torture to prove his innocence.'},
  {id:'robyn-rhysling',name:'Ser Robyn Rhysling',houses:['Bannermen'],gender:'M',birth:180,age:31,scores:S(3.2,3.2,3.2,5.2,7.5,6.5,2.2,2.2,5.2,3.2),notes:'Knight who fought on Duncan the Tall\'s side in the Trial of Seven at Ashford Meadow (209 AC); unhorsed Prince Daeron the Drunken in combat before being struck down himself.'},
  {id:'denys-darklyn',name:'Denys Darklyn',houses:['Bannermen'],gender:'M',birth:240,age:37,scores:S(7.2,5.2,5.2,4.2,2.2,2.2,6.2,6.2,5.2,4.2),notes:'Lord of Duskendale; held King Aerys II prisoner for six months during the Defiance of Duskendale (277 AC), demanding expanded trade rights; his gamble failed when Ser Barristan Selmy infiltrated the city and freed the king; executed along with all of House Darklyn.'},
  {id:'gwayne-gaunt',name:'Ser Gwayne Gaunt',houses:['Bannermen'],gender:'M',birth:255,age:22,scores:S(3.2,3.2,3.2,4.5,6.5,5.5,3.2,3.2,4.2,3.2),notes:'Knight of House Gaunt in royal service; slain by Ser Symon Hollard during the Defiance of Duskendale (277 AC).'},
  {id:'symon-hollard',name:'Ser Symon Hollard',houses:['Bannermen'],gender:'M',birth:248,age:29,scores:S(3.2,3.2,3.2,5.5,8.5,6.5,3.2,3.2,4.2,3.2),notes:'Master-at-arms of Duskendale under Lord Denys Darklyn; slew Ser Gwayne Gaunt during the Defiance of Duskendale; executed by Aerys II alongside most of House Hollard â€” only the boy Dontos Hollard was spared at Ser Barristan\'s plea.'},
  {id:'elissa-farman',name:'Elissa Farman',houses:['Bannermen'],gender:'F',birth:35,age:35,scores:S(5.2,5.2,6.2,3.2,2.2,2.2,6.2,6.2,7.2,6.2),notes:'Lady of Fair Isle; companion and intimate friend of Princess Rhaena Targaryen; stole three dragon eggs from Dragonstone and sold them to the Sealord of Braavos to fund her voyages; renamed her ship Sun Chaser and sailed west into the Sunset Sea, never to return.'},
  {id:'androw-farman',name:'Androw Farman',houses:['Bannermen'],gender:'M',birth:37,age:25,scores:S(3.2,3.2,3.2,2.2,2.2,2.2,4.2,5.2,3.2,2.2),notes:'Lord of Fair Isle; married Rhaena Targaryen (daughter of Aenys I) when she came to Fair Isle after Maegor\'s death; felt perpetually overlooked and unloved; secretly poisoned several of Rhaena\'s ladies before being exposed; leapt to his death from the battlements of Faircastle rather than face justice.'},
  {id:'jeyne-westerling',name:'Jeyne Westerling',houses:['Bannermen'],gender:'F',birth:283,age:17,scores:S(4.2,4.2,5.2,2.2,1.5,1.5,5.2,3.2,5.2,7.2),notes:'Daughter of Lord Gawen Westerling of the Crag; nursed Robb Stark through a wound after the fall of the Crag; Robb married her for love, breaking his betrothal vow to the Freys and costing him their alliance; her mother Sybell colluded with Tywin to ensure she bore no Stark heir; survived the Red Wedding as a widow.'},
  // â”€â”€ MAGIC â€” DRAGONS â”€â”€
  {id:'balerion',name:'Balerion (The Black Dread)',houses:['Dragon'],gender:'M',isDragon:true,birth:-126,age:226,scores:S(0,0,0,0,0,0,0,0,0,0),power:10.0,notes:'Largest dragon in recorded history; black scales with red fire; carried Aegon the Conqueror through his wars of conquest; so immense his shadow swallowed entire towns; died of old age in 94 AC.'},
  {id:'vhagar',name:'Vhagar',houses:['Dragon'],gender:'F',isDragon:true,birth:-52,age:182,scores:S(0,0,0,0,0,0,0,0,0,0),power:9.8,notes:'Second largest dragon ever; Visenya\'s mount during the Conquest; later bonded to Laena Velaryon and then Aemond Targaryen; devastated the Gullet and the Gods Eye; killed locked in combat with Caraxes over the Gods Eye.'},
  {id:'meraxes',name:'Meraxes',houses:['Dragon'],gender:'F',isDragon:true,birth:-52,age:38,scores:S(0,0,0,0,0,0,0,0,0,0),power:8.0,notes:'Rhaenys\'s dragon during the Conquest; silver-scaled; killed in Dorne when a scorpion bolt pierced her eye, leading to the brutal deaths of Rhaenys and years of Targaryen revenge campaigns against Dorne.'},
  {id:'quicksilver',name:'Quicksilver',houses:['Dragon'],gender:'M',isDragon:true,birth:7,age:28,scores:S(0,0,0,0,0,0,0,0,0,0),power:5.5,notes:'Aenys I\'s dragon; slain along with young Aegon the Elder when Balerion descended upon them during Maegor\'s war against his nephew; the scale of the defeat confirmed Maegor\'s supremacy.'},
  {id:'vermithor',name:'Vermithor (The Bronze Fury)',houses:['Dragon'],gender:'M',isDragon:true,birth:34,age:96,scores:S(0,0,0,0,0,0,0,0,0,0),power:9.0,notes:'Jaehaerys I\'s great bronze-and-tan dragon; third largest in existence at the time of the Dance; later claimed by Hugh Hammer; died fighting Seasmoke and Silverwing on the Lakeshore.'},
  {id:'silverwing',name:'Silverwing',houses:['Dragon'],gender:'F',isDragon:true,birth:36,age:95,scores:S(0,0,0,0,0,0,0,0,0,0),power:8.0,notes:'Alysanne Targaryen\'s gentle silver dragon; refused to cross the Wall even when commanded; later claimed by Ulf the White during the Dance; last seen nesting near the ruins of Harrenhal.'},
  {id:'caraxes',name:'Caraxes (The Blood Wyrm)',houses:['Dragon'],gender:'M',isDragon:true,birth:84,age:47,scores:S(0,0,0,0,0,0,0,0,0,0),power:9.2,notes:'Daemon Targaryen\'s blood-red dragon; serpentine, scarred, and savage; died locked in mortal combat with Vhagar above the Gods Eye, dragging her beneath the lake with him.'},
  {id:'syrax',name:'Syrax',houses:['Dragon'],gender:'F',isDragon:true,birth:96,age:34,scores:S(0,0,0,0,0,0,0,0,0,0),power:6.5,notes:'Rhaenyra Targaryen\'s yellow-scaled dragon; died attacking the Dragonpit during the riots of King\'s Landing when she broke free of her chains.'},
  {id:'meleys',name:'Meleys (The Red Queen)',houses:['Dragon'],gender:'F',isDragon:true,birth:90,age:40,scores:S(0,0,0,0,0,0,0,0,0,0),power:8.5,notes:'Rhaenys Targaryen\'s crimson and pink dragon; one of the fastest dragons of her age; killed fighting both Sunfyre and Vhagar simultaneously above Rook\'s Rest.'},
  {id:'sunfyre',name:'Sunfyre (The Golden)',houses:['Dragon'],gender:'M',isDragon:true,birth:115,age:15,scores:S(0,0,0,0,0,0,0,0,0,0),power:7.5,notes:'Aegon II\'s dragon; the most beautiful dragon that ever lived, with shimmering gold and pale pink scales; crippled fighting Meleys at Rook\'s Rest and again by Moondancer at Dragonstone; survived long enough to eat Rhaenyra before dying.'},
  {id:'seasmoke',name:'Seasmoke',houses:['Dragon'],gender:'M',isDragon:true,birth:114,age:16,scores:S(0,0,0,0,0,0,0,0,0,0),power:6.0,notes:'Laenor Velaryon\'s pale silver-grey dragon; later claimed by Addam of Hull; died fighting Vermithor and Silverwing above the Lakeshore.'},
  {id:'dreamfyre',name:'Dreamfyre',houses:['Dragon'],gender:'F',isDragon:true,birth:91,age:39,scores:S(0,0,0,0,0,0,0,0,0,0),power:5.0,notes:'Helaena Targaryen\'s blue-crested dragon; gentler than most; went berserk and brought down half the Dragonpit during the riots of King\'s Landing on the same night Helaena died.'},
  {id:'tessarion',name:'Tessarion (The Blue Queen)',houses:['Dragon'],gender:'F',isDragon:true,birth:118,age:12,scores:S(0,0,0,0,0,0,0,0,0,0),power:5.5,notes:'Daeron Targaryen\'s cobalt-blue dragon; fought for the Greens; killed at the Second Battle of the Tumbleton.'},
  {id:'moondancer',name:'Moondancer',houses:['Dragon'],gender:'F',isDragon:true,birth:118,age:12,scores:S(0,0,0,0,0,0,0,0,0,0),power:5.0,notes:'Baela Targaryen\'s young pale green dragon; fought the crippled Sunfyre over Dragonstone; both were mortally wounded; Baela survived the crash, badly burned.'},
  {id:'vermax',name:'Vermax',houses:['Dragon'],gender:'M',isDragon:true,birth:114,age:16,scores:S(0,0,0,0,0,0,0,0,0,0),power:4.5,notes:'Jacaerys Velaryon\'s dragon; died above the Gullet during the Battle of the Gullet.'},
  {id:'arrax',name:'Arrax',houses:['Dragon'],gender:'M',isDragon:true,birth:117,age:13,scores:S(0,0,0,0,0,0,0,0,0,0),power:3.5,notes:'Lucerys Velaryon\'s young dragon; killed by Vhagar above Shipbreaker Bay when Aemond lost control â€” the act that ignited the Dance of the Dragons.'},
  {id:'tyraxes',name:'Tyraxes',houses:['Dragon'],gender:'M',isDragon:true,birth:120,age:10,scores:S(0,0,0,0,0,0,0,0,0,0),power:3.5,notes:'Joffrey Velaryon\'s young dragon; killed in the Dragonpit during the riots of King\'s Landing.'},
  {id:'sheepstealer',name:'Sheepstealer',houses:['Dragon'],gender:'M',isDragon:true,birth:54,age:76,scores:S(0,0,0,0,0,0,0,0,0,0),power:5.5,notes:'A wild, mud-brown dragon that preyed on the sheep of Dragonstone for decades; eventually claimed by Nettles, a young girl who won his trust by bringing him freshly killed sheep each morning.'},
  {id:'cannibal',name:'The Cannibal',houses:['Dragon'],gender:'M',isDragon:true,birth:-50,age:181,scores:S(0,0,0,0,0,0,0,0,0,0),power:7.0,notes:'A vast, coal-black wild dragon that haunted Dragonstone for centuries; never bonded to any rider; earned his name by devouring other dragons\' eggs and hatchlings; vanished after the Dance of the Dragons.'},
  {id:'grey-ghost',name:'Grey Ghost',houses:['Dragon'],gender:'M',isDragon:true,birth:106,age:24,scores:S(0,0,0,0,0,0,0,0,0,0),power:4.0,notes:'A shy, pale grey wild dragon of Dragonstone that fed on fish from the sea; avoided all contact with humans; killed and partially eaten by Sunfyre.'},
  {id:'stormcloud',name:'Stormcloud',houses:['Dragon'],gender:'M',isDragon:true,birth:128,age:2,scores:S(0,0,0,0,0,0,0,0,0,0),power:2.0,notes:'The tiny dragon of Aegon the Younger; took a scorpion bolt through the neck saving the ship carrying the young prince during the Battle of the Gullet; died shortly after reaching shore.'},
  {id:'morghul',name:'Morghul',houses:['Dragon'],gender:'F',isDragon:true,birth:126,age:4,scores:S(0,0,0,0,0,0,0,0,0,0),power:2.5,notes:'The young dragon assigned to Princess Jaehaera; killed in the Dragonpit during the riots of King\'s Landing before she was ever ridden.'},
  {id:'shrykos',name:'Shrykos',houses:['Dragon'],gender:'M',isDragon:true,birth:124,age:6,scores:S(0,0,0,0,0,0,0,0,0,0),power:2.5,notes:'The young dragon of Prince Jaehaerys; killed in the Dragonpit during the riots of King\'s Landing on the same night Blood and Cheese murdered his rider.'},
  {id:'morning',name:'Morning',houses:['Dragon'],gender:'F',isDragon:true,birth:131,age:1,scores:S(0,0,0,0,0,0,0,0,0,0),power:1.5,notes:'The pale pink dragon of Rhaena Targaryen (daughter of Daemon and Laena); hatched just as the Dance ended â€” too late to fight; the last dragon born for a generation.'},
  {id:'drogon',name:'Drogon',houses:['Dragon'],gender:'M',isDragon:true,birth:298,age:2,scores:S(0,0,0,0,0,0,0,0,0,0),power:9.5,notes:'The largest of Daenerys\'s three dragons; black with red markings; named after Khal Drogo; carried Daenerys through the liberation of Slaver\'s Bay and the wars in Westeros; last seen flying east carrying Daenerys\'s body.'},
  {id:'rhaegal',name:'Rhaegal',houses:['Dragon'],gender:'M',isDragon:true,birth:298,age:2,scores:S(0,0,0,0,0,0,0,0,0,0),power:8.5,notes:'Green and bronze dragon named after Rhaegar Targaryen; briefly ridden by Jon Snow; killed by Euron Greyjoy\'s scorpion bolts in the Narrow Sea.'},
  {id:'viserion',name:'Viserion',houses:['Dragon'],gender:'M',isDragon:true,birth:298,age:2,scores:S(0,0,0,0,0,0,0,0,0,0),power:8.0,notes:'Cream and gold dragon named after Viserys Targaryen; killed beyond the Wall by the Night King and raised as an undead ice dragon; destroyed the Wall at Eastwatch with blue fire.'},
  {id:'viserion-aotd',name:'Viserion (Army of the Dead)',houses:['Dragon'],gender:'M',isDragon:true,birth:298,age:2,scores:S(0,0,0,0,0,0,0,0,0,0),power:10.0,notes:'Viserion reanimated by the Night King as an undead ice dragon; breathes blue fire that melts even the Wall; faster and more devastating than in life; the most terrifying weapon the Army of the Dead ever wielded.'},
  // â”€â”€ MAGIC â€” WARGS, GREENSEERS & FACELESS MEN â”€â”€
  {id:'helaena-magic',name:'Helaena Targaryen (Dreamer)',houses:['Magic'],gender:'F',birth:109,age:21,scores:S(2.0,2.2,3.2,1.2,1.2,1.2,2.2,5.0,2.2,3.2),DR:3.5,notes:'Queen of the Greens; prophetic dreamer whose utterances foretold the Dance of the Dragons years before it began; bonded to Dreamfyre and capable of seeing the future in ways she could not always understand or prevent.'},
  {id:'daeron-drunken-magic',name:'Daeron the Drunken (Dreamer)',houses:['Magic'],gender:'M',birth:194,age:31,scores:S(2.0,2.0,2.2,2.0,3.2,2.2,2.0,4.0,2.2,2.2),DR:2.0,notes:'Eldest son of King Maekar I; afflicted with prophetic visions he could neither control nor understand, he drowned the Sight in wine and died of the pox â€” a prince who might have been more than he was had fate been kinder.'},
  {id:'alys-rivers-magic',name:'Alys Rivers (Dreamer)',houses:['Magic','Targaryen'],gender:'F',birth:98,age:52,scores:S(5.2,6.2,3.2,3.2,3.2,2.5,6.2,2.2,5.2,5.2),notes:'Bastard of Lyonel Strong; a greenseer who was said to drink from the weirwood springs beneath Harrenhal and see visions in the black water; became Aemond Targaryen\'s queen and ruled Harrenhal in his name during the Dance of the Dragons.'},
  {id:'bran-tyr',name:'Bran Stark (Three-Eyed Raven)',houses:['Magic','Stark','Tully'],gender:'M',birth:290,age:17,scores:S(8.2,9.2,7.5,1.2,1.2,1.2,9.2,5.2,8.2,5.2),notes:'Bran Stark fully realized as the Three-Eyed Raven; Lord of Winterfell and chosen King of the Six Kingdoms; omniscient through greensight, he can see all of history across every weirwood in the land; an unparalleled counselor and ruler whose vast knowledge and detachment from earthly want make him a singular force in the game of thrones.'},
  {id:'arya-faceless',name:'Arya Stark (Faceless Man)',houses:['Stark','Tully','Magic'],gender:'F',birth:289,age:17,scores:S(3.2,4.5,5.2,4.5,9.5,8.5,4.2,3.2,7.2,4.2),notes:'Arya Stark having completed her training with the House of Black and White in Braavos; a No One who can wear any face and move unseen through the world; among the most lethal assassins alive, having slain the Night King himself at the Battle of Winterfell.'},
  {id:'jaqen-magic',name:"Jaqen H'ghar",houses:['Magic'],gender:'M',birth:260,age:40,scores:S(3.2,6.2,1.2,4.5,9.5,8.5,6.2,1.2,8.2,2.2),notes:'A Faceless Man of the House of Black and White in Braavos; one who wears many faces and serves the Many-Faced God; met Arya Stark on the Kingsroad and granted her three deaths, then vanished back into the world of shadows.'},

  // -- GREYJOY ADDITIONS --
  {id:"rodrik-greyjoy",name:"Rodrik Greyjoy",houses:["Greyjoy"],gender:"M",birth:265,age:25,scores:S(5.2,4.2,6.2,7.5,7.5,6.5,3.2,4.2,6.2,3.2),notes:"Eldest son of Balon Greyjoy; died assaulting Seagard in the Greyjoy Rebellion."},
  {id:"maron-greyjoy",name:"Maron Greyjoy",houses:["Greyjoy"],gender:"M",birth:267,age:23,scores:S(4.2,3.2,4.2,6.2,6.5,5.0,3.2,3.2,5.2,3.2),notes:"Second son of Balon Greyjoy; died in the burning of the Lannister fleet at Lannisport during the Greyjoy Rebellion."},
  {id:"alannys-harlaw",name:"Alannys Harlaw",houses:["Greyjoy","Bannermen"],gender:"F",birth:253,age:47,scores:S(4.2,3.2,4.2,1.2,1.2,1.2,4.2,4.2,5.2,5.2),notes:"Lady of Pyke; wife of Balon Greyjoy; lost her sanity with each son?s death and Theon?s capture."},
  {id:"gwynesse-harlaw",name:"Gwynesse Harlaw",houses:["Greyjoy","Bannermen"],gender:"F",birth:248,age:52,scores:S(4.2,4.2,3.2,1.2,1.2,1.2,5.2,4.2,5.2,4.2),notes:"Lady of the Ten Towers; wife of Rodrik Harlaw the Reader; shares her husband?s love of books."},
  // -- BANNERMEN ADDITIONS --
  {id:"dale-seaworth",name:"Dale Seaworth",houses:["Bannermen"],gender:"M",birth:278,age:22,scores:S(3.2,3.2,3.2,4.5,4.5,3.5,3.2,4.2,4.2,3.2),notes:"Eldest of Davos Seaworth?s sons; burned in the Battle of the Blackwater."},
  {id:"allard-seaworth",name:"Allard Seaworth",houses:["Bannermen"],gender:"M",birth:279,age:21,scores:S(3.2,3.2,3.2,4.5,5.2,4.2,3.2,3.2,4.2,3.2),notes:"Second son of Davos; captained a ship in Stannis?s fleet; burned in the Blackwater."},
  {id:"matthos-seaworth",name:"Matthos Seaworth",houses:["Bannermen"],gender:"M",birth:281,age:19,scores:S(2.2,2.2,2.2,3.2,3.2,3.2,4.2,3.2,3.2,3.2),notes:"Davos?s favorite son; devout follower of R?hllor; burned in the Blackwater."},
  {id:"maric-seaworth",name:"Maric Seaworth",houses:["Bannermen"],gender:"M",birth:282,age:18,scores:S(2.2,2.2,2.2,3.2,3.2,2.5,2.2,2.2,3.2,2.2),notes:"Fourth son of Davos Seaworth; burned in the Blackwater."},
  {id:"devan-seaworth",name:"Devan Seaworth",houses:["Bannermen"],gender:"M",birth:284,age:16,scores:S(1.5,2.2,2.2,2.2,2.2,2.2,1.5,1.5,2.2,1.5),notes:"Fifth son of Davos; squire to Stannis Baratheon; survived the Blackwater serving on shore."},
  {id:"stannis-seaworth",name:"Stannis Seaworth",houses:["Bannermen"],gender:"M",birth:287,age:13,scores:S(1.2,1.5,1.5,1.2,1.2,1.2,1.2,1.2,1.2,1.2),notes:"Sixth son of Davos; named after King Stannis; too young to fight."},
  {id:"steffon-seaworth",name:"Steffon Seaworth",houses:["Bannermen"],gender:"M",birth:289,age:11,scores:S(1.0,1.2,1.2,1.0,1.0,1.0,1.0,1.0,1.0,1.0),notes:"Youngest son of Davos Seaworth; a small child during the War of the Five Kings."},
  {id:"brandon-blackwood",name:"Brandon Blackwood",houses:["Bannermen"],gender:"M",birth:104,age:50,scores:S(6.2,5.2,6.2,6.5,4.5,4.2,6.2,5.2,5.5,4.2),notes:"Lord of Raventree Hall during the Dance of the Dragons; held the riverlands for the Blacks alongside Benjicot."},
  {id:"lucas-blackwood",name:"Lucas Blackwood",houses:["Bannermen"],gender:"M",birth:108,age:25,scores:S(4.2,3.2,4.2,6.2,5.2,4.2,4.2,3.2,4.2,3.2),notes:"Son of House Blackwood; fought in the Dance of the Dragons at Raventree Hall."},
  {id:"benedict-justman",name:"Benedict I Justman",houses:["Bannermen"],gender:"M",birth:-700,age:80,scores:S(9.2,7.5,8.5,8.5,8.2,7.5,7.2,7.2,9.2,6.2),notes:"King of the Trident and founder of House Justman; united the riverlands; one of the great river kings of the Age of Heroes."},
  {id:"red-robb-rivers",name:"Red Robb Rivers",houses:["Bannermen"],gender:"M",birth:210,age:30,scores:S(3.2,3.2,3.2,7.5,9.0,8.0,3.2,3.2,6.2,3.2),notes:"Great bastard son of Lord Ambrose Butterwell; one of the finest tourney knights of his age; fought in the Second Blackfyre Rebellion."},
  {id:"ser-vardis-egen",name:"Ser Vardis Egen",houses:["Bannermen"],gender:"M",birth:245,age:55,scores:S(3.2,3.2,3.2,6.2,7.5,6.5,4.2,4.2,5.2,3.2),notes:"Captain of the Guards at the Eyrie; fought as champion in Tyrion?s trial by combat; slain by Bronn."},
  {id:"amory-lorch",name:"Ser Amory Lorch",houses:["Bannermen"],gender:"M",birth:258,age:42,scores:S(2.2,2.2,2.2,5.5,6.2,5.0,2.2,2.2,3.2,2.2),notes:"Bannerman of Tywin Lannister; murdered the infant Rhaenys Targaryen in the sack of King?s Landing; later killed by Vargo Hoat."},
  {id:"smalljon-umber",name:"Smalljon Umber",houses:["Bannermen"],gender:"M",birth:277,age:23,scores:S(4.2,3.2,3.2,8.2,8.5,7.2,3.2,3.2,6.2,3.2),notes:"Son of the Greatjon; a formidable fighter who served Robb Stark; died at the Red Wedding."},
  {id:"galbart-glover",name:"Galbart Glover",houses:["Bannermen"],gender:"M",birth:253,age:47,scores:S(5.2,4.2,4.2,6.2,4.5,4.2,5.2,5.2,6.2,3.2),notes:"Master of Deepwood Motte; fought for Robb Stark; captured at the Red Wedding."},
  {id:"robett-glover",name:"Robett Glover",houses:["Bannermen"],gender:"M",birth:255,age:45,scores:S(4.2,4.2,3.2,6.5,5.2,4.2,5.2,4.2,5.2,3.2),notes:"Brother of Galbart Glover; recaptured Deepwood Motte with Stannis?s help; steadfast northern bannerman."},
  {id:"barristan-prime",name:"Barristan Selmy (Prime)",houses:["Bannermen"],gender:"M",birth:237,age:40,scores:S(1.0,5.2,1.0,8.2,10.0,10.0,5.2,3.2,8.5,1.0),notes:"Barristan Selmy at the height of his powers; infiltrated Duskendale alone to rescue King Aerys II; arguably the finest swordsman alive in his prime."},
  // -- ESSOS ADDITIONS --
  {id:"illyrio-mopatis",name:"Illyrio Mopatis",houses:["Essos"],gender:"M",birth:252,age:48,scores:S(5.2,6.2,4.5,2.2,1.5,1.5,7.5,9.5,7.2,4.2),notes:"Magister of Pentos; co-conspirator with Varys; sheltered Viserys and Daenerys; bankrolled the Golden Company."},
  // -- OTHER ADDITIONS --
  {id:"anguy-archer",name:"Anguy the Archer",houses:["Other"],gender:"M",birth:274,age:26,scores:S(2.2,2.2,2.2,5.2,7.5,5.5,2.2,2.2,3.2,2.2),notes:"The finest archer in the Seven Kingdoms; member of the Brotherhood Without Banners; won the archery competition at the Hand?s tourney."},
  {id:"hot-pie",name:"Hot Pie",houses:["Other"],gender:"M",birth:287,age:13,scores:S(1.0,1.0,1.2,1.0,1.0,1.0,1.0,2.5,1.0,1.0),notes:"Orphan baker?s apprentice from Flea Bottom; traveled with Arya Stark; stayed in the Riverlands to bake exceptional kidney pies."},
  {id:"lommy",name:"Lommy",houses:["Other"],gender:"M",birth:289,age:11,scores:S(1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0),notes:"Young dyer?s apprentice from Flea Bottom; traveled with Arya Stark on the Kingsroad; killed by Polliver."},
  {id:"mord",name:"Mord",houses:["Other"],gender:"M",birth:258,age:42,scores:S(1.0,1.0,1.0,3.2,3.2,2.2,1.0,1.0,1.0,1.0),notes:"Brutal gaoler of the Sky Cells at the Eyrie; motivated entirely by gold, as Tyrion Lannister discovered."},
  // -- NIGHT?S WATCH ADDITIONS --
  {id:"maester-orwyle-nw",name:"Maester Orwyle",houses:["Night?s Watch"],gender:"M",birth:90,age:47,scores:S(1.0,6.5,1.0,1.2,1.2,1.2,8.5,4.2,4.2,1.0),isNW:true,notes:"Grand Maester Orwyle after taking the black; chose the Wall over execution following the Dance; his scholarship remains but his worldly ambitions are sworn away."},

];

// Dynasty score overrides — applied after CHARACTERS defined
// Only keys that differ meaningfully from the default formula are listed.
const DYNASTY_OVERRIDES = {
  // Spymasters / intelligence
  'varys':              DS(9.5,8.0,5.5,6.0,4.5,10.0,1.0),
  'three-eyed-raven':   DS(1.2,9.5,1.5,5.0,1.2,10.0,1.0),
  'bloodraven':         DS(6.5,9.0,3.0,6.0,4.0,10.0,6.0),
  'bloodraven-nw':      DS(1.0,9.0,3.0,6.0,4.0,10.0,6.0),
  'larys-strong':       DS(6.5,5.5,4.0,5.0,2.0,9.5,1.0),
  'qyburn':             DS(3.5,8.5,3.5,3.5,2.0,8.5,1.0),
  'euron':              DS(7.5,5.0,5.5,4.5,9.5,7.5,7.5),
  // Finance / Master of Coin
  'littlefinger':       DS(7.0,8.5,10.0,5.0,3.0,9.5,1.0),
  'tyrion':             DS(9.0,9.0,9.5,7.5,5.0,8.5,3.0),
  'tywin':              DS(9.5,9.5,9.5,8.5,7.5,8.5,5.5),
  'wyman-manderly':     DS(7.5,7.5,8.5,6.5,5.5,6.5,2.5),
  'lysandro-rogare':    DS(6.5,6.0,10.0,4.5,8.5,5.5,2.5),
  'xaro-xhoan-daxos':  DS(6.5,5.5,9.5,4.5,7.5,5.5,3.0),
  'tyland':             DS(5.5,3.0,9.5,5.0,3.0,4.0,3.0),
  // Master of Laws
  'stannis':            DS(9.0,6.5,5.0,9.5,9.0,5.5,7.5),
  'ned':                DS(9.0,7.5,5.5,9.0,5.5,5.5,7.5),
  'jaehaerys-i':        DS(10.0,9.5,8.5,10.0,8.5,8.0,5.5),
  // Master of Ships / naval
  'corlys':             DS(9.0,7.0,9.0,5.5,10.0,5.5,5.0),
  'alyn-velaryon':      DS(7.5,5.5,6.5,5.0,9.0,4.5,5.5),
  'davos':              DS(7.5,8.0,4.5,7.0,8.5,5.5,5.5),
  'salladhor-saan':     DS(4.5,3.5,6.5,3.5,8.0,4.0,4.5),
  'nymeria-martell':    DS(8.5,2.0,5.0,5.0,10.0,5.5,3.5),
  'nymeria-ny-sar':     DS(8.5,2.0,5.0,5.0,10.0,5.5,3.5),
  // Grand Maester / Hand / counsellors
  'septon-barth':       DS(7.0,10.0,5.5,8.5,5.5,7.5,1.5),
  'maester-aemon-targ': DS(8.5,9.5,3.5,7.5,4.0,6.5,3.0),
  'viserys-ii':         DS(9.5,9.5,9.0,8.5,7.0,8.0,4.5),
  'bran-tyr':           DS(9.0,10.0,5.0,8.5,4.5,10.0,1.0),
  'lyonel-strong':      DS(7.5,9.5,6.0,8.0,5.5,7.5,5.5),
  'jon-connington':     DS(7.5,8.5,5.5,6.5,5.5,6.0,5.5),
  'sam-tarly-nw':       DS(1.0,8.5,3.5,6.5,3.5,5.5,1.0),
  'sam-tarly-bann':     DS(5.5,8.5,3.5,6.5,3.5,5.5,1.0),
  // High-Hs royal figures with adjusted scores
  'aegon-i':            DS(10.0,8.5,8.0,9.0,9.0,8.5,8.0),
  'alysanne':           DS(9.5,8.5,7.0,8.5,6.5,8.0,2.5),
  'cersei':             DS(8.0,5.5,6.5,4.5,5.0,8.0,2.0),
  'robert-b':           DS(8.5,5.5,6.0,5.5,7.0,5.5,9.0),
};
window.CHARACTERS.forEach(c => { if (DYNASTY_OVERRIDES[c.id]) c.ds = DYNASTY_OVERRIDES[c.id]; });

const KG_IDS = new Set(['aemon-dragonknight','lewyn','gwayne-hightower','gerold-hightower','duncan-tall',
  'barristan','ryam-redwyne','lucamore-strong','harrold-westerling','erryk-cargyll','arryk-cargyll',
  'lorent-marbrand','steffon-darklyn','oswell-whent','jonothor-darry','balon-swann','arys-oakheart','barristan-prime',
  'mandon-moore','meryn-trant','boros-blount','preston-greenfield','joffrey-doggett','criston-cole']);
window.CHARACTERS.forEach(c => { if (KG_IDS.has(c.id)) c.isKG = true; });

// Helper functions
window.getCharactersForHouse = function(houseName, gender) {
  return window.CHARACTERS.filter(c =>
    c.houses.includes(houseName) && (gender === 'both' || c.gender === gender)
  );
};

window.HOUSES = [
  {id:1,  name:'Targaryen',     emoji:'🔥', color:'#7a0000'},
  {id:2,  name:'Lannister',     emoji:'🦁', color:'#8a6f00'},
  {id:3,  name:'Stark',         emoji:'🐺', color:'#4a5568'},
  {id:4,  name:'Baratheon',     emoji:'🦌', color:'#2d3748'},
  {id:5,  name:'Frey',          emoji:'🏰', color:'#3a3a3a'},
  {id:6,  name:'Tyrell',        emoji:'🌹', color:'#1a4a1a'},
  {id:7,  name:'Martell',       emoji:'☀️', color:'#7a3500'},
  {id:8,  name:'Greyjoy',       emoji:'🦑', color:'#1a1a4a'},
  {id:9,  name:'Velaryon',      emoji:'🌊', color:'#0a3a6a'},
  {id:10, name:'Hightower',     emoji:'🗼', color:'#5a5a00'},
  {id:11, name:'Tully',         emoji:'🐟', color:'#0a3060'},
  {id:12, name:'Arryn',         emoji:'🦅', color:'#1a3a6a'},
  {id:13, name:'Other',         emoji:'⚔️', color:'#3a2a1a'},
  {id:14, name:'Blackfyre',     emoji:'🐉', color:'#3a0000'},
  {id:15, name:"Night's Watch", emoji:'❄️', color:'#0a1a3a', alwaysMale:true},
  {id:16, name:'Essos',         emoji:'🌍', color:'#5a3a00'},
  {id:17, name:'Bannermen',     emoji:'🛡️', color:'#3a3020'},
  {id:18, name:"Beyond the Wall", emoji:'🌨️', color:'#0a0818'},
  {id:19, name:'Magic',           emoji:'✨', color:'#2a0050'},
  {id:20, name:'Dragon',          emoji:'🐲', color:'#6a0000'},
];

window.CLASSIC_POSITIONS = [
  {id:'ruler',          name:'RULER',          scoreKey:'R',   count:1},
  {id:'hand',           name:'HAND',            scoreKey:'H',   count:1},
  {id:'heir',           name:'HEIR',            scoreKey:'Hr',  count:1, ageConstraint:true},
  {id:'army-commander', name:'ARMY COMMANDER',  scoreKey:'AC',  count:1},
  {id:'kingsguard',     name:'KINGSGUARD',      scoreKey:'KG',  count:1},
];

window.EMPIRE_POSITIONS = [
  {id:'ruler',            name:'RULER',            scoreKey:'R',    count:1},
  {id:'consort',          name:'CONSORT',          scoreKey:'Con',  count:1, genderConstraint:true},
  {id:'heir',             name:'HEIR',             scoreKey:'Hr',   count:1, ageConstraint:true},
  {id:'hand',             name:'HAND',             scoreKey:'H',    count:1},
  {id:'small-council',    name:'SMALL COUNCIL',    scoreKey:'SC',   count:6},
  {id:'army-commander',   name:'ARMY COMMANDER',  scoreKey:'AC',    count:1},
  {id:'kg-commander',     name:'KINGSGUARD COMMANDER', scoreKey:'KGC',  count:1},
  {id:'kingsguard',       name:'KINGSGUARD',       scoreKey:'KG',   count:6},
  {id:'ally',             name:'ALLY',             scoreKey:'Ally', count:1},
  {id:'bank',             name:'BANK',             scoreKey:'Bank', count:1},
];

window.CHAOS_POSITIONS = [
  {id:'ruler',            name:'RULER',           scoreKey:'R',    count:1},
  {id:'consort',          name:'CONSORT',         scoreKey:'Con',  count:1, genderConstraint:true},
  {id:'heir',             name:'HEIR',            scoreKey:'Hr',   count:1, ageConstraint:true},
  {id:'hand',             name:'HAND',            scoreKey:'H',    count:1},
  {id:'army-commander',   name:'ARMY COMMANDER', scoreKey:'AC',    count:1},
  {id:'kg-commander',     name:'KINGSGUARD COMMANDER', scoreKey:'KGC',  count:1},
  {id:'kingsguard',       name:'KINGSGUARD',      scoreKey:'KG',   count:1},
  {id:'small-council',    name:'SMALL COUNCIL',   scoreKey:'SC',   count:1},
  {id:'ally',             name:'ALLY',            scoreKey:'Ally', count:1},
  {id:'bank',             name:'BANK',            scoreKey:'Bank', count:1},
];

window.DYNASTY_POSITIONS = [
  // ── HOUSE (15) ──
  {id:'d-ruler',     name:'RULER',              scoreKey:'R',    group:'House'},
  {id:'d-consort',   name:'CONSORT',            scoreKey:'Con',  group:'House', genderConstraint:true},
  {id:'d-heir',      name:'HEIR',               scoreKey:'Hr',   group:'House', ageConstraint:true},
  {id:'d-house-1',   name:'HOUSE 1',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-2',   name:'HOUSE 2',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-3',   name:'HOUSE 3',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-4',   name:'HOUSE 4',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-5',   name:'HOUSE 5',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-6',   name:'HOUSE 6',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-7',   name:'HOUSE 7',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-8',   name:'HOUSE 8',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-9',   name:'HOUSE 9',            scoreKey:'Hs',   group:'House'},
  {id:'d-house-10',  name:'HOUSE 10',           scoreKey:'Hs',   group:'House'},
  {id:'d-house-11',  name:'HOUSE 11',           scoreKey:'Hs',   group:'House'},
  {id:'d-house-12',  name:'HOUSE 12',           scoreKey:'Hs',   group:'House'},
  // ── COUNCIL (6) ──
  {id:'d-hand',      name:'HAND',               scoreKey:'H',    group:'Council'},
  {id:'d-gm',        name:'GRAND MAESTER',      scoreKey:'GM',   group:'Council'},
  {id:'d-moc',       name:'MASTER OF COIN',     scoreKey:'MoC',  group:'Council'},
  {id:'d-mol',       name:'MASTER OF LAWS',     scoreKey:'MoL',  group:'Council'},
  {id:'d-mos',       name:'MASTER OF SHIPS',    scoreKey:'MoS',  group:'Council'},
  {id:'d-mow',       name:'MASTER OF WHISPERERS', scoreKey:'MoW', group:'Council'},
  // ── ARMY (20) ──
  {id:'d-army-cmd',  name:'ARMY COMMANDER',     scoreKey:'AC',   group:'Army'},
  {id:'d-kg-cmd',    name:'KINGSGUARD COMMANDER', scoreKey:'KGC',  group:'Army'},
  {id:'d-kg-1',      name:'KINGSGUARD 1',       scoreKey:'KG',   group:'Army'},
  {id:'d-kg-2',      name:'KINGSGUARD 2',       scoreKey:'KG',   group:'Army'},
  {id:'d-kg-3',      name:'KINGSGUARD 3',       scoreKey:'KG',   group:'Army'},
  {id:'d-kg-4',      name:'KINGSGUARD 4',       scoreKey:'KG',   group:'Army'},
  {id:'d-kg-5',      name:'KINGSGUARD 5',       scoreKey:'KG',   group:'Army'},
  {id:'d-kg-6',      name:'KINGSGUARD 6',       scoreKey:'KG',   group:'Army'},
  {id:'d-knight-1',  name:'KNIGHT 1',           scoreKey:'KG',   group:'Army'},
  {id:'d-knight-2',  name:'KNIGHT 2',           scoreKey:'KG',   group:'Army'},
  {id:'d-knight-3',  name:'KNIGHT 3',           scoreKey:'KG',   group:'Army'},
  {id:'d-knight-4',  name:'KNIGHT 4',           scoreKey:'KG',   group:'Army'},
  {id:'d-squire-1',  name:'SQUIRE 1',           scoreKey:'KG',   group:'Army', squireConstraint:'d-knight-1'},
  {id:'d-squire-2',  name:'SQUIRE 2',           scoreKey:'KG',   group:'Army', squireConstraint:'d-knight-2'},
  {id:'d-squire-3',  name:'SQUIRE 3',           scoreKey:'KG',   group:'Army', squireConstraint:'d-knight-3'},
  {id:'d-squire-4',  name:'SQUIRE 4',           scoreKey:'KG',   group:'Army', squireConstraint:'d-knight-4'},
  {id:'d-dr-1',      name:'DRAGONRIDER 1',      scoreKey:'DR',   group:'Army', dragonriderConstraint:true, pairedWith:'d-dragon-1'},
  {id:'d-dr-2',      name:'DRAGONRIDER 2',      scoreKey:'DR',   group:'Army', dragonriderConstraint:true, pairedWith:'d-dragon-2'},
  {id:'d-dragon-1',  name:'DRAGON 1',           scoreKey:'power',group:'Army', dragonOnly:true, pairedWith:'d-dr-1'},
  {id:'d-dragon-2',  name:'DRAGON 2',           scoreKey:'power',group:'Army', dragonOnly:true, pairedWith:'d-dr-2'},
  // ── KINGDOM (9) ──
  {id:'d-warden-1',  name:'WARDEN 1',           scoreKey:'Warden', group:'Kingdom'},
  {id:'d-warden-2',  name:'WARDEN 2',           scoreKey:'Warden', group:'Kingdom'},
  {id:'d-warden-3',  name:'WARDEN 3',           scoreKey:'Warden', group:'Kingdom'},
  {id:'d-warden-4',  name:'WARDEN 4',           scoreKey:'Warden', group:'Kingdom'},
  {id:'d-ally-1',    name:'ALLY 1',             scoreKey:'Ally', group:'Kingdom'},
  {id:'d-ally-2',    name:'ALLY 2',             scoreKey:'Ally', group:'Kingdom'},
  {id:'d-ally-3',    name:'ALLY 3',             scoreKey:'Ally', group:'Kingdom'},
  {id:'d-ally-4',    name:'ALLY 4',             scoreKey:'Ally', group:'Kingdom'},
  {id:'d-bank',      name:'BANK',               scoreKey:'Bank', group:'Kingdom'},
];
// expand each dynasty position to count:1 (all are single slots)
window.DYNASTY_POSITIONS.forEach(p => { p.count = 1; });

window.GAME_MODES = {
  'classic':              {name:'Classic',              rounds:5,  rerolls:2, positions:window.CLASSIC_POSITIONS,  maxScore:50,   isRandom:false, isHard:false},
  'classic-hard':         {name:'Classic Hard',         rounds:5,  rerolls:0, positions:window.CLASSIC_POSITIONS,  maxScore:50,   isRandom:false, isHard:true},
  'empire':               {name:'Empire',               rounds:20, rerolls:8, positions:window.EMPIRE_POSITIONS,   maxScore:200,  isRandom:false, isHard:false},
  'empire-hard':          {name:'Empire Hard',          rounds:20, rerolls:0, positions:window.EMPIRE_POSITIONS,   maxScore:200,  isRandom:false, isHard:true},
  'classic-random':       {name:'Classic (Random)',     rounds:5,  rerolls:2, positions:window.CLASSIC_POSITIONS,  maxScore:50,   isRandom:true,  isHard:false},
  'classic-hard-random':  {name:'Classic Hard (Random)',rounds:5,  rerolls:0, positions:window.CLASSIC_POSITIONS,  maxScore:50,   isRandom:true,  isHard:true},
  'empire-random':        {name:'Empire (Random)',      rounds:20, rerolls:8, positions:window.EMPIRE_POSITIONS,   maxScore:200,  isRandom:true,  isHard:false},
  'empire-hard-random':   {name:'Empire Hard (Random)', rounds:20, rerolls:0, positions:window.EMPIRE_POSITIONS,   maxScore:200,  isRandom:true,  isHard:true},
  'chaos':                {name:'Chaos Ladder',         rounds:10, rerolls:4, positions:window.CHAOS_POSITIONS,    maxScore:100,  isRandom:false, isHard:false},
  'dynasty':              {name:'Dynasty',              rounds:50, rerolls:0, positions:window.DYNASTY_POSITIONS,  maxScore:500,  isRandom:false, isHard:true, isDynasty:true},
};

window.CLASSIC_TIERS = [
  {name:'CONQUEROR',   min:46, max:50,  color:'#ffd700'},
  {name:'DRAGONLORD',  min:40, max:45,  color:'#c9a227'},
  {name:'GREAT HOUSE', min:35, max:39,  color:'#a0a0a0'},
  {name:'LESSER LORD', min:20, max:34,  color:'#8b7355'},
  {name:'SMALLFOLK',   min:0,  max:19,  color:'#5a5a5a'},
];
window.EMPIRE_TIERS = [
  {name:'CONQUEROR',   min:181, max:200, color:'#ffd700'},
  {name:'DRAGONLORD',  min:160, max:180, color:'#c9a227'},
  {name:'GREAT HOUSE', min:130, max:159, color:'#a0a0a0'},
  {name:'LESSER LORD', min:80,  max:129, color:'#8b7355'},
  {name:'SMALLFOLK',   min:0,   max:79,  color:'#5a5a5a'},
];
window.DYNASTY_TIERS = [
  {name:'CONQUEROR',        min:451, max:500, color:'#ffd700'},
  {name:'DRAGONLORD',      min:400, max:450, color:'#c9a227'},
  {name:'GREAT HOUSE',     min:330, max:399, color:'#a0a0a0'},
  {name:'LESSER LORD',     min:220, max:329, color:'#8b7355'},
  {name:'SMALLFOLK',       min:0,   max:219, color:'#5a5a5a'},
];

// Variant groups: drafting any member blocks all others in the same group
window.VARIANT_GROUPS = [
  ['jaime-prime','jaime-post'],
  ['barristan','barristan-prime'],
  ['maester-orwyle','maester-orwyle-nw'],
  ['aerys-ii-early','aerys-ii'],
  ['maester-aemon-targ','maester-aemon-nw'],
  ['bloodraven','bloodraven-nw','three-eyed-raven'],
  ['jon-snow-targ','jon-snow-stark','jon-snow-nw'],
  ['mance','mance-nw'],
  ['benjen','benjen-nw'],
  ['rhogar-velaryon','rhogar-nw'],
  ['sam-tarly-nw','sam-tarly-bann'],
  ['nights-king','nights-king-nw'],
  ['nymeria-martell','nymeria-ny-sar'],
  ['aegon-v','egg-squire'],
  ['raymun-fossoway-squire','raymun-fossoway-green-apple'],
  ['helaena','helaena-magic'],
  ['daeron-drunken','daeron-drunken-magic'],
  ['alys-rivers','alys-rivers-magic'],
  ['orell'],
  ['jojen-reed'],
  ['bran','bran-tyr'],
  ['arya','arya-faceless'],
  ['sansa','sansa-qitn'],
  ['night-king'],
  ['white-walker'],
  ['child-of-the-forest','child-of-the-forest-m'],
  ['jaqen','jaqen-magic'],
  ['the-waif'],
];
window.getVariantBlockList = function(draftedIds) {
  const unlimitedIds = new Set(window.CHARACTERS.filter(c => c.unlimited).map(c => c.id));
  const limited = draftedIds.filter(id => !unlimitedIds.has(id));
  const blocked = new Set(limited);
  for (const group of window.VARIANT_GROUPS) {
    if (group.some(id => limited.includes(id))) {
      group.forEach(id => blocked.add(id));
    }
  }
  return blocked;
};

window.getTier = function(score, maxScore) {
  const tiers = maxScore === 50 ? window.CLASSIC_TIERS : maxScore === 500 ? window.DYNASTY_TIERS : window.EMPIRE_TIERS;
  return [...tiers].sort((a, b) => b.min - a.min).find(t => score >= t.min) || tiers[tiers.length - 1];
};

window.buildBoard = function(positions) {
  const slots = [];
  positions.forEach(pos => {
    for (let i = 0; i < pos.count; i++) {
      slots.push({
        slotId: pos.count > 1 ? `${pos.id}-${i}` : pos.id,
        positionId: pos.id,
        positionName: pos.name,
        scoreKey: pos.scoreKey,
        character: null,
        group: pos.group || null,
        ageConstraint: pos.ageConstraint || false,
        genderConstraint: pos.genderConstraint || false,
        dragonOnly: pos.dragonOnly || false,
        dragonriderConstraint: pos.dragonriderConstraint || false,
        squireConstraint: pos.squireConstraint || null,
        pairedWith: pos.pairedWith || null,
      });
    }
  });
  return slots;
};

const DYNASTY_KEYS = new Set(['Hs','GM','MoC','MoL','MoS','MoW','Warden']);
function dynastyDefault(char, key) {
  const s = char.scores || {};
  if ((char.isNW || char.isKG) && key === 'Hs') return 1.0;
  const r = k => s[k] || 1.0;
  const cap = v => Math.min(10, Math.round(v * 10) / 10);
  // Hs = House standing: best attribute anchors, boosted by versatility
  if (key === 'Hs')  return cap(Math.max(r('R'), r('KG'), r('AC'), r('Ally'), r('Con')) * 0.45 + r('R') * 0.15 + r('KG') * 0.15 + r('Ally') * 0.15 + r('Con') * 0.10);
  // GM = Grand Maester: wisdom and scholarly ability (SC + H)
  if (key === 'GM')  return cap(Math.max(r('SC'), r('H')) * 0.95);
  if (key === 'MoC') return cap(Math.max(r('Bank'), r('SC')) * 0.85);
  if (key === 'MoL') return cap(Math.max(r('SC'), r('R')) * 0.85);
  if (key === 'MoS') return cap(Math.max(r('AC'), r('Ally')) * 0.7);
  if (key === 'MoW') return cap(Math.max(r('SC'), r('H')) * 0.9);
  // Warden = Ruler score + 1, capped at 10
  if (key === 'Warden') return Math.min(10, Math.round((r('R') + 1) * 10) / 10);
  return 1.0;
}
window.getSlotScore = function(slot) {
  if (!slot.character) return 0;
  const char = slot.character;
  const key = slot.scoreKey;
  if (char.isNW && (key === 'Hr' || key === 'R')) return 1;
  if (char.isKG && (key === 'R' || key === 'Hr' || key === 'Con')) return 1;
  if (key === 'power') return char.power || 0;
  if (key === 'DR') return char.isDragon ? 0 : (char.DR || 0);
  if (DYNASTY_KEYS.has(key)) return char.ds?.[key] ?? dynastyDefault(char, key);
  return char.scores[key] || 0;
};

window.calcScore = function(board) {
  return board.reduce((sum, slot) => sum + window.getSlotScore(slot), 0);
};

// Age at death (or at end of ADWD ~300 AC for living chars). Every character carries an `age` field.
window.getEffectiveAge = function(char) {
  return char.age || Math.max(1, 300 - char.birth);
};

// â”€â”€ Chaos Ladder â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.buildChaosLineup = function(house, topN, fromBottom, pinned) {
  const SK = ['R','H','Hr','AC','KG','KGC','SC','Bank','Ally','Con'];
  const chars = window.CHARACTERS.filter(c => c.houses.includes(house));
  if (chars.length === 0) return {};
  const tot = c => SK.reduce((s, k) => s + (c.scores[k] || 0), 0);
  const sorted = [...chars].sort((a, b) => tot(b) - tot(a));
  const n = Math.min(topN || chars.length, chars.length);
  let pool = fromBottom
    ? sorted.slice(Math.max(0, sorted.length - n))
    : sorted.slice(0, n);
  if (pool.length < 10) pool = sorted.slice(0, Math.min(10, sorted.length));

  // Force any pinned characters into pool even if outside topN range
  if (pinned) {
    for (const charId of Object.values(pinned)) {
      if (!pool.find(p => p.id === charId)) {
        const c = window.CHARACTERS.find(ch => ch.id === charId);
        if (c) pool = [...pool, c];
      }
    }
  }

  const age = c => window.getEffectiveAge(c);
  const sc  = (c, pos) => window.getSlotScore({ character: c, scoreKey: pos });
  const lineup = {}, used = new Set();

  // Pre-assign pinned positions (R first so gender/age constraints resolve correctly)
  if (pinned) {
    for (const pos of ['R','Con','Hr','H','AC','KGC','KG','SC','Bank','Ally']) {
      if (pinned[pos]) {
        const c = pool.find(ch => ch.id === pinned[pos]);
        if (c) { lineup[pos] = c.id; used.add(c.id); }
      }
    }
  }

  const positions = new Set(SK.filter(p => !lineup[p]));
  while (positions.size > 0) {
    let bestScore = -1, bestChar = null, bestPos = null;
    for (const pos of positions) {
      if (pos === 'Hr' && !lineup['R']) continue;
      if (pos === 'Con' && !lineup['R']) continue;
      const rulerChar   = lineup['R']   ? pool.find(c => c.id === lineup['R'])   : null;
      const consortChar = lineup['Con'] ? pool.find(c => c.id === lineup['Con']) : null;
      const heirChar    = lineup['Hr']  ? pool.find(c => c.id === lineup['Hr'])  : null;
      for (const c of pool) {
        if (used.has(c.id)) continue;
        if (pos === 'Con' && rulerChar && c.gender === rulerChar.gender) continue;
        if (pos === 'Con' && heirChar  && age(c) <= age(heirChar)) continue;
        if (pos === 'Hr') {
          if (rulerChar   && age(c) >= age(rulerChar))   continue;
          if (consortChar && age(c) >= age(consortChar)) continue;
        }
        const score = sc(c, pos);
        if (score > bestScore) { bestScore = score; bestChar = c; bestPos = pos; }
      }
    }
    if (!bestChar) {
      for (const pos of positions) {
        const best = pool.filter(c => !used.has(c.id)).sort((a, b) => sc(b, pos) - sc(a, pos))[0];
        if (best) { lineup[pos] = best.id; used.add(best.id); }
        positions.delete(pos);
      }
      break;
    }
    lineup[bestPos] = bestChar.id;
    used.add(bestChar.id);
    positions.delete(bestPos);
  }
  return lineup;
};

window.CHAOS_RUNGS = [
  {id:1,  house:'Frey',      topN:10, fromBottom:true,  label:"Walder's Levy",         emoji:'🏰'},
  {id:2,  house:'Beyond the Wall', topN:10, fromBottom:true, label:'Wildling Rabble',   emoji:'🌲'},
  {id:3,  house:'Velaryon',  topN:10,                   label:'Driftwood Throne',       emoji:'🌊'},
  {id:4,  house:'Tyrell',    topN:10,                   label:'Garden Party',           emoji:'🌹'},
  {id:5,  house:'Baratheon', topN:10, fromBottom:true,  label:"Storm's Apprentice",     emoji:'🦌'},
  {id:6,  house:'Blackfyre', topN:10, fromBottom:true,  label:"Exile's Hope",           emoji:'⚔️'},
  {id:7,  house:'Essos',     topN:10, fromBottom:true,  label:'The Free Cities',        emoji:'🏺'},
  {id:8,  house:'Martell',   topN:10, fromBottom:true,  label:'Dornish Sandsnakes',     emoji:'☀️'},
  {id:9,  house:'Lannister', topN:10, fromBottom:true,  label:'Casterly Recruits',      emoji:'🦁'},
  {id:10, house:'Stark',     topN:10, fromBottom:true,  label:'Northern Muster',        emoji:'🐺'},
  {id:11, house:'Bannermen', topN:10, fromBottom:true,  label:'Hedge Knights',          emoji:'🏹'},
  {id:12, house:'Targaryen', topN:10, fromBottom:true,  label:'Dragonless Bloodline',   emoji:'🔥'},
  {id:13, house:'Frey',      topN:12,                   label:'The Twins Delegation',   emoji:'🏰'},
  {id:14, house:'Beyond the Wall', topN:11,             label:'Free Folk Raiders',      emoji:'🌲'},
  {id:15, house:'Baratheon', topN:11,                   label:"Stag's Pride",           emoji:'🦌', pinned:{R:'rogar',Con:'elenda-caron',Hr:'renly'}},
  {id:16, house:'Blackfyre', topN:11,                   label:'Golden Swords',          emoji:'⚔️', pinned:{R:'daemon-blackfyre',Con:'rohanne-tyrosh',Hr:'aegon-blackfyre-twin'}},
  {id:17, house:'Essos',     topN:12,                   label:"Slaver's Bay Court",     emoji:'🏺', pinned:{R:'jorah',Con:'larra-rogare',Hr:'daario'}},
  {id:18, house:'Martell',   topN:11,                   label:'Red Mountains Vanguard', emoji:'☀️', pinned:{R:'mors-martell',Con:'meria',Hr:'nymor'}},
  {id:19, house:'Lannister', topN:12,                   label:'Lions of the West',      emoji:'🦁', pinned:{R:'damon-grey-lion',Con:'johanna-lannister',Hr:'tyrion'}},
  {id:20, house:'Stark',     topN:12,                   label:'Wolves of Winter',       emoji:'🐺', pinned:{R:'eddard',Con:'catelyn',Hr:'robb'}},
  {id:21, house:'Bannermen', topN:12,                   label:'Sworn Swords',           emoji:'🏹', pinned:{R:'lyonel-strong',Con:'alysanne-blackwood',Hr:'harwin-strong'}},
  {id:22, house:'Targaryen', topN:12,                   label:'The Black Council',      emoji:'🔥', pinned:{R:'daemon-targaryen',Con:'rhaenyra',Hr:'jacaerys-v'}},
  {id:23, house:'Velaryon',  topN:10,                   label:'Driftwood Rising',       emoji:'🌊', pinned:{R:'corlys',Con:'rhaenys-qwnw',Hr:'laenor'}},
  {id:24, house:'Tyrell',    topN:10,                   label:"The Rose's Thorns",      emoji:'🌹', pinned:{R:'willas',Con:'olenna',Hr:'loras'}},
  {id:25, house:'Baratheon', topN:13,                   label:'Fury of the Storm',      emoji:'🦌', pinned:{R:'orys',Con:'elenda-caron',Hr:'renly'}},
  {id:26, house:'Essos',     topN:14,                   label:'The Eastern Court',      emoji:'🏺', pinned:{R:'khal-jhaqo',Con:'nymeria-ny-sar',Hr:'grey-worm'}},
  {id:27, house:'Martell',   topN:12,                   label:"The Sun's Lance",        emoji:'☀️', pinned:{R:'doran',Con:'meria',Hr:'arianne'}},
  {id:28, house:'Blackfyre', topN:12,                   label:"Daemon's Legacy",        emoji:'⚔️', pinned:{R:'bittersteel',Con:'calla-blackfyre',Hr:'young-griff'}},
  {id:29, house:'Frey',      topN:12,                   label:'House of Betrayal',      emoji:'🏰'},
  {id:30, house:'Other',     topN:11,                   label:'King-Beyond-the-Wall',   emoji:'🌲'},
  {id:31, house:'Lannister', topN:16,                   label:'Pride of Casterly Rock', emoji:'🦁', pinned:{R:'tywin',Con:'cersei',Hr:'tyrion'}},
  {id:32, house:'Stark',     topN:16,                   label:"Winter's Teeth",         emoji:'🐺', pinned:{R:'cregan',Con:'sansa-qitn',Hr:'jon-snow-stark'}},
  {id:33, house:'Bannermen', topN:16,                   label:'Lords of the Realm',     emoji:'🏹', pinned:{R:'wyman-manderly',Con:'rohanne-webber',Hr:'beric'}},
  {id:34, house:'Targaryen', topN:16,                   label:'Blood of the Dragon',    emoji:'🔥', pinned:{R:'viserys-ii',Con:'rhaenys-qwnw',Hr:'rhaegar'}},
  {id:35, house:'Baratheon', topN:14,                   label:'Hammer of the King',     emoji:'🦌', pinned:{R:'stannis',Hr:'renly'}},
  {id:36, house:'Essos',     topN:17,                   label:"Daenerys's Court",       emoji:'🏺', pinned:{R:'varys',Con:'nymeria-ny-sar',Hr:'daario'}},
  {id:37, house:'Martell',   topN:12,                   label:'Oberyn Unleashed',       emoji:'☀️', pinned:{R:'oberyn',Con:'arianne',Hr:'quentyn'}},
  {id:38, house:'Blackfyre', topN:12,                   label:'Fire and Steel',         emoji:'⚔️', pinned:{R:'maelys',Con:'calla-blackfyre',Hr:'young-griff'}},
  {id:39, house:'Lannister', topN:18,                   label:'The Lannister Apex',     emoji:'🦁', pinned:{R:'tywin',Con:'genna',Hr:'jaime-prime'}},
  {id:40, house:'Stark',     topN:20,                   label:'King of Winter',         emoji:'🐺', pinned:{R:'torrhen',Con:'catelyn',Hr:'robb'}},
  {id:41, house:'Bannermen', topN:20,                   label:'Greatest Knights',       emoji:'🏹', pinned:{R:'randyll',Con:'maege-mormont',Hr:'sam-tarly-bann'}},
  {id:42, house:'Targaryen', topN:20,                   label:"Conqueror's Court",      emoji:'🔥', pinned:{R:'jaehaerys-i',Con:'alysanne',Hr:'rhaegar'}},
  {id:43, house:'Velaryon',  topN:10,                   label:"Sea Snake's Domain",     emoji:'🌊', pinned:{R:'corlys',Con:'rhaenys-qwnw',Hr:'jacaerys-vel'}},
  {id:44, house:'Tyrell',    topN:10,                   label:"Oldtown's Finest",       emoji:'🌹', pinned:{R:'garlan',Con:'olenna',Hr:'loras'}},
  {id:45, house:'Essos',     topN:19,                   label:'Masters of the East',    emoji:'🏺', pinned:{R:'nymeria-ny-sar',Con:'jorah',Hr:'grey-worm'}},
  {id:46, house:'Baratheon', topN:14,                   label:"Robert's Wrath",         emoji:'🦌', pinned:{R:'robert',Hr:'renly'}},
  {id:47, house:'Lannister', topN:22,                   label:'All the Lions',          emoji:'🦁', pinned:{R:'tywin',Con:'johanna-lannister',Hr:'tyrion'}},
  {id:48, house:'Stark',     topN:25,                   label:'All the Wolves',         emoji:'🐺', pinned:{R:'theon-hungry-wolf',Con:'lyanna-stark',Hr:'robb'}},
  {id:49, house:'Bannermen', topN:30,                   label:'The Mightiest Lords',    emoji:'🏹', pinned:{R:'barristan',Con:'rohanne-webber',Hr:'thoros-myr'}},
  {id:51, house:'Greyjoy',   topN:10,                   label:'Iron Islands',           emoji:'🦑', pinned:{R:'euron',Con:'asha',Hr:'theon'}},
  {id:50, house:'Targaryen', topN:30,                   label:'Fire Made Flesh',        emoji:'🔥', pinned:{R:'aegon-i',Con:'visenya',Hr:'daenerys'}},
];

window.checkBoardConstraints = function(board) {
  const errors = [];
  const age = window.getEffectiveAge;
  const byId = id => board.find(s => s.positionId === id || s.slotId === id)?.character;

  // Classic/Empire ruler-consort-heir constraints
  const ruler   = byId('ruler');
  const consort = byId('consort');
  const heir    = byId('heir');
  if (heir && ruler   && age(heir) > age(ruler))   errors.push('HEIR must be younger than or same age as RULER');
  if (heir && consort && age(heir) > age(consort)) errors.push('HEIR must be younger than or same age as CONSORT');
  if (ruler && consort && ruler.gender === consort.gender) errors.push('CONSORT must be opposite gender of RULER');

  // Dynasty ruler-consort-heir constraints (position IDs prefixed with 'd-')
  const dRuler   = byId('d-ruler');
  const dConsort = byId('d-consort');
  if (dRuler && dConsort && dRuler.gender === dConsort.gender) errors.push('CONSORT must be opposite gender of RULER');
  board.forEach(slot => {
    if (!slot.character) return;
    const c = slot.character;
    if (slot.ageConstraint) {
      if (dRuler   && age(c) > age(dRuler))   errors.push(`${slot.positionName} must be younger than or same age as RULER`);
      if (dConsort && age(c) > age(dConsort)) errors.push(`${slot.positionName} must be younger than or same age as CONSORT`);
    }
    if (slot.dragonOnly && !c.isDragon) errors.push(`${slot.positionName} slot requires a Dragon`);
    if (slot.dragonriderConstraint && (!c.DR || c.isDragon)) errors.push(`${slot.positionName} requires a character with dragon-riding ability`);
    if (slot.squireConstraint) {
      const knight = byId(slot.squireConstraint);
      if (knight && age(c) >= age(knight)) errors.push(`${slot.positionName} must be younger than their paired knight`);
    }
  });
  return errors;
};

