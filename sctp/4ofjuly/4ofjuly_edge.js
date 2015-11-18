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
            id:'night_sky',
            type:'image',
            rect:[566,69,956,115],
            fill:["rgba(0,0,0,0)",im+"night%20sky.png"],
            transform:[[-565,-68],[0,0],[0],[1,1]]
         },
         {
            id:'amurrica',
            type:'image',
            rect:[860,406,444,333],
            opacity:0.24111729452055,
            fill:["rgba(0,0,0,0)",im+"amurrica.png"],
            transform:[[-568,-465],[0,0],[0,3],[1,1]]
         },
         {
            id:'stars',
            type:'image',
            rect:[478,42,956,115],
            fill:["rgba(0,0,0,0)",im+"stars.png"],
            transform:[[-478,-41],[0,0],[0],[1,1]]
         },
         {
            id:'home',
            type:'rect',
            rect:[0,0,0,0],
            cursor:['pointer']
         },
         {
            id:'light_rig',
            type:'image',
            rect:[330,372,956,115],
            fill:["rgba(0,0,0,0)",im+"light%20rig.png"],
            transform:[[-330,-372]]
         },
         {
            id:'rocket',
            type:'image',
            rect:[784,90,26,89],
            fill:["rgba(0,0,0,0)",im+"rocket.png"],
            transform:[[-116,60],[0,0],[0],[0.616,0.616]]
         },
         {
            id:'rocketCopy',
            type:'image',
            rect:[784,90,26,89],
            fill:["rgba(0,0,0,0)",im+"rocket.png"],
            transform:[[-116,60],[],[],[0.616,0.616]]
         },
         {
            id:'rocketCopy2',
            type:'image',
            rect:[784,90,26,89],
            fill:["rgba(0,0,0,0)",im+"rocket.png"],
            transform:[[-116,60],[],[],[0.616,0.616]]
         },
         {
            id:'rocketCopy3',
            type:'image',
            rect:[784,90,26,89],
            fill:["rgba(0,0,0,0)",im+"rocket.png"],
            transform:[[-116,60],[],[],[0.616,0.616]]
         },
         {
            id:'firework12',
            type:'image',
            rect:[727,58,220,200],
            fill:["rgba(0,0,0,0)",im+"firework1.gif"],
            transform:[[-142,-100],[0,0],[0],[1,1]]
         },
         {
            id:'firework12Copy',
            type:'image',
            rect:[727,58,220,200],
            fill:["rgba(0,0,0,0)",im+"firework1.gif"],
            transform:[[-623,-117]]
         },
         {
            id:'firework12Copy2',
            type:'image',
            rect:[727,58,220,200],
            fill:["rgba(0,0,0,0)",im+"firework1.gif"],
            transform:[[9,-89]]
         },
         {
            id:'firework12Copy3',
            type:'image',
            rect:[727,58,220,200],
            fill:["rgba(0,0,0,0)",im+"firework1.gif"],
            transform:[[-514,-43]]
         },
         {
            id:'firework12Copy4',
            type:'image',
            rect:[727,58,220,200],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"firework1.gif"],
            transform:[[-372,-48]]
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
         "${_firework12}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-100px'],
            ["transform", "translateX", '-142.33px']
         ],
         "${_night_sky}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-68.99px'],
            ["transform", "translateX", '-565.99px']
         ],
         "${_bkg}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_stars}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-41.99px'],
            ["transform", "translateX", '-478px']
         ],
         "${_firework12Copy2}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-90.78px'],
            ["transform", "translateX", '-5.09px']
         ],
         "${_amurrica}": [
            ["transform", "skewY", '0deg'],
            ["transform", "translateX", '-568.19px'],
            ["transform", "skewX", '0deg'],
            ["style", "opacity", '0.000000'],
            ["transform", "translateY", '-465.6px']
         ],
         "${_light_rig}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${_rocketCopy}": [
            ["transform", "scaleX", '0.61644'],
            ["transform", "translateX", '-543.81px'],
            ["transform", "scaleY", '0.61644'],
            ["transform", "translateY", '60.07px']
         ],
         "${_rocketCopy2}": [
            ["transform", "scaleX", '0.61644'],
            ["transform", "translateY", '60.07px'],
            ["transform", "translateX", '-382.59px'],
            ["transform", "scaleY", '0.61644']
         ],
         "${_firework12Copy4}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-48.21px'],
            ["transform", "translateX", '-372.11px']
         ],
         "${_rocketCopy3}": [
            ["transform", "scaleX", '0.61644'],
            ["transform", "translateY", '54.47px'],
            ["transform", "translateX", '63.5px'],
            ["transform", "scaleY", '0.61644']
         ],
         "${_rocket}": [
            ["transform", "scaleX", '0.61644'],
            ["transform", "scaleY", '0.61644'],
            ["transform", "translateY", '60.07px'],
            ["transform", "translateX", '-116.75px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '115px'],
            ["style", "width", '956px']
         ],
         "${_firework12Copy3}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-29.42px'],
            ["transform", "translateX", '-692.99px']
         ],
         "${_home}": [
            ["style", "cursor", 'pointer']
         ],
         "${_firework12Copy}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-117.9px'],
            ["transform", "translateX", '-623.83px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10124.48828125,
         autoPlay: true,
         timeline: [
            { id: "eid109", tween: [ "transform", "${_rocket}", "translateX", '-116.75px', { fromValue: '-116.75px'}], position: 2055, duration: 0, easing: "easeInBack" },
            { id: "eid116", tween: [ "transform", "${_rocketCopy}", "translateY", '-206.04px', { fromValue: '60.07px'}], position: 1410, duration: 839, easing: "easeInBack" },
            { id: "eid117", tween: [ "transform", "${_rocketCopy2}", "translateY", '-206.04px', { fromValue: '60.07px'}], position: 2250, duration: 839, easing: "easeInBack" },
            { id: "eid158", tween: [ "style", "${_firework12}", "opacity", '1', { fromValue: '0'}], position: 3909, duration: 455 },
            { id: "eid170", tween: [ "style", "${_firework12}", "opacity", '0', { fromValue: '1'}], position: 8455, duration: 574 },
            { id: "eid159", tween: [ "style", "${_firework12Copy}", "opacity", '1', { fromValue: '0'}], position: 3814, duration: 455 },
            { id: "eid171", tween: [ "style", "${_firework12Copy}", "opacity", '0', { fromValue: '1'}], position: 8359, duration: 574 },
            { id: "eid108", tween: [ "style", "${_night_sky}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2000, easing: "easeInBack" },
            { id: "eid190", tween: [ "style", "${_night_sky}", "opacity", '0', { fromValue: '1'}], position: 9361, duration: 745, easing: "easeInBack" },
            { id: "eid185", tween: [ "style", "${_firework12Copy4}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 455 },
            { id: "eid187", tween: [ "style", "${_firework12Copy4}", "opacity", '0', { fromValue: '1'}], position: 6455, duration: 574 },
            { id: "eid118", tween: [ "transform", "${_rocketCopy2}", "translateX", '-382.59px', { fromValue: '-382.59px'}], position: 2250, duration: 0, easing: "easeInBack" },
            { id: "eid199", tween: [ "transform", "${_amurrica}", "skewY", '5deg', { fromValue: '0deg'}], position: 1000, duration: 8000, easing: "easeInOutBounce" },
            { id: "eid123", tween: [ "style", "${_stars}", "opacity", '0.24', { fromValue: '0'}], position: 1250, duration: 450 },
            { id: "eid191", tween: [ "style", "${_stars}", "opacity", '0', { fromValue: '0.24'}], position: 9361, duration: 745, easing: "easeInBack" },
            { id: "eid121", tween: [ "transform", "${_rocketCopy3}", "translateX", '63.5px', { fromValue: '63.5px'}], position: 1750, duration: 0, easing: "easeInBack" },
            { id: "eid196", tween: [ "style", "${_amurrica}", "opacity", '0.29291523972603', { fromValue: '0.000000'}], position: 1000, duration: 2000, easing: "easeInBack" },
            { id: "eid204", tween: [ "style", "${_amurrica}", "opacity", '0', { fromValue: '0.2929149866104126'}], position: 9000, duration: 1033, easing: "easeInBack" },
            { id: "eid111", tween: [ "transform", "${_rocket}", "translateY", '-206.04px', { fromValue: '60.07px'}], position: 2055, duration: 839, easing: "easeInBack" },
            { id: "eid160", tween: [ "style", "${_firework12Copy3}", "opacity", '1', { fromValue: '0'}], position: 3860, duration: 205 },
            { id: "eid172", tween: [ "style", "${_firework12Copy3}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 574 },
            { id: "eid157", tween: [ "style", "${_firework12Copy2}", "opacity", '1', { fromValue: '0'}], position: 4224, duration: 455 },
            { id: "eid169", tween: [ "style", "${_firework12Copy2}", "opacity", '0', { fromValue: '1'}], position: 8770, duration: 574 },
            { id: "eid120", tween: [ "transform", "${_rocketCopy3}", "translateY", '-206.04px', { fromValue: '54.47px'}], position: 1750, duration: 839, easing: "easeInBack" },
            { id: "eid115", tween: [ "transform", "${_rocketCopy}", "translateX", '-543.81px', { fromValue: '-543.81px'}], position: 1410, duration: 0, easing: "easeInBack" }         ]
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
   },
   {
      rect: [478,81,956,200],
      id: '_4JULY_TEXT',
      transform: [[-478,-80]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/4JULY%20TEXT.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_totalpro}": [
            ["style", "opacity", '1'],
            ["transform", "translateY", '-372px'],
            ["transform", "translateX", '-330px']
         ],
         "${__4JULY_TEXT}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-80.99px'],
            ["transform", "translateX", '-478px']
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
         "${_SC_and_rules}": [
            ["transform", "translateX", '-330px'],
            ["transform", "translateY", '-372px']
         ],
         "${symbolSelector}": [
            ["style", "height", '115px'],
            ["style", "width", '956px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid182", tween: [ "style", "${_totalpro}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 975 },
            { id: "eid195", tween: [ "style", "${_totalpro}", "opacity", '1', { fromValue: '0'}], position: 9025, duration: 975 },
            { id: "eid184", tween: [ "style", "${__4JULY_TEXT}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 975 },
            { id: "eid194", tween: [ "style", "${__4JULY_TEXT}", "opacity", '0', { fromValue: '1'}], position: 9025, duration: 975 }         ]
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
