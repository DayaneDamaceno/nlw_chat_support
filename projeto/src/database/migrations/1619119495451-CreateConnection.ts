import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateConnection1619119495451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'connections',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                }, {
                    name: 'admin_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'socket_id',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }))
        await queryRunner.createForeignKey(
            'connections',
            new TableForeignKey({
                name: 'fk_connections',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: 'set null',
                onUpdate: 'set null'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('connections', 'fk_connections')
        return await queryRunner.dropTable('connections')
    }

}