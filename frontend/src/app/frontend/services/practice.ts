export class Practice{
    id:number;
    company_name:string;
    service_division:number;
    job_type_id:number;
    client_name:string;
    period:string;
    is_urgent:number;
    is_knockback:number;
    is_practice_urgent:number;
    milestone_date:string;
    first_query_created_on:string;
    lessDate:string;
    querysentcount:number;
    pendingcount:number;
    repliedcount1:number;
    repliedcount2:number;
    transactionQueryCount:number;
    job_type_string:string;
    job_name:string;
    first_query_created_on_string:string;
    lessDate_string:string;
    priority:number;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}