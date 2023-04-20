import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { distSlug: slug } = req.query

  if (Array.isArray(slug)) return

  const wards = await prisma.ward.findMany({
    where: { district: { slug } },
  })

  res.status(200).json(wards)
}
