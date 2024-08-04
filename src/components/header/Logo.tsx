import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/img/logo-1.webp"}
        alt="Company Logo"
        width={90}
        height={90}
        className="w-20 h-auto"
        sizes="(max-width: 768px) 90px, 90px"
      />
    </Link>
  );
};

export default Logo;
