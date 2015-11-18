
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text4}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4}","mouseover",function(sym,e){sym.$("Text4").css("color","#3679db");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4}","mouseout",function(sym,e){sym.$("Text4").css("color","#000000");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","mouseover",function(sym,e){sym.$("Text").css("color","#000000");sym.$("Text2Copy").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","mouseout",function(sym,e){sym.$("Text").css("color","#b1b1b1");sym.$("Text2Copy").css("color","#b1b1b1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Back}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Back}","mouseover",function(sym,e){sym.$("Text2").css("color","#000000");sym.$("TextCopy2").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Back}","mouseout",function(sym,e){sym.$("Text2").css("color","#b1b1b1");sym.$("TextCopy2").css("color","#b1b1b1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_macintosh_1996}","click",function(sym,e){var config={width:557,height:438,type:"image",source:"http://www.studiocenter.com/sitehistory/images/SC-website-1996-1999.png"};EC.Spotlight.open(config);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text11Copy2}","click",function(sym,e){window.open("http://www.studiocenter.com","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:["http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.Core.js","http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.Spotlight.js","http://cdn.edgecommons.org/an/1.0.0/css/style.css",],complete:function(){EC.centerStage(sym);EC.debug("Ready to go!");}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2008}","click",function(sym,e){var config={width:909,height:800,type:"image",source:"http://www.studiocenter.com/sitehistory/images/SC-website-2008-20131.jpg"};EC.Spotlight.open(config);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2005}","click",function(sym,e){var config={width:590,height:800,type:"image",source:"http://www.studiocenter.com/sitehistory/images/SC-website-2005-20081.jpg"};EC.Spotlight.open(config);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2003Copy}","click",function(sym,e){var config={width:802,height:612,type:"image",source:"http://www.studiocenter.com/sitehistory/images/SC-website-2003-2005.png"};EC.Spotlight.open(config);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2003}","click",function(sym,e){var config={width:505,height:800,type:"image",source:"http://www.studiocenter.com/sitehistory/images/SC-website-Jan-20031.png"};EC.Spotlight.open(config);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__2000}","click",function(sym,e){var config={width:600,height:451,type:"image",source:"http://www.studiocenter.com/sitehistory/images/SC-website-2000-2003.png"};EC.Spotlight.open(config);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text11Copy}","click",function(sym,e){window.open("http://www.studiocenter.com","_top");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'site03'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.playReverse();});
//Edge binding end
})("site03");
//Edge symbol end:'site03'

//=========================================================

//Edge symbol: 'site2005'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.playReverse();});
//Edge binding end
})("site2005");
//Edge symbol end:'site2005'

//=========================================================

//Edge symbol: 'web2008'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9992,function(sym,e){sym.playReverse();});
//Edge binding end
})("web2008");
//Edge symbol end:'web2008'
})(jQuery,AdobeEdge,"EDGE-19495750");