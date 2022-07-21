const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function defaultBtnAction() {

    const checkbox = document.querySelectorAll('input[type=checkbox]');
    const select = document.querySelectorAll('select');

    for (let i = 0; i < checkbox.length; i++){
        if (checkbox !== 'checked'){
            checkbox[i].setAttribute('checked', 'checked');
        }
    }
    for (let i = 0; i < select.length; i++){
        select[i].value = "1";
    }
}

function saveChangesBtnAction() {
    const alert = document.getElementById('alertSuccess');
    alert.classList.remove('display-none');
}
