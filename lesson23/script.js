$(function () {

    let num = 0;
        while ($("#start").children().length > num) {
            $("#start").append($("#start").children().splice(Math.floor(Math.random() * $("#start").children().length), 1)[0]);
            num++;
        }

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let check = true;
    $('.sortt').sortable({
        connectWith: '.number-div',
        tolerance: "pointer",
    });
    $(".sortt").sortable("disable");
    $('#check').on('click', function () {
        $('.result').css('display', 'block');//
        $('.modal-container').css({
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 3
        });
        $('.close').on('click', function () {//
            $('.result').css('display', 'none');
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        });
        $('.check').on('click', function () {
            
            for (let i = 0; i < $('.number').length; i++) {
                if ($('#end .number').eq(i).attr('data-id') != numbers[i]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                $('.win').css('display', 'block');
                $('.close-win').on('click', function () {
                    $('.win').css('display', 'none');
                    $('.result').css('display', 'none');
                    $('.modal-container').css({
                        backgroundColor: '#fff',
                        zIndex: -1
                    });
                });
                $(".sortt").sortable("disable");
                $('.time').text(`01:00`);
                $('span').text(`01:00`);
                clearInterval(inter);

            }
            else {
                $('.lose').css('display', 'block');
                $('.close-lose').on('click', function () {
                    $('.lose').css('display', 'none');
                    $('.result').css('display', 'none');
                    $('.modal-container').css({
                        backgroundColor: '#fff',
                        zIndex: -1
                    });
                });
                $(".sortt").sortable("disable");
                $('.time').text(`01:00`);
                $('span').text(`01:00`);
                clearInterval(inter);
            }
            check = true;
            $('#check').attr('disabled', true);
            $('#check').css('backgroundColor', ' rgba(255, 0, 0, 0.6)');
        });
    });

    let inter

    $('#startGame').on('click', function () {
        let time = 60;
        inter = setInterval(ttimer, 1000);
        function ttimer() {

            time--;
            if (time >= 10) {
                $('.time').text(`00:${time}`);
                $('span').text(`00:${time}`);
            }
            else if (time < 10 && time > 0) {
                $('.time').text(`00:0${time}`);
                $('span').text(`00:0${time}`);
            }
            else if (time <= 0) {
                $('.lose').css('display', 'block');
                $('.modal-container').css({
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 3
                });
                $('.close-lose').on('click', function () {
                    $('.lose').css('display', 'none');
                    $('.result').css('display', 'none');
                    $('.modal-container').css({
                        backgroundColor: '#fff',
                        zIndex: -1
                    });
                });
                $(".sortt").sortable("disable");
                $('.time').text(`00:00`);
                $('span').text(`00:00`);
                clearInterval(inter);
                $('#check').attr('disabled', true);
                $('#check').css('backgroundColor', ' rgba(255, 0, 0, 0.6)');

            }
        }

        $('#startGame').attr('disabled', true);
        $('#startGame').css('backgroundColor', ' rgba(255, 0, 0, 0.6)');

        $('#check').attr('disabled', false);
        $('#check').css('backgroundColor', ' crimson');
        $(".sortt").sortable("enable");
    });

    $('#newGame').on('click', function () {

        location.reload();
    });



    let deadline = new Date(Date.parse(new Date()) + 60 * 1000);
    let tt = new Date();
    console.log(deadline.getMinutes(), deadline.getSeconds());
    console.log(tt.getMinutes(), tt.getSeconds());


});















