/*
- when add is clicked:
    - store content of input field in a variable
    - append this variable content to an array
    - reset input field to blank state
    - display checkbox and text for every index in the array
- when checkbox is clicked;
    - remove/slice/splice this index from the array
    - change color of checkbox to done
    - change color of text to done

BONUS: reorder all completed items to the bottom of the list
- 
*/
$(document).ready(function () {
    let tasksCompleted = 0;

    $("form").on("submit", function (event) {
        event.preventDefault();
        let toDoItem = $("#toDoEntered").val();
        if (toDoItem === "") {
            alert("You didn't type anything!");
        } else {
            //toDoList.push(toDoItem);

            $(".toDo").append(`<div class = "listItem"><li>${toDoItem}</li></div>`);
            $("#toDoEntered").val("");
        }
    });

    // $('ul.toDo').on('click','li',function() {
    //     //$(this).addClass('completed');
    //     console.log(this);
    // });
    $('ul.toDo').on('click', 'li', function () {
        if ($(this).hasClass("completed") === true) {
            console.log("This is already completed");
        } else {
            $(this).addClass('completed');
            tasksCompleted = tasksCompleted + 1;

            console.log(tasksCompleted);
            if (tasksCompleted > 0) {
                $("p.tasksCompleted").html(`You've completed <strong>${tasksCompleted}</strong> tasks!`);
            }
        }


        //$(this).css("text-decoration", "line-through");
        //$(this).remove();
    });

    // $("li").on("click", function (event) {
    //     event.preventDefault();
    //     const clickedItem = $(this).index();
    //     console.log(clickedItem);
    //let toBeCompleted = toDoList.indexOf(clickedItem);
    //console.log(toBeCompleted);

    //     //toDoList.splice(toBeCompleted);
    //     //console.log(toDoList);
    //     //console.log(toDoList);
    //     //console.log(clickedItem);
    // });

});