
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({nope:['jquery-ui.min.js','jquery.ui.touch-punch.min.js'],complete:init});function init(){sym.$('target12').draggable({opacity:.5,revert:''});sym.$('').droppable({accept:sym.$("eyes"),drop:function(){sym.getSymbol("eyes").play();}});sym.$('defaultEyes').droppable({accept:sym.$("eyes"),drop:function(){}});}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'ring5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",93401,function(sym,e){sym.play(0);});
//Edge binding end
})("ring5");
//Edge symbol end:'ring5'

//=========================================================

//Edge symbol: 'ring3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8401,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3401,function(sym,e){sym.play("start");});
//Edge binding end
})("ring3");
//Edge symbol end:'ring3'

//=========================================================

//Edge symbol: 'target1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${__0002_Vector-Smart-Object}","dblclick",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__0002_Vector-Smart-Object}","touchstart",function(sym,e){sym.play();});
//Edge binding end
})("target1");
//Edge symbol end:'target1'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",910,function(sym,e){sym.stop();});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1156,function(sym,e){sym.stop();});
//Edge binding end
})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'Symbol_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1297,function(sym,e){sym.stop();});
//Edge binding end
})("Symbol_3");
//Edge symbol end:'Symbol_3'
})(jQuery,AdobeEdge,"EDGE-186939071");