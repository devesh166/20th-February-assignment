 gst = [
  { type : 'slab_1',
  percentage:0   
  },
  { type : 'slab_2',
    percentage:5   
  },
  { type : 'slab_3',
    percentage:12   
  },
  { type : 'slab_4',
    percentage:18   
  },
  { type : 'slab_5',
    percentage:28   
  }
]

function tax(type='slab_1', amount=0){
    var percent= 0;
    for(let i=1;i<5;i++){
        
        
        if(type == gst[i].type ){
             
             percent = gst[i].percentage;
        }
    }
    var amountDeducted =amount*(percent/100);
    var result = { "type" : type,
                    "percent":percent,
                "Total amount": amount,
            "amount deducted":amountDeducted,
        "Amount after deduction":amount - amountDeducted  };

        return result;


}

console.log(tax('slab_3',10000))
//default value type='slab_1' amount=0 
console.log(tax())
