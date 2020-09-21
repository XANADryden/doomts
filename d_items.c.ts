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
//
//-----------------------------------------------------------------------------

//static const char
//rcsid[] = "$Id:$";

// We are referring to sprite numbers.
import "info.h.ts";

//#ifdef __GNUG__
//#pragma implementation "d_items.h"
//#endif
import "d_items.h.ts";


//
// PSPRITE ACTIONS for waepons.
// This struct controls the weapon animations.
//
// Each entry is:
//   ammo/amunition type
//  upstate
//  downstate
// readystate
// atkstate, i.e. attack/fire/hit frame
// flashstate, muzzle flash
//
globalThis.weaponinfo :weaponinfo_t[] =         //length = NUMWEAPONS
[
    {
        // fist
        ammo : am_noammo,
        upstate : S_PUNCHUP,
        downstate : S_PUNCHDOWN,
        readystate : S_PUNCH,
        atkstate : S_PUNCH1,
        flashstate : S_NULL
    },    
    {
        // pistol
        ammo : am_clip,
        upstate : S_PISTOLUP,
        downstate : S_PISTOLDOWN,
        readystate : S_PISTOL,
        atkstate : S_PISTOL1,
        flashstate : S_PISTOLFLASH
    },    
    {
        // shotgun
        ammo : am_shell,
        upstate : S_SGUNUP,
        downstate : S_SGUNDOWN,
        readystate : S_SGUN,
        atkstate : S_SGUN1,
        flashstate : S_SGUNFLASH1
    },
    {
        // chaingun
        ammo : am_clip,
        upstate : S_CHAINUP,
        downstate : S_CHAINDOWN,
        readystate : S_CHAIN,
        atkstate : S_CHAIN1,
        flashstate : S_CHAINFLASH1
    },
    {
        // missile launcher
        ammo : am_misl,
        upstate : S_MISSILEUP,
        downstate : S_MISSILEDOWN,
        readystate : S_MISSILE,
        atkstate : S_MISSILE1,
        flashstate : S_MISSILEFLASH1
    },
    {
        // plasma rifle
        ammo : am_cell,
        upstate : S_PLASMAUP,
        downstate : S_PLASMADOWN,
        readystate : S_PLASMA,
        atkstate : S_PLASMA1,
        flashstate : S_PLASMAFLASH1
    },
    {
        // bfg 9000
        ammo : am_cell,
        upstate : S_BFGUP,
        downstate : S_BFGDOWN,
        readystate : S_BFG,
        atkstate : S_BFG1,
        flashstate : S_BFGFLASH1
    },
    {
        // chainsaw
        ammo : am_noammo,
        upstate : S_SAWUP,
        downstate : S_SAWDOWN,
        readystate : S_SAW,
        atkstate : S_SAW1,
        flashstate : S_NULL
    },
    {
        // super shotgun
        ammo : am_shell,
        upstate : S_DSGUNUP,
        downstate : S_DSGUNDOWN,
        readystate : S_DSGUN,
        atkstate : S_DSGUN1,
        flashstate : S_DSGUNFLASH1
    },    
];
