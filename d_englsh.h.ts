// Emacs style mode select   -*- C++ -*- 
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// DESCRIPTION:
//	Printed strings for translation.
//	English language support (default).
//
//-----------------------------------------------------------------------------
\n[\s{2}\t]
if (typeof __D_ENGLSH__ == "undefined"){
  export const __D_ENGLSH__ :boolean = true;
  
  //
  //	Printed strings for translation
  //

  //
  // D_Main.C
  //
  export const D_DEVSTR	:string = "Development mode ON.\n";
  export const D_CDROM	:string = "CD-ROM Version: default.cfg from c:\\doomdata\n";
  
  //
  //	M_Menu.C
  //
export const PRESSKEY   :string =	"press a key.";
export const PRESSYN 	  :string =	"press y or n.";
export const QUITMSG	  :string =	"are you sure you want to\nquit this great game?";
export const LOADNET 	  :string =	"you can't do load while in a net game!\n\n"   + PRESSKEY;
export const QLOADNET	  :string =	"you can't quickload during a netgame!\n\n"    + PRESSKEY;
export const QSAVESPOT	:string =	"you haven't picked a quicksave slot yet!\n\n" + PRESSKEY;
export const SAVEDEAD 	:string =	"you can't save if you aren't playing!\n\n"    + PRESSKEY;
export const QSPROMPT 	:string =	"quicksave over your game named\n\n'%s'?\n\n"  + PRESSYN;
export const QLPROMPT	  :string =	"do you want to quickload the game named\n\n'%s'?\n\n" + PRESSYN;

export const NEWGAME   :string =
"you can't start a new game\n" +
"while in a network game.\n\n" + PRESSKEY;

export const NIGHTMARE :string =
"are you sure? this skill level\n" + 
"isn't even remotely fair.\n\n" + PRESSYN;

export const SWSTRING  :string =
"this is the shareware version of doom.\n\n" + 
"you need to order the entire trilogy.\n\n" + PRESSKEY;

export const MSGOFF	  :string = "Messages OFF";
export const MSGON	  :string = "Messages ON";
export const NETEND	  :string = "you can't end a netgame!\n\n" + PRESSKEY;
export const ENDGAME	:string = "are you sure you want to end the game?\n\n" + PRESSYN;

export const DOSY		  :string = "(press y to quit)";

export const DETAILHI	    :string = "High detail";
export const DETAILLO	    :string = "Low detail";
export const GAMMALVL0	  :string = "Gamma correction OFF";
export const GAMMALVL1	  :string = "Gamma correction level 1";
export const GAMMALVL2	  :string = "Gamma correction level 2";
export const GAMMALVL3	  :string = "Gamma correction level 3";
export const GAMMALVL4	  :string = "Gamma correction level 4";
export const EMPTYSTRING	:string = "empty slot";

//
//	P_inter.C
//
export const GOTARMOR	    :string = "Picked up the armor.";
export const GOTMEGA	    :string = "Picked up the MegaArmor!";
export const GOTHTHBONUS	:string = "Picked up a health bonus.";
export const GOTARMBONUS	:string = "Picked up an armor bonus.";
export const GOTSTIM	    :string = "Picked up a stimpack.";
export const GOTMEDINEED	:string = "Picked up a medikit that you REALLY need!";
export const GOTMEDIKIT	  :string = "Picked up a medikit.";
export const GOTSUPER	    :string = "Supercharge!";

export const GOTBLUECARD	:string = "Picked up a blue keycard.";
export const GOTYELWCARD	:string = "Picked up a yellow keycard.";
export const GOTREDCARD	  :string = "Picked up a red keycard.";
export const GOTBLUESKUL	:string = "Picked up a blue skull key.";
export const GOTYELWSKUL	:string = "Picked up a yellow skull key.";
export const GOTREDSKULL	:string = "Picked up a red skull key.";

export const GOTINVUL	    :string = "Invulnerability!";
export const GOTBERSERK	  :string = "Berserk!";
export const GOTINVIS	    :string = "Partial Invisibility";
export const GOTSUIT	    :string = "Radiation Shielding Suit";
export const GOTMAP	      :string = "Computer Area Map";
export const GOTVISOR	    :string = "Light Amplification Visor";
export const GOTMSPHERE	  :string = "MegaSphere!";

export const GOTCLIP	    :string = "Picked up a clip.";
export const GOTCLIPBOX	  :string = "Picked up a box of bullets.";
export const GOTROCKET	  :string = "Picked up a rocket.";
export const GOTROCKBOX	  :string = "Picked up a box of rockets.";
export const GOTCELL	    :string = "Picked up an energy cell.";
export const GOTCELLBOX	  :string = "Picked up an energy cell pack.";
export const GOTSHELLS	  :string = "Picked up 4 shotgun shells.";
export const GOTSHELLBOX	:string = "Picked up a box of shotgun shells.";
export const GOTBACKPACK	:string = "Picked up a backpack full of ammo!";

export const GOTBFG9000	  :string = "You got the BFG9000!  Oh, yes.";
export const GOTCHAINGUN	:string = "You got the chaingun!";
export const GOTCHAINSAW	:string = "A chainsaw!  Find some meat!";
export const GOTLAUNCHER	:string = "You got the rocket launcher!";
export const GOTPLASMA	  :string = "You got the plasma gun!";
export const GOTSHOTGUN	  :string = "You got the shotgun!";
export const GOTSHOTGUN2	:string = "You got the super shotgun!";

//
// P_Doors.C
//
export const PD_BLUEO	    :string = "You need a blue key to activate this object";
export const PD_REDO	    :string = "You need a red key to activate this object";
export const PD_YELLOWO	  :string = "You need a yellow key to activate this object";
export const PD_BLUEK	    :string = "You need a blue key to open this door";
export const PD_REDK	    :string = "You need a red key to open this door";
export const PD_YELLOWK	  :string = "You need a yellow key to open this door";

//
//	G_game.C
//
export const GGSAVED	:string = "game saved.";

//
//	HU_stuff.C
//
export const HUSTR_MSGU	"[Message unsent]";

export const HUSTR_E1M1	:string = "E1M1: Hangar";
export const HUSTR_E1M2	:string = "E1M2: Nuclear Plant";
export const HUSTR_E1M3	:string = "E1M3: Toxin Refinery";
export const HUSTR_E1M4	:string = "E1M4: Command Control";
export const HUSTR_E1M5	:string = "E1M5: Phobos Lab";
export const HUSTR_E1M6	:string = "E1M6: Central Processing";
export const HUSTR_E1M7	:string = "E1M7: Computer Station";
export const HUSTR_E1M8	:string = "E1M8: Phobos Anomaly";
export const HUSTR_E1M9	:string = "E1M9: Military Base";

export const HUSTR_E2M1	:string = "E2M1: Deimos Anomaly";
export const HUSTR_E2M2	:string = "E2M2: Containment Area";
export const HUSTR_E2M3	:string = "E2M3: Refinery";
export const HUSTR_E2M4	:string = "E2M4: Deimos Lab";
export const HUSTR_E2M5	:string = "E2M5: Command Center";
export const HUSTR_E2M6	:string = "E2M6: Halls of the Damned";
export const HUSTR_E2M7	:string = "E2M7: Spawning Vats";
export const HUSTR_E2M8	:string = "E2M8: Tower of Babel";
export const HUSTR_E2M9	:string = "E2M9: Fortress of Mystery";

export const HUSTR_E3M1	:string = "E3M1: Hell Keep";
export const HUSTR_E3M2	:string = "E3M2: Slough of Despair";
export const HUSTR_E3M3	:string = "E3M3: Pandemonium";
export const HUSTR_E3M4	:string = "E3M4: House of Pain";
export const HUSTR_E3M5	:string = "E3M5: Unholy Cathedral";
export const HUSTR_E3M6	:string = "E3M6: Mt. Erebus";
export const HUSTR_E3M7	:string = "E3M7: Limbo";
export const HUSTR_E3M8	:string = "E3M8: Dis";
export const HUSTR_E3M9	:string = "E3M9: Warrens";

export const HUSTR_E4M1	:string = "E4M1: Hell Beneath";
export const HUSTR_E4M2	:string = "E4M2: Perfect Hatred";
export const HUSTR_E4M3	:string = "E4M3: Sever The Wicked";
export const HUSTR_E4M4	:string = "E4M4: Unruly Evil";
export const HUSTR_E4M5	:string = "E4M5: They Will Repent";
export const HUSTR_E4M6	:string = "E4M6: Against Thee Wickedly";
export const HUSTR_E4M7	:string = "E4M7: And Hell Followed";
export const HUSTR_E4M8	:string = "E4M8: Unto The Cruel";
export const HUSTR_E4M9	:string = "E4M9: Fear";

export const HUSTR_1	  :string = "level 1: entryway";
export const HUSTR_2	  :string = "level 2: underhalls";
export const HUSTR_3	  :string = "level 3: the gantlet";
export const HUSTR_4	  :string = "level 4: the focus";
export const HUSTR_5	  :string = "level 5: the waste tunnels";
export const HUSTR_6	  :string = "level 6: the crusher";
export const HUSTR_7	  :string = "level 7: dead simple";
export const HUSTR_8	  :string = "level 8: tricks and traps";
export const HUSTR_9	  :string = "level 9: the pit";
export const HUSTR_10	  :string = "level 10: refueling base";
export const HUSTR_11	  :string = "level 11: 'o' of destruction!";

export const HUSTR_12	:string = "level 12: the factory";
export const HUSTR_13 :string = "level 13: downtown";
export const HUSTR_14	:string = "level 14: the inmost dens";
export const HUSTR_15	:string = "level 15: industrial zone";
export const HUSTR_16	:string = "level 16: suburbs";
export const HUSTR_17	:string = "level 17: tenements";
export const HUSTR_18	:string = "level 18: the courtyard";
export const HUSTR_19	:string = "level 19: the citadel";
export const HUSTR_20	:string = "level 20: gotcha!";

export const HUSTR_21	:string = "level 21: nirvana";
export const HUSTR_22	:string = "level 22: the catacombs";
export const HUSTR_23	:string = "level 23: barrels o' fun";
export const HUSTR_24	:string = "level 24: the chasm";
export const HUSTR_25	:string = "level 25: bloodfalls";
export const HUSTR_26	:string = "level 26: the abandoned mines";
export const HUSTR_27	:string = "level 27: monster condo";
export const HUSTR_28	:string = "level 28: the spirit world";
export const HUSTR_29	:string = "level 29: the living end";
export const HUSTR_30	:string = "level 30: icon of sin";

export const HUSTR_31	:string = "level 31: wolfenstein";
export const HUSTR_32	:string = "level 32: grosse";

export const PHUSTR_1	  :string = "level 1: congo";
export const PHUSTR_2	  :string = "level 2: well of souls";
export const PHUSTR_3	  :string = "level 3: aztec";
export const PHUSTR_4	  :string = "level 4: caged";
export const PHUSTR_5	  :string = "level 5: ghost town";
export const PHUSTR_6	  :string = "level 6: baron's lair";
export const PHUSTR_7	  :string = "level 7: caughtyard";
export const PHUSTR_8	  :string = "level 8: realm";
export const PHUSTR_9	  :string = "level 9: abattoire";
export const PHUSTR_10	:string = "level 10: onslaught";
export const PHUSTR_11	:string = "level 11: hunted";

export const PHUSTR_12	:string = "level 12: speed";
export const PHUSTR_13	:string = "level 13: the crypt";
export const PHUSTR_14	:string = "level 14: genesis";
export const PHUSTR_15	:string = "level 15: the twilight";
export const PHUSTR_16	:string = "level 16: the omen";
export const PHUSTR_17	:string = "level 17: compound";
export const PHUSTR_18	:string = "level 18: neurosphere";
export const PHUSTR_19	:string = "level 19: nme";
export const PHUSTR_20	:string = "level 20: the death domain";

export const PHUSTR_21	:string = "level 21: slayer";
export const PHUSTR_22	:string = "level 22: impossible mission";
export const PHUSTR_23	:string = "level 23: tombstone";
export const PHUSTR_24	:string = "level 24: the final frontier";
export const PHUSTR_25	:string = "level 25: the temple of darkness";
export const PHUSTR_26	:string = "level 26: bunker";
export const PHUSTR_27	:string = "level 27: anti-christ";
export const PHUSTR_28	:string = "level 28: the sewers";
export const PHUSTR_29	:string = "level 29: odyssey of noises";
export const PHUSTR_30	:string = "level 30: the gateway of hell";

export const PHUSTR_31	:string = "level 31: cyberden";
export const PHUSTR_32	:string = "level 32: go 2 it";

export const THUSTR_1	  :string = "level 1: system control";
export const THUSTR_2	  :string = "level 2: human bbq";
export const THUSTR_3	  :string = "level 3: power control";
export const THUSTR_4	  :string = "level 4: wormhole";
export const THUSTR_5	  :string = "level 5: hanger";
export const THUSTR_6	  :string = "level 6: open season";
export const THUSTR_7	  :string = "level 7: prison";
export const THUSTR_8	  :string = "level 8: metal";
export const THUSTR_9	  :string = "level 9: stronghold";
export const THUSTR_10	:string = "level 10: redemption";
export const THUSTR_11	:string = "level 11: storage facility";

export const THUSTR_12	:string = "level 12: crater";
export const THUSTR_13	:string = "level 13: nukage processing";
export const THUSTR_14	:string = "level 14: steel works";
export const THUSTR_15	:string = "level 15: dead zone";
export const THUSTR_16	:string = "level 16: deepest reaches";
export const THUSTR_17	:string = "level 17: processing area";
export const THUSTR_18	:string = "level 18: mill";
export const THUSTR_19	:string = "level 19: shipping/respawning";
export const THUSTR_20	:string = "level 20: central processing";

export const THUSTR_21	:string = "level 21: administration center";
export const THUSTR_22	:string = "level 22: habitat";
export const THUSTR_23	:string = "level 23: lunar mining project";
export const THUSTR_24	:string = "level 24: quarry";
export const THUSTR_25	:string = "level 25: baron's den";
export const THUSTR_26	:string = "level 26: ballistyx";
export const THUSTR_27	:string = "level 27: mount pain";
export const THUSTR_28	:string = "level 28: heck";
export const THUSTR_29	:string = "level 29: river styx";
export const THUSTR_30	:string = "level 30: last call";

export const THUSTR_31	:string = "level 31: pharaoh";
export const THUSTR_32	:string = "level 32: caribbean";

export const HUSTR_CHATMACRO1	:string = "I'm ready to kick butt!";
export const HUSTR_CHATMACRO2	:string = "I'm OK.";
export const HUSTR_CHATMACRO3	:string = "I'm not looking too good!";
export const HUSTR_CHATMACRO4	:string = "Help!";
export const HUSTR_CHATMACRO5	:string = "You suck!";
export const HUSTR_CHATMACRO6	:string = "Next time, scumbag...";
export const HUSTR_CHATMACRO7	:string = "Come here!";
export const HUSTR_CHATMACRO8	:string = "I'll take care of it.";
export const HUSTR_CHATMACRO9	:string = "Yes";
export const HUSTR_CHATMACRO0	:string = "No";

export const HUSTR_TALKTOSELF1	:string = "You mumble to yourself";
export const HUSTR_TALKTOSELF2	:string = "Who's there?";
export const HUSTR_TALKTOSELF3	:string = "You scare yourself";
export const HUSTR_TALKTOSELF4	:string = "You start to rave";
export const HUSTR_TALKTOSELF5	:string = "You've lost it...";

export const HUSTR_MESSAGESENT	:string = "[Message Sent]";

// The following should NOT be changed unless it seems
// just AWFULLY necessary

export const HUSTR_PLRGREEN	  :string = "Green: ";
export const HUSTR_PLRINDIGO	:string = "Indigo: ";
export const HUSTR_PLRBROWN	  :string = "Brown: ";
export const HUSTR_PLRRED		  :string = "Red: ";

export const HUSTR_KEYGREEN	  :string = 'g';
export const HUSTR_KEYINDIGO	:string = 'i';
export const HUSTR_KEYBROWN	  :string = 'b';
export const HUSTR_KEYRED	    :string = 'r';

//
//	AM_map.C
//

export const AMSTR_FOLLOWON	:string = "Follow Mode ON";
export const AMSTR_FOLLOWOFF	:string = "Follow Mode OFF";

export const AMSTR_GRIDON	:string = "Grid ON";
export const AMSTR_GRIDOFF	:string = "Grid OFF";

export const AMSTR_MARKEDSPOT	:string = "Marked Spot";
export const AMSTR_MARKSCLEARED	:string = "All Marks Cleared";

//
//	ST_stuff.C
//

export const STSTR_MUS		:string = "Music Change";
export const STSTR_NOMUS		:string = "IMPOSSIBLE SELECTION";
export const STSTR_DQDON		:string = "Degreelessness Mode On";
export const STSTR_DQDOFF	:string = "Degreelessness Mode Off";

export const STSTR_KFAADDED	:string = "Very Happy Ammo Added";
export const STSTR_FAADDED	:string = "Ammo (no keys) Added";

export const STSTR_NCON		:string = "No Clipping Mode ON";
export const STSTR_NCOFF		:string = "No Clipping Mode OFF";

export const STSTR_BEHOLD	:string = "inVuln, Str, Inviso, Rad, Allmap, or Lite-amp";
export const STSTR_BEHOLDX	:string = "Power-up Toggled";

export const STSTR_CHOPPERS	:string = "... doesn't suck - GM";
export const STSTR_CLEV		:string = "Changing Level...";

  
  //:::STOP:::
  
  
//
//	F_Finale.C
//
export const E1TEXT :string = "Once you beat the big badasses and\n" +
"clean out the moon base you're supposed\n" +
"to win, aren't you? Aren't you? Where's\n" +
"your fat reward and ticket home? What\n" +
"the hell is this? It's not supposed to\n" +
"end this way!\n" +
"\n" +
"It stinks like rotten meat, but looks\n" +
"like the lost Deimos base.  Looks like\n" +
"you're stuck on The Shores of Hell.\n" +
"The only way out is through.\n" +
"\n" +
"To continue the DOOM experience, play\n" +
"The Shores of Hell and its amazing\n" +
"sequel, Inferno!\n";


export const E2TEXT :string = 
"You've done it! The hideous cyber-\n" +
"demon lord that ruled the lost Deimos\n" +
"moon base has been slain and you\n" +
"are triumphant! But ... where are\n" +
"you? You clamber to the edge of the\n" +
"moon and look down to see the awful\n" +
"truth.\n" +
"\n" +
"Deimos floats above Hell itself!\n" +
"You've never heard of anyone escaping\n" +
"from Hell, but you'll make the bastards\n" +
"sorry they ever heard of you! Quickly,\n" +
"you rappel down to  the surface of\n" +
"Hell.\n" +
"\n" +
"Now, it's on to the final chapter of\n" +
"DOOM! -- Inferno.";


export const E3TEXT :string = 
"The loathsome spiderdemon that\n" +
"masterminded the invasion of the moon\n" +
"bases and caused so much death has had\n" +
"its ass kicked for all time.\n" +
"\n" +
"A hidden doorway opens and you enter.\n" +
"You've proven too tough for Hell to\n" +
"contain, and now Hell at last plays\n" +
"fair -- for you emerge from the door\n" +
"to see the green fields of Earth!\n" +
"Home at last.\n" +
"\n" +
"You wonder what's been happening on\n" +
"Earth while you were battling evil\n" +
"unleashed. It's good that no Hell-\n" +
"spawn could have come through that\n" +
"door with you ...";


export const E4TEXT :string =
"the spider mastermind must have sent forth\n" +
"its legions of hellspawn before your\n" +
"final confrontation with that terrible\n" +
"beast from hell.  but you stepped forward\n" +
"and brought forth eternal damnation and\n" +
"suffering upon the horde as a true hero\n" +
"would in the face of something so evil.\n" +
"\n" +
"besides, someone was gonna pay for what\n" +
"happened to daisy, your pet rabbit.\n" +
"\n" +
"but now, you see spread before you more\n" +
"potential pain and gibbitude as a nation\n" +
"of demons run amok among our cities.\n" +
"\n" +
"next stop, hell on earth!";


// after level 6, put this:

export const C1TEXT :string = 
"YOU HAVE ENTERED DEEPLY INTO THE INFESTED\n" +
"STARPORT. BUT SOMETHING IS WRONG. THE\n" +
"MONSTERS HAVE BROUGHT THEIR OWN REALITY\n" +
"WITH THEM, AND THE STARPORT'S TECHNOLOGY\n" +
"IS BEING SUBVERTED BY THEIR PRESENCE.\n" +
"\n" +
"AHEAD, YOU SEE AN OUTPOST OF HELL, A\n" +
"FORTIFIED ZONE. IF YOU CAN GET PAST IT,\n" +
"YOU CAN PENETRATE INTO THE HAUNTED HEART\n" +
"OF THE STARBASE AND FIND THE CONTROLLING\n" +
"SWITCH WHICH HOLDS EARTH'S POPULATION\n" +
"HOSTAGE.";

// After level 11, put this:

export const C2TEXT :string = 
"YOU HAVE WON! YOUR VICTORY HAS ENABLED\n" +
"HUMANKIND TO EVACUATE EARTH AND ESCAPE\n" +
"THE NIGHTMARE.  NOW YOU ARE THE ONLY\n" +
"HUMAN LEFT ON THE FACE OF THE PLANET.\n" +
"CANNIBAL MUTATIONS, CARNIVOROUS ALIENS,\n" +
"AND EVIL SPIRITS ARE YOUR ONLY NEIGHBORS.\n" +
"YOU SIT BACK AND WAIT FOR DEATH, CONTENT\n" +
"THAT YOU HAVE SAVED YOUR SPECIES.\n" +
"\n" +
"BUT THEN, EARTH CONTROL BEAMS DOWN A\n" +
"MESSAGE FROM SPACE: \"SENSORS HAVE LOCATED\n" +
"THE SOURCE OF THE ALIEN INVASION. IF YOU\n" +
"GO THERE, YOU MAY BE ABLE TO BLOCK THEIR\n" +
"ENTRY.  THE ALIEN BASE IS IN THE HEART OF\n" +
"YOUR OWN HOME CITY, NOT FAR FROM THE\n" +
"STARPORT.\" SLOWLY AND PAINFULLY YOU GET\n" +
"UP AND RETURN TO THE FRAY.";


// After level 20, put this:

export const C3TEXT :string = 
"YOU ARE AT THE CORRUPT HEART OF THE CITY,\n" +
"SURROUNDED BY THE CORPSES OF YOUR ENEMIES.\n" +
"YOU SEE NO WAY TO DESTROY THE CREATURES'\n" +
"ENTRYWAY ON THIS SIDE, SO YOU CLENCH YOUR\n" +
"TEETH AND PLUNGE THROUGH IT.\n" +
"\n" +
"THERE MUST BE A WAY TO CLOSE IT ON THE\n" +
"OTHER SIDE. WHAT DO YOU CARE IF YOU'VE\n" +
"GOT TO GO THROUGH HELL TO GET TO IT?";


// After level 29, put this:

export const C4TEXT :string = 
"THE HORRENDOUS VISAGE OF THE BIGGEST\n" +
"DEMON YOU'VE EVER SEEN CRUMBLES BEFORE\n" +
"YOU, AFTER YOU PUMP YOUR ROCKETS INTO\n" +
"HIS EXPOSED BRAIN. THE MONSTER SHRIVELS\n" +
"UP AND DIES, ITS THRASHING LIMBS\n" +
"DEVASTATING UNTOLD MILES OF HELL'S\n" +
"SURFACE.\n" +
"\n" +
"YOU'VE DONE IT. THE INVASION IS OVER.\n" +
"EARTH IS SAVED. HELL IS A WRECK. YOU\n" +
"WONDER WHERE BAD FOLKS WILL GO WHEN THEY\n" +
"DIE, NOW. WIPING THE SWEAT FROM YOUR\n" +
"FOREHEAD YOU BEGIN THE LONG TREK BACK\n" +
"HOME. REBUILDING EARTH OUGHT TO BE A\n" +
"LOT MORE FUN THAN RUINING IT WAS.\n";



// Before level 31, put this:

export const C5TEXT :string =
"CONGRATULATIONS, YOU'VE FOUND THE SECRET\n" +
"LEVEL! LOOKS LIKE IT'S BEEN BUILT BY\n" +
"HUMANS, RATHER THAN DEMONS. YOU WONDER\n" +
"WHO THE INMATES OF THIS CORNER OF HELL\n" +
"WILL BE.";


// Before level 32, put this:

export const C6TEXT :string =
"CONGRATULATIONS, YOU'VE FOUND THE\n" +
"SUPER SECRET LEVEL!  YOU'D BETTER\n" +
"BLAZE THROUGH THIS ONE!\n";


// after map 06	

export const P1TEXT :string =  
"You gloat over the steaming carcass of the\n" +
"Guardian.  With its death, you've wrested\n" +
"the Accelerator from the stinking claws\n" +
"of Hell.  You relax and glance around the\n" +
"room.  Damn!  There was supposed to be at\n" +
"least one working prototype, but you can't\n" +
"see it. The demons must have taken it.\n" +
"\n" +
"You must find the prototype, or all your\n" +
"struggles will have been wasted. Keep\n" +
"moving, keep fighting, keep killing.\n" +
"Oh yes, keep living, too.";


// after map 11

export const P2TEXT :string =
"Even the deadly Arch-Vile labyrinth could\n" +
"not stop you, and you've gotten to the\n" +
"prototype Accelerator which is soon\n" +
"efficiently and permanently deactivated.\n" +
"\n" +
"You're good at that kind of thing.";


// after map 20

export const P3TEXT :string =
"You've bashed and battered your way into\n" +
"the heart of the devil-hive.  Time for a\n" +
"Search-and-Destroy mission, aimed at the\n" +
"Gatekeeper, whose foul offspring is\n" +
"cascading to Earth.  Yeah, he's bad. But\n" +
"you know who's worse!\n" +
"\n" +
"Grinning evilly, you check your gear, and\n" +
"get ready to give the bastard a little Hell\n" +
"of your own making!";

// after map 30

export const P4TEXT :string =
"The Gatekeeper's evil face is splattered\n" +
"all over the place.  As its tattered corpse\n" +
"collapses, an inverted Gate forms and\n" +
"sucks down the shards of the last\n" +
"prototype Accelerator, not to mention the\n" +
"few remaining demons.  You're done. Hell\n" +
"has gone back to pounding bad dead folks \n" +
"instead of good live ones.  Remember to\n" +
"tell your grandkids to put a rocket\n" +
"launcher in your coffin. If you go to Hell\n" +
"when you die, you'll need it for some\n" +
"final cleaning-up ...";

// before map 31

export const P5TEXT :string =
"You've found the second-hardest level we\n" +
"got. Hope you have a saved game a level or\n" +
"two previous.  If not, be prepared to die\n" +
"aplenty. For master marines only.";

// before map 32

export const P6TEXT :string =
"Betcha wondered just what WAS the hardest\n" +
"level we had ready for ya?  Now you know.\n" +
"No one gets out alive.";


export const T1TEXT :string =
"You've fought your way out of the infested\n" +
"experimental labs.   It seems that UAC has\n" +
"once again gulped it down.  With their\n" +
"high turnover, it must be hard for poor\n" +
"old UAC to buy corporate health insurance\n" +
"nowadays..\n" +
"\n" +
"Ahead lies the military complex, now\n" +
"swarming with diseased horrors hot to get\n" +
"their teeth into you. With luck, the\n" +
"complex still has some warlike ordnance\n" +
"laying around.";


export const T2TEXT :string =
"You hear the grinding of heavy machinery\n" +
"ahead.  You sure hope they're not stamping\n" +
"out new hellspawn, but you're ready to\n" +
"ream out a whole herd if you have to.\n" +
"They might be planning a blood feast, but\n" +
"you feel about as mean as two thousand\n" +
"maniacs packed into one mad killer.\n" +
"\n" +
"You don't plan to go down easy.";


export const T3TEXT :string =
"The vista opening ahead looks real damn\n" +
"familiar. Smells familiar, too -- like\n" +
"fried excrement. You didn't like this\n" +
"place before, and you sure as hell ain't\n" +
"planning to like it now. The more you\n" +
"brood on it, the madder you get.\n" +
"Hefting your gun, an evil grin trickles\n" +
"onto your face. Time to take some names.";

export const T4TEXT :string =
"Suddenly, all is silent, from one horizon\n" +
"to the other. The agonizing echo of Hell\n" +
"fades away, the nightmare sky turns to\n" +
"blue, the heaps of monster corpses start \n" +
"to evaporate along with the evil stench \n" +
"that filled the air. Jeeze, maybe you've\n" +
"done it. Have you really won?\n" +
"\n" +
"Something rumbles in the distance.\n" +
"A blue light begins to glow inside the\n" +
"ruined skull of the demon-spitter.";


export const T5TEXT :string =
"What now? Looks totally different. Kind\n" +
"of like King Tut's condo. Well,\n" +
"whatever's here can't be any worse\n" +
"than usual. Can it?  Or maybe it's best\n" +
"to let sleeping gods lie..";


export const T6TEXT :string =
"Time for a vacation. You've burst the\n" +
"bowels of hell and by golly you're ready\n" +
"for a break. You mutter to yourself,\n" +
"Maybe someone else can kick Hell's ass\n" +
"next time around. Ahead lies a quiet town,\n" +
"with peaceful flowing water, quaint\n" +
"buildings, and presumably no Hellspawn.\n" +
"\n" +
"As you step off the transport, you hear\n" +
"the stomp of a cyberdemon's iron shoe.";



//
// Character cast strings F_FINALE.C
//
export const CC_ZOMBIE	:string = "ZOMBIEMAN";
export const CC_SHOTGUN	:string = "SHOTGUN GUY";
export const CC_HEAVY	  :string = "HEAVY WEAPON DUDE";
export const CC_IMP	    :string = "IMP";
export const CC_DEMON	  :string = "DEMON";
export const CC_LOST	  :string = "LOST SOUL";
export const CC_CACO	  :string = "CACODEMON";
export const CC_HELL	  :string = "HELL KNIGHT";
export const CC_BARON	  :string = "BARON OF HELL";
export const CC_ARACH	  :string = "ARACHNOTRON";
export const CC_PAIN	  :string = "PAIN ELEMENTAL";
export const CC_REVEN	  :string = "REVENANT";
export const CC_MANCU	  :string = "MANCUBUS";
export const CC_ARCH	  :string = "ARCH-VILE";
export const CC_SPIDER	:string = "THE SPIDER MASTERMIND";
export const CC_CYBER	  :string = "THE CYBERDEMON";
export const CC_HERO	  :string = "OUR HERO";

}
//-----------------------------------------------------------------------------
//
// $Log:$
//
//-----------------------------------------------------------------------------
