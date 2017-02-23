console.log('connected to PVP.js')

setTimeout(function() {
  $(document.body).addClass('gradient');
}, 1000);

    var turnCount=0;
    var round = 1;
    var player1Tally= [];
    var player2Tally= [];
    var thereIsWinner = false;
    // var winnerCheck = false;

    //considering turns
    $('.p1').attr('id','playerTurn');
      $('#board').find('td').on('click', function(){
        if (turnCount % 2 === 0 ){
          if($(this).html()==="" && thereIsWinner === false){
            $(this).prepend('<img id="theImg" src="../images/circle-outline-xxl.png" />');
            turnCount++;
          }
          checkWin('player 1 ');
          $('.p1').removeAttr('id','playerTurn');
          $('.p2').attr('id','playerTurn')
        } else {
          if($(this).html()==="" && thereIsWinner === false){
            $(this).prepend('<img id="theImg" src="../images/makefg.png" />');
            turnCount++;
          }
          checkWin('player 2 ')
          $('.p2').removeAttr('id','playerTurn');
          $('.p1').attr('id','playerTurn')
        }
        draw();
      });

      function checkWin(player) {

        function winTally(){
          thereIsWinner = true;
          if(player === 'player 1 '){
            player1Tally.push('0')
            $('.bullet1').prepend('<img class="bullet" src="../images/medal.png" alt="Bullet">')
          } else if (player === 'player 2 '){
            player2Tally.push('0')
            $('.bullet2').prepend('<img class="bullet" src="../images/medal.png" alt="Bullet">')
          }
        }

        //considering top row
        if($('#box0').html()!== ""){
          if($('#box0').html() == $('#box1').html() && thereIsWinner === false){
            if($('#box0').html() == $('#box2').html()){
              console.log(player + "WINS");
              new Audio('../audio/beep4.mp3').play();
              $('#messageBoard').html(player +'WINS');
              setTimeout(cleanBoard, 1288);
              winTally();
              setTimeout(victory, 1288);
              return;
              }
            }

          //considering the left-hand side column
          if($('#box0').html() == $('#box3').html() && thereIsWinner === false){
            if($('#box0').html() == $('#box6').html()){
              console.log(player + "WINS");
              new Audio('../audio/beep4.mp3').play();
              $('#messageBoard').html(player +'WINS');
              setTimeout(cleanBoard, 1288);
              winTally();
              setTimeout(victory, 1288);
              return;
            }
          }

          //considering diagonal
          if($('#box0').html() == $('#box4').html() && thereIsWinner === false){
            if($('#box0').html() == $('#box8').html()){
              console.log(player + "WINS");
              new Audio('../audio/beep4.mp3').play();
              $('#messageBoard').html(player +'WINS');
              setTimeout(cleanBoard, 1288);
              winTally();
              setTimeout(victory, 1288);
              return;
            }
          }
        }
      //considering mid-colomn
        if($('#box1').html()!== ""){
          if($('#box1').html() == $('#box4').html() && thereIsWinner === false){
            if($('#box1').html() == $('#box7').html()){
              console.log(player + "WINS");
              new Audio('../audio/beep4.mp3').play();
              $('#messageBoard').html(player +'WINS');
              setTimeout(cleanBoard, 1288);
              winTally();
              setTimeout(victory, 1288);
              return;
            }
          }
        }
      //condsidering right column
        if($('#box2').html()!== ""){
          if($('#box2').html() == $('#box5').html() && thereIsWinner === false){
            if($('#box2').html() == $('#box8').html()){
                console.log(player + "WINS");
                new Audio('../audio/beep4.mp3').play();
                $('#messageBoard').html(player +'WINS');
                setTimeout(cleanBoard, 1288);
                winTally();
                setTimeout(victory, 1288);
                return;
            }
          }
        //considering right-hand side diagonal
          if($('#box2').html() == $('#box4').html() && thereIsWinner === false){
            if($('#box2').html() == $('#box6').html()){
              console.log(player + "WINS");
              new Audio('../audio/beep4.mp3').play();
              $('#messageBoard').html(player +'WINS');
              setTimeout(cleanBoard, 1288);
              winTally();
              setTimeout(victory, 1288);
              return;
              }
            }
          }
    //considering second row
      if($('#box3').html()!== ""){
        if($('#box3').html() == $('#box4').html() && thereIsWinner === false){
          if($('#box3').html() == $('#box5').html()){
            console.log(player + "WINS");
            new Audio('../audio/beep4.mp3').play();
            $('#messageBoard').html(player +'WINS');
            setTimeout(cleanBoard, 1288);
            winTally();
            setTimeout(victory, 1288);
            return;
            }
          }
        }
    //considering third row
      if($('#box6').html()!== ""){
        if($('#box6').html() == $('#box7').html() && thereIsWinner === false){
          if($('#box6').html() == $('#box8').html()){
            console.log(player + "WINS");
            new Audio('../audio/beep4.mp3').play();
            $('#messageBoard').html(player +'WINS');
            setTimeout(cleanBoard, 1288);
            winTally();
            setTimeout(victory, 1288);
            return;
            }
          }
        }
      }

//round updates
$('.roundCount').html(round);

//miscellaneous func
function cleanBoard() {
  $( "td" ).empty();
  turnCount = 0;
  round++;
  $('.roundCount').html(round);
  thereIsWinner = false;
}

function victory() {
  if(player1Tally.length === 3 ){
    alert('Game over, player 1 wins!');
    new Audio('../audio/bulletFall.mp3').play();
    setTimeout(function(){
     window.location.reload(true);
  }, 18);
  } else if (player2Tally.length === 3 ){
    new Audio('../audio/bulletFall.mp3').play();
    alert('Game over, player 2 wins!');
    setTimeout(function(){
     window.location.reload(true);
  }, 18);
  }
}

function draw(){
  if (turnCount === 9 && thereIsWinner === false){
      console.log('DRAW');
      $('#messageBoard').html('DRAW, next round!');
      setTimeout(cleanBoard, 1288);
      return;
  }
}
