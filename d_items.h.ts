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
//	Items: key cards, artifacts, weapon, ammunition.
//
//-----------------------------------------------------------------------------


if (typeof __D_ITEMS__ == "undefined"){
export const __D_ITEMS__ :boolean = true;

import "doomdef.h.ts";

/*if (typeof __GNUG__ != "undefined") {
#pragma interface
}*/


// Weapon info: sprite frames, ammunition use.
export interface weaponinfo_t
{
    ammo        :ammotype_t;
    upstate     :bigint;
    downstate   :bigint;
    readystate  :bigint;
    atkstate    :bigint;
    flashstate  :bigint;

}

globalThis. weaponinfo  :weaponinfo_t[];      //length = NUMWEAPONS

}
//-----------------------------------------------------------------------------
//
// $Log:$
//
//-----------------------------------------------------------------------------
