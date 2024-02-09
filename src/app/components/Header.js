import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Nav from "@/app/components/Nav"
const Header =() =>{
    return (
      <>
      <div className={styles.main_header}>
           <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/logo1.png" alt="my logo image" width={110} height={30} />
            </Link>
         
           </div>
           <Nav/>
      </div>
      </>
    );
  };
  
  export default Header;