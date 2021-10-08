import {MigrationInterface, QueryRunner} from "typeorm";

export class feedbackAspects1633692000258 implements MigrationInterface {
    name = 'feedbackAspects1633692000258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`CREATE TABLE "order_feedback" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "appUserId" character varying NOT NULL, "rating" integer NOT NULL, "orderId" uuid NOT NULL, "message" character varying, "aspects" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7b0f134f6a9d3b8ae0af2fd84a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_42db006205fa34327cad7b799f" ON "order_feedback" ("appUserId") `);
        await queryRunner.query(`CREATE INDEX "IDX_863ff3cbc5549e358ad9f388f3" ON "order_feedback" ("orderId") `);
        await queryRunner.query(`ALTER TABLE "order_feedback" ADD CONSTRAINT "FK_863ff3cbc5549e358ad9f388f3c" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_feedback" DROP CONSTRAINT "FK_863ff3cbc5549e358ad9f388f3c"`);
        await queryRunner.query(`DROP INDEX "IDX_863ff3cbc5549e358ad9f388f3"`);
        await queryRunner.query(`DROP INDEX "IDX_42db006205fa34327cad7b799f"`);
        await queryRunner.query(`DROP TABLE "order_feedback"`);
        await queryRunner.query(`DROP INDEX "IDX_36ee6e3a83be1e6865cd8297e0"`);
    }

}
