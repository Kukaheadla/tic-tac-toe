PROJECT #1: Tic-Tac-Toe

### Forword
The project was set by GA to create basic functional game. This is done through implmentation of coding language and manipulation of media materials which are skills we have acquired throughout the first 2 weeks of the course.

The developer has made a Tic-Tac-Toe game which inclues basic functionalities or features of:
* player alternatively place either **'X' or 'O'** onto a 3-by-3 game board, the person that connects 3 symbol of the same rows, columns or connecting the same symbol diagonally will be the winner of the round
* end the match if one of the player has obtain 3 wins.
* declare draw if the grid is all filled symbols and no one wins 
*  smartphone and smart-tablet optimisations

Through the development of the projects, there are various amount of bugs which the developer have encountered such as the games declaring draw as the board is has full-filled by symbols even when one of the players has conncted 3 of same symbols. The developer had various challenges in manipulating CSS for smartphone design layout and following by the optimisation of the smartphone. 

The developers also acquired extra skills such as set time for a specific function to occur, and manipulating audio files within ECMAScript. Throughout the project the developer has also advanced his problem solving skills and research skills through the help of developer forums and websites such as MDN and stack overflow. A flow chart was also used to orgnise action plan in making the game extra functional and user freindly

---

### The Technologies Used 
* HTML & CSS
* jQuery
* Twitter API plugin 
* Images & Media resource (incl. image and audios) from online

### Installation Instructions
    1. textual aspects of the games such as information were created through HTML (incl. index, PvP game page and instructions)
2. a 3*3 table is created to for X/O symbol to be place within it. It is also marked with ID for later CSS styling and symbol matching. Codes below:

`<table id="board">
<tr>
<td id="box0" class='boardHover'></td>
<td id="box1" class='boardHover'></td>
<td id="box2" class='boardHover'></td>
</tr>
<tr>
<td id="box3" class='boardHover'></td>
<td id="box4" class='boardHover'></td>
<td id="box5" class='boardHover'></td>
</tr>
<tr>
<td id="box6" class='boardHover'></td>
<td id="box7" class='boardHover'></td>
<td id="box8" class='boardHover'></td>
</tr>
</table>`

    3. The 'click' event-listeners are created through jquery and 'if/else' modulus functions to allow players to place X/O alternatively.
    4. ways of to win the round is designed through if statement such as the how to top row example displayed below below

`if($('#box0').html()!== ""){
if($('#box0').html() == $('#box1').html() && thereIsWinner === false){
if($('#box0').html() == $('#box2').html()){
console.log(player + "WINS");
new Audio('../audio/beep4.mp3').play();
$('#messageBoard').html(player +'WINS');
setTimeout(cleanBoard, 1288);
setTimeout(victory, 1288);
return;
}
}`
    5. Miscellaneous functions are designed to automatically clean the board, add points to the player, changing color and preventing drawsfor the winning connections which are followed by the winning sequence.
    6. Arrays for tallying the players' winning streak were created which an element is pushed after the winning players.
    7. CSS codes were structured to optimise userbility and vitual representations.

###Challenges 
* the conceptual aspect of making the game is informationally packed and a flow-chart is needed during the creation of the game to orgnize working processes.
* some implementation of function has made pre-existing function dysfunctional.
* manipulation between tag wraps as it causes diffculty in manipulating CSS files 

###Practiced & Learnt Skills 
* manipulate DOM and jQeury interchangebly and fluently.
* push, pull request to github as well as branching.
* host local web server 
