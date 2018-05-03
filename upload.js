
function get_el(el){
    
    return document.querySelector(el)
    
}


function creat_div(){
    var div=document.createElement("div");
     
      div.className='upload_item';
       
      return div ;
    

}




function creat_img(src){
    var img=document.createElement("img");
     img.src=src;
     return img ;
}





function hide_el (el){
    get_el('#uploads').style.display='none';
}





 function local_reader(_this,imgs,max,max_array){

    

    var reader = new FileReader(); 

    var result=imgs; 

       
    var file = _this.files[0]; 

    console.log(file)

    reader.readAsDataURL(file);  
    var count =0;
    reader.onprogress=function(){
          count++;

         
    }


    reader.onload=function(e){  
       
     
       
     var img = creat_img(this.result);

     var div = creat_div();

     div.appendChild(img)
     
    
     if((max_array.length+1)===max){
        hide_el();
         result.appendChild(div);
         max_array.push(div);
         
     }else{
         result.appendChild(div);
         max_array.push(div)
         
     }
   
    }



 }


  function res_net(imgs,max_array,max){
         
    var result=imgs; 

      
    

     send_img().then(function(data){

        var img_list=['./imgs/1.jpg','./imgs/2.jpg','./imgs/3.jpg'];

        var random = Math.random();

          
        if(random<0.3){
             var src= img_list[0]
        }else if(random<0.7){
            var src= img_list[1]
        }else{
            var src= img_list[2]
        }
        
        var img = creat_img(src);

        var div = creat_div();
    
        div.appendChild(img)
    
        if((max_array.length+1)===max){
            hide_el();
            result.appendChild(div);
            max_array.push(div);
           
        }else{
            result.appendChild(div);
            max_array.push(div)
            
        }

     })
            
        


   


    

  }


  function send_img (){
        
    return new Promise(function(resolve){
         setTimeout(function(){
            resolve();
            return '1.jpg';
            
        },1000)   
    })  


  }






function Upload (option){
      var opt = option || {};

      var el = get_el(opt.input);

      var imgs= get_el(opt.imgs)
       
      var max = parseInt(opt.maxnum);

      var isreader = opt.isreader;

      var max_array=[];



     

      el.addEventListener("change", function(event){
           
            var that =this;
          
           if(isreader){
                local_reader(that,imgs,max,max_array);
           }else{
               res_net(imgs,max_array,max)
           }
           
            
           
             
       
      });

}