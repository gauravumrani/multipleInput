<div class="container"><h1>umrani.github.io</h1>

This is a Jquery plugin to add multiple text fields to document. for example- you want to add hobbies of user.so user can add any number of hobbies with multiple input boxes

<h2>How to run:</h2>
1. just clone this repo and run index.html


<h2>How to use</h2>
1. create a div (<code><div id="hobby"></div></code>) element and inside it create your <code> <input type="text"> </code><br>
2. now initialize plugin to the div element<br>
		<div style='margin-left:50px;'><code>	$('#hobby').multiInput();</code></div><br>
3. Done !!! 


<h2>You can also pass additional options to plugin settings</h2>
1. <b>plusBtnClass:</b>
    it will add class to the Plus button, you can write custom class name.default is <code>btn-default</code><br>
2. <b>minusBtnClass</b>
    it will add class to the Minus button, you can write custom class name.default is <code>btn-default</code><br>
2. <b>maxInput</b>
    it will allow max textfields to be created. default is 5</div>