$(document).ready(function() {
  $("form#purchase").submit(function(event) {
    event.preventDefault();
    var purchase = $("#selection").val();
    var address = $("#address").val();
    var name = $("#userName").val();
    var result = ("Thank you " + name + ", your purchase of " + purchase + " will be sent to " + address);
    $("#output").text(result);
  });
});
