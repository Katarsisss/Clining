$(document).ready(function ($) {
    $('.popup-btn').on('click', function (event) {
        $('.popup-call').fadeIn();
    });
    $('.popup-close').on('click', function (event) {
        $('.popup-call').fadeOut();
        $('.popup-thanks').fadeOut();
    });
    $('.thanks-btn').on('click', function (event) {
        $('.popup-thanks').fadeOut();
    });
    $('#manager-call').on('click', function (event) {
        $('.popup-call').fadeIn();
    })
});

$(function () {
    $('form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            $('.popup-call').fadeOut();
            $('.popup-thanks').fadeIn();
            $('form[name=first-form]').trigger('reset');
            $('form[name=second-form]').trigger('reset');
            $('form[name=third-form]').trigger('reset');
        }).fail(function () {
            alert('Заявка не отправлена по тех причинам');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
    });
});