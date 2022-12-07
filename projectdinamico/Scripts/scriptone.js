$(document).ready(function () {
    var box = 10;
    $('.groupinput').hide();
    var igroup = $(".groupinput") // Div que criei o imput 
    var addbtn = $(".btnadd")
    var eid = 1;
    var z = 1;

    $('.btnadd').click(function (e) {
        e.preventDefault();
    });

    $("input[name='TemFilho']").click(function () {

        if ($(this).prop('checked')) {
            var myvalue = $(this).val();
        } //Pegar meu valor do RB *


        if (myvalue == 'Yes') {
            $('.groupinput').show();
            $('.btnadd').click(function (e) {
                e.preventDefault();
                if (z < box) {
                    z++
                    eid++
                    $(igroup).append('<label for="name">NameChildren</label> <input type="text" name="NameChildren' + eid + '" id="NameChildren' + eid +'/><b><label for="dob">CDateOfBirth</label></b><input type="text" name="CDateOfBirth"  id="CDateofBirth' + eid + '"/><a href="#" class="remove_field">Remove</a><hr>');

                }
            })

        } else {
            $('.groupinput').hide();
        }

    })
})