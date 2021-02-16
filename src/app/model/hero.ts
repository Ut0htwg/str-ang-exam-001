export class Hero {
    id: number = 0;
    name: string = '';
    superpower?: string = '';
    address?: string = '';
    
    constructor(id: number, name: string, superpower?: string, address?: string) {
        id = this.id;
        name = this.name;
        superpower = this.superpower || '';
        address = this.address || '';
    }
}