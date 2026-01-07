import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    id: number;

    age: number;
    
    @IsString({message: 'Name should be a string!'})
    @IsNotEmpty({message: 'Name cannot be empty!'})
    name: string;

    @IsString({message: 'Gender should be a string!'})
    gender?: string;

    @IsEmail()
    email: string;

    isMarried: boolean
}