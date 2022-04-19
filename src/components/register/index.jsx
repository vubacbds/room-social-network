import './Register.css'
const Register = () => {
    return ( 
        <div id="login" className="login-1">
        <div class="container"> 
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <div class="register_header">
                                <h3 class="text-dk">Đăng ký tài khoản</h3>
                                <p>Điền thông tin của bạn vào bên dưới để đăng ký tài khoản</p>
                            </div>
                            <label class="toila" for="email">Tôi là:</label>
                            <select class="form-control role_select">
                                    <option value="0">Chủ trọ</option>
                                    <option value="1">Khách hàng</option>
                            </select>
                            <hr></hr>
                            <label class="toila">Tên đăng nhập</label>
                            <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
                            <hr></hr>
                            <label class ="toila" for="psw">Mật khẩu</label>
                            <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
                            <hr></hr>
                            <label class="toila" for="psw-repeat">Xác thực mật khẩu</label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
                            <hr></hr>
                            <label class="toila">Họ và tên</label>
                            <input type="text" placeholder="Họ và tên" name="email" id="email" required></input>
                            <hr></hr>
                            <fieldset class="margin_input">
                                <label class="toila">Giới tính</label>
                                <div class="sex">
                                    <input type="radio" name="sex" id="sex-m" value="m"></input>
                                    <label for="sex-m">Male</label>
                                    <input class="marnam" type="radio" name="sex" id="sex-f" value="f"></input>
                                    <label for="sex-f">Female</label>
                                </div>
                            </fieldset>
                            <label class="toila margin_input">Ngày sinh</label>
                            <input class="form-control" type="date"></input>
                            <hr></hr>
                            <label class="toila">Số điện thoại</label>
                            <input type="text" placeholder="Enter sđt" name="email" id="email" required></input>
                            <hr></hr>
                            <label class="toila">Gmail</label>
                            <input type="text" placeholder="Enter gmail" name="email" id="email" required></input>
                            <hr></hr>
                            <p class="accept"><input type="checkbox"></input> Tôi chấp nhận điều kiện và các chính sách riêng tư.</p>
                            <div class="flex-btn"><button type="submit" class="registerbtn">Đăng ký</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
 
export default Register;