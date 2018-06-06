$(document).ready(function () {

var Rate = 0;
var DivYield = 0;
var Sigma = 0.2;
var SigmaSquare = Sigma**2;
var ExpGrowth = 0.01;
var BinaryExposure = [];
var days = 365; 





//this changes the name within the drop-down button
$(".dropdown-menu li a").click(function(){
  $(".btn-primary:first-child").html(' <span class="optionType">'+$(this).text()+'</span>');
  var Option = $(".optionType").text();
  console.log(Option);
});

// Function to get input value.
$('.calculate').click(function() {

    var OptionType = $('.optionType').text();
    var Underlying = $("#underlying").val();
    var IssueDate = $("#issuedate").val();
    var MaturityDate = $("#maturitydate").val();
    var Return = $("#digitalreturn").val();

    //tier logic
    var tier = $("#tier").val();
    var shock;
    if (tier == 1 | tier == 2){
      
      shock = 0.05;

    } else if(tier == 3){

      shock = 0.1;

    } else if (tier == 4){

      shock = 0.15

    } else {

      shock =0.2

    }

    console.log(shock);

    //calculate the difference between issue date and maturity date
    var b = moment(MaturityDate,'M-D-YYYY');
    var a = moment(IssueDate,'M-D-YYYY');
    var TermToMaturity  = b.diff(a, 'days');
    
    console.log(TermToMaturity);

    var theta = TermToMaturity/days

    if(OptionType=='' || Underlying=='' || IssueDate=='' || MaturityDate=='' || Return=='') {
    console.log("Enter Some Text In Input Field");
    }




    });






//Function what happens 
$('.add').click(function() {

});
















});