const targetMainGrid= document.querySelector('#gridContainer')
const selectGridID= document.getElementById('gridContainer')
const selectGrid= document.querySelectorAll('.squares')
const editedGrid= document.querySelector('#editedgridContainer')
const createDiv= document.createElement('div')
const allSquares= document.querySelectorAll('.squares')
const selectButton= document.querySelector('button')
let totalPixels= 256
let gamestate= 0

if (gamestate==0){
    const allPixels= document.querySelectorAll('.squares')
    gridSize();
    painting()

selectButton.addEventListener('click', function(e){
        allPixels.forEach((pixel) => {
            pixel.classList.remove('painted');
            });
            gamestate= 1;
            generateGrid()

    
    function paintSquare(e){
    this.classList.add('painted')
}

allSquares.forEach(square => square.addEventListener('mouseover', paintSquare));

})
}

///functions

function generateGrid(selectMode, rows, columns){
selectMode=prompt('set new pixel size. 1-13 (thin-thick)')
gridMode = totalPixels
if (selectMode == 13){
    alert('mode 13')
    targetMainGrid.innerHTML=''
    totalPixels = 1
    selectGridID.className='mode13'
    gridSize()

}else if(selectMode == 12){
    alert('mode 12')
    targetMainGrid.innerHTML=''
    totalPixels = 4
    selectGridID.className='mode12'
    gridSize()

}else if(selectMode == 11){
    alert('mode 11')
    targetMainGrid.innerHTML=''
    totalPixels = 16
    selectGridID.className='mode11'
    gridSize()

}else if(selectMode == 10){
    alert('mode 10')
    targetMainGrid.innerHTML=''
    totalPixels = 25
    selectGridID.className='mode10'
    gridSize()  
    
}else if(selectMode == 9){
    alert('mode 9')
    targetMainGrid.innerHTML=''
    totalPixels = 64
    selectGridID.className='mode9'
    gridSize()    

}else if(selectMode == 8){
    alert('mode 8')
    targetMainGrid.innerHTML=''
    totalPixels = 100
    selectGridID.className='mode8'
    gridSize()    

}else if(selectMode == 7){
    alert('mode 7')
    targetMainGrid.innerHTML=''
    totalPixels = 256
    selectGridID.className='mode7'
    gridSize()   
    
}else if(selectMode == 6){
    alert('mode 6')
    targetMainGrid.innerHTML=''
    totalPixels = 400
    selectGridID.className='mode6'
    gridSize()    

}else if(selectMode == 5){
    alert('mode 5')
    targetMainGrid.innerHTML=''
    totalPixels = 625
    selectGridID.className='mode5'
    gridSize()    

}else if(selectMode == 4){
    alert('mode 4')
    targetMainGrid.innerHTML=''
    totalPixels = 1600
    selectGridID.className='mode4'
    gridSize()    

}else if(selectMode == 3){
    alert('mode 3')
    targetMainGrid.innerHTML=''
    totalPixels = 2500
    selectGridID.className='mode3'
    gridSize()    

}else if(selectMode == 2){
    alert('mode 2')
    targetMainGrid.innerHTML=''
    totalPixels = 6400
    selectGridID.className='mode2'
    gridSize()    

}else if(selectMode == 1){
    alert('mode 1')
    targetMainGrid.innerHTML=''
    totalPixels = 10000
    selectGridID.className='mode1'
    gridSize()    

}else{
    alert('enter a valid mode (1-13)')
}
}
   

function gridSize(){

for (let i=1; i<=totalPixels; i++){
        let div = document.createElement("div");
        div.className= "squares"
        targetMainGrid.appendChild(div)
    }
    painting()
}


function painting(){
    const allSquares= document.querySelectorAll('.squares')
    function paintSquare(e){
    this.classList.add('painted')
}

allSquares.forEach(square => square.addEventListener('mouseover', paintSquare));
}


