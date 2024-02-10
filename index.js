const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodBye) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodBye(name);
};

fillSubject('Nepřišly gumičky');
fillBody(
  'Nepřišly gumičky. A co na to počítač? Mlčí. No tak to je konec. Všecko vylejt.',
  'referent Kubrt',
  rudeGoodBye

);


function rudeGoodBye (name) {

return "Sbohem a šáteček" + name

}

function niceGoodBye (name) {

  return "S přáním pěkného dne" + name
  
  }




