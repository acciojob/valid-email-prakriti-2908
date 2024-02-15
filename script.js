function validEmail(str) {
  //your JS code here.
	if((str.includes(".com")||str.includes(".in")||str.includes(".edu")||str.includes(".co")||str.includes(".in"))&& str.includes("@")&&str.charAt(0)!="@"){
      return true;
  }
  return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
