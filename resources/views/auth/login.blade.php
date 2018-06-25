<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> @yield('title') </title>
    @includeif('backend.layouts._css_default')
    @includeif('backend.layouts._css')
    <body>
     <div id="container" class="cls-container" style="background-color: #26ae8f  !important;">

        <!-- BACKGROUND IMAGE -->
        <!--===================================================-->
        <div id="bg-overlay"></div>
        
        
        <!-- LOGIN FORM -->
        <!--===================================================-->
        <div class="cls-content" >
            <div class="cls-content-sm panel">
                <div class="panel-body">
                    <div class="mar-ver pad-btm">
                        <h1 class="h3" style="color: white;">ĐĂNG NHẬP HỆ THỐNG</h1>
                        <h4>LARAVEL - REACT</h4>
                    </div>
                    <form action="{{ url('login') }}" method="POST" role="form">
                        <div class="form-group{{ $errors->has('account') ? ' has-error' : '' }}">
                            <input autocomplete="off" type="text" class="form-control" id="account"  required ="" placeholder="Tên tài khoản" name="account" value="{{old('account')}}">
                            @if ($errors->has('account'))
                            <div class="text-left text-danger" style="margin-top: 5px;">
                                <strong>{{ $errors->first('account') }}</strong>
                            </div>
                            @endif
                        </div>
                        <div class="form-group">
                            <input autocomplete="off" type="password"  class="form-control" id="password" required ="" placeholder="Mật khẩu" style="height: 33px;" name="password">
                            @if ($errors->has('password'))
                            <div class="text-left text-danger" style="margin-top: 5px;">
                                <strong>{{ $errors->first('password') }}</strong>
                            </div>
                            @endif
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="submit" >Đăng nhập</button>
                    </form>
                </div>

                <!-- <div class="pad-all">
                    <a href="pages-password-reminder.html" class="btn-link mar-rgt">Forgot password ?</a>
                    <a href="pages-register.html" class="btn-link mar-lft">Create a new account</a>

                    <div class="media pad-top bord-top">
                        <div class="pull-right">
                            <a href="#" class="pad-rgt"><i class="demo-psi-facebook icon-lg text-primary"></i></a>
                            <a href="#" class="pad-rgt"><i class="demo-psi-twitter icon-lg text-info"></i></a>
                            <a href="#" class="pad-rgt"><i class="demo-psi-google-plus icon-lg text-danger"></i></a>
                        </div>
                        <div class="media-body text-left text-bold text-main">
                            Login with
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <!--===================================================-->
        
        
       <!--  DEMO PURPOSE ONLY
       ===================================================
       <div class="demo-bg">
           <div id="demo-bg-list">
               <div class="demo-loading"><i class="psi-repeat-2"></i></div>
               <img class="demo-chg-bg bg-trans active" src="img/bg-img/thumbs/bg-trns.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-1.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-2.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-3.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-4.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-5.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-6.jpg" alt="Background Image">
               <img class="demo-chg-bg" src="img/bg-img/thumbs/bg-img-7.jpg" alt="Background Image">
           </div>
       </div>
       =================================================== -->



   </div>
   @includeif('backend.layouts._js_default')
   @includeif('backend.layouts._js')

</body>

<!-- Tieu Long Lanh Kute -->
</html>
