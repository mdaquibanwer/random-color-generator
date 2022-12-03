const container = document.querySelector(".container")
const btn = document.querySelector(".btn");
const selectColor = document.querySelector('.text')
const squares = 400;
for(let i = 0;i<squares;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    square.addEventListener('click',()=>{
        const red = Math.floor((Math.random())*256);
        const green = Math.floor((Math.random())*256);
        const blue = Math.floor((Math.random())*256);
        const color = `rgb(${red},${green},${blue})`;
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}`,`0 0 2px ${color}`
        selectColor.innerHTML = color

    })
    square.addEventListener('mouseout',()=>{
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000';

    })
}
btn.addEventListener('click',()=>{
    const textArea = document.createElement("textarea");
    const copyColor = selectColor.innerHTML;
    if(!copyColor){
        alert("Generate Color First")
    }
    textArea.value = copyColor;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert("Copied To ClipBoard")
})
