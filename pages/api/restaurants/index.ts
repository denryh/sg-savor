import { NextApiRequest, NextApiResponse } from 'next'

type Restaurant = {
  id: string
  name: string
  address: string
  district: any
  ward: any
  priceRange: any
}

// TODO: database implementation needed
const restaurants = [
  {
    id: '0',
    name: 'test',
    address: '123 Test',
    district: '1',
    ward: 'Ben Nghe',
    priceRange: 1,
  },
  {
    id: '1',
    name: 'test',
    address: '456 Test',
    district: '3',
    ward: '6',
    priceRange: 2,
  },
] satisfies Restaurant[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Restaurant[]>
) {
  res.status(200).json(restaurants)
}
