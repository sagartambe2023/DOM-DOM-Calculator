let h1=document.createElement('h1');
h1.setAttribute('id','title')
h1.classList.add('d-flex','flex-column','justify-conent-center','align-items-center','mt-2')
h1.innerHTML='Calculator'
document.body.append(h1)

let p=document.createElement('p');
p.setAttribute('id','description')
p.classList.add('d-flex','flex-column','justify-conent-center','align-items-center','mt-2')
p.innerHTML='DOM Calculator'
document.body.append(p)

//creted main div 
let calculatordiv=document.createElement('div');
calculatordiv.classList.add('container', 'mt-2', 'mb-5', 'p-4', 'calculatordiv')
document.body.append(calculatordiv)

//created first row in main div
let firstrow=document.createElement('div');
firstrow.classList.add('row')
calculatordiv.append(firstrow)

//firstrow first column in main div
let firstrowfirstcolumn=document.createElement('div');
firstrowfirstcolumn.classList.add('col-12', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
firstrow.append(firstrowfirstcolumn)

//Display Bar
let displaybar=document.createElement('input');
displaybar.setAttribute('type','text')
displaybar.setAttribute('id','result')
displaybar.setAttribute('readonly','')
firstrowfirstcolumn.append(displaybar)

let secondrow=document.createElement('div');
secondrow.classList.add('row')
calculatordiv.append(secondrow)

let secondrowfirstcolumn=document.createElement('div');
secondrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowfirstcolumn)

let secondrowsecondcolumn=document.createElement('div');
secondrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowsecondcolumn)


let clearbtn=document.createElement('button');
clearbtn.setAttribute('id','clear')
clearbtn.innerHTML='AC'
secondrowsecondcolumn.append(clearbtn)

let secondrowthirdcolumn=document.createElement('div');
secondrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowthirdcolumn)

let clearlastdigitbtn=document.createElement('button');
clearlastdigitbtn.setAttribute('id','clrlastdigitbtn')
clearlastdigitbtn.innerHTML='&lArr;'
secondrowthirdcolumn.append(clearlastdigitbtn)

let secondrowfourthcolumn=document.createElement('div');
secondrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
secondrow.append(secondrowfourthcolumn)

let divbtn=document.createElement('button');
divbtn.setAttribute('id','divbtn')
divbtn.innerHTML='&divide;'
secondrowfourthcolumn.append(divbtn)

let thirdrow=document.createElement('div');
thirdrow.classList.add('row')
calculatordiv.append(thirdrow)

let thirdrowfirstcolumn=document.createElement('div');
thirdrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowfirstcolumn)

let btnfor7=document.createElement('button');
btnfor7.setAttribute('id','7')
btnfor7.innerHTML='7'
thirdrowfirstcolumn.append(btnfor7)

let thirdrowsecondcolumn=document.createElement('div');
thirdrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowsecondcolumn)

let btnfor8=document.createElement('button');
btnfor8.setAttribute('id','8')
btnfor8.innerHTML='8'
thirdrowsecondcolumn.append(btnfor8)

let thirdrowthirdcolumn=document.createElement('div');
thirdrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowthirdcolumn)

let btnfor9=document.createElement('button');
btnfor9.setAttribute('id','9')
btnfor9.innerHTML='9'
thirdrowthirdcolumn.append(btnfor9)

let thirdrowfourthcolumn=document.createElement('div');
thirdrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
thirdrow.append(thirdrowfourthcolumn)

let multibutton=document.createElement('button');
multibutton.setAttribute('id','multibtn')
multibutton.innerHTML='&times'
thirdrowfourthcolumn.append(multibutton)

let fourthrow=document.createElement('div');
fourthrow.classList.add('row')
calculatordiv.append(fourthrow)

let fourthrowfirstcolumn=document.createElement('div');
fourthrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowfirstcolumn)

let btnfor4=document.createElement('button');
btnfor4.setAttribute('id','4')
btnfor4.innerHTML='4'
fourthrowfirstcolumn.append(btnfor4)


let fourthrowsecondcolumn=document.createElement('div');
fourthrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowsecondcolumn)


let btnfor5=document.createElement('button');
btnfor5.setAttribute('id','5')
btnfor5.innerHTML='5'
fourthrowsecondcolumn.append(btnfor5)

let fourthrowthirdcolumn=document.createElement('div');
fourthrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowthirdcolumn)


let btnfor6=document.createElement('button');
btnfor6.setAttribute('id','6')
btnfor6.innerHTML='6'
fourthrowthirdcolumn.append(btnfor6)

let fourthrowfourthcolumn=document.createElement('div');
fourthrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fourthrow.append(fourthrowfourthcolumn)

let subbtn=document.createElement('button');
subbtn.setAttribute('id','subtract')
subbtn.innerHTML='-'
fourthrowfourthcolumn.append(subbtn)

let fifthrow=document.createElement('div');
fifthrow.classList.add('row')
calculatordiv.append(fifthrow)


let fifthrowfirstcolumn=document.createElement('div');
fifthrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowfirstcolumn)

let btnfor1=document.createElement('button');
btnfor1.setAttribute('id','1')
btnfor1.innerHTML='1'
fifthrowfirstcolumn.append(btnfor1)

let fifthrowsecondcolumn=document.createElement('div');
fifthrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowsecondcolumn)


let btnfor2=document.createElement('button');
btnfor2.setAttribute('id','2')
btnfor2.innerHTML='2'
 fifthrowsecondcolumn.append(btnfor2)

let fifthrowthirdcolumn=document.createElement('div');
fifthrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowthirdcolumn)


let btnfor3=document.createElement('button');
btnfor3.setAttribute('id','3')
btnfor3.innerHTML='3'
fifthrowthirdcolumn.append(btnfor3)

let fifthrowfourthcolumn=document.createElement('div');
fifthrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
fifthrow.append(fifthrowfourthcolumn)

let addbtn=document.createElement('button');
addbtn.setAttribute('id','add')
addbtn.innerHTML='+'
fifthrowfourthcolumn.append(addbtn)

let sixthrow=document.createElement('div');
sixthrow.classList.add('row')
calculatordiv.append(sixthrow)

let sixthrowfirstcolumn=document.createElement('div');
sixthrowfirstcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowfirstcolumn)

let btnfor0=document.createElement('button');
btnfor0.setAttribute('id','0')
btnfor0.innerHTML='0'
sixthrowfirstcolumn.append(btnfor0)


let sixthrowsecondcolumn=document.createElement('div');
sixthrowsecondcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowsecondcolumn)

let decbtn=document.createElement('button');
decbtn.setAttribute('id','dec')
decbtn.innerHTML='.'
sixthrowsecondcolumn.append(decbtn)

let sixthrowthirdcolumn=document.createElement('div');
sixthrowthirdcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowthirdcolumn)

let modbtn=document.createElement('button');
modbtn.setAttribute('id','mod')
modbtn.innerHTML='%'
sixthrowthirdcolumn.append(modbtn)

let sixthrowfourthcolumn=document.createElement('div');
sixthrowfourthcolumn.classList.add('col-3', 'd-flex', 'flex-column' ,'justify-conent-center'  ,'mt-2')
sixthrow.append(sixthrowfourthcolumn)

let equalstobtn=document.createElement('button');
equalstobtn.setAttribute('id','equal')
equalstobtn.innerHTML='='
sixthrowfourthcolumn.append(equalstobtn)

let clrlastdigitbtn=document.getElementById('clrlastdigitbtn');
let dec=document.getElementById('dec');
let mul=document.getElementById('multibtn');
let divide=document.getElementById('divbtn');
let subtract=document.getElementById('subtract');
let add=document.getElementById('add');
let mod=document.getElementById('mod');
let equal=document.getElementById('equal');
let userinput=document.getElementById('result');
let one=document.getElementById('1');
let two=document.getElementById('2');
let three=document.getElementById('3');
let four=document.getElementById('4');
let five=document.getElementById('5');
let six=document.getElementById('6');
let seven=document.getElementById('7');
let eight=document.getElementById('8');
let nine=document.getElementById('9');
let zero=document.getElementById('0');
let clear=document.getElementById('clear');


dec.onclick=()=>{
    displayInput('.')
}
add.onclick=()=>{
    displayInput('+')
}
subtract.onclick=()=>{
    displayInput('-')
}
mul.onclick=()=>{
    displayInput('*')
}
divide.onclick=()=>{
    displayInput('/')
}
mod.onclick=()=>{
    displayInput('%')
}
equal.onclick=()=>{
    calculate()
}
clear.onclick=()=>{
        removeallresult()
}
clrlastdigitbtn.onclick=()=>{
    removeoneitem()
}

zero.onclick=()=>{
    displayInput(0)
}
one.onclick=()=>{
    displayInput(1)
}
two.onclick=()=>{
    displayInput(2)
}
three.onclick=()=>{
    displayInput(3)
}
four.onclick=()=>{
    displayInput(4)
}
five.onclick=()=>{
    displayInput(5)
}
six.onclick=()=>{
    displayInput(6)
}
seven.onclick=()=>{
    displayInput(7)
}
eight.onclick=()=>{
    displayInput(8)
}
nine.onclick=()=>{
    displayInput(9)
}

document.onkeydown=(event)=>{
    
    if(event.key=='0' ){
      
        displayInput(0)
    }else if(event.key=='1'){
        displayInput(1)
    }else if(event.key=='2'){
        displayInput(2)
    }
    else if(event.key=='3'){
        displayInput(3)
    }
    else if(event.key=='4'){
        displayInput(4)
    }
    else if(event.key=='5'){
        displayInput(5)
    }
    else if(event.key=='6'){
        displayInput(6)
    }
    else if(event.key=='7'){
        displayInput(7)
    }
    else if(event.key=='8'){
        displayInput(8)
    }
    else if(event.key=='9'){
        displayInput(9)
    }
    else if(event.key=='+'){
        displayInput('+')
    }
    else if(event.key=='-'){
        displayInput('-')
    }
    else if(event.key=='/'){
        displayInput('/')
    }
    else if(event.key=='*'){
        displayInput('*')
    }else if(event.key=='.'){
        displayInput('.')
    }else if(event.key=='%'){
        displayInput('%')
    }
    else if(event.key=='Enter'){
        calculate()
    }
    else if(event.key=='Delete' ){
        removeallresult()
    }
    else if(event.key=='Backspace' ){
        removeoneitem()
    }
    else if(event.key=='Shift'){

    }
    else{
     
     alert('Please Enter numbers only')
       
    }
}

let displayInput=(text)=>{
if(userinput.value==''){
    userinput.value=text
}else if(userinput.value.length<=30){
    userinput.value= userinput.value+text
}else{
    alert('Limit has been reached')
}
}
let removeallresult=()=>{
    userinput.value=''
}

let removeoneitem=()=>{
    userinput.value = userinput.value.slice(0, -1);
}

let calculate = () => {
    try {
        let final = userinput.value;
        userinput.value = eval(final);
    } catch (error) {
        userinput.value = 'Error';
    }
}

