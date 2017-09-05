export class PracticeUT{
    company_name:string;
    task_name:string;
    jobTypeName:string;
    lessDate:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}