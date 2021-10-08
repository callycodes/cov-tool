import {MigrationInterface, QueryRunner} from "typeorm";

export class feedbackAspects1633688224036 implements MigrationInterface {
    name = 'feedbackAspects1633688224036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_feedback" ADD "aspects" text`);
        await queryRunner.query(`ALTER TABLE "order_feedback" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "order_feedback" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_feedback" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "order_feedback" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "order_feedback" DROP COLUMN "aspects"`);
    }

}
