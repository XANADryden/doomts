if (typeof __AMMAP_H__ == "undefined"){
    export const __AMMAP_H__: boolean = true;
    
    export const AM_MSGHEADER: bigint = (('a'<<24)+('m'<<16));
    export const AM_MSGENTERED: bigint = (AM_MSGHEADER | ('e'<<8));
    export const AM_MSGEXITED: bigint = (AM_MSGHEADER | ('x'<<8));
    
    
    // Called by main loop.
    export function AM_Responder(ev:event_t):boolean;
    
    // Called by main loop.
    export function AM_Ticker (): void;
    
    // Called by main loop,
    // called instead of view drawer if automap active.
    export function AM_Drawer (): void;
    
    // Called to force the automap to quit
    // if the level is completed while it is up.
    export function AM_Stop (): void;
    
    
}


