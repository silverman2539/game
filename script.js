var turns = 0;

var first;
var second;
var third;
var fourth;
var fifth;

var one;
var two;
var three;
var four;
var five;

Start();


function Start()
{
	first = Math.floor((Math.random() * 10));
	second = Math.floor((Math.random() * 10));
	third = Math.floor((Math.random() * 10));
	fourth = Math.floor((Math.random() * 10));
	fifth = Math.floor((Math.random() * 10));
}

function Enter()
{
	one = document.getElementById("1").value;
	two = document.getElementById("2").value;
	three = document.getElementById("3").value;
	four = document.getElementById("4").value;
	five = document.getElementById("5").value;
	
	document.getElementById("1").value = "";
	document.getElementById("2").value = "";
	document.getElementById("3").value = "";
	document.getElementById("4").value = "";
	document.getElementById("5").value = "";
	
	if (turns == "0")
	{
		turns = 1;
		document.getElementById("1a").value = one;
		document.getElementById("1b").value = two;
		document.getElementById("1c").value = three;
		document.getElementById("1d").value = four;
		document.getElementById("1e").value = five;
		
		if (first == one)
		{
			document.getElementById("1a").style.backgroundColor = "palegreen";
		}
		else if (second == one)
		{
			document.getElementById("1a").style.backgroundColor = "#FFFF7B";
		}
		else if (third == one)
		{
			document.getElementById("1a").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == one)
		{
			document.getElementById("1a").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == one)
		{
			document.getElementById("1a").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("1a").style.backgroundColor = "lightsalmon";
		}
		
		if (second == two)
		{
			document.getElementById("1b").style.backgroundColor = "palegreen";
		}
		else if (first == two)
		{
			document.getElementById("1b").style.backgroundColor = "#FFFF7B";
		}
		else if (third == two)
		{
			document.getElementById("1b").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == two)
		{
			document.getElementById("1b").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == two)
		{
			document.getElementById("1b").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("1b").style.backgroundColor = "lightsalmon";
		}
		
		if (third == three)
		{
			document.getElementById("1c").style.backgroundColor = "palegreen";
		}
		else if (second == three)
		{
			document.getElementById("1c").style.backgroundColor = "#FFFF7B";
		}
		else if (first == three)
		{
			document.getElementById("1c").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == three)
		{
			document.getElementById("1c").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == three)
		{
			document.getElementById("1c").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("1c").style.backgroundColor = "lightsalmon";
		}
		
		if (fourth == four)
		{
			document.getElementById("1d").style.backgroundColor = "palegreen";
		}
		else if (second == four)
		{
			document.getElementById("1d").style.backgroundColor = "#FFFF7B";
		}
		else if (third == four)
		{
			document.getElementById("1d").style.backgroundColor = "#FFFF7B";
		}
		else if (first == four)
		{
			document.getElementById("1d").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == four)
		{
			document.getElementById("1d").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("1d").style.backgroundColor = "lightsalmon";
		}
		
		if (fifth == five)
		{
			document.getElementById("1e").style.backgroundColor = "palegreen";
		}
		else if (second == five)
		{
			document.getElementById("1e").style.backgroundColor = "#FFFF7B";
		}
		else if (third == five)
		{
			document.getElementById("1e").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == five)
		{
			document.getElementById("1e").style.backgroundColor = "#FFFF7B";
		}
		else if (first == five)
		{
			document.getElementById("1e").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("1e").style.backgroundColor = "lightsalmon";
		}
	}
	else if (turns == "1")
	{
		turns = 2;
		document.getElementById("2a").value = one;
		document.getElementById("2b").value = two;
		document.getElementById("2c").value = three;
		document.getElementById("2d").value = four;
		document.getElementById("2e").value = five;
		
		if (first == one)
		{
			document.getElementById("2a").style.backgroundColor = "palegreen";
		}
		else if (second == one)
		{
			document.getElementById("2a").style.backgroundColor = "#FFFF7B";
		}
		else if (third == one)
		{
			document.getElementById("2a").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == one)
		{
			document.getElementById("2a").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == one)
		{
			document.getElementById("2a").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("2a").style.backgroundColor = "lightsalmon";
		}
		
		if (second == two)
		{
			document.getElementById("2b").style.backgroundColor = "palegreen";
		}
		else if (first == two)
		{
			document.getElementById("2b").style.backgroundColor = "#FFFF7B";
		}
		else if (third == two)
		{
			document.getElementById("2b").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == two)
		{
			document.getElementById("2b").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == two)
		{
			document.getElementById("2b").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("2b").style.backgroundColor = "lightsalmon";
		}
		
		if (third == three)
		{
			document.getElementById("2c").style.backgroundColor = "palegreen";
		}
		else if (second == three)
		{
			document.getElementById("2c").style.backgroundColor = "#FFFF7B";
		}
		else if (first == three)
		{
			document.getElementById("2c").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == three)
		{
			document.getElementById("2c").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == three)
		{
			document.getElementById("2c").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("2c").style.backgroundColor = "lightsalmon";
		}
		
		if (fourth == four)
		{
			document.getElementById("2d").style.backgroundColor = "palegreen";
		}
		else if (second == four)
		{
			document.getElementById("2d").style.backgroundColor = "#FFFF7B";
		}
		else if (third == four)
		{
			document.getElementById("2d").style.backgroundColor = "#FFFF7B";
		}
		else if (first == four)
		{
			document.getElementById("2d").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == four)
		{
			document.getElementById("2d").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("2d").style.backgroundColor = "lightsalmon";
		}
		
		if (fifth == five)
		{
			document.getElementById("2e").style.backgroundColor = "palegreen";
		}
		else if (second == five)
		{
			document.getElementById("2e").style.backgroundColor = "#FFFF7B";
		}
		else if (third == five)
		{
			document.getElementById("2e").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == five)
		{
			document.getElementById("2e").style.backgroundColor = "#FFFF7B";
		}
		else if (first == five)
		{
			document.getElementById("2e").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("2e").style.backgroundColor = "lightsalmon";
		}
	}
	else if (turns == "2")
	{
		turns = 3;
		document.getElementById("3a").value = one;
		document.getElementById("3b").value = two;
		document.getElementById("3c").value = three;
		document.getElementById("3d").value = four;
		document.getElementById("3e").value = five;
		
		if (first == one)
		{
			document.getElementById("3a").style.backgroundColor = "palegreen";
		}
		else if (second == one)
		{
			document.getElementById("3a").style.backgroundColor = "#FFFF7B";
		}
		else if (third == one)
		{
			document.getElementById("3a").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == one)
		{
			document.getElementById("3a").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == one)
		{
			document.getElementById("3a").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("3a").style.backgroundColor = "lightsalmon";
		}
		
		if (second == two)
		{
			document.getElementById("3b").style.backgroundColor = "palegreen";
		}
		else if (first == two)
		{
			document.getElementById("3b").style.backgroundColor = "#FFFF7B";
		}
		else if (third == two)
		{
			document.getElementById("3b").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == two)
		{
			document.getElementById("3b").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == two)
		{
			document.getElementById("3b").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("3b").style.backgroundColor = "lightsalmon";
		}
		
		if (third == three)
		{
			document.getElementById("3c").style.backgroundColor = "palegreen";
		}
		else if (second == three)
		{
			document.getElementById("3c").style.backgroundColor = "#FFFF7B";
		}
		else if (first == three)
		{
			document.getElementById("3c").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == three)
		{
			document.getElementById("3c").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == three)
		{
			document.getElementById("3c").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("3c").style.backgroundColor = "lightsalmon";
		}
		
		if (fourth == four)
		{
			document.getElementById("3d").style.backgroundColor = "palegreen";
		}
		else if (second == four)
		{
			document.getElementById("3d").style.backgroundColor = "#FFFF7B";
		}
		else if (third == four)
		{
			document.getElementById("3d").style.backgroundColor = "#FFFF7B";
		}
		else if (first == four)
		{
			document.getElementById("3d").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == four)
		{
			document.getElementById("3d").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("3d").style.backgroundColor = "lightsalmon";
		}
		
		if (fifth == five)
		{
			document.getElementById("3e").style.backgroundColor = "palegreen";
		}
		else if (second == five)
		{
			document.getElementById("3e").style.backgroundColor = "#FFFF7B";
		}
		else if (third == five)
		{
			document.getElementById("3e").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == five)
		{
			document.getElementById("3e").style.backgroundColor = "#FFFF7B";
		}
		else if (first == five)
		{
			document.getElementById("3e").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("3e").style.backgroundColor = "lightsalmon";
		}
	}
	else if (turns == "3")
	{
		turns = 4;
		document.getElementById("4a").value = one;
		document.getElementById("4b").value = two;
		document.getElementById("4c").value = three;
		document.getElementById("4d").value = four;
		document.getElementById("4e").value = five;
		
		if (first == one)
		{
			document.getElementById("4a").style.backgroundColor = "palegreen";
		}
		else if (second == one)
		{
			document.getElementById("4a").style.backgroundColor = "#FFFF7B";
		}
		else if (third == one)
		{
			document.getElementById("4a").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == one)
		{
			document.getElementById("4a").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == one)
		{
			document.getElementById("4a").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("4a").style.backgroundColor = "lightsalmon";
		}
		
		if (second == two)
		{
			document.getElementById("4b").style.backgroundColor = "palegreen";
		}
		else if (first == two)
		{
			document.getElementById("4b").style.backgroundColor = "#FFFF7B";
		}
		else if (third == two)
		{
			document.getElementById("4b").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == two)
		{
			document.getElementById("4b").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == two)
		{
			document.getElementById("4b").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("4b").style.backgroundColor = "lightsalmon";
		}
		
		if (third == three)
		{
			document.getElementById("4c").style.backgroundColor = "palegreen";
		}
		else if (second == three)
		{
			document.getElementById("4c").style.backgroundColor = "#FFFF7B";
		}
		else if (first == three)
		{
			document.getElementById("4c").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == three)
		{
			document.getElementById("4c").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == three)
		{
			document.getElementById("4c").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("4c").style.backgroundColor = "lightsalmon";
		}
		
		if (fourth == four)
		{
			document.getElementById("4d").style.backgroundColor = "palegreen";
		}
		else if (second == four)
		{
			document.getElementById("4d").style.backgroundColor = "#FFFF7B";
		}
		else if (third == four)
		{
			document.getElementById("4d").style.backgroundColor = "#FFFF7B";
		}
		else if (first == four)
		{
			document.getElementById("4d").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == four)
		{
			document.getElementById("4d").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("4d").style.backgroundColor = "lightsalmon";
		}
		
		if (fifth == five)
		{
			document.getElementById("4e").style.backgroundColor = "palegreen";
		}
		else if (second == five)
		{
			document.getElementById("4e").style.backgroundColor = "#FFFF7B";
		}
		else if (third == five)
		{
			document.getElementById("4e").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == five)
		{
			document.getElementById("4e").style.backgroundColor = "#FFFF7B";
		}
		else if (first == five)
		{
			document.getElementById("4e").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("4e").style.backgroundColor = "lightsalmon";
		}
	}
	else if (turns == "4")
	{
		turns = 5;
		document.getElementById("5a").value = one;
		document.getElementById("5b").value = two;
		document.getElementById("5c").value = three;
		document.getElementById("5d").value = four;
		document.getElementById("5e").value = five;
		
		if (first == one)
		{
			document.getElementById("5a").style.backgroundColor = "palegreen";
		}
		else if (second == one)
		{
			document.getElementById("5a").style.backgroundColor = "#FFFF7B";
		}
		else if (third == one)
		{
			document.getElementById("5a").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == one)
		{
			document.getElementById("5a").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == one)
		{
			document.getElementById("5a").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("5a").style.backgroundColor = "lightsalmon";
		}
		
		if (second == two)
		{
			document.getElementById("5b").style.backgroundColor = "palegreen";
		}
		else if (first == two)
		{
			document.getElementById("5b").style.backgroundColor = "#FFFF7B";
		}
		else if (third == two)
		{
			document.getElementById("5b").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == two)
		{
			document.getElementById("5b").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == two)
		{
			document.getElementById("5b").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("5b").style.backgroundColor = "lightsalmon";
		}
		
		if (third == three)
		{
			document.getElementById("5c").style.backgroundColor = "palegreen";
		}
		else if (second == three)
		{
			document.getElementById("5c").style.backgroundColor = "#FFFF7B";
		}
		else if (first == three)
		{
			document.getElementById("5c").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == three)
		{
			document.getElementById("5c").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == three)
		{
			document.getElementById("5c").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("5c").style.backgroundColor = "lightsalmon";
		}
		
		if (fourth == four)
		{
			document.getElementById("5d").style.backgroundColor = "palegreen";
		}
		else if (second == four)
		{
			document.getElementById("5d").style.backgroundColor = "#FFFF7B";
		}
		else if (third == four)
		{
			document.getElementById("5d").style.backgroundColor = "#FFFF7B";
		}
		else if (first == four)
		{
			document.getElementById("5d").style.backgroundColor = "#FFFF7B";
		}
		else if (fifth == four)
		{
			document.getElementById("5d").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("5d").style.backgroundColor = "lightsalmon";
		}
		
		if (fifth == five)
		{
			document.getElementById("5e").style.backgroundColor = "palegreen";
		}
		else if (second == five)
		{
			document.getElementById("5e").style.backgroundColor = "#FFFF7B";
		}
		else if (third == five)
		{
			document.getElementById("5e").style.backgroundColor = "#FFFF7B";
		}
		else if (fourth == five)
		{
			document.getElementById("5e").style.backgroundColor = "#FFFF7B";
		}
		else if (first == five)
		{
			document.getElementById("5e").style.backgroundColor = "#FFFF7B";
		}
		else
		{
			document.getElementById("5e").style.backgroundColor = "lightsalmon";
		}
	}
	else if (turns == "5")
	{
		alert("Round over! Refresh for another round!");
	}
	else
	{
		alert("I'm sorry, some sort of error has occured! Please refresh the page!");
	}
}








































