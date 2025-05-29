import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    /* Removed the email link to put it in text.
      {
      icon: SiGmail,
      href: 'mailto:david.h.pitt@gmail.com',
    }, 
    */
    
    {
      icon: SiGithub,
      href: 'https://github.com/dhpitt',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/dhpitt/',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
