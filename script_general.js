(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.init()","borderSize":0,"data":{"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"name":"Player812","defaultLocale":"pt","locales":{"pt":"locale/pt.txt"}},"defaultVRPointer":"laser","class":"Player","borderRadius":0,"propagateClick":false,"gap":10,"mobileMipmappingEnabled":false,"scrollBarWidth":10,"paddingLeft":0,"id":"rootPlayer","mouseWheelEnabled":true,"scrollBarMargin":2,"paddingTop":0,"paddingBottom":0,"paddingRight":0,"scrollBarVisible":"rollOver","overflow":"hidden","scrollBarColor":"#000000","definitions": [{"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","zoomEnabled":true,"viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_t.jpg","cube":{"levels":[{"width":12288,"url":"media/panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"width":6144,"url":"media/panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"width":3072,"url":"media/panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"width":12288,"url":"media/panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"adjacentPanoramas":[{"distance":6.89,"yaw":4.39,"panorama":"this.panorama_9F90817F_957E_0FAA_41CA_853A8D57838D","select":"this.overlay_9B94D156_9586_0FFD_41D3_8D8BB96F9956.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9B94D156_9586_0FFD_41D3_8D8BB96F9956"},"class":"AdjacentPanorama","backwardYaw":2.15}],"pitch":0,"thumbnailUrl":"media/panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_t.jpg","vfov":180,"label":trans('panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22.label'),"id":"panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22","overlays":["this.Cap_98BF33A1_9582_3357_41B1_FDCEB82AAA3C","this.overlay_9B94D156_9586_0FFD_41D3_8D8BB96F9956"],"hfovMax":130,"hfovMin":"135%","partial":false,"data":{"label":"ENTRADA VINHO "}},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_camera","media":"this.panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_camera","media":"this.panorama_9F90817F_957E_0FAA_41CA_853A8D57838D","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_t.jpg","cube":{"levels":[{"width":12288,"url":"media/panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"width":6144,"url":"media/panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"width":3072,"url":"media/panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"width":12288,"url":"media/panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"adjacentPanoramas":[{"distance":10.67,"yaw":2.15,"panorama":"this.panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22","select":"this.overlay_9B653162_9586_0FD5_41D8_3BBAD23A14EB.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_9B653162_9586_0FD5_41D8_3BBAD23A14EB"},"class":"AdjacentPanorama","backwardYaw":4.39}],"pitch":0,"thumbnailUrl":"media/panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_t.jpg","vfov":180,"label":trans('panorama_9F90817F_957E_0FAA_41CA_853A8D57838D.label'),"id":"panorama_9F90817F_957E_0FAA_41CA_853A8D57838D","overlays":["this.overlay_9B653162_9586_0FD5_41D8_3BBAD23A14EB"],"hfovMax":130,"hfovMin":"135%","partial":false,"data":{"label":"LOJA INTERNA "}},{"toolTipBorderRadius":3,"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowOpacity":1,"borderSize":0,"class":"ViewerArea","borderRadius":0,"surfaceReticleOpacity":0.6,"progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"progressBottom":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"displayTooltipInSurfaceSelection":true,"id":"MainViewer","playbackBarHeight":10,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","paddingRight":0,"playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"width":"100%","toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","progressOpacity":1,"toolTipFontStyle":"normal","toolTipShadowHorizontalLength":0,"progressBarBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"subtitlesEnabled":true,"toolTipBorderSize":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"height":"100%","progressBarBorderColor":"#000000","subtitlesFontWeight":"normal","toolTipTextShadowBlurRadius":3,"progressBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","progressHeight":10,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","subtitlesPaddingLeft":5,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowOpacity":0.7,"subtitlesPaddingBottom":5,"progressBorderSize":0,"subtitlesFontSize":"3vmin","progressBorderColor":"#000000","minHeight":50,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"minWidth":100,"toolTipFontWeight":"normal","progressBarBorderRadius":0,"transitionDuration":500,"displayTooltipInTouchScreens":true,"progressBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","subtitlesPaddingRight":5,"playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"toolTipShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","paddingTop":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarProgressOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesPaddingTop":5,"vrPointerSelectionColor":"#FF6600","playbackBarHeadOpacity":1,"playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesShadow":false,"playbackBarBorderRadius":0,"toolTipPaddingLeft":6,"toolTipShadowOpacity":1,"toolTipHorizontalAlign":"center","playbackBarBorderSize":0,"transitionMode":"blending","progressBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"subtitlesGap":0,"progressBarOpacity":1,"progressBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"translationTransitionDuration":1000,"toolTipFontSize":"1.11vmin","toolTipDisplayTime":600,"doubleClickAction":"toggle_fullscreen","surfaceReticleColor":"#FFFFFF","shadow":false,"playbackBarHeadShadowHorizontalLength":0,"progressLeft":0,"playbackBarBottom":5,"propagateClick":false,"toolTipBorderColor":"#767676"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_9E7D595B_957E_1FEB_41B8_9A6C7F7192A5","automaticZoomSpeed":10,"id":"panorama_99776EFF_957E_12AB_41DB_572DCF2A5D22_camera"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_9E79C95E_957E_1FEA_41C5_A748C5D23A4A","automaticZoomSpeed":10,"id":"panorama_9F90817F_957E_0FAA_41CA_853A8D57838D_camera"},{"inertia":false,"distance":50,"useHandCursor":false,"image":"this.res_9A58C284_9582_0D5F_41D6_ABC1214EABCE","angle":0,"hfov":43.5,"id":"Cap_98BF33A1_9582_3357_41B1_FDCEB82AAA3C","class":"TripodCapPanoramaOverlay","rotate":false},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoTo20230929_184126_815"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_9A481F84_9582_135D_41E2_B24DC2728B36","distance":50,"vfov":7.88,"yaw":4.39,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"GoTo20230929_184126_815"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-13.84,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_9B0931AD_9586_0EAE_41E2_1147107FA929"],"maps":[],"id":"overlay_9B94D156_9586_0FFD_41D3_8D8BB96F9956"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToEntradaVinho"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_9A48AF84_9582_135D_41D0_E1FEA748E03B","distance":50,"vfov":7.88,"yaw":2.15,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"GoToEntradaVinho"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-9.04,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_84FF7E26_9582_F55D_41D8_5A6A0648667B"],"maps":[],"id":"overlay_9B653162_9586_0FD5_41D8_3BBAD23A14EB"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_9E7D595B_957E_1FEB_41B8_9A6C7F7192A5"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_9E79C95E_957E_1FEA_41C5_A748C5D23A4A"},{"levels":[{"height":850,"width":850,"class":"ImageResourceLevel","url":"media/res_9A58C284_9582_0D5F_41D6_ABC1214EABCE_0.png"}],"class":"ImageResource","id":"res_9A58C284_9582_0D5F_41D6_ABC1214EABCE"},{"frameDuration":41,"levels":[{"height":630,"width":840,"class":"ImageResourceLevel","url":"media/res_9A59B285_9582_0D5E_41DF_92BD298A28C9_0.png"}],"colCount":7,"class":"AnimatedImageResource","frameCount":49,"rowCount":7,"id":"AnimatedImageResource_9A481F84_9582_135D_41E2_B24DC2728B36"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_9B0931AD_9586_0EAE_41E2_1147107FA929"},{"frameDuration":41,"levels":[{"height":630,"width":840,"class":"ImageResourceLevel","url":"media/res_9A59B285_9582_0D5E_41DF_92BD298A28C9_0.png"}],"colCount":7,"class":"AnimatedImageResource","frameCount":49,"rowCount":7,"id":"AnimatedImageResource_9A48AF84_9582_135D_41D0_E1FEA748E03B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_84FF7E26_9582_F55D_41D8_5A6A0648667B"}],"vrPolyfillScale":0.75,"horizontalAlign":"left","contentOpaque":false,"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"width":"100%","backgroundOpacity":1,"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"mediaActivationMode":"window","layout":"absolute","backgroundPreloadEnabled":true,"children":["this.MainViewer"],"downloadEnabled":false,"scripts":{"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"existsKey":TDV.Tour.Script.existsKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isPanorama":TDV.Tour.Script.isPanorama,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMainViewer":TDV.Tour.Script.getMainViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoBack":TDV.Tour.Script.historyGoBack,"downloadFile":TDV.Tour.Script.downloadFile,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showWindow":TDV.Tour.Script.showWindow,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setValue":TDV.Tour.Script.setValue,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPixels":TDV.Tour.Script.getPixels,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setLocale":TDV.Tour.Script.setLocale,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"translate":TDV.Tour.Script.translate,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera},"minHeight":20,"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"shadow":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.21.js.map
})();
//Generated with v2022.0.21, Wed Oct 16 2024