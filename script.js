const openBtn=document.getElementById('openBtn');
const cover=document.getElementById('cover');
const inside=document.getElementById('inside');
openBtn.addEventListener('click',()=>{
  cover.classList.add('hidden');
  inside.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
});
const weddingDate=new Date('2026-12-11T00:00:00');
function updateCountdown(){
  const now=new Date();
  let diff=Math.max(0,weddingDate-now);
  const days=Math.floor(diff/86400000);diff%=86400000;
  const hours=Math.floor(diff/3600000);diff%=3600000;
  const minutes=Math.floor(diff/60000);diff%=60000;
  const seconds=Math.floor(diff/1000);
  document.getElementById('days').textContent=String(days).padStart(2,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);
document.getElementById('rsvpForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=document.getElementById('guestName').value.trim();
  const attendance=document.getElementById('attendance').value;
  const guests=document.getElementById('guestCount').value;
  const message=`Wedding RSVP for Jessica & Rojit%0AName: ${encodeURIComponent(name)}%0AResponse: ${encodeURIComponent(attendance)}%0ANumber of guests: ${encodeURIComponent(guests)}`;
  const choose=confirm('Send your RSVP to Jessica? Press Cancel to send it to Rojit.');
  const phone=choose?'917005206036':'917629951466';
  window.open(`https://wa.me/${phone}?text=${message}`,'_blank','noopener');
});
