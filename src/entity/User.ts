import { Entity, PrimaryGeneratedColumn, Column,
    CreateDateColumn, UpdateDateColumn, Index } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column ( { unique: true, length: 255 } )
    email: string;

    @Column({ length: 64 } )
    firstName: string;

    @Column( { length: 64 } )
    lastName: string;

    @Column("datetime")
    fechaNac: Date;

    @Column()
    direccion: string;

    @Column({length: 32})
    ciudad: string;

    @Column({length: 32})
    provincia: string;

    @Column({length: 32})
    pais: string;

    @Column({length: 16})
    telefono: string;

    @Column()
    facebook: string;

    @Column()
    twitter: string;

    @Column()
    google: string;

    @Column()
    passwd: string;

    @Column()
    passwdResetToken: string;

    @Column("datetime")
    passwdResetExpire: Date;

    @CreateDateColumn()
    registerDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

}
