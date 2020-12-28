var scoreString = sessionStorage.getItem('score');
var scoreList;
if(scoreString) {
    scoreList = scoreString.split('-').sort(sortNumber);
    console.log(scoreList,5)
}
var htmlv="";
var htmlContent
$.each(scoreList,function(i,item){
    console.log(i,'9')
    var key = i+1
    htmlv+='<div class="ques-list-box clearfix">'+
                            '<div class="ques-list-head"><div class="ques-list-image"><img src="images/user001.jpg" alt=""></div></div>'+
                            '<div class="ques-list-name"><div class="ques-list-name-head"> 1号玩家</div><div class="ques-list-name-text"> 得分: '+item+'</div></div>'+
                            '<span class="ques-list-name-icon item-icon001">'+key+'</span>'+'</div>';
})

$(".ques-card-list").append(htmlv);

function sortNumber(a,b){//升序
    return b - a
}