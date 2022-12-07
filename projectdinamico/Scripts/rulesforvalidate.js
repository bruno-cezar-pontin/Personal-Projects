$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            Name: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            DateofBirth: {
                required: true,
                minlength: 8,
                maxlength: 8,
            },
            NameChildren: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren2: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren3: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren4: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren5: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren6: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren7: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren8: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren9: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            NameChildren10: {
                required: true,
                minlength: 3,
                maxlength: 30
            }
        },
        messages: {
            Name: {
                required: "We need your name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("Maximum {0} characters required!")
            },
            DateofBirth: {
                required: "Type ur date",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            },
            NameChildren: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren2: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren3: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren4: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren5: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren6: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren7: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren8: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren9: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            }, NameChildren10: {
                required: "Type childrens name",
                minlength: jQuery.validator.format("At least {0} characters required!"),
                maxlength: jQuery.validator.format("At least {0} characters required!")
            },

        }
    });
});