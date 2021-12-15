$(document).ready(function () {
    // let tasksCompleted = 0;

    $("form").on("submit", function (event) {
        event.preventDefault();
        let task = $("#taskEntered").val();
        if (task === "") {
            alert("You didn't type anything!");
        } else {
            $(".tasks").append(`<div class = "listItem"><li>${task}</li></div>`);
            $("#taskEntered").val("");
        }
    });

    // $('ul.tasks').on('click', 'li', function () {
    //     if ($(this).hasClass("completed") === true) {
    //     } else {
    //         $(this).addClass('completed');
    //         tasksCompleted = tasksCompleted + 1;

    //         if (tasksCompleted > 0) {
    //             $("p.tasksCompleted").html(`You've completed <strong>${tasksCompleted}</strong> tasks!`);
    //         }
    //     }
    // });
});