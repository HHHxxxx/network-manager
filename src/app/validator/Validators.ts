// import {FormControl, FormGroup} from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
// import {Injectable} from '@angular/core';
//
// @Injectable()
// export class LoginService {
//   constructor(private http: HttpClient) {
//   }
//
// // 自定义校验器之校验手机号码是否合法
//   export
//   function
//
//   mobileValidators(control: FormControl): any {
//     var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
//     let valid = myreg.test(control.value);
//     return valid ? null : {mobile: true};
//   }
//
// // 异步校验器
//   export
//   function
//
//   mobileAsyncValidators(control: FormControl): any {
//     // 定义正则表达式 起到筛选字段的作用
//     var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
//     let valid = myreg.test(control.value);
//     return Observable.of(valid ? null : {mobile: true}).delay(5000);
//   }
//
// // 自定义校验器之校验两次密码是否一致
//   export
//   function
//
//   equalValidators(group: FormGroup): any {
//     let password: FormControl = group.get('password') as FormControl;
//     let pconfirm: FormControl = group.get('pconfirm') as FormControl;
//     let valid: boolean = (password.value === pconfirm.value);
//     return valid ? null : {equal: {errmsg: '两次输入的密码不一致'}};
//   }
// }
//
// // // 身份证号
// // export function idcardValidators(control: FormControl): any {
// //   var Reg = /[\d{17}x]|[\d{17}[\d{1}]/;
// //   let valid = Reg.test(control.value);
// //   return valid ? null : {idcard: true};
// // }
