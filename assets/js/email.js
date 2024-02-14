var shown = false;

function showhideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = "show my email";
        shown = false;
    } else {
        var myemail = "<a href='mailto:venagaci" + "@" + "mail.uc.edu'>venagaci" + "@" + "mail.uc.edu</a>";
        document.getElementById('email').innerHTML = myemail;
        shown = true;
    }
}