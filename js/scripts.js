

var tile1 = "";
var tile2 = "";
var board=[];
var image=[];
var clickCounter = 0;
var matches = 0;
var moves = 0;

function toggle(theElement){
    var theElement = document.getElementById(theElement);  
//     //Show the element or hide it
//     // if ( theElement.style.display != 'block' ) {
//     //     theElement.style.display = 'block';
//     // }else{
//     //     theElement.style.display = 'none';
//     // }
//     //Hide all elements, then show the one we clicked on
    var elementsToHide = document.getElementsByClassName('mg_tile-inside');
    for(i=0; i<elementsToHide.length; i++){
        elementsToHide[i].style.display = 'none';
    }
//     //Show the element or hide it
//         theElement.style.display = 'block';
}

$(document).ready(function(){ 
        for(i=1; i<=8;i++){
            image= $('.mg_tile-'+[i]).find('.mg_tile-inside').html();      
            board.push(image);         
        }   
        board = shuffleTiles();
        for(i=0;i<8;i++){
            var temp = board[i];
            $('#mg-tile-'+(i+1)).html(board[i]);
        };  

    function shuffleTiles(){
    var numberOfTimesToShuffle = Math.floor(Math.random() * 1000);
    for(i=0; i<numberOfTimesToShuffle; i++){
        //pick 2 random cards from the deck and switch them.
            var card1 = Math.floor(Math.random()*8);
            var card2 = Math.floor(Math.random()*8);
            var temp = board[card2];
            board[card2] = board[card1];
            board[card1] = temp;
    } 
    return(board);
}
$('.mg_tile').click(function(){
        clickCounter++;  

            if($('.mg_tile-inside:visible').length == 2){
                $('.mg_tile-inside').hide();
                tile1="";
                tile2="";
            }
            $(this).find('.mg_tile-inside').show();
        //Check again
            if($('.mg_tile-inside:visible').length == 2){
                $('.mg_tile-inside:visible').each(function(){
                    card = $(this).attr('card');
                });
            };
            if(clickCounter===1){
            tile1 = $(this).find('.mg_tile-inside').html();       
            }else if(clickCounter === 2){ 
                tile2 = $(this).find('.mg_tile-inside').html();          
                if(tile1 === tile2){
                    
                    matches++;
                    moves++; 
                    alert("You got a match!");
                    $('.mg_tile-inside:visible').addClass('mg-tile-match-found');
                    $('.mg_tile-inside:visible').removeClass('mg_tile-inside');
                    winCheck();
                }else{
                    tile1="";
                    tile2=""; 
                    moves++;                
            }
            clickCounter=clickCounter-2;
        }    
    });
});
function winCheck(){

    if(matches===4){
        alert('You won the game in '+moves+' moves');
        moves=0;
        matches=0;
        $('.mg-tile-match-found').addClass('mg_tile-inside');
        $('.mg_tile-inside:visible').removeClass('mg-tile-match-found');
        $('.mg_tile-inside').hide();
    }
}
