import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const districts = await prisma.district.findMany({
    orderBy: {
      name: 'asc',
    },
  })
  res.status(200).json({ districts })
}
