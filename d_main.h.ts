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
// $Log:$
//
// DESCRIPTION:
//  System specific interface stuff.
//
//-----------------------------------------------------------------------------



if (typeof __D_MAIN__ == "undefined"){
export const __D_MAIN__ :boolean = true;

import "d_event.h.ts"

/*#ifdef __GNUG__
#pragma interface
#endif*/

import "c_types.ts";



export const MAXWADFILES :bigint = 20;
globalThis.wadfiles;// :u_char[]; //char*[MAXWADFILES]

declare export function D_AddFile (file :u_char) :void;



//
// D_DoomMain()
// Not a globally visible function, just included for source reference,
// calls all startup code, parses command line options.
// If not overrided by user input, calls N_AdvanceDemo.
//
declare export function D_DoomMain () :void;

// Called by IO functions when input is detected.
declare export function D_PostEvent (ev :event_t) :void;

	

//
// BASE LEVEL
//
declare export function D_PageTicker () :void;
declare export function D_PageDrawer () :void;
declare export function D_AdvanceDemo () :void;
declare export function D_StartTitle () :void;

}
