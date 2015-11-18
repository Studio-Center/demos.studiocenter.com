/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'bkg',
            type:'image',
            rect:[330,372,956,115],
            fill:["rgba(0,0,0,0)",im+"bkg.png"],
            transform:[[-330,-372]]
         },
         {
            id:'sky',
            type:'image',
            rect:[327,0,600,417],
            fill:["rgba(0,0,0,0)",im+"sky.png"],
            transform:[[-149,-173],[0,0],[0],[1.593,0.381]]
         },
         {
            id:'sun2',
            type:'image',
            rect:[622,151,600,417],
            fill:["rgba(0,0,0,0)",im+"sun.png"],
            transform:[[-264,-238],[0,0],[0],[0.973,0.634]]
         },
         {
            id:'light_rig',
            type:'image',
            rect:[330,372,956,115],
            fill:["rgba(0,0,0,0)",im+"light%20rig.png"],
            transform:[[-330,-372]]
         },
         {
            id:'sand',
            type:'image',
            rect:[186,99,600,417],
            fill:["rgba(0,0,0,0)",im+"sand.png"],
            transform:[[-8,-231],[0,0],[0],[1.639,0.425]]
         },
         {
            id:'chicks',
            type:'image',
            rect:[789,70,600,417],
            fill:["rgba(0,0,0,0)",im+"chicks.png"],
            transform:[[-873,-220],[0,0],[0],[-0.3,0.3]]
         },
         {
            id:'tanning2',
            type:'image',
            rect:[802,80,600,417],
            fill:["rgba(0,0,0,0)",im+"tanning.png"],
            transform:[[-319,-218],[0,0],[0],[-0.27,0.27]]
         },
         {
            id:'home',
            type:'rect',
            rect:[0,0,0,0],
            cursor:['pointer']
         },
         {
            id:'wave2',
            type:'image',
            rect:[761,85,600,417],
            fill:["rgba(0,0,0,0)",im+"wave.png"],
            transform:[[-271,18],[-30,0],[0],[1,1]]
         },
         {
            id:'surfer',
            type:'image',
            rect:[0,0,250,241],
            fill:["rgba(0,0,0,0)",im+"surfer.png"],
            transform:[[566,65],[0,0],[0],[0.511,0.511]]
         }],
         symbolInstances: [
         {
            id:'home',
            symbolName:'home'
         }
         ]
      },
   states: {
      "Base State": {
         "${_sun2}": [
            ["transform", "scaleX", '0.97354'],
            ["transform", "scaleY", '0.63488'],
            ["transform", "translateY", '-119.71px'],
            ["transform", "translateX", '-264.31px']
         ],
         "${_chicks}": [
            ["transform", "translateX", '-873.49px'],
            ["transform", "scaleX", '-0.3'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-220.4px'],
            ["transform", "scaleY", '0.3']
         ],
         "${_home}": [
            ["style", "cursor", 'pointer']
         ],
         "${_bkg}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${_surfer}": [
            ["transform", "translateX", '578.14px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '0.51157'],
            ["transform", "translateY", '82.69px'],
            ["transform", "scaleY", '0.51157']
         ],
         "${_sand}": [
            ["transform", "scaleX", '1.639'],
            ["transform", "scaleY", '0.42521'],
            ["transform", "translateY", '-231.07px'],
            ["transform", "translateX", '-8.29px']
         ],
         "${_wave2}": [
            ["transform", "translateX", '-274.41px'],
            ["transform", "translateY", '64.46px'],
            ["transform", "rotateZ", '-24deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '956px'],
            ["style", "height", '115px'],
            ["style", "overflow", 'hidden']
         ],
         "${_light_rig}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${_sky}": [
            ["transform", "scaleX", '1.59333'],
            ["transform", "scaleY", '0.49644'],
            ["transform", "translateY", '-42.95px'],
            ["transform", "translateX", '-149px']
         ],
         "${_tanning2}": [
            ["transform", "translateX", '-319.68px'],
            ["transform", "scaleX", '-0.27066'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-218.06px'],
            ["transform", "scaleY", '0.27065']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         timeline: [
            { id: "eid29", tween: [ "transform", "${_surfer}", "translateX", '342.56px', { fromValue: '578.14px'}], position: 250, duration: 604, easing: "easeOutCirc" },
            { id: "eid31", tween: [ "transform", "${_surfer}", "translateX", '163.06px', { fromValue: '342.56px'}], position: 854, duration: 645, easing: "easeInCirc" },
            { id: "eid32", tween: [ "transform", "${_surfer}", "translateY", '-76.98px', { fromValue: '82.69px'}], position: 250, duration: 604, easing: "easeOutBack" },
            { id: "eid34", tween: [ "transform", "${_surfer}", "translateY", '75.62px', { fromValue: '-76.98px'}], position: 854, duration: 645, easing: "easeInCirc" },
            { id: "eid92", tween: [ "transform", "${_tanning2}", "translateY", '-55.85px', { fromValue: '-218.06px'}], position: 5865, duration: 634, easing: "easeInBack" },
            { id: "eid61", tween: [ "transform", "${_wave2}", "translateX", '-582.94px', { fromValue: '-274.41px'}], position: 0, duration: 1443, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_wave2}", "translateX", '-814.85px', { fromValue: '-582.94px'}], position: 1443, duration: 1556, easing: "easeOutBack" },
            { id: "eid75", tween: [ "style", "${_chicks}", "opacity", '1', { fromValue: '0'}], position: 2334, duration: 625, easing: "easeOutExpo" },
            { id: "eid93", tween: [ "transform", "${_chicks}", "translateX", '-873.49px', { fromValue: '-873.49px'}], position: 5870, duration: 0, easing: "easeOutElastic" },
            { id: "eid90", tween: [ "transform", "${_tanning2}", "translateX", '-319.68px', { fromValue: '-319.68px'}], position: 5865, duration: 0, easing: "easeOutElastic" },
            { id: "eid87", tween: [ "transform", "${_sky}", "scaleY", '0.49644', { fromValue: '0.49644'}], position: 2180, duration: 0, easing: "easeOutElastic" },
            { id: "eid95", tween: [ "transform", "${_chicks}", "translateY", '-69.95px', { fromValue: '-220.4px'}], position: 6039, duration: 603, easing: "easeInBack" },
            { id: "eid88", tween: [ "transform", "${_sun2}", "translateY", '-238.12px', { fromValue: '-119.71px'}], position: 2430, duration: 819, easing: "easeOutElastic" },
            { id: "eid105", tween: [ "transform", "${_sun2}", "translateY", '-112.12px', { fromValue: '-238.12px'}], position: 6647, duration: 500, easing: "easeInBack" },
            { id: "eid66", tween: [ "transform", "${_wave2}", "rotateZ", '-49deg', { fromValue: '-24deg'}], position: 0, duration: 1250, easing: "easeInQuad" },
            { id: "eid67", tween: [ "transform", "${_wave2}", "rotateZ", '-147deg', { fromValue: '-49deg'}], position: 1250, duration: 1750, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "transform", "${_sky}", "translateY", '-161.35px', { fromValue: '-42.95px'}], position: 2180, duration: 819, easing: "easeOutElastic" },
            { id: "eid102", tween: [ "transform", "${_sky}", "translateY", '-23px', { fromValue: '-161.35px'}], position: 6327, duration: 531, easing: "easeInBack" },
            { id: "eid103", tween: [ "transform", "${_sun2}", "translateX", '-264.31px', { fromValue: '-264.31px'}], position: 6782, duration: 0, easing: "easeOutElastic" },
            { id: "eid30", tween: [ "transform", "${_surfer}", "rotateZ", '-43deg', { fromValue: '0deg'}], position: 250, duration: 372, easing: "swing" },
            { id: "eid33", tween: [ "transform", "${_surfer}", "rotateZ", '-90deg', { fromValue: '-43deg'}], position: 622, duration: 877, easing: "swing" },
            { id: "eid79", tween: [ "transform", "${_sky}", "translateX", '-149px', { fromValue: '-149px'}], position: 3000, duration: 0, easing: "easeOutExpo" },
            { id: "eid100", tween: [ "transform", "${_sky}", "translateX", '-149px', { fromValue: '-149px'}], position: 6327, duration: 0, easing: "easeOutElastic" },
            { id: "eid77", tween: [ "style", "${_tanning2}", "opacity", '1', { fromValue: '0'}], position: 2598, duration: 625, easing: "easeOutExpo" },
            { id: "eid89", tween: [ "style", "${_tanning2}", "opacity", '1', { fromValue: '1'}], position: 5865, duration: 0, easing: "easeOutElastic" },
            { id: "eid71", tween: [ "transform", "${_sand}", "translateY", '-249.84px', { fromValue: '-231.07px'}], position: 2049, duration: 548, easing: "easeOutExpo" },
            { id: "eid99", tween: [ "transform", "${_sand}", "translateY", '-218.84px', { fromValue: '-249.84px'}], position: 6250, duration: 545, easing: "easeInBack" },
            { id: "eid62", tween: [ "transform", "${_wave2}", "translateY", '-203.01px', { fromValue: '64.46px'}], position: 0, duration: 966, easing: "easeOutBack" },
            { id: "eid64", tween: [ "transform", "${_wave2}", "translateY", '114.55px', { fromValue: '-203.01px'}], position: 966, duration: 2033, easing: "easeInOutBack" },
            { id: "eid69", tween: [ "transform", "${_sand}", "translateX", '-8.29px', { fromValue: '-8.29px'}], position: 2049, duration: 0, easing: "easeOutBack" },
            { id: "eid96", tween: [ "transform", "${_sand}", "translateX", '-8.29px', { fromValue: '-8.29px'}], position: 6593, duration: 0, easing: "easeOutElastic" }         ]
      }
   }
},
"home": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [330,372,956,115],
      id: 'homebutton',
      transform: [[-330,-372]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/homebutton.png']
   },
   {
      rect: [330,372,956,115],
      id: 'phonenumber',
      transform: [[-330,-372]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/phonenumber.png']
   },
   {
      rect: [330,372,956,115],
      id: 'r',
      transform: [[-330,-372]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/r.png']
   },
   {
      rect: [330,372,956,115],
      id: 'SC_and_rules',
      transform: [[-330,-372]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/SC%20and%20rules.png']
   },
   {
      rect: [330,372,956,115],
      id: 'totalpro',
      transform: [[-330,-372]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/totalpro.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_totalpro}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${_homebutton}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${_r}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${_phonenumber}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${symbolSelector}": [
            ["style", "height", '115px'],
            ["style", "width", '956px']
         ],
         "${_SC_and_rules}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-948356864");
