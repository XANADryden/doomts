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
//
//    
//-----------------------------------------------------------------------------


if (typeof __D_EVENT__ == undefined){
export const __D_EVENT__ :boolean = true;


import "doomtype.h.ts";


//
// Event handling.
//

// Input event types.
export enum evtype_t
{
    ev_keydown = 0,
    ev_keyup,
    ev_mouse,
    ev_joystick
}

// Event structure.
export interface event_t
{
    type    :evtype_t;
    data1   :bigint;		// keys / mouse/joystick buttons
    data2   :bigint;		// mouse/joystick x move
    data3   :bigint;		// mouse/joystick y move
}

 
export enum gameaction_t
{
    ga_nothing = 0,
    ga_loadlevel,
    ga_newgame,
    ga_loadgame,
    ga_savegame,
    ga_playdemo,
    ga_completed,
    ga_victory,
    ga_worlddone,
    ga_screenshot
}



//
// Button/action code definitions.
//
export enum buttoncode_t
{
    // Press "Fire".
    BT_ATTACK :bigint = 1n,
    // Use button, to open doors, activate switches.
    BT_USE    :bigint = 2n,

    // Flag: game events, not really buttons.
    BT_SPECIAL     :bigint = 128n,
    BT_SPECIALMASK :bigint = 3n,
    
    // Flag, weapon change pending.
    // If true, the next 3 bits hold weapon num.
    BT_CHANGE :bigint = 4n,
    // The 3bit weapon mask and shift, convenience.
    BT_WEAPONMASK  :bigint = (8n+16n+32n),
    BT_WEAPONSHIFT :bigint = 3n,

    // Pause the game.
    BTS_PAUSE :bigint = 1n,
    // Save the game at each console.
    BTS_SAVEGAME :bigint = 2n,

    // Savegame slot numbers
    //  occupy the second byte of buttons.    
    BTS_SAVEMASK  :bigint = (4n+8n+16n),
    BTS_SAVESHIFT :bigint = 2n,
  
}




//
// GLOBAL VARIABLES
//
export const MAXEVENTS  :bigint = 64n;

globalThis. events      :event_t[];        //needs length of MAXEVENTS
globalThis. eventhead   :bigint;
globalThis.	eventtail   :bigint;

globalThis. gameaction  :gameaction_t;


}
//-----------------------------------------------------------------------------
//
// $Log:$
//
//-----------------------------------------------------------------------------
