export class Model {
    user: string;
    items;

    constructor() {
        this.user = "Hunkar";
        this.items = [  
            new TodoItem("Spor",true),    
            new TodoItem("Kahvaltı",false),    
            new TodoItem("Kitap Okumak",false),    
            new TodoItem("Sinema",false),    
        ];
    }
}

export class TodoItem {
    description: string;
    action: boolean;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}
