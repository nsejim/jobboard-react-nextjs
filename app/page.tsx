import Link from "next/link";

const Page = () => {

    const menuItems = [{
        name: "Jobs",
        href: "/jobs"
    }, {
        name: "Employers",
        href: "/employers"
    }, {
        name: "About",
        href: "/about"
    }, {
        name: "Contact",
        href: "/contact"
    }]


    return (
        <>
            <h1>Welcome Jobboard</h1>
            {
                menuItems.map(menu => {
                    return (
                        <h2 key={menu.href}>
                            <Link href={menu.href}>{menu.name}</Link>
                        </h2>
                    )
                })
            }
           
            
        </>
    )

}
export default Page;