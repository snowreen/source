//overall app logic and loader...
function travelNotes() {
  "use strict";

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $("<p>");
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
      $note.html($note_text.val());
      var $del = $("<button>delete</button>");
      $note.append($del);
      //hide new note to setup fadeIn...
      $note.hide();
      //append note text to note-output
      $(".note-output").append($note);
      //fadeIn hidden new note
      $note.fadeIn("slow");
      $note_text.val("");
    }
  }

  function deleteAll() {
  }

  //handle user event for `add` button click
  $(".note-input #add").on("click", function(e) {
    createNote();
  });

  $(".note-input #delete").on("click", function(e) {
    $(".note-output").empty();
  });

  $(".note-output").on("click", "p button" , function(e) {
    $(this).parent().remove();
    //$(this).remove();
  });

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

};

$(document).ready(travelNotes);
