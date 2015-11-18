
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_pin3}","click",function(sym,e){window.open("http://www.achievechiropractic.com/","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pin2}","mouseover",function(sym,e){sym.play(4405);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4275,function(sym,e){sym.stop(4275);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","scroll",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol: 'newmedia'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_pin2Copy}","mouseover",function(sym,e){sym.play(4405);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pin3Copy}","click",function(sym,e){window.open("http://www.achievechiropractic.com/","_self");});
//Edge binding end
})("newmedia");
//Edge symbol end:'newmedia'
})(jQuery,AdobeEdge,"EDGE-608325628");