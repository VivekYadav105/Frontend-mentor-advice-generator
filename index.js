const adviceno = document.querySelector('#advice-id span');
const advice = document.querySelector('#advice span');
const button = document.getElementsByClassName('btn')[0];
const loader = document.getElementsByClassName('loader')[0];
//function to fetch quote


const randomquote = ()=>{
    let api='https://api.adviceslip.com/advice';
    // console.log(fetch(api));
    fetch(api).then(res=>res.json())
             .then(data=>{
                 adviceno.innerHTML = data.slip.id;
                 advice.innerHTML = '"'+data.slip.advice+'"';
});
}

window.onload=()=>{randomquote();}

const disploader = ()=>{
    loader.classList.add('loading')
    
}
//eventlistener
button.addEventListener('click',()=>{
    setTimeout(()=>{
        loader.classList.remove('loading');
        randomquote();    
    },1500)
    disploader()

})