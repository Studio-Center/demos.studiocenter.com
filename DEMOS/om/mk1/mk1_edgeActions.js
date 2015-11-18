
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-28_at_44542_PM}","click",function(sym,e){var mySymbolObject=sym.getSymbol("searchbar");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-28_at_44531_PM}","click",function(sym,e){var mySymbolObject=sym.getSymbol("locationbar");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103003_AM}","click",function(sym,e){sym.$("custlogin").show();sym.$("teamlogin").hide();sym.$("contact").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103003_AM}","dblclick",function(sym,e){sym.$("custlogin").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103024_AM}","dblclick",function(sym,e){sym.$("teamlogin").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103024_AM}","click",function(sym,e){sym.$("teamlogin").show();sym.$("custlogin").hide();sym.$("contact").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103032_AM}","click",function(sym,e){sym.$("contact").show();sym.$("custlogin").hide();sym.$("teamlogin").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103032_AM}","dblclick",function(sym,e){sym.$("contact").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103040_AM}","click",function(sym,e){sym.$("ZIP").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Screen_Shot_2014-03-31_at_103040_AM}","dblclick",function(sym,e){sym.$("ZIP").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","mouseover",function(sym,e){var mySymbolObject=sym.getSymbol("dropmenu");mySymbolObject.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","mouseout",function(sym,e){var mySymbolObject=sym.getSymbol("dropmenu");mySymbolObject.playReverse();});
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
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy7}","mouseover",function(sym,e){sym.$("Text2Copy7").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy7}","mouseout",function(sym,e){sym.$("Text2Copy7").css("color","#717171");});
//Edge binding end
})("savingstrat");
//Edge symbol end:'savingstrat'

//=========================================================

//Edge symbol: 'servicesolution'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy6}","mouseover",function(sym,e){sym.$("Text2Copy6").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy6}","mouseout",function(sym,e){sym.$("Text2Copy6").css("color","#717171");});
//Edge binding end
})("servicesolution");
//Edge symbol end:'servicesolution'

//=========================================================

//Edge symbol: 'commit'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy5}","mouseover",function(sym,e){sym.$("Text2Copy5").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy5}","mouseout",function(sym,e){sym.$("Text2Copy5").css("color","#717171");});
//Edge binding end
})("commit");
//Edge symbol end:'commit'

//=========================================================

//Edge symbol: 'knowledgelibrary'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy4}","mouseover",function(sym,e){sym.$("Text2Copy4").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy4}","mouseout",function(sym,e){sym.$("Text2Copy4").css("color","#717171");});
//Edge binding end
})("knowledgelibrary");
//Edge symbol end:'knowledgelibrary'

//=========================================================

//Edge symbol: 'supplierdiv'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy9}","mouseover",function(sym,e){sym.$("Text2Copy9").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy9}","mouseout",function(sym,e){sym.$("Text2Copy9").css("color","#717171");});
//Edge binding end
})("supplierdiv");
//Edge symbol end:'supplierdiv'

//=========================================================

//Edge symbol: 'awards'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy10}","mouseover",function(sym,e){sym.$("Text2Copy10").css("color","#ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy10}","mouseout",function(sym,e){sym.$("Text2Copy10").css("color","#717171");});
//Edge binding end
})("awards");
//Edge symbol end:'awards'

//=========================================================

//Edge symbol: 'movianto'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy11}","mouseover",function(sym,e){sym.$("Text2Copy11").css("color","#ffffff");});
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
})(jQuery,AdobeEdge,"EDGE-85168118");