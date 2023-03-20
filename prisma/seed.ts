import { PrismaClient } from "@prisma/client";
import { webs } from "./data/webs";
import { diseñoindustrial } from "./data/industrial";
import { renders } from "./data/renders";

const prisma = new PrismaClient()

const main = async (): Promise<void> => {
    try {
        await prisma.industrial.createMany({
            data: diseñoindustrial
        })

        await prisma.render.createMany({
            data: renders
        })

        await prisma.web.createMany({
            data: webs
        })

    } catch (error) {
        console.log(error);

    }
}

main()