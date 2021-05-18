function refreshTodo() {
  $("#list").empty();

  $.get("/todo", function (data) {
    // console.log(data)
    for (let item of data) {
      $("#list").append(`<li>${item}</li>`);
    }
  });
}

refreshTodo();

$("#btn").click(function () {
  const todo = $("#inp").val();
  $.post("/todo", { todo }, function (data) {
    console.log("DONE!!");
    refreshTodo();
  });
});
