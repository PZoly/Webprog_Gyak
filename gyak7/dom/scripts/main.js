const btnGroup = document.querySelector('.btn-group');
const prevBtn = btnGroup.querySelector('button.btn:nth-child(1)');
const oneBtn = btnGroup.querySelector('button.btn:nth-child(2)');
const fwdBtn = btnGroup.querySelector('button.btn:nth-child(3)');
if (prevBtn){
    prevBtn.classList.add('btn-info');
}

if (oneBtn){
    oneBtn.classList.add('btn-primary');
}

if (fwdBtn){
    fwdBtn.classList.add('btn-info');
}