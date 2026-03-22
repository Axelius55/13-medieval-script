import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-user.interface';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { OrganizationMemberRole } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';
import { OrganizationRoleGuard } from 'src/auth/guards/organization-manager.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: AuthenticatedRequest) {
    
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @UseGuards(OrganizationRoleGuard)
  @Roles(OrganizationMemberRole.MANAGER)
  @Get('organization/:organizationId')
  @ApiResponse({ status: 200, type: [CreateUserDto] })
  async getUsersByOrganizationId(
    @Param('organizationId') organizationId: string,
  ) {
    return this.usersService.getUsersByOrganizationId(organizationId);
  }
}
