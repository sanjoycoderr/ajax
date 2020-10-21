document.getElementById('button').addEventListener('click',loadtext);

function loadtext() {
	 // create xhr object
	 var xhr = new XMLHttpRequest();
	 // open the file (type,url/file,async)
	    xhr.open('GET','hello.txt',true);
	    xhr.onload = function()
	    {
	    	if(xhr.status==200)
	    	{
	    		console.log(xhr.responseText);
	    	}
	    }
	xhr.send();
}