
export class Student{
    id: number;
    name: string;
    grade?:number;
    
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
}