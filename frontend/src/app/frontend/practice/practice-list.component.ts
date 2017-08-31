import { Component, OnInit} from '@angular/core';
declare var $;
import { HttpService } from './../services/http.service';
@Component({
    selector: 'app-practice-list',
    templateUrl: './practice-list.html',
    providers: [HttpService]
})
export class PracticeListComponent {

    title = 'Simple Server side Angular 2 pagination';
    users = [];
    totalItem:Number = 0;

    constructor(
        private httpService : HttpService
    ){
        this.getServerData(1);
        setTimeout(function () {
            $(function () {
                $('#myTable').DataTable();
            })
        },2000);
    }
    ngOnInit(): void {


    }
    public getServerData(event){
        this.httpService.getdata(event).subscribe(
            response =>{
                if(response.error) {
                    alert('Server Error');
                } else {
                    console.log(response);
                    this.users = response;
                    this.totalItem =10;
                }
            },
            error =>{
                alert('Server error');
            }
        );
        return event;
    }

}
