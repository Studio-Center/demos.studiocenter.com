
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","click",function(sym,e){sym.$("ZIP").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle3}","dblclick",function(sym,e){sym.$("ZIP").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4}","click",function(sym,e){sym.$("contact").show();sym.$("custlogin").hide();sym.$("teamlogin").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4}","dblclick",function(sym,e){sym.$("contact").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","dblclick",function(sym,e){sym.$("teamlogin").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.$("teamlogin").show();sym.$("custlogin").hide();sym.$("contact").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","dblclick",function(sym,e){sym.$("custlogin").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","click",function(sym,e){sym.$("custlogin").show();sym.$("teamlogin").hide();sym.$("contact").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'slider'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20000,function(sym,e){sym.play(0);});
//Edge binding end
})("slider");
//Edge symbol end:'slider'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20000,function(sym,e){sym.play(0);});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'savingstrat'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseover",function(sym,e){sym.$("Text2").css("color","#d1363a");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseout",function(sym,e){sym.$("Text2").css("color","#717171");});
//Edge binding end
})("savingstrat");
//Edge symbol end:'savingstrat'

//=========================================================

//Edge symbol: 'servicesolution'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseover",function(sym,e){sym.$("Text2").css("color","#d1363a");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseout",function(sym,e){sym.$("Text2").css("color","#717171");});
//Edge binding end
})("servicesolution");
//Edge symbol end:'servicesolution'

//=========================================================

//Edge symbol: 'commit'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseover",function(sym,e){sym.$("Text2").css("color","#d1363a");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseout",function(sym,e){sym.$("Text2").css("color","#717171");});
//Edge binding end
})("commit");
//Edge symbol end:'commit'

//=========================================================

//Edge symbol: 'knowledgelibrary'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseover",function(sym,e){sym.$("Text2").css("color","#d1363a");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseout",function(sym,e){sym.$("Text2").css("color","#717171");});
//Edge binding end
})("knowledgelibrary");
//Edge symbol end:'knowledgelibrary'

//=========================================================

//Edge symbol: 'supplierdiv'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy9}","mouseover",function(sym,e){sym.$("Text2Copy9").css("color","#e94d52");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy9}","mouseout",function(sym,e){sym.$("Text2Copy9").css("color","#717171");});
//Edge binding end
})("supplierdiv");
//Edge symbol end:'supplierdiv'

//=========================================================

//Edge symbol: 'awards'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy10}","mouseover",function(sym,e){sym.$("Text2Copy10").css("color","#e94d52");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy10}","mouseout",function(sym,e){sym.$("Text2Copy10").css("color","#717171");});
//Edge binding end
})("awards");
//Edge symbol end:'awards'

//=========================================================

//Edge symbol: 'movianto'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy11}","mouseover",function(sym,e){sym.$("Text2Copy11").css("color","#e94d52");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy11}","mouseout",function(sym,e){sym.$("Text2Copy11").css("color","#717171");});
//Edge binding end
})("movianto");
//Edge symbol end:'movianto'

//=========================================================

//Edge symbol: 'savingstrat_1'
(function(symbolName){})("savingstrat_1");
//Edge symbol end:'savingstrat_1'

//=========================================================

//Edge symbol: 'savingstrat_2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_TextCopy16}","mouseover",function(sym,e){sym.$("Text2Copy7").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCopy16}","mouseout",function(sym,e){sym.$("Text2Copy7").css("color","#717171");});
//Edge binding end
})("savingstrat_2");
//Edge symbol end:'savingstrat_2'

//=========================================================

//Edge symbol: 'searchbar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",501,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("searchbar");
//Edge symbol end:'searchbar'

//=========================================================

//Edge symbol: 'locationbar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("locationbar");
//Edge symbol end:'locationbar'

//=========================================================

//Edge symbol: 'custlogin'
(function(symbolName){})("custlogin");
//Edge symbol end:'custlogin'

//=========================================================

//Edge symbol: 'teamlogin'
(function(symbolName){})("teamlogin");
//Edge symbol end:'teamlogin'

//=========================================================

//Edge symbol: 'contact'
(function(symbolName){})("contact");
//Edge symbol end:'contact'

//=========================================================

//Edge symbol: 'ZIP'
(function(symbolName){})("ZIP");
//Edge symbol end:'ZIP'

//=========================================================

//Edge symbol: 'slidertext'
(function(symbolName){})("slidertext");
//Edge symbol end:'slidertext'

//=========================================================

//Edge symbol: 'dropmenu'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle7}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle7}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_menu}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_menu}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("dropmenu");
//Edge symbol end:'dropmenu'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","mouseover",function(sym,e){sym.$("highlight").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","mouseout",function(sym,e){sym.$("highlight").hide();});
//Edge binding end
})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'highlight'
(function(symbolName){})("highlight");
//Edge symbol end:'highlight'
})(jQuery,AdobeEdge,"EDGE-85168118");