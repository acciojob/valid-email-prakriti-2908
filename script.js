function validEmail(str) {
  //your JS code here.
	// if((str.includes(".com")||str.includes(".in")||str.includes(".edu")||str.includes(".co")||str.includes(".in"))&& str.includes("@")&&str.charAt(0)!="@"){
 //      return true;
 //  }
 //  return false;

	if(str[0]=="@"){
    return false;
}
let ans1 = false;
let ans2 = false;

for(let i=0;i<str.length;i++){
    if(ans1==true && ans2==true){
        return true;
    }
    if(ans1==false && (str[i]==".com" || str[i]==".in" || str[i]==".co" || str[i]==".edu")){
        ans1 = true;
    }
    if(ans2==false && str[i]=="@"){
        ans2 = true;
    }
}
if(ans1==true && ans2==true){
        return true;
    }else{
        return false;
    }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
