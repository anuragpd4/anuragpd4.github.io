function update() {
var year = 
document.querySelector('input[name="Year"]:checked').value;
var subject = 
document.querySelector('input[name="Sub"]:checked').value;
var qcode = document.getElementById("qcode").value;
document.getElementById("link").href="http://admin.edushoppee.com/upload_docs/doubt_solution_bulk/" + year + subject + qcode + ".jpg";
}