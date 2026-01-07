import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

//http://localhost:3000/users
@Controller('users')
export class UsersController{
    @Get()
    getUsers(@Query() qs: any) {
        const usersService = new UsersService();
        
        if(qs.gender) {
            return usersService.getAllUsers().filter(u => u.gender === qs.gender)
        }

        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: any) {
        const usersService = new UsersService();
        return usersService.getUserById(+id);
    }

    @Post()
    createUser(@Query() queryString: any) {
        const usersService = new UsersService();
        usersService.createUser(queryString)
        return "New user created!"
    }
}