document.getElementById('btn1').addEventListener('click',function(){
 alert('the Taskis Complete');
 
 addvalue(1);
 diable('btn1');
})

document.getElementById('btn2').addEventListener('click',function(){
    alert('the Taskis Complete');
    addvalue(1);
    document.getElementById('btn2').style.backgroundColor='#cac1c1a8'
    document.getElementById('btn2').disabled=true;
  })
function addvalue( valu){
    let values =document.getElementById('23Value').innerText;
    let convertedValue=parseInt(values)
    convertedValue+=valu;
    document.getElementById('23Value').innerText=convertedValue;
}
function diable(id){
    document.getElementById('id').style.backgroundColor='#cac1c1a8'
    document.getElementById('id').disabled=true;

}