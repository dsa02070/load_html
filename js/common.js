$(function(){
  //script 영역 jquery load html 사용 예
  /*
  $('ul li').click(function(){
    console.log($(this).attr('id'))
    let thisId = $(this).attr('id')
    if( thisId == 'section1'){
      $('#content').load('./load_file.html #section1')
    }else if( thisId == 'section2'){
      $('#content').load('./load_file.html #section2')
    }else if(thisId == 'section3'){
      $('#content').load('./load_file.html #section3')
    }
  })
*/


$('ul li').click(function(){
  // click 하는 요소의 index값을 사용한 구현 방식
  let thisIndex = $(this).index() + 1;
  let thisId = $(this).attr('id');
  if( thisId == 'section'+thisIndex){
    $('#content').load('./load_file.html #section'+thisIndex)
  }
})
})
