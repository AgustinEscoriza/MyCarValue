import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Report } from 'src/reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @Column( {default: true})
  admin: boolean;

  @OneToMany( ()=> Report, (report)=> report.user)
  reports: Report[];

  @AfterInsert()
  logInsert(){
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdated(){
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove(){
    console.log('Removed User with id', this.id);
  }
}