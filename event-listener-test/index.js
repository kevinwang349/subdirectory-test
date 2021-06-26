document.addEventListener('DOMContentLoaded',init);

function init(){
    let dropdown=document.createElement('select');
    dropdown.setAttribute('name','test');
    let values=['one','two','three','test','yeet'];
    for(const value of values){
        const option=document.createElement('option');
        option.innerHTML=value;
        option.setAttribute('value',value);
        option.addEventListener('click', dropdownSubmit);
        dropdown.appendChild(option);
    }
    document.body.appendChild(dropdown);
}

function dropdownSubmit(value){
    console.log(value);
    /*let p=document.createElement('p');
    p.innerHTML=value;
    document.body.appendChild(p);*/
}
