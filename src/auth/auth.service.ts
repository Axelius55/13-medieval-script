import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService,
    ){}

    async validateUser(userData: LoginDto){
        const foundUser = await this.prismaService.user.findUnique({
            where: { email: userData.email },
            include: { memberShips: true },
        });
        
        if (!foundUser){
            throw new NotFoundException('User not found');
        }

        if(foundUser.password === userData.password){
            const payload = this.jwtService.sign({
                id: foundUser.id,
                email: foundUser.email,
                role: foundUser.role,
                orgs: foundUser.memberShips.map(org => ({
                    id: org.organizationId,
                    role: org.role,
                }))
            });
            return { access_token: payload };
        }
    }

}
