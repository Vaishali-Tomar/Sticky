let title = document.querySelector('.title');
let color = document.querySelector('.color');
let text = document.querySelector('#textArea');
let submit = document.querySelector('.submit')
let right = document.querySelector('.right')

color.addEventListener('input',()=>{
    text.style.backgroundColor = color.value
})

color.value = '#cfeb34'

let val = 0;
submit.addEventListener('click',(event)=>{
    let count = 0;
    event.preventDefault();
    let note = document.createElement('div');
    note.classList.add('note');
    
    note.innerHTML = `
    <h3 class='noteTitle'>${title.value.toUpperCase()}</h3>
    <textarea name="textArea" id="noteTextArea" cols="30" rows="10" style ='background-color:${color.value}'>${text.value}</textarea>
    <span class='close'><i class='material-icons'>close</i></span>
    <span id='edit'><i class='material-icons'>edit</i></span>
    `

    let n = document.querySelectorAll('.note');
    n.forEach(ele=>{
        let t = ele.querySelector('.noteTitle');
        let titleText = t.innerText
        let textArea = ele.querySelector('#noteTextArea')

        if(titleText==title.value.toUpperCase()){
            textArea.innerText = text.value;
            count++;
        }
    })

   
    if(count==0){
        right.appendChild(note);
    }

    let cross = note.querySelector('.close');
    cross.addEventListener('click',()=>{
        note.remove()
        // note.style.display = 'none'
    })

    let num=0;
    let edit = note.querySelector('#edit')
    let textArea = note.querySelector('#noteTextArea')

    edit.addEventListener('click',()=>{
        if(num==0){
            textArea.style.width = '440px'
            textArea.style.height = '400px'
            textArea.style.backgroundColor = 'white'
            num++;
        }
        else{
            textArea.style.width = '200px'
            textArea.style.height = '200px'
            textArea.style.backgroundColor = `${color.value}`
            num--
        }
    })

    title.value = ''
    text.value = '';
})
