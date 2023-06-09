import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { type } from "os";
export enum UserRole{
  ADMIN = 'admin',
  CHIEFEDITOR = 'chiefeditor',
  EDITOR = 'editor',
  USER = 'user'
}
@Entity()
export class UserEntity{
  @PrimaryGeneratedColumn()
  id : number;
  @Column()
  name: string;
  @Column({unique:true})
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({type:"enum", enum:UserRole, default:UserRole.USER})
  roles: UserRole;

  @BeforeInsert()
  emailToLowerCase(){
    this.email = this.email.toLowerCase();
  }
}