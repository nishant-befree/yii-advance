export class PracticeIQ{
    company_name:string;
    is_urgent:number;
    is_practice_urgent:number;
    is_knockback:string;
    job_milestone_date:string;
    last_task:string;
    first_query_created_on:string;
    lessDate:string;
    querysentcount:number;
    pendingcount:number;
    is_paused:number;
    job_paused_on:number;
    clientName:number;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}