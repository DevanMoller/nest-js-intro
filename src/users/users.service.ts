

export class UsersService{
    users: {
        id: number,
        name: string, 
        age: number, 
        gender: string,
        isMarried: boolean
    }[] = [
        {id: 0, name: 'John', age: 28, gender: 'male', isMarried: true},
        {id: 1, name: 'Mike', age: 32, gender: 'male', isMarried: true},
        {id: 2, name: 'Stephanie', age: 23, gender: 'female', isMarried: false}
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x => x.id === id);
    }

    createUser(user: {
        id: number,
        name: string, 
        age: number, 
        gender: string,
        isMarried: boolean
    }){
        this.users.push(user)
    }
}