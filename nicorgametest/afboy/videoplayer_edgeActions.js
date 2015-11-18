
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var youtubevid=$("<iframe/>");sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','640');youtubevid.attr('height','360');youtubevid.attr('src','http://www.studiocenter.com/DEMOS/nicorgametest/afamboy.mp4');youtubevid.attr('frameborder','0');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("http://www.studiocenter.com/DEMOS/nicorgametest","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-803016532");