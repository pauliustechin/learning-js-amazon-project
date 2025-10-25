const xhr = new XMLHttpRequest();

// xhr.response gali atkeliauti tik po kurio laiko 
// todel dedam event listeneri, nes xhr.send() aynchronous
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

// 2 parameters ()
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

