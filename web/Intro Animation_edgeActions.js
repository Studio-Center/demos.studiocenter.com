
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var youtubevid=$("<iframe/>");sym.$("vcontainer").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','530');youtubevid.attr('height','270');youtubevid.attr('src','http://www.youtube.com/embed/videoseries?list=PL_7zYQGY7IStyaddJFflob4UG-2i4WZL9&showinfo=1&flash=1&wmode=opaque');youtubevid.attr('frameborder','0');youtubevid.attr('allowfullscreen','0');var youtubevid=$("<iframe/>");sym.$("vcontainer2").append(youtubevid);youtubevid.attr('type','text/html');youtubevid.attr('width','393');youtubevid.attr('height','181');youtubevid.attr('src','http://www.youtube.com/embed/xZIZgLtOYds?list=PL_7zYQGY7ISuzwjC-qmg4LhsUPNNn69RK&showinfo=1&flash=1&wmode=opaque');youtubevid.attr('frameborder','0');youtubevid.attr('allowfullscreen','0');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="video"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="audio"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="voiceover"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){var dest=sym.getParameter("dest");if(dest=="oncamera"){sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5658,function(sym,e){var dest=sym.getParameter("dest");if(dest=="newmedia"){sym.stop();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kid_voices}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/kids-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_female}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/top-ten-female-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_male}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/top-ten-male-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kid_voices}","mouseover",function(sym,e){sym.$("kid_voicesCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kid_voices}","mouseout",function(sym,e){sym.$("kid_voicesCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_female}","mouseover",function(sym,e){sym.$("femaleCopy2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_female}","mouseout",function(sym,e){sym.$("femaleCopy2").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_male}","mouseover",function(sym,e){sym.$("maleCopy2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_male}","mouseout",function(sym,e){sym.$("maleCopy2").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_foreign_voices}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/foreign-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_foreign_voices}","mouseover",function(sym,e){sym.$("foreign_voicesCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_foreign_voices}","mouseout",function(sym,e){sym.$("foreign_voicesCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_all}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/search-all-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_all}","mouseover",function(sym,e){sym.$("search_allCopy4").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_all}","mouseout",function(sym,e){sym.$("search_allCopy4").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_allCopy4}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/search-all-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_allCopy4}","mouseover",function(sym,e){sym.$("search_allCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_search_allCopy4}","mouseout",function(sym,e){sym.$("search_allCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_foreign_voicesCopy}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/search-all-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_foreign_voicesCopy}","mouseover",function(sym,e){sym.$("search_allCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_foreign_voicesCopy}","mouseout",function(sym,e){sym.$("search_allCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kid_voicesCopy}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/search-all-voices","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kid_voicesCopy}","mouseover",function(sym,e){sym.$("search_allCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_kid_voicesCopy}","mouseout",function(sym,e){sym.$("search_allCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_femaleCopy2}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/top-10-female-voiceover-talent","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_femaleCopy2}","mouseover",function(sym,e){sym.$("femaleCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_femaleCopy2}","mouseout",function(sym,e){sym.$("femaleCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_maleCopy2}","click",function(sym,e){window.open("http://dev.studiocenter.com/voiceover-talent/top-10-male-voiceover-talent","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_maleCopy2}","mouseover",function(sym,e){sym.$("maleCopy").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_maleCopy2}","mouseout",function(sym,e){sym.$("maleCopy").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web1}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/dan-ryans-men","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web2}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/willis-eye-care","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web3}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/dancing-tomato","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web4}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/collision-one","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web5}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/cuce-shoes","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web6}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/atlantic-shores","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_boy}","mouseover",function(sym,e){sym.$("boy2").show();sym.$("boy").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_boy}","mouseout",function(sym,e){sym.$("boy2").hide();sym.$("boy").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_boy}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/child-actors-male","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_boy2}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/child-actors-male","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_man}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/male-actors","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_man}","mouseover",function(sym,e){sym.$("man2").show();sym.$("man").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_man}","mouseout",function(sym,e){sym.$("man2").hide();sym.$("man").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_girl}","mouseover",function(sym,e){sym.$("girl2").show();sym.$("girl").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_girl}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/child-actors-female","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_girl}","mouseout",function(sym,e){sym.$("girl2").hide();sym.$("girl").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_woman}","click",function(sym,e){window.open("http://dev.studiocenter.com/camera-talent/female-actors","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_woman}","mouseover",function(sym,e){sym.$("woman2").show();sym.$("woman").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_woman}","mouseout",function(sym,e){sym.$("woman2").hide();sym.$("woman").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEB-DESIGN}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"newmedia":break;default:sym.setParameter("dest","newmedia");sym.play();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIDEONAV}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"video":break;default:sym.setParameter("dest","video");sym.playReverse();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AUDIO}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"audio":break;case"video":sym.setParameter("dest","audio");sym.play();break;default:sym.setParameter("dest","audio");sym.playReverse();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ON-CAMERA}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"oncamera":break;case"video":case"audio":case"voiceover":sym.setParameter("dest","oncamera");sym.play();break;default:sym.setParameter("dest","oncamera");sym.playReverse();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEB-DESIGN}","mouseover",function(sym,e){sym.$("WEB-DESIGN-copy").show();sym.$("WEB-DESIGN").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEB-DESIGN}","mouseout",function(sym,e){sym.$("WEB-DESIGN-copy").hide();sym.$("WEB-DESIGN").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEB-DESIGN-copy}","mouseover",function(sym,e){sym.$("WEB-DESIGN-copy").show();sym.$("WEB-DESIGN").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WEB-DESIGN}","mousedown",function(sym,e){sym.$("WEB-DESIGN").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIDEONAV}","mouseover",function(sym,e){sym.$("VIDEONAV-copy").show();sym.$("VIDEONAV").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIDEONAV}","mouseout",function(sym,e){sym.$("VIDEONAV-copy").hide();sym.$("VIDEONAV").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VIDEONAV}","mousedown",function(sym,e){sym.$("VIDEONAV").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AUDIO}","mouseover",function(sym,e){sym.$("AUDIO-copy").show();sym.$("AUDIO").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AUDIO}","mouseout",function(sym,e){sym.$("AUDIO-copy").hide();sym.$("AUDIO").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_AUDIO}","mousedown",function(sym,e){sym.$("AUDIO").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ON-CAMERA}","mouseover",function(sym,e){sym.$("ON-CAMERA-copy").show();sym.$("ON-CAMERA").css("opacity","0");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ON-CAMERA}","mouseout",function(sym,e){sym.$("ON-CAMERA-copy").hide();sym.$("ON-CAMERA").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ON-CAMERA}","mousedown",function(sym,e){sym.$("ON-CAMERA").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_web8}","click",function(sym,e){window.open("http://dev.studiocenter.com/web-design-portfolio/back-bay-gourmet","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_webdesk}","click",function(sym,e){window.open("http://dev.studiocenter.com/new-media/seo-sem","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ipad}","click",function(sym,e){window.open("http://dev.studiocenter.com/new-media/online-video","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","mouseover",function(sym,e){sym.$("Text6").css("color","#417EAE");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","mouseout",function(sym,e){sym.$("Text6").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","click",function(sym,e){window.open("http://dev.studiocenter.com/audio/sound-design-reels","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5}","mouseover",function(sym,e){sym.$("Text5").css("color","#417EAE");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5}","mouseout",function(sym,e){sym.$("Text5").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5}","click",function(sym,e){window.open("http://dev.studiocenter.com/audio/audio-reels","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4}","mouseover",function(sym,e){sym.$("Text4").css("color","#417EAE");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4}","mouseout",function(sym,e){sym.$("Text4").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4}","click",function(sym,e){window.open("http://dev.studiocenter.com/audio/mix-week","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","mouseover",function(sym,e){sym.$("Text3").css("color","#417EAE");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","mouseout",function(sym,e){sym.$("Text3").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","click",function(sym,e){window.open("http://dev.studiocenter.com/audio/radio-production","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseover",function(sym,e){sym.$("Text2").css("color","#417EAE");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","mouseout",function(sym,e){sym.$("Text2").css("color","#000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","click",function(sym,e){window.open("http://dev.studiocenter.com/audio/hold-messaging","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_04}","mouseover",function(sym,e){sym.$("video_04").css("opacity","0")
sym.$("videorollover_04").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_04}","mouseout",function(sym,e){sym.$("video_04").css("opacity","1")
sym.$("videorollover_04").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_03}","mouseover",function(sym,e){sym.$("video_03").css("opacity","0")
sym.$("videorollover_03").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_03}","mouseout",function(sym,e){sym.$("video_03").css("opacity","1")
sym.$("videorollover_03").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_02}","mouseover",function(sym,e){sym.$("video_02").css("opacity","0")
sym.$("videorollover_02").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_02}","mouseout",function(sym,e){sym.$("video_02").css("opacity","1")
sym.$("videorollover_02").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_01}","mouseout",function(sym,e){sym.$("video_01").css("opacity","1")
sym.$("videorollover_01").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_01}","mouseover",function(sym,e){sym.$("video_01").css("opacity","0")
sym.$("videorollover_01").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_06}","mouseover",function(sym,e){sym.$("video_06").css("opacity","0")
sym.$("videorollover_06").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_06}","mouseout",function(sym,e){sym.$("video_06").css("opacity","1")
sym.$("videorollover_06").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_05}","mouseover",function(sym,e){sym.$("video_05").css("opacity","0")
sym.$("videorollover_05").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_video_05}","mouseout",function(sym,e){sym.$("video_05").css("opacity","1")
sym.$("videorollover_05").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",992,function(sym,e){sym.stop("video");sym.setParameter("dest","video");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","click",function(sym,e){window.open("http://dev.studiocenter.com/video/full-crew-production","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group4}","click",function(sym,e){window.open("http://dev.studiocenter.com/video/color-correction","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group5}","click",function(sym,e){window.open("http://dev.studiocenter.com/video/video-reels","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","click",function(sym,e){window.open("http://dev.studiocenter.com/video/motion-graphics","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","click",function(sym,e){window.open("http://dev.studiocenter.com/video/video-production","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group7}","click",function(sym,e){window.open("http://dev.studiocenter.com/video/video-pre-production","_top");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VOICE-TALENT}","click",function(sym,e){var dest=sym.getParameter("dest");switch(dest){case"voiceover":break;case"video":case"audio":sym.setParameter("dest","voiceover");sym.play();break;default:sym.setParameter("dest","voiceover");sym.playReverse();break;}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VOICE-TALENT}","mousedown",function(sym,e){sym.$("VOICE-TALENT").css("opacity","1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VOICE-TALENT}","mouseover",function(sym,e){sym.$("VOICE-TALENT").css("opacity","0");sym.$("VOICE--TALENT-copy3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_VOICE-TALENT}","mouseout",function(sym,e){sym.$("VOICE-TALENT").css("opacity","1");});
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

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){})("Symbol_2");
//Edge symbol end:'Symbol_2'
})(jQuery,AdobeEdge,"EDGE-175878117");