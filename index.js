var USED_BUTTONS = [];
var USER1_BUTTONS = [];
var USER2_BUTTONS = [];
var turn = 1;
var won = false;


$(document).ready(() => {
    $('button').on('click', function() {
        var clicked_by_user = $(this).attr('id');
        var clicked_button_number = clicked_by_user[clicked_by_user.length - 1];

        var count = turn%2;

        if (!USED_BUTTONS.includes(clicked_button_number)) {
            if (count == 1) {
                USED_BUTTONS.push(clicked_button_number);
                USER1_BUTTONS.push(clicked_button_number);
            
                $(this).attr('class', 'user-clicked');
                var win_or_not = check_win(USER1_BUTTONS)

                if(win_or_not) {
                    won = true;
                    $('h1').text("Player 1 Wins..🥳🥳");
                }
            } else if (count == 0) {
                USED_BUTTONS.push(clicked_button_number);
                USER2_BUTTONS.push(clicked_button_number);
            
                $(this).attr('class', 'bot-clicked');
                var win_or_not = check_win(USER2_BUTTONS)

                if(win_or_not) {
                    won = true;
                    $('h1').text("Player 2 Wins..🥳🥳");
                }
            }
            turn++;
        }
        setTimeout(() => {
            if(turn==10 && !won) {
                restartGame();
            }
        }, 2500);
    });
});

function check_win(list) {
    if(list.includes('1')&&list.includes('2')&&list.includes('3') || 
            list.includes('4')&&list.includes('5')&&list.includes('6') ||
            list.includes('7')&&list.includes('8')&&list.includes('9') || 
            list.includes('1')&&list.includes('4')&&list.includes('7') ||
            list.includes('2')&&list.includes('5')&&list.includes('8') ||
            list.includes('3')&&list.includes('6')&&list.includes('9') ||
            list.includes('1')&&list.includes('5')&&list.includes('9') ||
            list.includes('3')&&list.includes('5')&&list.includes('7')) {
            
            return true;
    }
    return false;
}

function restartGame() {
    $('button').removeClass('user-clicked bot-clicked');
    USED_BUTTONS = [];
    USER1_BUTTONS = [];
    USER2_BUTTONS = [];
    turn = 1;
}