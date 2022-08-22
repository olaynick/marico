const priceItem = document.querySelectorAll('.pricing__item')
const itemSpan = document.querySelectorAll('.item_span')





       
    // priceItem.forEach(element => {
    //     console.log(element) 
    // });


document.querySelectorAll('.pricing__item').forEach((el) => {
    el.addEventListener('mouseover', function() {    
      let index = [...this.parentNode.children].indexOf(this);
        Item(index)
  });
});

function Item(index){
    
    priceItem[index].onmouseover = function(){
        this.setAttribute('style','background-color:white; color:black;')
        }
        // for(var i = 0; i < itemSpan.length; i++) itemSpan[i].setAttribute('style','color:black;')
        
        priceItem[index].onmouseout = function(){
            this.setAttribute('style','background-color:#131313;');
           }
           console.log(itemSpan[index])
}

       