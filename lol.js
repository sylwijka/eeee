    let x = true;
        
        function coss()
        {
            x ? document.body.style.backgroundColor = "red" : 
            document.body.style.backgroundColor = "green";
            x = !x;
        }
      
       const greetingButtonArray = document.querySelectorAll(`.greeting`);
       for(item of greetingButtonArray)
       {
           item.addEventListener('click', coss)
       }
