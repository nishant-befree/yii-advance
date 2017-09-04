import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector   : 'smsf-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class SMSFConfirmDialogComponent implements OnInit
{
    public confirmMessage: string;

    constructor(public dialogRef: MdDialogRef<SMSFConfirmDialogComponent>)
    {
    }

    ngOnInit()
    {
    }

}
