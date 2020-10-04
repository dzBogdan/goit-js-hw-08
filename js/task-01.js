const picters =  [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

const namUlEl = document.querySelector('.gallery');
const namIl = picters.map(picter => {
 
  const navItem  = document.createElement('li')
  navItem.classList.add('gallery__item');

  const navLink = document.createElement('a');
  navLink.classList.add('gallery__link');
  //navLink.href = picter.original;

  const navImg = document.createElement('img');
  navImg.classList.add('gallery__image');

  navImg.src = picter.preview;
  navImg.alt = picter.description;

  navLink.appendChild(navImg);
  navItem.appendChild(navLink);
  return navItem;

});

namUlEl.append(...namIl);





const imgEl = document.querySelector('.gallery');
imgEl.addEventListener('click',onImgClick);

const modalForm = document.querySelector('.lightbox');


modalForm.addEventListener('click',onModalFormClose);


function onModalFormClose(){
  window.removeEventListener('keydown',onKeyDown)
  modalForm.classList.remove('is-open');
}

function faindIndexPW(src){
  for (let i=0;i< picters.length; i +=1 ){
    if(picters[i].preview === src){
      return i;
    }
  }
}

function onImgClick(evt){
  if(!evt.target.classList.contains('gallery__image')){
    return;
  }
  console.log(evt.target.src);
  window.addEventListener('keydown',onKeyDown)
  modalForm.classList.add('is-open');

  const imgModalForm = document.querySelector('.lightbox__img');
  let i = faindIndexPW(evt.target.src);
  imgModalForm.src = picters[i].original;

}

function faindIndexOr(src){
  for (let i=0;i< picters.length; i +=1 ){
    if(picters[i].original === src){
      return i;
    }
  }
}

function onArrowRightKeyDown(){
  const imgModalForm = document.querySelector('.lightbox__img');
  let num = faindIndexOr(imgModalForm.src);
  num += 1;
  if (num!= 9){
    
    console.log(imgModalForm.src = picters[num].original );
    imgModalForm.src = picters[num].original; 
  }
  

}

function onArrowLeftKeyDown(){
  const imgModalForm = document.querySelector('.lightbox__img');
  let num = faindIndexOr(imgModalForm.src);
  num -= 1;
  if (num!= -1){
    
    console.log(imgModalForm.src = picters[num].original );
    imgModalForm.src = picters[num].original; 
  }
  

}

function onKeyDown(evt){
  switch (evt.code){
  case 'Escape': onModalFormClose() ;break; 
  case 'ArrowRight':onArrowRightKeyDown();break;
  case 'ArrowLeft':onArrowLeftKeyDown();break;
  }
}


