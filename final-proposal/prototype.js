/* Fixed navigation plus a shared four-widget collection. Width changes visible slots only. */
const params=new URLSearchParams(location.search);
const TRACKS=[{title:'Open Water',artist:'Northbound',duration:'3:42'},{title:'Long Way Home',artist:'Mira Sol',duration:'4:06'},{title:'First Light',artist:'Studio Coast',duration:'3:18'}];
const DESTINATIONS={harbor:{name:'Harbor Point',note:'Waterfront entrance',distance:18,minutes:24,delay:6,road:'Harbor Road',turn:'Mill Lane',meters:800,path:'M290 371V295H530V140H724',x:724,y:140},park:{name:'Westfield Park',note:'South entrance',distance:6,minutes:12,delay:0,road:'Westfield Avenue',turn:'Westfield Avenue',meters:600,path:'M290 371V140H150V106',x:150,y:106},cedar:{name:'Cedar Services',note:'Coffee · food · fuel',distance:10,minutes:16,delay:2,road:'Mill Lane',turn:'Mill Lane',meters:800,path:'M290 371V295H530',x:530,y:295}};
const routeInfo=()=>{const d=DESTINATIONS[state.destination]||DESTINATIONS.harbor,m=d.minutes+(state.stop?3:0),total=14*60+8+m;return {...d,path:state.stop&&state.destination==='park'?'M290 371V295H530V140H150V106':d.path,minutes:m,distance:d.distance+(state.stop?2:0),eta:Math.floor(total/60)+':'+String(total%60).padStart(2,'0')}};
function savedRows(){return Object.entries(DESTINATIONS).map(([id,d])=>button('destination-'+id,'Start route to '+d.name,`<span class="row-art">${icon('pin')}</span><span class="row-body"><strong>${d.name}</strong><span>${d.distance} km · ${d.minutes} min</span></span>${icon(state.route&&state.destination===id?'check':'chevron')}`,'list-row',state.moving?'disabled':'')).join('')}
const GEOMETRY={navigation:[88,544],mapHeader:[824,48],map:[824,544],panelHeader:[448,48],homeWidget:[448,544],taskPanel:[448,544],climate:[448,64],comfort:[448,64]};
const paths={turn:'M7 27V16a6 6 0 0 1 6-6h13m-7-7 7 7-7 7',play:'M10 6l17 10-17 10z',pause:'M11 6v20M22 6v20',next:'M6 7l15 9-15 9zM26 7v18',prev:'M26 7l-15 9 15 9zM6 7v18',home:'M4 15 16 5l12 10M8 13v14h6v-8h4v8h6V13',apps:'M5 5h8v8H5zM19 5h8v8h-8zM5 19h8v8H5zM19 19h8v8h-8z',car:'M5 20V13l4-7h14l4 7v11H5zM5 14h22M9 19h3m8 0h3M8 24v3m16-3v3',phone:'M9 5 5 8c0 9 10 19 19 19l4-4-7-5-3 3-7-7 3-3z',fan:'M16 15c-8-15 12-17 7-6l-5 7c17-4 10 15 3 7l-5-5c-4 16-17 2-6-2z',defrost:'M4 24 7 9Q16 4 25 9l3 15zM11 21v-9m5 9v-9m5 9v-9',search:'M22 22l7 7M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0',locate:'M16 3v5m0 16v5M3 16h5m16 0h5M24 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0',pin:'M25 13c0 7-9 16-9 16S7 20 7 13a9 9 0 0 1 18 0zM19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0',music:'M12 24V8l14-3v16M12 13l14-3M12 24c0 5-9 5-9 0s9-5 9 0m14-3c0 5-9 5-9 0s9-5 9 0',chevron:'m12 7 9 9-9 9',check:'m6 16 7 7L27 8',lock:'M8 14h16v14H8zM11 14V8a5 5 0 0 1 10 0v6',back:'m19 6-10 10 10 10',stop:'M8 8h16v16H8z'};
const icon=name=>AtlasUI.paths[name==='apps'?'grid':name]?AtlasUI.icon(name==='apps'?'grid':name):`<svg class="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="${paths[name]||paths.apps}"/></svg>`;
/* Published icons: Phosphor regular (sidebar, sun) and Heroicons outline (chevrons). */
const GLYPHS={
 music:'<svg class="glyph" viewBox="0 0 256 256" aria-hidden="true"><path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"/></svg>',
 phone:'<svg class="glyph" viewBox="0 0 256 256" aria-hidden="true"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"/></svg>',
 grid:'<svg class="glyph" viewBox="0 0 256 256" aria-hidden="true"><path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"/></svg>',
 house:'<svg class="glyph" viewBox="0 0 256 256" aria-hidden="true"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"/></svg>',
 sun:'<svg class="glyph" viewBox="0 0 256 256" aria-hidden="true"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>',
 'chevron-left':'<svg class="glyph line" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.75 19.5 8.25 12l7.5-7.5"/></svg>',
 'chevron-right':'<svg class="glyph line" viewBox="0 0 24 24" aria-hidden="true"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>'
};
const glyph=name=>GLYPHS[name]||GLYPHS.grid;
const button=(action,label,content,cls='',extra='')=>`<button data-action="${action}" aria-label="${label}" class="${cls}" ${extra}>${content}</button>`;
const component=(key,type,x,y,html,cls='',label=key)=>{const [w,h]=GEOMETRY[type];return `<section class="component ${cls}" data-key="${key}" data-type="${type}" data-label="${label}" data-size="${w}×${h}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px">${html}</section>`};
function album(){return AtlasUI.art().replace('class="a-art"','class="cover"');}
/* Local driving view, not a full-trip overview. Native 824 × 544 on both profiles. */
function mapSVG(){
 const r=routeInfo(),left=state.destination==='park'&&!state.stop;
 const route=left?'M360 385V263Q360 240 337 240H-20':'M360 385V263Q360 240 383 240H844';
 const arterial='M360-20V565M-20 240H844';
 const collectors='M-20 160Q98 169 182 140T325 112M474-20 481 129Q484 166 531 167H844M-20 444Q103 420 166 448L281 505 306 565M582 240V371Q582 419 635 433L844 489';
 const local='M62 169 77 240M166 146 189 240M265 123 276 240M-20 317Q100 297 214 320L360 306M80 240 91 307 69 430M215 240 214 320 196 462M284 240 285 310 266 495M360 325 482 313 582 325M462 240 482 313 463 401 448 544M360 432 463 401 582 405M620-20 618 166M737-20 730 167M497 77 622 71 844 99M651 168 641 240M746 167 744 240M656 240 646 345 704 398 697 449M582 322 646 345 844 350M707 240 725 346M582 481 671 501 731 564';
 const blocks=['M109 190 158 175 173 224H113Z','M211 166 252 152 261 218H224Z','M103 260H185V289L115 290Z','M237 260H266V292H237Z','M115 335 179 344 167 416 100 398Z','M236 345 267 344 249 422 225 410Z','M383 267H435L447 292 383 298Z','M501 267H555V301L508 293Z','M500 342 555 354V380H488Z','M645 270H683L676 314H637Z','M515 99 590 93V143H522Z','M651 101 701 109 698 142H650Z'];
 return '<svg class="cartography" viewBox="0 0 824 544" role="img" aria-label="Illustrative heading-up local driving map; next junction ahead; destination outside this view"><rect class="land" width="824" height="544"/><path class="park" d="M490 447Q520 428 553 447L640 493 613 544H481Z M24 15H317V85L181 112 24 91Z"/>'+blocks.map(d=>'<path class="building" d="'+d+'"/>').join('')+'<path class="minor" d="'+local+'"/><path class="collector-edge" d="'+collectors+'"/><path class="collectors" d="'+collectors+'"/><path class="road-edge" d="'+arterial+'"/><path class="roads" d="'+arterial+'"/>'+(state.route?'<path class="route-casing" d="'+route+'"/><path class="route-line" d="'+route+'"/>':'')+'<text class="road-label" x="'+(left?110:490)+'" y="218">'+r.turn+'</text><text class="current-road-label" x="330" y="378" transform="rotate(-90 330 378)">Riverside Road</text><text class="district" x="665" y="310">Riverside</text><text class="park-label" x="503" y="500">Riverside Park</text><g class="vehicle-marker" transform="translate(360 385)"><circle class="position-base" r="25"/><path class="position-arrow" d="M0-16 12 14 0 8-12 14Z"/></g></svg>';
}
function task(type){if(type==='journey'){const r=routeInfo();return `<div class="eyebrow">${state.route?'Your journey':'No active route'}</div><h2>${state.route?r.name:'Ready to go?'}</h2><p class="subtitle">${state.route?r.minutes+' min · '+r.distance+' km · '+r.eta+' arrival':'Your saved destinations are ready.'}</p>${state.route?`<div class="timeline"><div class="timeline-row"><i class="timeline-dot"></i><div><strong>Riverside</strong><p>Current location</p></div></div>${state.stop?'<div class="timeline-row"><i class="timeline-dot"></i><div><strong>Cedar Services</strong><p>Planned stop · +3 min</p></div></div>':''}<div class="timeline-row"><i class="timeline-dot"></i><div><strong>${r.name}</strong><p>${r.note}</p></div></div></div>${state.destination!=='cedar'?button('add-stop',state.stop?'Remove saved stop':'Add saved stop',state.moving?'Park to change stops':state.stop?'Remove Cedar stop':'Add Cedar stop','small-action',state.moving?'disabled':''):''}`:''}<div class="panel-foot">${button(state.route?'route-end':'show-ahead',state.route?'End route':'Show upcoming information',state.route?'End route':'Ahead','small-action')}</div>`}
if(type==='queue')return `<div class="eyebrow muted">One shared audio source</div><h2>Up next</h2><p class="subtitle">Northbound mix · 3 tracks</p>${TRACKS.map((t,i)=>button('track-'+i,'Play '+t.title,`<span class="row-index">${String(i+1).padStart(2,'0')}</span><span class="row-body"><strong>${t.title}</strong><span>${t.artist} · ${t.duration}</span></span>${i===state.track?icon('music'):icon('chevron')}`,'list-row '+(i===state.track?'chosen':''),state.moving?'disabled':'')).join('')}<div class="panel-foot"><span>${state.moving?'Park to change the queue':'Choose a track to play'}</span>${icon(state.moving?'lock':'music')}</div>`;
if(type==='places')return `<div class="eyebrow">Saved destinations</div><h2>Where to?</h2><p class="subtitle">Choose a place to start a route.</p>${savedRows()}<div class="panel-foot"><span>${state.moving?'Park to start or change a route':'Select a destination'}</span>${icon(state.moving?'lock':'pin')}</div>`;
if(type==='phone')return `<div class="eyebrow muted">Communication</div><h2>${state.call?'Alex Morgan':'Phone'}</h2><p class="subtitle">${state.connected?(state.call?'Call preview · no live connection':'Alex’s phone · connected'):'No phone connected'}</p><p class="tool-notice">${state.call?'An illustrative call state. No call is placed by this prototype.':'Communication stays accessible without occupying a permanent Home card.'}</p><div class="tool-grid">${button('call',state.call?'End call preview':'Preview call',icon('phone')+(state.call?'End preview':'Call preview'),'',state.connected?'':'disabled')}${button('connection','Toggle phone connection',icon('phone')+(state.connected?'Disconnect':'Connect'))}</div><div class="panel-foot">${button('home','Return Home','Back to Home','small-action')}</div>`;
if(type==='vehicle')return `<div class="eyebrow muted">Vehicle controls</div><h2>Comfort</h2><p class="subtitle">Fan and defrost live here. Temperatures stay on Home.</p><div class="tool-grid">${button('fan','Change fan speed',icon('fan')+'Fan '+state.fan)}${button('defrost','Toggle front defrost',icon('defrost')+'Front '+(state.defrost?'on':'off'),state.defrost?'on':'')}</div><p class="tool-notice">Driver and passenger temperatures remain in the climate strip below.</p><div class="panel-foot">${button('home','Return Home','Back to Home','small-action')}</div>`;
return `<div class="eyebrow muted">Functions</div><h2>Applications</h2><p class="subtitle">One shared set of functions.</p><div class="tool-grid">${button('home','Home',icon('home')+'Home')}${button('detail-ahead','Ahead',icon('pin')+'Ahead')}${button('tool-phone','Phone',icon('phone')+'Phone')}${button('tool-vehicle','Vehicle',icon('car')+'Vehicle')}</div><div class="panel-foot">${button('home','Return Home','Back to Home','small-action')}</div>`;}
const WIDGETS=['media','journey','phone','ahead'];
const names={media:'Media',journey:'Journey',phone:'Phone',ahead:'Ahead'};
const initial=()=>({width:Number(params.get('width'))===2880?2880:1920,theme:'monochrome',moving:true,route:true,destination:'harbor',stop:false,playing:true,track:0,compactIndex:0,carousel:0,active:'home',detail:null,detailSlot:0,driver:21,passenger:21,fan:2,defrost:false,connected:true,call:false,caller:'Maya'});
let state=initial(),toastTimer,scrollTimer,detailTrigger=null;
let previewScale=1;
function closeDetail(){state.detail=null;render();[...document.querySelectorAll('[data-action]')].find(n=>n.dataset.action===detailTrigger&&!n.closest('[inert]'))?.focus({preventScroll:true})}
function footer(content){return `<div class="widget-foot">${content}</div>`}
function playbackIcon(name){const shapes={prev:'M5 5h2v14H5zM19 5v14L8 12z',next:'M17 5h2v14h-2zM5 5l11 7-11 7z',play:'M8 5l11 7-11 7z',pause:'M7 5h3v14H7zM14 5h3v14h-3z'};return `<svg class="icon playback-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${shapes[name]}"/></svg>`}
function aheadInfo(){
 const route=routeInfo();
 const services=!state.route||state.stop||state.destination==='harbor'||state.destination==='cedar';
 if(services)return {title:'Cedar Services',category:state.stop?'Planned stop':state.destination==='cedar'&&state.route?'Destination':state.route?'Upcoming services':'Nearby services',distance:state.destination==='cedar'&&state.route?route.distance:10,unit:state.route?'km ahead':'km away',description:'Coffee · food · fuel',note:state.stop?'Included in your journey':state.destination==='cedar'&&state.route?'Your current destination':'Not added to your route',detail:state.stop?'This stop is already included in your arrival estimate.':state.destination==='cedar'&&state.route?'Services are available at your destination.':'A possible break near Riverside. Taking the Cedar stop adds about 3 minutes to the sample journey.',action:'Stop information'};
 return {title:route.name,category:'Arrival ahead',distance:route.distance,unit:'km remaining',description:route.note,note:route.eta+' estimated arrival',detail:'Approach '+route.name+' using the '+route.note.toLowerCase()+'. Follow the map for the next maneuver.',action:'Arrival information'};
}
function aheadDetails(){const info=aheadInfo();return `<div class="eyebrow">${info.category}</div><h2>${info.title}</h2><p class="subtitle">${info.distance} ${info.unit}</p><p class="ahead-services">${info.description}</p><p class="tool-notice">${info.detail}</p><div class="panel-foot"><span>${info.note}</span></div>`}
function card(type){const track=TRACKS[state.track];
 if(type==='media')return `<div class="widget-heading"><span>${state.playing?'Now playing':'Paused'}</span>${icon('music')}</div><div class="ribbon-media-art">${album()}</div><div class="media-player"><div class="ribbon-track"><h2>${track.title}</h2><p>${track.artist}</p></div><div class="ribbon-playback" role="group" aria-label="Playback controls">${button('prev','Previous track',playbackIcon('prev'))}${button('play',state.playing?'Pause':'Play',playbackIcon(state.playing?'pause':'play'),'primary',`aria-pressed="${state.playing}"`)}${button('next','Next track',playbackIcon('next'))}</div></div>${footer(button('detail-queue','Open media queue','Queue '+icon('chevron'),'widget-link'))}`;
 if(type==='phone')return `<div class="widget-heading"><span>Phone</span>${icon('phone')}</div><div class="phone-summary">${state.connected?'Alex’s phone · Connected':'No phone connected'}</div><h2 class="phone-title">${state.call?state.caller:state.connected?'Favourite contacts':'Connect your phone'}</h2><p class="phone-sub">${state.call?'Call preview · no live connection':state.connected?'Choose a contact to call.':'Pair a device to access your contacts.'}</p>${state.call?`<div class="call-avatar" aria-hidden="true">${state.caller[0]}</div><div class="call-actions">${button('call-end','End call preview',icon('phone')+'End preview','end-call')}</div>`:state.connected?`<div class="contact-grid">${['Maya','Daniel'].map(n=>button('call-'+n,'Preview call to '+n,`<span class="contact-initial">${n[0]}</span><span>${n}</span>${icon('phone')}`)).join('')}</div>`:`<div class="pairing-symbol" aria-hidden="true">${icon('phone')}</div>`}${footer(button(state.connected?'detail-device':'connection',state.connected?'Open phone device settings':'Connect sample phone',state.connected?'Device settings '+icon('chevron'):'Connect phone','widget-link'))}`;
 if(type==='journey'){const r=routeInfo();return `<div class="widget-heading"><span>Journey</span>${icon('pin')}</div>${state.route?`<div class="journey-destination"><span class="eyebrow">Destination</span><h2>${r.name}</h2><p>${r.note}</p></div><div class="journey-next"><span class="journey-node" aria-hidden="true"></span><div><span class="eyebrow">${state.stop?'Next stop':'Arrival'}</span><h3>${state.stop?'Cedar Services':r.eta}</h3><p>${state.stop?'Coffee · +3 min detour':r.distance+' km remaining · '+r.minutes+' min'}</p></div></div>${button('detail-traffic','Open route conditions',`${icon(r.delay?'warning':'check')}<span><strong>${r.delay?'+'+r.delay+' min · '+r.road:'No reported delays'}</strong><small>${r.delay?'Already included in arrival time':'Current route is clear'}</small></span>${icon('chevron')}`,'journey-impact '+(r.delay?'':'is-clear'))}${footer(button('detail-journey','Open journey overview','Route & stops '+icon('chevron'),'widget-link'))}`:`<div class="journey-idle">${icon('locate')}<h2>Ready when you are</h2><p>No route in progress</p><dl class="journey-ready"><div><dt>Current area</dt><dd>Riverside</dd></div><div><dt>Estimated range</dt><dd>312 km</dd></div></dl></div>${footer(button('show-ahead','Show upcoming information','See upcoming services '+icon('chevron'),'widget-link'))}`}`}
 const info=aheadInfo();return `<div class="widget-heading"><span>Ahead</span>${icon('pin')}</div><div class="ahead-summary"><span class="eyebrow">${info.category}</span><div class="ahead-distance">${info.distance}<span>${info.unit}</span></div><h2>${info.title}</h2><p class="ahead-services">${info.description}</p><p class="ahead-note">${info.note}</p></div>${footer(button('detail-ahead','Open '+info.action.toLowerCase(),info.action+icon('chevron'),'widget-link'))}`;

}
function detailContent(type){if(type==='ahead')return aheadDetails();if(type==='device')return `<div class="eyebrow">Phone settings</div><h2>Alex’s phone</h2><p class="subtitle">${state.connected?'Connected':'Disconnected'}</p><p class="tool-notice">Manage the shared phone connection. Calls in this prototype are previews only.</p><div class="panel-foot">${button('connection','Toggle phone connection',state.connected?'Disconnect phone':'Connect phone','small-action')}</div>`;
 if(type==='traffic'){const r=routeInfo();return `<div class="eyebrow">Route conditions</div><h2>${r.road}</h2><p class="subtitle">${state.route?(r.delay?'Slow traffic on your route':'No reported delays'):'No active route'}</p><div class="detail-metric">${state.route?'+'+r.delay:'—'} <span>min</span></div><p class="tool-notice">${state.route?'Any delay is already included in your arrival time.':'Choose a destination to view route conditions.'}</p><div class="panel-foot">${button('detail-journey','Open journey overview','Route overview','small-action')}</div>`}
 if(type==='apps')return `<div class="eyebrow muted">Home collection</div><h2>Your widgets</h2><p class="subtitle">The same collection on both displays.</p><div class="tool-grid">${WIDGETS.map(n=>button('show-'+n,'Show '+names[n],icon(n==='media'?'music':(n==='ahead'||n==='journey')?'pin':'phone')+names[n])).join('')}</div><div class="panel-foot">${button('detail-vehicle','Open vehicle controls','Vehicle controls','small-action')}</div>`;
 return task(type);
}
function ribbonOrder(){const n=WIDGETS.length,i=((state.carousel||0)%n+n)%n;return WIDGETS.slice(i).concat(WIDGETS.slice(0,i))}
const RIBBON_PITCH=480,RIBBON_BASE=-WIDGETS.length*RIBBON_PITCH;
const SLIDE_MS=420,SLIDE_EASE='cubic-bezier(0.22, 1, 0.36, 1)';
let ribbonAnim=null,sliding=false,pendingSelection=null,suppressRibbonClickUntil=0;
const ribbonWheel={until:0,distance:0,used:false};
function syncStrip(){
 const visible=state.width===2880?4:2;
 document.querySelectorAll('#widget-track>.home-widget').forEach((node,i)=>{
   const slot=i-WIDGETS.length;
   const unavailable=slot<0||slot>=visible||(!!state.detail&&slot===Math.min(state.detailSlot,visible-1));
   node.inert=unavailable;node.setAttribute('aria-hidden',String(unavailable));
 });
 document.querySelectorAll('[data-action^="bring-near-"]').forEach(node=>node.setAttribute('aria-pressed',String(node.dataset.action==='bring-near-'+WIDGETS[state.carousel])));
}
function settleTrack(track,x){track.style.transform=`translateX(${x}px)`}
function stopRibbonAnim(){
 if(ribbonAnim){ribbonAnim.onfinish=null;ribbonAnim.cancel();ribbonAnim=null}
 sliding=false;
}
function dismissDetailForBrowse(){
 state.detail=null;document.querySelector('.detail-panel')?.remove();syncStrip();
}
function animateRibbon(delta,offset=0){
 if(sliding)return;
 dismissDetailForBrowse();
 const track=document.getElementById('widget-track');
 const target=(state.carousel+delta+WIDGETS.length)%WIDGETS.length;
 const from=RIBBON_BASE+offset,to=RIBBON_BASE-delta*RIBBON_PITCH;
 const finish=()=>{
   const queued=pendingSelection;pendingSelection=null;
   state.carousel=target;state.compactIndex=0;render();
   if(queued!==null)bringNear(queued);
 };
 if(matchMedia('(prefers-reduced-motion: reduce)').matches||Math.abs(from-to)<.5){finish();return}
 sliding=true;
 const anim=track.animate([{transform:`translateX(${from}px)`},{transform:`translateX(${to}px)`}],{duration:SLIDE_MS,easing:SLIDE_EASE,fill:'forwards'});
 ribbonAnim=anim;
 anim.onfinish=()=>{
   if(ribbonAnim!==anim)return;
   settleTrack(track,to);ribbonAnim=null;anim.onfinish=null;anim.cancel();sliding=false;finish();
 };
}
function bringNear(type){
 const index=WIDGETS.indexOf(type);if(index<0)return;
 if(sliding){pendingSelection=type;return}
 let delta=(index-state.carousel+WIDGETS.length)%WIDGETS.length;
 if(delta>WIDGETS.length/2)delta-=WIDGETS.length;
 animateRibbon(delta);
}
function openWidget(type){bringNear(type)}
function widgetSelector(){return `<div class="widget-selector" role="group" aria-label="Bring a widget beside the map">${WIDGETS.map(type=>button('bring-near-'+type,'Bring '+names[type]+' beside the map',names[type],'',`aria-pressed="${WIDGETS[state.carousel]===type}"`)).join('')}</div>`}
function ribbonMarkup(){
 const order=ribbonOrder();
 // Buffer a full cycle on either side so both directions always have content.
 return [-1,0,1].map(cycle=>order.map(type=>`<article class="panel home-widget widget-${type}" data-widget="${type}" data-type="homeWidget" ${cycle?'data-clone="true" inert aria-hidden="true"':''} tabindex="-1" aria-label="${names[type]} widget">${card(type)}</article>`).join('')).join('');
}
function bindRibbon(strip,track){
 let drag=null;
 const resetDrag=()=>{drag=null;strip.classList.remove('dragging')};
 strip.addEventListener('dragstart',e=>e.preventDefault());
 strip.addEventListener('wheel',e=>{
   // Vertical scrolling belongs to the stacked presentation page.
   const horizontal=Math.abs(e.deltaX)>Math.abs(e.deltaY);
   if(!horizontal&&!e.shiftKey)return;
   e.preventDefault();
   const now=performance.now();
   if(now>=ribbonWheel.until){ribbonWheel.distance=0;ribbonWheel.used=false}
   ribbonWheel.until=now+180;
   const delta=horizontal?e.deltaX:e.deltaY;
   ribbonWheel.distance+=delta;
   if(sliding||ribbonWheel.used||Math.abs(ribbonWheel.distance)<16)return;
   ribbonWheel.used=true;animateRibbon(ribbonWheel.distance>0?1:-1);
 },{passive:false});
 strip.addEventListener('keydown',e=>{
   if(e.target!==strip||!['ArrowLeft','ArrowRight'].includes(e.key))return;
   e.preventDefault();animateRibbon(e.key==='ArrowRight'?1:-1);
 });
 strip.addEventListener('pointerdown',e=>{
   if(e.button!==0||e.isPrimary===false||drag)return;
   // Observe presses on every descendant, including buttons. A tap stays a tap
   // until horizontal movement establishes a drag.
   drag={x:e.clientX,y:e.clientY,dx:0,origin:0,started:false,pointerId:e.pointerId};
 });
 strip.addEventListener('pointermove',e=>{
   if(!drag||drag.pointerId!==e.pointerId)return;
   const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
   if(!drag.started){
     if(Math.max(Math.abs(dx),Math.abs(dy))<8)return;
     if(Math.abs(dy)>Math.abs(dx)){resetDrag();return}
     // Take over at the current rendered position rather than ignoring a new
     // gesture or snapping back to the start of an unfinished animation.
     if(ribbonAnim){
       const transform=getComputedStyle(track).transform;
       drag.origin=(transform==='none'?RIBBON_BASE:new DOMMatrixReadOnly(transform).m41)-RIBBON_BASE;
       stopRibbonAnim();pendingSelection=null;
     }
     dismissDetailForBrowse();drag.started=true;
     strip.classList.add('dragging');strip.setPointerCapture?.(e.pointerId);
   }
   e.preventDefault();
   drag.dx=Math.max(-RIBBON_PITCH*3,Math.min(RIBBON_PITCH*3,drag.origin+dx));
   settleTrack(track,RIBBON_BASE+drag.dx);
 });
 const end=(e,cancelled=false)=>{
   if(!drag||drag.pointerId!==e.pointerId)return;
   const {dx,origin,started}=drag;resetDrag();
   if(!started)return;
   if(strip.hasPointerCapture?.(e.pointerId))strip.releasePointerCapture(e.pointerId);
   suppressRibbonClickUntil=performance.now()+350;
   let delta=cancelled?Math.round(-origin/RIBBON_PITCH):Math.round(-dx/RIBBON_PITCH);
   if(!cancelled&&delta===0&&Math.abs(dx)>=40)delta=dx<0?1:-1;
   animateRibbon(delta,dx);
 };
 strip.addEventListener('pointerup',e=>end(e));
 strip.addEventListener('pointercancel',e=>end(e,true));
 strip.addEventListener('lostpointercapture',e=>end(e,true));
}

function fitPreview(){
 const screen=document.getElementById('screen'),stage=document.getElementById('preview-stage');
 previewScale=1;
 stage.style.width=state.width+'px';stage.style.height='720px';screen.style.transform='none';
}
function nativeRail(){
 const items=[['home','Home','house'],['tool-media','Media','music'],['tool-phone','Phone','phone'],['tool-apps','Apps','grid']];
 const shortcuts=items.map(([action,label,name])=>`<span class="dock-shortcut${action==='home'?' dock-home':''}" role="img" aria-label="${label}${action==='home'?' — selected':''}" ${action==='home'?'aria-current="page"':''}>${glyph(name)}</span>`).join('');
 return `<aside class="native-rail" aria-label="Sidebar"><time class="rail-time" datetime="14:03">14:03</time><div class="rail-shortcuts">${shortcuts}</div></aside>`;
}
function tempSide(side){
 const label=side==='driver'?'Driver':'Passenger';
 return `<div class="climate-control" role="group" aria-label="${label} temperature">${button(side+'-minus','Decrease '+side+' temperature','−','temp-step',state[side]<=16?'disabled':'')}<div class="climate-reading"><span class="climate-zone">${label}</span><span class="value" aria-live="polite">${state[side].toFixed(1)}<span class="temperature-unit">°C</span></span></div>${button(side+'-plus','Increase '+side+' temperature','+','temp-step',state[side]>=28?'disabled':'')}</div>`;
}
function render(){stopRibbonAnim();pendingSelection=null;const ribbonFocused=document.activeElement?.id==='widget-strip',prior=document.activeElement?.dataset?.action,screen=document.getElementById('screen');screen.style.width=state.width+'px';screen.classList.toggle('wireframe',params.has('wireframe'));let h='';
 h+=component('navigation','navigation',16,80,nativeRail(),'navigation','Primary navigation');
 h+=component('map','map',120,80,`${mapSVG()}<div class="map-guidance ${state.route&&state.destination==='park'&&!state.stop?'turn-left':''}">${icon(state.route?'turn':'pin')}<div><strong>${state.route?routeInfo().meters+' <small>m</small>':'Where next?'}</strong><span>${state.route?(state.destination==='park'&&!state.stop?'Turn left · ':'Turn right · ')+routeInfo().turn:'View nearby services'}</span></div></div>${button('detail-ahead','Open upcoming information',icon('pin'),'map-search')}<div class="map-trip"><div><strong>${state.route?routeInfo().eta+' arrival':'No active route'}</strong><span>${state.route?routeInfo().minutes+' min remaining':'Explore nearby services'}</span></div>${button(state.route?'detail-journey':'show-ahead',state.route?'Open journey overview':'View nearby services',state.route?'Journey '+icon('chevron'):'Ahead','small-action')}</div><div class="map-tools">${button('recenter','Recenter map',icon('locate'))}</div>`,'map','Fixed navigation widget');
 const stripEnd=state.width-16,passengerX=stripEnd-448;
 h+=`<div id="widget-strip" class="widget-strip" role="region" aria-roledescription="carousel" tabindex="0" aria-label="Home widgets. Swipe horizontally or use the selector below." style="width:${state.width-992}px"><div class="widget-track" id="widget-track">${ribbonMarkup()}</div></div>`;
 for(const [side,x] of [['driver',120],['passenger',passengerX]])h+=component('climate-'+side,'climate',x,640,tempSide(side),'climate climate-'+side,side+' climate');
 h+=widgetSelector();
 if(state.detail)h+=`<section class="panel task-panel detail-panel" role="region" data-detail="${state.detail}" tabindex="-1" style="left:${976+Math.min(state.detailSlot,state.width===2880?3:1)*480}px" aria-label="${state.detail} details"><button class="detail-close" data-action="close-detail" aria-label="Close details">×</button>${detailContent(state.detail)}</section>`;
 screen.innerHTML=h;
 const strip=document.getElementById('widget-strip'),track=document.getElementById('widget-track');settleTrack(track,RIBBON_BASE);syncStrip();bindRibbon(strip,track);
 const dialog=screen.querySelector('.detail-panel');fitPreview();
 if(prior){const candidates=[...screen.querySelectorAll('[data-action]')];const focus=candidates.find(b=>b.dataset.action===prior&&!b.disabled&&!b.closest('[inert]'));focus?.focus({preventScroll:true})}
 if(ribbonFocused)strip.focus({preventScroll:true});
}
function toast(text){document.querySelector('.toast')?.remove();clearTimeout(toastTimer);const e=document.createElement('div');e.className='toast';e.setAttribute('role','status');e.textContent=text;document.getElementById('screen').appendChild(e);toastTimer=setTimeout(()=>e.remove(),2200)}
document.getElementById('screen').addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b||b.disabled)return;const a=b.dataset.action;
 if(b.closest('[inert]'))return;
 if(a.startsWith('bring-near-')){bringNear(a.slice(11));return}
 if(b.closest('.home-widget')&&(sliding||performance.now()<suppressRibbonClickUntil))return;
 if(a==='recenter'){toast('Map centered on your location');return}
 if(a.startsWith('show-')){openWidget(a.slice(5));return}
 if(a==='tool-phone'||a==='tool-media'){openWidget(a.slice(5));return}
 if(a.startsWith('place-')){toast(a==='place-harbor'?'Harbor Point · current destination':'Westfield Park · saved place, 6 km away');return}
 if(a==='close-detail'){closeDetail();return}
 if(a.startsWith('detail-')||a==='tool-apps'||a==='tool-vehicle'){if(!state.detail){detailTrigger=a;const card=b.closest('.home-widget');state.detailSlot=card?Math.round((card.offsetLeft+RIBBON_BASE)/RIBBON_PITCH):0}}
 if(a.startsWith('destination-')){if(state.moving)return;state.destination=a.slice(12);state.route=true;state.stop=false;state.detail=null;render();return}
 if(a==='home'){state.detail=null;state.compactIndex=0;state.carousel=0;state.active='home'}
 else if(a==='tool-apps')state.detail='apps';else if(a==='tool-vehicle')state.detail='vehicle';else if(a==='close-detail')state.detail=null;
 else if(a.startsWith('detail-'))state.detail=a.slice(7);
 else if(a.startsWith('tab-'))state.detail=a.slice(4);
 else if(a==='play')state.playing=!state.playing;
 else if(a==='next'||a==='prev')state.track=(state.track+(a==='next'?1:2))%3;
 else if(a.startsWith('track-')&&!state.moving){state.track=Number(a.slice(6));state.playing=true}
 else if(a==='route-end'){state.route=false;state.stop=false}
 else if(a==='route-start')state.route=true;
 else if(a==='add-stop'&&!state.moving){state.stop=!state.stop;state.route=true}
 else if(a==='fan')state.fan=state.fan%4+1;else if(a==='defrost')state.defrost=!state.defrost;
 else if(a==='connection'){state.connected=!state.connected;state.call=false}
 else if(a==='call-end')state.call=false;else if(a.startsWith('call-')&&state.connected){state.call=true;state.caller=a.slice(5)}
 else if(/^(driver|passenger)-(plus|minus)$/.test(a)){const[side,op]=a.split('-');state[side]=Math.max(16,Math.min(28,state[side]+(op==='plus'?.5:-.5)))}render();if(a.startsWith('detail-')||a==='tool-apps'||a==='tool-vehicle')document.querySelector('.detail-close')?.focus({preventScroll:true});
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.detail){e.preventDefault();closeDetail()}});
function changeDisplay(width){
 // Preserve the widget beside the map across the two hardware profiles.
 state.compactIndex=0;state.detail=null;state.width=width;render();
}
window.ATLAS={getState:()=>({...state}),geometry:GEOMETRY,widgets:WIDGETS,setState:patch=>{state={...state,...patch,moving:true};render()}};render();



