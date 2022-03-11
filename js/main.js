$(function () {
    //实现菜单栏切换
    $('.tab-content').hide();
    $('.menu-item').click(function(){
        $('#index,.tab-content').hide();
        $(this).addClass('currentMenu').siblings().removeClass('currentMenu');
        let activeTab = $(this).find('a').attr('href');
        $(activeTab).show();
        $("body,html").animate({
            scrollTop: 50
        }, 600);
    });
    
    //回到顶部动画
    $('.toTop').on('click',function(){
        $("body,html").animate({
            scrollTop:0
        },500)
    });

    //模态框
    $(".register").on('click',function(){
        $('#register').modal();
    });
    $(".login").on('click',function(){
        $('#login').modal();
    });
    //检查有效性
    function checkRegister(){
        let email1 = $("#inputEmail1").val();
        let e = -1;
        e = email1.indexOf('@');
        let password1 = $("#inputPassword1").val();
        let password2 = $("#inputPassword2").val();
        if(e<0){
            alert("请输入正确的邮箱格式！");
        }else if (password1 === null || password1 === ""){
            alert("您输入的密码为空!");
        }else if (password1 !== password2){
            alert("您的两次输入密码不一致！");
        }else if (password1.length < 6){
            alert("密码长度必须大于6位！");
        }else alert('注册成功！');
    }
    function checkLogin(){
        let email2 = $("#inputEmail2").val();
        let e = -1;
        e = email2.indexOf('@');
        let password3 = $("#inputPassword2").val();
        if(e<0){
            alert("请输入正确的邮箱格式！");
        }else if (password3 === null || password3 === ""){
            alert("您输入的密码为空!");
        }else if (password1.length < 6){
            alert("密码长度必须大于6位！");
        }else alert('注册成功！');
    }
    $("#register .btn-primary").click(function(){
        checkRegister();
    })
    $("#login .btn-primary").click(function(){
        checkLogin();
    })

    //菜单栏下拉动画
    $(".menu-item").each(function(){
        $(this).hover(function () { 
            console.log(this);
            $(this).children('ul').slideToggle(50,'linear');
        });
    })
})