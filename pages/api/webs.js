import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {
  
  const prisma = new PrismaClient()

  const webs = await prisma.web.findMany()

  res.status(200).json(webs)
}
