import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { LoggedInUserData } from "../interfaces/authenticated-user.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'my-secret-key',

        })
    }

    async validate(payload: LoggedInUserData){
        return {
            userId: payload.id,
            email: payload.email,
            role: payload.role, 
            orgs: payload.orgs,
        }
    }
}