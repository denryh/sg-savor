import sg from '@/pages/api/saigon/sg.json'
import slugify from 'slugify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for (const { name, pre, ward } of sg.district) {
    const { id } = await prisma.district
      .create({
        data: {
          name: name.trim(),
          sub: pre === 'Huyện',
          slug: slugify(name, {
            locale: 'vi',
            strict: true,
            trim: true,
            lower: true,
          }),
        },
      })
      .catch((reason) => reason)

    console.log('District: ', sg.name)

    for (const { name, pre } of ward) {
      const data = await prisma.ward
        .create({
          data: {
            name: name.trim(),
            sub: pre === 'Xã',
            slug: slugify(name, {
              locale: 'vi',
              strict: true,
              trim: true,
              lower: true,
            }),
            districtId: id,
          },
        })
        .catch((reason) => reason)

      console.log(`\t${JSON.stringify(data)}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
