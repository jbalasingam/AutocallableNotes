$(document).ready(function () {

var Rate = 0;
var DivYield = 0;
var Sigma = 0.2;
var SigmaSquare = Sigma**2;
var ExpGrowth = 0.01;
var BinaryExposure = [];





//this changes the name within the drop-down button
$(".dropdown-menu li a").click(function(){
  $(".btn-primary:first-child").html(' <span class="optionType">'+$(this).text()+'</span>');
  var Option = $(".optionType").text();
  console.log(Option);
});

// Function to get input value.
$('.add').click(function() {
    var OptionType = $('.optionType').text();
    var Underlying = $("#underlying").val();
    var IssueDate = $("#issuedate").val();
    var MaturityDate = $("#maturitydate").val();
    var Return = $("#digitalreturn").val();
    var TermToMaturity = Math.abs(MaturityDate - IssueDate);
    console.log(TermToMaturity);

    if(OptionType=='' || Underlying=='' || IssueDate=='' || MaturityDate=='' || Return=='') {
    alert("Enter Some Text In Input Field");
    }


    });



















});