let button = document.getElementById('clickme');

let hexSymbols = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.onclick = function() {
    document.getElementById('clickme').innerHTML= 'Changing Color...';
    let color = `#${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}${hexSymbols[Math.floor(Math.random() * hexSymbols.length)]}`; 
    document.body.style.backgroundColor = color;
    document.getElementById('clickme').innerHTML= 'Click Me!';
}; 

