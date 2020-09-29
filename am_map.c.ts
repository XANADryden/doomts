//#include <stdio.h>

import {u_char} from "c_types";
import {char} from "c_types";

import * as z_zone from "z_zone.h.ts";
import * as doomdef from "doomdef.h.ts";
import * as st_stuff from "st_stuff.h.ts";
import * as p_local from "p_local.h.ts";
import * as w_wad from "w_wad.h.ts";

import * as m_cheat from "m_cheat.h.ts";
import * as i_system from "i_system.h.ts";

// Needs access to LFB.
import * as v_video from "v_video.h.ts";

// State.
import * as doomstat from "doomstat.h.ts";
import * as r_state from "r_state.h.ts";

// Data.
import * as dstrings from "dstrings.h.ts";

//import * as am_map from "am_map.h.ts";
import {AM_MSGHEADER} from "am_map.h";
import {AM_MSGENTERED} from "am_map.h";
import {AM_MSGEXITED} from "am_map.h";
import {AM_Responder} from "am_map.h"
import {AM_Ticker} from "am_map.h";
import {AM_Drawer} from "am_map.h";
import {AM_Stop} from "am_map.h";



// For use if I do walls with outsides/insides
const REDS:        number = (256-5*16);
const REDRANGE:    number = 16;
const BLUES:       number = (256-4*16+8);
const BLUERANGE:   number = 8;
const GREENS:      number = (7*16);
const GREENRANGE:  number = 16;
const GRAYS:       number = (6*16);
const GRAYSRANGE:  number = 16;
const BROWNS:      number = (4*16);
const BROWNRANGE:  number = 16;
const YELLOWS:     number = (256-32+7);
const YELLOWRANGE: number = 1;
const BLACK:       number = 0;
const WHITE:       number = (256-47);

// Automap colors
const BACKGROUND:       number = BLACK;
const YOURCOLORS:       number = WHITE;
const YOURRANGE:        number = 0;
const WALLCOLORS:       number = REDS;
const WALLRANGE:        number = REDRANGE;
const TSWALLCOLORS:     number = GRAYS;
const TSWALLRANGE:      number = GRAYSRANGE;
const FDWALLCOLORS:     number = BROWNS;
const FDWALLRANGE:      number = BROWNRANGE;
const CDWALLCOLORS:     number = YELLOWS;
const CDWALLRANGE:      number = YELLOWRANGE;
const THINGCOLORS:      number = GREENS;
const THINGRANGE:       number = GREENRANGE;
const SECRETWALLCOLORS: number = WALLCOLORS;
const SECRETWALLRANGE:  number = WALLRANGE;
const GRIDCOLORS:       number = (GRAYS + GRAYSRANGE/2);
const GRIDRANGE:        number = 0;
const XHAIRCOLORS:      number = GRAYS;

// drawing stuff
const FB:number = 0

const AM_PANDOWNKEY   :number = KEY_DOWNARROW;
const AM_PANUPKEY     :number = KEY_UPARROW;
const AM_PANRIGHTKEY  :number = KEY_RIGHTARROW;
const AM_PANLEFTKEY   :number = KEY_LEFTARROW;
const AM_ZOOMINKEY    :string = '=';
const AM_ZOOMOUTKEY   :string = '-';
const AM_STARTKEY     :number = KEY_TAB;
const AM_ENDKEY       :number = KEY_TAB;
const AM_GOBIGKEY     :string = '0';
const AM_FOLLOWKEY    :string = 'f';
const AM_GRIDKEY      :string = 'g';
const AM_MARKKEY      :string = 'm';
const AM_CLEARMARKKEY :string = 'c';

const AM_NUMMARKPOINTS :number = 10;

// scale on entry
const INITSCALEMTOF :number = (.2*FRACUNIT);
// how much the automap moves window per tic in frame-buffer coordinates
// moves 140 pixels in 1 second
const F_PANINC :number = 4;
// how much zoom-in per tic
// goes to 2x in 1 second
const M_ZOOMIN :number = Math.floor(1.02*FRACUNIT);
// how much zoom-out per tic
// pulls out to 0.5x in 1 second
const M_ZOOMOUT :number = Math.floor(FRACUNIT/1.02);

// translates between frame-buffer and map distances
function FTOM(x :number) :number {return(FixedMul(((x)<<16),am_map.scale_ftom))}
function MTOF(x :number) :number {return(FixedMul((x),am_map.scale_mtof)>>16)}
// translates between frame-buffer and map coordinates
function CXMTOF(x :number) :number {return(am_map.f_x + MTOF((x)-am_map.m_x))}
function CYMTOF(y :number) :number {return(am_map.f_y + (am_map.f_h - MTOF((y)-am_map.m_y)))}

// the following is crap
const LINE_NEVERSEE = ML_DONTDRAW;

//type fpoint_t = bigint[2]
//xy_type="x"|"y";
//type fpoint_t = Record<xy_type,bigint>;
interface fpoint_t{
    x:number;
    y:number;
}

interface fline_t{
    a:fpoint_t;
    b:fpoint_t;
}

interface mpoint_t{
    x:fixed_t;
    y:fixed_t;
}

interface mline_t{
    a:mpoint_t;
    b:mpoint_t;
}

interface islope_t{
    slp:fixed_t;
    islp:fixed_t;
}



//
// The vector graphics for the automap.
//  A line drawing of the player pointing right,
//   starting from the middle.
//
let R :number = ((8*PLAYERRADIUS)/7);
var player_arrow:mline_t[] = [
    {a:{ x:-R+R/8, y:0 }, b:{ x:R, y:0 } }, // -----
    {a:{ x:R, y:0 }, b:{ x:R-R/2, y:R/4 } },  // ----->
    {a:{ x:R, 0 }, b:{ x:R-R/2, y:-R/4 } },
    {a:{ x:-R+R/8, 0 }, b:{ x:-R-R/8, y:R/4 } }, // >---->
    {a:{ x:-R+R/8, 0 }, b:{ x:-R-R/8, y:-R/4 } },
    {a:{ x:-R+3*R/8, 0 }, b:{ x:-R+R/8, y:R/4 } }, // >>--->
    {a:{ x:-R+3*R/8, 0 }, b:{ x:R+R/8, y:-R/4 } }
];
//#undef R
const NUMPLYRLINES = (sizeof(player_arrow)/sizeof(mline_t));


//#define R ((8*PLAYERRADIUS)/7)
var cheat_player_arrow:mline_t[] = [
    {a:{ x:-R+R/8, y:0 }, b:{ x:R, y:0 } }, // -----
    {a:{ x:R, y:0 }, b:{ x:R-R/2, y:R/6 } },  // ----->
    {a:{ x:R, y:0 }, b:{ x:R-R/2, y:-R/6 } },
    {a:{ x:-R+R/8, y:0 }, b:{ x:-R-R/8, y:R/6 } }, // >----->
    {a:{ x:-R+R/8, y:0 }, b:{ x:-R-R/8, y:-R/6 } },
    {a:{ x:-R+3*R/8, y:0 }, b:{ x:-R+R/8, y:R/6 } }, // >>----->
    {a:{ x:-R+3*R/8, y:0 }, b:{ x:-R+R/8, y:-R/6 } },
    {a:{ x:-R/2, y:0 }, b:{ x:-R/2, y:-R/6 } }, // >>-d--->
    {a:{ x:-R/2, y:-R/6 }, b:{ x:-R/2+R/6, y:-R/6 } },
    {a:{ x:-R/2+R/6, y:-R/6 }, b:{ x:-R/2+R/6, y:R/4 } },
    {a:{ x:-R/6, y:0 }, b:{ x:-R/6, y:-R/6 } }, // >>-dd-->
    {a:{ x:-R/6, y:-R/6 }, b:{ x:0, y:-R/6 } },
    {a:{ x:0, y:-R/6 }, b:{ x:0, y:R/4 } },
    {a:{ x:R/6, y:R/4 }, b:{ x:R/6, y:-R/7 } }, // >>-ddt->
    {a:{ x:R/6, y:-R/7 }, b:{ x:R/6+R/32, y:-R/7-R/32 } },
    {a:{ x:R/6+R/32, y:-R/7-R/32 }, b:{ x:R/6+R/10, y:-R/7 } }
];
//#undef R
const NUMCHEATPLYRLINES = (sizeof(cheat_player_arrow)/sizeof(mline_t));

R = (FRACUNIT);
var triangle_guy:mline_t [] = [
    {a:{ x:-.867*R, y:-.5*R }, b:{ x:.867*R, y:-.5*R } },
    {a:{ x:.867*R, y:-.5*R } , b:{ x:0, y:R } },
    {a:{ x:0, y:R }, b:{ x:-.867*R, y:-.5*R } }
];
const NUMTRIANGLEGUYLINES = (sizeof(triangle_guy)/sizeof(mline_t));

//#define R (FRACUNIT)
var thintriangle_guy:mline_t [] = [
    {a:{ x:-.5*R, y:-.7*R }, b:{ x:R, y:0 } },
    {a:{ x:R, y:0 }, b:{ x:-.5*R, y:.7*R } },
    {a:{ x:-.5*R, y:.7*R }, b:{ x:-.5*R, y:-.7*R } }
];
const NUMTHINTRIANGLEGUYLINES = (sizeof(thintriangle_guy)/sizeof(mline_t));


var    automapactive :boolean = false;

interface am_map_t {
    
    cheating?:   number;
    grid?:       number;
    
    leveljuststarted?:  number;
    
    finit_width?:       number;
    finit_height?:      number;
    
    f_x?: number; f_y?: number;
    f_w?: number; f_h?: number;
    
    lightlev?:      number;
    fb?:            number;
    amclock?:       number;
    
    m_paninc?:       mpoint_t;
    mtof_zoommul?:  fixed_t;
    ftom_zoommul?:  fixed_t;
    
    m_x?:  fixed_t; m_y?:  fixed_t;
    m_x2?: fixed_t; m_y2?: fixed_t;
    m_w?:  fixed_t;
    m_h?:  fixed_t;
    
    min_x?:  fixed_t;
    min_y?:  fixed_t; 
    max_x?:  fixed_t;
    max_y?:  fixed_t;
    
    max_w?:  fixed_t;
    max_h?:  fixed_t;

    min_w?:  fixed_t;
    min_h?:  fixed_t;
    
    
    min_scale_mtof?:  fixed_t;
    max_scale_mtof?:  fixed_t;

    old_m_w?: fixed_t; old_m_h?: fixed_t;
    old_m_x?: fixed_t; old_m_y?: fixed_t;
    
    
    f_oldloc?:   mpoint_t;

    scale_mtof?: fixed_t;
    scale_ftom?: fixed_t;
    
    plr?:        player_t;
    
    marknums?:       patch_t[]; // length of 10
    markpoints?:     mpoint_t[]; // length of AM_NUMMARKPOINTS
    markpointnum?:   number;

    followplayer?:   number; // specifies whether to follow the player around

    cheat_amap_seq?: u_char[];
    
    cheat_amap?: cheatseq_t;

    stopped?:    boolean;
    
    st_notify?: event_t;
    
    lastlevel?: number;
    lastepisode?:number;
    
    cheatstate?:number;
    bigstate?:  number;
    buffer?  :[char, char, char, char, char, char, char, char, char, char, char, char, char, char, char, char, char, char, char, char];
}

var am_map :am_map_t = {
    cheating : 0,
    grid     : 0,

    leveljuststarted : 1,     // kluge until AM_LevelInit() is called


    finit_width   : SCREENWIDTH,
    finit_height  : SCREENHEIGHT - 32,

    // location of window on screen
    f_x : undefined,
    f_y : undefined,

    // size of window on screen
    f_w : undefined,
    f_h : undefined,

    lightlev : undefined,         // used for funky strobing effect
    fb       : undefined,         // pseudo-frame buffer    //byte*
    amclock  : undefined,

    m_paninc     : undefined,  // how far the window pans each tic (map coords)
    mtof_zoommul : undefined,  // how far the window zooms in each tic (map coords)
    ftom_zoommul : undefined,  // how far the window zooms in each tic (fb coords)

    m_x  : undefined, m_y  : undefined,   // LL x,y where the window is on the map (map coords)
    m_x2 : undefined, m_y2 : undefined,   // UR x,y where the window is on the map (map coords)

    //
    // width/height of window on map (map coords)
    //
    m_w : undefined,
    m_h : undefined,

    // based on level size
    min_x   : undefined,
    min_y   : undefined, 
    max_x   : undefined,
    max_y   : undefined,

    max_w   : undefined, // max_x-min_x
    max_h   : undefined, // max_y-min_y

    // based on player size
    min_w   : undefined,
    min_h   : undefined,


    min_scale_mtof : undefined, // used to tell when to stop zooming out
    max_scale_mtof : undefined, // used to tell when to stop zooming in

    // old stuff for recovery later
    old_m_w : undefined, old_m_h : undefined,
    old_m_x : undefined, old_m_y : undefined,

    // old location used by the Follower routine
    f_oldloc    : undefined,

    // used by MTOF to scale from map-to-frame-buffer coords
    scale_mtof  : INITSCALEMTOF,
    // used by FTOM to scale from frame-buffer-to-map coords (=1/scale_mtof)
    scale_ftom  : undefined,

    plr         : undefined, // the player represented by an arrow

    marknums    : undefined, // numbers used for marking by the automap
    markpoints  : undefined, // where the points are
    markpointnum : 0,        // next point to be assigned

    followplayer : 1, // specifies whether to follow the player around

    cheat_amap_seq : [ 0xb2, 0x26, 0x26, 0x2e, 0xff ],
    
    cheat_amap : [ cheat_amap_seq, 0 ],
    
    stopped : true
};



let viewactive_wtype: boolean;
globalThis.viewactive = viewactive_wtype;
//extern byte screens[][SCREENWIDTH*SCREENHEIGHT];



declare function
V_MarkRect
( x:      number,
  y:      number,
  width:  number,
  height: number)
: void;

// Calculates the slope and slope according to the x-axis of a line
// segment in map coordinates (with the upright y-axis n' all) so
// that it can be used with the brain-dead drawing stuff.

function
AM_getIslope
( ml:   mline_t,
  is:   islope_t ): void
{
    let dx: number, dy: number;

    dy = ml.a.y - ml.b.y;
    dx = ml.b.x - ml.a.x;
    is.islp = (!dy) ? (dx<0?-MAXINT:MAXINT) : FixedDiv(dx, dy);
    is.slp = (!dx) ? (dy<0?-MAXINT:MAXINT) : FixedDiv(dy, dx);

}

//
//
//
function AM_activateNewScale(): void
{
    am_map.m_x += am_map.m_w/2;
    am_map.m_y += am_map.m_h/2;
    am_map.m_w = FTOM(am_map.f_w);
    am_map.m_h = FTOM(am_map.f_h);
    am_map.m_x -= am_map.m_w/2;
    am_map.m_y -= am_map.m_h/2;
    am_map.m_x2 = am_map.m_x + am_map.m_w;
    am_map.m_y2 = am_map.m_y + am_map.m_h;
}

//
//
//
function AM_saveScaleAndLoc(): void
{
    am_map.old_m_x = am_map.m_x;
    am_map.old_m_y = am_map.m_y;
    am_map.old_m_w = am_map.m_w;
    am_map.old_m_h = am_map.m_h;
}

//
//
//
function AM_restoreScaleAndLoc(): void
{

    am_map.m_w = am_map.old_m_w;
    am_map.m_h = am_map.old_m_h;
    if (!am_map.followplayer)
    {
    am_map.m_x = am_map.old_m_x;
    am_map.m_y = am_map.old_m_y;
    } else {
    am_map.m_x = am_map.plr.mo.x - am_map.m_w/2;
    am_map.m_y = am_map.plr.mo.y - am_map.m_h/2;
    }
    am_map.m_x2 = am_map.m_x + am_map.m_w;
    am_map.m_y2 = am_map.m_y + am_map.m_h;
    
    // Change the scaling multipliers
    am_map.scale_mtof = FixedDiv(am_map.f_w<<FRACBITS, am_map.m_w);   // FixedDiv
    am_map.scale_ftom = FixedDiv(FRACUNIT, am_map.scale_mtof);
}

//
// adds a marker at the current location
//
function AM_addMark(): void
{
    am_map.markpoints[am_map.markpointnum].x = am_map.m_x + am_map.m_w/2;
    am_map.markpoints[am_map.markpointnum].y = am_map.m_y + am_map.m_h/2;
    am_map.markpointnum = (am_map.markpointnum + 1) % AM_NUMMARKPOINTS;

}

//
// Determines bounding box of all vertices,
// sets global variables controlling zoom range.
//
function AM_findMinMaxBoundaries(): void
{
    var
    i: number,
    a: fixed_t,
    b: fixed_t;

    am_map.min_x = am_map.min_y =  MAXINT;
    am_map.max_x = am_map.max_y = -MAXINT;
  
    for (i=0;i<numvertexes;i++)
    {
    if (vertexes[i].x < am_map.min_x)
        am_map.min_x = vertexes[i].x;
    else if (vertexes[i].x > am_map.max_x)
        am_map.max_x = vertexes[i].x;
    
    if (vertexes[i].y < am_map.min_y)
        am_map.min_y = vertexes[i].y;
    else if (vertexes[i].y > am_map.max_y)
        am_map.max_y = vertexes[i].y;
    }
  
    am_map.max_w = am_map.max_x - am_map.min_x;
    am_map.max_h = am_map.max_y - am_map.min_y;

    am_map.min_w = 2*PLAYERRADIUS; // const? never changed?
    am_map.min_h = 2*PLAYERRADIUS;

    a = FixedDiv(am_map.f_w<<FRACBITS, am_map.max_w);
    b = FixedDiv(am_map.f_h<<FRACBITS, am_map.max_h);
  
    am_map.min_scale_mtof = a < b ? a : b;
    am_map.max_scale_mtof = FixedDiv(am_map.f_h<<FRACBITS, 2*PLAYERRADIUS);

}


//
//
//
function AM_changeWindowLoc(): void
{
    if (am_map.m_paninc.x || am_map.m_paninc.y)
    {
    am_map.followplayer = 0;
    am_map.f_oldloc.x = MAXINT;
    }

    am_map.m_x += am_map.m_paninc.x;
    am_map.m_y += am_map.m_paninc.y;

    if (am_map.m_x + am_map.m_w/2 > am_map.max_x)
    am_map.m_x = am_map.max_x - am_map.m_w/2;
    else if (am_map.m_x + am_map.m_w/2 < am_map.min_x)
    am_map.m_x = am_map.min_x - am_map.m_w/2;
  
    if (am_map.m_y + am_map.m_h/2 > am_map.max_y)
    am_map.m_y = am_map.max_y - am_map.m_h/2;
    else if (am_map.m_y + am_map.m_h/2 < am_map.min_y)
    am_map.m_y = am_map.min_y - am_map.m_h/2;

    am_map.m_x2 = am_map.m_x + am_map.m_w;
    am_map.m_y2 = am_map.m_y + am_map.m_h;
}


//
//
//
function AM_initVariables(): void
{
    var pnum: number;
    
    am_map.st_notify: event_t = { ev_keyup, AM_MSGENTERED };        //static event_t st_notify = { ev_keyup, AM_MSGENTERED };

    automapactive = true;
    am_map.fb = screens[0];

    am_map.f_oldloc.x = MAXINT;
    am_map.amclock = 0;
    am_map.lightlev = 0;

    am_map.m_paninc.x = am_map.m_paninc.y = 0;
    am_map.ftom_zoommul = FRACUNIT;
    am_map.mtof_zoommul = FRACUNIT;

    am_map.m_w = FTOM(am_map.f_w);
    am_map.m_h = FTOM(am_map.f_h);

    // find player to center on initially
    if (!playeringame[pnum = consoleplayer])
    for (pnum = 0; pnum < MAXPLAYERS; pnum++)
        if (playeringame[pnum]) break;
    
    
    am_map.plr = players[pnum];
    am_map.m_x = am_map.plr.mo.x - am_map.m_w/2;
    am_map.m_y = am_map.plr.mo.y - am_map.m_h/2;
    AM_changeWindowLoc();

    // for saving & restoring
    am_map.old_m_x = am_map.m_x;
    am_map.old_m_y = am_map.m_y;
    am_map.old_m_w = am_map.m_w;
    am_map.old_m_h = am_map.m_h;

    // inform the status bar of the change
    ST_Responder(am_map.st_notify);

}

//
// 
//
function AM_loadPics(): void
{
    //var i: number;
    var namebuf: char[];   //char namebuf[9]
  
    for (var i:number=0;i<10;i++)
    {
    sprintf(namebuf, "AMMNUM%d", i);
    am_map.marknums[i] = W_CacheLumpName(namebuf, PU_STATIC);
    }

}

function AM_unloadPics(): void
{
    for (var i:number=0;i<10;i++)
        Z_ChangeTag(am_map.marknums[i], PU_CACHE);

}

function AM_clearMarks(): void
{
    for (var i:number=0;i<AM_NUMMARKPOINTS;i++)
        am_map.markpoints[i].x = -1; // means empty
    am_map.markpointnum = 0;
}

//
// should be called at the start of every level
// right now, i figure it out myself
//
function AM_LevelInit(): void
{
    am_map.leveljuststarted = 0;

    am_map.f_x = am_map.f_y = 0;
    am_map.f_w = am_map.finit_width;
    am_map.f_h = am_map.finit_height;

    AM_clearMarks();

    AM_findMinMaxBoundaries();
    am_map.scale_mtof = FixedDiv(am_map.min_scale_mtof, Math.floor(0.7*FRACUNIT);
    if (am_map.scale_mtof > am_map.max_scale_mtof)
        am_map.scale_mtof = am_map.min_scale_mtof;
    am_map.scale_ftom = FixedDiv(FRACUNIT, am_map.scale_mtof);
}




//
//
//
function AM_Stop (): void
{
    am_map.st_notify = { 0, ev_keyup, AM_MSGEXITED };  //static event_t st_notify = { 0, ev_keyup, AM_MSGEXITED };

    AM_unloadPics();
    am_map.automapactive = false;
    ST_Responder(am_map.st_notify);
    am_map.stopped = true;
}

//
//
//
function AM_Start (): void
{
    am_map.lastlevel = -1; am_map.lastepisode = -1;

    if (!am_map.stopped) AM_Stop();
    am_map.stopped = false;
    if (am_map.lastlevel != gamemap || am_map.lastepisode != gameepisode)
    {
    AM_LevelInit();
    am_map.lastlevel = gamemap;
    am_map.lastepisode = gameepisode;
    }
    AM_initVariables();
    AM_loadPics();
}

//
// set the window scale to the maximum size
//
function AM_minOutWindowScale(): void
{
    am_map.scale_mtof = am_map.min_scale_mtof;
    am_map.scale_ftom = FixedDiv(FRACUNIT, am_map.scale_mtof);
    AM_activateNewScale();
}

//
// set the window scale to the minimum size
//
function AM_maxOutWindowScale(): void
{
    am_map.scale_mtof = am_map.max_scale_mtof;
    am_map.scale_ftom = FixedDiv(FRACUNIT, am_map.scale_mtof);
    AM_activateNewScale();
}


//
// Handle events (user inputs) in automap mode
//
function
AM_Responder
( ev:   event_t ): boolean
{

    var rc: boolean;
    am_map.cheatstate=0;
    am_map.bigstate=0;
    //am_map.static char buffer[20];

    rc = false;

    if (!automapactive)
    {
        if (ev.type == ev_keydown && ev.data1 == AM_STARTKEY)
        {
            AM_Start ();
            viewactive = false;
            rc = true;
        }
    }

    else if (ev.type == ev_keydown)
    {

    rc = true;
    switch(ev.data1)
    {
      case AM_PANRIGHTKEY: // pan right
        if (!am_map.followplayer) am_map.m_paninc.x = FTOM(F_PANINC);
        else rc = false;
        break;
      case AM_PANLEFTKEY: // pan left
        if (!am_map.followplayer) am_map.m_paninc.x = -FTOM(F_PANINC);
        else rc = false;
        break;
      case AM_PANUPKEY: // pan up
        if (!am_map.followplayer) am_map.m_paninc.y = FTOM(F_PANINC);
        else rc = false;
        break;
      case AM_PANDOWNKEY: // pan down
        if (!am_map.followplayer) am_map.m_paninc.y = -FTOM(F_PANINC);
        else rc = false;
        break;
      case AM_ZOOMOUTKEY: // zoom out
        am_map.mtof_zoommul = M_ZOOMOUT;
        am_map.ftom_zoommul = M_ZOOMIN;
        break;
      case AM_ZOOMINKEY: // zoom in
        am_map.mtof_zoommul = M_ZOOMIN;
        am_map.ftom_zoommul = M_ZOOMOUT;
        break;
      case AM_ENDKEY:
        am_map.bigstate = 0;
        viewactive = true;
        AM_Stop ();
        break;
      case AM_GOBIGKEY:
        am_map.bigstate = !am_map.bigstate;
        if (am_map.bigstate)
        {
            AM_saveScaleAndLoc();
            AM_minOutWindowScale();
        }
        else AM_restoreScaleAndLoc();
        break;
      case AM_FOLLOWKEY:
        am_map.followplayer = !am_map.followplayer;
        am_map.f_oldloc.x = MAXINT;
        am_map.plr.message = am_map.followplayer ? AMSTR_FOLLOWON : AMSTR_FOLLOWOFF;
        break;
      case AM_GRIDKEY:
        am_map.grid = !am_map.grid;
        am_map.plr.message = am_map.grid ? AMSTR_GRIDON : AMSTR_GRIDOFF;
        break;
      case AM_MARKKEY:
        sprintf(am_map.buffer, "%s %d", AMSTR_MARKEDSPOT, am_map.markpointnum);//:::CONTINUE:::
        plr->message = buffer;
        AM_addMark();
        break;
      case AM_CLEARMARKKEY:
        AM_clearMarks();
        plr->message = AMSTR_MARKSCLEARED;
        break;
      default:
        cheatstate=0;
        rc = false;
    }
    if (!deathmatch && cht_CheckCheat(&cheat_amap, ev->data1))
    {
        rc = false;
        cheating = (cheating+1) % 3;
    }
    }

    else if (ev->type == ev_keyup)
    {
    rc = false;
    switch (ev->data1)
    {
      case AM_PANRIGHTKEY:
        if (!followplayer) m_paninc.x = 0;
        break;
      case AM_PANLEFTKEY:
        if (!followplayer) m_paninc.x = 0;
        break;
      case AM_PANUPKEY:
        if (!followplayer) m_paninc.y = 0;
        break;
      case AM_PANDOWNKEY:
        if (!followplayer) m_paninc.y = 0;
        break;
      case AM_ZOOMOUTKEY:
      case AM_ZOOMINKEY:
        mtof_zoommul = FRACUNIT;
        ftom_zoommul = FRACUNIT;
        break;
    }
    }

    return rc;

}


//
// Zooming
//
void AM_changeWindowScale(void)
{

    // Change the scaling multipliers
    scale_mtof = FixedMul(scale_mtof, mtof_zoommul);
    scale_ftom = FixedDiv(FRACUNIT, scale_mtof);

    if (scale_mtof < min_scale_mtof)
    AM_minOutWindowScale();
    else if (scale_mtof > max_scale_mtof)
    AM_maxOutWindowScale();
    else
    AM_activateNewScale();
}


//
//
//
void AM_doFollowPlayer(void)
{

    if (f_oldloc.x != plr->mo->x || f_oldloc.y != plr->mo->y)
    {
    m_x = FTOM(MTOF(plr->mo->x)) - m_w/2;
    m_y = FTOM(MTOF(plr->mo->y)) - m_h/2;
    m_x2 = m_x + m_w;
    m_y2 = m_y + m_h;
    f_oldloc.x = plr->mo->x;
    f_oldloc.y = plr->mo->y;

    //  m_x = FTOM(MTOF(plr->mo->x - m_w/2));
    //  m_y = FTOM(MTOF(plr->mo->y - m_h/2));
    //  m_x = plr->mo->x - m_w/2;
    //  m_y = plr->mo->y - m_h/2;

    }

}

//
//
//
void AM_updateLightLev(void)
{
    static nexttic = 0;
    //static int litelevels[] = { 0, 3, 5, 6, 6, 7, 7, 7 };
    static int litelevels[] = { 0, 4, 7, 10, 12, 14, 15, 15 };
    static int litelevelscnt = 0;
   
    // Change light level
    if (amclock>nexttic)
    {
    lightlev = litelevels[litelevelscnt++];
    if (litelevelscnt == sizeof(litelevels)/sizeof(int)) litelevelscnt = 0;
    nexttic = amclock + 6 - (amclock % 6);
    }

}


//
// Updates on Game Tick
//
void AM_Ticker (void)
{

    if (!automapactive)
    return;

    amclock++;

    if (followplayer)
    AM_doFollowPlayer();

    // Change the zoom if necessary
    if (ftom_zoommul != FRACUNIT)
    AM_changeWindowScale();

    // Change x,y location
    if (m_paninc.x || m_paninc.y)
    AM_changeWindowLoc();

    // Update light level
    // AM_updateLightLev();

}


//
// Clear automap frame buffer.
//
void AM_clearFB(int color)
{
    memset(fb, color, f_w*f_h);
}


//
// Automap clipping of lines.
//
// Based on Cohen-Sutherland clipping algorithm but with a slightly
// faster reject and precalculated slopes.  If the speed is needed,
// use a hash algorithm to handle  the common cases.
//
boolean
AM_clipMline
( mline_t*    ml,
  fline_t*    fl )
{
    enum
    {
    LEFT    =1,
    RIGHT    =2,
    BOTTOM    =4,
    TOP    =8
    };
    
    register    outcode1 = 0;
    register    outcode2 = 0;
    register    outside;
    
    fpoint_t    tmp;
    int        dx;
    int        dy;

    
#define DOOUTCODE(oc, mx, my) \
    (oc) = 0; \
    if ((my) < 0) (oc) |= TOP; \
    else if ((my) >= f_h) (oc) |= BOTTOM; \
    if ((mx) < 0) (oc) |= LEFT; \
    else if ((mx) >= f_w) (oc) |= RIGHT;

    
    // do trivial rejects and outcodes
    if (ml->a.y > m_y2)
    outcode1 = TOP;
    else if (ml->a.y < m_y)
    outcode1 = BOTTOM;

    if (ml->b.y > m_y2)
    outcode2 = TOP;
    else if (ml->b.y < m_y)
    outcode2 = BOTTOM;
    
    if (outcode1 & outcode2)
    return false; // trivially outside

    if (ml->a.x < m_x)
    outcode1 |= LEFT;
    else if (ml->a.x > m_x2)
    outcode1 |= RIGHT;
    
    if (ml->b.x < m_x)
    outcode2 |= LEFT;
    else if (ml->b.x > m_x2)
    outcode2 |= RIGHT;
    
    if (outcode1 & outcode2)
    return false; // trivially outside

    // transform to frame-buffer coordinates.
    fl->a.x = CXMTOF(ml->a.x);
    fl->a.y = CYMTOF(ml->a.y);
    fl->b.x = CXMTOF(ml->b.x);
    fl->b.y = CYMTOF(ml->b.y);

    DOOUTCODE(outcode1, fl->a.x, fl->a.y);
    DOOUTCODE(outcode2, fl->b.x, fl->b.y);

    if (outcode1 & outcode2)
    return false;

    while (outcode1 | outcode2)
    {
    // may be partially inside box
    // find an outside point
    if (outcode1)
        outside = outcode1;
    else
        outside = outcode2;
    
    // clip to each side
    if (outside & TOP)
    {
        dy = fl->a.y - fl->b.y;
        dx = fl->b.x - fl->a.x;
        tmp.x = fl->a.x + (dx*(fl->a.y))/dy;
        tmp.y = 0;
    }
    else if (outside & BOTTOM)
    {
        dy = fl->a.y - fl->b.y;
        dx = fl->b.x - fl->a.x;
        tmp.x = fl->a.x + (dx*(fl->a.y-f_h))/dy;
        tmp.y = f_h-1;
    }
    else if (outside & RIGHT)
    {
        dy = fl->b.y - fl->a.y;
        dx = fl->b.x - fl->a.x;
        tmp.y = fl->a.y + (dy*(f_w-1 - fl->a.x))/dx;
        tmp.x = f_w-1;
    }
    else if (outside & LEFT)
    {
        dy = fl->b.y - fl->a.y;
        dx = fl->b.x - fl->a.x;
        tmp.y = fl->a.y + (dy*(-fl->a.x))/dx;
        tmp.x = 0;
    }

    if (outside == outcode1)
    {
        fl->a = tmp;
        DOOUTCODE(outcode1, fl->a.x, fl->a.y);
    }
    else
    {
        fl->b = tmp;
        DOOUTCODE(outcode2, fl->b.x, fl->b.y);
    }
    
    if (outcode1 & outcode2)
        return false; // trivially outside
    }

    return true;
}
#undef DOOUTCODE


//
// Classic Bresenham w/ whatever optimizations needed for speed
//
void
AM_drawFline
( fline_t*    fl,
  int        color )
{
    register int x;
    register int y;
    register int dx;
    register int dy;
    register int sx;
    register int sy;
    register int ax;
    register int ay;
    register int d;
    
    static fuck = 0;

    // For debugging only
    if (      fl->a.x < 0 || fl->a.x >= f_w
       || fl->a.y < 0 || fl->a.y >= f_h
       || fl->b.x < 0 || fl->b.x >= f_w
       || fl->b.y < 0 || fl->b.y >= f_h)
    {
    fprintf(stderr, "fuck %d \r", fuck++);
    return;
    }

#define PUTDOT(xx,yy,cc) fb[(yy)*f_w+(xx)]=(cc)

    dx = fl->b.x - fl->a.x;
    ax = 2 * (dx<0 ? -dx : dx);
    sx = dx<0 ? -1 : 1;

    dy = fl->b.y - fl->a.y;
    ay = 2 * (dy<0 ? -dy : dy);
    sy = dy<0 ? -1 : 1;

    x = fl->a.x;
    y = fl->a.y;

    if (ax > ay)
    {
    d = ay - ax/2;
    while (1)
    {
        PUTDOT(x,y,color);
        if (x == fl->b.x) return;
        if (d>=0)
        {
        y += sy;
        d -= ax;
        }
        x += sx;
        d += ay;
    }
    }
    else
    {
    d = ax - ay/2;
    while (1)
    {
        PUTDOT(x, y, color);
        if (y == fl->b.y) return;
        if (d >= 0)
        {
        x += sx;
        d -= ay;
        }
        y += sy;
        d += ax;
    }
    }
}


//
// Clip lines, draw visible part sof lines.
//
void
AM_drawMline
( mline_t*    ml,
  int        color )
{
    static fline_t fl;

    if (AM_clipMline(ml, &fl))
    AM_drawFline(&fl, color); // draws it on frame buffer using fb coords
}



//
// Draws flat (floor/ceiling tile) aligned grid lines.
//
void AM_drawGrid(int color)
{
    fixed_t x, y;
    fixed_t start, end;
    mline_t ml;

    // Figure out start of vertical gridlines
    start = m_x;
    if ((start-bmaporgx)%(MAPBLOCKUNITS<<FRACBITS))
    start += (MAPBLOCKUNITS<<FRACBITS)
        - ((start-bmaporgx)%(MAPBLOCKUNITS<<FRACBITS));
    end = m_x + m_w;

    // draw vertical gridlines
    ml.a.y = m_y;
    ml.b.y = m_y+m_h;
    for (x=start; x<end; x+=(MAPBLOCKUNITS<<FRACBITS))
    {
    ml.a.x = x;
    ml.b.x = x;
    AM_drawMline(&ml, color);
    }

    // Figure out start of horizontal gridlines
    start = m_y;
    if ((start-bmaporgy)%(MAPBLOCKUNITS<<FRACBITS))
    start += (MAPBLOCKUNITS<<FRACBITS)
        - ((start-bmaporgy)%(MAPBLOCKUNITS<<FRACBITS));
    end = m_y + m_h;

    // draw horizontal gridlines
    ml.a.x = m_x;
    ml.b.x = m_x + m_w;
    for (y=start; y<end; y+=(MAPBLOCKUNITS<<FRACBITS))
    {
    ml.a.y = y;
    ml.b.y = y;
    AM_drawMline(&ml, color);
    }

}

//
// Determines visible lines, draws them.
// This is LineDef based, not LineSeg based.
//
void AM_drawWalls(void)
{
    int i;
    static mline_t l;

    for (i=0;i<numlines;i++)
    {
    l.a.x = lines[i].v1->x;
    l.a.y = lines[i].v1->y;
    l.b.x = lines[i].v2->x;
    l.b.y = lines[i].v2->y;
    if (cheating || (lines[i].flags & ML_MAPPED))
    {
        if ((lines[i].flags & LINE_NEVERSEE) && !cheating)
        continue;
        if (!lines[i].backsector)
        {
        AM_drawMline(&l, WALLCOLORS+lightlev);
        }
        else
        {
        if (lines[i].special == 39)
        { // teleporters
            AM_drawMline(&l, WALLCOLORS+WALLRANGE/2);
        }
        else if (lines[i].flags & ML_SECRET) // secret door
        {
            if (cheating) AM_drawMline(&l, SECRETWALLCOLORS + lightlev);
            else AM_drawMline(&l, WALLCOLORS+lightlev);
        }
        else if (lines[i].backsector->floorheight
               != lines[i].frontsector->floorheight) {
            AM_drawMline(&l, FDWALLCOLORS + lightlev); // floor level change
        }
        else if (lines[i].backsector->ceilingheight
               != lines[i].frontsector->ceilingheight) {
            AM_drawMline(&l, CDWALLCOLORS+lightlev); // ceiling level change
        }
        else if (cheating) {
            AM_drawMline(&l, TSWALLCOLORS+lightlev);
        }
        }
    }
    else if (plr->powers[pw_allmap])
    {
        if (!(lines[i].flags & LINE_NEVERSEE)) AM_drawMline(&l, GRAYS+3);
    }
    }
}


//
// Rotation in 2D.
// Used to rotate player arrow line character.
//
void
AM_rotate
( fixed_t*    x,
  fixed_t*    y,
  angle_t    a )
{
    fixed_t tmpx;

    tmpx =
    FixedMul(*x,finecosine[a>>ANGLETOFINESHIFT])
    - FixedMul(*y,finesine[a>>ANGLETOFINESHIFT]);
    
    *y   =
    FixedMul(*x,finesine[a>>ANGLETOFINESHIFT])
    + FixedMul(*y,finecosine[a>>ANGLETOFINESHIFT]);

    *x = tmpx;
}

void
AM_drawLineCharacter
( mline_t*    lineguy,
  int        lineguylines,
  fixed_t    scale,
  angle_t    angle,
  int        color,
  fixed_t    x,
  fixed_t    y )
{
    int        i;
    mline_t    l;

    for (i=0;i<lineguylines;i++)
    {
    l.a.x = lineguy[i].a.x;
    l.a.y = lineguy[i].a.y;

    if (scale)
    {
        l.a.x = FixedMul(scale, l.a.x);
        l.a.y = FixedMul(scale, l.a.y);
    }

    if (angle)
        AM_rotate(&l.a.x, &l.a.y, angle);

    l.a.x += x;
    l.a.y += y;

    l.b.x = lineguy[i].b.x;
    l.b.y = lineguy[i].b.y;

    if (scale)
    {
        l.b.x = FixedMul(scale, l.b.x);
        l.b.y = FixedMul(scale, l.b.y);
    }

    if (angle)
        AM_rotate(&l.b.x, &l.b.y, angle);
    
    l.b.x += x;
    l.b.y += y;

    AM_drawMline(&l, color);
    }
}

void AM_drawPlayers(void)
{
    int        i;
    player_t*    p;
    static int     their_colors[] = { GREENS, GRAYS, BROWNS, REDS };
    int        their_color = -1;
    int        color;

    if (!netgame)
    {
    if (cheating)
        AM_drawLineCharacter
        (cheat_player_arrow, NUMCHEATPLYRLINES, 0,
         plr->mo->angle, WHITE, plr->mo->x, plr->mo->y);
    else
        AM_drawLineCharacter
        (player_arrow, NUMPLYRLINES, 0, plr->mo->angle,
         WHITE, plr->mo->x, plr->mo->y);
    return;
    }

    for (i=0;i<MAXPLAYERS;i++)
    {
    their_color++;
    p = &players[i];

    if ( (deathmatch && !singledemo) && p != plr)
        continue;

    if (!playeringame[i])
        continue;

    if (p->powers[pw_invisibility])
        color = 246; // *close* to black
    else
        color = their_colors[their_color];
    
    AM_drawLineCharacter
        (player_arrow, NUMPLYRLINES, 0, p->mo->angle,
         color, p->mo->x, p->mo->y);
    }

}

void
AM_drawThings
( int    colors,
  int     colorrange)
{
    int        i;
    mobj_t*    t;

    for (i=0;i<numsectors;i++)
    {
    t = sectors[i].thinglist;
    while (t)
    {
        AM_drawLineCharacter
        (thintriangle_guy, NUMTHINTRIANGLEGUYLINES,
         16<<FRACBITS, t->angle, colors+lightlev, t->x, t->y);
        t = t->snext;
    }
    }
}

void AM_drawMarks(void)
{
    int i, fx, fy, w, h;

    for (i=0;i<AM_NUMMARKPOINTS;i++)
    {
    if (markpoints[i].x != -1)
    {
        //      w = SHORT(marknums[i]->width);
        //      h = SHORT(marknums[i]->height);
        w = 5; // because something's wrong with the wad, i guess
        h = 6; // because something's wrong with the wad, i guess
        fx = CXMTOF(markpoints[i].x);
        fy = CYMTOF(markpoints[i].y);
        if (fx >= f_x && fx <= f_w - w && fy >= f_y && fy <= f_h - h)
        V_DrawPatch(fx, fy, FB, marknums[i]);
    }
    }

}

void AM_drawCrosshair(int color)
{
    fb[(f_w*(f_h+1))/2] = color; // single point for now

}

void AM_Drawer (void)
{
    if (!automapactive) return;

    AM_clearFB(BACKGROUND);
    if (grid)
    AM_drawGrid(GRIDCOLORS);
    AM_drawWalls();
    AM_drawPlayers();
    if (cheating==2)
    AM_drawThings(THINGCOLORS, THINGRANGE);
    AM_drawCrosshair(XHAIRCOLORS);

    AM_drawMarks();

    V_MarkRect(f_x, f_y, f_w, f_h);

}
