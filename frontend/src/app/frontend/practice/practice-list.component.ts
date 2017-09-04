import { Component, OnInit} from '@angular/core';
declare var $;
import { PracticeService } from './../services/practice.service';
import { UserService } from './../services/user.service';
import { Practice } from './../services/practice';
@Component({
    selector: 'app-practice-list',
    templateUrl: './practice-list.html',
    providers: [PracticeService]
})
export class PracticeListComponent {

    private _errorMessage:string;

    private _mode:string = '';
    private _practice:Practice;

    public userData:any = {};

    constructor(
        private _practiceService : PracticeService,private  _userService : UserService
    ){
        this.getPracticePR();
        setTimeout(function () {
            $(function () {
                $('#myTable').DataTable();
            })
        },5000);
    }
    ngOnInit(): void {


    }
    public getPracticePR(){
        this._practiceService.practicePR()
            .subscribe(
                practice => {
                    console.log(practice);
                    this._practice = practice;
                },
                error => {
                    // unauthorized access
                    if(error.status == 401 || error.status == 403) {
                        this._userService.unauthorizedAccess(error);
                    } else {
                        this._errorMessage = error.data.message;
                    }
                }
            );
    }


}
