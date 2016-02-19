## Lab goals

- Clarify DOM and its relationship with Javascript.
- Understand, and construct, data structure.
- Write more, if not better, functions.

---

The **Document Object Model (DOM)** provides a structured representation of the document.

![](https://images.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-uMWOLkKV8a8%2FT3ZsRGVeYOI%2FAAAAAAAAA40%2FuRein5dtTyk%2Fs1600%2FWeather%2BStormy%2BTree%2BMap%2B4.jpg&f=1)

---

The DOM defines a way for promrams to change

- document structure
- style
- content

~~~

The DOM is

- represents the document as <span class='highlight'>a structured group of nodes and objects that have properties and methods</span>
- connects web pages to scripts or programming languages.

~~~

# a structured group of nodes and objects that have properties and methods

~~~

Stop yelling.
<p class='fragment'><a href='https://jueyang.github.io/get-crafty/illustrate'>Start showing</a>.</p>

~~~

```
var mom = document.createElement('h1'),
    julia = document.createTextNode('No idea where mom is :(');

// mom has to find great great great...grandma
var ancestor = document.body;

// found mom
// this is a method (starting with a verb)
ancestor.appendChild(mom);
mom.appendChild(julia)

// this is a property (starting with a noun)
console.log(julia.parentElement);
```

Read more about the DOM [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

~~~

[Mini exercise](http://codepen.io/anon/pen/Qyorqv?editors=1011)

---

## the I-think-it's-broken syndrome

~~~

![](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F10dHotK4K8R0AM%2F200.gif&f=1)

<p class='fragment'>It's not working.</p>
<p class='fragment'>Nothing happens.</p>
<p class='fragment'>I did everything.</p>

~~~

## No, you didn't.

~~~

You didn't find out why.

~~~

Supports are nice but rely on yourself.

~~~

because no one can do this for you,
<p class='fragment'>at a larger scale,</p>
<p class='fragment'>or in the longer run.</p>

~~~

...except for you and your BFF:

![](http://cl.ly/290h1f2z030E/Screen%20Shot%202016-02-18%20at%205.21.18%20PM.png)

Console/Developer Tool (Chrome).

Say hi with ** `cmd` + `opt` + `j` **.

~~~

### Now let's make some mistakes.

```
$ mkdir a-site
$ touch index.html
$ touch site.js
$ subl .
```

~~~

Copy the following into `index.html`, save.

```
<!DOCTYPE HTML>
<html>
<head>
    <meta title='important fact'>
</head>
<style>
    body {
        padding:100px 0;
        font:48px sans-serif;
        line-height:22px;
        text-align:center;
    }
    ul {
        list-style:none;
        padding:0;
    }
    span {
        color:pink;
    }
</style>
<body>
    <h1>Did you know?</h1>
    <button>What? Tell me!</button>
    <p><!--place holder for the big secret--></p>
    <script src='stie.js'></script>
</body>
</html>
```

~~~

Copy the following into `site.html`, save.

```
var button = document.getElementById('hitit').
var answer = document.getElementById('answer');

button.addEventListener('click',adAnswer);

function addAnswer(){
  answer.innerText = ' Tartar Sauce.'
}
```

~~~

Now open the site.

```
$ open index.html
```

~~~

![](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fthatgrapejuice.net%2Fwp-content%2Fuploads%2FHLIC%2Ffaf644aec0cc75b11fa775a06ee67379.gif&f=1)

> What doesn't kill you make you stronger.

---

## JS 002

We  will use the Developer Tool for a bit, then let's switch to [codepen](http://codepen.io) for the exercises.

---

### Data types

```
> 125
> '125'
> '125' + '5'
> 125 > 3
```

~~~

### Exercise

Define three varibles of each type respectively. Then check with the function `typeof()`.

```
> x = '1' + 2;
> typeof(x);
```

See all data types [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

---

### console.log

```
> x = 5;
> console.log('I just defined a varible x with a value of' + x);
```

~~~

## Tough love policy

No questions will be answered if you don't include an error message or some weird thing returned from your `console.log`.

---

# Data Structure

~~~

### Array

Switch to codepen now.

```
var mags = ['The New Yorker','Nautilus','N+1'];

console.log(mags);
console.log(mags.length);
console.log(mags.length(0));
```

~~~

#### push

```
mags.push('Bon Appetit');

console.log(mags);
```

~~~

#### forEach

```
mags.forEach(function(oneMag){
    console.log('I read ' + oneMag);
});
```

~~~

#### map

```
var numbers = [22,46,72];

var doubles = numbers.map(function(oneNumber){
    return oneNumber * 2;
});

var sentences = numbers.map(function(oneNumber, index){
    return oneNumber + ' has an index of ' + index  + ' in this array.'
});

console.log(doubles);
console.log(sentences);
```

~~~

#### join

```
var words = ['what','a','wonderful','life'];

words.join();
words.join('');
words.join(' ');

console.log(words);
```

~~~

#### slice

```
partial = words.slice(1,3);

console.log(partial);
```

---

### String

```
var name = 'Bernie Sanders';

console.log(name.length)
console.log(name[8]);
```

~~~

#### substr

```
var firstName = name.substr(0,5);

console.log(firstName);
```

~~~

### Object

```
var favMag = {};

favMag.name = 'Nautilus';
favMag.genre = 'science';
favMag.interns = ['JoAnna Klein','Susie Neilson','Ankur Paliwal']
favMag.notinterns= [
    {"name":"John Steele", "role":"Publisher and Editorial Director"},
    {"name":"Michael Segal", "role":"Editor in Chief"},
    {"name":"Meehan Crist", "role":"Editor-at-Large"},
]

console.log(favMag);
console.log(favMag.interns);
```

---

### Function

```
function addTwoNumbers(num1,num2){
    return num1 + numb2
}

addNumbers(3,4);
```

~~~

#### callback

Extremely briefly speaking, it's passing one function into another.

```
function addPumpkinsAfterCalculation(num1,num2,calculation){
    return calculation + ' pumpkins'
}

addPumpkinsAfterCalculation(4, 5, addTwoNumbers);
```

---

## Another Loop

```
var expense = [19,20,44,67,50,34,200],
    days = ['mon','tues','thurs','fri','satur','sun'];

// this is a for loop
for (var i = 0; i<= days.length; i++){
  var dayName = days[i].concat('day'),
      spending = dayName + ' I spent $' + expense[i];
  console.log(spending);
}
```

---

## Homework

<li class='fragment'>1. Fork the [pen](http://codepen.io/anon/pen/obVdxJ) and finish the exercise.</li>
<li class='fragment'>2. Refactor your `js` files from homework 1.</li>

~~~

To deliver:

1. Add an `<a>` in your homework's `index.html`, which links to the your exercise fork.
2. Create a new branch on GitHub in homework 1 and push your changes to the new branch. See [note](https://gist.github.com/jueyang/fe02eaaca0bd4d4e70a2).

~~~

### General steps

<li class='fragment'>Write 4 calculating functions.</li>
<li class='fragment'>Add to your html so that the users will be able to submit two numbers.</li>
<li class='fragment'>Write a 5th function that takes two numbers from the input and run through the 4 calculations.</li>
<li class='fragment'>Write a 6th function that takes 1) the two number from input and 2) the results from each calculation and populates the DOM with four clauses describing the calculation.</li>

~~~

You final result will resemble this somewhat.

>input 1: ______

>input 2: ______

>Calculate!

~~~

> 21 + 3 = 24

> 21 - 3 = 18

> 21 * 3 = 63

> 21 / 3 = 7

> Sincerely,

> your hand-coded calculator

~~~

- If you want to, you can follow [this semi-finished `js` file](h) and complete it. It breaks the steps down further and walks you through re-writing your js.

![](https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fprincetonfound.files.wordpress.com%2F2011%2F07%2Fimg_9448.jpg&f=1)


