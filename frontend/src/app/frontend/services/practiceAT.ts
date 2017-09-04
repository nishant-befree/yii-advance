export class PracticeAT{
    assignee_id:number;
    first_name:string;
    last_name:number;
    task_stage_id:number;
    task_name:string;
    practiceName:string;
    jobTypeName:number;
    taskTypeName:number;
    taskTypeId:number;
    jobTypeId:string;
    jobServiceDivision:string;
    lessDate:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}