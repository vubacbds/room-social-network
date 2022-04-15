import {Link} from 'react-router-dom';
import { Button } from 'antd';
const Login = () => {
    return ( <>
        <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-dn">Đăng nhập tài khoản</h3>
                            <hr></hr>
                            <div class="form-group">
                                <label for="username" class="text-label">Username:</label><br/>
                                <input type="text" name="username" id="username" class="form-control" placeholder='Email'/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-label">Password:</label><br/>
                                <input type="text" name="password" id="password" class="form-control" placeholder='Mật khẩu'/>
                            </div>
                            <div class="form-group">
                            <br></br>
                                <label for="remember-me" class="text-re">
                                    <input id="remember-me" name="remember-me" type="checkbox"/>
                                    <span> Ghi nhớ đăng nhập</span>
                                    <a class="qmk" href='#'>Quên mật khẩu</a>
                                </label>
                                <br></br>
                                <br></br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>

                            </div>
                            <div id="register-link" class="text-right">
                                <label>Bạn chưa có tài khoản?</label>
                                <Link to="../Register">Đăng ký</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Login;