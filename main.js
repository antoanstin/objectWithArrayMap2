 const users=[
{ first_name:'Anto',
last_name:'Anstin'
},
{ first_name:'sathish',
last_name:'kuma'
},
{ first_name:'Mari',
last_name:'kili'
}];
var b=[];
users.map(function(value){


 b.push(value.last_name)
});
 
 
 console.log(b);