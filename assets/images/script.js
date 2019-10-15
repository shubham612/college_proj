
var maidtypeBox=document.getElementsByClassName('maidtypebox');
var arr=new Array(4);
for(var j=0;j<arr.length;j++){
	arr[j]=false;
}

// Selecting the worker-type------------------------------
for(var i=0;i<maidtypeBox.length;i++){
	maidtypeBox[i].addEventListener('click',function(event){
		if(!arr[i]){
			this.style.backgroundColor ="#007CAA";
			arr[i]=true;
		}
		else{
			this.style.backgroundColor ="#fff";
			arr[i]=false;
		}
	});
}

// Access of Different functional-div ------------------
var funDiv1=document.getElementById('funDiv1');
var funDiv2=document.getElementById('funDiv2');
var funDiv3=document.getElementById('funDiv3');
var funDiv4=document.getElementById('funDiv4');






var bigHeading = funDiv1.children[0];   // Alert to slect any of worker-type

// Continue to functional-div2---------------------
var continueClick=document.getElementById('continue');
continueClick.addEventListener('click',function(event){
	var isSelected=false;
	for(let j of arr){
		if(j){
			isSelected=true;
			break;
		}
	}

	if(isSelected){
  
		bigHeading.style.color="blue";
		bigHeading.style.fontSize ="20px";
		funDiv1.style.display = "none";
		funDiv2.style.display = "block";
	}

	else{
		
		bigHeading.style.color="red";
		bigHeading.style.fontSize ="22px";
	}
});


// Back to functional-div1--------------------------------
var backtoFunDiv1=document.getElementById('back-to-fundiv1');
backtoFunDiv1.addEventListener('click',function(event){
	for(let j of arr){
		
		j=false;
	}
	funDiv2.style.display = "none";
	funDiv1.style.display = "block";
});


// Selecting the urgency type------------------------------------
var urgencyType =document.getElementsByClassName('urgency-type');
for(var k=0;k<urgencyType.length;k++){
	urgencyType[k].addEventListener('click',function(event){
		funDiv2.style.display = "none";
		funDiv3.style.display = "block";

	});
}


// Back to functional-div2-----------------------------------------
var backtoFunDiv2=document.getElementById('back-to-fundiv2');
backtoFunDiv2.addEventListener('click',function(event){
	
	funDiv3.style.display = "none";
	funDiv2.style.display = "block";
});


// Selecting Gender type of the worker--------------------------
var genderType=document.getElementsByClassName('gender-type');
for(let k=0;k<genderType.length;k++){
	genderType[k].addEventListener('click',function(event){
		funDiv3.style.display = "none";
		funDiv4.style.display = "block";

	});
}


// Back to functional-div2 -------------------------------------
var backtoFunDiv3=document.getElementById('back-to-fundiv3');
backtoFunDiv3.addEventListener('click',function(event){
	
	funDiv4.style.display = "none";
	funDiv3.style.display = "block";
});


