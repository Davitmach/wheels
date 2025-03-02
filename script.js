function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('Hours').textContent = timeString; 
  }

  setInterval(updateTime, 1000);
  

  updateTime();



  const Bar = document.getElementById('Bar');
  const Temp = document.getElementById('Temp');
  var Def_state = 'Temp';
  if(Def_state == 'Temp') {
    Temp.classList.add('Active');
    Bar.classList.add('Disable');
  }
  Bar.addEventListener('click',()=> {
    Def_state = 'Bar'
    if(Def_state == 'Temp') {
      Temp.classList.add('Active');
      Bar.classList.add('Disable');
      Temp.classList.remove('Disable');
      Bar.classList.remove('Active')
    }
    else {
      Temp.classList.add('Disable');
      Bar.classList.add('Active');
      Temp.classList.remove('Active');
      Bar.classList.remove('Disable')
    }
  })
  Temp.addEventListener('click',()=> {
    Def_state = 'Temp'
    if(Def_state == 'Temp') {
      Temp.classList.add('Active');
      Bar.classList.add('Disable');
      Temp.classList.remove('Disable');
      Bar.classList.remove('Active')
    }
    else {
      Temp.classList.add('Disable');
      Bar.classList.add('Active');
      Temp.classList.remove('Active');
      Bar.classList.remove('Disable')
    }
  })