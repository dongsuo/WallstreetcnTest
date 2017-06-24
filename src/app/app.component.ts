import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 配置倒计时自定义文案
  configWaitText = '请耐心等待60s';

  // 初始化验证码信息
  vrifictStatus = {msg:'点击获取验证码',status : true};
  // 初始化国家电话代码
  countryCodes = [{value:'+86',name:'China'},{value:'+1',name:'American'}];
  // 初始化登录信息模型
  loginInfo = {countryCode:this.countryCodes[0].value,num:'',verify:'',pwd:''};
   // 验证电话号码
  verifyNum = function (num) {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    return reg.test(num)
  }
  // 修改验证码状态
  getVerifi = function(e){
  	var timeOut = 60;
    // 更新状态
    var waitText = this.configWaitText;
  	this.vrifictStatus={msg:waitText,status : false};
  	var that = this;
    // 设置倒计时
  	var t = setInterval(function(){
  		timeOut--;
      waitText = waitText.replace(timeOut+1+'',timeOut);
  		that.vrifictStatus={msg:waitText,status:false};
      // 计时结束，恢复状态
  		if (timeOut===0) {
  			clearInterval(t);
  			that.vrifictStatus = {msg:'点击获取验证码',status : true};
  		}
  	},1000);
  }
  onSubmit = function (obj) {
    console.log(obj)
  }
}
