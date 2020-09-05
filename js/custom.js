$(document).ready(function(e){
	//设置页脚博主会动的心
    $('.copyright').html('©2020 <i	style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> SU');
	//修改主页中心标题
	$('#site_title').text('保持孤独,继续前进');
	//加入书签弹出层
	//$("#card-info-btn").click(function(){
	//	alert("按Ctrl+D将主页添加至书签");
	//});
});

/*
// 移除页脚样式
var app = document.getElementById('footer');
app.removeAttribute('id');
*/

//手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}

//分类卡片折叠
var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);
var item = document.getElementsByClassName("card-category-list-item");
function toggle(t) {
    var display = t.parentElement.nextSibling.style.display;
    if (display == "none") {
        t.parentElement.nextSibling.style.display = "block";
        t.parentElement.nextSibling.style.height = "100%";
        t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        t.parentElement.nextSibling.style.display = "none";
        t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
    }
}

for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
    card_category_list[i].previousSibling.innerHTML +=
        '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" οnclick="toggle(this)"></i>';
}


