/* draggable element */
const item = document.querySelectorAll('.item');
item.forEach(itm=>{

    itm.addEventListener('dragstart', dragStart);
})
//item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

/* drop targets */
const boxes = document.querySelectorAll('.box');
//console.log(boxes );
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
   // console.log( box.addEventListener('dragenter', dragEnter));
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
e.target.querySelector('button').remove()
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    console.log(draggable);
    // add it to the drop target
    e.target.appendChild(draggable);
    //e.target.querySelector('button').remove()
    e.target.classList.remove('box');
    //e.target.removeEventListener('drop', dragEnter);
    const el = document.createElement('div');
    const el2=document.createElement('div');
    const btnadd=document.createElement('button');

    el.classList.add('col-xxl-4','col-lg-4');
    btnadd.classList.add('btn', 'btn-outline-light', 'btn-lg');
    const par=e.target.parentElement.parentElement;
    par.appendChild(el);
    el.appendChild(el2);
    el2.appendChild(btnadd);
    el2.classList.add('card', 'card-h-100', 'box');
    //console.log( e.target.parentElement);

     //el.setAttribute('id', 'my-id');

    // display the draggable element
    draggable.classList.remove('hide');
    const boxesnew = document.querySelectorAll('.box');
    boxesnew.forEach(box1 => {
        console.log(box1);
        box1.addEventListener('dragenter', dragEnter)
       box1.addEventListener('dragover', dragOver);
       box1.addEventListener('dragleave', dragLeave);
        box1.addEventListener('drop', drop);
   });
    e.target.removeEventListener('drop', dragEnter);
    e.target.removeEventListener('dragenter', dragEnter);
    e.target.removeEventListener('dragover', dragOver);
    e.target.removeEventListener('dragleave', dragLeave);
    e.target.removeEventListener('drop', drop);
    //console.log(par.querySelector('div')[1]);
    //e.target.parentElement.nextSibling.addEventListener('dragenter', dragEnter);
    //e.target.parentElement.nextSibling.addEventListener('dragover', dragOver);
    //e.target.parentElement.nextSibling.addEventListener('dragleave', dragLeave);
    //e.target.parentElement.nextSibling.addEventListener('drop', drop);
    //
    e.target.querySelector('.item').removeEventListener('dragstart', dragStart);
    e.target.querySelector('.item').classList.remove('item');
}