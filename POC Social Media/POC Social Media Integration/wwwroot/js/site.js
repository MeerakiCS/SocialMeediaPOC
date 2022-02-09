// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(document).ready(function(){
    getNotification();
});


// Write your JavaScript code.
function getNotification() {
    $.ajax({
        type: "GET",
        url: "https://graph.facebook.com/me/notifications?access_token=EAASJHfl7T6YBALzdC7XAfOBEGLNcV8GRCXgmnZADIg8hYIHXd4Abg6pc5NZAlLI7vXi4oEEMix3nBJObhUsUohSyKySp4kKumQGUk5n81aynAt6ZAMrec8V8WQpjTDpUk1OUPNVRfhkLRl8rSZCkHkmYEiR1S9x745cUSIpoaZAZBt02PGBGiZAVSUdomiltFYII5WzaW99ArLNhMMAeIHIFQyAg6RDhLYBZAH6hRUjiQf4yi87M4954UGsfBRGhIl8ZD",
        success: function (response) {
            console.log(response);
        },
        error: function (response) {

        }
    })
}