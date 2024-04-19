import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const path: string = 'img/svg/logo.svg'

  return (
    <Link href='/'>
      <Image
        src={path}
        width={154}
        height={72}
        alt="Церковь Новая Жизнь"
      />
    </Link>
  )
}

export { Logo };