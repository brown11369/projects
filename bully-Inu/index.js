function copyToClipboard(execCopy){
    let val = document.getElementById(execCopy).innerHTML;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('you have copied the Contract Address of Bully Inu')

  }

  function showHide(){
    document.querySelectorAll('.menu')[0].classList.toggle('close');
    document.querySelectorAll('.menu')[1].classList.toggle('close');
    document.querySelector('nav').classList.toggle('display');
}
