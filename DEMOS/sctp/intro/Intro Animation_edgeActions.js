
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var youtubevid=$("<iframe/>");sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','658');youtubevid.attr('height','338');youtubevid.attr('src','http://www.youtube.com/embed/videoseries?list=PLD47E4EFADF4B22F1');youtubevid.attr('frameborder','0');youtubevid.attr('allowfullscreen','0');var youtubevid=$("<iframe/>");sym.$("vcontainer2").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','397');youtubevid.attr('height','222');youtubevid.attr('src','http://www.youtube.com/embed/Linp3dOy_7E?list=UUzk5e59CS7hm-k_BXg7YOuw');youtubevid.attr('frameborder','0');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="video"){sym.stop();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_select_video}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"video":break;default:sym.setParameter("dest","video");sym.playReverse();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_select_audio}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"audio":break;case"video":sym.setParameter("dest","audio");sym.play();break;default:sym.setParameter("dest","audio");sym.playReverse();break;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="audio"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="voiceover"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",22500,function(sym,e){var dest=sym.getParameter("dest");if(dest=="Audio"){sym.stop();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_select_vo}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"voiceover":break;case"video":case"audio":sym.setParameter("dest","voiceover");sym.play();break;default:sym.setParameter("dest","voiceover");sym.playReverse();break;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop("video");sym.setParameter("dest","video");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="oncamera"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="newmedia"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="newmedia"){sym.stop();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_select_oncamera}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"oncamera":break;case"video":case"audio":case"voiceover":sym.setParameter("dest","oncamera");sym.play();break;default:sym.setParameter("dest","oncamera");sym.playReverse();break;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="newmedia"){sym.stop();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_select_newmedia}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"newmedia":break;default:sym.setParameter("dest","newmedia");sym.play();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_all}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/search-all-voices","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_female}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/top-10-female-voiceover-talent","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_male}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/top-10-male-voiceover-talent","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_lady1}","mouseover",function(sym,e){sym.$("female_actors").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_lady1}","mouseout",function(sym,e){sym.$("female_actors").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_guy1}","mouseover",function(sym,e){sym.$("male_actors").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_guy1}","mouseout",function(sym,e){sym.$("male_actors").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_boy1}","mouseover",function(sym,e){sym.$("child_male").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_boy1}","mouseout",function(sym,e){sym.$("child_male").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talen_girl1}","mouseover",function(sym,e){sym.$("child_female").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talen_girl1}","mouseout",function(sym,e){sym.$("child_female").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_lady1}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/female-actors","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_guy1}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/male-actors","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talent_boy1}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/child-actors-male","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_talen_girl1}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/child-actors-female","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'TimelineController'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var useKeyBoardEvent=true;var KEY_RIGHT=39;var KEY_LEFT=37;var power=0.0625;var declineRate=0.5;var speedWidth=10;var fps=60;var interval=(300/fps)|0;var speed=-10;var isKeyPress=false,isMousePress=false;var centerX,target,v;if(useKeyBoardEvent)$(window).bind("keydown",onStartControll).bind("keyup",onStopControll);var el=$(sym.getSymbolElement());el.mousedown(onStartControll).mouseup(onStopControll).mouseout(onStopControll).mousemove(onMouseMove).bind("touchstart",onStartControll).bind("touchmove",onMouseMove).bind("touchend",onStopControll);function onStartControll(evt){evt.preventDefault();target=sym.getParentSymbol();centerX=el.offset().left+el.width()/2;if(evt.type=="keydown"&&isKeyPress===false){speed=(evt.which==KEY_RIGHT)*interval*power
+(evt.which==KEY_LEFT)*interval*-1*power;speed|=0;isKeyPress=true;}else if(evt.type=="mousedown"||evt.type=="touchstart"){isMousePress=true;}
if(v===undefined)v=setInterval(onControll,interval);}
function onStopControll(evt){if(evt.type=="keyup"){isKeyPress=false;}else{isMousePress=false;}}
function onControll(){if(isKeyPress===false&&isMousePress===false){speed=(speed*declineRate)|0;if(-1<speed&&speed<1){clearInterval(v);v=undefined;}}
var n=target.getPosition()+speed;if(-1<n&&n<=target.getDuration())target.stop(n);}
function onMouseMove(evt){evt.preventDefault();evt=(evt.originalEvent.touches&&evt.originalEvent.touches[0])||evt;if(isMousePress===true){speed=(((evt.clientX-centerX)/speedWidth)*power*interval)|0;}}});
//Edge binding end
})("TimelineController");
//Edge symbol end:'TimelineController'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'
})(jQuery,AdobeEdge,"EDGE-175878117");