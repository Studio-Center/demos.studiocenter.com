
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8460,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13823,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",22459,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",27314,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30440,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",36801,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",43000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",47804,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRect}","click",function(sym,e){});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("counter",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_startbutton}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy}","click",function(sym,e){sym.getSymbol("wrong3Copy").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3}","click",function(sym,e){sym.getSymbol("wrong3").play("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right2}","click",function(sym,e){sym.$("right1").show();sym.getSymbol("right2").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbutton}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy}","click",function(sym,e){sym.$("wrong").hide();sym.getSymbol("wrong3").stop("up");sym.getSymbol("wrong3Copy1").stop("up");sym.getSymbol("wrong3Copy2").stop("up");sym.getSymbol("wrong3Copy3").stop("up");sym.getSymbol("wrong3Copy4").stop("up");sym.getSymbol("wrong3Copy5").stop("up");sym.getSymbol("wrong3Copy6").stop("up");sym.getSymbol("wrong3Copy7").stop("up");sym.getSymbol("wrong3Copy8").stop("up");sym.getSymbol("wrong3Copy9").stop("up");sym.getSymbol("wrong3Copy10").stop("up");sym.getSymbol("wrong3Copy11").stop("up");sym.getSymbol("wrong3Copy12").stop("up");sym.getSymbol("wrong3Copy13").stop("up");sym.getSymbol("wrong3Copy14").stop("up");sym.getSymbol("wrong3Copy15").stop("up");sym.getSymbol("wrong3Copy16").stop("up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3Copy}","click",function(sym,e){sym.$("wrong_box").hide();sym.getSymbol("wrong3").stop("up");sym.getSymbol("wrong3Copy").stop("up");sym.getSymbol("wrong3Copy2").stop("up");sym.getSymbol("wrong3Copy3").stop("up");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy2}","click",function(sym,e){sym.$("right1Copy2").hide();sym.$("question2").hide();sym.$("question3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy2}","click",function(sym,e){sym.getSymbol("wrong3Copy2").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy1}","click",function(sym,e){sym.getSymbol("wrong3Copy1").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3}","click",function(sym,e){sym.$("right1Copy2").show();sym.getSymbol("right3").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy3}","click",function(sym,e){sym.$("question3").hide();sym.$("question2").hide();sym.$("right1Copy3").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy3}","click",function(sym,e){sym.getSymbol("wrong3Copy3").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy4}","click",function(sym,e){sym.getSymbol("wrong3Copy4").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy}","click",function(sym,e){sym.$("right1Copy3").show();sym.getSymbol("right3").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy4}","click",function(sym,e){sym.$("question4").hide();sym.$("right1Copy4").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy5}","click",function(sym,e){sym.getSymbol("wrong3Copy3").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy6}","click",function(sym,e){sym.getSymbol("wrong3Copy4").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy2}","click",function(sym,e){sym.play();sym.$("question4").hide();var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy6}","click",function(sym,e){sym.$("question5").hide();sym.$("right1Copy5").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy7}","click",function(sym,e){sym.getSymbol("wrong3Copy3").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy8}","click",function(sym,e){sym.getSymbol("wrong3Copy4").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy3}","click",function(sym,e){sym.$("right1Copy6").show();sym.$("question5").hide();sym.getSymbol("right3Copy2").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy7}","click",function(sym,e){sym.$("question6").hide();sym.$("right1Copy6").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy9}","click",function(sym,e){sym.getSymbol("wrong3Copy9").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy10}","click",function(sym,e){sym.getSymbol("wrong3Copy10").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy4}","click",function(sym,e){sym.$("right1Copy6").show();sym.$("question6").hide();sym.getSymbol("right3Copy4").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy9}","click",function(sym,e){sym.$("question7").hide();sym.$("right1Copy7").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy11}","click",function(sym,e){sym.getSymbol("wrong3Copy9").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy12}","click",function(sym,e){sym.getSymbol("wrong3Copy10").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy7}","click",function(sym,e){sym.$("right1Copy7").show();sym.$("question7").hide();sym.getSymbol("right3Copy7").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy11}","click",function(sym,e){sym.$("question8").hide();sym.$("right1Copy8").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy13}","click",function(sym,e){sym.getSymbol("wrong3Copy9").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy14}","click",function(sym,e){sym.getSymbol("wrong3Copy10").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy8}","click",function(sym,e){sym.$("right1Copy8").show();sym.$("question8").hide();sym.getSymbol("right3Copy8").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy13}","click",function(sym,e){sym.$("question9").hide();sym.$("right1Copy9").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy15}","click",function(sym,e){sym.getSymbol("wrong3Copy9").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_wrong3Copy16}","click",function(sym,e){sym.getSymbol("wrong3Copy10").stop("down");sym.$("wrong").show();var counter=sym.getVariable("counter");counter--;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy9}","click",function(sym,e){sym.$("right1Copy9").show();sym.$("question9").hide();sym.getSymbol("right3Copy9").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nextbuttonCopy14}","click",function(sym,e){sym.$("question10").hide();sym.$("right1Copy10").hide();sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy10}","click",function(sym,e){sym.$("right1Copy10").show();sym.$("question10").hide();sym.getSymbol("right3Copy9").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy11}","click",function(sym,e){sym.$("right1Copy10").show();sym.$("question10").hide();sym.getSymbol("right3Copy9").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right3Copy12}","click",function(sym,e){sym.$("right1Copy10").show();sym.$("question10").hide();sym.getSymbol("right3Copy9").play("down");var counter=sym.getVariable("counter");counter+=5;sym.$("counter").html(counter);sym.setVariable("counter",counter);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20999,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4Copy16}","click",function(sym,e){window.open("http://studiocenter.com/DEMOS/nicorgametest/intro/","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'gaspuff'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("gaspuff");
//Edge symbol end:'gaspuff'

//=========================================================

//Edge symbol: 'afroamericanguy'
(function(symbolName){})("afroamericanguy");
//Edge symbol end:'afroamericanguy'

//=========================================================

//Edge symbol: 'afroamericanwoman'
(function(symbolName){})("afroamericanwoman");
//Edge symbol end:'afroamericanwoman'

//=========================================================

//Edge symbol: 'asianguy'
(function(symbolName){})("asianguy");
//Edge symbol end:'asianguy'

//=========================================================

//Edge symbol: 'hispanicguy'
(function(symbolName){})("hispanicguy");
//Edge symbol end:'hispanicguy'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("hispanicwoman");
//Edge symbol end:'hispanicwoman'

//=========================================================

//=========================================================

//Edge symbol: 'Wavingwhiteguy'
(function(symbolName){})("Wavingwhiteguy");
//Edge symbol end:'Wavingwhiteguy'

//=========================================================

//Edge symbol: 'whitewoman'
(function(symbolName){})("whitewoman");
//Edge symbol end:'whitewoman'

//=========================================================

//=========================================================

//Edge symbol: 'truck'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("truck");
//Edge symbol end:'truck'

//=========================================================

//Edge symbol: 'firetruck'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("firetruck");
//Edge symbol end:'firetruck'

//=========================================================

//Edge symbol: 'startbutton'
(function(symbolName){})("startbutton");
//Edge symbol end:'startbutton'

//=========================================================

//Edge symbol: 'wrong'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
})("wrong");
//Edge symbol end:'wrong'

//=========================================================

//Edge symbol: 'right'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
})("right");
//Edge symbol end:'right'

//=========================================================

//Edge symbol: 'nicortruck'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1020,function(sym,e){sym.play(0);});
//Edge binding end
})("nicortruck");
//Edge symbol end:'nicortruck'
})(jQuery,AdobeEdge,"EDGE-349262110");