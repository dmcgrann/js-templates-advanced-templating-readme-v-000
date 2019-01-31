function loadIssue() {
  var issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(var i=0;i<issues.length;i++) {
    var result = template(issues[i]);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
  
}
