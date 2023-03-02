const productsDict = [
  {
    nume: 'Produs 1',
    pret: 10,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 1',
    tag2: 'Tag2 Produs 1',
  },
  {
    nume: 'Produs 2',
    pret: 15,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 2',
    tag2: 'Tag2 Produs 2',
  },
  {
    nume: 'Produs 3',
    pret: 20,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 3',
    tag2: 'Tag2 Produs 3',
  },
  {
    nume: 'Produs 4',
    pret: 25,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 4',
    tag2: 'Tag2 Produs 4',
  },
  {
    nume: 'Produs 5',
    pret: 30,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 5',
    tag2: 'Tag2 Produs 5',
  },
  {
    nume: 'Produs 6',
    pret: 35,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 6',
    tag2: 'Tag2 Produs 6',
  },
  {
    nume: 'Produs 7',
    pret: 40,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 7',
    tag2: 'Tag2 Produs 7',
  },
  {
    nume: 'Produs 8',
    pret: 45,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 8',
    tag2: 'Tag2 Produs 8',
  },
  {
    nume: 'Produs 9',
    pret: 50,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 9',
    tag2: 'Tag2 Produs 9',
  },
  {
    nume: 'Produs 10',
    pret: 55,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 10',
    tag2: 'Tag2 Produs 10',
  },
  {
    nume: 'Produs 11',
    pret: 60,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 11',
    tag2: 'Tag2 Produs 11',
  },
  {
    nume: 'Produs 12',
    pret: 65,
    imageUrl: '/img/produs.png',
    tag1: 'Tag1 Produs 12',
    tag2: 'Tag2 Produs 12',
  },
];

var carduriPePagina = 8;
var numarPagini = Math.ceil(productsDict.length / carduriPePagina);

function afiseazaCarduriPagina(pagina) {
  var startIndex = pagina * carduriPePagina;
  var endIndex = startIndex + carduriPePagina;
  var carduri = productsDict.slice(startIndex, endIndex);

  var containerCarduri = document.getElementById('card-container');
  containerCarduri.innerHTML = '';

  carduri.forEach(function (persoana) {
    var card = document.createElement('div');
    card.classList.add('card');

    var img = document.createElement('div');
    img.classList.add('card__img');
    card.appendChild(img);

    var imgChild = document.createElement('img');

    imgChild.setAttribute('src', persoana.imageUrl);
    img.appendChild(imgChild);

    var nume = document.createElement('div');
    nume.innerText = persoana.nume;
    nume.classList.add('card__title');
    card.appendChild(nume);

    var pret = document.createElement('div');
    pret.innerText = persoana.pret;
    pret.classList.add('card__price');
    card.appendChild(pret);

    var tag1 = document.createElement('div');
    tag1.innerText = persoana.tag1;
    tag1.classList.add('card__tag1', 'tagDec');
    card.appendChild(tag1);

    var tag2 = document.createElement('div');
    tag2.innerText = persoana.tag2;
    tag2.classList.add('card__tag2', 'tagDec');
    card.appendChild(tag2);

    containerCarduri.appendChild(card);
  });
}
function afiseazaPagini() {
  var containerPagini = document.getElementById('pagina-container');
  containerPagini.innerHTML = '';

  for (var i = 0; i < numarPagini; i++) {
    var pagina = document.createElement('button');
    pagina.classList.add('btnPag');
    pagina.innerText = i + 1;
    pagina.addEventListener('click', function () {
      // eliminăm clasa "activă" de la toate butoanele
      var butoane = containerPagini.getElementsByTagName('button');
      for (var j = 0; j < butoane.length; j++) {
        butoane[j].classList.remove('activ');
      }
      // adăugăm clasa "activă" butonului apăsat
      this.classList.add('activ');
      // mutăm fereastra de vizualizare în partea de sus a paginii cu o animație smooth
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      afiseazaCarduriPagina(this.innerText - 1);
    });

    // adăugăm clasa "activă" doar butonului inițial
    if (i == 0) {
      pagina.classList.add('activ');
    }

    containerPagini.appendChild(pagina);
  }
}

afiseazaPagini();
afiseazaCarduriPagina(0);
