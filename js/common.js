/**
 * Created by web-01 on 2017/9/22.
 */
window.onload=function () {
   var timer=setInterval(function () {
       var op=parseFloat($(".avatar-top").css("opacity"));
       if(op<1){
           op+=0.01;
           $(".avatar-top").css("opacity",op);
       }else{
           clearInterval(timer);
           timer=null;
       }
    },10)
}




$(".pro1").mouseenter(
    function () {
        $(this).children().last().addClass("img-msg");console.log($(this).first().next());
    }
)
$(".pro1").mouseleave(
    function () {
        $(this).children().last().removeClass("img-msg");console.log(2);
    }
)

$(".ico2").mouseenter(()=>{
        $("#floor6 p").html('物流管理实习的忙碌给我生活带来了充实感，从入库到出库，发货以及确认收货的这些工作，层层需要脑力与体力的高效结合去完成。每当自己回想到在库房中汗流浃背的场景时，我明白自己喜欢投身于这样紧张忙碌的程序化生活。');
        $("#floor6 .exp2").removeClass("exp2").addClass("exp3");
        console.log(1);
})

$(".ico1").mouseenter(()=>{
    $("#floor6 p").html('感觉这个行业被层出不穷的培训机构给弄乱了,虽然很多人不喜欢自己贴上“被培训的标签”, 但培训给我的感觉是明确目的和时间安排的学习,最终结果好坏取决于自己对未来职业的规划和发展。');
    $("#floor6 .exp3").removeClass("exp3").addClass("exp2");
    console.log(11);
})

//1:获取画笔
var ctx = canvas1.getContext("2d");
//2:创建渐变对象 垂直矩形
var g1 = ctx.createLinearGradient(0,0,0,400);
g1.addColorStop(0,"gold");
g1.addColorStop(1,"green");
ctx.fillStyle = g1;
ctx.font="1.2em SimHei";
ctx.fillRect(50,50,80,400);
ctx.strokeText('H5 CSS3',62,45);
ctx.fillRect(180,60,80,400);
ctx.strokeText('JS',208,55);
ctx.fillRect(330,100,80,400);
ctx.strokeText('PHP',355,95);
ctx.fillRect(480,80,80,400);
ctx.strokeText('JS框架',493,72);


$("#floor4 a").click(()=>{
    $("#pp_default").css("display","block");
    $("#pp_overlay").css("display","block");
})

$("#pp_default button").click(()=>{
    $("#pp_default").css("display","none");
    $("#pp_overlay").css("display","none");
    console.log("aa");
})

$("#pp_overlay").click(()=>{
    $("#pp_default").css("display","none");
    $("#pp_overlay").css("display","none");
    console.log("aa");
})