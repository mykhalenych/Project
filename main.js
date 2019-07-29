document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        "forman": "dd-mm-year"
        
    
    });
    
  }); 
document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;   
});

document.querySelectorAll('.modal-first-close').forEach(function (element) {
    element.onclick = close;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.onclick = close;
});

function showModal() {
    let modalId = this.dataset.modal;
   
    document.querySelector(modalId).classList.remove('hide');
    
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            close()
            };
        }
}
  
function close(){
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
        document.onkeydown = null;
    }
)}
document.querySelector('#log-in .modal-first').onclick = function(event){
    event.stopPropagation();
}
document.querySelector('#sign-on .modal-first').onclick = function(event){
    event.stopPropagation();
}
document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-365px';
}

document.querySelector('.read-rules-back').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '0';
}
document.querySelector('.read-rules-back2').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '0';
}
document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        document.querySelector('.form-slider').style.marginLeft = '0';
        };
    }
document.querySelector('#agree-rules').onchange = function(){
    if(this.checked){
        document.querySelector('#signup-submit').classList.remove('disabled')
    }
    else{
        document.querySelector('#signup-submit').classList.add('disabled') 
    }
}   