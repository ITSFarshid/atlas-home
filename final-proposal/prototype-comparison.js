// The paired view shares one scale. A single view fits the selected profile.
function fitComparison(){
 const main=document.querySelector('main');
 const mode=document.getElementById('display-view').value;
 const sections=[...document.querySelectorAll('section[data-profile]')];
 sections.forEach(section=>{section.hidden=mode!=='both'&&section.dataset.profile!==mode});
 const visible=sections.filter(section=>!section.hidden);
 const layout=getComputedStyle(main);
 const availableWidth=Math.max(1,main.clientWidth-parseFloat(layout.paddingLeft)-parseFloat(layout.paddingRight));
 const headingHeight=visible.reduce((total,section)=>{
   const heading=section.querySelector('h2');
   return total+heading.offsetHeight+parseFloat(getComputedStyle(heading).marginBottom);
 },0);
 const overhead=parseFloat(layout.paddingTop)+parseFloat(layout.paddingBottom)+document.querySelector('.preview-controls').offsetHeight+parseFloat(layout.rowGap)*visible.length+headingHeight;
 const maxWidth=Math.max(...visible.map(section=>Number(section.dataset.profile)));
 const scale=Math.min(1,availableWidth/maxWidth,Math.max(360,innerHeight-overhead)/(720*visible.length));
 visible.forEach(section=>{
   const frame=section.querySelector('.display-frame');
   const width=Number(frame.dataset.width);
   frame.style.width=width*scale+'px';
   frame.style.height=720*scale+'px';
   const screen=frame.querySelector('iframe');
   screen.style.width=width+'px';
   screen.style.transform='scale('+scale+')';
 });
}
window.addEventListener('resize',fitComparison);
document.getElementById('display-view').addEventListener('change',fitComparison);
new ResizeObserver(fitComparison).observe(document.querySelector('main'));
fitComparison();
